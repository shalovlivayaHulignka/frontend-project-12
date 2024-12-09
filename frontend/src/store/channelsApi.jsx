import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { io } from 'socket.io-client';

const socket = io();

const addSocketListener = async ( socket, event, cacheDataLoaded, updateCachedData, cacheEntryRemoved ) => {
  try {
    await cacheDataLoaded;
    const handleEvent = (payload) => {
      updateCachedData((draft) => {
        draft.push(payload);
      });
    };
    socket.on(event, handleEvent);
  } catch (e) {
    console.error(e);
  }
  await cacheEntryRemoved;
  socket.off(event);
};

export const chatApi = createApi({
  reducerPath: "chatApi",
  tagTypes: ["Channel", "Message"],
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v1",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addNewUser: builder.mutation({
      query: (newUser) => ({
        url: "signup",
        method: "POST",
        body: newUser,
      }),
    }),

    getChannels: builder.query({
      query: () => "channels",
      onCacheEntryAdded: async (
        _,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) => {
        addSocketListener(
          socket,
          "newChannel",
          cacheDataLoaded,
          updateCachedData,
          cacheEntryRemoved
        );
      },
      providesTags: ["Channel"],
    }),

    addChannel: builder.mutation({
      query: (newChannel) => ({
        url: "channels",
        method: "POST",
        body: newChannel,
      }),
      invalidatesTags: ["Channel"],
    }),

    renameChannel: builder.mutation({
      query: ({ id, name }) => ({
        url: `channels/${id}`,
        method: "PATCH",
        body: { name },
      }),
      invalidatesTags: ["Channel"],
    }),

    deleteChannel: builder.mutation({
      query: ({ id }) => ({
        url: `channels/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Channel", "Message"],
    }),

    getMessages: builder.query({
      query: () => "messages",
      onCacheEntryAdded: async (
        _,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) => {
        addSocketListener(
          socket,
          "newMessage",
          cacheDataLoaded,
          updateCachedData,
          cacheEntryRemoved
        );
      },
      providesTags: ["Message"],
    }),

    addMessage: builder.mutation({
      query: (newMessage) => ({
        url: "messages",
        method: "POST",
        body: newMessage,
      }),

      invalidatesTags: ["Message"],
    }),
  }),
});

export const {
  useAddNewUserMutation,
  useGetChannelsQuery,
  useAddChannelMutation,
  useRenameChannelMutation,
  useDeleteChannelMutation,
  useGetMessagesQuery,
  useAddMessageMutation,
} = chatApi;

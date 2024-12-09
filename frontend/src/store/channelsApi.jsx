import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const channelsApi = createApi({
  reducerPath: "channelsApi",
  tagTypes: ["Channel"],
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v1/channels",
    prepareHeaders: ((headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }),
  }),
  endpoints: (builder) => ({
    getChannels: builder.query({
      query: () => "",
      providesTags: ["Channel"],
    }),
  }),
});

export const { useGetChannelsQuery } = channelsApi;

import { configureStore } from '@reduxjs/toolkit';
import { chatApi } from './channelsApi';
import activeChannelReducer from './activeChannelSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    [chatApi.reducerPath]: chatApi.reducer,
    activeChannel: activeChannelReducer,
    modal: modalReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatApi.middleware),
});

export default store;

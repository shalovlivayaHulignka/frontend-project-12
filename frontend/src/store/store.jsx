import { configureStore } from '@reduxjs/toolkit';
import { channelsApi } from './channelsApi';

const store = configureStore({
  reducer: {
    [channelsApi.reducerPath]: channelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(channelsApi.middleware),
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import { chatApi } from './chatApi.jsx';
import activeChannelReducer from './activeChannelSlice.jsx';
import modalReducer from './modalSlice.jsx';

const store = configureStore({
  reducer: {
    [chatApi.reducerPath]: chatApi.reducer,
    activeChannel: activeChannelReducer,
    modal: modalReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatApi.middleware),
});

export default store;

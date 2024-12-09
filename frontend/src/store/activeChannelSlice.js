import { createSlice } from '@reduxjs/toolkit';

const defaultChannel = {
  id: "1",
  name: "general",
  removable: false,
};

const initialState = {
  activeChannel: defaultChannel,
};

const activeChannelsSlice = createSlice({
  name: "activeChannel",
  initialState,
  reducers: {
    setActiveChannel: (state, action) => {
      state.activeChannel = action.payload;
    },
  },
});

export const { setActiveChannel } = activeChannelsSlice.actions;
export const activeChannelSelector = (state) => state.activeChannel.activeChannel;
export default activeChannelsSlice.reducer;

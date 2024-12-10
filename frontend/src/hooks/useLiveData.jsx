import { useGetChannelsQuery } from '../store/chatApi';
import defaultChannel from '../utils/defaultChannel';

const useLiveData = (channel) => {
  const { data: channels } = useGetChannelsQuery();
  const foundChannel = channels?.find((c) => c.id === channel.id);
  const activeChannel = foundChannel || defaultChannel;
  const activeChannelId = activeChannel.id;
  const activeChannelName = activeChannel.name;
  return { activeChannelId, activeChannelName };
};

export default useLiveData;

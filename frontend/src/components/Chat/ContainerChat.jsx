import ChannelsList from './ChannelList';
import MessagesContainer from './MessagesContainer';
import { useGetChannelsQuery } from '../../store/chatApi.jsx';
import Loading from '../Loading.jsx';

const Content = () => {
  const { isLoading } = useGetChannelsQuery();

  switch (isLoading) {
    case isLoading === true:
      return <Loading/>;
    default:
      return (
        <>
          <ChannelsList/>
          <MessagesContainer/>
        </>
      );
  }
};

const ContainerChat = () => (
  <div className="container h-100 my-4 overflow-hidden rounded shadow">
    <div className="row h-100 bg-white flex-md-row">
      <Content />
    </div>
  </div>
);

export default ContainerChat;

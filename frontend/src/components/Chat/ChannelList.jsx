 import ChannelItem from "./ChannelItem";
 import { useGetChannelsQuery } from "../../../store/api/channelsApi";
const Title = () => {
  return (
    <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
      <b>Каналы</b>
      <button type="button" className="p-0 text-primary btn btn-group-vertical">
        +
      </button>
    </div>
  );
};

const ChannelsList = () => {
  const { data: channels} = useGetChannelsQuery();
  console.log(useGetChannelsQuery());
  return (
    <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
      <Title />
      <ul
      id="channels-box"
      className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block"
    >{
      channels.map((channel) => <ChannelItem key={channel.id} channel={channel}/>)
    }
    </ul>
    </div>
  );
};

export default ChannelsList;

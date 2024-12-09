import ChannelItem from "./ChannelItem";
import { useGetChannelsQuery } from '../../store/channelsApi.jsx';
import Loading from '../Loading';
import DropdownMenu from './DropdownMenu';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../store/modalSlice';
import getModal from '../Modals/index.js';

const Title = ({ renderModal, closeModal, openModal, modalType }) => {
  return (
    <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
      <b>Каналы</b>
      <button
        type="button"
        className="p-0 text-primary btn btn-group-vertical"
        onClick={() => openModal("adding")}
      >
        +
      </button>
      {renderModal(modalType, closeModal)}
    </div>
  );
};

const ChannelsList = () => {
  const modalType = useSelector((state) => state.modal.modalType);
  const dispatch = useDispatch();
  const renderModal = (modalType, closeModal, channel) => {
    if (!modalType) {
      return null;
    }

    const Component = getModal(modalType);
    return <Component closeModal={closeModal} channel={channel} />;
  };
  const { data: channels, isLoading } = useGetChannelsQuery();
  const handleOpenModal = (type) => dispatch(openModal(type));
  const handleCloseModal = () => dispatch(closeModal());
  const isEditableChannel = (channel) => channel.removable;

  return (
    <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
      <Title
        renderModal={renderModal}
        modalType={modalType}
        closeModal={handleCloseModal}
        openModal={handleOpenModal}
      />
      <ul
        id="channels-box"
        className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block"
      >
        {isLoading && <Loading />}
        {channels?.map((channel) => (
          <li className="nav-item w-100" key={channel.id}>
            {isEditableChannel(channel) ? (
              <DropdownMenu
                renderModal={renderModal}
                modalType={modalType}
                closeModal={handleCloseModal}
                openModal={handleOpenModal}
                channel={channel}
              />
            ) : (
              <ChannelItem channel={channel} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelsList;

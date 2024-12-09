import { activeChannelSelector } from '../../store/activeChannelSlice';
import { useSelector } from 'react-redux';
import ChannelItem from './ChannelItem';
import { Dropdown, ButtonGroup } from 'react-bootstrap';

const DropdownMenu = ({ renderModal, closeModal, openModal, modalType, channel }) => {
  const activeChannel = useSelector(activeChannelSelector);

  return (
    <Dropdown as={ButtonGroup} className="me-2 w-100">
      <ChannelItem channel={channel} />
      <Dropdown.Toggle
        split
        variant={activeChannel.id === channel.id ? "secondary" : ""}
        id="channelDropdown"
      >
        <span className="visually-hidden">Управление каналом</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => openModal("removing")}>
          Удалить
        </Dropdown.Item>
        <Dropdown.Item onClick={() => openModal("renaming")}>
          Переименовать
        </Dropdown.Item>
        {renderModal(modalType, closeModal, channel)}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;

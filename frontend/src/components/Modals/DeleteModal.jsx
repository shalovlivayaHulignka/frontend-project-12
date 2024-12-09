import { Button, Form, Modal} from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { useDeleteChannelMutation } from '../../store/channelsApi.jsx';
import { setActiveChannel } from '../../store/activeChannelSlice';

const DeleteModal = ({ channel, closeModal }) => {
  const defaultChannel = {
    id: "1",
    name: "general",
    removable: false,
  };

  const [deleteChannel] = useDeleteChannelMutation();

  const dispatch = useDispatch();

  const handleDelete =  async (channel) => {
    try {
      await deleteChannel(channel);
      dispatch(setActiveChannel(defaultChannel));
      toast.success("Канал успешно удален");
      closeModal();
    } catch (err) {
      toast.error("Ошибка");
      throw err;
    }
  };

  return (
    <Modal show="true" onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Удалить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="lead">Уверены?</p>
        <Form.Group className="d-flex justify-content-end">
          <Button type="button" className="me-2 btn btn-secondary" onClick={closeModal}>Отменить</Button>
          <Button type="button" className="btn btn-danger" onClick={() => handleDelete(channel)}>Удалить</Button>
        </Form.Group>
      </Modal.Body>
    </Modal>
  )
};

export default DeleteModal;

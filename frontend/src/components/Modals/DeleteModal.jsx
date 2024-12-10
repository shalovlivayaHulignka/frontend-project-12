import { Button, Form, Modal} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useDeleteChannelMutation } from '../../store/chatApi.jsx';
import { setActiveChannel } from '../../store/activeChannelSlice.jsx';
import defaultChannel from '../../utils/defaultChannel';

const DeleteModal = ({ channel, closeModal }) => {
  const [deleteChannel] = useDeleteChannelMutation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleDelete =  async (channel) => {
    try {
      await deleteChannel(channel);
      dispatch(setActiveChannel(defaultChannel));
      toast.success(t("toastify.success.channel.delete"));
      closeModal();
    } catch (err) {
      toast.error("Ошибка");
      throw err;
    }
  };

  return (
    <Modal show="true" onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t("modal.delete.title")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="lead">{t("modal.delete.question")}</p>
        <Form.Group className="d-flex justify-content-end">
          <Button type="button" className="me-2 btn btn-secondary" onClick={closeModal}>
            {t("modal.delete.cancelButton")}
          </Button>
          <Button type="button" className="btn btn-danger" onClick={() => handleDelete(channel)}>
            {t("modal.delete.deleteButton")}
          </Button>
        </Form.Group>
      </Modal.Body>
    </Modal>
  )
};

export default DeleteModal;

import { Button, Form, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useDeleteChannelMutation } from '../../store/chatApi';
import { setActiveChannel } from '../../store/activeChannelSlice';
import defaultChannel from '../../utils/defaultChannel';

const DeleteModal = ({ closeModal }) => {
  const [deleteChannel] = useDeleteChannelMutation();
  const channel = useSelector((state) => state.modal.channel);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const handleDelete = async (currentChannel) => {
    try {
      await deleteChannel(currentChannel);
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
          <Button type="button" className="me-2 btn btn-secondary" onClick={closeModal}>{t("modal.delete.cancelButton")}</Button>
          <Button type="button" className="btn btn-danger" onClick={() => handleDelete(channel)}>{t("modal.delete.deleteButton")}</Button>
        </Form.Group>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;

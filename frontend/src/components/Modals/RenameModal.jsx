import { Button, Form, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';
import { channelNamesShema } from '../../utils/validate';
import { useGetChannelsQuery, useRenameChannelMutation } from '../../store/channelsApi.jsx';

const RenameModal = ({ closeModal, channel }) => {
  const { data: channels } = useGetChannelsQuery();
  const channelNames = channels?.map((channel) => channel.name) || [];
  const [renameChannel] = useRenameChannelMutation();
  const inputRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      name: channel?.name,
    },
    validationSchema: channelNamesShema(channelNames),
    onSubmit: async ({ name }) => {
      const updatedChannel = {
        id: channel.id,
        name,
      };
      try {
        await renameChannel(updatedChannel);
        toast.success("Канал успешно переименован")
        closeModal();
      } catch (err) {
        console.log(err);
      }
    },
  });

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.select();
  }, []);

  return (
    <Modal show="true" onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Переименовать канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Control
              id="renameChannel"
              name="name"
              ref={inputRef}
              data-testid="input-body"
              className="mb-2"
              onChange={formik.handleChange}
              isInvalid={formik.touched.name && formik.errors.name}
              value={formik.values.name}
            />
            <Form.Label htmlFor="renameChannel" className="visually-hidden">
              Добавить
            </Form.Label>
            {formik.touched.name && formik.errors.name && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            )}
            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                type="button"
                className="me-2"
                onClick={closeModal}
              >
                Отменить
              </Button>
              <Button variant="primary" type="submit">
                Переименовать
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RenameModal;

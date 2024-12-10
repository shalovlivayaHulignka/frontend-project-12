import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { channelNamesShema } from '../../utils/validate.jsx';
import { useGetChannelsQuery, useRenameChannelMutation } from '../../store/chatApi.jsx';
import { setActiveChannel } from '../../store/activeChannelSlice';

const RenameModal = ({ closeModal, channel }) => {
  const { data: channels } = useGetChannelsQuery();
  const channelNames = channels?.map((channel) => channel.name) || [];
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [renameChannel] = useRenameChannelMutation();
  const inputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: channel?.name,
    },
    validationSchema: channelNamesShema(channelNames, t),
    onSubmit: async ({ name }) => {
      const updatedChannel = {
        id: channel.id,
        name,
      };
      try {
        await renameChannel(updatedChannel);
        dispatch(setActiveChannel(updatedChannel));
        toast.success(t("toastify.success.channel.rename"))
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
        <Modal.Title>{t("modal.rename.title")}</Modal.Title>
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
              {t('modal.label')}
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
                {t("modal.rename.cancelButton")}
              </Button>
              <Button variant="primary" type="submit">
                {t("modal.rename.submitButton")}
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RenameModal;

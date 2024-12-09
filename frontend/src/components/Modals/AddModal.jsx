import { Button, Form, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';
import { channelNamesShema } from '../../utils/validate.jsx';
import { useGetChannelsQuery, useAddChannelMutation } from '../../store/chatApi.jsx';
import { setActiveChannel } from '../../store/activeChannelSlice.jsx';

const AddModal = ({ closeModal }) => {
  const [addChannel] = useAddChannelMutation();
  const { t } = useTranslation();
  const { data: channels } = useGetChannelsQuery();
  const channelNames = channels?.map((channel) => channel.name);
  const dispatch = useDispatch()


  const formik= useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: channelNamesShema(channelNames, t),
    onSubmit: async ({ name }) => {
      try {
        const newChannel = await addChannel({ name: name});
        dispatch(setActiveChannel(newChannel.data));
        toast.success(t("toastify.success.channel.add"));
        closeModal();
      } catch (err) {
        console.log(err);
      }
    },
  });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Modal show="true" onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t("toastify.success.channel.add")}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              id="addChannel"
              name="name"
              ref={inputRef}
              data-testid="input-body"
              className="mb-2"
              onChange={formik.handleChange}
              value={formik.values.name}
              isInvalid={formik.touched.name && formik.errors.name}
            />
            <Form.Label htmlFor="addChannel" className="visually-hidden">
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
                {t("modal.add.cancelButton")}
              </Button>
              <Button variant="primary" type="submit">
                {t("modal.add.submitButton")}
              </Button>
            </div>
          </Form.Group>
        </Modal.Body>
      </Form>
    </Modal>
  );
};

export default AddModal;

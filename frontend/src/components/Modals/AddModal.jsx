import { Button, Form, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { channelNamesShema } from '../../utils/validate';
import { useGetChannelsQuery, useAddChannelMutation } from '../../store/channelsApi.jsx';
import { setActiveChannel } from '../../store/activeChannelSlice';

const AddModal = ({ closeModal }) => {
  const [addChannel] = useAddChannelMutation();
  const { data: channels } = useGetChannelsQuery();
  const channelNames = channels?.map((channel) => channel.name);
  const dispatch = useDispatch()


  const formik= useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: channelNamesShema(channelNames),
    onSubmit: async ({ name }) => {
      try {
        const newChannel = await addChannel({ name: name});
        dispatch(setActiveChannel(newChannel.data))
        toast.success("Канал успешно добавлен")
        closeModal()
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
        <Modal.Title>Добавить канал</Modal.Title>
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
                Отменить
              </Button>
              <Button variant="primary" type="submit">
                Добавить
              </Button>
            </div>
          </Form.Group>
        </Modal.Body>
      </Form>
    </Modal>
  );
};

export default AddModal;

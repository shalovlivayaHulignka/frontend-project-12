import { Form } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import MessageInputButton from './MessageInputButton';

const schema = yup.object().shape({
  body: yup.string().trim().required(),
});

const MessagesForm = ({
  channelId,
  addMessage,
  username,
  isLoading,
  t,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      body: '',
      validationSchema: schema,
      validateOnBlur: false,
      validateOnMount: true,
    },
    onSubmit: async (body, { setFieldValue }) => {
      try {
        const newMessage = { body, channelId, username };
        await addMessage(newMessage);
        setFieldValue('body', '');
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
      className="py-1 border rounded-2"
    >
      <div className="input-group has-validation">
        <Form.Label htmlFor="body" />
        <Form.Control
          required
          id="body"
          name="body"
          aria-label={t('messageInput.label')}
          placeholder={t('messageInput.placeholder')}
          className="border-0 p-0 ps-2 form-control"
          value={formik.values.body}
          onChange={formik.handleChange}
          wfd-id="id0"
          ref={inputRef}
        />
        <button type="submit" disabled={isLoading} className="btn btn-group-vertical">
          <MessageInputButton />
          <span className="visually-hidden">{t('messageInput.submitButton')}</span>
        </button>
      </div>
    </Form>
  );
};

export default MessagesForm;

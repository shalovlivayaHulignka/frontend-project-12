import { Form } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import MessageInputButton from './MessageInputButton';

const MessagesForm = ({ channelId, addMessage, username, isLoading, t }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      body: "",
    },
    onSubmit: async (body, { setFieldValue }) => {
      try {
        const newMessage = { body, channelId, username };
        await addMessage(newMessage);
        setFieldValue("body", "");
      } catch (err) {
        console.log(err);
      }
    },
  });

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleOnEmojiClick = (emojiObject) => {
    formik.setFieldValue("body", formik.values.body + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <Form
      onSubmit={formik.handleSubmit}
      noValidate
      className="py-1 border rounded-2"
    >
      <div className="input-group has-validation">
        <button
          type="button"
          onClick={toggleEmojiPicker}
          className="btn"
        >
          :)
          <span className="visually-hidden">Добавить смайл</span>
        </button>
        <Form.Label htmlFor="body" />
        <Form.Control
          id="body"
          name="body"
          aria-label={t("messageInput.label")}
          placeholder={t("messageInput.placeholder")}
          className="border-0 p-0 ps-2 form-control"
          value={formik.values.body}
          onChange={formik.handleChange}
          wfd-id="id4"
          ref={inputRef}
        />
        <button type="submit" disabled={isLoading} className="btn btn-group-vertical">
          <MessageInputButton />
          <span className="visually-hidden">{t("messageInput.submitButton")}</span>
        </button>
      </div>
      {showEmojiPicker && (
        <EmojiContainer handleOnEmojiClick={handleOnEmojiClick} />
      )}
    </Form>
  );
};

export default MessagesForm;

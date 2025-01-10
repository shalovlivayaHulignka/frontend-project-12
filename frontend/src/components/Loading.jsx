import { Spinner } from 'react-bootstrap';

const Loading = (t) => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">{t("loading.text")}</span>
    </Spinner>
  )
};

export default Loading;

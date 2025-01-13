import { Spinner } from 'react-bootstrap';

const Loading = () => (
  <div className="h-100 d-flex justify-content-center align-items-center">
    <Spinner animation="border" variant="primary" role="status"/>
  </div>
);

export default Loading;

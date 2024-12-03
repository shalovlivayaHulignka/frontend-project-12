import { Link } from 'react-router-dom';
import './Error.css';
import notFound from '../assets/404.svg';

const Error = () => (
  <main>
    <div className="general-container text-container">
      <img className="image-svg" alt='Страница не найдена' src={notFound}></img>
      <h1>Страница не найдена</h1>
      <p>
        Но вы можете перейти
        <Link to="/"> на главную страницу</Link>
      </p>
    </div>
  </main>
);

export default Error;
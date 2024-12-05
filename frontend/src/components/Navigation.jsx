import { Link } from 'react-router-dom';
import routes from '../utils/routes.jsx';

const Navigation = () => {
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <span className="navbar-brand"> Hexlet Chat </span>
        <Link
          to={routes.loginPagePath()}
          type="button"
          className="btn btn-primary"
        >
          Выйти
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;

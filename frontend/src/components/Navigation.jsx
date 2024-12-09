import { Link } from 'react-router-dom';
import routes from '../utils/routes.jsx';
import useAuth from "../hooks/useAuth.jsx";

const Navigation = () => {
  const { loggedIn, logOut } = useAuth();
  console.log('test: ', loggedIn, logOut);
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <span className="navbar-brand"> Hexlet Chat </span>
        {loggedIn && (
          <Link
            onClick={logOut}
            to={routes.loginPagePath()}
            type="button"
            className="btn btn-primary"
          >
            Выйти
          </Link>
          )}
      </div>
    </nav>
  );
};

export default Navigation;

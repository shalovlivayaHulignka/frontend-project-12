import { Link } from 'react-router-dom';

export const HomePage = ()  => {
  return (
    <div>
      <h1>Главная страница</h1>
      <p>Добро пожаловать!</p>
      <Link to="/login">Войти</Link>
    </div>
  );
};

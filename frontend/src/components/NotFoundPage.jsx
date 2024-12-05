import { Link } from "react-router-dom";
export const NotFoundPage = () => {
  return (
    <div>
      <h1>Страница не найдена (404)</h1>
      <p>Извините, но запрошенная страница не найдена.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  )
};

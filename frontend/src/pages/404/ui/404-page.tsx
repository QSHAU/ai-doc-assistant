import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <>
      <h1>404 - страница не найдена</h1>
      <Link to="/">Вернуться на главную</Link>
    </>
  );
};

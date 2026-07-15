import { LoginForm } from "@/features/auth";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <LoginForm onSuccess={() => navigate("/documents")} />
      <Link to={"/register"}>Нет аккаунта? Зарегистрироваться</Link>
    </>
  );
};

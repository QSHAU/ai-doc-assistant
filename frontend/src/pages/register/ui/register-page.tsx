import { RegisterForm } from "@/features/auth";
import { Link, useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <RegisterForm onSuccess={() => navigate("/documents")} />
      <Link to="/login">Уже есть аккаунт? Войти</Link>
    </>
  );
};

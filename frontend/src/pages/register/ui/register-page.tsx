import { RegisterForm } from "@/features/auth";
import { Card } from "@/shared/ui";
import { Link, useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <Card title="Регистрация">
      <RegisterForm onSuccess={() => navigate("/documents")} />
      <Link className="card-link" to="/login">
        Уже есть аккаунт? Войти
      </Link>
    </Card>
  );
};

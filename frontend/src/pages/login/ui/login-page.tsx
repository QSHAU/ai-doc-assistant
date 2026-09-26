import { LoginForm } from "@/features/auth";
import { Card } from "@/shared/ui";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Card title="Вход">
      <LoginForm onSuccess={() => navigate("/documents")} />
      <Link className="card-link" to="/register">
        Нет аккаунта? Зарегистрироваться
      </Link>
    </Card>
  );
};

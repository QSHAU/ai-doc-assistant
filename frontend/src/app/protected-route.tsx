import { useUser } from "@/entities/user";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading ? (
        <span>Загрузка</span>
      ) : !user ? (
        <Navigate to="/login" replace />
      ) : (
        <Outlet />
      )}
    </>
  );
};

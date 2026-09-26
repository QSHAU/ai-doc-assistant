import { useUser } from "@/entities/user";
import { Spinner } from "@/shared/ui";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : !user ? (
        <Navigate to="/login" replace />
      ) : (
        <Outlet />
      )}
    </>
  );
};

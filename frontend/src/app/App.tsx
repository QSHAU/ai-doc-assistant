import { UserProvider } from "@/entities/user";
import { DocumentsPage } from "@/pages/documents";
import { LoginPage } from "@/pages/login";
import { RegisterPage } from "@/pages/register";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import { Page404 } from "@/pages/404";

export const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/documents" element={<DocumentsPage />} />
          </Route>
          <Route path="/" element={<Navigate to="/documents" replace />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

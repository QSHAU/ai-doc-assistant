import { useState } from "react";
import { authApi } from "../api/auth-api";
import type { AuthStatus } from "../types/types";
import axios from "axios";
import { useFinishAuth } from "./use-finish-auth";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const finishAuth = useFinishAuth();

  const login = async (
    email: string,
    password: string,
  ): Promise<AuthStatus> => {
    setIsLoading(true);
    setError(null);
    try {
      // Логинимся и получаем accessToken
      const data = await authApi.login(email, password);
      await finishAuth(data);

      return "success";
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? "Ошибка сети");
      } else {
        setError("Что-то пошло не так");
      }
      return "error";
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
}

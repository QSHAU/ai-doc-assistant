import { useState } from "react";
import type { AuthStatus } from "../types/types";
import { authApi } from "../api/auth-api";
import axios from "axios";
import { useFinishAuth } from "./use-finish-auth";

export function useRegister() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const finishAuth = useFinishAuth();

  const register = async (
    email: string,
    password: string,
    name: string | null = null,
  ): Promise<AuthStatus> => {
    setError(null);
    setIsLoading(true);

    try {
      const data = await authApi.register(email, password, name);
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

  return { register, isLoading, error };
}

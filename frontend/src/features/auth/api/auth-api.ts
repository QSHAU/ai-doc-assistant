import { apiClient } from "@/shared/api";
import type { AuthResponse } from "../types/types";

export const authApi = {
  async login(email: string, password: string): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>("/auth/login", {
      email,
      password,
    });
    return data;
  },

  async register(
    email: string,
    password: string,
    name: string | null = null,
  ): Promise<AuthResponse> {
    const { data } = await apiClient.post<AuthResponse>("/auth/register", {
      email,
      password,
      name,
    });
    return data;
  },
};

import { apiClient } from "@/shared/api";
import type { User } from "../model/types";

export const userApi = {
  async getMe(): Promise<User> {
    const { data } = await apiClient.get<User>("/users/me");
    return data;
  },
};

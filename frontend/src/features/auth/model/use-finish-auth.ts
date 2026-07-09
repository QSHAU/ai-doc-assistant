import { userApi, useUser } from "@/entities/user";
import type { AuthResponse } from "../types/types";

export function useFinishAuth() {
  const { setUser } = useUser();
  const finishAuth = async (data: AuthResponse): Promise<void> => {
    localStorage.setItem("accessToken", data.accessToken);

    const user = await userApi.getMe();
    setUser(user);
  };

  return finishAuth;
}

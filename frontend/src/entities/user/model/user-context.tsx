import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { userApi } from "../api/user-api";
import { UserContext } from "./context";
import type { User } from "./types";

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // При старте приложения: если токен есть — узнаём, кто мы.
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setIsLoading(false);
      return;
    }
    userApi
      .getMe()
      .then(setUser)
      .catch(() => localStorage.removeItem("accessToken")) // токен протух — выкидываем
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

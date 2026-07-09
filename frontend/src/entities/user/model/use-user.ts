import { useContext } from "react";
import { UserContext } from "./context";

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx)
    throw new Error("useUser можно вызывать только внутри <UserProvider>");
  return ctx;
}

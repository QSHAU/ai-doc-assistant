import { createContext } from "react";
import type { User } from "./types";

export type UserContextValue = {
  user: User | null; // null = не залогинен
  isLoading: boolean; // true, пока выясняем «кто я» при старте
  setUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextValue | null>(null);

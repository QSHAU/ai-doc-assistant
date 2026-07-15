export interface AuthResponse {
  accessToken: string;
}

export type AuthStatus = "success" | "error";

export type FormProps = {
  onSuccess: () => void;
};

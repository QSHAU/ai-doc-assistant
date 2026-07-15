import type React from "react";
import type { FormProps } from "../types/types";
import { useLogin } from "../model/use-login";
import { useState } from "react";

export const LoginForm = ({ onSuccess }: FormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const submitForm: React.SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const loginResult = await login(email, password);
    if (loginResult === "success") onSuccess();
  };
  return (
    <>
      <form className="loginForm" onSubmit={submitForm}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            required
          />
        </label>
        <button className="loginForm__btn" type="submit" disabled={isLoading}>
          {isLoading ? "Входим" : "Войти"}
        </button>
      </form>
      {error && <span className="error">{error}</span>}
    </>
  );
};

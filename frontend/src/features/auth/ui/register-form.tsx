import type React from "react";
import type { FormProps } from "../types/types";
import { useRegister } from "../model/use-register";
import { useState } from "react";
import "./auth-form.css";

export const RegisterForm = ({ onSuccess }: FormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { register, error, isLoading } = useRegister();
  const submitForm: React.SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const registerResult = await register(email, password, trimmedName || null);
    if (registerResult === "success") onSuccess();
  };
  return (
    <form className="authForm" onSubmit={submitForm}>
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
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          minLength={2}
        />
      </label>
      {error && <span className="authForm-error">{error}</span>}
      <button className="authForm-btn" type="submit" disabled={isLoading}>
        {isLoading ? "Регистрируемся" : "Регистрация"}
      </button>
    </form>
  );
};

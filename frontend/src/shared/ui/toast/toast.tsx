import { useEffect } from "react";
import "./toast.css";

interface IToastProps {
  id: string;
  message: string;
  onClose: (id: string) => void;
  variant: "success" | "error";
}

export const Toast = ({ id, message, onClose, variant }: IToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 4000);
    return () => clearTimeout(timer);
  }, [id, message, onClose]);
  return (
    <div
      className={`toast toast--${variant}`}
      role={variant === "error" ? "alert" : "status"}
    >
      <button
        className="toast-close"
        type="button"
        onClick={() => onClose(id)}
        aria-label="Закрыть уведомление"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      </button>
      <span className="toast-text">{message}</span>
    </div>
  );
};

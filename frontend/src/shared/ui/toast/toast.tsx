import { useEffect } from "react";

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
  }, [message, onClose]);
  return (
    <div className={`toast ${variant === "error" ? "toast-error" : ""}`}>
      <button className="toast-close" type="button" onClick={() => onClose(id)}>
        x
      </button>
      <span className="toast-text">{message}</span>
    </div>
  );
};

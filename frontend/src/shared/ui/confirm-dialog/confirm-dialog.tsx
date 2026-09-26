import { useEffect, useRef } from "react";
import "./confirm-dialog.css";

type ConfirmDialogProp = {
  open: boolean;
  text: string;
  onConfirm: () => void;
  onClose: () => void;
};

export const ConfirmDialog = ({
  open,
  text,
  onConfirm,
  onClose,
}: ConfirmDialogProp) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOutclick: React.MouseEventHandler<HTMLDialogElement> = (e) => {
    if (e.target === dialogRef.current) {
      dialogRef.current.close();
    }
  };

  useEffect(() => {
    const node = dialogRef.current;
    if (!node) return;

    if (open && !node.open) node.showModal();
    if (!open && node.open) node.close();
  }, [open]);

  useEffect(() => {
    const node = dialogRef.current;
    if (!node) return;

    node.addEventListener("close", onClose);
    return () => node.removeEventListener("close", onClose);
  }, [onClose]);

  return (
    <dialog className="confirm-dialog" ref={dialogRef} onClick={handleOutclick}>
      <button
        className="confirm-dialog-close"
        onClick={onClose}
        aria-label="Закрыть"
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
          <path d="M18 6 6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
      <h3 className="confirm-dialog-title">{text}</h3>
      <div className="confirm-dialog-wrapper">
        <button className="confirm-dialog-yes" onClick={onConfirm}>
          Yes
        </button>
        <button className="confirm-dialog-no" onClick={onClose}>
          No
        </button>
      </div>
    </dialog>
  );
};

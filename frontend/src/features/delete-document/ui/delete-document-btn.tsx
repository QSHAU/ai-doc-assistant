import { useState } from "react";
import { useDeleteDocument } from "../model/use-delete-document";
import "./delete-document-btn.css";
import { ConfirmDialog } from "@/shared/ui";

export type THandleDeleteDocument = {
  documentId: string;
  onDeleted: () => void;
};

export const DeleteDocumentBtn = ({
  documentId,
  onDeleted,
}: THandleDeleteDocument) => {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteDoc, isLoading, error } = useDeleteDocument();

  const text = "Are you sure?";

  const onConfirm = async () => {
    setIsOpen(false);
    const deleteStatus = await deleteDoc(documentId);
    if (deleteStatus === "success") {
      onDeleted();
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="delete-document-btn__wrapper">
      <button
        className="delete-document-btn"
        disabled={isLoading}
        onClick={() => setIsOpen(true)}
        aria-label="Удалить документ"
        title="Удалить документ"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 6h18" />
          <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
          <path d="M10 11v6" />
          <path d="M14 11v6" />
        </svg>
      </button>
      {error && <span className="delete-document-error">{error}</span>}
      {isOpen && (
        <ConfirmDialog
          open={isOpen}
          text={text}
          onConfirm={onConfirm}
          onClose={onClose}
        />
      )}
    </div>
  );
};

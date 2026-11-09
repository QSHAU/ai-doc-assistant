import { ConfirmDialog, Toast } from "@/shared/ui";
import { useState } from "react";
import { useBulkDeleteDocuments } from "../model/use-bulk-delete-documents";
import { useToast } from "@/shared/ui/toast/model/use-toast";
import "./bulk-delete-documents-btn.css";

export const BulkDeleteDocumentsBtn = ({
  documentIds,
  onDeleted,
  isNotActive,
}: {
  documentIds: string[];
  onDeleted: () => void;
  isNotActive: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toastList, addToast, removeToast } = useToast();
  const { bulkDeleteDocs, isLoading, error } = useBulkDeleteDocuments();

  const text = `Удалить ${documentIds.length} документов?`;
  const bulkDeteleText = (returnedCount: number, sendedCount: number) => {
    return returnedCount < sendedCount
      ? ". Остальные уже удалены или недоступны"
      : "";
  };
  const onConfirm = async () => {
    setIsOpen(false);
    const bulkDeleteInfo = await bulkDeleteDocs(documentIds);
    if (bulkDeleteInfo.status === "success") {
      onDeleted();
      addToast(
        `Удалено ${bulkDeleteInfo.count} из ${documentIds.length}${bulkDeteleText(bulkDeleteInfo.count, documentIds.length)}`,
        "success",
      );
    } else {
      addToast("Произошла какая-то ошибка", "error");
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="bulk-delete-toolbar" aria-busy={isLoading}>
        <span className="bulk-delete-toolbar__summary" aria-live="polite">
          <span className="bulk-delete-toolbar__count">
            {documentIds.length}
          </span>
          выбрано для удаления
        </span>
        <button
          className="bulk-delete-btn"
          type="button"
          onClick={() => setIsOpen(true)}
          disabled={isLoading || isNotActive}
          aria-label="Удалить документы"
          title="Удалить документы"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 6h18M8 6V4h8v2M5 6l1 14h12l1-14M10 10v7M14 10v7" />
          </svg>
          {isLoading ? "Удаление…" : "Удалить выбранные"}
        </button>
        {error && (
          <span className="bulk-delete-error" role="alert">
            {error}
          </span>
        )}
      </div>
      {isOpen && (
        <ConfirmDialog
          open={isOpen}
          text={text}
          onConfirm={onConfirm}
          onClose={onClose}
        />
      )}
      <div className="toast-list" role="region" aria-label="Уведомления">
        {toastList.map((toast) => {
          return (
            <Toast
              key={toast.id}
              id={toast.id}
              message={toast.message}
              onClose={removeToast}
              variant={toast.variant}
            />
          );
        })}
      </div>
    </>
  );
};

import { ConfirmDialog, Toast } from "@/shared/ui";
import { useState } from "react";
import { useBulkDeleteDocuments } from "../model/use-bulk-delete-documents";
import { useToast } from "@/shared/ui/toast/model/use-toast";

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
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        disabled={isLoading || isNotActive}
        aria-label="Удалить документы"
        title="Удалить документы"
      >
        Удалить файлы
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
    </>
  );
};

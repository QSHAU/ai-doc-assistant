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
  const [deleteStatus, setDeleteStatus] = useState<"success" | "error">(
    "success",
  );
  const { toastList, addToast, removeToast } = useToast();
  const { bulkDeleteDocs, isLoading, error } = useBulkDeleteDocuments();

  const text = `Удалить ${documentIds.length} документов?`;
  const onConfirm = async () => {
    setIsOpen(false);
    const bulkDeleteStatus = await bulkDeleteDocs(documentIds);
    if (bulkDeleteStatus.status === "success") {
      onDeleted();
      documentIds.map((doc) => {
        addToast(doc, "success");
      });
    } else {
      documentIds.map((doc) => {
        addToast(doc, "error");
      });
    }

    setDeleteStatus(bulkDeleteStatus.status);
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
      {toastList && (
        <Toast
          message={deletedDocsText}
          onClose={removeToast}
          variant={deleteStatus}
        />
      )}
    </>
  );
};

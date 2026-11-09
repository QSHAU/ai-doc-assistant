import { DocumentsList, useDocuments } from "@/entities/document";
import { useUser } from "@/entities/user";
import "./documents-page.css";
import { UploadDocumentForm } from "@/features/upload-document";
import { DeleteDocumentBtn } from "@/features/delete-document";
import { Pagination } from "@/shared/ui";
import { useState } from "react";
import { BulkDeleteDocumentsBtn } from "@/features/bulk-delete-documents";

export const DocumentsPage = () => {
  const { user, setUser } = useUser();
  const [documentIds, setDocumentIds] = useState<string[]>([]);
  const {
    refetch,
    documents,
    isLoading,
    error,
    goToPage,
    changeLimit,
    currentLimit,
    currentPage,
    totalPages,
  } = useDocuments();

  const isNotActive = documentIds.length === 0;

  const handleClick = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  const toggleSelect = (id: string) => {
    setDocumentIds((prevState) =>
      prevState.includes(id)
        ? prevState.filter((docId) => docId !== id)
        : [...prevState, id],
    );
  };

  const onBulkDeleted = () => {
    setDocumentIds([]);
    refetch();
  };

  const onChangePage = (page: number) => {
    setDocumentIds([]);
    goToPage(page);
  };

  const onChangeLimit = (limit: number) => {
    setDocumentIds([]);
    changeLimit(limit);
  };

  const onDeletedDoc = (id: string) => {
    setDocumentIds((prevState) => prevState.filter((docId) => docId !== id));
    refetch();
  };

  return (
    <div className="document-page">
      <div className="document-page-header">
        <span className="document-page-greeting">
          Привет {user?.name || user?.email}
        </span>
        <button className="document-page-logout" onClick={handleClick}>
          Выйти
        </button>
      </div>

      <UploadDocumentForm onUploaded={refetch} />
      <BulkDeleteDocumentsBtn
        documentIds={documentIds}
        onDeleted={onBulkDeleted}
        isNotActive={isNotActive}
      />

      <DocumentsList
        documents={documents}
        isLoading={isLoading}
        error={error}
        choosedDocs={documentIds}
        renderActions={(id) => (
          <DeleteDocumentBtn
            documentId={id}
            onDeleted={() => onDeletedDoc(id)}
          />
        )}
        onToggleSelect={toggleSelect}
      />
      <Pagination
        page={currentPage}
        totalPages={totalPages}
        isLoading={isLoading}
        handlePageChange={onChangePage}
        handleChangeLimit={onChangeLimit}
        currentLimit={currentLimit}
      />
    </div>
  );
};

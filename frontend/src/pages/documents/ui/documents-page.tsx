import { DocumentsList, useDocuments } from "@/entities/document";
import { useUser } from "@/entities/user";
import "./documents-page.css";
import { UploadDocumentForm } from "@/features/upload-document";
import { DeleteDocumentBtn } from "@/features/delete-document";
import { Pagination } from "@/shared/ui";

export const DocumentsPage = () => {
  const { user, setUser } = useUser();
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

  const handleClick = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
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

      <DocumentsList
        documents={documents}
        isLoading={isLoading}
        error={error}
        renderActions={(id) => (
          <DeleteDocumentBtn documentId={id} onDeleted={refetch} />
        )}
      />
      <Pagination
        page={currentPage}
        totalPages={totalPages}
        isLoading={isLoading}
        handlePageChange={goToPage}
        handleChangeLimit={changeLimit}
        currentLimit={currentLimit}
      />
    </div>
  );
};

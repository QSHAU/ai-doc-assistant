import { DocumentItem } from "./document-item";
import { Spinner } from "@/shared/ui";
import type { Document } from "../model/types";
import type { ReactNode } from "react";

type DocumentListProps = {
  documents: Document[];
  isLoading: boolean;
  error: string | null;
  renderActions?: (id: string) => ReactNode;
};

export function DocumentsList({
  documents,
  isLoading,
  error,
  renderActions,
}: DocumentListProps) {
  if (isLoading) return <Spinner />;
  if (error) return <div className="document-page-error">{error}</div>;
  if (!documents.length)
    return (
      <span className="document-page-empty">
        Список документов пуст. Станьте первым!
      </span>
    );
  return (
    <div className="documents-list">
      {documents.map((document) => (
        <DocumentItem
          key={document.id}
          item={document}
          actions={renderActions?.(document.id)}
        />
      ))}
    </div>
  );
}

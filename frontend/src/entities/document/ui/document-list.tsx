import { DocumentItem } from "./document-item";
import { Spinner } from "@/shared/ui";
import type { Document } from "../model/types";
import type { ReactNode } from "react";

type DocumentListProps = {
  documents: Document[];
  isLoading: boolean;
  error: string | null;
  choosedDocs?: string[];
  renderActions?: (id: string) => ReactNode;
  onToggleSelect?: (id: string) => void;
};

export function DocumentsList({
  documents,
  isLoading,
  // error,
  choosedDocs,
  renderActions,
  onToggleSelect,
}: DocumentListProps) {
  if (isLoading) return <Spinner />;
  // if (error) return <div className="document-page-error">{error}</div>;
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
          isChecked={choosedDocs?.includes(document.id)}
          select={() => onToggleSelect?.(document.id)}
        />
      ))}
    </div>
  );
}

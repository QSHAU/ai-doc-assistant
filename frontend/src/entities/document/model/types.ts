export type DocumentStatus = "PENDING" | "PROCESSING" | "READY" | "FAILED";

export interface Document {
  id: string;
  filename: string;
  mimeType: string;
  status: DocumentStatus;
  failureReason: string | null;
  size: number;
  createdAt: string;
}

export interface DocumentsPage {
  items: Document[];
  total: number;
  page: number;
  limit: number;
}

export interface ListDocumentsQueryDto {
  page: number;
  limit: number;
}

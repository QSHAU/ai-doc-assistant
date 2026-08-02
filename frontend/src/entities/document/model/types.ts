export type DocumentStatus = "PENDING" | "PROCESSING" | "READY" | "FAILED";
export interface Document {
  id: string;
  filename: string;
  mimeType: string;
  status: DocumentStatus;
  createdAt: string;
}

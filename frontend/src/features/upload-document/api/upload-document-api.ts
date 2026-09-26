import { apiClient } from "@/shared/api";
import type { Document } from "@/entities/document";

export const uploadDocumentsApi = {
  async upload(file: File): Promise<Document> {
    const formData = new FormData();
    formData.append("file", file);

    const { data } = await apiClient.post<Document>("/documents", formData);
    return data;
  },
};

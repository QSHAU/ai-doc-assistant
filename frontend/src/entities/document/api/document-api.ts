import { apiClient } from "@/shared/api";
import type { Document } from "../model/types";

export const documentsApi = {
  async getDocuments(): Promise<Document> {
    const { data } = await apiClient.get<Document>("/documents");
    return data;
  },
};

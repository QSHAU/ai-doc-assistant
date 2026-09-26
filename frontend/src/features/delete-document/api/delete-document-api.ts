import { apiClient } from "@/shared/api";
import type { Document } from "@/entities/document";

export const deleteDocumentsApi = {
  async delete(documentId: string): Promise<Document> {
    const { data } = await apiClient.delete<Document>(
      `/documents/${documentId}`,
    );
    return data;
  },
};

import { apiClient } from "@/shared/api";
import type { DocumentsPage, ListDocumentsQueryDto } from "../model/types";

export const documentApi = {
  async getDocuments({
    page,
    limit,
  }: ListDocumentsQueryDto): Promise<DocumentsPage> {
    const { data } = await apiClient.get<DocumentsPage>("/documents", {
      params: { page, limit },
    });
    return data;
  },
};

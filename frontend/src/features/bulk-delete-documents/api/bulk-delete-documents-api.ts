import { apiClient } from "@/shared/api";

interface IBulkDocumentsDelete {
  deletedIds: string[];
}

export const bulkDeleteApi = {
  async bulkDelete(documentsIds: string[]): Promise<IBulkDocumentsDelete> {
    const { data } = await apiClient.post<IBulkDocumentsDelete>(
      "/documents/bulk-delete",
      {
        ids: documentsIds,
      },
    );

    return data;
  },
};

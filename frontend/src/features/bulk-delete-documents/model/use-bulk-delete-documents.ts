import { useState } from "react";
import { bulkDeleteApi } from "../api/bulk-delete-documents-api";
import axios from "axios";

type TBulkDeleteDocsStatus = "success" | "error";

interface TBulkDeleteDocsInfo {
  count: number;
  status: TBulkDeleteDocsStatus;
}

export function useBulkDeleteDocuments() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [deletedDocsCount, setDeletedDocsCount] = useState(0);

  const bulkDeleteDocs = async (
    documentsIds: string[],
  ): Promise<TBulkDeleteDocsInfo> => {
    try {
      setIsLoading(true);
      setError(null);
      const deletedDocs = await bulkDeleteApi.bulkDelete(documentsIds);
      setDeletedDocsCount(deletedDocs.deletedIds.length);
      return {
        count: deletedDocsCount,
        status: "success",
      };
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err?.response?.data?.message ?? "Ошибка сети");
      } else {
        setError("Что-то пошло не так");
      }
      return {
        count: deletedDocsCount,
        status: "error",
      };
    } finally {
      setIsLoading(false);
    }
  };

  return { bulkDeleteDocs, isLoading, error };
}

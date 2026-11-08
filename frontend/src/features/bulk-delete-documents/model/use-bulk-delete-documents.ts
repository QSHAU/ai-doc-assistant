import { useState } from "react";
import { bulkDeleteApi } from "../api/bulk-delete-documents-api";
import axios from "axios";

type TBulkDeleteDocsInfo =
  | { status: "success"; count: number }
  | { status: "error" };

export function useBulkDeleteDocuments() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const bulkDeleteDocs = async (
    documentsIds: string[],
  ): Promise<TBulkDeleteDocsInfo> => {
    try {
      setIsLoading(true);
      setError(null);
      const deletedDocs = await bulkDeleteApi.bulkDelete(documentsIds);

      return {
        count: deletedDocs.deletedIds.length,
        status: "success",
      };
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err?.response?.data?.message ?? "Ошибка сети");
      } else {
        setError("Что-то пошло не так");
      }
      return {
        status: "error",
      };
    } finally {
      setIsLoading(false);
    }
  };

  return { bulkDeleteDocs, isLoading, error };
}

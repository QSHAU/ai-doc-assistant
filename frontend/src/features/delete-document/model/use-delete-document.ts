import { useState } from "react";
import { deleteDocumentsApi } from "../api/delete-document-api";
import axios from "axios";

type DeleteStatus = "success" | "error";

export function useDeleteDocument() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteDoc = async (documentId: string): Promise<DeleteStatus> => {
    setIsLoading(true);
    setError(null);

    try {
      await deleteDocumentsApi.delete(documentId);
      return "success";
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err?.response?.data?.message ?? "Ошибка сети");
      } else {
        setError("Что-то пошло не так");
      }
      return "error";
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteDoc, isLoading, error };
}

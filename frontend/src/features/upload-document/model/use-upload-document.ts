import { useState } from "react";
import axios from "axios";
import { uploadDocumentsApi } from "../api/upload-document-api";
import type { UploadStatus } from "../types/types";

export function useUploadDocument() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const upload = async (file: File): Promise<UploadStatus> => {
    setIsLoading(true);
    setError(null);
    try {
      await uploadDocumentsApi.upload(file);
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

  return { upload, isLoading, error };
}

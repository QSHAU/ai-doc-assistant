import { useCallback, useEffect, useState } from "react";
import type { Document } from "./types";
import { documentApi } from "../api/document-api";
import axios from "axios";

export function useDocuments() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentLimit, setCurrentLimit] = useState<number>(10);
  const [currentTotal, setCurrentTotal] = useState<number>(0);

  const totalPages = Math.ceil(currentTotal / currentLimit);
  const goToPage = (page: number) => {
    if (!currentTotal) {
      setCurrentPage(1);
      return;
    }

    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const changeLimit = (limit: number) => {
    if (limit >= 1 && limit <= 20) {
      setCurrentLimit(limit);
      setCurrentPage(1);
    }
  };

  const refetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { items, total } = await documentApi.getDocuments({
        page: currentPage,
        limit: currentLimit,
      });
      setDocuments(items);
      setCurrentTotal(total);
      if (currentPage > Math.ceil(total / currentLimit)) {
        setCurrentPage(Math.max(1, Math.ceil(total / currentLimit)));
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? "Ошибка сети");
      } else {
        setError("Что-то пошло не так");
      }
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, currentLimit]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return {
    refetch,
    isLoading,
    error,
    documents,
    goToPage,
    changeLimit,
    totalPages,
    currentPage,
    currentLimit,
    currentTotal,
  };
}

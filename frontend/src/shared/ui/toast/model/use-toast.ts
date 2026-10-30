import { useCallback, useState } from "react";
import { type TToastType } from "../type/toast";

export const useToast = () => {
  const [toastList, setToastList] = useState<TToastType[]>([]);
  const addToast = (message: string, variant: TToastType["variant"]) => {
    const id = crypto.randomUUID();
    setToastList((prevState) => [...prevState, { id, message, variant }]);
  };

  const removeToast = useCallback((id: string) => {
    setToastList((prevState) => prevState.filter((toast) => toast.id !== id));
  }, []);

  return { toastList, addToast, removeToast };
};

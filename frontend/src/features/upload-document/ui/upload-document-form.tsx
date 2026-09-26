import { useState } from "react";
import { useUploadDocument } from "../model/use-upload-document";
import "./upload-form.css";

type UploadDocumentFormProps = {
  onUploaded: () => void;
};

export const UploadDocumentForm = ({ onUploaded }: UploadDocumentFormProps) => {
  const [file, setFile] = useState<File | null>(null);

  const { upload, isLoading, error } = useUploadDocument();

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (file) {
      const result = await upload(file);

      if (result === "success") {
        onUploaded();
        setFile(null);
        e.target.reset();
      }
    }
  };
  return (
    <form
      className="upload-form"
      onSubmit={handleSubmit}
      data-loading={isLoading}
    >
      <input
        type="file"
        accept=".pdf,.txt"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />
      <button type="submit" disabled={!file || isLoading}>
        Отправить
      </button>
      {error && <span className="upload-error">{error}</span>}
    </form>
  );
};

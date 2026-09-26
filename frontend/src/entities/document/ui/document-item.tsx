import type { Document } from "../model/types";
import "./document-item.css";
import type { ReactNode } from "react";

type DocumentItemProps = {
  item: Document;
  actions?: ReactNode;
};

export const DocumentItem = ({ item, actions }: DocumentItemProps) => {
  const { filename, status, createdAt, failureReason } = item;
  const time = new Date(createdAt);
  return (
    <div className="documentItem">
      <div className="documentItem-left">
        <svg
          className="documentItem-icon"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
          <path d="M14 2v5h5" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
        </svg>
        <div className="documentItem-wrapper">
          <span className="documentItem-name">{filename}</span>
          <span className="documentItem-time">{time.toLocaleString()}</span>
          {failureReason && (
            <span className="documentItem-error">{failureReason}</span>
          )}
        </div>
      </div>
      <div className="documentItem-right">
        <span className="documentItem-status" data-status={status}>
          {status}
        </span>
        {actions}
      </div>
    </div>
  );
};

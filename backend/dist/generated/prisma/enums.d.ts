export declare const DocumentStatus: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly READY: "READY";
    readonly FAILED: "FAILED";
};
export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus];
export declare const MessageRole: {
    readonly USER: "USER";
    readonly ASSISTANT: "ASSISTANT";
};
export type MessageRole = (typeof MessageRole)[keyof typeof MessageRole];

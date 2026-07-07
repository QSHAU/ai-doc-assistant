import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$DocumentPayload>;
export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null;
    _min: DocumentMinAggregateOutputType | null;
    _max: DocumentMaxAggregateOutputType | null;
};
export type DocumentMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    filename: string | null;
    mimeType: string | null;
    status: $Enums.DocumentStatus | null;
    failureReason: string | null;
    createdAt: Date | null;
};
export type DocumentMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    filename: string | null;
    mimeType: string | null;
    status: $Enums.DocumentStatus | null;
    failureReason: string | null;
    createdAt: Date | null;
};
export type DocumentCountAggregateOutputType = {
    id: number;
    userId: number;
    filename: number;
    mimeType: number;
    status: number;
    failureReason: number;
    createdAt: number;
    _all: number;
};
export type DocumentMinAggregateInputType = {
    id?: true;
    userId?: true;
    filename?: true;
    mimeType?: true;
    status?: true;
    failureReason?: true;
    createdAt?: true;
};
export type DocumentMaxAggregateInputType = {
    id?: true;
    userId?: true;
    filename?: true;
    mimeType?: true;
    status?: true;
    failureReason?: true;
    createdAt?: true;
};
export type DocumentCountAggregateInputType = {
    id?: true;
    userId?: true;
    filename?: true;
    mimeType?: true;
    status?: true;
    failureReason?: true;
    createdAt?: true;
    _all?: true;
};
export type DocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DocumentCountAggregateInputType;
    _min?: DocumentMinAggregateInputType;
    _max?: DocumentMaxAggregateInputType;
};
export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocument[P]> : Prisma.GetScalarType<T[P], AggregateDocument[P]>;
};
export type DocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithAggregationInput | Prisma.DocumentOrderByWithAggregationInput[];
    by: Prisma.DocumentScalarFieldEnum[] | Prisma.DocumentScalarFieldEnum;
    having?: Prisma.DocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentCountAggregateInputType | true;
    _min?: DocumentMinAggregateInputType;
    _max?: DocumentMaxAggregateInputType;
};
export type DocumentGroupByOutputType = {
    id: string;
    userId: string;
    filename: string;
    mimeType: string;
    status: $Enums.DocumentStatus;
    failureReason: string | null;
    createdAt: Date;
    _count: DocumentCountAggregateOutputType | null;
    _min: DocumentMinAggregateOutputType | null;
    _max: DocumentMaxAggregateOutputType | null;
};
export type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocumentGroupByOutputType[P]>;
}>>;
export type DocumentWhereInput = {
    AND?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    OR?: Prisma.DocumentWhereInput[];
    NOT?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    id?: Prisma.StringFilter<"Document"> | string;
    userId?: Prisma.StringFilter<"Document"> | string;
    filename?: Prisma.StringFilter<"Document"> | string;
    mimeType?: Prisma.StringFilter<"Document"> | string;
    status?: Prisma.EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus;
    failureReason?: Prisma.StringNullableFilter<"Document"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    chunks?: Prisma.DocumentChunkListRelationFilter;
    conversations?: Prisma.ConversationListRelationFilter;
};
export type DocumentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    failureReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    chunks?: Prisma.DocumentChunkOrderByRelationAggregateInput;
    conversations?: Prisma.ConversationOrderByRelationAggregateInput;
};
export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    OR?: Prisma.DocumentWhereInput[];
    NOT?: Prisma.DocumentWhereInput | Prisma.DocumentWhereInput[];
    userId?: Prisma.StringFilter<"Document"> | string;
    filename?: Prisma.StringFilter<"Document"> | string;
    mimeType?: Prisma.StringFilter<"Document"> | string;
    status?: Prisma.EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus;
    failureReason?: Prisma.StringNullableFilter<"Document"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    chunks?: Prisma.DocumentChunkListRelationFilter;
    conversations?: Prisma.ConversationListRelationFilter;
}, "id">;
export type DocumentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    failureReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DocumentCountOrderByAggregateInput;
    _max?: Prisma.DocumentMaxOrderByAggregateInput;
    _min?: Prisma.DocumentMinOrderByAggregateInput;
};
export type DocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocumentScalarWhereWithAggregatesInput | Prisma.DocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocumentScalarWhereWithAggregatesInput | Prisma.DocumentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    filename?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    mimeType?: Prisma.StringWithAggregatesFilter<"Document"> | string;
    status?: Prisma.EnumDocumentStatusWithAggregatesFilter<"Document"> | $Enums.DocumentStatus;
    failureReason?: Prisma.StringNullableWithAggregatesFilter<"Document"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Document"> | Date | string;
};
export type DocumentCreateInput = {
    id?: string;
    filename: string;
    mimeType: string;
    status?: $Enums.DocumentStatus;
    failureReason?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDocumentsInput;
    chunks?: Prisma.DocumentChunkCreateNestedManyWithoutDocumentInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutDocumentInput;
};
export type DocumentUncheckedCreateInput = {
    id?: string;
    userId: string;
    filename: string;
    mimeType: string;
    status?: $Enums.DocumentStatus;
    failureReason?: string | null;
    createdAt?: Date | string;
    chunks?: Prisma.DocumentChunkUncheckedCreateNestedManyWithoutDocumentInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutDocumentInput;
};
export type DocumentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDocumentsNestedInput;
    chunks?: Prisma.DocumentChunkUpdateManyWithoutDocumentNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutDocumentNestedInput;
};
export type DocumentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chunks?: Prisma.DocumentChunkUncheckedUpdateManyWithoutDocumentNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutDocumentNestedInput;
};
export type DocumentCreateManyInput = {
    id?: string;
    userId: string;
    filename: string;
    mimeType: string;
    status?: $Enums.DocumentStatus;
    failureReason?: string | null;
    createdAt?: Date | string;
};
export type DocumentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentListRelationFilter = {
    every?: Prisma.DocumentWhereInput;
    some?: Prisma.DocumentWhereInput;
    none?: Prisma.DocumentWhereInput;
};
export type DocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DocumentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    failureReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DocumentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    failureReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DocumentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    failureReason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DocumentScalarRelationFilter = {
    is?: Prisma.DocumentWhereInput;
    isNot?: Prisma.DocumentWhereInput;
};
export type DocumentCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutUserInput, Prisma.DocumentUncheckedCreateWithoutUserInput> | Prisma.DocumentCreateWithoutUserInput[] | Prisma.DocumentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutUserInput | Prisma.DocumentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.DocumentCreateManyUserInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutUserInput, Prisma.DocumentUncheckedCreateWithoutUserInput> | Prisma.DocumentCreateWithoutUserInput[] | Prisma.DocumentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutUserInput | Prisma.DocumentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.DocumentCreateManyUserInputEnvelope;
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
};
export type DocumentUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutUserInput, Prisma.DocumentUncheckedCreateWithoutUserInput> | Prisma.DocumentCreateWithoutUserInput[] | Prisma.DocumentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutUserInput | Prisma.DocumentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutUserInput | Prisma.DocumentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.DocumentCreateManyUserInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutUserInput | Prisma.DocumentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutUserInput | Prisma.DocumentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type DocumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutUserInput, Prisma.DocumentUncheckedCreateWithoutUserInput> | Prisma.DocumentCreateWithoutUserInput[] | Prisma.DocumentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutUserInput | Prisma.DocumentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.DocumentUpsertWithWhereUniqueWithoutUserInput | Prisma.DocumentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.DocumentCreateManyUserInputEnvelope;
    set?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    disconnect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    delete?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    connect?: Prisma.DocumentWhereUniqueInput | Prisma.DocumentWhereUniqueInput[];
    update?: Prisma.DocumentUpdateWithWhereUniqueWithoutUserInput | Prisma.DocumentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.DocumentUpdateManyWithWhereWithoutUserInput | Prisma.DocumentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
};
export type EnumDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DocumentStatus;
};
export type DocumentCreateNestedOneWithoutChunksInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutChunksInput, Prisma.DocumentUncheckedCreateWithoutChunksInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutChunksInput;
    connect?: Prisma.DocumentWhereUniqueInput;
};
export type DocumentUpdateOneRequiredWithoutChunksNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutChunksInput, Prisma.DocumentUncheckedCreateWithoutChunksInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutChunksInput;
    upsert?: Prisma.DocumentUpsertWithoutChunksInput;
    connect?: Prisma.DocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DocumentUpdateToOneWithWhereWithoutChunksInput, Prisma.DocumentUpdateWithoutChunksInput>, Prisma.DocumentUncheckedUpdateWithoutChunksInput>;
};
export type DocumentCreateNestedOneWithoutConversationsInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutConversationsInput, Prisma.DocumentUncheckedCreateWithoutConversationsInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutConversationsInput;
    connect?: Prisma.DocumentWhereUniqueInput;
};
export type DocumentUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCreateWithoutConversationsInput, Prisma.DocumentUncheckedCreateWithoutConversationsInput>;
    connectOrCreate?: Prisma.DocumentCreateOrConnectWithoutConversationsInput;
    upsert?: Prisma.DocumentUpsertWithoutConversationsInput;
    connect?: Prisma.DocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DocumentUpdateToOneWithWhereWithoutConversationsInput, Prisma.DocumentUpdateWithoutConversationsInput>, Prisma.DocumentUncheckedUpdateWithoutConversationsInput>;
};
export type DocumentCreateWithoutUserInput = {
    id?: string;
    filename: string;
    mimeType: string;
    status?: $Enums.DocumentStatus;
    failureReason?: string | null;
    createdAt?: Date | string;
    chunks?: Prisma.DocumentChunkCreateNestedManyWithoutDocumentInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutDocumentInput;
};
export type DocumentUncheckedCreateWithoutUserInput = {
    id?: string;
    filename: string;
    mimeType: string;
    status?: $Enums.DocumentStatus;
    failureReason?: string | null;
    createdAt?: Date | string;
    chunks?: Prisma.DocumentChunkUncheckedCreateNestedManyWithoutDocumentInput;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutDocumentInput;
};
export type DocumentCreateOrConnectWithoutUserInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutUserInput, Prisma.DocumentUncheckedCreateWithoutUserInput>;
};
export type DocumentCreateManyUserInputEnvelope = {
    data: Prisma.DocumentCreateManyUserInput | Prisma.DocumentCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type DocumentUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.DocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutUserInput, Prisma.DocumentUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutUserInput, Prisma.DocumentUncheckedCreateWithoutUserInput>;
};
export type DocumentUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.DocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutUserInput, Prisma.DocumentUncheckedUpdateWithoutUserInput>;
};
export type DocumentUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.DocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyWithoutUserInput>;
};
export type DocumentScalarWhereInput = {
    AND?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
    OR?: Prisma.DocumentScalarWhereInput[];
    NOT?: Prisma.DocumentScalarWhereInput | Prisma.DocumentScalarWhereInput[];
    id?: Prisma.StringFilter<"Document"> | string;
    userId?: Prisma.StringFilter<"Document"> | string;
    filename?: Prisma.StringFilter<"Document"> | string;
    mimeType?: Prisma.StringFilter<"Document"> | string;
    status?: Prisma.EnumDocumentStatusFilter<"Document"> | $Enums.DocumentStatus;
    failureReason?: Prisma.StringNullableFilter<"Document"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Document"> | Date | string;
};
export type DocumentCreateWithoutChunksInput = {
    id?: string;
    filename: string;
    mimeType: string;
    status?: $Enums.DocumentStatus;
    failureReason?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDocumentsInput;
    conversations?: Prisma.ConversationCreateNestedManyWithoutDocumentInput;
};
export type DocumentUncheckedCreateWithoutChunksInput = {
    id?: string;
    userId: string;
    filename: string;
    mimeType: string;
    status?: $Enums.DocumentStatus;
    failureReason?: string | null;
    createdAt?: Date | string;
    conversations?: Prisma.ConversationUncheckedCreateNestedManyWithoutDocumentInput;
};
export type DocumentCreateOrConnectWithoutChunksInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutChunksInput, Prisma.DocumentUncheckedCreateWithoutChunksInput>;
};
export type DocumentUpsertWithoutChunksInput = {
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutChunksInput, Prisma.DocumentUncheckedUpdateWithoutChunksInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutChunksInput, Prisma.DocumentUncheckedCreateWithoutChunksInput>;
    where?: Prisma.DocumentWhereInput;
};
export type DocumentUpdateToOneWithWhereWithoutChunksInput = {
    where?: Prisma.DocumentWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutChunksInput, Prisma.DocumentUncheckedUpdateWithoutChunksInput>;
};
export type DocumentUpdateWithoutChunksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDocumentsNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutDocumentNestedInput;
};
export type DocumentUncheckedUpdateWithoutChunksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutDocumentNestedInput;
};
export type DocumentCreateWithoutConversationsInput = {
    id?: string;
    filename: string;
    mimeType: string;
    status?: $Enums.DocumentStatus;
    failureReason?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutDocumentsInput;
    chunks?: Prisma.DocumentChunkCreateNestedManyWithoutDocumentInput;
};
export type DocumentUncheckedCreateWithoutConversationsInput = {
    id?: string;
    userId: string;
    filename: string;
    mimeType: string;
    status?: $Enums.DocumentStatus;
    failureReason?: string | null;
    createdAt?: Date | string;
    chunks?: Prisma.DocumentChunkUncheckedCreateNestedManyWithoutDocumentInput;
};
export type DocumentCreateOrConnectWithoutConversationsInput = {
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutConversationsInput, Prisma.DocumentUncheckedCreateWithoutConversationsInput>;
};
export type DocumentUpsertWithoutConversationsInput = {
    update: Prisma.XOR<Prisma.DocumentUpdateWithoutConversationsInput, Prisma.DocumentUncheckedUpdateWithoutConversationsInput>;
    create: Prisma.XOR<Prisma.DocumentCreateWithoutConversationsInput, Prisma.DocumentUncheckedCreateWithoutConversationsInput>;
    where?: Prisma.DocumentWhereInput;
};
export type DocumentUpdateToOneWithWhereWithoutConversationsInput = {
    where?: Prisma.DocumentWhereInput;
    data: Prisma.XOR<Prisma.DocumentUpdateWithoutConversationsInput, Prisma.DocumentUncheckedUpdateWithoutConversationsInput>;
};
export type DocumentUpdateWithoutConversationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutDocumentsNestedInput;
    chunks?: Prisma.DocumentChunkUpdateManyWithoutDocumentNestedInput;
};
export type DocumentUncheckedUpdateWithoutConversationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chunks?: Prisma.DocumentChunkUncheckedUpdateManyWithoutDocumentNestedInput;
};
export type DocumentCreateManyUserInput = {
    id?: string;
    filename: string;
    mimeType: string;
    status?: $Enums.DocumentStatus;
    failureReason?: string | null;
    createdAt?: Date | string;
};
export type DocumentUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chunks?: Prisma.DocumentChunkUpdateManyWithoutDocumentNestedInput;
    conversations?: Prisma.ConversationUpdateManyWithoutDocumentNestedInput;
};
export type DocumentUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chunks?: Prisma.DocumentChunkUncheckedUpdateManyWithoutDocumentNestedInput;
    conversations?: Prisma.ConversationUncheckedUpdateManyWithoutDocumentNestedInput;
};
export type DocumentUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus;
    failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentCountOutputType = {
    chunks: number;
    conversations: number;
};
export type DocumentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chunks?: boolean | DocumentCountOutputTypeCountChunksArgs;
    conversations?: boolean | DocumentCountOutputTypeCountConversationsArgs;
};
export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentCountOutputTypeSelect<ExtArgs> | null;
};
export type DocumentCountOutputTypeCountChunksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentChunkWhereInput;
};
export type DocumentCountOutputTypeCountConversationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversationWhereInput;
};
export type DocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    filename?: boolean;
    mimeType?: boolean;
    status?: boolean;
    failureReason?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    chunks?: boolean | Prisma.Document$chunksArgs<ExtArgs>;
    conversations?: boolean | Prisma.Document$conversationsArgs<ExtArgs>;
    _count?: boolean | Prisma.DocumentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    filename?: boolean;
    mimeType?: boolean;
    status?: boolean;
    failureReason?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    filename?: boolean;
    mimeType?: boolean;
    status?: boolean;
    failureReason?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["document"]>;
export type DocumentSelectScalar = {
    id?: boolean;
    userId?: boolean;
    filename?: boolean;
    mimeType?: boolean;
    status?: boolean;
    failureReason?: boolean;
    createdAt?: boolean;
};
export type DocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "filename" | "mimeType" | "status" | "failureReason" | "createdAt", ExtArgs["result"]["document"]>;
export type DocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    chunks?: boolean | Prisma.Document$chunksArgs<ExtArgs>;
    conversations?: boolean | Prisma.Document$conversationsArgs<ExtArgs>;
    _count?: boolean | Prisma.DocumentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DocumentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $DocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Document";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        chunks: Prisma.$DocumentChunkPayload<ExtArgs>[];
        conversations: Prisma.$ConversationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        filename: string;
        mimeType: string;
        status: $Enums.DocumentStatus;
        failureReason: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["document"]>;
    composites: {};
};
export type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocumentPayload, S>;
export type DocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentCountAggregateInputType | true;
};
export interface DocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Document'];
        meta: {
            name: 'Document';
        };
    };
    findUnique<T extends DocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DocumentFindManyArgs>(args?: Prisma.SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DocumentCreateArgs>(args: Prisma.SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DocumentDeleteArgs>(args: Prisma.SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DocumentUpdateArgs>(args: Prisma.SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DocumentUpsertArgs>(args: Prisma.SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DocumentCountArgs>(args?: Prisma.Subset<T, DocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocumentCountAggregateOutputType> : number>;
    aggregate<T extends DocumentAggregateArgs>(args: Prisma.Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>;
    groupBy<T extends DocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: DocumentGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DocumentFieldRefs;
}
export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    chunks<T extends Prisma.Document$chunksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Document$chunksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    conversations<T extends Prisma.Document$conversationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Document$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DocumentFieldRefs {
    readonly id: Prisma.FieldRef<"Document", 'String'>;
    readonly userId: Prisma.FieldRef<"Document", 'String'>;
    readonly filename: Prisma.FieldRef<"Document", 'String'>;
    readonly mimeType: Prisma.FieldRef<"Document", 'String'>;
    readonly status: Prisma.FieldRef<"Document", 'DocumentStatus'>;
    readonly failureReason: Prisma.FieldRef<"Document", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Document", 'DateTime'>;
}
export type DocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
export type DocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
export type DocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where?: Prisma.DocumentWhereInput;
    orderBy?: Prisma.DocumentOrderByWithRelationInput | Prisma.DocumentOrderByWithRelationInput[];
    cursor?: Prisma.DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentScalarFieldEnum | Prisma.DocumentScalarFieldEnum[];
};
export type DocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentCreateInput, Prisma.DocumentUncheckedCreateInput>;
};
export type DocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DocumentCreateManyInput | Prisma.DocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocumentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    data: Prisma.DocumentCreateManyInput | Prisma.DocumentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DocumentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentUpdateInput, Prisma.DocumentUncheckedUpdateInput>;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyInput>;
    where?: Prisma.DocumentWhereInput;
    limit?: number;
};
export type DocumentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentUpdateManyMutationInput, Prisma.DocumentUncheckedUpdateManyInput>;
    where?: Prisma.DocumentWhereInput;
    limit?: number;
    include?: Prisma.DocumentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCreateInput, Prisma.DocumentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DocumentUpdateInput, Prisma.DocumentUncheckedUpdateInput>;
};
export type DocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
    where: Prisma.DocumentWhereUniqueInput;
};
export type DocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentWhereInput;
    limit?: number;
};
export type Document$chunksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChunkSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChunkOmit<ExtArgs> | null;
    include?: Prisma.DocumentChunkInclude<ExtArgs> | null;
    where?: Prisma.DocumentChunkWhereInput;
    orderBy?: Prisma.DocumentChunkOrderByWithRelationInput | Prisma.DocumentChunkOrderByWithRelationInput[];
    cursor?: Prisma.DocumentChunkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentChunkScalarFieldEnum | Prisma.DocumentChunkScalarFieldEnum[];
};
export type Document$conversationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConversationSelect<ExtArgs> | null;
    omit?: Prisma.ConversationOmit<ExtArgs> | null;
    include?: Prisma.ConversationInclude<ExtArgs> | null;
    where?: Prisma.ConversationWhereInput;
    orderBy?: Prisma.ConversationOrderByWithRelationInput | Prisma.ConversationOrderByWithRelationInput[];
    cursor?: Prisma.ConversationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConversationScalarFieldEnum | Prisma.ConversationScalarFieldEnum[];
};
export type DocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentSelect<ExtArgs> | null;
    omit?: Prisma.DocumentOmit<ExtArgs> | null;
    include?: Prisma.DocumentInclude<ExtArgs> | null;
};

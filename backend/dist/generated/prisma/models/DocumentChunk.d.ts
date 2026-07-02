import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DocumentChunkModel = runtime.Types.Result.DefaultSelection<Prisma.$DocumentChunkPayload>;
export type AggregateDocumentChunk = {
    _count: DocumentChunkCountAggregateOutputType | null;
    _avg: DocumentChunkAvgAggregateOutputType | null;
    _sum: DocumentChunkSumAggregateOutputType | null;
    _min: DocumentChunkMinAggregateOutputType | null;
    _max: DocumentChunkMaxAggregateOutputType | null;
};
export type DocumentChunkAvgAggregateOutputType = {
    chunkIndex: number | null;
};
export type DocumentChunkSumAggregateOutputType = {
    chunkIndex: number | null;
};
export type DocumentChunkMinAggregateOutputType = {
    id: string | null;
    documentId: string | null;
    content: string | null;
    chunkIndex: number | null;
    createdAt: Date | null;
};
export type DocumentChunkMaxAggregateOutputType = {
    id: string | null;
    documentId: string | null;
    content: string | null;
    chunkIndex: number | null;
    createdAt: Date | null;
};
export type DocumentChunkCountAggregateOutputType = {
    id: number;
    documentId: number;
    content: number;
    chunkIndex: number;
    createdAt: number;
    _all: number;
};
export type DocumentChunkAvgAggregateInputType = {
    chunkIndex?: true;
};
export type DocumentChunkSumAggregateInputType = {
    chunkIndex?: true;
};
export type DocumentChunkMinAggregateInputType = {
    id?: true;
    documentId?: true;
    content?: true;
    chunkIndex?: true;
    createdAt?: true;
};
export type DocumentChunkMaxAggregateInputType = {
    id?: true;
    documentId?: true;
    content?: true;
    chunkIndex?: true;
    createdAt?: true;
};
export type DocumentChunkCountAggregateInputType = {
    id?: true;
    documentId?: true;
    content?: true;
    chunkIndex?: true;
    createdAt?: true;
    _all?: true;
};
export type DocumentChunkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentChunkWhereInput;
    orderBy?: Prisma.DocumentChunkOrderByWithRelationInput | Prisma.DocumentChunkOrderByWithRelationInput[];
    cursor?: Prisma.DocumentChunkWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DocumentChunkCountAggregateInputType;
    _avg?: DocumentChunkAvgAggregateInputType;
    _sum?: DocumentChunkSumAggregateInputType;
    _min?: DocumentChunkMinAggregateInputType;
    _max?: DocumentChunkMaxAggregateInputType;
};
export type GetDocumentChunkAggregateType<T extends DocumentChunkAggregateArgs> = {
    [P in keyof T & keyof AggregateDocumentChunk]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocumentChunk[P]> : Prisma.GetScalarType<T[P], AggregateDocumentChunk[P]>;
};
export type DocumentChunkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentChunkWhereInput;
    orderBy?: Prisma.DocumentChunkOrderByWithAggregationInput | Prisma.DocumentChunkOrderByWithAggregationInput[];
    by: Prisma.DocumentChunkScalarFieldEnum[] | Prisma.DocumentChunkScalarFieldEnum;
    having?: Prisma.DocumentChunkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentChunkCountAggregateInputType | true;
    _avg?: DocumentChunkAvgAggregateInputType;
    _sum?: DocumentChunkSumAggregateInputType;
    _min?: DocumentChunkMinAggregateInputType;
    _max?: DocumentChunkMaxAggregateInputType;
};
export type DocumentChunkGroupByOutputType = {
    id: string;
    documentId: string;
    content: string;
    chunkIndex: number;
    createdAt: Date;
    _count: DocumentChunkCountAggregateOutputType | null;
    _avg: DocumentChunkAvgAggregateOutputType | null;
    _sum: DocumentChunkSumAggregateOutputType | null;
    _min: DocumentChunkMinAggregateOutputType | null;
    _max: DocumentChunkMaxAggregateOutputType | null;
};
export type GetDocumentChunkGroupByPayload<T extends DocumentChunkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocumentChunkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocumentChunkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocumentChunkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocumentChunkGroupByOutputType[P]>;
}>>;
export type DocumentChunkWhereInput = {
    AND?: Prisma.DocumentChunkWhereInput | Prisma.DocumentChunkWhereInput[];
    OR?: Prisma.DocumentChunkWhereInput[];
    NOT?: Prisma.DocumentChunkWhereInput | Prisma.DocumentChunkWhereInput[];
    id?: Prisma.StringFilter<"DocumentChunk"> | string;
    documentId?: Prisma.StringFilter<"DocumentChunk"> | string;
    content?: Prisma.StringFilter<"DocumentChunk"> | string;
    chunkIndex?: Prisma.IntFilter<"DocumentChunk"> | number;
    createdAt?: Prisma.DateTimeFilter<"DocumentChunk"> | Date | string;
    document?: Prisma.XOR<Prisma.DocumentScalarRelationFilter, Prisma.DocumentWhereInput>;
};
export type DocumentChunkOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    chunkIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    document?: Prisma.DocumentOrderByWithRelationInput;
};
export type DocumentChunkWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DocumentChunkWhereInput | Prisma.DocumentChunkWhereInput[];
    OR?: Prisma.DocumentChunkWhereInput[];
    NOT?: Prisma.DocumentChunkWhereInput | Prisma.DocumentChunkWhereInput[];
    documentId?: Prisma.StringFilter<"DocumentChunk"> | string;
    content?: Prisma.StringFilter<"DocumentChunk"> | string;
    chunkIndex?: Prisma.IntFilter<"DocumentChunk"> | number;
    createdAt?: Prisma.DateTimeFilter<"DocumentChunk"> | Date | string;
    document?: Prisma.XOR<Prisma.DocumentScalarRelationFilter, Prisma.DocumentWhereInput>;
}, "id">;
export type DocumentChunkOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    chunkIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DocumentChunkCountOrderByAggregateInput;
    _avg?: Prisma.DocumentChunkAvgOrderByAggregateInput;
    _max?: Prisma.DocumentChunkMaxOrderByAggregateInput;
    _min?: Prisma.DocumentChunkMinOrderByAggregateInput;
    _sum?: Prisma.DocumentChunkSumOrderByAggregateInput;
};
export type DocumentChunkScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocumentChunkScalarWhereWithAggregatesInput | Prisma.DocumentChunkScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocumentChunkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocumentChunkScalarWhereWithAggregatesInput | Prisma.DocumentChunkScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DocumentChunk"> | string;
    documentId?: Prisma.StringWithAggregatesFilter<"DocumentChunk"> | string;
    content?: Prisma.StringWithAggregatesFilter<"DocumentChunk"> | string;
    chunkIndex?: Prisma.IntWithAggregatesFilter<"DocumentChunk"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DocumentChunk"> | Date | string;
};
export type DocumentChunkCreateInput = {
    id?: string;
    content: string;
    chunkIndex: number;
    createdAt?: Date | string;
    document: Prisma.DocumentCreateNestedOneWithoutChunksInput;
};
export type DocumentChunkUncheckedCreateInput = {
    id?: string;
    documentId: string;
    content: string;
    chunkIndex: number;
    createdAt?: Date | string;
};
export type DocumentChunkUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    chunkIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    document?: Prisma.DocumentUpdateOneRequiredWithoutChunksNestedInput;
};
export type DocumentChunkUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    chunkIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentChunkCreateManyInput = {
    id?: string;
    documentId: string;
    content: string;
    chunkIndex: number;
    createdAt?: Date | string;
};
export type DocumentChunkUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    chunkIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentChunkUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentId?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    chunkIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentChunkListRelationFilter = {
    every?: Prisma.DocumentChunkWhereInput;
    some?: Prisma.DocumentChunkWhereInput;
    none?: Prisma.DocumentChunkWhereInput;
};
export type DocumentChunkOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DocumentChunkCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    chunkIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DocumentChunkAvgOrderByAggregateInput = {
    chunkIndex?: Prisma.SortOrder;
};
export type DocumentChunkMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    chunkIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DocumentChunkMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    chunkIndex?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DocumentChunkSumOrderByAggregateInput = {
    chunkIndex?: Prisma.SortOrder;
};
export type DocumentChunkCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.DocumentChunkCreateWithoutDocumentInput, Prisma.DocumentChunkUncheckedCreateWithoutDocumentInput> | Prisma.DocumentChunkCreateWithoutDocumentInput[] | Prisma.DocumentChunkUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.DocumentChunkCreateOrConnectWithoutDocumentInput | Prisma.DocumentChunkCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.DocumentChunkCreateManyDocumentInputEnvelope;
    connect?: Prisma.DocumentChunkWhereUniqueInput | Prisma.DocumentChunkWhereUniqueInput[];
};
export type DocumentChunkUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: Prisma.XOR<Prisma.DocumentChunkCreateWithoutDocumentInput, Prisma.DocumentChunkUncheckedCreateWithoutDocumentInput> | Prisma.DocumentChunkCreateWithoutDocumentInput[] | Prisma.DocumentChunkUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.DocumentChunkCreateOrConnectWithoutDocumentInput | Prisma.DocumentChunkCreateOrConnectWithoutDocumentInput[];
    createMany?: Prisma.DocumentChunkCreateManyDocumentInputEnvelope;
    connect?: Prisma.DocumentChunkWhereUniqueInput | Prisma.DocumentChunkWhereUniqueInput[];
};
export type DocumentChunkUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentChunkCreateWithoutDocumentInput, Prisma.DocumentChunkUncheckedCreateWithoutDocumentInput> | Prisma.DocumentChunkCreateWithoutDocumentInput[] | Prisma.DocumentChunkUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.DocumentChunkCreateOrConnectWithoutDocumentInput | Prisma.DocumentChunkCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.DocumentChunkUpsertWithWhereUniqueWithoutDocumentInput | Prisma.DocumentChunkUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.DocumentChunkCreateManyDocumentInputEnvelope;
    set?: Prisma.DocumentChunkWhereUniqueInput | Prisma.DocumentChunkWhereUniqueInput[];
    disconnect?: Prisma.DocumentChunkWhereUniqueInput | Prisma.DocumentChunkWhereUniqueInput[];
    delete?: Prisma.DocumentChunkWhereUniqueInput | Prisma.DocumentChunkWhereUniqueInput[];
    connect?: Prisma.DocumentChunkWhereUniqueInput | Prisma.DocumentChunkWhereUniqueInput[];
    update?: Prisma.DocumentChunkUpdateWithWhereUniqueWithoutDocumentInput | Prisma.DocumentChunkUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.DocumentChunkUpdateManyWithWhereWithoutDocumentInput | Prisma.DocumentChunkUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.DocumentChunkScalarWhereInput | Prisma.DocumentChunkScalarWhereInput[];
};
export type DocumentChunkUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentChunkCreateWithoutDocumentInput, Prisma.DocumentChunkUncheckedCreateWithoutDocumentInput> | Prisma.DocumentChunkCreateWithoutDocumentInput[] | Prisma.DocumentChunkUncheckedCreateWithoutDocumentInput[];
    connectOrCreate?: Prisma.DocumentChunkCreateOrConnectWithoutDocumentInput | Prisma.DocumentChunkCreateOrConnectWithoutDocumentInput[];
    upsert?: Prisma.DocumentChunkUpsertWithWhereUniqueWithoutDocumentInput | Prisma.DocumentChunkUpsertWithWhereUniqueWithoutDocumentInput[];
    createMany?: Prisma.DocumentChunkCreateManyDocumentInputEnvelope;
    set?: Prisma.DocumentChunkWhereUniqueInput | Prisma.DocumentChunkWhereUniqueInput[];
    disconnect?: Prisma.DocumentChunkWhereUniqueInput | Prisma.DocumentChunkWhereUniqueInput[];
    delete?: Prisma.DocumentChunkWhereUniqueInput | Prisma.DocumentChunkWhereUniqueInput[];
    connect?: Prisma.DocumentChunkWhereUniqueInput | Prisma.DocumentChunkWhereUniqueInput[];
    update?: Prisma.DocumentChunkUpdateWithWhereUniqueWithoutDocumentInput | Prisma.DocumentChunkUpdateWithWhereUniqueWithoutDocumentInput[];
    updateMany?: Prisma.DocumentChunkUpdateManyWithWhereWithoutDocumentInput | Prisma.DocumentChunkUpdateManyWithWhereWithoutDocumentInput[];
    deleteMany?: Prisma.DocumentChunkScalarWhereInput | Prisma.DocumentChunkScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DocumentChunkCreateWithoutDocumentInput = {
    id?: string;
    content: string;
    chunkIndex: number;
    createdAt?: Date | string;
};
export type DocumentChunkUncheckedCreateWithoutDocumentInput = {
    id?: string;
    content: string;
    chunkIndex: number;
    createdAt?: Date | string;
};
export type DocumentChunkCreateOrConnectWithoutDocumentInput = {
    where: Prisma.DocumentChunkWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentChunkCreateWithoutDocumentInput, Prisma.DocumentChunkUncheckedCreateWithoutDocumentInput>;
};
export type DocumentChunkCreateManyDocumentInputEnvelope = {
    data: Prisma.DocumentChunkCreateManyDocumentInput | Prisma.DocumentChunkCreateManyDocumentInput[];
    skipDuplicates?: boolean;
};
export type DocumentChunkUpsertWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.DocumentChunkWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentChunkUpdateWithoutDocumentInput, Prisma.DocumentChunkUncheckedUpdateWithoutDocumentInput>;
    create: Prisma.XOR<Prisma.DocumentChunkCreateWithoutDocumentInput, Prisma.DocumentChunkUncheckedCreateWithoutDocumentInput>;
};
export type DocumentChunkUpdateWithWhereUniqueWithoutDocumentInput = {
    where: Prisma.DocumentChunkWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentChunkUpdateWithoutDocumentInput, Prisma.DocumentChunkUncheckedUpdateWithoutDocumentInput>;
};
export type DocumentChunkUpdateManyWithWhereWithoutDocumentInput = {
    where: Prisma.DocumentChunkScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentChunkUpdateManyMutationInput, Prisma.DocumentChunkUncheckedUpdateManyWithoutDocumentInput>;
};
export type DocumentChunkScalarWhereInput = {
    AND?: Prisma.DocumentChunkScalarWhereInput | Prisma.DocumentChunkScalarWhereInput[];
    OR?: Prisma.DocumentChunkScalarWhereInput[];
    NOT?: Prisma.DocumentChunkScalarWhereInput | Prisma.DocumentChunkScalarWhereInput[];
    id?: Prisma.StringFilter<"DocumentChunk"> | string;
    documentId?: Prisma.StringFilter<"DocumentChunk"> | string;
    content?: Prisma.StringFilter<"DocumentChunk"> | string;
    chunkIndex?: Prisma.IntFilter<"DocumentChunk"> | number;
    createdAt?: Prisma.DateTimeFilter<"DocumentChunk"> | Date | string;
};
export type DocumentChunkCreateManyDocumentInput = {
    id?: string;
    content: string;
    chunkIndex: number;
    createdAt?: Date | string;
};
export type DocumentChunkUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    chunkIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentChunkUncheckedUpdateWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    chunkIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentChunkUncheckedUpdateManyWithoutDocumentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    chunkIndex?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DocumentChunkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    documentId?: boolean;
    content?: boolean;
    chunkIndex?: boolean;
    createdAt?: boolean;
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentChunk"]>;
export type DocumentChunkSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    documentId?: boolean;
    content?: boolean;
    chunkIndex?: boolean;
    createdAt?: boolean;
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentChunk"]>;
export type DocumentChunkSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    documentId?: boolean;
    content?: boolean;
    chunkIndex?: boolean;
    createdAt?: boolean;
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentChunk"]>;
export type DocumentChunkSelectScalar = {
    id?: boolean;
    documentId?: boolean;
    content?: boolean;
    chunkIndex?: boolean;
    createdAt?: boolean;
};
export type DocumentChunkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "documentId" | "content" | "chunkIndex" | "createdAt", ExtArgs["result"]["documentChunk"]>;
export type DocumentChunkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
};
export type DocumentChunkIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
};
export type DocumentChunkIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    document?: boolean | Prisma.DocumentDefaultArgs<ExtArgs>;
};
export type $DocumentChunkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DocumentChunk";
    objects: {
        document: Prisma.$DocumentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        documentId: string;
        content: string;
        chunkIndex: number;
        createdAt: Date;
    }, ExtArgs["result"]["documentChunk"]>;
    composites: {};
};
export type DocumentChunkGetPayload<S extends boolean | null | undefined | DocumentChunkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocumentChunkPayload, S>;
export type DocumentChunkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocumentChunkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentChunkCountAggregateInputType | true;
};
export interface DocumentChunkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DocumentChunk'];
        meta: {
            name: 'DocumentChunk';
        };
    };
    findUnique<T extends DocumentChunkFindUniqueArgs>(args: Prisma.SelectSubset<T, DocumentChunkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocumentChunkClient<runtime.Types.Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DocumentChunkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocumentChunkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentChunkClient<runtime.Types.Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DocumentChunkFindFirstArgs>(args?: Prisma.SelectSubset<T, DocumentChunkFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocumentChunkClient<runtime.Types.Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DocumentChunkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocumentChunkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentChunkClient<runtime.Types.Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DocumentChunkFindManyArgs>(args?: Prisma.SelectSubset<T, DocumentChunkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DocumentChunkCreateArgs>(args: Prisma.SelectSubset<T, DocumentChunkCreateArgs<ExtArgs>>): Prisma.Prisma__DocumentChunkClient<runtime.Types.Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DocumentChunkCreateManyArgs>(args?: Prisma.SelectSubset<T, DocumentChunkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DocumentChunkCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocumentChunkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DocumentChunkDeleteArgs>(args: Prisma.SelectSubset<T, DocumentChunkDeleteArgs<ExtArgs>>): Prisma.Prisma__DocumentChunkClient<runtime.Types.Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DocumentChunkUpdateArgs>(args: Prisma.SelectSubset<T, DocumentChunkUpdateArgs<ExtArgs>>): Prisma.Prisma__DocumentChunkClient<runtime.Types.Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DocumentChunkDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocumentChunkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DocumentChunkUpdateManyArgs>(args: Prisma.SelectSubset<T, DocumentChunkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DocumentChunkUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocumentChunkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DocumentChunkUpsertArgs>(args: Prisma.SelectSubset<T, DocumentChunkUpsertArgs<ExtArgs>>): Prisma.Prisma__DocumentChunkClient<runtime.Types.Result.GetResult<Prisma.$DocumentChunkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DocumentChunkCountArgs>(args?: Prisma.Subset<T, DocumentChunkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocumentChunkCountAggregateOutputType> : number>;
    aggregate<T extends DocumentChunkAggregateArgs>(args: Prisma.Subset<T, DocumentChunkAggregateArgs>): Prisma.PrismaPromise<GetDocumentChunkAggregateType<T>>;
    groupBy<T extends DocumentChunkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocumentChunkGroupByArgs['orderBy'];
    } : {
        orderBy?: DocumentChunkGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocumentChunkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentChunkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DocumentChunkFieldRefs;
}
export interface Prisma__DocumentChunkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    document<T extends Prisma.DocumentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DocumentDefaultArgs<ExtArgs>>): Prisma.Prisma__DocumentClient<runtime.Types.Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DocumentChunkFieldRefs {
    readonly id: Prisma.FieldRef<"DocumentChunk", 'String'>;
    readonly documentId: Prisma.FieldRef<"DocumentChunk", 'String'>;
    readonly content: Prisma.FieldRef<"DocumentChunk", 'String'>;
    readonly chunkIndex: Prisma.FieldRef<"DocumentChunk", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"DocumentChunk", 'DateTime'>;
}
export type DocumentChunkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChunkSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChunkOmit<ExtArgs> | null;
    include?: Prisma.DocumentChunkInclude<ExtArgs> | null;
    where: Prisma.DocumentChunkWhereUniqueInput;
};
export type DocumentChunkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChunkSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChunkOmit<ExtArgs> | null;
    include?: Prisma.DocumentChunkInclude<ExtArgs> | null;
    where: Prisma.DocumentChunkWhereUniqueInput;
};
export type DocumentChunkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DocumentChunkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DocumentChunkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DocumentChunkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChunkSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChunkOmit<ExtArgs> | null;
    include?: Prisma.DocumentChunkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentChunkCreateInput, Prisma.DocumentChunkUncheckedCreateInput>;
};
export type DocumentChunkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DocumentChunkCreateManyInput | Prisma.DocumentChunkCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocumentChunkCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChunkSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentChunkOmit<ExtArgs> | null;
    data: Prisma.DocumentChunkCreateManyInput | Prisma.DocumentChunkCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DocumentChunkIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DocumentChunkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChunkSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChunkOmit<ExtArgs> | null;
    include?: Prisma.DocumentChunkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentChunkUpdateInput, Prisma.DocumentChunkUncheckedUpdateInput>;
    where: Prisma.DocumentChunkWhereUniqueInput;
};
export type DocumentChunkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DocumentChunkUpdateManyMutationInput, Prisma.DocumentChunkUncheckedUpdateManyInput>;
    where?: Prisma.DocumentChunkWhereInput;
    limit?: number;
};
export type DocumentChunkUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChunkSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentChunkOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentChunkUpdateManyMutationInput, Prisma.DocumentChunkUncheckedUpdateManyInput>;
    where?: Prisma.DocumentChunkWhereInput;
    limit?: number;
    include?: Prisma.DocumentChunkIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DocumentChunkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChunkSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChunkOmit<ExtArgs> | null;
    include?: Prisma.DocumentChunkInclude<ExtArgs> | null;
    where: Prisma.DocumentChunkWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentChunkCreateInput, Prisma.DocumentChunkUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DocumentChunkUpdateInput, Prisma.DocumentChunkUncheckedUpdateInput>;
};
export type DocumentChunkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChunkSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChunkOmit<ExtArgs> | null;
    include?: Prisma.DocumentChunkInclude<ExtArgs> | null;
    where: Prisma.DocumentChunkWhereUniqueInput;
};
export type DocumentChunkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentChunkWhereInput;
    limit?: number;
};
export type DocumentChunkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentChunkSelect<ExtArgs> | null;
    omit?: Prisma.DocumentChunkOmit<ExtArgs> | null;
    include?: Prisma.DocumentChunkInclude<ExtArgs> | null;
};

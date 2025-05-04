export interface PaginationRequest {
    start: number;
    size: number;
    asc: boolean;
    property: string;
    filters: Map<string, Object>;
}

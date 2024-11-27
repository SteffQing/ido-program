interface IDOType {
    id: string;
    project_name: string;
    description: string;
    status: IDO_Status;
    image: string;
    tags: [string, string, string];
    target: number;
    raised: number;
    price: number;
    start_date: string;
    end_date: string;
    token_info: TokenInfoType;
    pool_info: PoolInfoType;
}
interface TokenInfoType {
    symbol: string;
    decimals: number;
    address: string;
    sale_token_amount: number;
}
interface PoolInfoType {
    min_alloc: number;
    max_alloc: number;
    pool_address: string;
    access_type: ACCESS_TYPE;
}
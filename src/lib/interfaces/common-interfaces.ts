export interface ApiResponse {
    status: string;
    data?: object | string| any;
}
export interface TxData {
    txHash: string,
    type: string,
    height: number,
    timeStamp: Date
}

export interface BlockData {
    height: number,
    txs: number,
    timeStamp: number
}

export interface TxList{
    txHash: string,
    type: string,
    status: string,
    fee: string,
    height: number,
    timeStamp: Date,
    amount: string
}

export interface BlockList {
    height: string,
    blockHash: string,
    txs: number,
    timeStamp: Date
}

export interface Asset{
    name: string,
    amount: number,
    totalValue: number
}
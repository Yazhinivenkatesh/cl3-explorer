export interface ApiResponse {
    status: string;
    data?: object | string| any;
}


export interface txData {
    txHash: string,
    type: string,
    height: number,
    timeStamp: Date
}

export interface blockData {
    height: number,
    txs: number,
    timeStamp: number
}

export interface txList{
    txHash: string,
    type: string,
    status: string,
    fee: string,
    height: number,
    timeStamp: Date,
    amount: string
}

export interface blockList {
    height: string,
    blockHash: string,
    txs: number,
    timeStamp: Date
}
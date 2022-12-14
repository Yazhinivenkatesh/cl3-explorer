export const TX_COLUMNS_SCHEMA = [
    {
      key: 'txHash',
      label: 'Tx Hash',
    },
    {
      key: 'type',
      label: 'Type',
    },
    {
      key: 'height',
      label: 'Height',
    },
    {
      key: 'timeStamp',
      label: 'Time',
    },
];
  
export const BLOCK_COLUMNS_SCHEMA = [
    {
      key: 'height',
      label: 'Height',
    },
    {
      key: 'txs',
      label: 'txs',
    },
    {
      key: 'timeStamp',
      label: 'Time',
    },
];

export const TXLIST_SCHEMA = [
    {
        key: 'txHash',
        label: 'Tx Hash'
    },
    {
        key: 'type',
        label: 'Type'
    },
    {
        key: 'status',
        label: 'Result'
    },
    {
        key: 'fee',
        label: 'Fee'
    },
    {
        key: 'height',
        label: 'Height'
    },
    {
        key: 'timeStamp',
        label: 'Time'
    },
    {
        key: 'amount',
        label: 'Amount'
    }
]

export const BLOCKLIST_SCHEMA = [
    {
        key: 'height',
        label: 'Height'
    },
    {
        key: 'blockHash',
        label: 'Block Hash'
    },
    {
        key: 'txs',
        label: 'Txs'
    },
    {
        key: 'timeStamp',
        label: 'Time'
    }
]

export const ASSET_SCHEMA = [
    {
        key: 'name',
        label: 'Name'
    },
    {
        key: 'amount',
        label: 'Amount'
    },
    {
        key: 'totalValue',
        label: 'Total Value'
    }
]

export const txColumns = ['txHash', 'type', 'height', 'timeStamp'];
export const blockColumns = ['height', 'txs', 'timeStamp'];

export const txListColumns = ['txHash', 'type', 'status',  'fee', 'height', 'timeStamp', 'amount'];
export const blockListColumns = ['height', 'blockHash', 'txs', 'timeStamp'];

export const assetColumns = ['name', 'amount', 'totalValue'];

import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../lib/apis/user.service';
import { TxList, BlockList } from '../../lib/interfaces/common-interfaces';
import {
  TXLIST_SCHEMA,
  BLOCKLIST_SCHEMA,
} from '../../lib/constants/common-constants';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ApiResponse } from '../../lib/interfaces/common-interfaces';
import { CommonService } from '../../lib/apis/common.service';
import { get } from 'lodash';

const MOCK_DATA = [
  { height: 1, blockHash: "fhhuererrffr", txs: 5, timeStamp: 138 },
  { height: 2, blockHash: "fhrfreffrfrf", txs: 5, timeStamp: 4323 },
  { height: 3, blockHash: "fhjchiuhfww", txs: 4, timeStamp: 6332 },
  { height: 4, blockHash: "fhrueiewruwi", txs: 3, timeStamp: 90122 },
  { height: 5, blockHash: "fhriuroiuoif", txs: 3, timeStamp: 10811 },
];

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
})
export class TransactionListComponent implements OnInit {
  txListColumns: string[] = [
    'txHash',
    'type',
    'status',
    'fee',
    'height',
    'timeStamp',
    'amount',
  ];
  blockListColumns: string[] = ['height', 'blockHash', 'txs', 'timeStamp'];
  txListDataSource!: MatTableDataSource<TxList>;
  blockListDataSource!: MatTableDataSource<BlockList>;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  txDetails!: TxList;
  blockDetails!: BlockList;
  txArray: TxList[] = [];
  blockArray: BlockList[] = [];
  changeDataSource!: any;
  changeColumns: string[] = [];
  columnsSchema: any;
  tableTitle: string = '';
  tableName1: string = 'TRANSACTION';
  tableName2: string = 'BLOCKS';

  constructor(
    private userService: UserService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.getTxList();
    this.getBlockTxs();
    setTimeout(() => {
      this.changeDataSource = this.txListDataSource;
      this.changeColumns = this.txListColumns;
      this.columnsSchema = TXLIST_SCHEMA;
    }, 1000);
  }

  getTxList(): void {
    this.userService
      .getLatestTransactions(20)
      .subscribe((response: ApiResponse) => {
        const txList = get(response, 'data', []);
        if (txList) {
          this.txDetails = txList.map((txs: any) => ({
            txHash: get(txs, 'txHash', ''),
            type: get(txs, 'type', ''),
            status: get(txs, 'status', ''),
            fee: get(txs, 'fee', ''),
            height: get(txs, 'blockHeight', ''),
            timeStamp: get(txs, 'timeStamp', new Date()),
            amount: get(txs, 'amount', ''),
          }));
          this.commonService.addLatestTxs(this.txDetails);
          this.txListDataSource = new MatTableDataSource(this.txArray);
        }
      });
  }

  getBlockTxs(): void {
    const updatedList = MOCK_DATA.map((value) => ({
        height: get(value, 'height', 0),
        blockHash: get(value, 'blockHash', ""),
        txs: get(value, 'txs', 0),
        timeStamp: get(value, 'timeStamp', 0),
    }));
    this.commonService.addLatestBlocks(updatedList);
  }
}

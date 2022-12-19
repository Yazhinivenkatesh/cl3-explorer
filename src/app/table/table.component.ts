import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../lib/apis/user.service';
import {
  ApiResponse,
  TxData,
  BlockData,
} from '../../lib/interfaces/common-interfaces';
import {TX_COLUMNS_SCHEMA, BLOCK_COLUMNS_SCHEMA} from '../../lib/constants/common-constants'
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { get } from 'lodash';

const MOCK_DATA = [
  { height: 1, txs: 5, timeStamp: 13 },
  { height: 2, txs: 5, timeStamp: 4323 },
  { height: 3, txs: 4, timeStamp: 6332 },
  { height: 4, txs: 3, timeStamp: 90122 },
  { height: 5, txs: 3, timeStamp: 10811 },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() tableName1: string = '';
  txColumns: string[] = ['txHash', 'type', 'height', 'timeStamp'];
  blockColumns: string[] = ['height', 'txs', 'timeStamp'];
  txDataSource!: MatTableDataSource<TxData>;
  blockDataSource!: MatTableDataSource<BlockData>;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  txDetails!: TxData;
  blockDetails!: BlockData;
  txArray: TxData[] = [];
  blockArray: BlockData[] = [];
  changeDataSource!: any;
  changeColumns: string[] = [];
  columnsSchema: any;
  tableTitle: string = "";

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getLatestTxs();
    this.getBlockTxs();
    setTimeout(() => {
        this.tableTitle = this.tableName1 === 'tx-table'? 'TRANSACTIONS': 'BLOCKS'
        this.changeDataSource = this.tableName1 === 'tx-table'? this.txDataSource: this.blockDataSource;
        this.columnsSchema = this.tableName1 === 'tx-table'? TX_COLUMNS_SCHEMA: BLOCK_COLUMNS_SCHEMA;
        this.changeColumns = this.tableName1 === 'tx-table'? this.txColumns: this.blockColumns;
    }, 1000);
  }

  getLatestTxs(): void {
    this.userService
      .getLatestTransactions(5)
      .subscribe((response: ApiResponse) => {
        const txList = get(response, 'data', []);
        if (txList) {
          txList.map((txs: any) => {
            this.txDetails = {
              txHash: get(txs, 'txHash', ''),
              type: get(txs, 'type', ''),
              height: get(txs, 'blockHeight', 0),
              timeStamp: get(txs, 'timeStamp', new Date()),
            };
            this.txArray.push(this.txDetails);
          });
          this.txDataSource = new MatTableDataSource(this.txArray);
          console.log(this.txDataSource, 'TxDetails');
        }
      });
  }

  getBlockTxs(): void {
    MOCK_DATA.map((value) => {
      this.blockDetails = {
        height: get(value, 'height', 0),
        txs: get(value, 'txs', 0),
        timeStamp: get(value, 'timeStamp', 0),
      };
      this.blockArray.push(this.blockDetails);
    });
    this.blockDataSource = new MatTableDataSource(this.blockArray);
  }
}

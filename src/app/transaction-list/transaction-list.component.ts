import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from '../../lib/apis/user.service';
import {txList, blockList} from '../../lib/interfaces/common-interfaces';
import {TXLIST_SCHEMA, BLOCKLIST_SCHEMA} from '../../lib/constants/common-constants'
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {ApiResponse} from '../../lib/interfaces/common-interfaces'
import { get } from 'lodash';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  txListColumns: string[] = ['txHash', 'type', 'status',  'fee', 'height', 'timeStamp', 'amount'];
  blockListColumns: string[] = ['height', 'blockHash', 'txs', 'timeStamp'];
  txListDataSource!: MatTableDataSource<txList>;
  blockListDataSource!: MatTableDataSource<blockList>;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  txDetails!: txList;
  blockDetails!: blockList;
  txArray: txList[] = [];
  blockArray: blockList[] = [];
  changeDataSource!: any;
  changeColumns: string[] = [];
  columnsSchema: any;
  tableTitle: string = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getTxList();
    setTimeout(() => {
      this.changeDataSource = this.txListDataSource;
      this.changeColumns = this.txListColumns;
      this.columnsSchema = TXLIST_SCHEMA;
    }, 1000)
  }

  getTxList(): void {
    this.userService.getLatestTransactions(20).subscribe((response: ApiResponse) => {
      console.log(response, "Response .............")
      const txList = get(response, 'data', []);
      if(txList){
        txList.map((txs: any) => {
          this.txDetails = {
            txHash: get(txs, 'txHash', ""),
            type: get(txs, 'type', ""),
            status: get(txs, 'status', ''),
            fee: get(txs, 'fee', ''),
            height: get(txs, 'blockHeight', ''),
            timeStamp: get(txs, 'timeStamp', new Date()),
            amount: get(txs, 'amount', '')
          }
          this.txArray.push(this.txDetails);
        })
        this.txListDataSource = new MatTableDataSource(this.txArray);
        console.log(this.txListDataSource, "erfjirfhr")
      }
    })
  }

}

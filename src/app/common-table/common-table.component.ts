import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BlockList, TxList } from 'src/lib/interfaces/common-interfaces';
import {CommonService} from '../../lib/apis/common.service';
import {blockListColumns, BLOCKLIST_SCHEMA, txListColumns, TXLIST_SCHEMA} from '../../lib/constants/common-constants';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent implements OnInit {

  @Input() tableName1: string = '';
  @Input() tableName2: string = '';
  @Input() tableName3: string = '';

  txArray: TxList[] = [];
  blockArray: BlockList[] = [];
  walletArray: TxList[] = [];
  txListDataSource!: MatTableDataSource<TxList>;
  blockListDataSource!: MatTableDataSource<BlockList>;
  WalletDataSource!: MatTableDataSource<TxList>;
  changeDataSource!: any;
  changeColumns: string[] = [];
  columnsSchema: any;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.WalletDataSource.paginator = this.paginator;
  }


  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    setTimeout(() => {
      debugger
      if (this.tableName1 === 'TRANSACTION'){
        this.txArray = this.commonService.getLatestTxs();
        this.txListDataSource = new MatTableDataSource(this.txArray);
        this.changeDataSource = this.txListDataSource;
        this.changeColumns = txListColumns;
        this.columnsSchema = TXLIST_SCHEMA;
      }
      if (this.tableName2 === 'BLOCKS'){
        this.blockArray = this.commonService.getLatestBlocks();
        this.blockListDataSource = new MatTableDataSource(this.blockArray);
        this.changeDataSource = this.blockListDataSource;
        this.changeColumns = blockListColumns;
        this.columnsSchema = BLOCKLIST_SCHEMA;
      }

      if(this.tableName3 === 'WALLETS'){
        this.walletArray = this.commonService.getWalletTxs();
        this.WalletDataSource = new MatTableDataSource(this.walletArray);
        this.changeDataSource = this.WalletDataSource;
        this.changeColumns = txListColumns;
        this.columnsSchema = TXLIST_SCHEMA;
      }
    }, 1000)
  }

}


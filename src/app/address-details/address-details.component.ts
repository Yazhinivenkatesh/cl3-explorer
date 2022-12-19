import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { get } from 'lodash';
import { UserService } from 'src/lib/apis/user.service';
import {CommonService} from '../../lib/apis/common.service'
import { ApiResponse, TxList, Asset } from 'src/lib/interfaces/common-interfaces';
import {assetColumns, ASSET_SCHEMA} from '../../lib/constants/common-constants';


@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css'],
})
export class AddressDetailsComponent implements OnInit {
  searchValue: string = '';
  txDetails!: TxList;
  assetDetails!: Asset;
  assetArray: Asset[] = [];
  assetSchema = ASSET_SCHEMA;
  assetColumns = assetColumns;
  assetDataSource!: MatTableDataSource<Asset>;
  coinName: string = 'CALIB'
  totalValue: number = 0;
  coinBalance: number = 0;
  tableName: string = 'WALLETS'

  @ViewChild(MatSort, { static: true }) sort!: MatSort;


  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchValue = params['value'];
    });
    this.getWalletDetails();
  }

  getWalletDetails(): void {
    this.userService
      .getWalletDetails(this.searchValue)
      .subscribe((response: ApiResponse) => {
        this.coinBalance = get(response, 'data.balances.coinBalance', 0)
        this.assetDetails= {
          name: this.coinName,
          amount: this.coinBalance,
          totalValue: this.totalValue
        }
        this.assetArray.push(this.assetDetails)
        this.assetDataSource = new MatTableDataSource(this.assetArray);

        const txList = get(response, 'data.walletDetails', []);
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
          this.commonService.addWalletTxs(this.txDetails);
        }
      });
  }
}


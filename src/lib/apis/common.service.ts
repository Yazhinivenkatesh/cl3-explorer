import { Injectable } from '@angular/core';
import { BlockList, TxList } from '../interfaces/common-interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  txArray: TxList[] = [];
  blockArray: BlockList[] = [];
  walletArray: TxList[] = [];

  addLatestTxs(txList: any) {
    this.txArray = txList;
  }

  getLatestTxs(){
    return this.txArray;
  }

  clearTxs() {
    this.txArray = [];
    return this.txArray;
  }

  addLatestBlocks(blockList: any){
    this.blockArray = blockList
  }

  getLatestBlocks(){
    return this.blockArray;
  }

  addWalletTxs(walletList: any){
    this.walletArray = walletList;
  }

  getWalletTxs(){
    return this.walletArray;
  }
}

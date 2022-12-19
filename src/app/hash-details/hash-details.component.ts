import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../../lib/apis/user.service';
import{ ApiResponse} from '../../lib/interfaces/common-interfaces';
import {get} from 'lodash'

@Component({
  selector: 'app-hash-details',
  templateUrl: './hash-details.component.html',
  styleUrls: ['./hash-details.component.css']
})
export class HashDetailsComponent implements OnInit {

  searchValue: string = "";
  chainId: string = "";
  txHash: string = "";
  status: string = "";
  height: number = 0;
  time: Date = new Date();
  fee: string = "";
  gasUsed: number = 0;
  gasWanted: number = 0;
  memo: string = "";
  message: any;
  txError: string = "";

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchValue = params['value']
    })
    this.getHashDetails();
  }

  getHashDetails (): void{
    this.userService.getTxDetails(this.searchValue).subscribe((response: ApiResponse)=>{
      this.chainId = get(response, 'data.chainId', '');
      this.txHash = get(response, 'data.txHash', '');
      this.status = get(response, 'data.status', '');
      this.height = get(response, 'data.blockHeight', '');
      this.time = get(response, 'data.timeStamp', new Date);
      this.fee = get(response, "data.fee", '');
      this.gasUsed = get(response, 'data.gasUsed', '');
      this.gasWanted = get(response, 'data.gasWanted', '');
      const memo = get(response, 'data.memo', "");
      if (memo === 'NULL'){
        this.memo = "";
      }
      this.message = JSON.stringify(get(response, 'data.msg', {}), undefined, 2);
      this.txError = get(response, 'data.txError', '');
      // const temp = date.toString('YYYY-MM-dd').split('GMT+0530 (India Standard Time)')[0]
      
    })
  }

}

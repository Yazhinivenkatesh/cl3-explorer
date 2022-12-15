import { Component, OnInit } from '@angular/core';
import {UserService} from '../../lib/apis/user.service'
import {ApiResponse} from '../../lib/interfaces/common-interfaces'

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  latestBlockHeight: number = 0;
  txCount: number = 0;
  tableName1: string = "tx-table";
  tableName2: string = "block-table"

  constructor( private userService: UserService) { }

  getTxCount = () => {
    this.userService.getTxCount().subscribe((response:ApiResponse ) => {
      this.latestBlockHeight = response?.data.latestBlockHeight;
      this.txCount = response?.data?.txCount;
    })
  }

  ngOnInit(): void {
    setInterval(() => this.getTxCount(), 2000)
  }
}

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { CommonTableComponent } from './common-table/common-table.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HashDetailsComponent } from './hash-details/hash-details.component';
import { TableComponent } from './table/table.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

const routes: Routes = [
  {
    path: 'nav',
    component: TopNavComponent,
  },
  {
    path: '',
    component: DashBoardComponent,
  },
  {
    path: 'hash-txs',
    component: HashDetailsComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'tx-list',
    component: TransactionListComponent
  },
  {
    path: 'address',
    component: AddressDetailsComponent
  },
  {
    path: 'common-table',
    component: CommonTableComponent
  }
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// ng g m top-nav --routing && ng g c top-nav
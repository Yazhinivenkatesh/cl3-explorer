import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// ng g m top-nav --routing && ng g c top-nav
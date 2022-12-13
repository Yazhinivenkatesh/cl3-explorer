import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { TopNavComponent } from './top-nav/top-nav.component';

const routes: Routes = [
  {
    path: 'nav',
    component: TopNavComponent,
  },
  {
    path: 'dashboard',
    component: DashBoardComponent,
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// ng g m top-nav --routing && ng g c top-nav
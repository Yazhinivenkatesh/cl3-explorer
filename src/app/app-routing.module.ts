import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNavComponent } from './top-nav/top-nav.component';

const routes: Routes = [
  {
    path: 'nav',
    component: TopNavComponent,
  },
  { path: '', redirectTo: '/nav', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// ng g m top-nav --routing && ng g c top-nav
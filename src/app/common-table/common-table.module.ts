import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonTableRoutingModule } from './common-table-routing.module';
import { CommonTableComponent } from './common-table.component';


@NgModule({
  declarations: [
    CommonTableComponent
  ],
  imports: [
    CommonModule,
    CommonTableRoutingModule
  ]
})
export class CommonTableModule { }

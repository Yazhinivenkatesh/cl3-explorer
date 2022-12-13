import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';


@NgModule({
  declarations: [
    DashBoardComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DashBoardModule { }

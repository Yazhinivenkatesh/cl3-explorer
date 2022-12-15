import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HashDetailsRoutingModule } from './hash-details-routing.module';
import { HashDetailsComponent } from './hash-details.component';


@NgModule({
  declarations: [
    HashDetailsComponent
  ],
  imports: [
    CommonModule,
    HashDetailsRoutingModule
  ]
})
export class HashDetailsModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import { TopNavComponent } from './top-nav/top-nav.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';
import {HashDetailsComponent} from './hash-details/hash-details.component'
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button';  
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonTableComponent } from './common-table/common-table.component';
import { AddressDetailsComponent } from './address-details/address-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DashBoardComponent,
    HashDetailsComponent,
    TableComponent,
    TransactionListComponent,
    CommonTableComponent,
    AddressDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    Ng2SearchPipeModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatTabsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

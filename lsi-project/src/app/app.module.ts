import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {CalendarModule} from 'primeng/calendar';
import {TableModule} from "primeng/table";
import {HttpClientModule} from "@angular/common/http";
import {CurrencyTableComponent} from './components/currency-table/currency-table.component';
import {FormsModule} from "@angular/forms";
import {CurrencyServiceService} from "./services/currency-service.service";
import {DatePipe} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SelectButtonModule} from "primeng/selectbutton";

@NgModule({
  declarations: [
    AppComponent,
    CurrencyTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    SelectButtonModule,
  ],
  providers: [CurrencyServiceService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}

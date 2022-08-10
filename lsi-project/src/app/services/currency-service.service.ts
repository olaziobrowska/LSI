import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Currency} from "../currency";
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {
  private selectedDate: Date = new Date();
  private currentRatesEndpointAddress: string = "https://api.nbp.pl/api/exchangerates/tables/A/?format=json";
  private datedRatesEndpointAddress: string = "";

  constructor(
private http: HttpClient,
private datePipe: DatePipe
  ) { }

  setDate(selectedDate: Date){
    this.selectedDate = selectedDate;
    this.datedRatesEndpointAddress = `http://api.nbp.pl/api/exchangerates/tables/A/` +
      `${this.datePipe.transform(this.selectedDate,"yyyy-MM-dd")}/?format=json`;
  }

  async getCurrentRates(){
    return await this.http.get<any>(this.currentRatesEndpointAddress).toPromise()
      .then(res => <Currency[]>res)
      .then(data => {
        return data;
      });
  }
  async getCurrentRatesFormDate(){
    return await this.http.get<any>(this.datedRatesEndpointAddress).toPromise()
      .then(res => <Currency[]>res)
      .then(data => {
        return data;
      });
  }
}

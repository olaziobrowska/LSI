import {Component, OnInit} from '@angular/core';
import {CurrencyServiceService} from "../../services/currency-service.service";
import {Currency} from "../../currency";

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit {
  dateValue = new Date();

  currencies: Currency[] = [];

  constructor(private currencyService: CurrencyServiceService) {
  }

  ngOnInit() {
    this.fetchInitial();
  }

  fetchInitial() {
    this.currencyService.getCurrentRates().then(data => this.currencies = data);
  }

  fetchDates() {
    this.currencyService.setDate(this.dateValue);
    this.currencyService.getCurrentRatesFormDate().then(data => this.currencies = data);
  }

}

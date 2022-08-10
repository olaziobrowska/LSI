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
  maxDate = new Date();
  currencies: Currency[] = [];
  stateOptions: any[];
  value1: string = "jasny";

  constructor(private currencyService: CurrencyServiceService) {
    this.stateOptions = [{label: 'Jasny', value: 'jasny'}, {label: 'Ciemny', value: 'ciemny'}];
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

  changeColor() {
    let color;
    if (this.value1 === "ciemny") {
      color = "grey";
    } else {
      color = "white";
    }
    document.body.style.background = color;
  }

}

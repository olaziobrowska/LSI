import {Component, OnInit, ViewChild} from '@angular/core';
import {CurrencyServiceService} from "../../services/currency-service.service";
import {Rate} from "../../currency";
import {Table} from "primeng/table";

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit {
  @ViewChild("allFilters", {static: false}) public allFilters: Table | undefined;
  dateValue = new Date();
  maxDate = new Date();
  currencies: any = [];
  allRates: Rate[] = [];
  stateOptions: any[];
  value1: string = "jasny";
  loading: boolean = true;
  selectedMid: Rate[] = [];
  display: boolean = false;

  constructor(private currencyService: CurrencyServiceService) {
    this.stateOptions = [{label: 'Jasny', value: 'jasny'}, {label: 'Ciemny', value: 'ciemny'}];
  }

  ngOnInit() {
    this.fetchInitial();
    this.loading = false;
  }

  fetchInitial() {
    this.currencyService.getCurrentRates().then(data => {
      this.currencies = data;
      this.allRates = data[0].rates;
    });
  }

  fetchDates() {
    this.selectedMid = [];
    this.showDialog();
    if (!this.display && this.dateValue !== null) {
      this.currencyService.setDate(this.dateValue);
      this.currencyService.getCurrentRatesFormDate().then(data => this.currencies = data);
    }
  }

  changeColor() {
    document.body.classList.toggle('dark-theme');
  }

  clear() {
    this.selectedMid = [];
    this.currencies[0].rates = this.allRates;
  }

  filterCodeValue() {
    this.currencies[0].rates = this.allRates.filter(c => this.selectedMid.map(sm => sm.code).includes(c.code));
  }

  filterCurrencyValue() {
    this.currencies[0].rates = this.allRates.filter(c => this.selectedMid.map(sm => sm.currency).includes(c.currency));
  }

  filterMidValue() {
    this.currencies[0].rates = this.allRates.filter(c => this.selectedMid.map(sm => sm.mid).includes(c.mid));
  }

  showDialog() {
    if (this.maxDate?.getDate() < this.dateValue?.getDate())
      this.display = true;
  }
}

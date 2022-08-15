import {TestBed} from '@angular/core/testing';

import {CurrencyServiceService} from './currency-service.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {DatePipe} from "@angular/common";

describe('CurrencyServiceService', () => {
  let service: CurrencyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DatePipe]
    });
    service = TestBed.inject(CurrencyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

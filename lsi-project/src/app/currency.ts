export interface Currency {
  table: string;
  no: string;
  effectiveDate: string;
  rates: Rate[];
}

export interface Rate {
  currency: string;
  code: string;
  mid: number;
}

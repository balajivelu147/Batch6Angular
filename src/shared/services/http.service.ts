import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getYahoo() {
   return this.httpClient.get(`https://query1.finance.yahoo.com/v8/finance/chart/TCS?region=IN&lang=en-IN&includePrePost=false&interval=2m&range=1d&corsDomain=in.finance.yahoo.com&.tsrc=finance`);

  }
}

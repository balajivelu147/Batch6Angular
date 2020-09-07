import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class SampleService {

  constructor() { }
  output: number = 0;

  public sampleData: string = 'balajiSample';
  public sampleNumbers: number = 0;

  public sampleObservable$ : Observable<string> = of('balaji');

  sampleAdder(a, b) {
    return a + b;
  }

  get Increment() {
    return this.output;
  }
  set Increment(a) {
    this.output += a;
  }
}

import { Injectable } from '@angular/core';

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

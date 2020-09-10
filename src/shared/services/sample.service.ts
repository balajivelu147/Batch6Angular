import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

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

  public sampleObservable$: Observable<string> = of('balaji');

  public sampleSubject = new Subject();
  public sampleSubject$ = this.sampleSubject as Observable<any>;
  public sampleBehaviourSubject = new BehaviorSubject(5);
  public sampleReplaySubject = new ReplaySubject(6);
  public sampleAsyncSubject = new AsyncSubject();


  get Subject() {
    return this.sampleSubject$;
  }

  set Subject(value) {
    this.sampleSubject.next(value);
  }


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

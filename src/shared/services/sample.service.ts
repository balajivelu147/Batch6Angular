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

  public sampleSubject = new Subject<string>();
   public sampleSubject$: Observable<string> = this.sampleSubject.asObservable();
  public sampleBehaviourSubject = new BehaviorSubject(5);
  public sampleBehaviourSubject$: Observable<number> = this.sampleBehaviourSubject.asObservable();
  public sampleReplaySubject = new ReplaySubject<number>(3);
  // public sampleReplaySubject$: Observable<number> = this.sampleReplaySubject.asObservable();
  public sampleAsyncSubject = new AsyncSubject<number>();



  getAsyncSubject(): Observable<number> {
    return this.sampleAsyncSubject;
  }

  setAsyncSubject(value) {
    this.sampleAsyncSubject.next(value);
  }

  completeAsyncSubject() {
    this.sampleAsyncSubject.complete();
  }

  getSubject(): Observable<string> {
    return this.sampleSubject$;
  }

  setSubject(value) {
    this.sampleSubject.next(value);
  }

  
  getBehSubject(): Observable<number> {
    return this.sampleBehaviourSubject$;
  }

  setBehSubject(value) {
    this.sampleBehaviourSubject.next(value);
  }


  // getreplaySubject(): Observable<number> {
  //   return this.sampleReplaySubject$;
  // }

  setReplaySubject(value) {
    this.sampleReplaySubject.next(value);
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

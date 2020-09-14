import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/shared/services/sample.service';
import { map, tap, switchMap, first } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [SampleService]
})
export class SignupComponent implements OnInit {

  constructor(public sampleService: SampleService) { }
  readSample;
  readSample2;
  readSample3;
  readSample4;
  readSample5;
  readSample6;

  ngOnInit(): void {
    // this.sampleService.sampleObservable$
    //   .subscribe((value) => {
    //     this.readSample = value;

    //   });

    // this.sampleService.sampleObservable$
    //   .pipe(
    //     tap((value) => {
    //       this.readSample2 = value;
    //     }))
    //   .subscribe();

     this.readSample3 =  this.sampleService.sampleObservable$
     .pipe(
        tap((value): string => /// wont do mutation
         value + 'Engineer'
        ))
      //.subscribe()
      ;

      this.readSample3 =  this.sampleService.sampleObservable$
      .pipe(
         map((value): string => ///  do mutation
          value + 'Engineer'
         ))
       //.subscribe()
       ;
       

      // this.sampleService.sampleObservable$
      // .pipe(
      //   map((value): string => 
      //    value + 'Engineer'
      //   ))
      // .subscribe();

      // this.sampleService.setSubject('balaji');
     this.sampleService.sampleSubject$.pipe(
       tap((value) => console.log('subject'+value) )
     ).subscribe();


     this.sampleService.setBehSubject(10);
     this.sampleService.getBehSubject().subscribe(x => console.log('behValue'+x.toString()))
 
     this.sampleService.setBehSubject(100);
     this.sampleService.getBehSubject().subscribe(x => console.log('behValue'+x.toString()))
 
     this.sampleService.setBehSubject(1000);
     this.sampleService.getBehSubject().subscribe(x => console.log('behValue'+x.toString()))
 
     this.sampleService.setReplaySubject(1);
     this.sampleService.setReplaySubject(2);
     this.sampleService.setReplaySubject(3);
     this.sampleService.sampleReplaySubject.pipe().subscribe(x => console.log('replayValue'+x.toString())).unsubscribe()

     this.sampleService.setReplaySubject(4);
     this.sampleService.setReplaySubject(5);
     this.sampleService.sampleReplaySubject.pipe().subscribe(x => console.log('replayValue'+x.toString())).unsubscribe()

     this.sampleService.setReplaySubject(6);
     this.sampleService.setReplaySubject(7);
     this.sampleService.setReplaySubject(8);
     this.sampleService.sampleReplaySubject.pipe().subscribe(x => console.log('replayValue'+x.toString())).unsubscribe()

     this.sampleService.setReplaySubject(9);
     this.sampleService.setReplaySubject(10);
     this.sampleService.setReplaySubject(11);



     this.sampleService.setAsyncSubject(1);
     this.sampleService.setAsyncSubject(2);
     this.sampleService.setAsyncSubject(3);
     this.sampleService.getAsyncSubject().subscribe(console.log);
     this.sampleService.completeAsyncSubject();

     this.sampleService.setAsyncSubject(4);
     this.sampleService.setAsyncSubject(5);
     this.sampleService.getAsyncSubject().subscribe(console.log);
     this.sampleService.getAsyncSubject().subscribe(console.log);
     this.sampleService.getAsyncSubject().subscribe(console.log);
     this.sampleService.getAsyncSubject().subscribe(console.log);

     this.sampleService.setAsyncSubject(6);
     this.sampleService.setAsyncSubject(7);
     this.sampleService.getAsyncSubject().subscribe(console.log);

     this.sampleService.setAsyncSubject(8);
     this.sampleService.setAsyncSubject(9);
     this.sampleService.setAsyncSubject(10);
     this.sampleService.setAsyncSubject(11);
     this.sampleService.setAsyncSubject(12);
     this.sampleService.getAsyncSubject().subscribe(console.log);

     this.sampleService.setAsyncSubject(13);
     this.sampleService.completeAsyncSubject();

     this.sampleService.setAsyncSubject(14);




//      const sub = new ReplaySubject(3);

// sub.next(1);
// sub.next(2);
// sub.subscribe(() => console.log("one")); 
// sub.subscribe(console.log); // OUTPUT => 1,2
// sub.next(3); // OUTPUT => 3
// sub.next(4); // OUTPUT => 4
// sub.subscribe(() => console.log("two")); 

// sub.subscribe(console.log); // OUTPUT => 2,3,4 (log of last 3 values from new subscriber)
// sub.next(5);


      // this.sampleService.getreplaySubject().subscribe(x => console.log('replayValue'+x.toString()))
 
   
   
   
    }



}

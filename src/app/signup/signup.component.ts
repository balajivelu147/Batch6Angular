import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/shared/services/sample.service';
import { map, tap, switchMap } from 'rxjs/operators';

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
  }



}

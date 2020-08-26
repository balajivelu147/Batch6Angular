import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, OnDestroy, AfterViewChecked, AfterViewInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/internal/operators/startWith';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, 
AfterContentChecked,AfterContentInit, AfterViewChecked,AfterViewInit,
OnDestroy {
  // implements --> inheritance

private data: Observable<string>;
  title: string = 'this is my first project';
  username: string;
  password;
  balaji = 'balaji1';
  constructor() {
    // let res = document.getElementById("fddsfdsfsd");
    // this.getData();
    this.title = 'this is my first project';
    this.username = "balaji";
    this.balaji = 'balaji2';
  }

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    console.log('ngOnInit()');
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.balaji = 'balaji2';

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngAfterContentChecked() {   }
  ngAfterViewInit() { 

  this.balaji = 'balaji1';
}

  ngDoCheck() {  }
  ngAfterContentInit() {  }



  ngAfterViewChecked() { }
  ngOnDestroy() {  }
  ngOnChanges() { }; 
  // this.balaji = 'balaji1';
}
  
  // ngOnInit() { console.log('ngOnInit()') }
//access specifier - public, private, protected
//   public getData(): any {
// return false;
//   }

//   signin() {
//     const loginInfo = `{
//  username: ${this.username},
//  password: ${this.password}
//     }
//  `
//     alert(loginInfo);
//     console.log(loginInfo);
//   }
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent2 {

//   data: Observable<string>;
//   title: string = 'this is my first project';
//   constructor() {
//     let res = document.getElementById("fddsfdsfsd");
//     this.getData();
//     this.title = 'this is my first project';
//   }

//   // onOnInit() {

//   // }
//   getData() {

//   }
// }


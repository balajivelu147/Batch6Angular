import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public errorMessage: string;
  public title: string = 'login to the project';
  public submit: string = 'Submit';
  constructor() {
/// condition ? expIfTrue : expIfFalse;
let x = this.submit === 'Submit' ? this.multiply(3,3) :  this.add(1,2);
//this.multiply(1.2,2.5);

   }


   multiply(x,y) {
     const val = x*y;
     return Math.round(val);
   }

   add(x,y){
    return x+y;
   }

  ngOnInit(): void {

    // this.title ="sdfdsfdsf";
  }

  ///if a value is there it will be true else false

  public signin(): void {
    const username = !this.username;
    // let checker = true;
    if(!this.username){ ///checks for undefined, null, empty
    //  if(this.username)  ///if value is there it will become true, else false
  //  if(this.username === undefined && this.username !== '' && this.username === null) {
     this.errorMessage = 'enter username';
      return;
    } else if(this.password === undefined){
     this.errorMessage = 'enter password';
      return;
    }
    this.errorMessage = undefined;
    alert("loggedIN successfully !!!!");
  }
}

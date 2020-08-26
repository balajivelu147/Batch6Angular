import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  loginForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        userName: new FormControl('balaji',
          [Validators.required,
          Validators.maxLength(10),
          Validators.pattern(/^[0-9a-zA-Z]+$/)]),
        password: new FormControl('122344'),
        confirmPassword: new FormControl('122344', ),
        email: new FormControl('balaji@gmail.com', [Validators.email])
      },
      this.customValidators
    );

    this.userNameValueChange();
    this.userNameStatusChange();
  }

  customValidators(fGroup: FormGroup) {
    return fGroup.get('password').value === fGroup.get('confirmPassword').value
      ? null : {'mismatch': true};
  }
  get userName() {
    return this.loginForm.get('userName')
  }

  userNameValueChange() {
    this.userName.valueChanges.pipe(
      map(name => console.log(name)) //typed value
    ).subscribe();
  }

  userNameStatusChange() {
    this.userName.statusChanges.pipe(
      map(status => console.log(status)) // status 
    ).subscribe();
  }

  login() {
    let val = this.loginForm.controls['userName'].value;
    let password = this.loginForm.controls['password'].value;
  }


}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sharath-batch6';

  function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email = "assharath2895@gmail.com") {
    alert("it works")
  }
  
  console.log("email : " + email);
  console.log("password :" + password);

}

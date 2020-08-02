import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-project';
  function login() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;

    if (firstname == "") {
        alert(" please enter firstname")
        console(" please enter firstname");
    }
    if (email == "") {
        alert("please enter email id")
        console("please enter email id");
    }
    if (password == "") {
        alert(" please enter password")
        console(" please enter password");
    }
    if (password == cpassword) {
        console(" passwords matched");
        alert("passwords matched")
    }
    else {
        alert("please enter same passwords")
    }
    if (firstname == "sharath " && email == "assharath2895@gmail.com" && password == "sharu" && cpassword == "sharu") {
        console.log("firstname : " + firstname);
        console.log("lastname : " + lastname);
        console.log("email : " + email);
        console.log("password : " + password);
        console.log("cpassword : " + cpassword);
        console("sharath account created successfully")
        alert(" sharath account created successfully")
    }
    else {
        console.log(" wrong credential entered");
        alert("wrong credentials entered");
    }


}
}

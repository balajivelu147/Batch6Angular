import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/shared/services/sample.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [SampleService]
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

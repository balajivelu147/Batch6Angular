import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LeftNavComponent } from 'src/app/left-nav/left-nav.component';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.scss']
})
export class ApplyLoanComponent implements OnInit, AfterViewInit {

  constructor() { }
  // @ViewChild(LeftNavComponent) child;
  ngOnInit(): void {
  }

  ngAfterViewInit() {
   // console.log(this.child.viewChildResult);
  }
}

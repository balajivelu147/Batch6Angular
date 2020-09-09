import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LeftNavComponent } from 'src/app/left-nav/left-nav.component';
import { HttpService } from 'src/shared/services/http.service';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.scss']
})
export class ApplyLoanComponent implements OnInit, AfterViewInit {

  constructor(private httpService: HttpService) { }
  // @ViewChild(LeftNavComponent) child;
  ngOnInit(): void {

    this.httpService.getYahoo().subscribe();
  }

  ngAfterViewInit() {
   // console.log(this.child.viewChildResult);
  }
}

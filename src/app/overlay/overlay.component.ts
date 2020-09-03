import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  isTextShow: boolean = true;
  btnText: string = 'show';
  constructor() { }

  ngOnInit(): void {
  }

  showBtn() {
    this.isTextShow = !this.isTextShow;
    this.btnText =  this.isTextShow ? 'show' : 'hide';
  }

}

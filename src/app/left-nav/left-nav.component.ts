import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { routes } from '../app-routing.module';
import { SampleService } from 'src/shared/services/sample.service';
// import { routes } from './../app.module';
@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit 
{

  @Input() value: string;
  @Output() outputValue = new EventEmitter<string>();
  routes = routes;

   constructor(public sampleService: SampleService) { }

  ngOnInit(): void {
console.log( this.sampleService.sampleNumbers );

  }

  sendValue() {
    this.outputValue.emit('value is emitted from child');
  }

}

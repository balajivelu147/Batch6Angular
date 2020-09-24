import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {

  transform(value: any, whichWord?: any): any {
    if(whichWord === 'first')
    return value[0]+ value[1];
    if(whichWord === 'second')
    return value.split(' ')[1][0];


    return value;
  }

}

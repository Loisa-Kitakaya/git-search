import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return this.transform(value, "EEEE d MMMM y h:mm a");
  }

}

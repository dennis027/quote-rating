import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date();
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    let dateDifference = Math.abs(todayWithNoTime - value)
    const secondsInADay = 86400;

    let dateDifferenceSeconds = dateDifference * 0.001;
    let dateCounter = dateDifferenceSeconds / secondsInADay;

    if (dateCounter >= 1 && todayWithNoTime > value) {
      return dateCounter;
    } else {   
      return 0;
    }
  }

}

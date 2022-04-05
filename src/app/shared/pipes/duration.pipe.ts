import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    let hours: number | string = Math.trunc(value/60);
    let minutes: number | string = value%60;

    hours = hours > 10 ? hours : '0' + hours;
    minutes = minutes > 10 ? minutes : '0' + minutes;

    return `${hours}:${minutes} hours`;
  }
}

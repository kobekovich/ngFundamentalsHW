import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringJoiner'
})
export class StringJoinerPipe implements PipeTransform {

  transform(value: string[], separator: string): string {
    if(!value) return '';

    return value.join(separator);
  }
}

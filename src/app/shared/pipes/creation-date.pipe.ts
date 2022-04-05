import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creationDate'
})
export class CreationDatePipe implements PipeTransform {

  transform(value: Date): string {
    return formatDate(value, 'dd.MM.yyyy', 'en-US');
  }
}

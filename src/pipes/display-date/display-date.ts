import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayDate',
})
export class DisplayDatePipe implements PipeTransform {
  /**
   * Makes dates human readable.
   */
  transform(dateISO: string, ...args) {
    let dateResult = new Date(dateISO);
    const monthNames = [
      'janvier',
      'février',
      'mars',
      'avril',
      'mai',
      'juin',
      'juillet',
      'août',
      'septembre',
      'octobre',
      'novembre',
      'décembre'
    ]

    return '  ' + dateResult.getDate() + ' ' + monthNames[dateResult.getMonth()] + ' ' + dateResult.getFullYear();
  }
}

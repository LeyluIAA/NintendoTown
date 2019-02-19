import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the EllipsisPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'ellipsis',
})
export class EllipsisPipe implements PipeTransform {
  /**
   * Takes a string and truncate it.
   */
  transform(value: object, ...args) {
    const stringValue = value['changingThisBreaksApplicationSecurity'];
    const stringLength = value['changingThisBreaksApplicationSecurity'].length;
    return stringLength > 51 ? stringValue.substring(0, 51) + '...' : stringValue;
  }
}

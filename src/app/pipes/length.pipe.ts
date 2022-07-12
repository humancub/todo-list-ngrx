import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim',
})
export class LengthPipe implements PipeTransform {
  transform(string: string = '', count: number = 57, rest: string = '') {
    console.log('string', string, count, rest);
    return string != null && string.length >= count
      ? string.substr(0, count) + rest
      : string;
  }
}

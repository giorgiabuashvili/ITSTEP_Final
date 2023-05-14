import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, replaceChar?: string): any {
    if (value === undefined) {
      return value;
    }
    if (replaceChar) {
      return replaceChar.repeat(value.length);
    }
    return '*'.repeat(value.length);
  }
}
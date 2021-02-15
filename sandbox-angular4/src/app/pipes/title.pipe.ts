import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlePipe'
})
export class TitlePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    return (gender.toLowerCase() === 'male' ? 'Mr. ' : 'Mrs. ') + value;
  }
}

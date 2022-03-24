import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {
  public transform(value: number, lacale: string): string {
    return value.toLocaleString(lacale);
  }
}

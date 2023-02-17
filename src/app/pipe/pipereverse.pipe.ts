import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipereverse'
})
export class PipereversePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const [pre, aft, aft1] = args
    if (pre && aft && aft1) return pre + value.split('').reverse().join('') + aft + aft1;
    return  value.split('').reverse().join('')
  }
}

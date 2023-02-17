import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCenter]'
})
export class CenterDirective {
  constructor(private input: ElementRef) {
    console.log(this.input, '---');
    this.input.nativeElement.focus()
    this.input.nativeElement.value = '你好我的世界'
  }
}

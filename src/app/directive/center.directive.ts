import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCenter]'
})
export class CenterDirective {

  constructor(private input: ElementRef) {
    this.input.nativeElement.focus()
  }

}

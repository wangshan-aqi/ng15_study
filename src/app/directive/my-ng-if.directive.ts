import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyNgIf]'
})
export class MyNgIfDirective {
  constructor(private templateRef:TemplateRef<any>, private viewRef: ViewContainerRef) { 
  }
  // 结构指令
  @Input()
  set appMyNgIf(flag: boolean) {
    if(flag) {
      this.viewRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewRef.clear()
    }
  }
}

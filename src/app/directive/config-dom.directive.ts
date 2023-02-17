import { Directive, ElementRef, HostListener, Input, AfterViewInit } from '@angular/core';
export interface AppConfigDomParams {
  bg: string, 
  color?: string, 
  content: string, 
  w: string, 
  h: string
}

@Directive({
  selector: '[appConfigDom]'
})
export class ConfigDomDirective implements AfterViewInit {
  // 1. 获取指令传递过来的数据，来改变元素的样式
  // 2. 监听用户的交互行为，响应不同的元素样式
  @Input('appConfigDom') appConfigDomParams!: AppConfigDomParams
  @Input() sacle!: AppConfigDomParams
  get El() {
    return this.el.nativeElement
  }
  constructor(private el: ElementRef) {
    this.el = el
  }
  ngAfterViewInit(): void {
    this.setStyle(this.appConfigDomParams)
  }
  /**
   * @param bg 背景色 {string}
   * @param color 字体颜色 {string}
   * @param content 字体颜色 {string}
   * @param w 宽度 {string}
   * @param h 高度 {string}
   */
  setStyle(params: AppConfigDomParams) {
    const {bg, color, content, w, h} = params
    this.El.style.height = h;
    this.El.style.width = w;
    this.El.style.background = bg;
    this.El.style.color = color;
    this.El.innerText = content;
  }
  /** 鼠标进入 */
  @HostListener('mouseenter', ) mouseenter() {
    this.setStyle(this.sacle)
  }
  /** 鼠标离开 */
  @HostListener('mouseleave') mouseleave() {
    this.setStyle(this.appConfigDomParams)
  }
}

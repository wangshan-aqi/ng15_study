import { Component, ElementRef, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent implements AfterViewInit{
  // 1. 装饰器 需要在视图挂在之后， 就要实现 AfterViewInit 的方法， 标签上使用模板变量绑定名称， 然后使用ViewChild装饰器来获取
  @ViewChild('cTitle') title?: ElementRef;
  // 2. 想获取多个dom元素 利用注入的方式+原生方法查找获取
  constructor(private el: ElementRef) {}
  // 3. 获取自定义组件实例对象
  @ViewChild('appA') appa?: any;

  ngAfterViewInit(): void {
    console.log(this.title);
    console.log(this.title?.nativeElement.innerText);
    console.log('---------');
    console.log(this.el.nativeElement);
    console.log(this.el.nativeElement.querySelector('div'));
    console.log('---------');
    console.log(this.appa);
  }

}

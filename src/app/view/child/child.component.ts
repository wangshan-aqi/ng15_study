import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnDestroy{
  @Input() index:number = 1000;
  
  ngOnChanges(changes: SimpleChanges): void {
     // 监听父组件传给子组件的内容前后变化 常用
    console.log(changes["index"].currentValue);
    console.log(changes["index"].previousValue);
    // throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    // 清除定时器或全局变量
    console.log('我被销毁了，清除定时器或全局变量');
  }
}

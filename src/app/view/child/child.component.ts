import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  // // @Input 接收
  // @Input() parentAliasValue!: string
  // @Input('value') childValue!: string

  // // 声明一个事件对象，来接收父组件传过来的事件
  // @Output() setValue = new EventEmitter();
  // // 向父组件发送数据
  // sendValue(event: Event) {
  //   this.setValue.emit((event.target as HTMLInputElement).value)
  // // @Input 接收

  // 自定义组件双向绑定
  @Input() master!: string
  @Output() masterChange = new EventEmitter();

  // 声明一个事件对象，来接收父组件传过来的事件
  // 向父组件发送数据
  onInput(event: Event) {
    this.masterChange.emit((event.target as HTMLInputElement).value)
  }
}

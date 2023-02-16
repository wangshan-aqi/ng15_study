import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  disabled = false
  currentItem = {
    name: ''
  }
  /**
   * 事件操作
   */
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value
  }
  print(event: MouseEvent) {
    console.log('你好我的世界');
    console.log(event.target);
    console.log((event.target as Element).getBoundingClientRect());
  }
  setDisabled() {
    this.disabled = !this.disabled
  }
  sayDiv(event: MouseEvent) {
    console.log((event.target as HTMLElement).dataset);
  }

  // 父组件传递给子组件数据
  parentValue = '我是父组件的默认写法的值'
  parentAliasValue = '我是父组件的别名值'

  getSonValue(value: string) {
    this.parentAliasValue = value
  }

  parentMVVM = '1'
}

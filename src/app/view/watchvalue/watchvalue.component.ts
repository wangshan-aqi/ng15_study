import { Component } from '@angular/core';

@Component({
  selector: 'app-watchvalue',
  templateUrl: './watchvalue.component.html',
  styleUrls: ['./watchvalue.component.scss']
})
export class WatchvalueComponent {
  _count = 1
  // 监听count变化
  get count() {
    return this._count
  }
  set count(value: number) {
    this._count = value
    // 对值的改变做监听
    console.log(value);
    if (value >= 5) {
      alert('访问次数受限')
      return
    }
  }
}

import { Component } from '@angular/core';
export interface Item  {
  id: number,
  name: string
}
export interface NumbersItem  {
  name: string
}
@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent {
  ngforData = [10, 20, 30, 40, 50]
  list = [
    {
      id: 1,
      name: '北京',
    },
    {
      id: 2,
      name: '天津',
    },
    {
      id: 3,
      name: '河北',
    },
  ]

  trackByItems(index: number, item: Item): number { return item.id; }

  // 大数据模拟
  numbers2 = new Array(100000).fill({ name: '张飞在此' }).map((item, i) => {
    item = {
      name: '张飞在此' + i
    }
    return item
  })
  // 添加数据方法
  add() {
    console.time('startTime')
    let obj = {
      name: '张飞在此' + (Math.random() * 10).toFixed(0)
    }
    this.numbers2.push(obj)
    console.timeEnd('startTime')
  }
  // trackBy 优化
  trackByNames(index: number, item: NumbersItem): string { return item.name; }
}

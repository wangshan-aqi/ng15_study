import { Component } from '@angular/core';

@Component({
  selector: 'app-ngbind',
  templateUrl: './ngbind.component.html',
  styleUrls: ['./ngbind.component.scss']
})
export class NgbindComponent {
  value = '测试属性绑定1'
  dom = `<mark>我是一个dom模板</mark>`
}

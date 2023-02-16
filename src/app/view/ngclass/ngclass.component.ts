import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent {
 title = '你好我的世界'
 classflag = true
// ngStyle第二种写法
 ngStyleObj = {
  color: '#7f9',
  background: '#099',
  fontSize: '90px'
 }
}

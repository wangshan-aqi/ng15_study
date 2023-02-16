import { Component } from '@angular/core';
export enum Texts {
  '小米好喝' = '1',
  '华为好吃' = '2',
  '世界美好' = '3'
}
@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent {
  value = '1'
}

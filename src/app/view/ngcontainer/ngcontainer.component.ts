import { Component } from '@angular/core';

@Component({
  selector: 'app-ngcontainer',
  templateUrl: './ngcontainer.component.html',
  styleUrls: ['./ngcontainer.component.scss']
})
export class NgcontainerComponent {
  // constructor() {
    list: any[] = [
      {
        id: 1,
        name: "上衣",
        color: "#f80",
        price: 100
      },
      {
        id: 2,
        name: "内衣",
        color: "#f8f",
        price: 100
      },
      {
        id: 1,
        name: "裤子",
        color: "#0f8",
        price: 100
      },
    ]
  // }
}

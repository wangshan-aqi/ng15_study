import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-pipereverse',
  templateUrl: './pipereverse.component.html',
  styleUrls: ['./pipereverse.component.scss']
})
export class PipereverseComponent {
  price: number = 12345678.999
  content: string = '人走在桥上'
  message: string = 'hello'
  datanow: number = new Date().getTime()
}

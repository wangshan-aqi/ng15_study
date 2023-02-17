import { Component } from '@angular/core';
import { AppConfigDomParams } from '../../directive/config-dom.directive'
@Component({
  selector: 'app-config-dom',
  templateUrl: './config-dom.component.html',
  styleUrls: ['./config-dom.component.scss']
})
export class ConfigDomComponent {
  params: AppConfigDomParams = {
    bg: '#f90', 
    color: '#8f0', 
    content: "你好baby", 
    w: '100px', 
    h: '100px'
  }
  params1: AppConfigDomParams = {
      bg: '#80f',
      color:'#0ff',
      content: '你好我的世界',
      w: '200px',
      h: '100px'
  }
}

import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, DoCheck{
  index: number = 0
  log(val: string): void {
    console.log(val);
  }
  constructor() {
    // 值初始化
    this.log('constructor')
  }
  ngAfterViewInit(): void {
    // 请求数据可以在这里
    this.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    // 用的不多
    this.log('ngAfterViewChecked')
  }
  ngAfterContentInit(): void {
     // 用的不多
    this.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
     // 用的不多
    this.log('ngAfterContentChecked')
  }
  ngDoCheck(): void {
    this.log('ngDoCheck')
  }
  ngOnInit(): void {
    // 请求数据可以在这里
    this.log('ngOnInit')
  }
  setIndex() {
    this.index++
  }
}
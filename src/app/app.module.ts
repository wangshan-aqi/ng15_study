import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  // 声明组件 管道符 指令
  declarations: [
    AppComponent,
  ],
  // 模块 针对全局的
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // 注入服务
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

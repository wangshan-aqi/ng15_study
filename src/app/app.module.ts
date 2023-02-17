import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CenterDirective } from './directive/center.directive';
import { CenterComponent } from './view/center/center.component';
import { ConfigDomDirective } from './directive/config-dom.directive';
import { ConfigDomComponent } from './view/config-dom/config-dom.component';
import { MyNgIfDirective } from './directive/my-ng-if.directive';
import { MyNgIfComponent } from './view/my-ng-if/my-ng-if.component';
import { PipereversePipe } from './pipe/pipereverse.pipe';
import { PipereverseComponent } from './view/pipereverse/pipereverse.component';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';

@NgModule({
  // 声明组件、指令、管道符
  declarations: [
    AppComponent,
    CenterDirective,
    CenterComponent,
    ConfigDomDirective,
    ConfigDomComponent,
    MyNgIfDirective,
    MyNgIfComponent,
    PipereversePipe,
    PipereverseComponent,
  ],
  // 模块 针对全局的
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // 注入服务
  providers: [
    // LowerCasePipe,
    // UpperCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

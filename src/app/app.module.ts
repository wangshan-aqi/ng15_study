import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgswitchComponent } from './view/ngswitch/ngswitch.component';
import { NgifComponent } from './view/ngif/ngif.component';
import { NgbindComponent } from './view/ngbind/ngbind.component';
import { NgclassComponent } from './view/ngclass/ngclass.component';
import { NgmodelComponent } from './view/ngmodel/ngmodel.component';
import { FormsModule } from '@angular/forms';
import { NgforComponent } from './view/ngfor/ngfor.component';

@NgModule({
  // 声明组件 管道符 指令
  declarations: [
    AppComponent,
    NgswitchComponent,
    NgifComponent,
    NgbindComponent,
    NgclassComponent,
    NgmodelComponent,
    NgforComponent
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

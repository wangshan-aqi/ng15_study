import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './view/parent/parent.component';
import { ChildComponent } from './view/child/child.component';
import { AComponent } from './slot/a/a.component';
import { BComponent } from './slot/b/b.component';
import { CComponent } from './slot/c/c.component';
import { NgcontainerComponent } from './view/ngcontainer/ngcontainer.component';

@NgModule({
  // 声明组件 管道符 指令
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    AComponent,
    BComponent,
    CComponent,
    NgcontainerComponent,
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

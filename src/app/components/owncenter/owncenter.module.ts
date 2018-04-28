import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// component
import { OwncenterComponent } from './owncenter.component';
// material
import {MatInputModule} from '@angular/material/input';
import { HighlightDirective } from '../../directive/highlight.directive';

@NgModule({
  imports: [
    // 核心
    CommonModule,
    // 表单
    FormsModule,
    ReactiveFormsModule,
    // materail 库
    MatInputModule,
    // 路由
    RouterModule.forChild([
      {path: '', component: OwncenterComponent}
    ])
  ],
  declarations: [
    // 组件
    OwncenterComponent,
    // 指令
    HighlightDirective,
  ]
})
export class OwncenterModule { }

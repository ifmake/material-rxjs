import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwncenterComponent } from './owncenter.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: OwncenterComponent}
    ])
  ],
  declarations: [
    OwncenterComponent,
  ]
})
export class OwncenterModule { }

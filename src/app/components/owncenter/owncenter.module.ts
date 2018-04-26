import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// component
import { OwncenterComponent } from './owncenter.component';
// material
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule.forChild([
      {path: '', component: OwncenterComponent}
    ])
  ],
  declarations: [
    OwncenterComponent,
  ]
})
export class OwncenterModule { }

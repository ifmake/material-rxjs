// core
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// component
import { HomeComponent } from './home.component';
// material module
import {MatButtonModule, MatInputModule, MatAutocompleteModule, MatSlideToggleModule} from '@angular/material';
// form
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    // material module
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    // form module
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    // router Module
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ])
  ],
  declarations: [
    HomeComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }

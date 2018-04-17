import { Component } from '@angular/core';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular移动端开发';
  checked = true;
  constructor() {}

  checkItem() {
    if (this.checked) {
      this.checked = false;
      console.log('选中');
    }else {
      this.checked = true;
      console.log('未选中');
    }
      console.log(this.checked);
  }
}

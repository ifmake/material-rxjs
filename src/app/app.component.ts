import { Component , OnInit} from '@angular/core';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular移动端开发';
  checked = true;
  constructor(
    private router: Router
  ) {}
  ngOnInit() {
    this.router.navigate(['/home']);
  }

  checkItem() {
    if (this.checked) {
      this.checked = false;
    }else {
      this.checked = true;
    }
      console.log(this.checked);
  }
}

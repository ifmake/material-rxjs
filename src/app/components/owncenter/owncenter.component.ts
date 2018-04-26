import { Component, OnInit } from '@angular/core';
import { OwnCenterService } from '../../service/owncenter/owncenter.service';
import { Config } from 'protractor/built/config';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-owncenter',
  templateUrl: './owncenter.component.html',
  styleUrls: ['./owncenter.component.scss'],
  providers: [OwnCenterService]
})
export class OwncenterComponent implements OnInit {
  userInfo: any;
  UserFormInfo = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ])
    });

  constructor(private owninfo: OwnCenterService) { }

  ngOnInit() {
    console.log(this.UserFormInfo);
    this.getOppointUserInfo();
  }

  // 获取指定用户的信息
  getOppointUserInfo() {
    this.owninfo.getCurrentUserInfo(100011120).subscribe((data: Config) => {
      this.userInfo = data;
      console.log(data);
    });
  }
  // 输入用户名
  printUserName() {
    console.log('sdfsdfsd');
  }

}

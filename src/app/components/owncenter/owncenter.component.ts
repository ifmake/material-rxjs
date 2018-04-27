import { Component, OnInit, OnChanges } from '@angular/core';
import { OwnCenterService } from '../../service/owncenter/owncenter.service';
import { Config } from 'protractor/built/config';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-owncenter',
  templateUrl: './owncenter.component.html',
  styleUrls: ['./owncenter.component.scss'],
  providers: [OwnCenterService]
})
export class OwncenterComponent implements OnInit, OnChanges {
  userInfo: any;
  UserFormInfo: FormGroup;
  constructor(private owninfo: OwnCenterService, private fb: FormBuilder) {
    // 动态响应表单
    this.UserFormInfo = this.fb.group({
      name: ['', Validators.required],
      remark: ['']
    });
  }
  ngOnInit() {
    console.log(this.UserFormInfo);
    this.getOppointUserInfo();
  }
  ngOnChanges() {}

  // 获取指定用户的信息
  getOppointUserInfo() {
    this.owninfo.getCurrentUserInfo(100011120).subscribe((data: Config) => {
      console.log(data);
      this.UserFormInfo.patchValue({
          name: data.cnname,
          remark: data.fullroute
      });
      this.userInfo = data;
    });
  }
  // 输入用户名
  printUserName() {
    console.log('sdfsdfsd');
  }

}

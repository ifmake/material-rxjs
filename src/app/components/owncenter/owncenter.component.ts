import { Component, OnInit } from '@angular/core';
import { OwnCenterService } from '../../service/owncenter/owncenter.service';
import { Config } from 'protractor/built/config';

@Component({
  selector: 'app-owncenter',
  templateUrl: './owncenter.component.html',
  styleUrls: ['./owncenter.component.scss'],
  providers: [OwnCenterService]

})
export class OwncenterComponent implements OnInit {
  userInfo: any;

  constructor(private owninfo: OwnCenterService) { }

  ngOnInit() {
    this.getOppointUserInfo();
  }

  // 获取指定用户的信息
  getOppointUserInfo() {
    this.owninfo.getCurrentUserInfo(100011120).subscribe((data: Config) => {
      this.userInfo = data;
    });
  }

}

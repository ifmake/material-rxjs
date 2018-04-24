import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { OwnCenterEntity } from '../../entity/owncenter.entity';
import { ListResult } from '../../interface/owncenter.interface';
import { BaseConfigService } from '../../../configFile/base_config.service';
import { Config } from 'protractor/built/config';

@Injectable()
export class AppService {
  constructor(protected http: HttpClient) {}

  /**
   * httpClient GET请求
   * @url {string}
   * @param {any}
   */
  FnGet(url: string, parms: any): any {
    return this.http.get(BaseConfigService.baseurl_config + url + parms);
  }
}

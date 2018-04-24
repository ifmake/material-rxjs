import { Injectable } from '@angular/core';
import { AppService } from '../common/app.service';

@Injectable()
export class OwnCenterService extends AppService {
    /**
     * 获取当前用户信息
     */
    getCurrentUserInfo(id: number | string): any {
        return this.FnGet('/user/getUserInfo/', id);
    }
}

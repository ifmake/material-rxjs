export class BaseConfigService {
    // 基础请求地址
   private static base_Url = 'http://idmdev.cq-p.com.cn:8020/';
   // 暴露配置文件
   static get baseurl_config() {
     return this.base_Url;
   }
}

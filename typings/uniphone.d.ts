import { BasePlugin } from '@cool-midway/plugin-cli';
/**
 * 一键手机号登录
 */
export declare class CoolPlugin extends BasePlugin {
  /**
   * 获得手机号
   * @param access_token 前端获取的access_token
   * @param openid 前端获取的openid
   * @param appId 前端获取的appId
   */
  getPhone(access_token: string, openid: string, appId: string): Promise<any>;
}
export declare const Plugin: typeof CoolPlugin;

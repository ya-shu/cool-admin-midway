import * as wx from './wx';
import * as uniphone from './uniphone';
import { BaseUpload, MODETYPE } from './upload';
type AnyString = string & {};
/**
 * 插件类型声明
 */
interface PluginMap {
  wx: wx.CoolPlugin;
  upload: BaseUpload;
  uniphone: uniphone.CoolPlugin;
}

/** UC相关接口类 */
declare class UC_PlatformClass extends BAIDU_PlatformClass {
    ///uc相关内容---------------------------------------------------------------
    /**
     * uc 是否登录
     */
    uc_isLogin(): Promise<boolean>;
    /**
     * uc 
     * 返回openid
     */
    uc_login(): Promise<string>;
    /**
     * uc 获取用户的当前设置，返回值包含用户当前的授权状态。
     */
    uc_getSetting(): Promise<any>;
    /**
     * uc 申请权限，请求参数是权限名称
     */
    uc_authorize(): Promise<boolean>;
    /**
     * uc 获取用户信息
     */
    uc_getUserInfo(): Promise<any>;
    /**
     * uc 获取游客用户信息
     */
    uc_getGuestInfo(): Promise<any>;
    /**
     * uc 异步获取设备信息
     */
    uc_getSystemInfoSync(): any;
    /**
     * uc 广告
     */
    uc_createBannerAd(obj: any): any;
    /**
     * uc 创建激励视频
     */
    uc_createRewardVideoAd(): any;
    /**
     * 调此接口主动发起转发 / 分享操作
     * @param obj 
     */
    uc_shareAppMessage(obj: any): void;
}

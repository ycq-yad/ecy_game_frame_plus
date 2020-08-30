//1.实现逻辑 单个的书写不同平台的接口声明class类
//2.然后依次继承 遵循如下顺序
// 微信 -> QQ -> 头条 -> vivo -> oppo -> 百度 -> uc -> 等
//3.公用的常用的放在本声明中

/** 
 * 平台公用的一些接口实现类
 */
// declare class DebugPlatform extends UC_PlatformClass {
//     /** 监听小游戏回到前台的事件 */
//     onShow(callback: Function);
//     /** 监听小游戏回到后台的事件 */
//     onHide(callback: Function);
//     /** 创建广告对象 */
//     createBannerAd(adUnitId);
//     /** 创建插屏广告组件*/
//     createInterstitialAd(obj);
//     /** 创建激励视频 @param onClose res 内有isEnded 为1 正常播放完毕 0非正常播放完毕退出 @param onError */
//     createRewardedVideoAd(adUnitId, onClose, onError);
//     /** 获取小游戏启动时的参数 */
//     getLaunchOptionsSync();
//     /** 主动分享 */
//     shareAppMessage(obj);
//     /** 短震动 */
//     vibrateShort(obj);
//     /** 长震动     */
//     vibrateLong();
//     /** 复制 @param obj   */
//     setClipboardData(obj);
//     /** 异步获取系统信息 */
//     getSystemInfoSync(): any;
//     /** 加速回收 */
//     triggerGC(): void;
//     /** 获取用户信息 在已经授权的情况才能获取，没有授权只能创建授权按钮  */
//     getUserInfo(): Promise<any>;
//     /** 校验session */
//     checkSession(obj);
//     /** 登陆 */
//     login(): Promise<any>;
//     /** 显示提示 */
//     showModal(obj);
//     /** 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效 */
//     setKeepScreenOn();
//     /** 更新转发属性 */
//     updateShareMenu();
//     /** 显示当前页面的"转发"、"分享到空间"、"分享到微信好友"、"分享到微信朋友圈"按钮 */
//     showShareMenu();
//     /** 监听用户点击右上角菜单的「转发」、「分享到空间」按钮时触发的事件 */
//     onShareAppMessage(callback);
//     /** 创建并返回内部 audio 上下文 `innerAudioContext` 对象。*本接口是 `wx.createAudioContext` 升级版。*  */
//     createInnerAudioContext(): any;
//     /** 显示 loading 提示框 */
//     showLoading(obj: Object);
//     /** 关闭 loading 提示框 */
//     hideLoading(obj: Object);
//     //创建授权按钮
//     createUserInfoButton(onTap);
// }

declare interface Platform {
    /**
     * 获取小游戏启动时的参数
     */
    getLaunchOptionsSync(): any;
    /**
     * 创建插屏
     * @param obj 
     */
    createInterstitialAd(obj: { adUnitId: String, onError?: Function, onLoad?: Function, onClose?: Function }): any;
    /**
     * 显示 loading 提示框
     */
    showLoading(obj: Object): any;
    /**
    * 关闭 loading 提示框
    */
    hideLoading(obj: Object): any;

    /**
     * 监听小游戏回到前台的事件
     */
    onShow(callback: Function);

    /**
     * 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。
     */
    onHide(callback: Function);

    /**授权 */
    authorize(): Promise<any>;

    //创建授权按钮
    createUserInfoButton(onTap);

    /**
     * 获取用户信息
     * 
     * 在已经授权的情况才能获取，没有授权只能创建授权按钮
     */
    getUserInfo(): Promise<any>;

    checkSession(obj);

    login(): Promise<any>;

    /**嘟游 登录只需要 code信息 */
    DYlogin(): Promise<string>;

    /**
     * 创建并返回内部 audio 上下文 `innerAudioContext` 对象。*本接口是 `wx.createAudioContext` 升级版。*
     */
    createInnerAudioContext(): any;

    /**
     * 分享
     * @param obj 
     */
    shareAppMessage(obj);

    /**获取token */
    getToken(): Promise<string>;

    /**获取系统信息 */
    getSystemInfo(): Promise<string>;
    getSystemInfoSync(): any;
    getMenuButtonBoundingClientRect(): Object;

    /**
     * 支付 num数量
     */
    requestMidasPayment(num, prepayid, success, fail);

    /**
     * 震动
     */
    vibrateShort(obj: Object);
    /**
     * 长震动
     */
    vibrateLong();

    /**
     * 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效
     */
    setKeepScreenOn();

    /**
     * 更新转发属性
     */
    updateShareMenu();

    /**
     * 显示当前页面的"转发"、"分享到空间"、"分享到微信好友"、"分享到微信朋友圈"按钮
     */
    showShareMenu();

    /**
     * 监听用户点击右上角菜单的「转发」、「分享到空间」按钮时触发的事件
     */
    onShareAppMessage(callback);

    /**
     * 创建激励视频
     * 
     * @param onClose res 内有isEnded 为1 正常播放完毕 0非正常播放完毕退出
     * @param onError 
     */
    createRewardedVideoAd(adUnitId, onClose, onError);

    /**创建 广告盒子 */
    createAppBox(adUnitId): any;

    /**微信授权 弹出  返回是否授权*/
    wxAuthorize(): Promise<boolean>;

    /**检验是否授权 */
    checkIsAuthorize(): Promise<boolean>;

    /**
     * 加速回收 qq上api没有公布
     */
    triggerGC();

    navigateToMiniProgram(obj);
    previewImage(obj);

    /**
     * 复制
     * @param obj 
     */
    setClipboardData(obj);

    startGyroscope(object);
    onGyroscopeChange(callback)
    offGyroscopeChange(callback)

    startDeviceMotionListening(obj)
    stopDeviceMotionListening(obj)
    onDeviceMotionChange(callback)
    offDeviceMotionChange(callback)

    createBannerAd(adUnitId): any

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
    ////////////////////////tt
    ////////////////////////tt
    /** 显示模态对话框*/
    showModal(obj: any);

    /**分享录屏 --今日头条 */
    shareVideo(obj: any);

    /**录屏工具 管理器 -今日头条 */
    getGameRecorderManager();

    /**
     * 基础库 1.33.0 开始支持本方法，低版本需做兼容处理。
     * tt.showMoreGamesModal 仅 Android 支持，iOS 不支持，开发者需做相应兼容处理。
     */
    showMoreGamesModal(obj);
    onNavigateToMiniProgram(callback);
    offNavigateToMiniProgram(callback);
    onMoreGamesModalClose(callback);
    offMoreGamesModalClose(callback);

    //销毁binner
    binnerDestroy();
}


class DebugPlatform extends OPPO_PlatformClass implements Platform {
    /**
     * 创建桌面快捷方式
     * @param obj 
     */
    installShortcut(obj) { }
    /**
     * 是否创建了快捷方式
     * obj.success 接口调用成功的回调函数。参数：true 已创建，false 未创建
     * @param obj 
     */
    hasShortcutInstalled(obj): any { }
    /**
     * 数据上报
     * @param name 
     * @param value 
     */
    reportMonitor(name: string, value: number): void { }
    /**
     * 创建原生广告
     * @param posId 
     */
    createNativeAd(posId): any { }

    createOppoNativeAd(){
        
    }
    /**
     * 插屏广告
     * @param posId 
     */
    createInterstitialAd1(posId): any { }
    createInterstitialVideoAd(obj) { }
    createBannerAd(adUnitId): any {

    }

    setLoadingProgress(progress) {
     

    }
    loadingComplete(object) {

    }
    /**创建 广告盒子 */
    createAppBox(adUnitId): any {
        return
    }

    /**
     * 获取小游戏启动时的参数
     */
    getLaunchOptionsSync(): any {

    }
    /**
    * 基础库 1.33.0 开始支持本方法，低版本需做兼容处理。
    * tt.showMoreGamesModal 仅 Android 支持，iOS 不支持，开发者需做相应兼容处理。
    */
    showMoreGamesModal(obj) {

    }
    onNavigateToMiniProgram(callback) {

    }
    offNavigateToMiniProgram(callback) {

    }
    onMoreGamesModalClose(callback) {

    }
    offMoreGamesModalClose(callback) {

    }

    /**
     * 显示 loading 提示框
     */
    showLoading(obj: Object) {

    }
    /**
    * 关闭 loading 提示框
    */
    hideLoading(obj: Object) {

    }

    previewImage(obj) {

    }

    /**
     * 监听小游戏回到前台的事件
     */
    onShow(callback: Function) { }

    /**
     * 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。
     */
    onHide(callback: Function) { }


    /**授权 */
    authorize(): Promise<any> {
        return
    }

    //创建授权按钮
    createUserInfoButton(onTap) { }

    getUserInfo(): Promise<any> {
        return
    }

    checkSession(obj) { }

    login(): Promise<any> {
        return
    }
    oppologin(pkgName: string): Promise<any> {
        return
    }

    /**嘟游 登录只需要 code信息 */
    DYlogin(): Promise<string> {
        return
    }

    /**
     * 创建并返回内部 audio 上下文 `innerAudioContext` 对象。*本接口是 `wx.createAudioContext` 升级版。*
     */
    createInnerAudioContext(): any { }

    /**
     * 分享
     * @param obj 
     */
    shareAppMessage(obj) { }

    /**获取token */
    getToken(): Promise<string> { return }

    /**获取系统信息 */
    getSystemInfo(): Promise<string> { return }

    /**
     * 支付 num数量
     */
    requestMidasPayment(num, prepayid, success, fail) {

    }

    /**
     * 震动
     */
    vibrateShort(obj: Object) { }

    /**
     * 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效
     */
    setKeepScreenOn() {

    }

    /**
     * 更新转发属性
     */
    updateShareMenu() {

    }

    /**
     * 显示当前页面的"转发"、"分享到空间"、"分享到微信好友"、"分享到微信朋友圈"按钮
     */
    showShareMenu() {

    }

    /**
     * 监听用户点击右上角菜单的「转发」、「分享到空间」按钮时触发的事件
     */
    onShareAppMessage(callback) {

    }

    /**
     * 创建激励视频
     * 
     * @param onClose res 内有isEnded 为1 正常播放完毕 0非正常播放完毕退出
     * @param onError 
     */
    createRewardedVideoAd(adUnitId, onClose, onError) {

    }
    /**
     * 
     * @param adUnitId 创建oppo视频广告
     */
    createOppoRewardedVideoAd(adUnitId){

    }

    /**微信授权 弹出  返回是否授权*/
    wxAuthorize(): Promise<boolean> {
        return
    }

    /**检验是否授权 */
    checkIsAuthorize(): Promise<boolean> {
        return
    }

    /**
     * 加速回收 qq上api没有公布
     */
    triggerGC() {

    }
    getMenuButtonBoundingClientRect() {
        return Object
    }
    /**
      * 长震动
      */
    vibrateLong() {

    }

    /**
     * 复制
     * @param obj 
     */
    setClipboardData(obj) {

    }
    //开始监听陀螺仪数据。
    startGyroscope(obj) {

    }

    //开始监听陀螺仪数据。
    createInterstitialAd(obj) {

    }

    getSystemInfoSync(): any {
        return Object;
    }

    onGyroscopeChange(callback) {

    }
    offGyroscopeChange(callback) {

    }

    startDeviceMotionListening(obj) {

    }
    stopDeviceMotionListening(obj) {

    }
    onDeviceMotionChange(callback) {

    }
    offDeviceMotionChange(callback) {

    }

    onAudioInterruptionBegin(callback) {

    }
    onAudioInterruptionEnd(callback) {

    }

    ///uc相关内容---------------------------------------------------------------
    /**
     * uc 是否登录
     */
    uc_isLogin(): Promise<boolean> {
        return
    }

    /**
     * uc 登录
     */
    uc_login(): Promise<string> {
        return
    }
    /**
     * uc 获取用户的当前设置，返回值包含用户当前的授权状态。
     */
    uc_getSetting(): Promise<any> {
        return
    }
    /**
     * uc 申请权限，请求参数是权限名称
     */
    uc_authorize(): Promise<boolean> {
        return
    }
    /**
     * uc 获取用户信息
     */
    uc_getUserInfo(): Promise<any> {
        return
    }
    /**
     * uc 获取游客用户信息
     */
    uc_getGuestInfo(): Promise<any> {
        return
    }
    /**
     * uc 异步获取设备信息
     */
    uc_getSystemInfoSync(): any {
        return
    }
    /**
     * uc 广告
     */
    uc_createBannerAd(obj: any): any {
        return
    }
    /**
     * uc 创建激励视频
     */
    uc_createRewardVideoAd(): any {
        return
    }
    /**
     * 调此接口主动发起转发 / 分享操作
     * @param obj 
     */
    uc_shareAppMessage(obj: any): void {
    }
    ////////////////////////tt
    /** 显示模态对话框*/
    showModal(obj: any) { }

    /**分享录屏 --今日头条 */
    shareVideo(obj: any) { }

    /**录屏工具 管理器 -今日头条 */
    getGameRecorderManager(): any { }

    //小游戏跳转
    navigateToMiniProgram(obj) { }

    //销毁binner
    binnerDestroy() {

    }
}

if (!window.platform) {
    window.platform = new DebugPlatform();
}

declare let platform: DebugPlatform;

declare interface Window {
    platform: DebugPlatform
}







/** 微信相关接口类 */
declare class WX_PlatformClass {
    /************************************微信相关接口***************************************************************** */
    /** wx  监听音频因为受到系统占用而被中断开始事件。 以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。*/
    wx_onAudioInterruptionBegin(callback: Function);
    /** wx  监听音频中断结束事件。 在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功 */
    wx_onAudioInterruptionEnd(callback: Function);
    /** wx  创建授权按钮 */
    wx_createUserInfoButton(onTap);
    /** wx  获取用户信息 */
    wx_getUserInfo(): Promise<any>;
    /** wx  登陆  */
    wx_login(): Promise<any>;
    /** wx  获取token*/
    wx_getToken(): Promise<any>;
    /** wx  加速回收 qq上api没有公布 */
    wx_triggerGC();
    /** wx 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。 */
    getMenuButtonBoundingClientRect(): any;
    /** wx  在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。*/
    wx_previewImage(obj);
    /** wx  跳转其他小程序 */
    wx_navigateToMiniProgram(obj);
    /** wx  支付 num数量 */
    wx_requestMidasPayment(num, prepayid, success, fail);
    /** wx  开始监听陀螺仪数据。 基础库 2.3.0 开始支持*/
    wx_startGyroscope(obj);
    /** wx  停止监听陀螺仪数据。 基础库 2.3.0 开始支持*/
    wx_stopGyroscope(obj);
    /** wx  监听陀螺仪数据变化事件。频率根据 wx.startGyroscope() 的 interval 参数。可以使用 wx.stopGyroscope() 停止监听。基础库 2.3.0 开始支持*/
    wx_onGyroscopeChange(callback);
    /** wx  取消监听陀螺仪数据变化事件。 基础库 2.9.3 开始支持*/
    wx_offGyroscopeChange(callback);
    /** wx  开始监听设备方向的变化。基础库 2.3.0 开始支持*/
    wx_startDeviceMotionListening(obj);
    /** wx  停止监听设备方向的变化。基础库 2.3.0 开始支持*/
    wx_stopDeviceMotionListening(obj);
    /** wx  监听设备方向变化事件 基础库 2.3.0 开始支持*/
    wx_onDeviceMotionChange(callback);
    /** wx  取消监听设备方向变化事件，参数为空，则取消所有的事件监听。 基础库 2.9.3 开始支持*/
    wx_offDeviceMotionChange(callback);
    /************************************微信相关接口***************************************************************** */
    // onAudioInterruptionBegin(callback);
    // onAudioInterruptionEnd(callback);
}

/**
 * 用户信息
 */
class UserInfo {
    avatarUrl: string;
    city: string;
    country: string;
    gender: number;
    language: string;
    nickName: string;
    province: string;
}




import GameEvent from "../common/GameEvent";
import { VivoAddDesktopBtn } from "../views/platform/vivo/VivoAddDesktopBtn";
import { VivoNativeBanner } from "../views/platform/vivo/VivoNativeBanner";
import { VivoNativeInsert } from "../views/platform/vivo/VivoNativeInsert";
import { MiniGameMgr } from "./MiniGameMgr";
import { VivoNativeBottemAdScene } from "../views/platform/vivo/VivoNativeBottemAdScene";
import SoundMgr from "../common/SoundManager";



/**
 * VIVO小游戏管理
 */
export class MiniVVManager extends MiniGameMgr {
    public constructor() {
        super();
    }

    // private static _ins: VVGameManager;
    // public static get instance(): VVGameManager {
    //     if (VVGameManager._ins == null) {
    //         VVGameManager._ins = new VVGameManager();
    //     }
    //     return VVGameManager._ins;
    // }
    private pkgName: string = "com.duole.fkwdxh.vivominigame";
    private appid: string = "100007170";
    private cpid: string = "01d6b7824da87456184a";
    private appkey: string = "90ddd0bd943a0c1b32dd046f1c9f9b62";
    private secret: string = "142743ced36644cc548d46739f751a99";
    private url: string = "https://yxtest.32yx.com/VivoMiniGame.fcgi";

    public systemInfo: VVSystemInfo;
    /** 进入后台的时间戳 */
    public hideTime = 0;
    /** 进入前台的时间戳 */
    public showTime = 0;
    /** 分享成功回调的等待时间 */
    public sucTime: number = 3000;
    private shareSucFun: Function;
    private shareFailFun: Function;
    public thisObj: any;



    public platformInfos = {
        bannerId: [],
        videoIds: [],
        intersIds: [],
        nativeIds: [],
        videoOpen: true,
        touchByMistake: 100,
        touchByMistakeByLook: true,
        autoTipInstallShortcut: true,
        nativeInsterAdIsFirst: false,
        startHour: 9,
        endHour: 19

    }

    /** 初始化小游戏 */
    public init() {
        this.systemInfo = <VVSystemInfo>qg.getSystemInfoSync();
        console.log("systemInfo >> ", this.systemInfo);
        qg.setKeepScreenOn({ keepScreenOn: true });
        this.getUpdateManager();
        Laya.timer.once(10000, this, () => {
            console.log("加速回收---");
            qg.triggerGC();
        });
    }


    public networkType: any = "wifi";
    public checkNetwort() {
        qg.getNetworkType({
            success: (data) => {
                if (data.type == 'none') {
                    this.networkType = "网络错误，请重新加载";
                    TipsManager.getInstance().showDefaultTips("网络错误，请重新加载");
                }
            }
        })
    }


    private onShowFun: Function;
    public onShow(callBack: Function) {
        this.onShowFun = (res) => {
            console.log("onShowFun", this.videoAdIsShow, res);
            if (!this.videoAdIsShow) {
                callBack && callBack(res);
                this.showTime = new Date().getTime();
                if (this.showTime - this.hideTime >= this.sucTime) {
                    this.shareSucFun && this.shareSucFun.call(this.thisObj);
                } else {
                    this.shareFailFun && this.shareFailFun.call(this.thisObj);
                }
                this.shareSucFun = null;
                this.shareFailFun = null;
                this.thisObj = null;
                EventMgr.getInstance().sendEvent(GameEvent.ONSHOW);
            }
        }
        qg.onShow((res) => { this.onShowFun(res); });
    }

    public shareAppMsg(data?: { message?: any, thisObj?: any, sucFun?: Function, failFun?: Function, time?: number }) {
        if (this.systemInfo.platformVersionCode < 1056) {
            // TipsManager.getInstance().showDefaultTips("")
            return;

        }
        // data: { success?: Function, fail?: (code: number, message: string) => void, cancel?: Function }
        let shareData = {}
        if (data) {
            shareData = { success: data.sucFun, fail: data.failFun, cancel: data.failFun }
        }
        qg.share(shareData)
    }


    private onHideFun: Function;
    public onHide(callBack: Function) {
        this.onHideFun = () => {
            callBack && callBack();
            this.hideTime = new Date().getTime();
            EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
        }
        qg.onHide(() => { this.onHideFun(); });
    }

    public onAudioInterruptionBegin(callBack: Function) {
        qg.onAudioInterruptionBegin(() => {
            callBack && callBack();
        });
    }

    public onAudioInterruptionEnd(callBack: Function) {
        qg.onAudioInterruptionEnd(() => {
            callBack && callBack();
        });
    }

    public async loginGame() {
        return new Promise((resolve, reject) => {
            this.login().then((res) => {
                // res = JSON.parse(res);
                // GameData.getInstance().userInfo.openId = res.openId;
                // GameData.getInstance().userInfo.nick = res.nickName;
                // GameData.getInstance().userInfo.avatarUrl = res.smallAvatar;
                // GameData.getInstance().userInfo.sex = res.gender;
                resolve();
            }).catch((err) => {
                reject();
            });
        });
    }

    /** 登录 */
    public login(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.systemInfo.platformVersionCode >= 1053) {
                resolve();
                return;

            } else {
                console.warn("版本过低")
                // reject();
                resolve();
            }
        });
    }


    // /** 获取用户信息 */
    // public getUserInfo(): Promise<VVUserInfo> {
    //     return new Promise((resolve) => {
    //         if (this.systemInfo.platformVersionCode >= 1053) {
    //             qg.getUserInfo({
    //                 success: (res) => {
    //                     console.log("获取用户信息成功！", res);
    //                     resolve(res.data);
    //                 },
    //                 fail: (res) => {
    //                     console.log("用户未授权", res);
    //                     resolve(null);
    //                 }
    //             });
    //         } else {

    //         }

    //     });
    // }

    /** 初始玩家信息 拉取授权等 */
    public async initUserInfo() {
        // let info = await this.getUserInfo();
        // if (!info) info = await this.createUserInfoButton();
        // console.log("获取用户的基本信息:", info);
        // GameData.instance.userInfo.nick = info.nickName;
        // GameData.instance.userInfo.avatarUrl = info.avatarUrl;
        // GameData.instance.userInfo.sex = info.gender;
    }

    /** 获取全局唯一的版本更新管理器，用于管理小程序更新 */
    public getUpdateManager() {
        // let updateManager = wx.getUpdateManager();
        // updateManager.onCheckForUpdate((res) => {
        //     console.log("是否有新版本:", res);
        // });
        // qg.onUpdateReady((res) => {
        //     qg.showModal({
        //         title: "更新提示",
        //         showCancel: false,
        //         content: "新版本已经准备好，是否重启应用？",
        //         success: (res) => {
        //             res.confirm && updateManager.applyUpdate();
        //         }
        //     });
        // });
        // updateManager.onUpdateFailed((err) => {
        //     console.warn("新版本更新失败:", err);
        // });
    }


    private addDesktopBtn: VivoAddDesktopBtn;
    private shortcutLastTime: number;
    /** 显示创建桌面图标按钮 */
    public showAddDesktopBtn(data: { box: Laya.Sprite }) {
        if (this.systemInfo.platformVersionCode < 1041) {
            console.warn("当前版本过低，无法创建桌面图标，请升级！");
            return;
        }
        qg.hasShortcutInstalled({
            success: (status) => {
                if (status) {
                    console.log("桌面图标已创建");
                    // this.addDesktopBtn && this.addDesktopBtn.destroy();
                    data.box.visible = false;
                } else {
                    console.log("桌面图标未创建");
                    // if (!this.addDesktopBtn) {
                    //     this.addDesktopBtn = new VivoAddDesktopBtn();
                    //     data.box.addChild(this.addDesktopBtn);
                    //     this.addDesktopBtn.pos(data.x, data.y);
                    //     this.addDesktopBtn.onClick(() => {
                    //         this.installShortcut();
                    //     });
                    // }
                    data.box.visible = true;

                }
            }
        });
    }

    /** 提示创建桌面图标 */
    public tipInstallShortcut(data: { success: Function, fail: Function }) {
        if (this.systemInfo.platformVersionCode < 1041) {
            console.warn("当前版本过低，无法创建桌面图标，请升级！");
            return;
        }
        qg.hasShortcutInstalled({
            success: (status) => {
                if (status) {
                    console.log("桌面图标已创建");
                    data.success && data.success(false);
                    // this.addDesktopBtn && this.addDesktopBtn.destroy();
                } else {
                    console.log("桌面图标未创建");
                    this.installShortcut(data);

                }
            }
        });
    }

    /** 创建桌面图标 */
    private installShortcut(data: { success: Function, fail: Function }) {
        if (this.shortcutLastTime) {
            let curTime = (new Date()).getTime();
            if ((curTime - this.shortcutLastTime) <= 120000) {
                console.warn("创建桌面图标请求间隔不得少于120s");
                data.fail && data.fail();

                // TipsManager.getInstance().showDefaultTips("创建桌面图标请求间隔不得少于120s");
                return;
            }
        }
        this.shortcutLastTime = (new Date()).getTime();
        qg.installShortcut({
            success: () => {
                console.log("创建桌面图标成功");
                data.success && data.success(true);

                // this.addDesktopBtn && this.addDesktopBtn.destroy();
            },
            fail: () => {
                data.fail && data.fail();

            }
        });
    }

    /**************************************** 分享 ****************************************/


    /**************************************** 广告 ****************************************/

    private videoAd: VVRewardedVideoAd;
    private videoAdLastTime: number;
    private videoAdIsShow: boolean = false;
    /** 播放视频广告 **/
    public playVideoAd(data: { successFun?: Function, failFun?: Function, errorFun?: Function, isLongVideo?: boolean, sceneKey?: string }) {
        let videoId = this.platformInfos.videoIds;
        let len = videoId.length;
        if (len <= 0) {
            TipsManager.getInstance().showDefaultTips("开发中");
            data.errorFun && data.errorFun();
            return;
        }
        if (this.systemInfo.platformVersionCode < 1041) {
            console.warn("当前版本过低，无法创建视频广告，请升级！");
            TipsManager.getInstance().showDefaultTips("当前版本过低，无法创建视频广告，请升级！");
            data.errorFun && data.errorFun();
            return;
        }
        if (this.videoAdLastTime) {
            let curTime = (new Date()).getTime();
            if ((curTime - this.videoAdLastTime) <= 60000) {
                console.warn("视频广告请求间隔不得少于60s");
                TipsManager.getInstance().showDefaultTips("视频广告请求间隔不得少于60s");
                data.errorFun && data.errorFun();
                return;
            }
        }
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
        qg.showLoading({ message: "广告加载中" });
        let index = 0;
        let createCall = (adId: string) => {
            index++;
            this.videoAd = qg.createRewardedVideoAd({ posId: adId });
            this.videoAd.onError(errorCall);
            this.videoAd.onLoad(loadCall);
            this.videoAd.onClose(closeCall);
        }
        let loadCall = (res) => {
            console.log("激励视频广告 加载成功", res);
            this.videoAdLastTime = (new Date()).getTime();
            this.videoAd.offError(errorCall);
            this.videoAd.offLoad(loadCall);
            showCall(false);
        }
        let closeCall = (res) => {
            console.log("激励视频广告 关闭", res);
            if (res && res.isEnded) {//正常关闭
                data.successFun && data.successFun();
            } else {
                data.failFun && data.failFun();
            }
            this.videoAdIsShow = false;
            this.onShowFun && this.onShowFun();
            SoundMgr.getInstance().bgvolume = 1;
            this.videoAd.offClose(closeCall);
            this.videoAd.offError(errorCall);
            this.videoAd.offLoad(loadCall);
            qg.hideLoading();
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

        };
        let errorCall = (err) => {
            this.videoAd.offClose(closeCall);
            this.videoAd.offError(errorCall);
            this.videoAd.offLoad(loadCall);
            if (index >= len) {
                console.warn("激励视频广告 onError", err);
                TipsManager.getInstance().showDefaultTips("视频加载错误,请稍后再试");
                data.errorFun && data.errorFun(err);
                qg.hideLoading();
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

            } else {
                createCall(videoId[index]);
            }
        };
        let showCall = (reload: boolean) => {
            if (reload) {
                if (this.videoAd.load) {
                    this.videoAd.load().then((res) => {
                        loadCall(res);
                    }).catch(err => {
                        errorCall(err);
                    });
                } else {
                    errorCall(null);
                }
            } else {
                if (this.videoAd.show) {
                    this.videoAd.show().then(() => {
                        console.log("激励视频广告 显示成功");
                        this.videoAdIsShow = true;
                        this.onHideFun && this.onHideFun();
                        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

                        // SoundManager.instance.musicVolume = 0;
                        SoundMgr.getInstance().bgvolume = 0;

                        qg.hideLoading();
                    }).catch((err) => {
                        console.log("激励视频广告 显示失败", err);
                        if (this.videoAd.load) {
                            this.videoAd.load().then((res) => {
                                loadCall(res);
                            }).catch(err => {
                                errorCall(err);
                            });
                        } else {
                            errorCall(err);
                        }
                    });
                } else {
                    errorCall(null);
                }
            }
        }
        if (!this.videoAd) {
            createCall(videoId[index]);
        } else {
            this.videoAd.onClose(closeCall);
            showCall(true);
        }
    }

    private vivoBannerAd: VivoNativeBanner;
    public canShowBanner = true;
    /** 显示banner */
    public async showBanner(data: { isNative?: boolean, w?: number, h?: number, callback?: Function }) {
        
        data.isNative = true;
        this.canShowBanner = true;
        if (data && data.isNative) {
            if (!this.vivoBannerAd || this.vivoBannerAd.destroyed) {
                let nativeAd = await this.loadNativeAd();
                if (nativeAd) {//拉取到原生广告
                    let vivoNativeBanner = new VivoNativeBanner(nativeAd);
                    Laya.stage.addChild(vivoNativeBanner);
                    if (this.canShowBanner) vivoNativeBanner.show();
                    this.vivoBannerAd = vivoNativeBanner;
                } else {
                    let canShowBanner = await this.showVivoBannerAd();
                    if (canShowBanner) {//拉取到banner
                        if (!this.canShowBanner) this.hideBannerAd();
                    } else {//拉取不到banner,显示互推

                    }
                }
            } else {
                this.vivoBannerAd.show();
            }
        } else {
            let canShowBanner = await this.showVivoBannerAd();
            if (canShowBanner) {//拉取到banner
                if (!this.canShowBanner) this.hideBannerAd();
            }
        }
    }

    /** 销毁banner */
    public destoryBanner() {
        if (this.vivoBannerAd) {
            this.vivoBannerAd.hide();
            this.vivoBannerAd.destroy();
        }
        if (this.vivoNativeBottemAdScene) {
            this.vivoNativeBottemAdScene.hide();
            this.vivoNativeBottemAdScene.destroy();
        }

        this.vivoNativeBottemAdScene == null;

        this.bannerAd && this.bannerAd.destroy();
        this.clearBannerFun && this.clearBannerFun();
        this.clearBannerFun = null;
        this.vivoBannerAd = null;
        this.bannerAd = null;
        this.canShowBanner = false;
    }

    /** 隐藏banner */
    public hideBannerAd() {
        if (this.vivoBannerAd) {
            this.vivoBannerAd.hide();
            this.vivoBannerAd.destroy();
        }
        if (this.vivoNativeBottemAdScene) {
            this.vivoNativeBottemAdScene.hide();
            this.vivoNativeBottemAdScene.destroy();
        }
        this.vivoNativeBottemAdScene = null
        this.vivoBannerAd = null;
        this.clearBannerFun && this.clearBannerFun();
        this.clearBannerFun = null;
        this.canShowBanner = false;
    }

    public bannerAd: VVBannerAd;
    private bannerAdLastTime: number;
    private bannerAdIndex: number = 0;
    private clearBannerFun: Function;
    private showVivoBannerAd() {
        return new Promise<boolean>(resolve => {
            let bannerId = this.platformInfos.bannerId;
            let len = bannerId.length;
            if (len <= 0) {
                resolve(false);
                return;
            }
            if (this.systemInfo.platformVersionCode < 1031) {
                console.warn("当前版本过低，无法创建Banner广告，请升级！");
                resolve(false);
                return;
            }
            if (this.bannerAdLastTime) {
                let curTime = (new Date()).getTime();
                if ((curTime - this.bannerAdLastTime) <= 10000) {
                    console.warn("Banner广告请求间隔不得少于10s");
                    resolve(false);
                    return;
                }
            }
            this.canShowBanner = true;
            // let index = 0;
            let createCall = (adId: string) => {
                console.log("banner 广告 创建", adId);
                this.clearBannerFun && this.clearBannerFun();
                this.clearBannerFun = null;
                // index++;
                this.bannerAdIndex++;
                this.bannerAdLastTime = (new Date()).getTime();
                this.bannerAd = qg.createBannerAd({
                    posId: adId,
                    style: {}
                });
                this.bannerAd.onError(errorCall);
                this.bannerAd.onLoad(loadCall);
                this.bannerAd.onSize(sizeCall);
                this.clearBannerFun = () => {
                    if (this.bannerAd) {
                        this.bannerAd.offLoad(loadCall);
                        this.bannerAd.offSize(sizeCall);
                        this.bannerAd.offError(errorCall);
                        this.bannerAd.destroy();
                        this.bannerAd = null;
                    }
                }
                showCall();
            }
            let loadCall = (res) => {
                console.log("banner 广告 onLoad 成功", res);
                // this.bannerAd.offError(errorCall);
                // this.bannerAd.offLoad(loadCall);
                // showCall();
            }
            let errorCall = (err) => {
                console.warn("banner 广告 onError ", err);
                // if (index >= len) {
                //     resolve(false);
                // } else {
                if (this.bannerAdIndex >= len) {
                    this.bannerAdIndex = 0;
                    resolve(false);
                } else {
                    resolve(false);
                    // createCall(bannerId[index]);
                }
            }
            let sizeCall = (res) => {
                console.log("banner 广告 onSize ", res, this.bannerAd);
            }
            let showCall = () => {
                if (this.canShowBanner) {
                    this.bannerAd.show().then(() => {
                        console.log("banner广告展示完成");
                        resolve(true);
                    }).catch(err => {
                        errorCall(err);
                    });
                } else {
                    this.bannerAd.hide();
                    resolve(true);
                }
            }
            // if (!this.bannerAd) {
            createCall(bannerId[this.bannerAdIndex]);
            // createCall(bannerId[index]);
            // } else {
            //     showCall();
            // }
        });
    }

    private vivoInsertAd: VivoNativeInsert;
    /** 显示插屏广告 */
    public async showInsertAd(data: { successFun?: Function, errorFun?: Function, closeFun?: Function }) {
        // console.log("showInsertAd", this.vivoInsertAd);
        if (this.platformInfos.nativeInsterAdIsFirst) {
            this.showGameNativeInsertAdFirst(data);
        } else {
            this.showGameInsertAdFirst(data);

        }
    }
    /**
     * 首先展示原生插屏
     * @param data 
     */
    private async showGameNativeInsertAdFirst(data: { successFun?: Function, errorFun?: Function, closeFun?: Function }) {
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);

        if (!this.vivoInsertAd || this.vivoInsertAd.destroyed) {

            let nativeAd = await this.loadNativeAd();
            if (nativeAd) {//拉取到原生广告
                let vivoNativeInsert = new VivoNativeInsert(nativeAd);
                Laya.stage.addChild(vivoNativeInsert);
                vivoNativeInsert.show(data);
                vivoNativeInsert.closeFun = () => {
                    this.vivoInsertAd = null;
                }
                this.vivoInsertAd = vivoNativeInsert;
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

            } else {
                this.showVivoInsertAd(data);
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

            }
        } else {
            this.vivoInsertAd.show(data);
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

        }
    }
    /**
     * 首先展示正常的插屏
     */
    private async showGameInsertAdFirst(data: { successFun?: Function, errorFun?: Function, closeFun?: Function }) {
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
        if (!this.vivoInsertAd || this.vivoInsertAd.destroyed) {
            let flag = await this.showVivoInsertAdAsync(data);

            if (flag) {
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
            } else {
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
                let nativeAd = await this.loadNativeAd();
                if (nativeAd) {//拉取到原生广告
                    let vivoNativeInsert = new VivoNativeInsert(nativeAd);
                    Laya.stage.addChild(vivoNativeInsert);
                    vivoNativeInsert.closeFun = () => {
                        this.vivoInsertAd = null;
                    }
                    vivoNativeInsert.show(data);
                    this.vivoInsertAd = vivoNativeInsert;
                } else {
                    data.errorFun && data.errorFun();
                }
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
            }
        } else {
            this.vivoInsertAd.show(data);
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

        }
    }
    /**
     * 异步展示插屏
     * @param data 
     */
    private async showVivoInsertAdAsync(data: { successFun?: Function, errorFun?: Function, closeFun?: Function }): Promise<any> {
        return new Promise((resolve) => {
            let intersId = this.platformInfos.intersIds;
            let len = intersId.length;
            if (len <= 0) {
                // data.errorFun && data.errorFun();
                resolve(false);
                return;
            }
            if (this.systemInfo.platformVersionCode < 1031) {
                console.warn("当前版本过低，无法创建插屏广告，请升级！");
                // data.errorFun && data.errorFun();
                resolve(false);

                return;
            }
            if (this.insertAdLastTime) {
                let curTime = (new Date()).getTime();
                if ((curTime - this.insertAdLastTime) <= 15000) {
                    console.warn("插屏广告请求间隔不得少于15s");
                    // data.errorFun && data.errorFun();
                    resolve(false);
                    return;
                }
            }

            console.log("插屏广告 加载");
            let self = this;
            const interstitialAd = qg.createInterstitialAd({
                posId: intersId[0]
            });
            let onError = (err) => {
                console.log("插屏广告加载失败", err);
                // data.errorFun && data.errorFun();
                interstitialAd.offClose(onCloseFun)
                interstitialAd.offError(onError)
                resolve(false);

            }

            interstitialAd.onError(onError);
            let onCloseFun = () => {
                data.closeFun && data.closeFun();
                interstitialAd.offClose(onCloseFun)
                interstitialAd.offError(onError)
            }
            interstitialAd.onClose(onCloseFun)

            interstitialAd.show().then(() => {
                console.log('插屏广告展示完成');
                data.successFun && data.successFun();
                resolve(true);


            }).catch((err) => {
                // data.errorFun && data.errorFun();
                resolve(false);
                console.log('插屏广告展示失败', JSON.stringify(err));
            })

        })
    }


    /** 销毁插屏 */
    public destoryInsert() {
        this.vivoInsertAd && this.vivoInsertAd.destroy();
        // this.insertAd && this.insertAd.destroy();
        this.vivoInsertAd = null;
        this.insertAd = null;
    }

    private insertAd: VVInterstitialAd;
    private insertAdLastTime: number;
    /**
     * 展示插屏
     * @param data 
     */
    private showVivoInsertAd(data: { successFun?: Function, errorFun?: Function, closeFun?: Function }) {
        let intersId = this.platformInfos.intersIds;
        let len = intersId.length;
        if (len <= 0) {
            data.errorFun && data.errorFun();
            return;
        }
        if (this.systemInfo.platformVersionCode < 1031) {
            console.warn("当前版本过低，无法创建插屏广告，请升级！");
            data.errorFun && data.errorFun();
            return;
        }
        if (this.insertAdLastTime) {
            let curTime = (new Date()).getTime();
            if ((curTime - this.insertAdLastTime) <= 15000) {
                console.warn("插屏广告请求间隔不得少于15s");
                data.errorFun && data.errorFun();
                return;
            }
        }
        console.log("插屏广告 加载");
        let self = this;
        const interstitialAd = qg.createInterstitialAd({
            posId: intersId[0]
        });
        let onError = (err) => {
            console.log("插屏广告加载失败", err);
            data.errorFun && data.errorFun();
            interstitialAd.offClose(onCloseFun)
            interstitialAd.offError(onError)
        }

        interstitialAd.onError(onError);
        let onCloseFun = () => {
            data.closeFun && data.closeFun();
            interstitialAd.offClose(onCloseFun)
            interstitialAd.offError(onError)
        }
        interstitialAd.onClose(onCloseFun)

        interstitialAd.show().then(() => {
            console.log('插屏广告展示完成');
            data.successFun && data.successFun();


        }).catch((err) => {
            data.errorFun && data.errorFun();
            console.log('插屏广告展示失败', JSON.stringify(err));
        })
        // this.insertAd.onError(errorCall);
    }

    private nativeAdLastTime: number;
    private nativeAdData;
    /** 加载原生广告 */
    public async loadNativeAd(index = 0): Promise<any> {
        return new Promise(resolve => {
            console.warn("开始加载广告！");

            let nativeId = this.platformInfos.nativeIds;
            let len = nativeId.length;
            if (len <= 0 || index >= len) {
                resolve(null);
                return;
            }
            if (this.systemInfo.platformVersionCode < 1053) {
                console.warn("当前版本过低，无法创建原生广告，请升级！");
                resolve(null);
                return;
            }
            if (this.nativeAdLastTime) {
                let curTime = (new Date()).getTime();
                if ((curTime - this.nativeAdLastTime) <= 10000) {
                    console.warn("原生广告请求间隔不得少于10s");
                    resolve(this.nativeAdData || null);
                    return;
                }
            }
            let adId = nativeId[index];
            let nativeAd = qg.createNativeAd({ posId: adId });
            let loadCall = async (res) => {
                console.log("原生广告 加载成功", res);
                if (res && res.adList) {
                    this.nativeAdLastTime = (new Date()).getTime();
                    nativeAd.offError(errorCall);
                    nativeAd.offLoad(loadCall);
                    this.nativeAdData = { nativeAd: nativeAd, adList: res.adList };
                    resolve({ nativeAd: nativeAd, adList: res.adList });
                } else {
                    resolve(await this.loadNativeAd(index));
                }
            }
            let errorCall = async (err) => {
                console.log("原生广告 加载错误", err);
                nativeAd.offLoad(loadCall);
                nativeAd.offError(errorCall);
                index++;
                resolve(await this.loadNativeAd(index));
            };
            nativeAd.onLoad(loadCall);
            nativeAd.onError(errorCall);
            nativeAd.load();
        });
    }


    /**
     * 原生游戏底部广告  不是banner
     */
    private vivoNativeBottemAdScene: VivoNativeBottemAdScene
    public async  showBottomNativeAd(box_platform: Laya.Sprite, ys?: number) {
        return new Promise(async (resolve) => {
            this.hideBannerAd();
            let nativeAd = await this.loadNativeAd();
            if (nativeAd) {
                console.log("showBottomNativeAd>>>>>>>>>>>>>>>加载成功")
                if (this.vivoNativeBottemAdScene == null) {
                    this.vivoNativeBottemAdScene = new VivoNativeBottemAdScene(nativeAd)
                } else {
                    this.vivoNativeBottemAdScene.setData(nativeAd);
                }
                this.vivoNativeBottemAdScene.x = (Laya.stage.width - this.vivoNativeBottemAdScene.width) / 2;
                this.vivoNativeBottemAdScene.y = ys ? ys : Laya.stage.height - this.vivoNativeBottemAdScene.height;
                box_platform.addChild(this.vivoNativeBottemAdScene)
            } else {
                this.showBanner({});
            }
            resolve()
        })

    }
    /**************************************** 其他 ****************************************/


}


/** VIVO 系统信息 */
declare interface VVSystemInfo {
    /** 设备品牌 */
    brand: string;
    /** 设备生产商 */
    manufacturer: string;
    /** 设备型号 */
    model: string;
    /** 设备代号 */
    product: string;
    /** 操作系统名称 */
    osType: string;
    /** 操作系统版本名称 */
    osVersionName: string;
    /** 操作系统版本号 */
    osVersionCode: string;
    /** 运行平台版本名称 */
    platformVersionName: string;
    /** 运行平台版本号 */
    platformVersionCode: number;
    /** 当前环境设置的语言 */
    language: string;
    /** 系统地区 */
    region: string;
    /** 屏幕宽度 */
    screenWidth: number;
    /** 屏幕高度 */
    screenHeight: number;
    /** 当前电量，0.0 - 1.0 之间 */
    battery: number;
    /** wifi信号强度，范围0 - 4 */
    wifiSignal: number;
}
window["VVGameManager"] = MiniVVManager

export class NativeVivoAd {
    public adId: string;
    public clickBtnTxt: string;
    public creativeType: number;
    public desc: string;
    public icon: string;
    public logoUrl: string;
    public title: string;
    public iconUrlList: string[];
    public imgUrlList: string[];
    public interactionType: number;
}
import { OppoManager } from "./OppoManager";
import { MiniGameMgr } from "./MiniGameMgr";
import { GDataMgr } from "../common/GameData";
import GameEvent from "../common/GameEvent";
import { OppoNativeBanner } from "../views/platform/oppo/OppoNativeBanner";

//import { GameData } from "../common/GameData";
// import { OppoNativeBanner } from "../views/oppo/OppoNativeBanner";
// import { OppoManager } from "../views/oppo/OppoManager";
// import { OppoMoreGameBanner } from "../views/oppo/OppoMoreGameBanner";

/**
 * 魅族小游戏管理
 */
export class MiniOppoManager extends MiniGameMgr {

    private url: string = "https://yxtest.32yx.com/MZMiniGame.fcgi";

    public systemInfo: any;
    /** 进入后台的时间戳 */
    public hideTime = 0;
    /** 进入前台的时间戳 */
    public showTime = 0;

    public initMiniGameAfterLoadres() {
        if (this.box_platform == null) {
            this.box_platform = new Laya.Box();
            this.box_platform.size(Laya.stage.width, Laya.stage.height);
            this.box_platform.mouseThrough = true;
        }
        Laya.stage.addChild(this.box_platform);
        OppoManager.instance.initGame();
    }
    /** 初始化小游戏 */
    public initMiniGame() {

        this.systemInfo = platform.getSystemInfoSync()
        console.log("systemInfo >> ", this.systemInfo);
    }

    public setLoadingProgress(progress) {
        platform.setLoadingProgress({
            progress: progress
        });

    }
    public loadingComplete(object) {
        platform.loadingComplete(object)

    }
    /**
        * oppo跳转
        * @param pkname 
        */
    public oppoNavigateToMiniProgram(pkname: string): void {
        console.log("oppoNavigateToMiniProgram  ->  ", pkname);
        platform.navigateToMiniProgram(pkname);
    }


    /**
    * 创建快捷方式
    */
    public createShortCut(succCall?: Function): void {
        MiniGameMgr.instance.hasShortcutInstalled().then((res) => {
            if (res == false) {
                platform.installShortcut({
                    success: function () {
                        // 执行用户创建图标奖励
                        succCall && succCall();
                    },
                    fail: function (err) {

                    },
                    complete: function () {

                    }
                })
            } else {
                succCall && succCall();

            }
        });
    }

    /**
      * 是否已经添加了快捷方式
      */
    public hasShortcutInstalled(): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            platform.hasShortcutInstalled({
                success: function (res) {
                    resolve(res);
                },
                fail: function () {
                    resolve(false);
                }
            });
        });
    }


    /**
     * 数据上报
     * @param name 
     * @param value 
     */
    public reportMonitor(name: string, value: number): void {
        if (DeviceUtil.isOPPOMiniGame()) {
            platform.reportMonitor(name, value);
        }
    }
    public onShow(callBack: Function) {
        platform.onShow((res) => {
            callBack && callBack(res);
            this.showTime = new Date().getTime();
            // EventMgr.getInstance().sendEvent(GameEvent.ONSHOW);
        });
    }

    public onHide(callBack: Function) {
        platform.onHide(() => {
            callBack && callBack();
            this.hideTime = new Date().getTime();
            //EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
        });
    }

    public async loginGame() {
        let self = this
        return new Promise(async (resolve, reject) => {
            let info = await self.login();

            if (info) {
                if (typeof info == "string") {
                    info = JSON.parse(info);
                }

                // if (info typeof String) {

                //     
                // }
                console.log("loginGame success ", info);
                // "{"code":"200","message":"","redirect":"","value":{"clientId":"KzA76k3lBCYDqKTy6VYvb9WR6QSUWVGJ","icon":"https://image.meizu.com/image/uc/16b0181757f1412bb513d58800d1a686z?t=946656000000","nickname":"用户676662596","scope":"basic","userId":169165649}}"
                GDataMgr.getInstance().uinfo.openId = info.clientId;
                GDataMgr.getInstance().uinfo.nick = info.nickname;
                GDataMgr.getInstance().uinfo.avatarUrl = info.icon;
            }
            resolve(info);

        });
    }

    /** 登录 */
    public async login(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            if (!DeviceUtil.isOPPOMiniGame()) {
                reject(null);
                return
            }

            let data = await platform.oppologin('')
            console.log("login>>>>>>>>>>", data);
            resolve(data)
        });
    }

    /**
     * oppo的基本配置数据
     * 
     *  nativeIdText  结算页面“查看”按钮与“查看广告”按钮的切换开关
     * clickWeght 原生广告关闭按钮的误点开关，误点概率需可随时调整，先默认30%。用户误点返回后，关闭按钮变会正常关闭
     * selBannerOrmoreGame:  1  关闭  2  打开
     * （1）开关关闭：结算界面的banner 改为显示滚动轮播式互推。
       （2）开关打开：结算界面显示banner 
     */
    public platformInfos = {
        "banner": {
            "GameHomeView": [203979],
            "SignView": [203980],
            "GameView": [203981],
            "SuccessfulEntryOneView": [203986]
        },
        "native": {
            "SuccessfulEntryThreeView": [203996, 204022],
            "FailEntryTwoView": [203999, 204022],
            "FailEntryOneView": [204000, 204022],
            "LevelView": [204001, 204022],
            "AddPsView": [204002, 204022]
        },
        "video": {
            "freeScene": [204009],
            "freeGold": [204010],
            "SignView": [204011],
            "GameTip": [204013],
            "SuccessfulEntryThreeView": [204014],
            "FailEntryOneView": [204015],
            "FailEntryTwoView": [204016]
        },
        "videoId": [204025],
        "nativeId": [204022]

    }


    /** 初始玩家信息 拉取授权等 */
    public async initUserInfo() {
        // let info = await this.getUserInfo();
        // if (!info) await this.createUserInfoButton();
        // GameData.instance.userInfo.nick = info.nickName;
        // GameData.instance.userInfo.avatarUrl = info.avatarUrl;
    }

    /**************************************** 广告 ****************************************/

    public videoAd: any;
    /** 播放视频广告 **/
    public playVideoAd(data: { successFun?: Function, failFun?: Function, errorFun?: Function, isLongVideo?: boolean, gameConstKey?: string }) {
        if (!DeviceUtil.isOPPOMiniGame()) {
            data.successFun && data.successFun();
            return;
        }

        if (this.platformInfos == null) {
            data.errorFun && data.errorFun();
            TipsManager.getInstance().showDefaultTips("暂无广告id");
            return
        }
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true)


        let videoIdArr = this.platformInfos.video[data.gameConstKey];
        if (videoIdArr == null) {
            videoIdArr = this.platformInfos.videoId;
        }
        if (videoIdArr.length <= 0) {
            TipsManager.getInstance().showDefaultTips("开发中");
            data.errorFun && data.errorFun();
            return;
        }
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
        let adId = videoIdArr[Math.floor(Math.random() * videoIdArr.length)];
        let onError = data.errorFun;

        let videoAd;
        let adUnitId = adId;
        let phone = platform.getSystemInfoSync() as OPSystemInfo;
        if (phone.platformVersionCode < 1051) {
            console.warn("当前版本过低，不支持创建视频播放");
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

            onError();
            return;
        }
        let clearVideoFun = () => {
            if (videoAd) {
                videoAd.offLoad();
                videoAd.offClose(onCloseCall);
                videoAd.offError(onErrorCall);


            }
        }
        let onLoadFun = (res) => {
            console.log('videoAd onLoad', res);
            // clearVideoFun();

        }
        console.log("创建视频播放  - > " + adUnitId);
        if (!videoAd) {
            // videoAd = qg.createRewardedVideoAd({
            //     adUnitId: adUnitId
            // });

            videoAd = platform.createOppoRewardedVideoAd(adUnitId);
            videoAd.onLoad(onLoadFun);
        }


        let onCloseCall = (res) => {
            console.log('videoAd onClose', res);
            if (res.isEnded || res.isEnd) {
                data.successFun && data.successFun();
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

            } else {
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

                data.failFun && data.failFun();

            }
            clearVideoFun();
        };
        videoAd.onClose(onCloseCall);

        let onErrorCall = (res) => {
            console.log('videoAd onError', res);
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
            if (onError) {
                TipsManager.getInstance().showDefaultTips("暂无广告");
                onError(res);
            }
            clearVideoFun();
        };
        videoAd.onError(onErrorCall);

        videoAd.load().then(() => {
            console.log('激励视频加载成功');
            // qg.hideLoading()
            videoAd.show().then(() => {
                console.log('激励视频 广告显示成功');
            }).catch(err => {
                console.log('激励视频 广告显示失败');
                if (onError) {
                    onError(err);
                }
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
            })
        }).catch(err => {
            console.log('激励视频加载失败');
            if (onError) {
                onError(err);
                clearVideoFun();
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

            }
        })
    }




    public bannerAd: any;
    public canShowBanner = true;

    /** 显示banner */
    public async showBanner(offset: { w: number, h: number, callback?: Function, isShow?: boolean, bannerId?: any, className_key?: string }) {
        let self = this;
        return new Promise(async (resolve) => {
            if (!OppoManager.instance.adLimit1Flag) {
                resolve(null);
                return;
            }
            if (!OppoManager.instance.adLimit2Flag) {
                resolve(null);
                return;
            }
            let bannerId = offset.bannerId;
            if (bannerId == null) {//从配置中去
                let bannerIds = self.platformInfos.banner[offset.className_key]
                if (bannerIds) {
                    bannerId = bannerIds[0];
                }
            }
            self.hideBannerAd();
            if (!self.canGetBannerOk)
                return;
            self.canGetBannerOk = false;
            //如果指定的binner没有加载成功
            let banner = await self.showOppoBanner(bannerId);
            if (banner) {
                self.canGetBannerOk = true;
                self.oppoBannerAd = banner;
            } else {
                //创建原生广告
                let stDataNativeBanner = await self.createOppoNatvieBanner({ className_key: offset.className_key }) as any;
                if (stDataNativeBanner) {
                    console.log("nativeOppoAd>>>>>>>>>>>>>>>", stDataNativeBanner.adList);
                    self.canGetBannerOk = true;
                    stDataNativeBanner.callBack = () => {
                        self.oppoBannerAd = null;
                    }
                    let oppoNativeBanner = new OppoNativeBanner(stDataNativeBanner);
                    OppoManager.instance.addSpriteIntoBox(oppoNativeBanner);
                    // Laya.stage.addChild(oppoNativeBanner)
                    self.oppoBannerAd = oppoNativeBanner;
                    resolve(self.oppoBannerAd);
                    return;
                } else {
                    self.canGetBannerOk = true;

                }
            }
            self.canGetBannerOk = true;

            resolve()
        })

        // }
        // console.log("显示 banner 广告组件-->", this.bannerAd);
        // this.bannerAd.show();
        // if (!this.canShowBanner) {
        //     this.bannerAd.hide()
        // }
        // }
    }

    /** 隐藏banner */
    public destoryBanner() {
        this.clearBannerFun && this.clearBannerFun();
        if (this.oppoBannerAd) {
            this.oppoBannerAd.hide();
            this.oppoBannerAd.destroy();
        }
        this.clearBannerFun = null;
        this.oppoBannerAd = null;

    }


    public hideBannerAd() {
        // if (this.oppoBannerAd) {
        //     this.oppoBannerAd.hide();

        if (this.canGetBannerOk) {
            console.trace("销毁 banner 广告组件-->");
            this.clearBannerFun && this.clearBannerFun();
            if (this.oppoBannerAd) {
                this.oppoBannerAd.hide();
                this.oppoBannerAd.destroy();
            }
            this.clearBannerFun = null;
            this.oppoBannerAd = null;
        }



        // }
    }


    public initGameAfterLoadRes() {
        // OppoManager.instance.initGame();
        MiniGameMgr.instance.reportMonitor("game_scene", 0);//上报数据，能够操作

    }

    /**
     * oppo 的banner
     */
    private oppoBannerAd: any;

    /**
     *  创建oppo原生
     */
    public async createOppoNatvieAd(data: { index: number, className_key?: string }) {
        let self = this;

        let index = data.index;
        let adidArr = self.platformInfos.native[data.className_key];
        if (adidArr == null) {
            adidArr = self.platformInfos.nativeId;
        }
        let len = adidArr.length;
        return new Promise((resolve) => {
            if (!OppoManager.instance.adLimit1Flag) {
                resolve(null);
                return;
            }
            if (!OppoManager.instance.adLimit2Flag) {
                resolve(null);
                return;
            }
            if (index >= len) {
                resolve(null);
                return;
            }
            let adid = adidArr[index];
            // var nativeAd = qg.createNativeAd({
            //     adUnitId: adid
            // })

            var nativeAd = platform.createNativeAd(adid)
            let onLoad = function (res) {
                console.log('原生广告加载', res.adList);
                nativeAd.offLoad(onLoad);
                nativeAd.offError(onError);
                resolve({ nativeAd: nativeAd, adList: res.adList });
            }
            let onError = async function (res) {
                console.log('原生广告加载失败', res);
                nativeAd.offLoad(onLoad);
                nativeAd.offError(onError);
                resolve(null);

            }
            nativeAd.onLoad(onLoad);
            nativeAd.onError(onError);
            nativeAd.load();
        })
    }


    /**
     *  创建oppo原生banner
     */
    public async createOppoNatvieBanner(data: { className_key?: string }) {
        let self = this;
        //let adidArr = self.infos.nativeId2;
        //let len = adidArr.length;
        let nativeBinnerID = self.platformInfos.nativeId[0];
        console.log('原生banner广告加载', nativeBinnerID);
        return new Promise((resolve) => {
            let adid = nativeBinnerID;
            // var nativeAd = qg.createNativeAd({
            //     adUnitId: adid
            // });.
            var nativeAd = platform.createNativeAd(adid)
            let onLoad = function (res) {
                console.log('原生广告加载', res.adList);
                nativeAd.offLoad(onLoad);
                nativeAd.offError(onError);
                resolve({ nativeAd: nativeAd, adList: res.adList });
            }
            let onError = async function (res) {
                console.log('原生广告加载失败', res);
                nativeAd.offLoad(onLoad);
                nativeAd.offError(onError);
                resolve(null);

            }
            nativeAd.onLoad(onLoad);
            nativeAd.onError(onError);
            nativeAd.load();
        })
    }


    /**
     * 是否拉取完成原生广告或者banner广告
     */
    public canGetBannerOk: boolean = true;


    /**
     * 展示oppo广告 
    */
    public async showOppoBanner(bannerId: number) {
        let self = this;
        return new Promise(async (resolve) => {
            if (bannerId == null) {
                resolve(null);
                return;
            }
            let showBanner = await self.createOppoBannerAd(bannerId) as any;

            resolve(showBanner);
        })
    }



    public async createOppoBannerAd(bannerId: number) {
        let self = this;
        return new Promise<any>(async (resolve) => {
            let adId = bannerId;
            console.log("创建 banner 广告组件-->", adId);
            // let bannerAd = qg.createBannerAd({ adUnitId: adId });
            let bannerAd = platform.createBannerAd(adId);
            let onLoadCall = function (res) {
                bannerAd.offLoad(onLoadCall);
                bannerAd.offError(onEorrCall);
                bannerAd.offShow(onShowFun);
                console.log("创建 banner 成功-->", adId);
                resolve(bannerAd)
            };

            let onEorrCall = async function (res) {
                console.log("创建 banner 失败-->", adId);
                bannerAd.offError(onEorrCall);
                bannerAd.offLoad(onLoadCall);
                bannerAd.offShow(onShowFun);
                bannerAd.offHide(onShowFun);
                // bannerAd.destroy()
                self.clearBannerFun && self.clearBannerFun();
                resolve(null)
            };
            let onShowFun = function (res) {
                console.log("onshow>>>>>>>>>>>", res)
            };
            let onHideFun = function (res) {
                console.log("onHide>>>>>>>>>>>", res)
                OppoManager.instance.closeCount++;
                self.destoryBanner();
            };

            bannerAd.onHide(onHideFun);
            bannerAd.onLoad(onLoadCall);
            bannerAd.onShow(onShowFun);
            bannerAd.onError(onEorrCall);
            self.clearBannerFun = () => {
                if (bannerAd) {
                    bannerAd.offError(onEorrCall);
                    bannerAd.offLoad(onLoadCall);
                    bannerAd.offShow(onShowFun);
                    bannerAd.offHide(onShowFun);
                    bannerAd.destroy();
                }
                bannerAd = null;
            }
            bannerAd.show();

        })
    }

    private clearBannerFun: Function;

}
/**
 * 更多游戏需要跳转的单个数据
 */
export class MoreSomeAppInfo {
    /**icon url */
    icon: string;
    title: string;
    appid: string;
}
export class NativeOppoAd {
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


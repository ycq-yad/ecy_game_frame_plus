
import { GDataMgr } from "../common/GameData";
import InviteMgr from "../manager/InviteManager";
import SoundMgr from "../common/SoundManager";
import { PlayerDataMgr } from "../common/GameDataManager";
import { ConfigMgr } from "../games/ConfigManager";
import { PType } from "../games/CommonDefine";
import ViewChangeMgr from "../games/ViewChangeManager";
import { GEvent } from "../games/GameEvent";
import PlatformDY from "../../PlatformDY";
import { MiniGameMgr } from "./MiniGameMgr";
import GameEvent from "../common/GameEvent";
import GuessYouLike from "../views/game/wechat/GuessLike";
// import { PlatfromGame } from "../../platfromCL/PlatfromGame";
// import { BannerType, PlatfromCL } from "../../platfromCL/PlatfromCL";


/**
 * 小游戏管理器
 */
export class MiniQQManager extends MiniGameMgr {


    public constructor() {
        super();

        //
    }

    /********************************************************** */

    public systemInfos;

    /**
     * 初始化小游戏
     */
    public init() {
        // platform.onHide(onHide);
        let launchObj = platform.getLaunchOptionsSync();
        if (launchObj) {
            console.log('launchObj>>>>>>>>>>>>>>', launchObj);

        }
        // this.getUpdateManager();
        platform.setKeepScreenOn();
        platform.updateShareMenu();
        platform.showShareMenu();
        // 	//默认分享
        platform.onShareAppMessage(() => {
            return this.defaultMsg;
        });
        this.systemInfos = platform.getSystemInfoSync();
        console.log("systemInfo >> ", this.systemInfos);
    }

    /**
     * 获取版本更新管理工具
     */
    protected getUpdateManager(): void {

    }

    /**
    * 当音频开始时候
    */
    public onAudioInterruptionStart(call: Function): void {
        platform.onAudioInterruptionBegin(call)
    }

    /**
     * 当音频结束时候
     */
    public onAudioInterruptionOver(call: Function): void {
        platform.onAudioInterruptionEnd(call)

    }

    /**
     * 获取用户信息
     */
    public getUserInfos(): Promise<any> {
        return new Promise((resolve) => {

            resolve(null)
        })
    }

    public async initTemp() {
        let info = await this.getUserInfos();
        if (info == null) {//授权失败 创建 按钮授权
            info = await this.createUserButtonSize(0, 1, 0);
            let strOpenIdOther = GDataMgr.getInstance().eGInfos.query["openid"];
            console.log("strOpenIdOther = ", strOpenIdOther);
            if (strOpenIdOther && strOpenIdOther != "") {
                platform.createUserInfoButton((data) => {
                    GDataMgr.getInstance().uinfo.nick = data.userInfo.nickName;
                    GDataMgr.getInstance().uinfo.avatarUrl = data.userInfo.avatarUrl;
                    if (!BaseConst.infos.gameInfo.isDY) {
                        InviteMgr.getInstance().checkInvite();
                        console.log("createUserInfoButton 用户信息 : ", GDataMgr.getInstance().uinfo);
                    }
                    info = data;
                });
            }

        } else {
            GDataMgr.getInstance().uinfo.nick = info.userInfo.nickName;
            GDataMgr.getInstance().uinfo.avatarUrl = info.userInfo.avatarUrl;
            let strOpenIdOther = GDataMgr.getInstance().eGInfos.query["openid"];
            console.log("strOpenIdOther = ", strOpenIdOther);
            if (strOpenIdOther && strOpenIdOther != "") {
                InviteMgr.getInstance().checkInvite();
                console.log("createUserInfoButton 用户信息 judgeInvite: ", GDataMgr.getInstance().uinfo);
            }
        }
        MiniGameMgr.instance.defaultMsg.query = "openid=" + GDataMgr.getInstance().uinfo.openId;
        platform.onShareAppMessage(() => {
            return MiniGameMgr.instance.defaultMsg;
        });
        return info;

    }

    /**
     * 创建用户按钮的尺寸大小
     * @param percentTop  按钮距离上面位置的比列
     * @param pectendSize  按钮尺寸大小占设计大小的比例
     * @param percentLeft  按钮距离左边位置的比列
     */
    public createUserButtonSize(percentTop: number, pectendSize: number, percentLeft: number) {
        let resInfo = platform.getSystemInfoSync()
        let left = resInfo['windowWidth'] * percentLeft;
        let top = resInfo['windowHeight'] * percentTop;
        var wid = resInfo['windowWidth'] * pectendSize;
        var height = resInfo['windowHeight'] * pectendSize;
        // ////自行处理
        // let btn = new Laya.Sprite();
        // Laya.stage.addChild(btn);
        // btn.once(Laya.Event.CLICK,this,()=>{

        // });
    }

    /**
     * 进入后台的时间戳
     */
    public _hideTime = 0;
    /**
     * 进入前天的时间戳
     */
    public _showTime = 0;
    public onShow(callBack: Function) {
        platform.onShow(() => {
            callBack && callBack();
            this._showTime = new Date().getTime();
            if (!DeviceUtil.isTTMiniGame()) {
                if (this._showTime - this._hideTime >= this._sucTime) {
                    this._shareSucful && this._shareSucful.call(this._thisObj);
                    // PlatfromManager.getInstance().uploadShare();
                } else {
                    this._shareFailful && this._shareFailful.call(this._thisObj);
                }
            }
            PlayerDataMgr.nTimeHidSec = this._showTime - this._hideTime;
            if (PlayerDataMgr.nTimeHidSec == this._showTime)
                PlayerDataMgr.nTimeHidSec = 0;
            this._shareFailful = null;
            this._shareSucful = null;
            this._thisObj = null;
            //EventMgr.getInstance().sendEvent(GameEvent.ONSHOW);
        });
    }

    public onHide(callBack: Function) {
        platform.onHide(() => {
            callBack && callBack();
            // PlatfromManager.getInstance().initexposureInfoData();
            this._hideTime = new Date().getTime();
            //EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
        });
    }



    public showMoreMiniGame(data: { parent: Laya.Sprite, moreGame: any, bannerType?: any, showRowCount?: number, showColCount?: number }) {
        return new Promise((resolve) => {

        })

    }
    /****************************************分享************************************/



    public defaultMsg = {
        "title": "一入宫门深似海，小主太难了！！",
        "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-1.jpg?v=" + 1.2,
        "query": ""
    }

    /**
     * 头条qq 用名称小姐姐快跑
     */
    public shareInfoOfTTOrQQ = [
        {
            "title": "一入宫门深似海，小主太难了！",
            "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-2.jpg?v=" + 1.2,
            "query": ""
        },
        {
            "title": "一入宫门深似海，小主太难了！",
            "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-3.jpg?v=" + 1.2,
            "query": ""
        }];

    /**
     * wx 用名称放开小姐姐
     */
    public shareInfoOfWX = [
        {
            "title": "一入宫门深似海，小主太难了！",
            "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/500x400-6.jpg?v=" + 1.2,
            "query": ""
        },
        {
            "title": "一入宫门深似海，小主太难了！",
            "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/500x400-7.jpg?v=" + 1.2,
            "query": ""
        }];

    /**
     * 所有的
     */
    public shareInfos = [
        {
            "title": "一入宫门深似海，小主太难了！！",
            "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-4.jpg?v=" + 1.2,
            "query": ""
        },
        {
            "title": "一入宫门深似海，小主太难了！！",
            "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-5.jpg?v=" + 1.2,
            "query": ""
        },
        {
            "title": "一入宫门深似海，小主太难了！！",
            "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-6.jpg?v=" + 1.2,
            "query": ""
        }
    ]

    /**
     * 
     * @param query 得到分享配置
     */
    public getShareInfos(query: Object): any {
        let shareInfo = this.shareInfos;
        let info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
        if (query) {
            let openId: string = GDataMgr.getInstance().uinfo.openId;
            query['openid'] = openId;
        }
        // if (PlatfromManager.getInstance().lastId != null) {
        //     query['id'] = PlatfromManager.getInstance().lastId
        // }
        info.query = Utils.querStr(query);
        return info;
    }

    public shareInfoOfDouYin = [
        {
            "channel": "video",
            "title": "烧脑推理，一键过关！",
            "desc": "烧脑推理，一键过关",
            "imageUrl": "",
            "query": "",
            "extra": {
                "videoPath": "",
                "videoTopics": ["小姐姐快跑", "帮助小姐姐逃出生天"]
            }
        },
        {
            "channel": "video",
            "title": "休闲解密游戏，开动你的小脑筋帮助小姐姐逃离魔爪？",
            "desc": "休闲解密游戏，开动你的小脑筋帮助小姐姐逃离魔爪？",
            "imageUrl": "",
            "query": "",
            "extra": {
                "videoPath": "",
                "videoTopics": ["小姐姐快跑", "帮助小姐姐逃出生天"]
            }
        },
        {
            "channel": "video",
            "title": "机会只有一次！救救小姐姐！",
            "desc": "机会只有一次！救救小姐姐！",
            "imageUrl": "",
            "query": "",
            "extra": {
                "videoPath": "",
                "videoTopics": ["小姐姐快跑", "帮助小姐姐逃出生天"]
            }
        }
    ]

    public getShareInfoOfDouYin(query: Object) {
        let shareInfo = this.shareInfoOfDouYin;
        let info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
        if (query) {
            let openId: string = GDataMgr.getInstance().uinfo.openId;
            query['openid'] = openId;
        }
        info.query = Utils.querStr(query);
        info.extra.videoPath = this._strVideoPatch;
        return info;
    }

    /**
     * 分享处理
     * @param data 
     */
    public flagDouYin: boolean = false; //抖音分享需要区分视频分享还是普通分享 true 为视频分享 false 为普通分享
    public shareAppMsg(data?: { message?: any, thisObj?: any, sucFun?: Function, failFun?: Function, time?: number }) {
        if (data == null) {
            data = {};
        }
        if (!data.message) {
            data.message = this.getShareInfos({});
        }


        this._shareSucful = data.sucFun;
        this._shareFailful = () => {
            //TipsManager.getInstance().showDefaultTips('分享失败');
            data.failFun && data.failFun();;
        }

        this._thisObj = data.thisObj;
        this._sucTime = data.time || 3000;

        platform.shareAppMessage(data.message);
    }


    public _shareSucful: Function;

    public _shareFailful: Function;

    public _thisObj: any;
    /**
     * 分享成功回调的等待时间
     */
    public _sucTime: number = 0;


    /**********************************************广告*****************************************/
    /**
      * 播放视频广告
      * 
      */
    public playVideoAd(data: { successFun?: Function, failFun?: Function, errorFun?: Function, isLongVideo?: boolean }) {
        if (!DeviceUtil.isMiniGame()) {
            ///暂时成功
            // TipsManager.getInstance().showDefaultTips('开发中');
            data.successFun && data.successFun();
            return;
        }
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
        let videoId = GDataMgr.getInstance().videoId;
        if (data.isLongVideo) {
            videoId = GDataMgr.getInstance().longVideoId;
        }
        if (videoId.length <= 0) {
            TipsManager.getInstance().showDefaultTips('开发中');
            data.errorFun && data.errorFun();
            // SoundManager.getInstance().playBgMusic(SoundManager.getInstance().curBgMusic);
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

            return;
        }
        // platform.showLoading({ title: '广告加载中', mask: true });
        ViewChangeMgr.getInstance().showBufLoadingView();

        let adId = videoId[Math.floor(Math.random() * videoId.length)];
        platform.createRewardedVideoAd(adId, (res) => {
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

            if (res.isEnded) {//正常关闭
                data.successFun && data.successFun();

                if (!DeviceUtil.isTTMiniGame()) {
                    SoundMgr.getInstance().playBgm();
                }
                console.log(" video normal！");
            } else {
                data.failFun && data.failFun();
                if (!DeviceUtil.isTTMiniGame()) {
                    SoundMgr.getInstance().playBgm();
                }
                console.log(" video not finish！");
            }
            // platform.hideLoading({});
            ViewChangeMgr.getInstance().hideBufLoadingView();
        }, () => {
            // platform.hideLoading({});
            ViewChangeMgr.getInstance().hideBufLoadingView();
            TipsManager.getInstance().showDefaultTips('开发中');
            data.errorFun && data.errorFun();
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

            if (!DeviceUtil.isTTMiniGame()) {
                SoundMgr.getInstance().playBgm();
            }
        });
    }
    public _bannerAd: any;
    public _canShowBanner = true;
    public _bFlagSpecialView = true;
    public _bTimerOpen = false;
    // /**
    //  * 显示banner
    //  */
    // public showBanner(offset?: { w: number, h: number, callback?: Function }) {
    //     if (!DeviceUtil.isMiniGame()) {
    //         return;
    //     }

    //     if (DeviceUtil.isQQMiniGame() && !this._bFlagSpecialView) {
    //         return;
    //     }

    //     this._canShowBanner = true;
    //     let bannerId = GDataMgr.getInstance().bannerId;
    //     if (bannerId.length <= 0) {
    //         console.log("bannerId.length <= 0");
    //         return;
    //     }
    //     let adId = bannerId[Math.floor(Math.random() * bannerId.length)];
    //     if (this._bannerAd == null) {
    //         let bannerAd = platform.createBannerAd(adId);
    //         this.bannerArr.push(bannerAd);
    //         this._bannerAd = bannerAd;
    //         if (bannerAd == null) {
    //             this.qqRefreshBanner();
    //             return;
    //         }
    //         bannerAd.show();
    //     }

    //     if (!this._bFlagSpecialView) {
    //         this._bannerAd.hide();
    //         return;
    //     }
    //     this._bannerAd.show();
    //     if (!this._canShowBanner) {
    //         this._bannerAd.hide()
    //     }
    //     this.qqRefreshBanner();

    // }

    // protected qqRefreshBannerReadl() {
    //     if (!this._bFlagSpecialView) {
    //         return;
    //     }
    //     if (DeviceUtil.isQQMiniGame()) {
    //         let bannerId = GDataMgr.getInstance().bannerId;
    //         if (bannerId.length <= 0) {
    //             console.log("bannerId.length <= 0");
    //             return;
    //         }
    //         let adId = bannerId[Math.floor(Math.random() * bannerId.length)];
    //         platform.binnerDestroy();
    //         //销毁
    //         console.log('销毁广告');
    //         // this._bannerAd = null;
    //         this.hideBannerAd();
    //         let bad = platform.createBannerAd(adId);
    //         this.bannerArr.push(bad);
    //         this._bannerAd = bad
    //         // this.showBanner();
    //         Laya.timer.once(300, this, this.showBanner);
    //     }
    // }

    // /**qq的定时刷新binner */
    // protected qqRefreshBanner() {
    //     if (this._bTimerOpen) {
    //         return;
    //     }
    //     this._bTimerOpen = true;
    //     Laya.timer.clearAll(this);
    //     Laya.timer.loop(BaseConst.infos.gameInfo.binnertime, this, this.qqRefreshBannerReadl);
    // }


    public bannerAd: any;
    public canShowBanner = true;
    /**
     * 显示banner
     */
    public showBanner(offset: { w: number, h: number, callback?: Function, isNeedShowQQbaner?: boolean }) {
        if (!DeviceUtil.isQQMiniGame()) {
            return;
        }
        this.canShowBanner = true;
        let bannerId = GDataMgr.getInstance().bannerId;
        if (bannerId.length <= 0) {
            return;
        }
        if (offset && offset.isNeedShowQQbaner) {
            this.showQQBanner()
        }
        this.showBannerOntime()

    }



    private isShowBanner = false;
    /**
     * 定时刷新banner
     */
    private showBannerOntime() {
        if (this.isShowBanner) return;
        this.isShowBanner = true;
        this.createBanner();
        Laya.timer.clearAll(this);
        Laya.timer.loop(BaseConst.infos.gameInfo.binnertime, this, () => {
            console.log("定时创建广告")
            if (!this.isHideQQBanner) {

            }
            this.createBanner();
        });
    }

    private qqBanner: QQBannerAd;

    private qqBannelCloseFun = null
    private createBanner() {
        let self = this;
        if (this.qqBanner) {
            this.qqBannelCloseFun && this.qqBannelCloseFun();
            this.qqBannelCloseFun = null
            this.qqBanner.destroy();
        }
        this.qqBanner = null;

        let bannerId = GDataMgr.getInstance().bannerId
        let adId = bannerId[Math.floor(Math.random() * bannerId.length)];
        // var phone = qq.getSystemInfoSync();
        var phone = platform.getSystemInfoSync();
        console.log(phone);
        var w = phone.screenWidth / 2;
        var h = phone.screenHeight;
        let left_b; let top_b;
        var bw = w * 2;
        var bh = 200;
        if (bw > w * 2) {
            bw = w * 2;
        }
        left_b = w - bw / 2;

        top_b = h - 105;
        // platform.createqqBannerAd()
        let bannerAd = qq.createBannerAd({
            adUnitId: adId,
            style: {
                top: top_b,
                left: left_b,
                width: bw,
                height: bh
            }
        });
        let onResize = function (res) {
            bannerAd.style.left = w - res.width / 2;
            bannerAd.style.top = h - res.height;
            // console.log(bannerAd);
        }
        bannerAd.onResize(onResize);
        let onErrorFun = (data) => {
            console.warn(data.errMsg);
            switch (data.errCode) {
                case 1000:
                    console.warn("后端接口调用失败");
                    break;
                case 1001:
                    console.warn("参数错误");
                    break;
                case 1002:
                    console.warn("广告单元无效");
                    break;
                case 1003:
                    console.warn("内部错误");
                    break;
                case 1004:
                    console.warn("无合适的广告");
                    break;
                case 1005:
                    console.warn("广告组件审核中");
                    break;
                case 1006:
                    console.warn("广告组件被驳回");
                    break;
                case 1007:
                    console.warn("广告组件被封禁");
                    break;
                case 1008:
                    console.warn("广告单元已关闭");
                    break;
            }
        }
        bannerAd.onError(onErrorFun);
        self.qqBannelCloseFun = () => {
            bannerAd.offResize(onResize);
            bannerAd.offError(onErrorFun);
            bannerAd.offLoad(onLoadFun)
        }
        let onLoadFun = () => {
            console.log("createBanner>>>>>>>>>>>>>>>>> ", !self._bFlagSpecialView);
            if (!self._bFlagSpecialView) {
                bannerAd.hide();
            } else {
                bannerAd.show();
            }
        }
        bannerAd.onLoad(onLoadFun)
        if (!self._bFlagSpecialView) {
            bannerAd.hide();
        } else {
            bannerAd.show();
        }
        self.qqBanner = bannerAd;
    }

    public isHideQQBanner = false
    /**
     * 隐藏qqbanner
     */
    public hideQQBanner() {
        this.isHideQQBanner = true;
        if (this.qqBanner) {
            this.qqBanner.hide();
        }
    }
    public showQQBanner() {
        this.isHideQQBanner = false;
        if (this.qqBanner) {
            this.qqBanner.show();
        }
    }

    /**
     * 销毁banner
     */
    public destoryBanner() {
        if (this.bannerAd != null && this.bannerAd.destroy) {

            this.bannerAd.destroy();
            this.bannerAd = null
        }
        this.canShowBanner = false;
    }

    public hideBanner(isNeedHide: boolean = false) {
        if (this.bannerAd != null) {
            this.bannerAd.hide();
        }
        this.canShowBanner = false;
        if (isNeedHide) {
            this.hideQQBanner();
        }
    }

    private bannerArr = [];
    /**
     * 隐藏banner
     */
    public hideBannerAd() {
        let bannerArr = this.bannerArr;
        for (let i = 0, len = bannerArr.length; i < len; i++) {
            let banner = bannerArr[i];
            if (banner) {
                banner.hide()
                banner.destroy();
            }
        }
        this.bannerArr.length = 0;
        if (this._bannerAd != null) {
            this._bannerAd.hide()
            this._bannerAd.destroy();
        }
        this._bannerAd = null;

        this._canShowBanner = false;
        this.hideQQBanner();
    }



    //积木广告
    protected _blockAd: any;

    /**
     * 初始化积木广告
     */
    public initBlockAD(): void {
        //暂时不适用单例创建 隐藏积木广告 （安卓839版本支持，目前请销毁后重新创建）
        if (DeviceUtil.isIOS()) {
            this._blockAd = platform.createBlockAD();
        }
    }

    /**
     * 显示积木广告
     */
    public showBlockAD(): void {
        console.log('---');
        if (!DeviceUtil.isQQMiniGame()) {
            return
        }
        if (!DeviceUtil.isIOS()) {
            if (!this._blockAd) {
                this._blockAd = platform.createBlockAD();
            }
        } else {
            if (!this._blockAd) {
                return
            }
            let blockAdShow = this._blockAd.show();
            if (blockAdShow) {
                blockAdShow.then(() => {
                    console.log("积木广告显示成功！");
                }).catch((err) => {
                    console.log("积木广告显示失败！ ", err);
                });
            }

        }
    }

    /**
     * 隐藏积木广告
     */
    public hideBlockAD(): void {
        if (!DeviceUtil.isQQMiniGame()) {
            return
        }
        if (!this._blockAd) {
            return
        }
        if (DeviceUtil.isIOS()) {
            this._blockAd.hide();
            return
        }
        console.log("destroy  --  积木广告");
        this._blockAd.destroy();
        this._blockAd = null;
    }

    protected _imgRect: Laya.Image;
    protected _onCloseBoxAD: Function;
    protected _tempBoxAD: any;

    /**
     * 初始化盒子广告
     */
    public initAdBox() {
        let self = this;
        if (!self._tempBoxAD) {
            self._tempBoxAD = platform.createAppBox(GDataMgr.getInstance().boxId[0]);
            self._tempBoxAD.load().then((res) => {
                console.log("boxAd load");
                console.log(res);
            }).catch((err) => {
                console.log("boxAd load err");
                console.log(err);
            });
            self._tempBoxAD.onClose(() => {
                self._imgRect && self._imgRect.removeSelf();
                self._onCloseBoxAD && self._onCloseBoxAD();
            });
        }
    }

    /**
     * 显示盒子广告
     */
    public showAdBox(onCloseCall?: Function) {
        let self = this;
        self._onCloseBoxAD = onCloseCall;
        if (DeviceUtil.isQQMiniGame()) {
            if (!self._imgRect) {
                self._imgRect = new Laya.Image(ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName("game_panel_db_png").url));
                self._imgRect.sizeGrid = "3,3,2,2";
                self._imgRect.width = Laya.stage.width;
                self._imgRect.height = Laya.stage.height;
            }
            try {
                if (self._tempBoxAD) {
                    let bxoAD = self._tempBoxAD.load();
                    if (bxoAD) {
                        bxoAD.then(() => {
                            let boxAdShow = self._tempBoxAD.show();
                            if (boxAdShow) {
                                boxAdShow.then((res) => {
                                    console.log("boxAd show");
                                    console.log(res);
                                    // self._imgRect && self._imgRect.removeSelf();
                                    Laya.stage.addChild(self._imgRect);
                                }).catch((err) => {
                                    console.log("boxAd show err");
                                    console.log(err);
                                    //self._imgRect && self._imgRect.removeSelf();
                                    self._onCloseBoxAD && self._onCloseBoxAD();
                                });
                            } else {
                                self._onCloseBoxAD && self._onCloseBoxAD();

                            }
                        });
                    } else {
                        self._onCloseBoxAD && self._onCloseBoxAD();

                    }
                } else {
                    self._onCloseBoxAD && self._onCloseBoxAD();

                }
            } catch (err) {
                console.log("err<>>>>>", err)
                self._onCloseBoxAD && self._onCloseBoxAD();

            }

        } else {
            self._onCloseBoxAD && self._onCloseBoxAD();
        }
    }



    /**显示一个插屏广告*/
    public showChaPinAd() {
        if (DeviceUtil.isTTMiniGame()) {
            let info = platform.getSystemInfoSync() as any;
            if (info.appName.toUpperCase() == 'DOUYIN') {
                return;
            }
            platform.createInterstitialAd({ adUnitId: "h7n4g8mhqfp1h56aim" });
            console.log("to show createInterstitialAd!");
        }
    }

    /**
     * 显示更多游戏
     * 
     * 需要提前设置 moreSomeAppInfos
     */
    public showMoreGamesModel(): void {
        let appLaunchOptions = [];
        for (let i = 0, len = GDataMgr.getInstance().weCatMoreInfo.length; i < len; i++) {
            appLaunchOptions.push({
                appId: GDataMgr.getInstance().weCatMoreInfo[i].ad_appid,
                query: "",
                extraData: {}
            });
        }
        platform.showMoreGamesModal({
            appLaunchOptions: appLaunchOptions,
            success(res) {
                console.log("success", res.errMsg);
                //GameStateChange.PauseGame();
            },
            fail(res) {
                console.log("fail", res.errMsg);
                // GameStateChange.PauseGame();
            },
            complete(res) {
                console.log("complete", res.errMsg);
                // GameStateChange.StartGame();
            }
        });
    }

    /**
     * 创建猜你喜欢
     */
    public async createGuessLikeView(parent: Laya.Sprite): Promise<GuessYouLike> {
        return new Promise<GuessYouLike>(async (resolve) => {
            let data = PlatformDY.gameListInfos;
            if (data == null) {
                data = await PlatformDY.getGameList();
            }
            if (data == null) {
                resolve(null)
                return;
            }
            if (data.length <= 0) {
                return;
            }
            console.log("data(GuessLike) ->", data);
            let guessLike = parent.getChildByName('GuessLike') as GuessYouLike;
            if (guessLike == null) {
                guessLike = new GuessYouLike("game/uiView/platform/GuessLike.json", "game/uiView/platform/GuessLikeItem.json", data, 220);
                parent.addChild(guessLike);
            }
            guessLike.name = 'GuessLike';
            guessLike.mouseThrough = true;
            guessLike.x = (Laya.stage.width - guessLike.width) / 2;
            guessLike.y = Laya.stage.height - guessLike.height;
            resolve(guessLike);
        });
    }


}
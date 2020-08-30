
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
export class MiniWechatManager extends MiniGameMgr {


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


    public initGameReleaseConfig() {
        if (DeviceUtil.isWXMiniGame() && !BaseConst.infos.gameInfo.isDY) {
            Laya.loader.load("configs/wxmoregame.json?v=" + Math.random(), Laya.Handler.create(this, (res) => {
                if (typeof (res) == "string") {
                    res = JSON.parse(res);
                }
                let infos = [];
                for (let i = 0, len = res.iconList.length; i < len; i++) {
                    res.iconList[i].ad_img = "https://package.32yx.com/ecy_game_small/laya/girl/wx_res/moregame/" + res.iconList[i].ad_img;
                }
                GDataMgr.getInstance().weCatMoreInfo = res.iconList;
            }));
        }
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
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

            // SoundManager.getInstance().playBgMusic(SoundManager.getInstance().curBgMusic);
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
    /**
     * 显示banner
     */
    public showBanner(offset?: { w: number, h: number, callback?: Function }) {
        if (!DeviceUtil.isMiniGame()) {
            return;
        }

        if(!this._bFlagSpecialView){
            return;
        }

        this._canShowBanner = true;
        let bannerId = GDataMgr.getInstance().bannerId;
        if (bannerId.length <= 0) {
            console.log("bannerId.length <= 0");
            return;
        }
        let adId = bannerId[Math.floor(Math.random() * bannerId.length)];
        console.log('广告id', adId);
        if (this._bannerAd == null) {
            let bannerAd = platform.createBannerAd(adId);
            this._bannerAd = bannerAd;
            if (bannerAd == null) return;
            // bannerAd.onResize(() => {
            //     // bannerAd.style.left = w - bannerAd.style.realWidth / 2 + 0.1;
            //     bannerAd.style.top = this.systemInfo.screenHeight - bannerAd.style.realHeight + 0.1;
            // });
            // bannerAd.style.top = this.systemInfo.screenHeight - bannerAd.style.realHeight + 0.1;
            bannerAd.show();
            // console.log("bannerAd", bannerAd);
        } else {
            //if (DeviceUtil.isQQMiniGame()) {
                // platform.binnerDestroy();
                // this._bannerAd = null;
                // let bannerAd = platform.createBannerAd(adId);
                // this._bannerAd = bannerAd;
            //}
        }

        this._bannerAd.show();
        if (!this._canShowBanner) {
            this._bannerAd.hide()
        }
        // if (offset) {
        //     this._bannerAd.style.left = offset.w - this._bannerAd.style.realWidth / 2 + 0.1;
        //     this._bannerAd.style.top = offset.h - this._bannerAd.style.realHeight + 0.1;
        //     offset.callback && offset.callback();
        // }

        if (DeviceUtil.isWXMiniGame()) {
            this.weCatRefreshBanner();
        }
    }

    protected  weCatRefreshBannerReadl() {
        if (!this._bFlagSpecialView) {
            return;
        }
        if (DeviceUtil.isWXMiniGame()) {
            let bannerId = GDataMgr.getInstance().bannerId;
            if (bannerId.length <= 0) {
                console.log("bannerId.length <= 0");
                return;
            }
            let adId = bannerId[Math.floor(Math.random() * bannerId.length)];
            platform.binnerDestroy();
            //销毁
            console.log('销毁广告');
            this._bannerAd = null;
            let bannerAd = platform.createBannerAd(adId);
            this._bannerAd = bannerAd;
            //this.showBanner();
            Laya.timer.once(300,this, this.showBanner);
        }
    }

    /**微信的定时刷新binner */
    protected  weCatRefreshBanner() {
        if (this._bTimerOpen) {
            return;
        }
        this._bTimerOpen = true;
        Laya.timer.clear(this, this.weCatRefreshBannerReadl);
        Laya.timer.loop(BaseConst.infos.gameInfo.binnertime, this, this.weCatRefreshBannerReadl);
    }




    /**
     * 隐藏banner
     */
    public hideBannerAd() {

        if (this._bannerAd != null) {
            this._bannerAd.hide();
        }
        this._canShowBanner = false;
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
            //2020.7.13-3
            if (data == null) {
                data = GDataMgr.getInstance().weCatMoreInfo;
            }

            if (data && data.length <= 0) {
                data = await PlatformDY.getGameList();
            }

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
                guessLike = new GuessYouLike("game/uiView/platform/GuessLike.json", "game/uiView/platform/GuessLikeItem.json", data, 240);
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
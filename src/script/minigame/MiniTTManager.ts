
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
export class MiniTTManager extends MiniGameMgr{


    public  constructor() {
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


    public initGameReleaseConfig(){
    if (DeviceUtil.isTTMiniGame()) {
            Laya.loader.load( "configs/ttmoregame.json?v=" + Math.random(), Laya.Handler.create(this, (res) => {
                if (typeof (res) == "string") {
                    res = JSON.parse(res);
                }
                let infos = [];
                for (let i = 0, len = res.iconList.length; i < len; i++) {
                    res.iconList[i].ad_img = "https://package.32yx.com/ecy_game_small/laya/girl/tt/moregame/" + res.iconList[i].ad_img;
                }
                GDataMgr.getInstance().weCatMoreInfo = res.iconList;
            }));
        }
    }
    /**
     * 获取版本更新管理工具
     */
    protected  getUpdateManager(): void {

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

    // public onAudioInterruptionBegin(callBack: Function) {
    //     platform.onAudioInterruptionBegin(() => {
    //         callBack && callBack();
    //     });
    // }

    // public onAudioInterruptionEnd(callBack: Function) {
    //     platform.onAudioInterruptionEnd(() => {
    //         callBack && callBack();
    //     });
    // }

    /**
     * 获取全局唯一的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档。
     */
    // public getUpdateManager() {
    //     platform.getUpdateManager();
    // }


    public showMoreMiniGame(data: { parent: Laya.Sprite, moreGame: any, bannerType?: any, showRowCount?: number, showColCount?: number }) {
        return new Promise((resolve) => {
            // let itemDataArr_ = await PlatfromCL.getInstance().getadArrBylocation_flg(data.bannerType);
            // itemDataArr_ = [
            //     {
            //         "ad_id": 2532,
            //         "ad_name": "扎心英雄",
            //         "ad_img": "https:\/\/img.yz061.com\/uploads\/20191031\/4b1001e747b41abd92472ed557f4b0f2.jpg",
            //         "ad_path": "?channel=5dd27466ba1f2",
            //         "ad_appid": "wx2e12fc8a5d32fc2a",
            //         "ad_count": 3819821,
            //         "ad_device": 0,
            //         "ad_dot": 0
            //     },
            //     {
            //         "ad_id": 2551,
            //         "ad_name": "抢购大作战",
            //         "ad_img": "https:\/\/img.yz061.com\/uploads\/20191108\/5dc70aea7084caa8aa3018d7b88c511b.jpg",
            //         "ad_path": "?channel=5dd4e29e0c86c",
            //         "ad_appid": "wx8ba54b10f7a02a5b",
            //         "ad_count": 8230049,
            //         "ad_device": 0,
            //         "ad_dot": 0
            //     },
            //     {
            //         "ad_id": 2392,
            //         "ad_name": "自行车冲刺",
            //         "ad_img": "https:\/\/img.yz061.com\/uploads\/20190905\/e766c479ce38259603ac498bec649f32.jpg",
            //         "ad_path": "?channel=5dc291124f28a",
            //         "ad_appid": "wxb61f909241e4647f",
            //         "ad_count": 37192990,
            //         "ad_device": 0,
            //         "ad_dot": 0
            //     },
            //     {
            //         "ad_id": 2411,
            //         "ad_name": "进击的方块君",
            //         "ad_img": "https:\/\/img.yz061.com\/uploads\/20191025\/017ca9eb93ebe7b39ee0a26a1b7b6f0f.jpg",
            //         "ad_path": "?channel=5dc37c53e01ec",
            //         "ad_appid": "wx2a1c56c3c4235d0e",
            //         "ad_count": 3128319,
            //         "ad_device": 0,
            //         "ad_dot": 0
            //     },
            //     {
            //         "ad_id": 2345,
            //         "ad_name": "快来划水",
            //         "ad_img": "https:\/\/img.yz061.com\/uploads\/20190704\/48db87d04c83ffae21dfe561175928f2.png",
            //         "ad_path": "?channel=5dc259e0e9cc3",
            //         "ad_appid": "wx34179a03db78feb9",
            //         "ad_count": 38391910,
            //         "ad_device": 0,
            //         "ad_dot": 0
            //     },
            //     {
            //         "ad_id": 2426,
            //         "ad_name": "守护家园塔防",
            //         "ad_img": "https:\/\/img.yz061.com\/uploads\/20190226\/cb525f609742e31d04b8c04846a8b21d.jpg",
            //         "ad_path": "?channel=5dc4d183c7604",
            //         "ad_appid": "wx6d9ceda5ddb23a62",
            //         "ad_count": 1231231,
            //         "ad_device": 0,
            //         "ad_dot": 0
            //     },
            //     {
            //         "ad_id": 2396,
            //         "ad_name": "全民陆战队",
            //         "ad_img": "https:\/\/img.yz061.com\/uploads\/20190820\/a480be6862d8848d635f730d9e5d9957.jpg",
            //         "ad_path": "?channel=5dc2974bc4cbf",
            //         "ad_appid": "wx1f501f62d07e3072",
            //         "ad_count": 32189191,
            //         "ad_device": 0,
            //         "ad_dot": 0
            //     },
            //     {
            //         "ad_id": 2465,
            //         "ad_name": "消灭臭蛋",
            //         "ad_img": "https:\/\/img.yz061.com\/uploads\/20190926\/9d289d324cb226fd1b7ac321f436743e.jpg",
            //         "ad_path": "?channel=5dc9393c89bd5",
            //         "ad_appid": "wx487ed70060dc6d2d",
            //         "ad_count": 3128319,
            //         "ad_device": 0,
            //         "ad_dot": 0
            //     },
            //     {
            //         "ad_id": 2480,
            //         "ad_name": "索道大冒险",
            //         "ad_img": "https:\/\/img.yz061.com\/uploads\/20191112\/1761739f1d94c685c351a8dabc83fa82.png",
            //         "ad_path": "?krq_sddmx=045&ald_media_id=29359&ald_link_key=ca40c797f63fb1d8&ald_position_id=0",
            //         "ad_appid": "wx21468e993862a4ac",
            //         "ad_count": 423892,
            //         "ad_device": 0,
            //         "ad_dot": 0
            //     },
            //     {
            //         "ad_id": 2380,
            //         "ad_name": "爱吃三明治",
            //         "ad_img": "https:\/\/img.yz061.com\/uploads\/20191106\/d1d8de551e175b24f2d624a51abca5af.jpg",
            //         "ad_path": "?krq_acsmz=046&ald_media_id=24726&ald_link_key=b7dd55df08c7ef96&ald_position_id=0",
            //         "ad_appid": "wxc4ab7f5c2b4b4f2d",
            //         "ad_count": 48230123,
            //         "ad_device": 0,
            //         "ad_dot": 0
            //     }
            // ]
            // if (itemDataArr_) {
            //     let showRowCount = data.showRowCount ? data.showRowCount : 2
            //     let showColCount = data.showColCount ? data.showColCount : 3
            //     data.moreGame = new PlatfromGame({ itemDataArr_: itemDataArr_, showRowCount: showRowCount, showColCount: showColCount });
            //     // data.moreGame.scale(1.2, 1.2);
            //     data.parent.addChild(data.moreGame);
            //     resolve(data.moreGame);
            // } else {
            //     resolve(data.moreGame);
            // }

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
        // if (DeviceUtil.isQQMiniGame()) {//qq有分享回调 但是会强制拉取列表即回调则做成延时
        //     if (data.sucFun) {
        //         data.message.complete = function (compRes) {
        //             console.log("分享回调---", compRes);
        //             if (compRes.errMsg.indexOf(":ok") > -1) {
        //                 data.sucFun();
        //             }
        //         }
        //         // data.sucFun && (data.message.success = data.sucFun);
        //     } else {
        //         data.message.success = () => {
        //             //TipsManager.getInstance().showDefaultTips('分享成功');
        //         };
        //     }
        //     if (data.failFun) {
        //         data.failFun && (data.message.fail = data.failFun);
        //     } else {
        //         data.message.fail = () => {
        //             //TipsManager.getInstance().showDefaultTips('分享失败');
        //         };
        //     }
        //     platform.shareAppMessage(data.message);
        //     return
        // }
        if (DeviceUtil.isTTMiniGame()) {
            let info = platform.getSystemInfoSync() as any;
            if (info.appName.toUpperCase() == 'DOUYIN' && this.flagDouYin) {
                data.message = this.getShareInfoOfDouYin({});
                console.log("data.message = ", data.message);
            }
            if (data.sucFun) {
                data.sucFun && (data.message.success = data.sucFun);
            } else {
                data.message.success = () => {
                    TipsManager.getInstance().showDefaultTips('分享成功');
                };
            }
            if (data.failFun) {
                data.failFun && (data.message.fail = data.failFun);
            } else {
                data.message.fail = () => {
                    TipsManager.getInstance().showDefaultTips('分享失败');
                };
            }
            platform.shareAppMessage(data.message);
            return
        }

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
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD,true);

        let videoId = GDataMgr.getInstance().videoId;
        if (data.isLongVideo) {
            videoId = GDataMgr.getInstance().longVideoId;
        }
        if (videoId.length <= 0) {
            TipsManager.getInstance().showDefaultTips('开发中');
            data.errorFun && data.errorFun();
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD,false);

            // SoundManager.getInstance().playBgMusic(SoundManager.getInstance().curBgMusic);
            return;
        }
        // platform.showLoading({ title: '广告加载中', mask: true });
        ViewChangeMgr.getInstance().showBufLoadingView();

        let adId = videoId[Math.floor(Math.random() * videoId.length)];
        platform.createRewardedVideoAd(adId, (res) => {
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD,false);

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
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD,false);

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

        if (DeviceUtil.isQQMiniGame() && !this._bFlagSpecialView) {
            return;
        }

        //抖音没有binner
        if (DeviceUtil.isTTMiniGame()) {
            let info = platform.getSystemInfoSync() as any;
            if (info.appName.toUpperCase() == 'DOUYIN') {
                return;
            }
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
            // if (DeviceUtil.isQQMiniGame()) {
            //     platform.binnerDestroy();
            //     this.bannerAd = null;
            //     let bannerAd = platform.createBannerAd(adId);
            //     this.bannerAd = bannerAd;
            // }
        }

        this._bannerAd.show();
        if (!this._canShowBanner) {
            this._bannerAd.hide()
        }
        if (offset) {
            this._bannerAd.style.left = offset.w - this._bannerAd.style.realWidth / 2 + 0.1;
            this._bannerAd.style.top = offset.h - this._bannerAd.style.realHeight + 0.1;
            offset.callback && offset.callback();
        }

    }

   
    /**
     * 隐藏banner
     */
    public hideBannerAd() {
        //抖音没有binner
        if (DeviceUtil.isTTMiniGame()) {
            let info = platform.getSystemInfoSync() as any;
            if (info.appName.toUpperCase() == 'DOUYIN') {
                return;
            }
        }
        if (this._bannerAd != null) {
            this._bannerAd.hide();
        }
        this._canShowBanner = false;
    }

   
  
    /**头条的录屏需求 */
    protected  _recorder: any;
    public _strVideoPatch: string
    public _nRecordTime: number = 60;
    public _nRecordTimeReal: number = 0;

    /** 存储当前录制视频完成时回调 */
    public _saveCallF: Function;

    /**初始化视频录制信息 */
    public initVideoAdInfo() {
        if (!DeviceUtil.isTTMiniGame()) {
            return;
        }
        let self = this;
        self._recorder = platform.getGameRecorderManager();
        self._recorder.onStart(res => {
            // 录屏开始
            console.log("onStart -> ", res);
        });

        self._recorder.onStop(res => {
            MiniGameMgr.instance._strVideoPatch = res.videoPath;
            if (MiniGameMgr.instance._nRecordTimeReal < 3000) {
                MiniGameMgr.instance._strVideoPatch = null;
                //
                //TipsManager.getInstance().showDefaultTips("录制视频需要大于3秒哦!");
            }
            console.log("onStop -> ", MiniGameMgr.instance._strVideoPatch);
            MiniGameMgr.instance._saveCallF && MiniGameMgr.instance._saveCallF();
        });

        self._recorder.onError((err) => {
            console.log("onError -> ", err);
            MiniGameMgr.instance._saveCallF && MiniGameMgr.instance._saveCallF();
        });
    }

    public StartRecordVideo() {
        if (!DeviceUtil.isTTMiniGame()) {
            return;
        }
        // this.StopVideo();
        this._nRecordTimeReal = 0;
        this._strVideoPatch = "";
        //开始录制
        // platform.getGameRecorderManager().start({ duration: this._nRecordTime });
        //开始录制
        Laya.timer.once(200, this, () => {
            platform.getGameRecorderManager().start({ duration: this._nRecordTime });
        });
        //启动一个事件记录器记录设置的最大时间
        Laya.timer.loop(1000, this, this.timeStopVideoAd);
        console.log("开始录制视频");
    }

    /**达到最大事件需要停止录屏*/
    public timeStopVideoAd() {
        this._nRecordTimeReal += 1000;
        if (this._nRecordTimeReal >= this._nRecordTime * 1000) {
            this.StopVideoAd();
        }
    }

    /**停止录制视频 */
    public StopVideoAd() {
        if (!DeviceUtil.isTTMiniGame()) {
            return;
        }
        EventMgr.getInstance().sendEvent(GEvent.C_V_IMG);
        platform.getGameRecorderManager().stop();
        Laya.timer.clear(this, this.timeStopVideoAd);
        console.log("停止录制视频  this.nRecordTimeReal=", this._nRecordTimeReal);
    }

    public shareGameRecordVideo(data?: { successFun?: Function, failFun?: Function, errorFun?: Function }): void {
        if (!this._strVideoPatch || this._strVideoPatch.length == 0) {
            // TipsManager.getInstance().showDefaultTips("暂未录制视频哦!");
            TipsManager.getInstance().showDefaultTips("录制视频需要大于3秒哦!");
            data.errorFun && data.errorFun();
            return
        }

        if (this._nRecordTimeReal <= 3000) {
            TipsManager.getInstance().showDefaultTips("录制视频失败");
            data.failFun && data.failFun();
            return;
        }

        if (!DeviceUtil.isTTMiniGame()) { return }
        console.log("分享游戏视频--");
        let obj: any = {};
        obj.title = "小姐姐快跑";
        // obj.imageUrl = "https://package.32yx.com/ecy_game_small/game_basketball/share_img/game_basketball.jpg";
        obj.query = "openId=" + GDataMgr.getInstance().uinfo.openId + "&nick=" + GDataMgr.getInstance().uinfo.nick;
        obj.videoPath = this._strVideoPatch;
        obj.success = function () {
            console.log("视频分享成功！");
            TipsManager.getInstance().showDefaultTips("发布录制视频成功");
            data.successFun && data.successFun();
        };
        obj.fail = function (res) {
            console.log("视频分享失败！", res);
            data.failFun && data.failFun();
            TipsManager.getInstance().showDefaultTips("发布录制视频失败");
        };
        platform.shareVideo(obj);
    }

    public _onShareVideoSuccess: boolean = false;
    public onShareVideoAd(data: { successFun?: Function, failFun?: Function }) {
        this.shareGameRecordVideo(data);
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

    /**
 * 获取app平台
 * Toutiao 今日头条
 * Douyin 抖音
 * XiGua 西瓜视频
 * news_article_lite 头条极速版
 * devtools 开发者工具
 */
    public appName(): "Toutiao" | "Douyin" | "XiGua" | "news_article_lite" | "devtools" {
        if (!DeviceUtil.isTTMiniGame()) return "Toutiao";
        let self = this;
        if (!self.systemInfos) {
            self.systemInfos = platform.getSystemInfoSync();
        }
        return (self.systemInfos.appName as ("Toutiao" | "Douyin" | "XiGua" | "news_article_lite" | "devtools"));
    }
}

import { GDataMgr } from "../common/GameData";
import InviteMgr from "../manager/InviteManager";
import SoundMgr from "../common/SoundManager";
import { PlayerDataMgr } from "../common/GameDataManager";
import { ConfigMgr } from "../games/ConfigManager";
import { PType } from "../games/CommonDefine";
import ViewChangeMgr from "../games/ViewChangeManager";
import { GEvent } from "../games/GameEvent";
import PlatformDY from "../../PlatformDY";
import GuessYouLike from "../views/game/wechat/GuessLike";
// import { PlatfromGame } from "../../platfromCL/PlatfromGame";
// import { BannerType, PlatfromCL } from "../../platfromCL/PlatfromCL";


/**
 * 小游戏管理器
 */
export class MiniGameMgr {
    public static _ins: MiniGameMgr;
    public static get instance(): MiniGameMgr {
        // if (MiniGameMgr._ins == null) {
        //     MiniGameMgr._ins = new MiniGameMgr();
        // }

        return MiniGameMgr._ins;
    }
    public box_platform: Laya.Box;


    public initMiniGameAfterLoadres() {
        if (this.box_platform == null) {
            this.box_platform = new Laya.Box();
            this.box_platform.size(Laya.stage.width, Laya.stage.height);
            this.box_platform.mouseThrough = true;
        }
        Laya.stage.addChild(this.box_platform);
    }
    public constructor() {
        this.initVideoAdInfo();
        //
        if (DeviceUtil.isWXMiniGame()) {
            this.defaultMsg = this.shareInfoOfWX[0];
            this.shareInfos = this.shareInfos.concat(this.shareInfoOfWX);
        } else if (DeviceUtil.isTTMiniGame() || DeviceUtil.isQQMiniGame()) {
            this.defaultMsg = this.shareInfoOfTTOrQQ[0];
            this.shareInfos = this.shareInfos.concat(this.shareInfoOfTTOrQQ);
        }
        //
    }

    /**
     * 平台配置基础数据  
     * 不同平台自行处理
     */
    public platformInfos: any = {};
    /********************************************************** */

    public systemInfos;

    /**
     * 初始化小游戏
     */
    public init() {
        // platform.onHide(onHide);

    }


    public initGameReleaseConfig() {

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

    }

    /**
     * 当音频结束时候
     */
    public onAudioInterruptionOver(call: Function): void {

    }

    /**
     * 获取用户信息
     */
    public getUserInfos(): Promise<any> {
        return new Promise((resolve) => {
            // platform.getUserInfo();
            // wx.getUserInfo({
            //     withCredentials: true,
            //     lang: 'zh_CN',
            //     success: (res) => {//直接获取用户信息
            //         var userInfo = res.userInfo;
            //         resolve(res);
            //     },
            //     fail: (res) => {//创建登陆按钮
            //         if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
            //             处理用户拒绝授权的情况
            //         } else {

            //         }
            //         resolve(null);

            //     }
            // })
            resolve(null)
        })
    }

    public async initTemp() {


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

    }

    public onHide(callBack: Function) {

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

    ];

    /**
     * wx 用名称放开小姐姐
     */
    public shareInfoOfWX = [

    ];

    /**
     * 所有的
     */
    public shareInfos = [

    ]

    /**
     * 
     * @param query 得到分享配置
     */
    public getShareInfos(query: Object): any {

        return "info";
    }

    public shareInfoOfDouYin = [

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
        TipsManager.getInstance().showDefaultTips('开发中');

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
    public playVideoAd(data: { successFun?: Function, failFun?: Function, errorFun?: Function, isLongVideo?: boolean, gameConstKey?: string }) {
        // TipsManager.getInstance().showDefaultTips('开发中');
        if (data.successFun) {
            data.successFun();
        }
    }
    public _bannerAd: any;
    public _canShowBanner = true;
    public _bFlagSpecialView = true;
    public _bTimerOpen = false;
    /**
     * 显示banner
     * bannerId?: string,bannerid    oppo处理
     *  className_key?: string  //传入类名  方便处理
     */
    public showBanner(offset: { w?: number, h?: number, callback?: Function, bannerId?: string, className_key?: string,isNeedShowQQbaner?:boolean }) {

    }

    protected qqRefreshBannerReadl() {

    }

    /**qq的定时刷新binner */
    protected qqRefreshBanner() {

    }

    /**
     * 隐藏banner
     */
    public hideBannerAd() {
        //抖音没有binner

    }


    /**
     * 适配添加到我的小程序
     * @param collec_img 
     * @param stage 
     */
    public adapatImgToClientRect(collec_img: Laya.Image, stage: Laya.Stage) {
        if (DeviceUtil.isWXMiniGame()) {
            let systemInfo = platform.getSystemInfoSync();
            let screenHeight = systemInfo['screenHeight'];
            let screenWidth = systemInfo['screenWidth'];
            let rect = platform.getMenuButtonBoundingClientRect();
            // collec_img.anchorY = 0.5;
            collec_img.top = stage.height * (rect['top'] / screenHeight);
            collec_img.right = stage.width * (1 - rect['right'] / screenWidth) + collec_img.width;
        }
    }

    /**
     * 发送到开放数据
     */
    public sendDataToWxOpenContext(data: { cmd: string, data: any }) {
        Laya.MiniAdpter.window.wx.postMessage(data);

    }

    /**
     * 
     * @param data 
     */
    public removeOpenContextData(data: { parent: Laya.Sprite }) {

    }
    /**
     * 增加到微信开放域
     * @param data 
     */
    public addOpenWeChatData(data: { x?: number, y?: number, width: number, height: number, left?: number, right?: number, top?: number, bottom?: number, parent: Laya.Sprite, isCenter?: boolean }) {


    }



    /**
     * 初始化积木广告
     */
    public initBlockAD(): void {

    }

    /**
     * 显示积木广告
     */
    public showBlockAD(): void {

    }

    /**
     * 隐藏积木广告
     */
    public hideBlockAD(): void {

    }



    /**
     * 初始化盒子广告
     */
    public initAdBox() {

    }

    /**
     * 显示盒子广告
     */
    public showAdBox(onCloseCall?: Function) {

    }
    public _strVideoPatch: string
    public _nRecordTime: number = 60;
    public _nRecordTimeReal: number = 0;

    /** 存储当前录制视频完成时回调 */
    public _saveCallF: Function;

    /**初始化视频录制信息 */
    public initVideoAdInfo() {

    }

    public StartRecordVideo() {

    }

    /**达到最大事件需要停止录屏*/
    public timeStopVideoAd() {

    }

    /**停止录制视频 */
    public StopVideoAd() {

    }

    public shareGameRecordVideo(data?: { successFun?: Function, failFun?: Function, errorFun?: Function }): void {

    }

    public _onShareVideoSuccess: boolean = false;
    public onShareVideoAd(data: { successFun?: Function, failFun?: Function }) {

    }

    /**显示一个插屏广告*/
    public showChaPinAd() {

    }

    /**
     * 显示更多游戏
     * 
     * 需要提前设置 moreSomeAppInfos
     */
    public showMoreGamesModel(): void {

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




    ////////////////////////////////////////////////////////////VIVO//////////////////////////////////////////////////////
    public showAddDesktopBtn(data: { box: Laya.Sprite }) {

    }

    /** 提示创建桌面图标 */
    public tipInstallShortcut(data: { success: Function, fail: Function }) {

    }


    public async loadNativeAd(index = 0): Promise<any> {

    }


    public async showBottomNativeAd(box_platform: Laya.Sprite, ys?: number): Promise<any> {

    }
    public async showInsertAd(data: { successFun?: Function, errorFun?: Function, closeFun?: Function }): Promise<any> {

    }


    /////////////////////////////////////////////////////////oppo//////////////////////////////////////////////////////////////////
    public createShortCut(succCall?: Function) {

    }
    public hasShortcutInstalled(): Promise<boolean> {
        return;
    }

    public reportMonitor(name: string, value: number) {

    }
    public oppoNavigateToMiniProgram(obj) {

    }


    public async createOppoNatvieAd(data: { index: number, className_key?: string }) {
        return new Promise((resolve) => {
            resolve(null)
        });
    }
    public setLoadingProgress(progress) {


    }
    public loadingComplete(object) {

    }


    ////////////////////////////////////////////////////////////native/////////////////////////////////////////////////////////////////////

    jumpLeisureSubject() {

    }
}
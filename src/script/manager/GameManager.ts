
import { GDataMgr } from "../common/GameData";
import { MiniGameMgr } from "../minigame/MiniGameMgr";
import { PlayerDataMgr } from "../common/GameDataManager";
import PlatformDY from "../../PlatformDY";
import InviteMgr from "./InviteManager";
import ViewChangeMgr from "../games/ViewChangeManager";
import { ConfigMgr } from "../games/ConfigManager";
import GameStatusMgr from "../games/GameStateManager";
import { EGType, MGIndex, PType, MoreGameIndex } from "../games/CommonDefine";
import { LevelMgr } from "./LevelManager";
import SoundMgr from "../common/SoundManager";
import GamePreLoadView from "../loading/GamePreLoadingView";
import AddPowerView from "../views/game/pop/AddPsView";
import GameEvent from "../common/GameEvent";
import MoreGameRandomGameBox713 from "../views/game/wechat/MoreGameRandomGameBox713";
import { MiniVVManager } from "../minigame/MiniVVManager";
import { MiniOppoManager } from "../minigame/MiniOppoManager";
import { OppoManager } from "../minigame/OppoManager";


/**
 * 游戏管理器\
 * 处理游戏基本逻辑的
 */
export class GameManager {
    private static _ins: GameManager;

    public static get instance(): GameManager {
        if (GameManager._ins == null) {
            GameManager._ins = new GameManager();
        }
        return GameManager._ins
    }
    private constructor() {
        this.randomTime = "?v=" + new Date().getTime();
    }

    public randomTime: string

    /**
     * 转换商店显示时间
     * time  为时间  秒
     */
    public parseShopTimeShow(time: number, en: boolean): string {
        let min = time / 60;
        let hour = min / 60;
        let day = hour / 24;
        let str = ''
        if (day >= 1) {
            str = day.toFixed(2) + '天'
        } else if (hour >= 1) {
            str = hour.toFixed(2) + '小时'
        } else {
            str = min.toFixed(2) + '分钟'
        }
        if (en) {
            str = str.replace("天", 'day');
            str = str.replace("小时", 'hour');
            str = str.replace("分钟", 'min');
        }
        return str;
    }


    public loadCongigs(url): Promise<any> {
        return new Promise((resolve) => {
            let jsonUrl = url;
            Laya.loader.load(jsonUrl, Laya.Handler.create(this, (res) => {
                if (typeof (res) == "string") {
                    res = JSON.parse(res);
                }
                resolve(Utils.copy(res))
            }));
        });

    }


    /**随机得到8个编号 */
    public getRandomEightIndex(): number[] {
        if (GDataMgr.getInstance().weCatMoreInfo.length - 1 < 0) {
            return [];
        }
        let numRandom = Utils.random(0, GDataMgr.getInstance().weCatMoreInfo.length - 1);
        let numCount = GDataMgr.getInstance().weCatMoreInfo.length % 3;
        if (numCount > 0) {
            numCount = 3 - numCount;
        }

        numCount = GDataMgr.getInstance().weCatMoreInfo.length + numCount;

        let arrInfo: number[] = [];
        for (let i = 0; i < numCount; ++i) {
            arrInfo.push(numRandom);
            numRandom += 1;
            if (numRandom >= GDataMgr.getInstance().weCatMoreInfo.length) {
                numRandom = 0;
            }
        }
        return arrInfo;
    }
    /**
     * 体力不足
     */
    public onPowerNotEnough() {
        TipsManager.getInstance().showDefaultTips("体力不足");
        // ViewChangeMgr.getInstance().showBufLoadingView();
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
        ResUtil.getIntance().loadGroups(["adsp"], () => {
            ViewManager.getInstance().showView(AddPowerView);
            // ViewChangeMgr.getInstance().hideBufLoadingView();
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
        });
    }
    public restartGame(): boolean {
        let numCost = 1;
        let objData = ConfigMgr.getInstance().getGCDBID(8);
        if (objData) {
            numCost = parseInt(objData.strValue);
        }
        //检测体力是否足够
        let bln = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, numCost);
        if (!bln) {
            GameManager.instance.onPowerNotEnough();
            return false;
        }
        AddPowerView._bCloseBinner = true;
        if (ConfigMgr.getInstance().isWeCatMiniGame()) {
            MoreGameRandomGameBox713.bReStartGame = true;
            MoreGameRandomGameBox713.bEnterHotBox = true;
            ViewManager.getInstance().showView(MoreGameRandomGameBox713);
        } else {
            //扣除体力
            PlayerDataMgr.getInstance().subProp(PType.e_GType_Sp, numCost);
            //重新开始游戏
            ViewChangeMgr.getInstance().restartGame(true);
        }
        return true
    }

    public backHome() {
        ViewChangeMgr.getInstance().CurLevelBasea.closeGameView();
        PlayerDataMgr.getInstance().setCurGuanQia(PlayerDataMgr.getInstance().getCurGuanQiaMax());
        GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_GH;
        LevelMgr.getInstance().createSceneByLevel(PlayerDataMgr.getInstance().getCurGuanQiaToChallenge());
        AddPowerView._bCloseBinner = false;
    }
    public loadingView: GamePreLoadView;

    public setPlayerOpenidToStorage(openid: string) {
        let arr = Laya.LocalStorage.getJSON("gongdouInfo");
        let data = []
        if (arr == '' || arr == null) {
            data.push(openid);
        } else {
            data = arr;
            if (data.indexOf(openid) == -1) {
                data.push(openid);
            }
        }
        Laya.LocalStorage.setJSON("gongdouInfo", data)
    }


    /**
     * 必须在登陆之后
     * 区分数据的重复的问题
     * 为了处理在不同平台上登录、不登录账号数据的问题
     * 获取openid
     */
    public getOpenid(openid: string = "gongdou") {

    }
    /**
	 * 加载资源
	 */
    public async loadRes() {
        MiniGameMgr.instance.setLoadingProgress(0)

        await this.platformLogin();
        console.log("loadRes-----");
        console.log("加载预加载资源--");
        await ResUtil.getIntance().loadThms("resource/default.thm.json" + GameManager.instance.randomTime);
        await ResUtil.getIntance().loadRESConfig("resource/default.res.json" + GameManager.instance.randomTime);
        ViewChangeMgr.getInstance().rigestBufLoadingView();
        MiniGameMgr.instance.initGameReleaseConfig();
        MiniGameMgr.instance.initMiniGameAfterLoadres();
        if (window["loadingView"]) {
            //native brige
            window["loadingView"].loading(100);
        }
        this.enterGame();
    }

    private enterGame() {
        GameManager.instance.loadMoreGame();
        let group = ["gamehome"];
        //加入当前关卡的数据
        let nLevelGroup = PlayerDataMgr.getInstance().getCurGuanQiaToChallenge();
        // if (DeviceUtil.isTTMiniGame() && BaseConst.infos.gameInfo.openPsAward == 0) {
        //     nLevelGroup = nLevelGroup + 1;
        // }
        // if (nLevelGroup == 3)
        //     nLevelGroup = 2;
        group.push(nLevelGroup.toString());
        let self = this;

        ResUtil.getIntance().fastLoadGroups(group, async () => {
            await ConfigMgr.getInstance().initConfs();
            console.log("配置加载完成---");
            PlayerDataMgr.getInstance().initPower();
            PlayerDataMgr.getInstance().refreshOffLinePS();

            GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_GH;
            if (DeviceUtil.isWXMiniGame() && PlayerDataMgr.getInstance().bIsNewPlayer) {
                GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_CL;
                PlayerDataMgr.getInstance().SaveData();
            }
            ViewChangeMgr.gameOpen = true;
            PlayerDataMgr.getInstance().setCurGuanQia(PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia() - 1);
            LevelMgr.getInstance().createSceneByLevel(PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia());
            ViewChangeMgr.getInstance().showCommonView();
           // ViewChangeMgr.getInstance().showImageExit();
            ResUtil.getIntance().loadGroups(["panel", "common"]);
            SoundMgr.getInstance().isEnterView = true;
            self.onPlayMusic();
            MiniGameMgr.instance.reportMonitor("game_scene", 0);
            MiniGameMgr.instance.loadingComplete({})
        }, (cur, total) => {
            MiniGameMgr.instance.setLoadingProgress(Math.floor(cur / total * 100))

            GameManager.instance.loadingView.progress(cur, total);
        });
    }

    public onPlayMusic() {
        SoundMgr.getInstance().bgm = 'bg';
    }





	/**
	 * 平台登陆
	 */
    private async platformLogin() {
        return new Promise(async (resolve) => {
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                console.log("开始登录");
                let res;
                let self = this;
                if (DeviceUtil.isQQMiniGame()) {
                    MiniGameMgr.instance.initAdBox();
                    MiniGameMgr.instance.initBlockAD();
                }
                let enter = async () => {
                    if (DeviceUtil.isWXMiniGame() || DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) {
                        if (BaseConst.infos.gameInfo.isDY && DeviceUtil.isWXMiniGame()) {
                            await self.wxEnterGame(res)
                            resolve();

                        } else {
                            console.log("登陆信息:", res);
                            GDataMgr.getInstance().uinfo.openId = res.openid;
                            GDataMgr.getInstance().uinfo.sessionKey = res.session_key;

                            console.log("用户信息 : ", GDataMgr.getInstance().uinfo);
                            if (DeviceUtil.isTTMiniGame()) {
                                let userInfo = await platform.getUserInfo();
                                console.log("getUserInfo:", userInfo);
                                GDataMgr.getInstance().uinfo.nick = userInfo.nickName;
                                GDataMgr.getInstance().uinfo.avatarUrl = userInfo.avatarUrl;
                                console.log("授权用户信息 : ", GDataMgr.getInstance().uinfo);
                            } else {
                                await MiniGameMgr.instance.initTemp();
                            }
                            PlayerDataMgr.getInstance().GetData();
                            resolve();

                        }
                    }
                }
                if (DeviceUtil.isTTMiniGame()) {
                    let res = await platform.login();
                    if (res) {
                        res = JSON.parse(res);
                        console.log("登陆信息:", res);
                        GDataMgr.getInstance().uinfo.openId = res.openid;
                        GDataMgr.getInstance().uinfo.sessionKey = res.session_key;
                        console.log("用户信息 : ", GDataMgr.getInstance().uinfo);
                    }
                    //加载玩家数据
                    PlayerDataMgr.getInstance().GetData();
                } else {
                    if (BaseConst.infos.gameInfo.isDY && DeviceUtil.isWXMiniGame()) {
                        res = await platform.DYlogin();
                    } else {
                        res = await platform.login();
                        res = JSON.parse(res);
                    }
                    enter();
                }
            } else if (DeviceUtil.isVIVOMiniGame()) {
                await (MiniGameMgr.instance as MiniVVManager).login()
                PlayerDataMgr.getInstance().GetData();
                resolve();
            }
            else if (DeviceUtil.isOPPOMiniGame()) {
                OppoManager.instance.limit1Time = BaseConst.infos.gameInfo.limit1Time
                // let userInfo = await (MiniGameMgr.instance as MiniOppoManager).loginGame() as any;
                // GDataMgr.getInstance().uinfo.openId = userInfo.uid;
                // GDataMgr.getInstance().uinfo.nick = userInfo.nickName;
                // GDataMgr.getInstance().uinfo.avatarUrl = userInfo.avatar;
                // // GameManager.instance.setPlayerOpenidToStorage(GDataMgr.getInstance().uinfo.openId);
                // console.log("Login success usr info = ", GDataMgr.getInstance().uinfo);
                this.checkOppoOpenidOnNoLogin();
                Laya.loader.load('configs/oppoMoreGame.json' + GameManager.instance.randomTime, Laya.Handler.create(this, (res) => {
                    console.log("oppoMoreGame>>>>>>>>>>", res)
                    let allGameList = res.allGame;
                    OppoManager.instance.oppoMiniIconsInfo = allGameList;
                    OppoManager.instance.oppoMiniIconsBanner = res.banner;
                    OppoManager.instance.oppoMiniIconsGuessLike = res.guessLike;
                    // this.netDataSucc = true;
                    PlayerDataMgr.getInstance().GetData();
                    resolve();

                }))
            }
            else {
                GDataMgr.getInstance().uinfo.openId = GDataMgr.getInstance().uinfo.sessionKey = DeviceUtil.getDeviceNo();
                // GameManager.instance.setPlayerOpenidToStorage(GDataMgr.getInstance().uinfo.openId);
                PlayerDataMgr.getInstance().GetData();
                resolve();

            }
        })

    }
    /**
     * 检车oppo未登录的openid
     */
    private checkOppoOpenidOnNoLogin() {


        let baseinfoKey: string = '';
        let baseInfArr = []
        for (var i = 0; i < localStorage.length; i++) {
            let info = localStorage.key(i)
            if (info.indexOf("BaseData") > -1) {
                baseInfArr.push(info);
            }
            // if (info.indexOf("BaseData") > -1 && info.indexOf(devo) == -1) {
            // 	baseinfoKey = info;
            // 	break;
            // }
            // console.log();
        }
        let len = baseInfArr.length;
        if (len == 0) {
            return;
        }
        let devo = DeviceUtil.getDeviceNo();
        if (len == 1) {
            baseinfoKey = baseInfArr[0]
            let openId = baseinfoKey.split("BaseData")[0];
            GDataMgr.getInstance().uinfo.openId = openId;
        } else {
            for (let i = 0; i < len; i++) {
                let info = baseInfArr[i]
                if (info.indexOf("BaseData") > -1 && info.indexOf(devo) == -1 && info !== "BaseData") {
                    baseinfoKey = info;
                    let openId = baseinfoKey.split("BaseData")[0];
                    GDataMgr.getInstance().uinfo.openId = openId;
                    return;
                }
            }

            for (let i = 0; i < len; i++) {
                let info = baseInfArr[i]
                if (info.indexOf("BaseData") > -1 && info.indexOf(devo) == -1) {
                    baseinfoKey = info;
                    let openId = baseinfoKey.split("BaseData")[0];
                    GDataMgr.getInstance().uinfo.openId = openId;
                    return;
                }
            }
            for (let i = 0; i < len; i++) {
                let info = baseInfArr[i]
                if (info.indexOf("BaseData") > -1) {
                    baseinfoKey = info;
                    let openId = baseinfoKey.split("BaseData")[0];
                    GDataMgr.getInstance().uinfo.openId = openId;
                    return;
                }
            }
        }
    }

    private async wxEnterGame(stRes: any) {
        let res = stRes;
        //let isAuthorize = await platform.checkIsAuthorize();
        let userinfo = null;
        //if (isAuthorize) {
        userinfo = await MiniGameMgr.instance.initTemp();
        //}
        if (userinfo == null) {//如果没授权 就是纯净模式
            userinfo = { nickName: '', avatarUrl: '', gender: '' };
        }
        let obj = GDataMgr.getInstance().eGInfos;
        let scene = obj.query.scene == undefined ? null : obj.query.scene;
        PlatformDY.getOpenidAndAuthorzia({
            code: res, nickName: userinfo.nickName, avatarUrl: userinfo.avatarUrl, gender:
                userinfo.gender, scene: decodeURIComponent(scene)
        }).then((dyUser) => {
            GDataMgr.getInstance().uinfo.openId = dyUser.openid;
            let strOpenIdOther = GDataMgr.getInstance().eGInfos.query["openid"];
            console.log("strOpenIdOther = ", strOpenIdOther);
            if (strOpenIdOther && strOpenIdOther != "") {
                InviteMgr.getInstance().checkInvite();
                console.log("createUserInfoButton 用户信息 : ", GDataMgr.getInstance().uinfo);
            }
            //嘟游
            this.initDyGame();
            //加载玩家数据
            PlayerDataMgr.getInstance().GetData();
        });
    }


    private initDyGame() {
        if (BaseConst.infos.gameInfo.isDY) {
            PlatformDY.getGameList().then(() => {
                //let nLen = 10;
                //nLen = PlatformDY.gameListInfos.length > 10 ? 10 :// PlatformDY.gameListInfos.length
                GDataMgr.getInstance().weCatMoreInfo = [];
                let nLen = PlatformDY.gameListInfos.length;
                for (let i = 0; i < nLen; ++i) {
                    let stData = new MGIndex();
                    stData.ad_id = PlatformDY.gameListInfos[i].id;
                    stData.ad_img = PlatformDY.gameListInfos[i].img;
                    stData.name = PlatformDY.gameListInfos[i].title;
                    stData.ad_appid = PlatformDY.gameListInfos[i].appid;
                    stData.url = PlatformDY.gameListInfos[i].url;
                    GDataMgr.getInstance().weCatMoreInfo.push(stData);
                }
                console.log("GameData.getInstance().weCatMiniIconsInfo = ", GDataMgr.getInstance().weCatMoreInfo);
            });
        } else {
            this.loadMoreGame();
        }
    }

    /**加载更多游戏 */
    public loadMoreGame() {
        if (BaseConst.infos.gameInfo.isDY) {
            // Laya.loader.load("configs/wxmoregame.json?v=" + Math.random(), Laya.Handler.create(this, (res) => {
            //     if (typeof (res) == "string") {
            //         res = JSON.parse(res);
            //     }
            //     let infos = [];
            //     for (let i = 0, len = res.iconList.length; i < len; i++) {
            //         res.iconList[i].ad_img = "https://package.32yx.com/ecy_game_small/laya/girl/wx_res/moregame/" + res.iconList[i].ad_img;
            //     }
            //     GDataMgr.getInstance().weCatMoreInfo = res.iconList;
            // }));
        } else {
            if (DeviceUtil.isWXMiniGame()) {
                Laya.loader.load("configs/wxmoregame.json?v=" + Math.random(), Laya.Handler.create(this, (res) => {
                    if (typeof (res) == "string") {
                        res = JSON.parse(res);
                    }
                    let infos = [];
                    //2020.7.13-3
                    GDataMgr.getInstance().weCatMoreInfo = [];
                    for (let i = 0, len = res.iconList.length; i < len; i++) {
                        let stData = new MoreGameIndex();
                        stData.ad_img = "https://package.32yx.com/ecy_game_small/laya/girl/wx_res/moregame/" + res.iconList[i].ad_img;;
                        stData.name = res.iconList[i].name;
                        stData.ad_appid = res.iconList[i].ad_appid;
                        stData.ad_id = res.iconList[i].ad_id;
                        stData.url = "";
                        GDataMgr.getInstance().weCatMoreInfo.push(stData);
                    }
                }));
            }

        }
    }


    public goToDuyou(_nIndex: number) {

        //嘟游
        if (BaseConst.infos.gameInfo.isDY) {
            PlatformDY.clickGame(GDataMgr.getInstance().weCatMoreInfo[_nIndex].ad_id);
        }
        let self = this;
        let objData = {
            appId: GDataMgr.getInstance().weCatMoreInfo[_nIndex].ad_appid,
            path: GDataMgr.getInstance().weCatMoreInfo[_nIndex].url,
            success: function () {
                console.log("navigateToMiniProgram success!");

                //嘟游
                if (BaseConst.infos.gameInfo.isDY) {
                    console.log("self.nIndex = ", _nIndex);
                    PlatformDY.toGame(GDataMgr.getInstance().weCatMoreInfo[_nIndex].ad_id);
                }
            },
            fail: function (e) {
                console.log("navigateToMiniProgram fail e =", e);
                // //嘟游
                // if(BaseConst.infos.gameInfo.isDY){
                //     console.log("self.nIndex = ",self.nIndex);
                //     PlatformDY.toGame(GameData.getInstance().weCatMiniIconsInfo[self.nIndex].ad_id);
                // }
                if (DeviceUtil.isWXMiniGame()) {
                    ViewManager.getInstance().showView(MoreGameRandomGameBox713);
                }
            }
        };
        platform.navigateToMiniProgram(objData);
    }
}

window['GameManager'] = GameManager;


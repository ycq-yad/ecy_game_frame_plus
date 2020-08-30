import { PType, SStatus } from "../games/CommonDefine";
import { ConfigMgr } from "../games/ConfigManager";
import GameLogicProcessMgr from "../games/GameLogicProcessingManager";
import { GEvent } from "../games/GameEvent";
import { GDataMgr } from "./GameData";

export class PlayerDataBaseInfo {
    nMaxLevel: number;
    nCurLevel: number;
    nCurIndex: number;

    /**签到相关数据 */
    nSignTimeLast: number;       //上一次签到时间
    nSignIndex: number;          //已经签到的天数

    nGlodCount: number;           //金币数量
    nPS: number;             //体力数量
    nPsTime: number;     //开始当前体力回复的时间节点

    /** 已经领取过邀请奖励的id数组 */
    public inviteId: number[] = [];

    constructor() {
        this.nMaxLevel = 0;
        this.nCurLevel = 0;
        this.nCurIndex = 0;

        this.nSignTimeLast = 0;
        this.nSignIndex = 0;

        this.nGlodCount = 0;
        this.nPS = 5;
        this.nPsTime = 0;
    }
}

/**新需求 记录下发送了嘟游日志的关卡 */
class DYLogData {
    aryIndex: number[];
    constructor() {
        this.aryIndex = [];
    }
}

//2020.7.13-2-4
class GDNewOperData713 {
    nRecordTime: number;
    nSecond: number;
    constructor() {
        this.nSecond = 0;
        this.nRecordTime = 0;
    }
}

class  OperData0807{
    bSpecial:boolean;
    constructor(){
        this.bSpecial = false;
    }
}

export class PlayerDataMgr {
    private static instance: PlayerDataMgr;
    public static getInstance(): PlayerDataMgr {
        if (!PlayerDataMgr.instance) {
            PlayerDataMgr.instance = new PlayerDataMgr();
        }
        return PlayerDataMgr.instance;
    }

    /**记录玩家切换到后台的时间**/
    public static nTimeHidSec: number = 0;

    public static nHidTime: number = 0;

    /**当前最大关卡 */
    public nMaxLevelCount: number = 14;

    /**2020.6.29 运营需求要显示100关 */
    public nMaxLevelCountShow: number = 100;

    /**体力回复的时间 */
    private nPsRecoveryTime: number;

    /**倒计时的时间*/
    private nPsTimeCountDown: number;

    /**当前的倒计时字符串 */
    private strUpDownTime: string;

    /**是否是新玩家 */
    public bIsNewPlayer: boolean;

    /**宫斗微信的新运营需求 */
    private stGDNewOperData713: GDNewOperData713;

    public stOperData0807:OperData0807;

    public static  bGlobEnterGame:boolean = true;

    constructor() {
        this.stPlayerDataBase = new PlayerDataBaseInfo();
        this.stDYLogData = new DYLogData();
        this.nPsRecoveryTime = 0;
        this.nPsTimeCountDown = 0;
        this.strUpDownTime = "";
        this.bIsNewPlayer = false;
        this.stGDNewOperData713 = new GDNewOperData713();
        this.stOperData0807= new OperData0807();
    }

    public stPlayerDataBase: PlayerDataBaseInfo;

    public stDYLogData: DYLogData;

    /**获得当前关卡 */
    public getCurGuanQia() {
        return this.stPlayerDataBase.nCurLevel;
    }

    /*增加关卡 */
    public addGuanQia() {
        this.stPlayerDataBase.nCurLevel += 1;
        this.stPlayerDataBase.nCurLevel = this.stPlayerDataBase.nCurLevel < this.nMaxLevelCount ? this.stPlayerDataBase.nCurLevel : this.nMaxLevelCount - 1;
        if (this.stPlayerDataBase.nMaxLevel < this.stPlayerDataBase.nCurLevel) {
            this.stPlayerDataBase.nMaxLevel = this.stPlayerDataBase.nCurLevel;
        }
        this.SaveData();
    }

    /**获取当前最大关卡 */
    public getCurGuanQiaMax() {
        return this.stPlayerDataBase.nMaxLevel;
    }

    /**设置当前关卡 */
    public setCurGuanQia(nLevel: number) {
        this.stPlayerDataBase.nCurLevel = nLevel;
    }

    /**
     * 达到最大关卡了
     */
    public isMaxLevel(): void {
        this.stPlayerDataBase.nCurLevel = this.stPlayerDataBase.nMaxLevel = this.nMaxLevelCount;
        this.SaveData();
    }

    /**获得当前应该挑战的关卡 */
    public getCurGuanQiaToChallenge(): number {
        let nRealData = this.stPlayerDataBase.nCurLevel + 1;
        if (nRealData > this.nMaxLevelCount) {
            nRealData = this.nMaxLevelCount;
        }
        console.log("获得当前应该挑战的关卡  ", this.stPlayerDataBase.nCurLevel, "  ", nRealData);
        return nRealData;
    }

    /**保存数据*/
    public SaveData() {
        let str: string = JSON.stringify(this.stPlayerDataBase);
        Laya.LocalStorage.setItem(GDataMgr.getInstance().uinfo.openId + "BaseData", str);
        // //新增嘟游的日志记录
        // str = JSON.stringify(this.stDYLogData);
        // Laya.LocalStorage.setItem(GDataMgr.getInstance().uinfo.openId + "DYLogData", str);
        //2020.7.13-2-4
        str = JSON.stringify(this.stGDNewOperData713);
        Laya.LocalStorage.setItem(GDataMgr.getInstance().uinfo.openId + "stNewOperData713", str);
        let strNewOper0807 = JSON.stringify(this.stOperData0807);
        Laya.LocalStorage.setItem("OperData0807" + GDataMgr.getInstance().uinfo.openId, strNewOper0807);
    }

    /**主页上应该挑战的最大关卡 */
    public getLevelToChangeMaxGuanQia() {
        let nRealData = this.stPlayerDataBase.nMaxLevel + 1;
        if (nRealData > this.nMaxLevelCount) {
            nRealData = this.nMaxLevelCount;
        }
        return nRealData;
    }

    /**获取数据*/
    public GetData() {
        let str = Laya.LocalStorage.getItem(GDataMgr.getInstance().uinfo.openId + "BaseData");
        console.log(">>>>>>>>>>>>", str);
        if (str) {
            try {
                this.stPlayerDataBase = JSON.parse(str);
                if (this.stPlayerDataBase.nCurLevel == null) {
                    this.bIsNewPlayer = true;
                    this.stPlayerDataBase = new PlayerDataBaseInfo();
                    PlayerDataMgr.bGlobEnterGame = false;
                    
                } else {
                    this.bIsNewPlayer = false;
                    PlayerDataMgr.bGlobEnterGame = true;
                }
            } catch (e) {
                PlayerDataMgr.bGlobEnterGame = false;
                this.bIsNewPlayer = true;
                this.stPlayerDataBase = new PlayerDataBaseInfo();
            }
        } else {
            this.bIsNewPlayer = true;
            PlayerDataMgr.bGlobEnterGame = false;
        }

        //2020.7.13-2-4
        str = Laya.LocalStorage.getItem(GDataMgr.getInstance().uinfo.openId + "stNewOperData713");
        if (str) {
            try {
                this.stGDNewOperData713 = JSON.parse(str);
                this.stGDNewOperData713.nSecond += 1;
            } catch (e) {
                console.log("error player data : ", e);
                this.stGDNewOperData713 = new GDNewOperData713();
            }
        }

        //2020.7.13
        if (this.stGDNewOperData713.nRecordTime == 0) {
            this.stGDNewOperData713.nRecordTime = new Date().getTime();
        }
        let nCurTime = new Date().getTime();
        if (!Utils.judgeIsOnTheSameDay(this.stGDNewOperData713.nRecordTime, nCurTime)) {
            this.stGDNewOperData713.nSecond = 1;
            this.stGDNewOperData713.nRecordTime = nCurTime;
        }
        //新增嘟游的日志记录
        // str = Laya.LocalStorage.getItem(GDataMgr.getInstance().uinfo.openId + "DYLogData");
        // if (str) {
        //     try {
        //         this.stDYLogData = JSON.parse(str);
        //     } catch (e) {
        //         this.stDYLogData = new DYLogData();
        //     }
        // }

        let strOperData0807 = Laya.LocalStorage.getItem("OperData0807" + GDataMgr.getInstance().uinfo.openId);
        if (strOperData0807) {
            this.stOperData0807 = JSON.parse(strOperData0807);
        } else {
            this.stOperData0807 = new OperData0807();
        }
    }

    public isSecondEnterGame() {
        return this.stGDNewOperData713.nSecond >= 2;
    }

    /**触发计算离线体力 */
    public refreshOffLinePS() {
        //读取数据的时候刷新下离线的体力
        this.addPowerAboutOffLine();
        //开启体力倒计时的检测
        this.openPowerRecoveryTime();
    }

    /**获取体力剩余时间 */
    public getPowerLastTime(): string {
        return this.strUpDownTime;
    }

    /**离线的体力计算 */
    public addPowerAboutOffLine() {
        if (BaseConst.infos.gameInfo.openalllevel == 1) {
            this.stPlayerDataBase.nCurLevel = this.nMaxLevelCount - 1;
            this.stPlayerDataBase.nMaxLevel = this.nMaxLevelCount - 1;
            this.bIsNewPlayer = false;
        }
        //没有开启过体力恢复
        if (this.stPlayerDataBase.nPsTime == 0) {
            return;
        }
        let nMaxPs = 10;
        let stGameConfig = ConfigMgr.getInstance().getGCDBID(1);
        if (stGameConfig) {
            nMaxPs = parseInt(stGameConfig.strValue);
        }
        //超过时间回复的最大值
        if (this.stPlayerDataBase.nPS >= nMaxPs) {
            return;
        }
        //回复体力
        stGameConfig = ConfigMgr.getInstance().getGCDBID(2);
        if (stGameConfig) {
            let nAddPsPerTime = parseInt(stGameConfig.strValue);
            if (nAddPsPerTime == 0) {
                return;
            }
            let nCurtTime = GameLogicProcessMgr.GetCurTimea();
            let nTimeOverFlow = nCurtTime - this.stPlayerDataBase.nPsTime;
            let nPsAdd = Math.floor(nTimeOverFlow / nAddPsPerTime);
            this.stPlayerDataBase.nPS += nPsAdd;
            nTimeOverFlow = nTimeOverFlow % nAddPsPerTime;
            this.stPlayerDataBase.nPsTime = nCurtTime - nTimeOverFlow;
            if (this.stPlayerDataBase.nPS >= nMaxPs) {
                this.stPlayerDataBase.nPS = nMaxPs;
                this.stPlayerDataBase.nPsTime = 0;
            }
            this.SaveData();
        }
    }

    /**定时更新界面的显示信息 */
    private subTimeAndRefreshPowerRecoveryTimeView() {
        //已经关闭了
        if (!GameLogicProcessMgr.getInstance().PSRecoveryOpena) {
            return;
        }
        if (PlayerDataMgr.nTimeHidSec != 0) {
            PlayerDataMgr.nTimeHidSec = PlayerDataMgr.nTimeHidSec - PlayerDataMgr.nTimeHidSec % 1000;
        }
        this.nPsTimeCountDown -= 1000 + PlayerDataMgr.nTimeHidSec;
        PlayerDataMgr.nTimeHidSec = 0;
        //this.nPsTimeCountDown  = this.nPsTimeCountDown  < 0 ? 0 :this.nPsTimeCountDown;
        this.refreshPowerRecoveryTimeView(this.nPsTimeCountDown);
    }

    /**刷新时间界面*/
    private refreshPowerRecoveryTimeView(nTime: number) {
        let nLastTime = nTime;
        nLastTime = nLastTime < 0 ? 0 : nLastTime;
        //刷新界面显示
        // public timeMinTen:Laya.Sprite;
        // public timeMinBit:Laya.Sprite;
        // public timeSecTen:Laya.Sprite;
        // public timeSecBit:Laya.Sprite;
        nLastTime = Math.floor(nLastTime / 1000);
        let nMinTotal = Math.floor(nLastTime / 60);
        let nMinTen = Math.floor(nMinTotal / 10);
        let nMinBit = nMinTotal % 10;
        let nSecTotal = nLastTime % 60;
        // nSecTotal     = Math.floor(nSecTotal/1000);
        let nSecTen = Math.floor(nSecTotal / 10);
        let nSecBit = nSecTotal % 10;
        this.strUpDownTime = nMinTen.toString() + nMinTotal.toString() + ":" + nSecTen.toString() + nSecBit.toString();
        EventMgr.getInstance().sendEvent(GEvent.O_SP_UD_T);
        if (nTime < 0) {
            this.nPsTimeCountDown = 0;
            //设置为false
            GameLogicProcessMgr.getInstance().PSRecoveryOpena = false;
            //清空时间
            this.stPlayerDataBase.nPsTime = 0;
            //清理时钟
            Laya.timer.clear(this, this.refreshPowerRecoveryTimeView);
            //增加体力
            this.AddProp(PType.e_GType_Sp, 1);
            return;
        }
    }

    /**开启一个体力回复的倒计时 */
    private openPowerRecoveryTime() {
        //初始化一下数据
        if (this.nPsRecoveryTime == 0) {
            let stGameConfig = ConfigMgr.getInstance().getGCDBID(2);
            if (!stGameConfig) {
                return;
            }
            this.nPsRecoveryTime = parseInt(stGameConfig.strValue);
        }
        let nMaxPs = 10;
        let stGameConfig = ConfigMgr.getInstance().getGCDBID(1);
        if (stGameConfig) {
            nMaxPs = parseInt(stGameConfig.strValue);
        }
        //超过时间回复的最大值
        if (this.stPlayerDataBase.nPS >= nMaxPs) {
            Laya.timer.clear(this, this.subTimeAndRefreshPowerRecoveryTimeView);
            this.stPlayerDataBase.nPsTime = 0;
            GameLogicProcessMgr.getInstance().PSRecoveryOpena = false;
        } else {
            if (!GameLogicProcessMgr.getInstance().PSRecoveryOpena) {
                GameLogicProcessMgr.getInstance().PSRecoveryOpena = true;
                let nCurTime = GameLogicProcessMgr.GetCurTimea();
                if (this.stPlayerDataBase.nPsTime == 0) {
                    this.stPlayerDataBase.nPsTime = nCurTime;
                }
                //离线和在线统一处理
                this.nPsTimeCountDown = this.nPsRecoveryTime - (nCurTime - this.stPlayerDataBase.nPsTime);
                //开启时间倒计时
                this.refreshPowerRecoveryTimeView(this.nPsTimeCountDown);
                Laya.timer.loop(1000, this, this.subTimeAndRefreshPowerRecoveryTimeView);
                //保存下时间
                this.SaveData();
            }
        }
    }

    /**已经做完的关卡数量 */
    public getGuanQiaNumMakeOver() {
        return this.nMaxLevelCount;
    }

    /**判断当天是否签到 */
    public isSigned(): boolean {
        //判断当前是否能签到
        let nCurTime = GameLogicProcessMgr.GetCurTimea();
        if (Utils.judgeIsOnTheSameDay(PlayerDataMgr.getInstance().stPlayerDataBase.nSignTimeLast, nCurTime)) {
            return false;
        } else {
            return true;
        }
    }

    /**检测皮肤状态 text */
    public checkSkinStatus(nSkinID: number): number {
        let nState = SStatus.e_SState_NO;
        //to do
        if (nSkinID == 1) {
            nState = SStatus.e_SState_H;
        } else if (nSkinID == 2) {
            nState = SStatus.e_SState_NO;
        }
        return nState;
    }

    /**初始化体力 */
    public initPower() {
        if (!this.bIsNewPlayer) {
            return;
        }
        //初始话体力
        let stGameConfig = ConfigMgr.getInstance().getGCDBID(15);
        if (stGameConfig) {
            this.stPlayerDataBase.nPS = parseInt(stGameConfig.strValue);
        }
        //初始化金币
        stGameConfig = ConfigMgr.getInstance().getGCDBID(16);
        if (stGameConfig) {
            this.stPlayerDataBase.nGlodCount = parseInt(stGameConfig.strValue);
        }
    }

    /**检测嘟游日志是否已经记录*/
    public checkDyLogIndexRecorded(nIndex: number): boolean {
        for (let i = 0, len = this.stDYLogData.aryIndex.length; i < len; ++i) {
            if (nIndex == this.stDYLogData.aryIndex[i]) {
                return true;
            }
        }
        return false;
    }

    /**记录嘟游日志 */
    public recordDyLogIndex(nIndex: number) {
        this.stDYLogData.aryIndex.push(nIndex);
    }

    /**头条提审的特殊操作 */
    public ttMiniGameArraignmentSpecialOper() {
        // if (DeviceUtil.isTTMiniGame() && BaseConst.infos.gameInfo.openPsAward == 0) {
        //     //if(BaseConst.infos.gameInfo.openPsAward == 0){
        //     this.nMaxLevelCount = this.nMaxLevelCount - 1;
        // }
    }

    /**检测道具是否足够 */
    public CheckProp(nType: number, nCount: number): boolean {
        if (nType == PType.e_GType_G) {
            return this.stPlayerDataBase.nGlodCount >= nCount;
        } else if (nType == PType.e_GType_Sp) {
            return this.stPlayerDataBase.nPS >= nCount;
        }
    }

    /**增加道具 */
    public AddProp(nType: number, nCount: number) {
        if (nType == PType.e_GType_G) {
            this.stPlayerDataBase.nGlodCount += nCount;
            //发送金币变更的时间
            EventMgr.getInstance().sendEvent(GEvent.O_G_CG);
        } else if (nType == PType.e_GType_Sp) {
            this.stPlayerDataBase.nPS += nCount;
            let nMax = 99;
            let stGameConfig = ConfigMgr.getInstance().getGCDBID(4)
            if (stGameConfig) {
                nMax = parseInt(stGameConfig.strValue);
            }
            if (this.stPlayerDataBase.nPS > nMax) {
                TipsManager.getInstance().showDefaultTips("体力已满");
                this.stPlayerDataBase.nPS = nMax;
            }
            //发送体力变更的时间
            EventMgr.getInstance().sendEvent(GEvent.O_PS_CG);
            //开启体力倒计时的时间检测
            this.openPowerRecoveryTime();
        }
        this.SaveData();
    }

    /**扣除道具*/
    public subProp(nType: number, nCount: number) {
        if (nType == PType.e_GType_G) {
            this.stPlayerDataBase.nGlodCount -= nCount;
            this.stPlayerDataBase.nGlodCount = this.stPlayerDataBase.nGlodCount < 0 ? 0 : this.stPlayerDataBase.nGlodCount;
            //发送金币变更的时间
            EventMgr.getInstance().sendEvent(GEvent.O_G_CG);
        } else if (nType == PType.e_GType_Sp) {
            this.stPlayerDataBase.nPS -= nCount;
            this.stPlayerDataBase.nPS = this.stPlayerDataBase.nPS < 0 ? 0 : this.stPlayerDataBase.nPS;
            //发送体力变更的时间
            EventMgr.getInstance().sendEvent(GEvent.O_PS_CG);
            //开启体力倒计时的时间检测
            this.openPowerRecoveryTime();
        }
        this.SaveData();
    }

    ////2020.7.13 新的运营需求数据增加 
    public bEnterGameFromGameHome: boolean = false;
    public nGotoLevel: number = 0;


    public showTips(str: string) {
        TipsManager.getInstance().tipLayer.removeChildren();
        let tip: BaseTips = Laya.Pool.getItemByClass("BaseTips", BaseTips);
        tip.init(str, TipsManager.getInstance().showDefualtTipsFontSize);
        tip.y = Laya.stage.height / 2
        TipsManager.getInstance().showTipInstance(tip);
        Laya.Tween.to(tip, { y: tip.y - 100 }, 1000, null, Laya.Handler.create(this, () => {
            tip.removeSelf();
        }))
        Laya.timer.once(1000,this,()=>{
            tip.removeSelf();
        })
    }

    public checkIsSpecial(){
        return this.stOperData0807.bSpecial;
    }
}
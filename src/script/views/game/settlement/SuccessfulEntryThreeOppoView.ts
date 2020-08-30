import { LevelMgr } from "../../../manager/LevelManager";
import { PlayerDataMgr } from "../../../common/GameDataManager";
import GameStatusMgr from "../../../games/GameStateManager";
import { EGType, PType } from "../../../games/CommonDefine";
import ViewChangeMgr from "../../../games/ViewChangeManager";
import { ConfigMgr } from "../../../games/ConfigManager";
import AnimationMgr from "../../../manager/AnimationManager";
import SoundMgr from "../../../common/SoundManager";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import { GDataMgr } from "../../../common/GameData";

import WeCatMoreGameItemOne from "../wechat/WeCatMoreGameItemOne";
import AddPowerView from "../pop/AddPsView";
import { PopBaseScene } from "../../base/PopBaseScene";
import { GameManager } from "../../../manager/GameManager";
import MoreGameRandomGameBox713 from "../wechat/MoreGameRandomGameBox713";
import { NativeVivoAd } from "../../../minigame/MiniVVManager";
import GameEvent from "../../../common/GameEvent";
import { NativeOppoAd } from "../../../minigame/MiniOppoManager";


export default class SuccessfulEntryThreeOppoView extends PopBaseScene {
    public className_key = "SuccessfulEntryThreeOppoView";
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;

    public grp_center: Laya.Box;
    public sprGold: Laya.Sprite;
    public imgGoodsTypeUp: Laya.Image;
    public btnLab: Laya.Sprite;
    public imgMask: Laya.Box;
    public btnAgain: Laya.Box;
    public sprCostPs: Laya.Sprite;
    public btn_chakan: Laya.Box;
    public txt_chakan: Laya.Label;
    public boxAnim: Laya.Box;
    public box_ad: Laya.Box;
    public btn_recieve: Laya.Button;
    public btnHome: Laya.Image;
    public btnNextLevel: Laya.Image;
    public aniReal: Laya.Skeleton;

    public aniRealNanZhu: Laya.Skeleton;
    private nGlodAddByWathcVideo: number;

    /**一些数据 */
    private _nGlodAdd: number;    //通关后增加的金币
    private _nGlodRadio: number;  //看视频后增加的倍数

    private _bRecvAward: boolean;

    constructor() {
        super();
        this._nGlodAdd = 50;
        this._nGlodRadio = 4;
        this._bRecvAward = false;
        this.skin = 'game/uiView/settlement/SuccessfulEntryThreeOppoView.json';
    }

    public initMiniGame() {
        AddPowerView._bCloseBinner = false;
        ViewChangeMgr.getInstance().commonView.addBtEvent();
        this._isShowBox = false;

        if (!this.aniReal) {
            this.createSke("resource/assets/img/ani/celebrate/celebrate.sk");
        } else {
            this.aniReal.play(0, false);
            this.grp_center.addChild(this.aniReal);
        }

        //MiniGameMgr.instance.StopVideo();
        if (!this.aniRealNanZhu) {//&& !((DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) && BaseConst.infos.gameInfo.isDY)) {
            this.createSkeletonNanZhu("resource/assets/img/ani/celebrate/chenggong.sk");
        } else {
            this.aniRealNanZhu.play(0, true);
            this.boxAnim.addChild(this.aniRealNanZhu);
        }
        MiniGameMgr.instance.showInsertAd({})

    }


    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        Laya.timer.clearAll(this);
        if (this.aniReal) {
            this.aniReal.stop();
            this.aniReal.removeSelf();
        }

        if (this.aniRealNanZhu) {
            this.aniRealNanZhu.stop();
            this.aniRealNanZhu.removeSelf();
        }
    }


    /**初始化一些信息 */
    public initView() {
        MiniGameMgr.instance._onShareVideoSuccess = false;
        //MiniGameMgr.instance.StopVideo();
        SoundMgr.getInstance().playEffect("win", 1);
        this._bRecvAward = false;


        this.initTextLable();
        this.showNativeAd();
    }


    public async showNativeAd() {
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true)
        this.box_ad.removeChildren();
        let nativeAdData: any = await MiniGameMgr.instance.createOppoNatvieAd({ index: 0, className_key:this.className_key });
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false)
        this.btn_chakan.visible = false;
        this.imgMask.left = 360;
        if (nativeAdData) {//拉取到原生广告
            this.btn_chakan.visible = true;
            console.log("原生广告数据", nativeAdData);
            let data = nativeAdData;
            this.btn_chakan.right = 160;
            this.imgMask.left = 160;
            let text = this.txt_chakan;
            this.hideBanner()
            if (text) {
                text.text = '查看广告';
            }
            this.btn_chakan.on(Laya.Event.CLICK, this, this.onRerort, [data])
            this.box_ad.on(Laya.Event.CLICK, this, this.onRerort, [data])
            this.initNativeBanner(nativeAdData);

        }else {
            this.showBanner({ className_key: this.className_key })

        }
    }

    public initNativeBanner(data: { adList: NativeOppoAd[], nativeAd: any }) {
        this.nativeData = data;
        this.box_ad.removeChildren();
        let ad = data.adList[0];
        let icon_bg = new Laya.Image;
        icon_bg.size(this.box_ad.width, this.box_ad.height);
        icon_bg.skin = ad.imgUrlList[0];
        this.box_ad.addChild(icon_bg);

        let icon_flg = new Laya.Image()
        icon_flg.skin = ad.logoUrl;
        icon_flg.top = icon_flg.right = 0;
        icon_bg.addChild(icon_flg);
        if (data.nativeAd) {
            data.nativeAd.reportAdShow({ adId: ad.adId });
        }

    }
    public nativeData: { adList: NativeOppoAd[], nativeAd: any };

    public onRerort(data: { adList: NativeOppoAd[], nativeAd: any }, evt: Laya.Event, ) {
        if (data.nativeAd) {
            data.nativeAd.reportAdClick({ adId: data.adList[0].adId });
        }
        let text = this.txt_chakan;
        if (text) {
            text.text = '查看广告';
        }
    }
    private initTextLable() {
        //初始化通关加的金币
        let objConfig = ConfigMgr.getInstance().getGCDBID(12);
        if (objConfig) {
            this._nGlodAdd = parseInt(objConfig.strValue);
        }
        //BitmapLabelUtils.setLabel(this.sprGold, this.nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        //初始化看视频增加的倍数
        objConfig = ConfigMgr.getInstance().getGCDBID(13);

        // BitmapLabelUtils.setLabel(this.sprCost, this._nGlodRadio.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");

        //扣除的体力数值
        let nCost = 1;
        objConfig = ConfigMgr.getInstance().getGCDBID(8);
        if (objConfig) {
            nCost = parseInt(objConfig.strValue);
        }
        BitmapLabelUtils.setLabel(this.sprCostPs, nCost.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");

        //总数
        let bAddMore = this._nGlodAdd * this._nGlodRadio;
        // BitmapLabelUtils.setLabel(this.sprMore, bAddMore.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");

        // if (this.sprDouble.visible) {
        //     let nReal = this._nGlodAdd * this._nGlodRadio;
        //     BitmapLabelUtils.setLabel(this.sprGold, nReal.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        // } else {
        //     BitmapLabelUtils.setLabel(this.sprGold, this._nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        // }
        BitmapLabelUtils.setLabel(this.sprGold, this._nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
    }


    private onClick(evt: Laya.Event) {
        switch (evt.currentTarget) {
            case this.btnLab:
                this.sucfulEntryThreeNextLevel()
                break
            case this.btnHome:
                this.returnToHome()
                break
            case this.imgMask:
                this.sucRecvAward()
                break
            case this.btn_recieve:
                this.sucRecvAward(true)
                break


        }
    }

    public addEvent() {

        this.registerEvent(this.btnLab, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnHome, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnAgain, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.imgMask, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btn_recieve, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnNextLevel, Laya.Event.CLICK, this.onClick, this);

    }

    public removeEvent() {
        this.btn_chakan.off(Laya.Event.CLICK, this, this.onRerort);
        this.box_ad.off(Laya.Event.CLICK, this, this.onRerort);
        super.removeEvent()
    }


    /**分享 */
    private sucShareGame() {
        SoundMgr.getInstance().playEffect("button", 1);
        MiniGameMgr.instance.shareAppMsg();
        // MiniGameMgr.instance.bFlagDouYin = false;
        // MiniGameMgr.instance.shareAppMessage();
    }



    private _isShowBox: boolean = false;
    /**接受奖励 */
    private sucRecvAward(isDouble = false) {
        SoundMgr.getInstance().playEffect("button", 1);
        if (this._bRecvAward) {  //体力不足的情况才会领取了奖励还在当前界面
            //领完奖励执行切换到下一关的逻辑
            this.sucfulEntryThreeNextLevel();
            return;
        }
        if (isDouble) {
            MiniGameMgr.instance.playVideoAd({
                gameConstKey: "SuccessfulEntryThreeOppoView",
                successFun: () => {
                    this.sendAwardAfterWatchVideoAd();
                }
            });
        } else {
            this._nGlodRadio = 1;
            this.sendAwardAfterWatchVideoAd();
        }
    }

    /**看视频成功后获得奖励 */
    private sendAwardAfterWatchVideoAd() {
        this._bRecvAward = true;
        this.flayGlodSuccess();
        let numAdd = this._nGlodAdd * this._nGlodRadio;
        PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, numAdd);
        //领完奖励执行切换到下一关的逻辑
        this.sucfulEntryThreeNextLevel();
    }

    /**下一关 */
    private sucfulEntryThreeNextLevel() {
        let numCost = 1;
        let objData = ConfigMgr.getInstance().getGCDBID(8);
        if (objData) {
            numCost = parseInt(objData.strValue);
        }

        let self = this
        let fun = () => {
            MoreGameRandomGameBox713.bGotoNextGame = true;
            ViewManager.getInstance().showView(MoreGameRandomGameBox713);
            MiniGameMgr.instance._bFlagSpecialView = true;
            self.removeSelf();
        }
        //检测体力是否足够
        let bln = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, numCost);
        if (!bln) {
            GameManager.instance.onPowerNotEnough();
            return;
        } else {
            this.removeEvent();
          
                //扣除体力
                PlayerDataMgr.getInstance().subProp(PType.e_GType_Sp, numCost);
                //如果是最后一关则提示已通关且进入主页
                if (PlayerDataMgr.getInstance().stPlayerDataBase.nCurLevel >= PlayerDataMgr.getInstance().nMaxLevelCount - 1
                    && DeviceUtil.isQQMiniGame()) {//qq上
                    TipsManager.getInstance().showDefaultTips("明日更新关卡，明天再来吧！");
                    PlayerDataMgr.getInstance().isMaxLevel();
                    this.returnToHome();
                } else {
                    ViewChangeMgr.getInstance().goToNextLevel();
                    MiniGameMgr.instance._bFlagSpecialView = true;
                    this.removeSelf();
                }
            
        }
    }

    /**返回主页 */
    private returnToHome() {
        SoundMgr.getInstance().playEffect("button", 1);
        GameManager.instance.backHome();
        MiniGameMgr.instance._bFlagSpecialView = true;
        // ViewChangeMgr.getInstance().commonView.addBtEvent();
        this.removeSelf();
    }



    /**飞金币 */
    private flayGlodSuccess() {
        let point = new Laya.Point();
        point.x = this.imgGoodsTypeUp.x;
        point.y = this.imgGoodsTypeUp.y;
        let parent = this.imgGoodsTypeUp.parent as Laya.Box;
        point = parent.localToGlobal(point);
        AnimationMgr.instance.flayGloda(point.x, point.y, 341, 105);
    }

    public createSke(url: string): Promise<Laya.Skeleton> {
        return new Promise<Laya.Skeleton>((resolve) => {
            AnimationMgr.instance.showSkeAnimation(url, (boomAnimation: Laya.Skeleton) => {
                boomAnimation.player.playbackRate = 1;
                boomAnimation.autoSize = true;
                boomAnimation.scale(1, 1);
                boomAnimation.play(0, false);
                boomAnimation.x = this.grp_center.width / 2;
                boomAnimation.y = this.grp_center.height / 2;
                this.grp_center.addChild(boomAnimation);
                this.aniReal = boomAnimation;
                resolve(boomAnimation)
            }, 1);
        })

    }


    public createSkeletonNanZhu(url: string): Promise<Laya.Skeleton> {
        return new Promise<Laya.Skeleton>((resolve) => {
            AnimationMgr.instance.showSkeAnimation(url, (boomAnimation: Laya.Skeleton) => {
                boomAnimation.player.playbackRate = 1;
                boomAnimation.autoSize = true;
                boomAnimation.scale(1, 1);
                boomAnimation.play(0, true);
                boomAnimation.x = 250;
                boomAnimation.y = 400 + 80;
                this.boxAnim.addChild(boomAnimation);
                this.aniRealNanZhu = boomAnimation;
                resolve(boomAnimation)
            }, 1);
        })
    }


}
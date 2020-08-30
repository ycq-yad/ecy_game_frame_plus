
import { PlayerDataMgr } from "../../../common/GameDataManager";
import { PType } from "../../../games/CommonDefine";
import FailEntryErView from "./FailEntryTwoView";
import ViewChangeMgr from "../../../games/ViewChangeManager";
import AnimationMgr from "../../../manager/AnimationManager";
import SoundMgr from "../../../common/SoundManager";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import { ConfigMgr } from "../../../games/ConfigManager";
import CustemButton from "../../../tool/CustemButton";
import { PopBaseScene } from "../../base/PopBaseScene";
import MoreGameRandomGameBox713 from "../wechat/MoreGameRandomGameBox713";
import { FailEntryTwoVivoView } from "./FailEntryTwoVivoView";
import MoreGameView from "../wechat/MoreGameView";
import MoreGameRandomGameBox713Temp from "../wechat/MoreGameRandomGameBox713Temp";
import { FailEntryTwoOppoView } from "./FailEntryTwoOppoView";


export default class FailEntryYiView extends PopBaseScene {
    public className_key = "FailEntryOneView";
    protected grp_center: Laya.Box;
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
    public btnSign: Laya.Image;
    public btnExit: Laya.Label;
    public btnPay: Laya.Image;
    public imageGoods: Laya.Image;
    public spCount: Laya.Image;
    public boxAnim: Laya.Box;
    public _aniReal: Laya.Skeleton;
    public btnHome: Laya.Image;
    /**数据 */
    private _nGlodCost: number;

    constructor() {
        super();
        this._nGlodCost = 200;
        this.skin = "game/uiView/settlement/FailEntryOneView.json";
    }


    public initView() {
        this.initPl();
        this.refreshTextDelay();
        //MiniGameMgr.instance.StopVideo();
        //刷新金币数量
        this.refreshReLiveByGlod();
        this.btnSign.getComponent(CustemButton).playScaleAnim();
        this.initMiniGame();
        this.initSke()
    }

    private async initSke() {
        if (!this._aniReal) {
            this._aniReal = await this.createSke("resource/assets/img/ani/failure/shibai.sk");
        } else {
            this._aniReal.play(0, true);
            this.boxAnim.addChild(this._aniReal);
        }
    }

    public initMiniGame() {
        if (DeviceUtil.isWXMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
            //this.btnHome.visible = true;
        }
        //  this.showBanner();
    }

    public addEvent() {
        // this.btnPay.on(Laya.Event.CLICK, this, this.reliveByCostGlod);
        // this.btnSign.on(Laya.Event.CLICK, this, this.reliveByWatchVideo);
        // this.btnExit.on(Laya.Event.CLICK, this, this.onCancel);
        // this.btnHome.on(Laya.Event.CLICK, this, this.onBack);
        this.registerEvent(this.btnPay, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnSign, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnExit, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnHome, Laya.Event.CLICK, this.onClick, this);
    }


    private onClick(evt: Laya.Event) {
        switch (evt.currentTarget) {
            case this.btnPay:
                this.reliveByCostGlod();
                break;
            case this.btnSign:
                this.reliveByWatchVideo();
                break;
            case this.btnExit:
                this.onCancel();
                break;
            case this.btnHome:
                this.onBack();

                break;
        }
    }
    /**看视频复活 */
    private reliveByWatchVideo() {
        SoundMgr.getInstance().playEffect("button", 1);
        let self = this;
        if (ViewChangeMgr.getInstance().CurLevelBasea) {
            ViewChangeMgr.getInstance().CurLevelBasea.hideLevel();
        }

        MiniGameMgr.instance.playVideoAd({
            gameConstKey: 'FailEntryOneView',
            successFun: () => {
                Laya.timer.once(100, self, () => {
                    self.onFailAndRestGame();
                    self.showLevel();

                })
                console.log("onFailRestartGame xxx");
            },
            failFun: () => {
                self.showLevel();

            },
            errorFun: () => {
                self.showLevel();
            }
        });

    }


    private showLevel() {
        if (ViewChangeMgr.getInstance().CurLevelBasea) {
            ViewChangeMgr.getInstance().CurLevelBasea.showLevel();
        }
    }

    /**花费金币复活 */
    private reliveByCostGlod() {
        SoundMgr.getInstance().playEffect("button", 1);
        //检测金币是否足够
        let blnGold = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_G, this._nGlodCost);
        if (!blnGold) {
            return;
        }
        //花费金币
        PlayerDataMgr.getInstance().subProp(PType.e_GType_G, this._nGlodCost);
        //开启游戏
        this.onFailAndRestGame();
    }

    /**
     * 点击返回
     */
    private onBack(): void {
        if (DeviceUtil.isWXMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
            MoreGameRandomGameBox713.bOperFlag = true;
            MoreGameRandomGameBox713.bSuccess = false;
            ViewManager.getInstance().showView(MoreGameRandomGameBox713);
        }
        MiniGameMgr.instance._bFlagSpecialView = true;
        this.removeSelf();
    }

    private onFailAndRestGame() {
        //为了头条的提审 隐藏binner可能会有延迟 
        if (DeviceUtil.isTTMiniGame()) {
            MiniGameMgr.instance.hideBannerAd();
        }
        ViewChangeMgr.getInstance().restartGame(false);
        MiniGameMgr.instance._bFlagSpecialView = true;
        this.removeSelf();
    }

    /**刷新金币复活的信息 */
    private refreshReLiveByGlod() {
        let stGameConfig = ConfigMgr.getInstance().getGCDBID(6);
        if (stGameConfig) {
            this._nGlodCost = parseInt(stGameConfig.strValue);
        }
        //检测金币是否足够
        let blnGold = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_G, this._nGlodCost);
        if (!blnGold) {
            console.log('aa->xxx');
            this.btnPay.visible = false;
            this.btnSign.centerX = 0;
            return;
        } 
        this.btnPay.visible = true;
        this.btnSign.centerX = -252;
        BitmapLabelUtils.setLabel(this.spCount, this._nGlodCost + '', "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
    }

    /**不了谢谢延迟显示 */
    private refreshTextDelay() {
        if (DeviceUtil.isQQMiniGame()) {
            if (BaseConst.infos.gameInfo.openPsAward == 1 && BaseConst.infos.gameInfo.for_pay == 1) {
                this.btnExit.bottom = this.nBtNextLevelSp;
                MiniGameMgr.instance._bFlagSpecialView = false;
                MiniGameMgr.instance.hideBannerAd();
                return;
            } else {
                this.btnExit.bottom = this.nBtNextLevel;
            }
            return;
        }
        if (!ConfigMgr.getInstance().isWeCatMiniGame()) {
            this.btnExit.visible = false;
            let time = 3000;
            if (DeviceUtil.isOPPOMiniGame()) {
                time = 0;
            }
            Laya.timer.once(time, this, () => {
                this.btnExit.visible = true;
            });
        }
    }

    public createSke(url: string): Promise<Laya.Skeleton> {
        return new Promise<Laya.Skeleton>((resolve) => {
            AnimationMgr.instance.showSkeAnimation(url, (boomAnimation: Laya.Skeleton) => {

                boomAnimation.player.playbackRate = 1;
                boomAnimation.autoSize = true;
                boomAnimation.scale(1, 1);
                boomAnimation.play(0, true);
                boomAnimation.x = boomAnimation.width;
                boomAnimation.y = boomAnimation.height + 70;
                this.boxAnim.addChild(boomAnimation);

                resolve(boomAnimation)
            }, 1);
        })

    }

    /**不了谢谢 */
    private onCancel() {
        SoundMgr.getInstance().playEffect("button", 1);
        MiniGameMgr.instance._bFlagSpecialView = true;
        if (ConfigMgr.getInstance().isWeCatMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
            // MoreGameView.bSuccess = false;
            // ViewManager.getInstance().showView(MoreGameView);

            if (PlayerDataMgr.getInstance().checkIsSpecial() && BaseConst.infos.gameInfo.MoreGameView == 1) {
                MoreGameView.bSuccess = false;
                ViewManager.getInstance().showView(MoreGameView);
            } else {
                MoreGameRandomGameBox713Temp.bSuccess = false;
                ViewManager.getInstance().showView(MoreGameRandomGameBox713Temp);
            }

        } else {
            //打开失败界面2
            if (DeviceUtil.isVIVOMiniGame()) {
                ViewManager.getInstance().showView(FailEntryTwoVivoView);

            }
            else if (DeviceUtil.isOPPOMiniGame()) {
                ViewManager.getInstance().showView(FailEntryTwoOppoView);

            }
            else {
                ViewManager.getInstance().showView(FailEntryErView);

            }
        }
        this.removeSelf();
    }

    public removeEvent() {
        // this.btnPay.off(Laya.Event.CLICK, this, this.reliveByCostGlod);
        // this.btnSign.off(Laya.Event.CLICK, this, this.reliveByWatchVideo);
        // this.btnExit.off(Laya.Event.CLICK, this, this.onCancel);
        // this.btnHome.off(Laya.Event.CLICK, this, this.onBack);
        super.removeEvent();
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        if (this._aniReal) {
            this._aniReal.stop();
            this._aniReal.removeSelf();
        }
        if (!DeviceUtil.isVIVOMiniGame()) {
            this.hideBanner()
        }
    }

    private box_wecat: Laya.Box;
    private nBtNextLevel: number = 360;
    private nBtNextLevelSp: number = 100;
    private initPl() {
        if (ConfigMgr.getInstance().isWeCatMiniGame()) {
            this.box_wecat.removeChildren();
            this.box_wecat.addChild(ViewChangeMgr.getInstance().showMoreGameinView(true));
            this.boxAnim.visible = false;
            this.box_wecat.visible = true;
            // if (this.btnPay.visible) {
            //     this.imagFreeReLive.centerX = -220;
            //     this.btnPay.bottom = this.imagFreeReLive.bottom;
            //     this.btnPay.centerX = 220
            // }else{
            //     this.imagFreeReLive.centerX = 0;
            // }
            if (BaseConst.infos.gameInfo.openPsAward == 1 && BaseConst.infos.gameInfo.for_pay == 1) {
                this.btnExit.bottom = this.nBtNextLevelSp;
                MiniGameMgr.instance._bFlagSpecialView = false;
                MiniGameMgr.instance.hideBannerAd();
                //一秒后显示binner
                Laya.timer.once(1000, this, () => {
                    MiniGameMgr.instance._bFlagSpecialView = true;
                    MiniGameMgr.instance.showBanner({});
                    //按钮滑动动制定位置
                    Laya.Tween.to(this.btnExit, { bottom: this.nBtNextLevel }, 500, null);
                })
                return;
            } else {
                this.btnExit.bottom = this.nBtNextLevel;
            }
        } else {
            if (DeviceUtil.isVIVOMiniGame()) {
                MiniGameMgr.instance.showInsertAd({})
                // MiniGameMgr.instance.showBottomNativeAd(this, Laya.stage.height - this.btnExit.bottom + 10);
                this.showBanner({ className_key: this.className_key });
            } else if (DeviceUtil.isQQMiniGame()) {

            }
            else {

                this.showBanner({ className_key: this.className_key });
            }
        }
    }
}
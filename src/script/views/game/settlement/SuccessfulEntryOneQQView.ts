import { ConfigMgr } from "../../../games/ConfigManager";
import { PlayerDataMgr, PlayerDataBaseInfo } from "../../../common/GameDataManager";
import { PType } from "../../../games/CommonDefine";
import GameLogicProcessMgr from "../../../games/GameLogicProcessingManager";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import ViewChangeMgr from "../../../games/ViewChangeManager";
import SuccessfulEntryThreeView from "./SuccessfulEntryThreeView";
import SoundMgr from "../../../common/SoundManager";
import { PopBaseScene } from "../../base/PopBaseScene";
import AnimationMgr from "../../../manager/AnimationManager";
import GameConfig from "../../../../GameConfig";
import SuccessfulEntryThreeVivoView from "./SuccessfulEntryThreeVivoView";
import MoreGameOperRequestTwo from "../wechat/MoreGameOperRequestTwo";
import SuccessfulEntryThreeQQView from "./SuccessfulEntryThreeQQView";

export default class SuccessfulEntryOneQQView extends PopBaseScene {

    public className_key = "SuccessfulEntryOneQQView";
    protected grp_center: Laya.Box;
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;

    public btnGet: Laya.Image;
    public imgIcon: Laya.Image;
    public imgValue: Laya.Image;
    public sprTime: Laya.Sprite;

    private img_head: Laya.Image;

    private _nTimeDown: number;
    private _nCountMax: number;
    private _nPsAdd: number;

    private _nAddPerOne: number;
    private _nCurCount: number;

    private _bTimeOver: boolean;
    private _bAniRunning: boolean;
    private _bFirst: boolean;

    private _nTimeOverTemp: number;
    private _nLastClickTime: number;

    /**
     * isSuccess   游戏通关进入  区分其他地方进入
     */
    public viewData_: { success: Function, fail: Function, isSuccess: boolean }

    constructor(data: { success: Function, fail: Function, isSuccess: boolean }) {
        super();
        this.viewData_ = data;
        this._nTimeDown = 5;
        this._nCountMax = 5;
        this._nPsAdd = 1;
        this._nAddPerOne = 0;
        this._nCurCount = 0;
        this._bTimeOver = false;
        this._bAniRunning = false;
        this._bFirst = true;
        this._nTimeOverTemp = 0;
        this._nLastClickTime = 0;
        this.skin = "game/uiView/settlement/SuccessfulEntryOneQQView.json";
    }


    public initMiniGame() {
        MiniGameMgr.instance._bFlagSpecialView = false;
        MiniGameMgr.instance.showChaPinAd();
        MiniGameMgr.instance.hideBannerAd();
        this.btnGet.bottom = 0;
        ViewChangeMgr.getInstance().commonView.visible = false;

    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        Laya.timer.clearAll(this.imgIcon);
        this._bFirst = false;
        this._bAniRunning = false;
        Laya.Tween.clearAll(this.imgIcon);
        Laya.timer.clearAll(this);

        MiniGameMgr.instance._bFlagSpecialView = true;
    }

    /**初始化一些数据 */
    public initView() {
        SoundMgr.getInstance().playEffect("win", 1);
        if (this._moveBtnTween) {
            this._moveBtnTween.recover();
        }
        this._moveBtnTween = null;
        //初始化数据
        this._nTimeDown = 5;
        this._nCountMax = 5;
        this._nPsAdd = 1;
        this._nAddPerOne = 0;
        this._nCurCount = 0;
        this._bTimeOver = false;
        this._bAniRunning = true;
        this._bFirst = true;

        this.initData();
        this._nAddPerOne = Math.floor(870 / this._nCountMax);
        this.imgValue.width = 0;
        this.openTimeDown();
        // this.sprTime.visible = false;
        this.openHandAnimation();
    }


    private initData() {
        //点击倒计时
        let objData = ConfigMgr.getInstance().getGCDBID(9);
        if (objData) {
            this._nTimeDown = parseInt(objData.strValue);
        }

        //先要把倒计时显示出来
        BitmapLabelUtils.setLabel(this.sprTime, this._nTimeDown.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");

        //点击次数最大值
        objData = ConfigMgr.getInstance().getGCDBID(10);
        if (objData) {
            this._nCountMax = parseInt(objData.strValue);
        }
        //增加的体力
        objData = ConfigMgr.getInstance().getGCDBID(11);
        if (objData) {
            this._nPsAdd = parseInt(objData.strValue);
        }

        //没有点击就扣次数
        objData = ConfigMgr.getInstance().getGCDBID(14);
        if (objData) {
            this._nTimeOverTemp = parseInt(objData.strValue);
        }

    }
    public addEvent() {
        // this.btnGet.on(Laya.Event.CLICK, this, this.btnGetClickReceiveAward);
        this.registerEvent(this.btnGet, Laya.Event.CLICK, this.btnGetClickReceiveAward, this)
    }

    public removeEvent() {
        // this.btnGet.off(Laya.Event.CLICK, this, this.btnGetClickReceiveAward);
        super.removeEvent();
    }

    /**点击宝箱增加进度 */
    private btnGetClickReceiveAward() {
        SoundMgr.getInstance().playEffect("button", 1);
        // if(this.bFirst){
        //     //this.sprTime.visible = true;
        //     this.openTimeDown();
        //     this.bFirst = false;
        // }

        if (this._bTimeOver) {
            return;
        }
        this._nCurCount += 1;
        let numCur = this._nCurCount * this._nAddPerOne;
        this.imgValue.width = numCur;
        this.img_head.x = 885 * (this._nCurCount / this._nCountMax) + 115;
        if (this._nCurCount >= this._nCountMax) {
            Laya.timer.clear(this, this.timeDown);
            this.procLogicOver();
        }
        this.checkClick();
    }

    private checkClick() {
        if (this._nCurCount > 7) {
            MiniGameMgr.instance._bFlagSpecialView = true;
            MiniGameMgr.instance.showBanner({ isNeedShowQQbaner: true });
            if (!this._moveBtnTween) {
                if (DeviceUtil.isTTMiniGame()) {
                    if (MiniGameMgr.instance.appName() != 'Douyin') {
                        this._moveBtnTween = Laya.Tween.to(this.btnGet, { bottom: 200 }, 1000);
                    }
                } else if (DeviceUtil.isQQMiniGame()) {
                    this._moveBtnTween = Laya.Tween.to(this.btnGet, { bottom: 400 }, 1000);
                }
                else {
                    /**2020.6.29 qq 3、宝箱连击误点上移的位置，调整到可点击到【领取】按钮 */
                    this._moveBtnTween = Laya.Tween.to(this.btnGet, { bottom: 200 }, 1000);
                }


            }
        }

        this._nLastClickTime = GameLogicProcessMgr.GetCurTimea();
    }

    //移动 btn
    private _moveBtnTween: Laya.Tween;

    /**启动一个倒计时 */
    private openTimeDown() {
        //BitmapLabelUtils.setLabel(this.sprTime, this._nTimeDown.toString(), "resource/assets/img/common/level_number12/level_number_", 0, ".png", "center");
        BitmapLabelUtils.setLabel(this.sprTime, this._nTimeDown.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");
        Laya.timer.loop(1000, this, this.timeDown);
        Laya.timer.loop(this._nTimeOverTemp, this, this.dealCount);
    }

    /**处理时间回退 */
    private dealCount() {
        this._nCurCount -= 1;
        this._nCurCount = this._nCurCount < 0 ? 0 : this._nCurCount;
        let numCur = this._nCurCount * this._nAddPerOne;
        // Laya.Tween.to(this.imgValue, { width: nWithCur }, 700)
        this.imgValue.width = numCur;
        this.img_head.x = 885 * (this._nCurCount / this._nCountMax) + 115;

    }

    /**倒计时相关的处理 */
    private timeDown() {
        this._nTimeDown -= 1;
        let numTemp = this._nTimeDown;
        numTemp = numTemp < 0 ? 0 : numTemp;
        //BitmapLabelUtils.setLabel(this.sprTime, numTemp.toString(), "resource/assets/img/common/level_number12/level_number_", 0, ".png", "center");

        if (this._nTimeDown < 0) {
            this._bTimeOver = true;
            this.procLogicOver();
        }
        else {
            BitmapLabelUtils.setLabel(this.sprTime, this._nTimeDown.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");
        }
    }

    /**结束的相关处理 */
    private procLogicOver() {
        Laya.timer.clear(this, this.timeDown);
        if (this._bTimeOver) {

            //TipsManager.getInstance().showDefaultTips("领取失败");
            PlayerDataMgr.getInstance().showTips("领取失败");
            this.viewData_ && this.viewData_.fail && this.viewData_.fail()

        }
        else if (this._nCurCount >= this._nCountMax) {
            //TipsManager.getInstance().showDefaultTips("体力+" + this._nPsAdd.toString());
            if (this.viewData_ && this.viewData_.isSuccess) {
                PlayerDataMgr.getInstance().AddProp(PType.e_GType_Sp, this._nPsAdd);
                PlayerDataMgr.getInstance().showTips("体力+" + this._nPsAdd.toString());
            }
            this.viewData_ && this.viewData_.success && this.viewData_.success()
        }
        if (ConfigMgr.getInstance().isWeCatMiniGame()) {
            if (PlayerDataMgr.bGlobEnterGame) {
                ViewManager.getInstance().showView(MoreGameOperRequestTwo);
            } else {
                if (PlayerDataMgr.getInstance().nGotoLevel != 0) {
                    ViewChangeMgr.getInstance().gotoLevel(PlayerDataMgr.getInstance().nGotoLevel);
                } else {
                    if (PlayerDataMgr.getInstance().bEnterGameFromGameHome) {
                        ViewChangeMgr.getInstance().CurLevelBasea.startGame();
                    } else {
                        ViewChangeMgr.getInstance().goToNextLevel();
                    }
                }
                ViewChangeMgr.getInstance().commonView.visible = true;
            }
            //2020.7.13-1-1
            PlayerDataMgr.getInstance().bEnterGameFromGameHome = false;
            PlayerDataMgr.getInstance().nGotoLevel = 0;
            MiniGameMgr.instance._bFlagSpecialView = true;
            this.removeSelf();
        } else {
            this.showSuccessView();
        }
    }

    private showSuccessView() {
        if (DeviceUtil.isVIVOMiniGame()) {
            ViewManager.getInstance().showView(SuccessfulEntryThreeVivoView);
        } else if (DeviceUtil.isQQMiniGame()) {
            if (this.viewData_ && this.viewData_.isSuccess) {
                ViewManager.getInstance().showView(SuccessfulEntryThreeQQView);
            } else {
                // ViewManager.getInstance().showView(SuccessfulEntryThreeView);
            }
        } else {
            ViewManager.getInstance().showView(SuccessfulEntryThreeView);
        }
        ViewChangeMgr.getInstance().commonView.visible = true;
        this.removeSelf();
        MiniGameMgr.instance._bFlagSpecialView = true;
    }

    public removeSelf() {
        if (this._moveBtnTween) {
            this._moveBtnTween.recover();
        }
        this._moveBtnTween = null;
        Laya.timer.clear(this, this.dealCount);
        Laya.timer.clear(this, this.timeDown);
        Laya.timer.clearAll(this);
        return super.removeSelf();
    }

    private yTemp: number = null
    /**手上下动的动画 */
    private openHandAnimation() {
        if (!this._bAniRunning) {
            return;
        }
        if (this.yTemp == null) {
            this.yTemp = this.imgIcon.y;
        }
        this.imgIcon.y = this.yTemp
        AnimationMgr.instance.VTween(this.imgIcon, this.imgIcon, 2);

    }
}
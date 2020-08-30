import ViewChangeMgr from "../../../games/ViewChangeManager";
import { ConfigMgr } from "../../../games/ConfigManager";
import { PlayerDataMgr } from "../../../common/GameDataManager";
import { PType } from "../../../games/CommonDefine";
import SoundMgr from "../../../common/SoundManager";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import { PopBaseScene } from "../../base/PopBaseScene";

export default class AddPowerView extends PopBaseScene {
    className_key = "AddPsView";
    public grp_center: Laya.Box;
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
    public spCount: Laya.Sprite;
    public btnGet: Laya.Image;
    public btnExit: Laya.Label;
    public sptext: Laya.Text;

    private _nPsAdd: number;

    public static _bCloseBinner: boolean = true;

    constructor() {
        super();
        this.skin = "game/uiView/pop/AddSpView.json";
    }

    protected createChildren(): void {
        super.createChildren();
    }


    public initView() {
        MiniGameMgr.instance.showChaPinAd();
        ViewChangeMgr.getInstance().commonView.removeBtEvent();

        if (DeviceUtil.isQQMiniGame()) {
            EventMgr.getInstance().sendEvent("SuccBlockShow", false);
        }
        // MiniGameMgr.instance.showBanner();
        // this.showBanner();
        if (DeviceUtil.isVIVOMiniGame()) {
            // let ys = (Laya.stage.height - 1920) / 2 + 1560;
            // MiniGameMgr.instance.showBottomNativeAd(this, ys);
            this.showBanner({ className_key: this.className_key });
        }
        else {
            this.showBanner({ className_key: this.className_key });
        }
        //初始化体力的数值
        this._nPsAdd = 5;
        let stGameConfigADP = ConfigMgr.getInstance().getGCDBID(3);
        if (stGameConfigADP) {
            this._nPsAdd = parseInt(stGameConfigADP.strValue);
        }
        //resource/assets/img/ui/addsp/power_number1/sign_number1_
        //BitmapLabelUtils.setLabel(this.spCount, this._nPsAdd.toString(), "resource/assets/img/ui/addsp/power_number1/sign_number1_", 0, ".png", "left");
        this.sptext.text = 'x' + this._nPsAdd.toString();
        //不了谢谢的按钮
        this.btnExit.visible = false;
        //两秒后显示出来
        let time = 2000;
        if (DeviceUtil.isOPPOMiniGame()) {
            time = 0;
        }
        Laya.timer.once(time, this, () => {
            this.btnExit.visible = true;
        })
    }

    public addEvent() {
        this.registerEvent(this.btnGet, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnExit, Laya.Event.CLICK, this.onClick, this);


    }

    private onClick(evt: Laya.Event) {
        switch (evt.currentTarget) {
            case this.btnGet:
                this.addPsByVideoAd();
                break;
            case this.btnExit:
                this.onClose();

                break;
        }
    }

    public removeEvent() {
        super.removeEvent();
    }

    /**增加体力 */
    private addPs() {
        if (AddPowerView._bCloseBinner)
            MiniGameMgr.instance.hideBannerAd();
        PlayerDataMgr.getInstance().AddProp(PType.e_GType_Sp, this._nPsAdd);
        this.removeSelf();
    }

    /**查看视频增加体力 */
    private addPsByVideoAd() {
        SoundMgr.getInstance().playEffect("button", 1);
        // if (DeviceUtil.isWXMiniGame()) {
        //     // platform.createRewardedVideoAd(GameData.videoUnitIdCur, (res) => {
        //     //     if (res.isEnded) {
        //     //         this.onAutoClickLogic();
        //     //          //增加总的看视频次数
        //     //         PublicInteractionDataManager.getInstance().AddWatchVideoCount();
        //     //     } else {
        //     //         TipsManager.getInstance().showTips(CustemTipsView,"完整观看视频才可获得奖励哦");
        //     //     }

        //     // }, (error) => {
        //     //     console.error("error ->", error);
        //     // });
        //     this.addPsFun();
        // }
        // else {
        //     // this.onAutoClickLogic();
        //     //  //增加总的看视频次数
        //     //  PublicInteractionDataManager.getInstance().AddWatchVideoCount();
        //     this.addPsFun();
        // }

        // //如果没有
        // if(GameData.getInstance().videoId.length <= 0){
        //     ViewChangeManager.getInstance().CommonView.addBtEvent();
        //     this.addPsFun();
        //     return;
        // }

        MiniGameMgr.instance.playVideoAd({
            successFun: () => {
                ViewChangeMgr.getInstance().commonView.addBtEvent();
                this.addPs();
            }
        });
    }

    /**不了谢谢 */
    private onClose() {
        if (AddPowerView._bCloseBinner)
            MiniGameMgr.instance.hideBannerAd();
        SoundMgr.getInstance().playEffect("button", 1);
        ViewChangeMgr.getInstance().commonView.addBtEvent();
        this.removeSelf();
    }

    onRemoved() {
        this.removeEvent();
        if (DeviceUtil.isQQMiniGame()) {
            EventMgr.getInstance().sendEvent("SuccBlockShow", true);
        }
    }
}
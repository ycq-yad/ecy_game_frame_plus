import { GEvent } from "../../../games/GameEvent";
import { PlayerDataMgr } from "../../../common/GameDataManager";
import { ConfigMgr } from "../../../games/ConfigManager";
import SoundMgr from "../../../common/SoundManager";
import ViewChangeMgr from "../../../games/ViewChangeManager";
import AddPowerView from "./AddPsView";
import { BaseUIScene } from "../../base/BaseUIScene";
import { PType } from "../../../games/CommonDefine";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";

export default class CommonView extends BaseUIScene {
    public className_key = "CommonView";

    // public imageBtToHome: Laya.Image;
    public spCount: Laya.Sprite;
    public imageSpMax: Laya.Image;
    public powerBtn: Laya.Image;
    public labelTime: Laya.Label;
    public goldBtn: Laya.Image;
    public img_video: Laya.Image;
    public img_video1: Laya.Image;
    public goldCount: Laya.Sprite;

    public powerBg: Laya.Sprite;
    public img_gold: Laya.Sprite;

    public sptext: Laya.Text;

    constructor() {
        super();
        this.skin = "game/uiView/pop/CommonView.json";
        this.width = 600;
        this.height = 200;
    }

    private _nPsAdd: number;

    onAddStage(): void {
        if (!this.isCreate) {
            return
        }
        this.img_video.visible = this.img_video1.visible = false;
        this.goldBtn.visible = false;
        if (DeviceUtil.isVIVOMiniGame() || DeviceUtil.isOPPOMiniGame()) {
            this.img_video.visible = this.img_video1.visible = true;
            this.goldBtn.visible = true;;
        }
        this._nPsAdd = 5;
        let stGameConfigADP = ConfigMgr.getInstance().getGCDBID(3);
        if (stGameConfigADP) {
            this._nPsAdd = parseInt(stGameConfigADP.strValue);
        }
        this.refreshPsValue();
        this.refreshGoldValue();
        this.refreshTime();
        this.addEventUpdateView();
    }

    /**界面数值的属性 */
    /**增加界面数值的刷新 */
    private addEventUpdateView() {
        this.powerBg.on(Laya.Event.CLICK, this, this.openAddSpView);
        if (DeviceUtil.isOPPOMiniGame() || DeviceUtil.isVIVOMiniGame()) {
            this.img_gold && this.img_gold.on(Laya.Event.CLICK, this, this.onAddGold);
        }
        EventMgr.getInstance().addEvent(GEvent.O_PS_CG, this, this.refreshPsValue);
        EventMgr.getInstance().addEvent(GEvent.O_G_CG, this, this.refreshGoldValue);
        EventMgr.getInstance().addEvent(GEvent.O_SP_UD_T, this, this.refreshTimeTxtInfo);
    }

    public addBtEvent() {
        this.powerBtn.visible = true;
        this.powerBg && this.powerBg.on(Laya.Event.CLICK, this, this.openAddSpView);
        if (DeviceUtil.isOPPOMiniGame() || DeviceUtil.isVIVOMiniGame()) {
            this.img_gold && this.img_gold.on(Laya.Event.CLICK, this, this.onAddGold);
            this.goldBtn.visible = this.img_video.visible = this.img_video1.visible = true;
        }

    }

    private onAddGold() {
        SoundMgr.getInstance().playEffect("button", 1);
        MiniGameMgr.instance.playVideoAd({
            gameConstKey: 'freeGold',
            successFun: () => {
                PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, 200);
            }
        })

    }

    /**打开体力不足界面 */
    private openAddSpView() {
        if (DeviceUtil.isOPPOMiniGame() || DeviceUtil.isVIVOMiniGame()) {
            MiniGameMgr.instance.playVideoAd({
                gameConstKey: 'freeScene',
                successFun: () => {
                    PlayerDataMgr.getInstance().AddProp(PType.e_GType_Sp, this._nPsAdd);
                }
            })
            return;
        }
        SoundMgr.getInstance().playEffect("button", 1);
        ViewChangeMgr.getInstance().showBufLoadingView();
        ResUtil.getIntance().loadGroups(["adsp"], () => {
            ViewManager.getInstance().showView(AddPowerView);
            ViewChangeMgr.getInstance().hideBufLoadingView();
        });
    }

    /**刷新体力 */
    private refreshPsValue() {
        if (!this.isCreate) {
            return
        }
        //BitmapLabelUtils.setLabel(this.spCount, PlayerDataMgr.getInstance().stPlayerDataBase.nPS.toString(), "resource/assets/img/ui/gamehome/currency_number/currency_number_", 0, ".png", "center");
        this.sptext.text = PlayerDataMgr.getInstance().stPlayerDataBase.nPS.toString();
        this.refreshTime();
    }

    /**刷新金币 */
    private refreshGoldValue() {
        if (!this.isCreate) {
            return
        }
        BitmapLabelUtils.setLabel(this.goldCount, PlayerDataMgr.getInstance().stPlayerDataBase.nGlodCount.toString(), "resource/assets/img/common/gameinterface_number1/gameinterface_number1_", 0, ".png", "left");
    }

    /**刷新时间 */
    private refreshTime() {
        let numMaxTime = 0;
        let objData = ConfigMgr.getInstance().getGCDBID(1);
        if (objData) {
            numMaxTime = parseInt(objData.strValue);
        }
        if (numMaxTime <= PlayerDataMgr.getInstance().stPlayerDataBase.nPS) {
            this.imageSpMax.visible = true;
            this.labelTime.visible = false;
            this.labelTime.text = "";
        } else {
            this.imageSpMax.visible = false;
            this.labelTime.visible = true;
        }
    }

    /**时间的更新 */
    private refreshTimeTxtInfo() {
        this.imageSpMax.visible = false;
        this.labelTime.visible = true;
        this.labelTime.text = PlayerDataMgr.getInstance().getPowerLastTime();
    }

    public removeBtEvent() {
        this.powerBtn.visible = false;
        this.goldBtn.visible = false
        this.powerBg && this.powerBg.off(Laya.Event.CLICK, this, this.openAddSpView);
        if (DeviceUtil.isOPPOMiniGame() || DeviceUtil.isVIVOMiniGame()) {
            this.img_video.visible = this.img_video1.visible = false;
            this.img_gold && this.img_gold.off(Laya.Event.CLICK, this, this.onAddGold);
        }
        // if (DeviceUtil.isWXMiniGame() && BaseConst.infos.gameInfo.openPsAward == 0) {
        //     this.visible = false;
        // }
    }

    /**删除界面数值的刷新*/
    private removeEnentUpdateView() {
        this.powerBg.off(Laya.Event.CLICK, this, this.openAddSpView);
        if (DeviceUtil.isOPPOMiniGame() || DeviceUtil.isVIVOMiniGame()) {

            this.img_gold && this.img_gold.off(Laya.Event.CLICK, this, this.onAddGold);
        }
        EventMgr.getInstance().removeEvent(GEvent.O_PS_CG, this, this.refreshPsValue);
        EventMgr.getInstance().removeEvent(GEvent.O_G_CG, this, this.refreshGoldValue);
        EventMgr.getInstance().removeEvent(GEvent.O_SP_UD_T, this, this.refreshTimeTxtInfo);
    }

    public onRemoved() {
        this.removeEnentUpdateView();
    }

}
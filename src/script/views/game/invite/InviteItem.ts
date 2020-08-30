import { benDiData } from "../../../common/GameDataType";
import { GDataMgr } from "../../../common/GameData";
import { PlayerDataMgr } from "../../../common/GameDataManager";
import SoundMgr from "../../../common/SoundManager";
import { GEvent } from "../../../games/GameEvent";
import { PType } from "../../../games/CommonDefine";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import { BaseUIScene } from "../../base/BaseUIScene";

/**
* 邀请item
*/
export default class InviteItem extends BaseUIScene {
    public className_key = "InviteItem";

    private imgIndex: Laya.Image;
    private imgNull: Laya.Image;
    private imgHead: Laya.Image;
    // private imgHeadMask: Laya.Image;
    private imgReward: Laya.Image;
    private imgGet: Laya.Image;
    private imgNo: Laya.Image;

    public data: benDiData.YaoQingData

    constructor(_data: benDiData.YaoQingData) {
        super();
        this.data = _data;
        this.skin = "game/uiView/invite/InviteFriendsIndexView.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
    }

    protected adaptationStage() {
        this.size(815, 142);
    }

    public onAddStage() {
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }


    /** 添加事件 */
    public addEvent() {

        this.registerEvent(this.imgGet, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.imgNull, Laya.Event.CLICK, this.onClick, this);
    }

    private onClick(evt: Laya.Event) {
        switch (evt.currentTarget) {
            case this.imgGet:
                this.onGetReward()
                break;
            case this.imgNull:
                this.onInvite()
                break;
        }
    }

    /** 移除事件 */
    public removeEvent() {
        this.data = null;
        super.removeEvent()
    }


    /** 设置数据 */
    public setData(data: benDiData.YaoQingData) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    /** 初始化页面 */
    public initView() {
        if (!this.data) return;
        let objData = this.data;
        this.imgGet.visible = this.imgNo.visible = false;
        BitmapLabelUtils.setLabel(this.imgIndex, objData.id + "", "resource/assets/img/ui/invite/invite_number2/invitation_number2_", -10, ".png", "center");
        if (objData.head && objData.head != "") {
            this.imgHead.skin = objData.head;
            // this.imgHead.mask = this.imgHeadMask;
        } else {
            this.imgHead.skin = "";
        }
        BitmapLabelUtils.setLabel(this.imgReward, objData.reward + "", "resource/assets/img/ui/invite/invite_number1/invite_number1_", 0);
        let perFix: string = "resource/assets/img/ui/invite/invite_button";
        this.imgHead.visible = true;
        this.imgNull.visible = false;
        if (objData.lingqued) {//已领取
            this.imgGet.visible = true;
            this.imgGet.mouseEnabled = false;
            this.imgGet.skin = perFix + "_2.png"
        } else {
            if (objData.canLingqu) {//可领取
                this.imgGet.visible = true;
                this.imgGet.mouseEnabled = true;
                this.imgGet.skin = perFix + "_1.png"
            } else {
                this.imgNo.visible = true;
                this.imgNull.visible = true;
                this.imgHead.visible = false;
            }
        }
    }

    private onInvite() {
        SoundMgr.getInstance().playEffect("button", 1);
        MiniGameMgr.instance.flagDouYin = false;
        MiniGameMgr.instance.shareAppMsg();
    }

    private onGetReward() {
        SoundMgr.getInstance().playEffect("button", 1);
        let pgm = PlayerDataMgr.getInstance();
        pgm.AddProp(PType.e_GType_Sp, this.data.reward);
        pgm.stPlayerDataBase.inviteId.push(this.data.id);
        pgm.SaveData();
        EventMgr.getInstance().sendEvent(GEvent.RF_IV);
    }


}
import InviteMgr from "../../../manager/InviteManager";
import InviteItem from "./InviteItem";
import SoundMgr from "../../../common/SoundManager";
import { GEvent } from "../../../games/GameEvent";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import { PopBaseScene } from "../../base/PopBaseScene";

/**
 * 邀请界面
 */
export default class InviteView extends PopBaseScene {
    public className_key = "InviteView";
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK_MORE;

    // private box_content: Laya.Box;

    private btnClose: Laya.Image;
    private panelConent: Laya.Panel;
    private boxConent: Laya.Box;
    private btnInvite: Laya.Button;

    constructor() {
        super();
        this.skin = "game/uiView/invite/InviteFriendsView.json";
    }




    public initView() {
        this.boxConent.removeChildren();
        this.panelConent.vScrollBarSkin = "";
        this.panelConent.elasticEnabled = true;
        this.panelConent.vScrollBar.elasticDistance = 100;
        this.panelConent.vScrollBar.elasticBackTime = 100;
        this.getInvitePlayerInfo();
    }

    /** 添加事件 */
    public addEvent() {
        // this.btnClose.on(Laya.Event.CLICK, this, this.onClose);
        // this.btnInvite.on(Laya.Event.CLICK, this, this.onInvite);\
        this.registerEvent(this.btnInvite, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnClose, Laya.Event.CLICK, this.onClick, this);
        EventMgr.getInstance().addEvent(GEvent.RF_IV, this, this.refresh);
    }

    private onClick(evt: Laya.Event) {
        switch (evt.currentTarget) {
            case this.btnClose:
                this.onClose()
                break;
            case this.btnInvite:
                this.onInvite()
                break;
        }
    }

    /** 获取邀请玩家数据 */
    private getInvitePlayerInfo() {
        InviteMgr.getInstance().chaXunInfo((code) => {
            if (code == '0') {
                this.refresh();
            }
        }, this);
    }


    private onClose() {
        SoundMgr.getInstance().playEffect("button", 1);
        this.removeEvent();
        this.removeUs();
    }

    private onInvite() {
        SoundMgr.getInstance().playEffect("button", 1);
        MiniGameMgr.instance.flagDouYin = false;
        MiniGameMgr.instance.shareAppMsg();
    }



    /** 移除事件 */
    public removeEvent() {
        
        EventMgr.getInstance().removeEvent(GEvent.RF_IV, this, this.refresh);
        super.removeEvent()
    }

    private refresh() {
        let arrData = InviteMgr.getInstance().getInviteAwdData();
        console.log("InviteView >>>>>>> refreshUI", arrData);
        for (let i = 0, len = arrData.length; i < len; i++) {
            let item = <InviteItem>this.boxConent.getChildAt(i);
            if (item) {
                item.setData(arrData[i]);
            } else {
                item = new InviteItem(arrData[i]);
                item.x = 0;
                item.y = (128 + 45) * i;
                this.boxConent.addChild(item);
            }
        }
    }
}
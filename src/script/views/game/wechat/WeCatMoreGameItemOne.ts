import { GDataMgr } from "../../../common/GameData";
import PlatformDY from "../../../../PlatformDY";
import { BaseUIScene } from "../../base/BaseUIScene";
import { GameManager } from "../../../manager/GameManager";


export default class WeCatMoreGameItemOne extends BaseUIScene {
    public className_key = "WeCatMoreGameItemOne";
    public imgIcon: Laya.Image;
    public labGameName: Laya.Label;

    private _nIndex: number;
    constructor(data: any) {
        super();
        this._nIndex = data;
        this.skin = "game/uiView/wecat/WeCatMoreGameItemOne.json";
        this.width = 200;
        this.height = 240;
    }

    onAddStage(): void {
        super.onAddStage();
        this.addEvent();
        this.initView()
    }

    onRemoved() {
        this.removeEvent();
    }

    setData(data: any): void {
        this._nIndex = data;
        this.initView();
    }

    public initView() {
        if (this._nIndex < 0 || this._nIndex >= GDataMgr.getInstance().weCatMoreInfo.length) {
            this._nIndex = GDataMgr.getInstance().weCatMoreInfo.length - 1;
            if (this._nIndex < 0) return;
        }
        this.labGameName.text = GDataMgr.getInstance().weCatMoreInfo[this._nIndex].name;
        this.imgIcon.skin = GDataMgr.getInstance().weCatMoreInfo[this._nIndex].ad_img;
    }

    public addEvent() {
        if (!DeviceUtil.isTTMiniGame()) {
            this.on(Laya.Event.CLICK, this, this.gotoGameDuYou);
        }
    }

    public removeEvent() {
        this.off(Laya.Event.CLICK, this, this.gotoGameDuYou);
    }

    private gotoGameDuYou() {
        if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
            
            GameManager.instance.goToDuyou(this._nIndex)
        }
    }
}
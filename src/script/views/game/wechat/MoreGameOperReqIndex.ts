import { GDataMgr } from "../../../common/GameData";
import PlatformDY from "../../../../PlatformDY";
import { BaseUIScene } from "../../base/BaseUIScene";


export default class MoreGameOperReqIndex extends BaseUIScene {
    className_key = "MoreGameOperReqIndex";
    public icon: Laya.Image;
    public lableName: Laya.Label;
    public lableCount: Laya.Label;
    private _nIndex: number;
    constructor(data: any) {
        super();
        this._nIndex = data;
        // this.width  = 300;
        // this.height = 380;
        this.skin = "game/uiView/wecat/MoreGameOperReqIndex.json";
        this.width = 279;
        this.height = 311;
    }

    onAddStage(): void {
        super.onAddStage();
        if(this.isCreate){
            this.initView();
            this.addEvent();
        }
    }

    onRemoved() {
        this.removeEvent();
    }

    setData(data: any): void {
        this._nIndex = data;
        this.initView();
    }

    /**初始化界面 */
    public initView() {
        if (this._nIndex < 0 || this._nIndex >= GDataMgr.getInstance().weCatMoreInfo.length) {
            this._nIndex = GDataMgr.getInstance().weCatMoreInfo.length - 1;
            if (this._nIndex < 0) return;
        }
        this.lableName.text = GDataMgr.getInstance().weCatMoreInfo[this._nIndex].name;
        this.icon.skin = GDataMgr.getInstance().weCatMoreInfo[this._nIndex].ad_img;
        let numCount = Utils.random(100000, 200000);
        this.lableCount.text = numCount.toString() + "人正在玩";
    }

    public addEvent() {
        this.on(Laya.Event.CLICK, this, this.gotoGame);
    }

    public removeEvent() {
        this.off(Laya.Event.CLICK, this, this.gotoGame);
    }

    private gotoGame() {
        if (!DeviceUtil.isWXMiniGame()) return;
        //判断下数据是否存在
        if (this._nIndex < 0 || 　this._nIndex 　>= GDataMgr.getInstance().weCatMoreInfo.length) {
            return;
        }
        let objData = GDataMgr.getInstance().weCatMoreInfo[this._nIndex];
        if (!objData) {
            return;
        }
        //嘟游
        if (BaseConst.infos.gameInfo.isDY) {
            PlatformDY.clickGame(GDataMgr.getInstance().weCatMoreInfo[this._nIndex].ad_id);
        }

        this.navigateToMiniProgram();
    }

    private navigateToMiniProgram(){
        let data = {
            appId: GDataMgr.getInstance().weCatMoreInfo[this._nIndex].ad_appid,
            path: GDataMgr.getInstance().weCatMoreInfo[this._nIndex].url,
            success: () => {
                console.log("navigateToMiniProgram success");
                //嘟游
                if (BaseConst.infos.gameInfo.isDY) {
                    console.log("self.nIndex = ", this._nIndex);
                    PlatformDY.toGame(GDataMgr.getInstance().weCatMoreInfo[this._nIndex].ad_id);
                }
            },
            fail: (e) => {
                console.log("navigateToMiniProgram fail e =", e); //嘟游
               
            }
        };
        platform.navigateToMiniProgram(data);
    }
}
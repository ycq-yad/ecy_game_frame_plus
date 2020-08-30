import MoreGameOperRequestTwo from "./MoreGameOperRequestTwo";
import PlatformDY from "../../../../PlatformDY";
import MoreGameRandomGameBox713 from "./MoreGameRandomGameBox713";
import { GDataMgr } from "../../../common/GameData";
//2020.7.13-2
export default class WeCatMoreGameItemTwo extends BaseSceneUISkin {
    public className_key = "WeCatMoreGameItemTwo";
    public imageIcon: Laya.Image;
    public lableGameName: Laya.Label;

    private nIndex: number;
    private stGameIndex: any;
    constructor(data: any) {
        super();
        this.nIndex = data;

        this.skin = "game/uiView/platform/WeCatMoreGameItemTwo.json";
        this.width = 210;
        this.height = 258;
    }

    onAddStage(): void {
        super.onAddStage();
        this.addEvent();
        this.initView();
    }

    onRemoved() {
        this.removeEvent();
    }

    setData(data: any): void {
        this.nIndex = data;
        this.initView();
    }

    private initView() {
        if (this.nIndex < 0 || this.nIndex >= GDataMgr.getInstance().weCatMoreInfo.length) {
            this.nIndex = GDataMgr.getInstance().weCatMoreInfo.length - 1;
            if (this.nIndex < 0) return;
        }
        let stData = GDataMgr.getInstance().weCatMoreInfo;
        let stDataTemp = GDataMgr.getInstance().weCatMoreInfo[this.nIndex];
        this.lableGameName.text = GDataMgr.getInstance().weCatMoreInfo[this.nIndex].name;
        this.imageIcon.skin = GDataMgr.getInstance().weCatMoreInfo[this.nIndex].ad_img;
        this.stGameIndex = GDataMgr.getInstance().weCatMoreInfo[this.nIndex];
    }

    private addEvent() {
        if (!DeviceUtil.isTTMiniGame()) {
            this.on(Laya.Event.CLICK, this, this.gotoGame);
        }
    }

    private removeEvent() {
        this.off(Laya.Event.CLICK, this, this.gotoGame);
    }

    private gotoGame() {
        if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
            // //判断下数据是否存在
            // if(this.nIndex < 0 ||　this.nIndex　>= GDataMgr.getInstance().weCatMoreInfo.length){
            //     return;
            // }
            // let stData = GDataMgr.getInstance().weCatMoreInfo[this.nIndex];
            // if(!stData){
            //     return;
            // }
            //嘟游
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.clickGame(this.stGameIndex.ad_id);
            }
            let self = this;
            let data = {
                appId: this.stGameIndex.ad_appid,
                path: this.stGameIndex.url,
                success: function () {
                    console.log("navigateToMiniProgram success!");
                    //嘟游
                    if (BaseConst.infos.gameInfo.isDY) {
                        console.log("self.nIndex = ", self.nIndex);
                        PlatformDY.toGame(self.stGameIndex.ad_id);
                    }
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail e =", e);
                    // //嘟游
                    // if(BaseConst.infos.gameInfo.isDY){
                    //     console.log("self.nIndex = ",self.nIndex);
                    //     PlatformDY.toGame(GDataMgr.getInstance().weCatMoreInfo[self.nIndex].ad_id);
                    // }

                    if (DeviceUtil.isWXMiniGame()) {
                        //2020.7.13-1-4
                        ViewManager.getInstance().showView(MoreGameRandomGameBox713);
                    }
                }
            };
            platform.navigateToMiniProgram(data);
        }
    }
}
import { GDataMgr } from "../../../common/GameData";
import { MiniVVManager } from "../../../minigame/MiniVVManager";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";

export class VivoNativeInsert extends BaseSceneUISkin {
    className_key = "VivoNativeInsert";

    public constructor(data: { nativeAd: VVNativeAd, adList: Array<VVNativeAdInfo> }) {
        super();
        this.viewData_ = data;
        // console.log("创建原生插屏UI", data);
        this.visible = false;
        this.skin = "skins/platform/vivo/VivoNativeInsert.json";
    }

    private img_bg: Laya.Image;
    private box_content: Laya.Box;
    private lab_title: Laya.Label;
    private box_img: Laya.Box;
    private img_icon: Laya.Image;
    private btn_close: Laya.Button;
    private lab_desc: Laya.Label;
    // private img_flag: Laya.Image;
    private btn_click: Laya.Image;
    private lab_clickBtnTxt: Laya.Label;

    public viewData_: { nativeAd: VVNativeAd, adList: Array<VVNativeAdInfo> };
    private callData: { successFun?: Function, errorFun?: Function, closeFun?: Function };
    private isReportAdClick = false;


    protected childrenCreated() {
        this.y = Laya.stage.height - this.height
        this.initView();
        this.addEvent();
    }


    protected adaptationStage() {
        this.width = Laya.stage.width;
        this.height = Laya.stage.height;
    }


    private initView() {
        DeviceUtil.adaptationBgImg(this.img_bg);
        let data = this.viewData_.adList[0];
        this.lab_title.text = data.title;
        // this.img_icon.skin = data.icon;
        this.img_icon.skin = data.imgUrlList[0];
        this.img_icon.size(this.box_img.width, this.box_img.height);
        this.lab_desc.text = data.desc;
        // this.img_flag.skin = data.logoUrl;
        this.lab_clickBtnTxt.text = data.clickBtnTxt || "点击查看";
        this.viewData_.nativeAd.reportAdShow({ adId: data.adId });
    }

    private addEvent() {
        this.btn_click.on(Laya.Event.CLICK, this, this.onClick);
        this.img_icon.on(Laya.Event.CLICK, this, this.onClick);
        this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
    }

    private onClick() {
        let data = this.viewData_.adList[0];
        this.viewData_.nativeAd.reportAdClick({ adId: data.adId });
        this.isReportAdClick = true;
        // Laya.enableDebugPanel()
    }
    public closeFun: Function = null
    private onClose() {
        let num = Utils.getRandom(1, 100);
        if (!this.isReportAdClick && num <= MiniGameMgr.instance.platformInfos.touchByMistake) {
            this.onClick();
        } else {
            if (this.callData && this.callData.closeFun) this.callData.closeFun();
            this.hide();
            if (this.closeFun) this.closeFun();
        }
    }

    public show(data: { successFun?: Function, errorFun?: Function, closeFun?: Function }) {
        this.callData = data;
        if (this.callData && this.callData.successFun) this.callData.successFun();
        Laya.timer.once(1000, this, () => {
            this.visible = true;
        });
    }

    public hide() {
        this.visible = false;
        Laya.timer.clearAll(this);
        if (this.isReportAdClick) this.destroy();
    }

    private removeEvent() {
        this.btn_click.off(Laya.Event.CLICK, this, this.onClick);
        this.img_icon.off(Laya.Event.CLICK, this, this.onClick);
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
    }

    public removeSelf() {
        this.removeEvent();
        return super.removeSelf();
    }

    public destroy() {
        this.viewData_ = null;
        this.callData = null;
        this.removeSelf();
        super.destroy();
    }
}
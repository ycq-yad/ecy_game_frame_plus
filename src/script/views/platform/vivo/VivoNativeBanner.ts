import { GDataMgr } from "../../../common/GameData";
import { MiniVVManager } from "../../../minigame/MiniVVManager";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";

export class VivoNativeBanner extends BaseSceneUISkin {
    className_key = "VivoNativeBanner";

    public constructor(data: { nativeAd: VVNativeAd, adList: Array<VVNativeAdInfo> }) {
        super();
        this.viewData_ = data;
        this.visible = false;
        this.skin = "skins/platform/vivo/VivoNativeBanner.json";
    }

    private box_ad: Laya.Box;
    private img_icon: Laya.Image;
    private lab_title: Laya.Label;
    private lab_desc: Laya.Label;
    private btn_click: Laya.Image;
    private img_flag: Laya.Image;
    private lab_clickBtnTxt: Laya.Label;
    private btn_close: Laya.Button;
    private isReportAdClick = false;

    public viewData_: { nativeAd: VVNativeAd, adList: Array<VVNativeAdInfo> };

    protected childrenCreated() {
        this.y = Laya.stage.height - this.height
        this.initView();
        this.addEvent();
    }

    protected adaptationStage() {

    }

    private initView() {
        let data = this.viewData_.adList[0];
        this.img_icon.skin = data.icon;
        this.img_flag.skin = data.logoUrl;
        this.lab_title.text = data.title;
        this.lab_desc.text = data.desc;
        this.lab_clickBtnTxt.text = data.clickBtnTxt || "点击下载";
        this.viewData_.nativeAd.reportAdShow({ adId: data.adId });
    }

    private addEvent() {
        this.box_ad.on(Laya.Event.CLICK, this, this.onClick);
        this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
    }

    private onClick() {
        let data = this.viewData_.adList[0];
        this.viewData_.nativeAd.reportAdClick({ adId: data.adId });
        this.isReportAdClick = true;
    }

    private onClose() {
        let num = Utils.getRandom(1, 100);
        if (!this.isReportAdClick && num <= MiniGameMgr.instance.platformInfos.touchByMistake) {
            this.onClick();
        } else {
            this.hide();
        }
    }

    public show() {
        this.visible = true;
    }

    public hide() {
        this.visible = false;
        if (this.isReportAdClick) this.destroy();
    }

    private removeEvent() {
        this.box_ad.off(Laya.Event.CLICK, this, this.onClick);
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
    }

    public removeSelf() {
        this.removeEvent();
        return super.removeSelf();
    }

    public destroy() {
        this.viewData_ = null;
        this.removeSelf();
        super.destroy();
    }
}
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import { BaseUIScene } from "../../base/BaseUIScene";

/**
 * 下方原生广告 不是原生插屏
 */
export class VivoNativeBottemAdScene extends BaseUIScene {

    className_key = "VivoNativeBottemAdScene";
    public constructor(data: { nativeAd: VVNativeAd, adList: Array<VVNativeAdInfo> }) {
        super()
        this.viewData_ = data;
        this.skin = "skins/platform/vivo/VivoNativeBotterAdScene.json";
    }

    public viewData_: { nativeAd: VVNativeAd, adList: Array<VVNativeAdInfo> };

    public box_ad: Laya.Box;
    public img_icon: Laya.Image;
    public lab_title: Laya.Label;
    public lab_desc: Laya.Label;
    public btn_click: Laya.Image;
    public lab_clickBtnTxt: Laya.Label;
    public img_flag: Laya.Image;
    public box_flag: Laya.Box;
    public btn_close: Laya.Box;
    public btn_chakan: Laya.Label;

    private isReportAdClick = false;

    public onAddStage(){
        super.onAddStage();
        if(this.isCreate){
            this.initView();
            this.addEvent();
        }
    }

    public adaptationStage() {
        this.size(1000, 260);
    }

    public setData(data: { nativeAd: VVNativeAd, adList: Array<VVNativeAdInfo> }) {
        this.viewData_ = data;
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }
    public initView() {
        let data = this.viewData_.adList[0];
        this.img_icon.skin = data.icon;
        this.img_flag.skin = data.logoUrl;
        this.lab_title.text = data.title;
        this.lab_desc.text = data.desc;
        this.lab_clickBtnTxt.text = data.clickBtnTxt || "点击下载";
        this.viewData_.nativeAd.reportAdShow({ adId: data.adId });

        let text = this.btn_chakan;
        if (MiniGameMgr.instance.platformInfos.touchByMistakeByLook) {
            text.text = '查看';
            let startHour = MiniGameMgr.instance.platformInfos.startHour;
            let endHour = MiniGameMgr.instance.platformInfos.endHour;
            let date = new Date();
            let week = date.getDay();
            if (week == 0 || week == 6) {//周末
                text.text = '查看';
            } else {
                let hour = date.getHours();
                if (hour >= startHour && hour <= endHour) {
                    text.text = '查看广告';
                } else {
                    text.text = '查看';
                }
            }
        } else {
            text.text = "查看广告";
        }
    }

    public addEvent() {
        this.btn_chakan.on(Laya.Event.CLICK, this, this.onClick);
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

    public removeEvent() {
        this.btn_chakan.off(Laya.Event.CLICK, this, this.onClick);
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
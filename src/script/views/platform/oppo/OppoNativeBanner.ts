import { NativeOppoAd } from "../../../minigame/MiniOppoManager";
import { OppoManager } from "../../../minigame/OppoManager";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";


export class OppoNativeBanner extends BaseSceneUISkin {
    className_key = "OppoNativeBanner";

    public icon_icon: Laya.Image;
    public txt_title: Laya.Label;
    public txt_desc: Laya.Label;
    public btn_click: Laya.Image;
    public icon_flag: Laya.Image;
    public txt_clickBtnTxt: Laya.Label;
    public constructor(data: { adList: NativeOppoAd[], nativeAd: any, callBack?: Function }) {
        super();
        this.viewData_ = data
        this.skin = 'skins/platform/oppo/OppoNativeBanner.json'
    }


    public viewData_: { adList: NativeOppoAd[], nativeAd: any, callBack?: Function }
    public childrenCreated() {
        this.y = Laya.stage.height - this.height
        this.initView();
        this.addEvent();
    }

    public adaptationStage() {

    }
    public initView() {
        let data = this.viewData_.adList[0]
        this.icon_icon.skin = data.icon;
        this.icon_flag.skin = data.logoUrl;
        this.txt_title.text = data.title;
        this.txt_desc.text = data.desc;
        this.txt_clickBtnTxt.text = data.clickBtnTxt;
        this.viewData_.nativeAd.reportAdShow({ adId: data.adId });

    }
    public btn_close: Laya.Image;

    public addEvent() {
        this.on(Laya.Event.CLICK, this, this.onClick)
        this.btn_close.on(Laya.Event.CLICK, this, this.onClick)
    }
    public isClick: boolean = false

    public onClick(evt: Laya.Event) {
        if (evt.currentTarget == this.btn_close) {
            evt.stopPropagation();
            let clickWeght = MiniGameMgr.instance.platformInfos.clickWeght;
            let flag = Math.random() * 100 < clickWeght;
            if (flag && !this.isClick) {
                this.isClick = true;
                let data = this.viewData_.adList[0]
                this.viewData_.nativeAd.reportAdClick({ adId: data.adId });
            } else {
                this.destroy();
                OppoManager.instance.closeCount++;

            }
        } else {
            let data = this.viewData_.adList[0]
            this.viewData_.nativeAd.reportAdClick({ adId: data.adId });
        }

    }

    public removeSelf() {
        this.removeEvent();
        return super.removeSelf();
    }

    public destroy() {
        this.isClick = false
        if (this.viewData_) {
            this.viewData_.nativeAd.destroy();
            this.viewData_.callBack && this.viewData_.callBack()
            this.viewData_ = null;
        }
        this.removeSelf();
        super.destroy();
    }

    public removeEvent() {
        this.off(Laya.Event.CLICK, this, this.onClick)

    }
    public show() {
        this.visible = true
    }

    public hide() {
        this.visible = false

    }

}
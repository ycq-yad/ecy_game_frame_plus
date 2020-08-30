import ViewChangeMgr from "../../../games/ViewChangeManager";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import { PlayerDataMgr } from "../../../common/GameDataManager";
import { PType } from "../../../games/CommonDefine";
import { ConfigMgr } from "../../../games/ConfigManager";
import SuccessfulEntryOneView from "../settlement/SuccessfulEntryOneView";
import SuccessfulEntryThreeView from "../settlement/SuccessfulEntryThreeView";
import { PopBaseScene } from "../../base/PopBaseScene";
import GameEvent from "../../../common/GameEvent";
import SuccessfulEntryThreeVivoView from "../settlement/SuccessfulEntryThreeVivoView";


/** 分享录屏 */
export default class ShareRecordVideoView extends PopBaseScene {
    className_key = "ShareRecordVideoView";
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK_MORE;
    private btnShareVideo: Laya.Button;
    private btnCancel: Laya.Button;
    private goldCount: Laya.Image;

    private imgTitle: Laya.Image;

    private _nGlodCount = 2;

    public constructor(data: any) {
        super(data);
        this.skin = "game/uiView/pop/ShareRecordVideoSkinView.json";
    }

    public initView() {
        console.log("ShareRecordVideoView data ->", this.viewData_);
        ViewChangeMgr.getInstance().commonView.removeBtEvent();
        this.btnCancel.visible = false;

        // BitmapLabelUtils.setLabel(this.goldCount, this.nGlodCount.toString(), "resource/assets/img/ui/share/share_number1/share_number1_", 0, ".png", "left");
        this.imgTitle.skin = "resource/assets/img/ui/addsp/power_icon_1.png";
        BitmapLabelUtils.setLabel(this.goldCount, this._nGlodCount.toString(), "resource/assets/img/ui/addsp/power_number1/sign_number1_", 0, ".png", "left");
        Laya.timer.once(2000, this, () => {
            this.btnCancel.visible = true;
        });
        this.showBanner({className_key: this.className_key})
    }

    public addEvent() {

        this.registerEvent(this.btnShareVideo, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnCancel, Laya.Event.CLICK, this.onClick, this);
    }

    public removeEvent() {
        super.removeEvent();
    }

    public onClick(evt: Laya.Event) {
        switch (evt.currentTarget) {
            case this.btnShareVideo:
                this.shareVideo();
                break
            case this.btnCancel:
                this.removeUs();
                break
        }
    }

    private shareVideo() {
        if (DeviceUtil.isTTMiniGame()) {
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
            let data = platform.getSystemInfoSync() as any;
            if (data.appName.toUpperCase() == 'DOUYIN') {
                MiniGameMgr.instance.flagDouYin = true;
                MiniGameMgr.instance.shareAppMsg({
                    sucFun: () => {
                        console.log("发布录制视频成功");
                        TipsManager.getInstance().showDefaultTips('分享成功');
                        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

                        if (MiniGameMgr.instance._onShareVideoSuccess) {
                            return;
                        }
                        PlayerDataMgr.getInstance().AddProp(PType.e_GType_Sp, this._nGlodCount);
                        this.removeUs();
                    },
                    failFun: () => {
                        console.log("发布录制视频失败");
                        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                        TipsManager.getInstance().showDefaultTips('分享失败');
                    }
                });
            } else {
                MiniGameMgr.instance.shareGameRecordVideo({
                    successFun: () => {
                        PlayerDataMgr.getInstance().AddProp(PType.e_GType_Sp, this._nGlodCount);
                        this.removeUs();
                    }, failFun: () => {
                        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

                    }, errorFun: () => {
                        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);

                    }
                })
            }
        } else {
            MiniGameMgr.instance.shareAppMsg();
        }


    }

    removeUs() {
        super.removeUs();
    }

    onRemoved() {

        ViewChangeMgr.getInstance().commonView.addBtEvent();
        if (BaseConst.infos.gameInfo.openPsAward == 1 && ConfigMgr.getInstance().getTBCL() == 1
            && BaseConst.infos.gameInfo.for_pay == 1) {
            ViewManager.getInstance().showView(SuccessfulEntryOneView);
        } else {
            if (DeviceUtil.isVIVOMiniGame()) {

                ViewManager.getInstance().showView(SuccessfulEntryThreeVivoView);
            } else {
    
                ViewManager.getInstance().showView(SuccessfulEntryThreeView);
            }
        }
        this.removeEvent();
    }
}
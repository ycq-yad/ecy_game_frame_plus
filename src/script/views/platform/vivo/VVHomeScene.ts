import AnimationMgr from "../../../manager/AnimationManager";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import { PlayerDataMgr } from "../../../common/GameDataManager";
import { PType } from "../../../games/CommonDefine";
import SoundMgr from "../../../common/SoundManager";
import { ConfigMgr } from "../../../games/ConfigManager";

export class VVHomeScene extends BaseSceneUISkin {
    className_key = "VVHomeScene";

    public box_vivo: Laya.Box;
    public img_vv_zhuomian: Laya.Sprite;
    public btn_vv_shortcut: Laya.Image;
    public btn_freegold: Laya.Image;
    public imageRed: Laya.Image;
    public constructor() {
        super();
        this.skin = "skins/platform/vivo/VVHomeScene.json";
    }


    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.mouseThrough = true;
            this.initView();
            this.addEvent();
        }
    }

    public initView() {
        AnimationMgr.instance.HTween(this.img_vv_zhuomian, this);
        MiniGameMgr.instance.showAddDesktopBtn({ box: this.btn_vv_shortcut });

    }

    public addEvent() {
        this.btn_freegold.on(Laya.Event.CLICK, this, this.getFreeGlods);
        this.btn_vv_shortcut.on(Laya.Event.CLICK, this, this.onShortcut);


    }
    /**获得免费的金币 */
    private getFreeGlods() {
        SoundMgr.getInstance().playEffect("button", 1);
        if (DeviceUtil.isMiniGame()) {
            let self = this;
            MiniGameMgr.instance.playVideoAd({
                successFun: () => {
                    let nGlodCount = 200;
                    let stGameConfig = ConfigMgr.getInstance().getGCDBID(19);
                    if (stGameConfig) {
                        nGlodCount = parseInt(stGameConfig.strValue);
                    }
                    PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, nGlodCount);
                }
            });
        } else {
            let nGlodCount = 200;
            let stGameConfig = ConfigMgr.getInstance().getGCDBID(19);
            if (stGameConfig) {
                nGlodCount = parseInt(stGameConfig.strValue);
            }
            PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, nGlodCount);
        }
    }


    private onShortcut() {
        MiniGameMgr.instance.tipInstallShortcut({
            success: (data) => {
                this.btn_vv_shortcut.visible = false;
                if (data) {
                    PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, 200);
                    TipsManager.getInstance().showDefaultTips("获得金币200");

                }

            }, fail: () => {

            }
        })
    }

    public removeEvent() {
        this.btn_freegold.off(Laya.Event.CLICK, this, this.getFreeGlods);
        this.btn_vv_shortcut.off(Laya.Event.CLICK, this, this.onShortcut);
    }

    public onRemoved() {
        super.onRemoved();
        this.onRemoved();
    }
}
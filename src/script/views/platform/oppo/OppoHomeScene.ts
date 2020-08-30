import AnimationMgr from "../../../manager/AnimationManager";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import { PlayerDataMgr } from "../../../common/GameDataManager";
import { PType } from "../../../games/CommonDefine";
import SoundMgr from "../../../common/SoundManager";
import { ConfigMgr } from "../../../games/ConfigManager";
import { MoreGameLogo } from "./MoreGameLogo";
import { LeftMoreGame } from "./LeftMoreGame";
import { GuessLike } from "./GuessLike";
import { OppoManager } from "../../../minigame/OppoManager";

export class OppoHomeScene extends BaseSceneUISkin {
    className_key = "OppoHomeScene";

    public box_vivo: Laya.Box;
    public img_oppo_zhuomian: Laya.Sprite;
    public btn_oppo_shortcut: Laya.Image;
    public btn_freegold: Laya.Image;
    public imageRed: Laya.Image;
    public constructor() {
        super();
        this.skin = "skins/platform/oppo/OppoHomeScene.json";
    }


    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.mouseThrough = true;
            this.initView();
            this.addEvent();
        }
    }

    public async initView() {
        AnimationMgr.instance.HTween(this.img_oppo_zhuomian, this);
        MiniGameMgr.instance.showAddDesktopBtn({ box: this.btn_oppo_shortcut });
        this.addChild(OppoManager.instance.moreGameLogo);
        this.moreLogo = OppoManager.instance.moreGameLogo;
        this.showGuessLike();
        this.initLeftMoreGame();
        let data = await MiniGameMgr.instance.hasShortcutInstalled();
        if (data) {
            this.btn_oppo_shortcut.visible = false;
        } else {
            this.btn_oppo_shortcut.visible = true;

        }
    }

    public moreLogo: MoreGameLogo;
    public leftMoreGame: LeftMoreGame;

    public initLeftMoreGame() {
        if (this.leftMoreGame == null) {
            this.leftMoreGame = new LeftMoreGame();

        }
        if (!this.moreLogo.hasListener(Laya.Event.CLICK)) {
            this.moreLogo.on(Laya.Event.CLICK, this, () => {
                this.leftMoreGame.onShow();
                MiniGameMgr.instance.hideBannerAd();
            })
        }
        this.leftMoreGame.y = (Laya.stage.height - this.leftMoreGame.height) / 2
        this.addChild(this.leftMoreGame)
    }
    private guessLike: GuessLike;
    public showGuessLike() {
        if (this.guessLike == null) {
            this.guessLike = new GuessLike();
            let dis = (Laya.stage.height - 1920) / 2 + 400
            this.guessLike.y = dis;
            this.guessLike.visible = true
        }

        this.addChild(this.guessLike);
    }


    public addEvent() {
        this.btn_freegold.on(Laya.Event.CLICK, this, this.getFreeGlods);
        this.btn_oppo_shortcut.on(Laya.Event.CLICK, this, this.onShortcut);


    }
    /**获得免费的金币 */
    private getFreeGlods() {
        SoundMgr.getInstance().playEffect("button", 1);
        if (DeviceUtil.isMiniGame()) {
            let self = this;
            MiniGameMgr.instance.playVideoAd({
                gameConstKey:'freeGold',
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
        let self = this;
        MiniGameMgr.instance.createShortCut(async () => {
            self.btn_oppo_shortcut.visible = false;
        });
    }

    public removeEvent() {
        this.btn_freegold.off(Laya.Event.CLICK, this, this.getFreeGlods);
        this.btn_oppo_shortcut.off(Laya.Event.CLICK, this, this.onShortcut);
    }

    public onRemoved() {
        super.onRemoved();
        this.onRemoved();
    }
}
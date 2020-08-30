import { OppoManager } from "../../../minigame/OppoManager";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import { GameManager } from "../../../manager/GameManager";



/**
 * 猜你喜欢标记
 */
export class GuessLike extends BaseSceneUISkin {
    className_key = "GuessLike";

    public icon_title: Laya.Image;
    public constructor() {
        super();
        this.skin = 'skins/platform/oppo/GuessLike.json'
    }



    public childrenCreated() {
        this.initView();
        this.addEvent();

    }

    public adaptationStage() {

    }
    public initView() {
        this.x = Laya.stage.width - this.width;
        this.icon_title.anchorX = this.icon_title.anchorY = 0.5;
        let icon_title = this.icon_title
        this.onChangeGame();
        this.shake();
        Laya.timer.loop(10000, this, this.onChangeGame);

    }

    public shake() {
        let self = this;
        let icon_title = this.icon_title;
        let rota = 5;
        Laya.Tween.clearAll(icon_title);
        Laya.Tween.to(icon_title, { rotation: rota }, 50);
        Laya.Tween.to(icon_title, { rotation: -rota }, 100, null, null, 50);
        Laya.Tween.to(icon_title, { rotation: rota }, 100, null, null, 150);
        Laya.Tween.to(icon_title, { rotation: -rota }, 100, null, null, 250);
        Laya.Tween.to(icon_title, { rotation: 0 }, 50, null, Laya.Handler.create(this, () => {
            self.shake()
        }), 350, );
    }

    public selectedInfo: { "id": number, "icon": string, "package": string, "title": string }
    public onChangeGame() {
        let oppoMiniIconsInfo = OppoManager.instance.oppoMiniIconsGuessLike
        let len = oppoMiniIconsInfo.length;
        this.selectedInfo = oppoMiniIconsInfo[Math.floor(Math.random() * len)]
        this.icon_title.skin = this.selectedInfo.icon + GameManager.instance.randomTime;
    }

    public addEvent() {
        this.on(Laya.Event.CLICK, this, this.onClick)
    }
    public onClick() {
        MiniGameMgr.instance.oppoNavigateToMiniProgram(this.selectedInfo.package)
    }

    public removeSelf() {
        this.removeEvent();
        return super.removeSelf();
    }

    public destroy() {

        this.removeSelf();
        super.destroy();
    }

    public removeEvent() {
        this.off(Laya.Event.CLICK, this, this.onClick)

    }


}
import { LevelBase } from "./LevelBase";
import ViewChangeMgr from "../../../games/ViewChangeManager";

/**
 * 第4关
 */
export class CampLevelScene9 extends LevelBase {
    className_key = "CampLevelScene9";

    public constructor() {
        super();
        this.skin = "game/level_cap/CampLevelScene9.json";
    }

    public onAddStage() {
        super.onAddStage();
    }

    public init() {
        super.init();
        this.stopAni();
    }

    skAnim = {
        assassin: null as Laya.Skeleton
    }

    public async initPlayer() {
        ViewChangeMgr.getInstance().showBufLoadingView();
        this.arrSkName = [];
        for (let k in this.skAnim) {
            let obj = this._mapData[k];
            let skItem = this.skAnim[k] = await this.createSkeByUrl(obj.url);
            skItem.x = obj.x;
            skItem.y = obj.y;
            this.box_enb.addChild(skItem);
        }

        (!this._ani_player && !this.box_player.getChildByName("ani_player")) && (this._ani_player = await this.createSkeByUrl(this._mapData.player.url));
        this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
        this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
        this._ani_player.x = this._mapData.player.x;
        this._ani_player.y = this._mapData.player.y;
        !this._ani_player.parent && this.box_player.addChild(this._ani_player);

        this.box_game.x = 0
        this.box_player.x = -400;

        this.onStart();
        ViewChangeMgr.getInstance().hideBufLoadingView();
    }
    arrSkName: string[] = []
    public onPlayLabel(evt: any) {
        if (this.isAniDestory) return;

        super.onPlayLabel(evt);

        if (this.arrSkName.indexOf(evt.name) != -1) return;
        this.arrSkName.push(evt.name);
        console.log(evt.name);
        let cData, pData;

        let asData;
        switch (evt.name) {
            case "pmove":
                this.skAnim.assassin.x = this._mapData.assassin.x;
                this.box_game.x = 0
                this.box_player.x = -400;
                pData = this._mapData.player.move[0];
                asData = this._mapData.assassin.move[0];
                Laya.Tween.to(this.skAnim.assassin, { x: asData.x }, asData.t)
                Laya.Tween.to(this.box_player, { x: pData.x }, pData.t)
                break;
            case "smove":
                cData = this._mapData.bg.move[0];
                pData = this._mapData.player.move[1];

                Laya.Tween.to(this.box_player, { x: pData.x }, pData.t)
                Laya.Tween.to(this.box_game, { x: -cData.x }, cData.t)
                break;
            case "smove1":
                cData = this._mapData.bg.move[1];
                pData = this._mapData.player.move[2];

                Laya.Tween.to(this.box_player, { x: pData.x }, pData.t)
                Laya.Tween.to(this.box_game, { x: -cData.x }, cData.t)
                break;

            case "event_9-ck01_1":
                this.skAnim.assassin.play("9-ck01", true);
                break;
            case "event_9-ck02_1":
                this.skAnim.assassin.play("9-ck02", false);
                break;
            case "event_9-ck03_1":
                this.skAnim.assassin.play("9-ck03", true);
                break;

            case "event_9-ck05_1":
                this.skAnim.assassin.play("9-ck05", false);
                break;
            case "event_9-ck06_1":
                asData = this._mapData.assassin.move[1];
                this.skAnim.assassin.x = asData.x - 560;
                Laya.Tween.to(this.skAnim.assassin, { x: asData.x }, asData.t)

                this.skAnim.assassin.play("9-ck06", true);
                break;
            case "event_9-ck07_1":
                this.skAnim.assassin.play("9-ck07", false);
                break;
            case "event_9-ck08_1":
                this.skAnim.assassin.play("9-ck08", true);
                break;
            case "event_9-ck09_1":
                this.skAnim.assassin.play("9-ck09", false);
                break;
            case "event_9-ck10_1":
                this.skAnim.assassin.play("9-ck10", false);
                break;
            case "event_9-ck11_1":
                asData = this._mapData.assassin.move[2];
                this.skAnim.assassin.x = asData.x - 560;
                Laya.Tween.to(this.skAnim.assassin, { x: asData.x }, asData.t)
                this.skAnim.assassin.play("9-ck11", true);
                break;
            case "event_9-ck12_1":
                this.skAnim.assassin.play("9-ck12", false);
                break;
            case "event_9-ck13_1":
                this.skAnim.assassin.play("9-ck13", true);
                break;
            case "event_9-ck15_1":
                this.skAnim.assassin.play("9-ck15", false);
                break;
        }
    }

    public addEvent() { }

    public removeEvent() {
        if (this._ani_player) {
            this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
        }
    }

    public removeSelf() {
        return super.removeSelf();
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.stopAni();
    }

    /**游戏逻辑控制 */
    public startGame() {


        super.startGame();
        this.initPlayer();
    }

    /**停止游戏 */
    public stopGame() { }

    /**重新开始游戏 */
    public restartGame(bReStartAll: boolean = true) {
        this.arrSkName = []
        if (bReStartAll) {
            super.init();
            super.startGame();
            this.initPlayer();
        } else {
            if (this._index == 0) {
                this.skAnim.assassin.x = this._mapData.assassin.x;
                this.box_game.x = 0
                this.box_player.x = -400;
            } else if (this._index == 1) {
                this.arrSkName.push("event_9-ck07_1");
            }
            super.restartGame();
            //场景移动
            this.onStart();
        }
    }

    /**停止动画 */
    private stopAni() {
        Laya.Tween.clearAll(this.box_game);
    }
}
import { LevelBase } from "./LevelBase";
import ViewChangeMgr from "../../../games/ViewChangeManager";

/**
 * 第10关
 */
export class CampLevelScene10 extends LevelBase {
    className_key = "CampLevelScene10";

    public constructor() {
        super();
        this.skin = "game/level_cap/CampLevelScene10.json";
    }

    public onAddStage() {
        super.onAddStage();
    }

    public init() {
        super.init();
        this.stopAni();
    }

    skAnin = {
        cike: null as Laya.Skeleton,
        men: null as Laya.Skeleton,
    }

    public async initPlayer() {
        ViewChangeMgr.getInstance().showBufLoadingView();
        this.box_zhuozi.visible = true;
        this.arrSkName = [];
        for (let k in this.skAnin) {
            let obj = this._mapData[k];
            this.skAnin[k] = await this.createSkeByUrl(obj.url);
            this.skAnin[k].x = obj.x;
            this.skAnin[k].y = obj.y;
            if (k != "men")
                this.box_enb.addChild(this.skAnin[k]);
            else {
                this.skAnin.men.stop();
                this.box_men.addChild(this.skAnin[k]);
            }
        }

        (!this._ani_player && !this.box_player.getChildByName("ani_player")) && (this._ani_player = await this.createSkeByUrl(this._mapData.player.url));
        this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
        this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
        this._ani_player.x = this._mapData.player.x;
        this._ani_player.y = this._mapData.player.y;
        !this._ani_player.parent && this.box_player.addChild(this._ani_player);

        this.box_game.x = this.box_player.x = 0;
        this.box_men.x = 0;
        this.box_fame.x = 0;
        this.onStart();
        ViewChangeMgr.getInstance().hideBufLoadingView();
    }
    arrSkName: string[] = []
    box_zhuozi: Laya.Box;
    box_fame: Laya.Box;
    box_men: Laya.Box;
    public onPlayLabel(evt: any) {
        if (this.isAniDestory) return;
        super.onPlayLabel(evt);
        
        if (this.arrSkName.indexOf(evt.name) != -1) return;
        this.arrSkName.push(evt.name);
        console.log(evt.name);
        let cData, pData;
        switch (evt.name) {
            case "men1":
                this.skAnin.men.play("men1", false);
                break;
            case "event_men2_1":
                this.skAnin.men.play("men2", false);
                break;
            case "event_cike1_1":
                this.skAnin.cike.play("cike1", false);
                break;
            case "pmove":
                Laya.Tween.to(this._ani_player, { x: this._mapData.player.move[0].x }, this._mapData.player.move[0].t);
                break;
            case "event_men3_1":
                this.skAnin.men.play("men3", false);
                break;
            case "event_men4_1":
                this.skAnin.men.play("men4", false);
                break;
            case "smove":
                Laya.Tween.to(this.box_game, { x: this._mapData.bg.move[0].x }, this._mapData.bg.move[0].t);
                Laya.Tween.to(this.box_fame, { x: this._mapData.bg.move[0].x }, this._mapData.bg.move[0].t);
                Laya.Tween.to(this.box_men, { x: this._mapData.bg.move[0].x }, this._mapData.bg.move[0].t);
                Laya.Tween.to(this._ani_player, { x: this._mapData.player.move[1].x }, this._mapData.player.move[1].t);
                break;
            case "pmove1":
                Laya.Tween.to(this._ani_player, { x: this._mapData.player.move[2].x }, this._mapData.player.move[2].t);
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

            } else if (this._index == 1) {
                this.skAnin.men.play("men1", false);
            } else if (this._index == 2) {

            }
            super.restartGame();
            //场景移动
            this.onStart();
        }
    }

    /**停止动画 */
    private stopAni() {
        Laya.Tween.clearAll(this.box_game);
        Laya.Tween.clearAll(this.box_fame);
        Laya.Tween.clearAll(this.box_player);
    }
}
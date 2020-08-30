import { LevelBase } from "./LevelBase";
import ViewChangeMgr from "../../../games/ViewChangeManager";

/**
 * 第10关
 */
export class CampLevelScene11 extends LevelBase {
    className_key = "CampLevelScene11";

    public constructor() {
        super();
        this.skin = "game/level_cap/CampLevelScene11.json";
    }

    public onAddStage() {
        super.onAddStage();
    }

    public init() {
        super.init();
        this.stopAni();
    }

    skAnin = {
        assassin: null as Laya.Skeleton,
        fire: null as Laya.Skeleton,
        fire1: null as Laya.Skeleton
    }

    public async initPlayer() {
        ViewChangeMgr.getInstance().showBufLoadingView();
        this.arrSkName = [];
        for (let k in this.skAnin) {
            let obj = this._mapData[k];
            let skItem = this.skAnin[k] = await this.createSkeByUrl(obj.url);
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

        this.box_game.x = this.box_game.y = 0
        this.box_player.x = -180;

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
        switch (evt.name) {
            case "pmove":
                pData = this._mapData.player.move[0];
                Laya.Tween.to(this.box_player, {x: pData.x}, pData.t);
                break;
            case "smove":
                break;
            case "smove1":
                cData = this._mapData.bg.move[0];
            
                Laya.Tween.to(this.box_game, {y: cData.y}, cData.t, null, Laya.Handler.create(this, ()=>{
                    Laya.Tween.to(this.box_game, {x: cData.x}, cData.t);
                }));
            
                break;
            case "smove2":
                break;
            case "smove3":
                pData = this._mapData.player.move[1];
                Laya.Tween.to(this.box_player, {x: pData.x}, pData.t)

                cData = this._mapData.bg.move[1];
                Laya.Tween.to(this.box_game, {x: cData.x}, cData.t)
                break;
            case "pmove1":
                pData = this._mapData.player.move[2];
                Laya.Tween.to(this.box_player, {x: pData.x}, pData.t)
                break;
            case "smove4":
                Laya.Tween.to(this.box_player, {x: this.box_player.x + 180}, 500)
                break;
            case "pmove2":
                Laya.Tween.to(this.box_player, {x: this.box_player.x - 1200}, 1500)
                break;
            case "event_11-001ck-1":
                this.skAnin.assassin.play("11-001ck", true);
                this.skAnin.assassin.visible = true;
                break;
            case "event_11-001ck-1_1":
                this.skAnin.assassin.visible = true;
                break;
            case "event_11-002ck_1":
                this.skAnin.assassin.play("11-002ck", false);
                break;
            case "event_11-003ck_1":
                Laya.Tween.to(this.skAnin.assassin, {x: this.skAnin.assassin.x + 500}, 1200)
                this.skAnin.assassin.play("11-003ck", false);
                break;
            case "event_11-004ck_1":
                this.skAnin.assassin.play("11-004ck", false);
                break;
            case "event_11-006ck_1":
                this.skAnin.assassin.play("11-006ck", true);
                break;
            case "event_11-005ck_1":
                this.skAnin.assassin.play("11-005ck", false);
                break;

            case "cikexiaoshi":
            case "cikexiaoshi1":
                this.skAnin.assassin.visible = false;
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
                this.box_game.x = this.box_game.y = 0
                this.box_player.x = -180;
            } else if (this._index == 1) {
                 
            } else if (this._index == 2) {
                let pData = this._mapData.player.move[1];
                this.box_player.x = pData.x;
                this.skAnin.assassin.visible = true;
                this.skAnin.assassin.x = this._mapData.assassin.x + 500;
            }
            super.restartGame();
            //场景移动
            this.onStart();
        }
    }

    /**停止动画 */
    private stopAni() {
        Laya.Tween.clearAll(this.box_game);
        Laya.Tween.clearAll(this.box_player);
    }
}
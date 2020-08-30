import { LevelBase } from "./LevelBase";
import ViewChangeMgr from "../../../games/ViewChangeManager";

/**
 * 第10关
 */
export class CampLevelScene12 extends LevelBase {
    className_key = "CampLevelScene12";

    public constructor() {
        super();
        this.skin = "game/level_cap/CampLevelScene12.json";
    }

    public onAddStage() {
        super.onAddStage();
    }

    public init() {
        super.init();
        this.stopAni();
    }

    skAnin = {
        dog: null as Laya.Skeleton,
        gas: null as Laya.Skeleton,
        door: null as Laya.Skeleton
    }

    imgFloor: Laya.Image   // 地板机关
    imgCar: Laya.Image     // 板车

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

    public playAnimationByName(){
        super.playAnimationByName.apply(this,arguments);
        let animName = arguments[0];

        if (this.arrSkName.indexOf(animName) != -1) return;
        this.arrSkName.push(animName);

        let cData, pData;
        switch(animName){
            case "12-11":
                pData = this._mapData.player.move[2];
                Laya.Tween.to(this.box_player, {x: pData.x}, pData.t);
                cData = this._mapData.bg.move[1];
                Laya.Tween.to(this.box_game, {x: cData.x}, cData.t);
                break;
            case "12-13":
                pData = this._mapData.player.move[3];
                Laya.Tween.to(this.box_player, {x: pData.x}, pData.t);

                // cData = this._mapData.bg.move[1];
                // Laya.Tween.to(this.box_game, {x: cData.x}, cData.t);
                break;
        }
    }
    arrSkName: string[] = []
  
    public onPlayLabel(evt: any) {
        if (this.isAniDestory) return;
        super.onPlayLabel(evt);
    
        // 事件去重
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
                pData = this._mapData.player.move[1];
                Laya.Tween.to(this.box_player, {x: pData.x}, pData.t);
                cData = this._mapData.bg.move[0];
                Laya.Tween.to(this.box_game, {x: cData.x}, cData.t);
                break;
            case "pmove1":
                pData = this._mapData.player.move[4];
                Laya.Tween.to(this.box_player, {x: pData.x}, pData.t);
                break;
            case "event_12-g01_1":
                this.skAnin.dog.play("12-g01", true);
                break;
            case "event_12-g02_1":
                this.skAnin.dog.play("12-g02", false);
                break;
            case "event_12-g03_1":
                this.skAnin.dog.play("12-g03", true);
                break;
            case "event_12-g04_1":
                this.skAnin.dog.play("12-g04", false);
                break;
            case "event_12-g05_1":
                this.skAnin.dog.play("12-g05", false);
                break;
            case "event_12-men01_1":
                this.skAnin.door.play("12-men01", false)
                break;
            case "event_12-men02_1":
                this.skAnin.door.play("12-men02", false)
                break;
            case "event_12-men03_1":
                this.skAnin.door.play("12-men03", false)
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
                this.box_player.x = -180;
            } else if (this._index == 1) {
                 
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
        Laya.Tween.clearAll(this.box_player);
    }
}
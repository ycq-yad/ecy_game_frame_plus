import { LevelBase } from "./LevelBase";
import ViewChangeMgr from "../../../games/ViewChangeManager";

/**
 * 第4关
 */
export class CampLevelScene6 extends LevelBase {
    className_key = "CampLevelScene6";

    public constructor() {
        super();
        this.skin = "game/level_cap/CampLevelScene6.json";
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
        assassin: null as Laya.Skeleton
    }
    public async initPlayer() {
        ViewChangeMgr.getInstance().showBufLoadingView();
        this.arrSkName = [];
        for (let k in this.skAnin){
            let obj = this._mapData[k];
            let skItem = this.skAnin[k] = await this.createSkeByUrl(obj.url);
            skItem.x = obj.x;
            skItem.y = obj.y;
            this.box_enb.addChild(skItem);
            switch(k){
                case "assassin":
                    skItem.visible = false;
                    break;
            }
        }

        (!this._ani_player && !this.box_player.getChildByName("ani_player")) && (this._ani_player = await this.createSkeByUrl(this._mapData.player.url));
        this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
        this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
        this._ani_player.x = this._mapData.player.x;
        this._ani_player.y = this._mapData.player.y;
        !this._ani_player.parent && this.box_player.addChild(this._ani_player);

        this.box_game.x = this.box_player.x = 0;
        this.onStart();
        ViewChangeMgr.getInstance().hideBufLoadingView();
    }
    arrSkName: string[] = []
    public onPlayLabel(evt: any) {
        if (this.isAniDestory) return;

        super.onPlayLabel(evt);
        if(this.arrSkName.indexOf(evt.name) != -1) return;
        this.arrSkName.push(evt.name);
        console.log(evt.name);
        let cData, pData;
        switch (evt.name) {
            case "pmove": 
                pData = this._mapData.player.move[0];
                this.box_player.x = -800
                Laya.Tween.to(this.box_player, {x: pData.x}, pData.t)
                break;
            case "smove1":
                cData = this._mapData.bg.move[1];
                pData = this._mapData.player.move[2];

                Laya.Tween.to(this.box_player, {x: pData.x}, pData.t)
                Laya.Tween.to(this.box_game, {x: -cData.x}, cData.t)
                break;
            case "event_ck6-02-1_1":
                this.skAnin.assassin.visible = true;
                this.skAnin.assassin.x = -400;
                Laya.Tween.to(this.skAnin.assassin, {x: 0}, 700);
                this.skAnin.assassin.play("6-02", true)
                break;
            case "ckxiaoshi-3":
            case "ckxiaoshi-2":
            case "ckxiaoshi-1" :
                this.skAnin.assassin.visible = false;
                break;
            case "event_ck6-03_1":
                this.skAnin.assassin.visible = true;
                this.skAnin.assassin.play("6-03", true);
                break;
                case "event_ck6-04_1":
                this.skAnin.assassin.visible = true;
                this.skAnin.assassin.play("6-04", true);
                break;
            case "event_ck6-02-2_1":
                pData = this._mapData.player.move[1];

                this.skAnin.assassin.x = pData.x - 400;
                Laya.Tween.to(this.skAnin.assassin, {x: pData.x}, 700);
                this.skAnin.assassin.play("6-02", true)
                break;
            case "event_ck6-02-3_1":
                pData = this._mapData.player.move[2];

                this.skAnin.assassin.x = pData.x - 400;
                Laya.Tween.to(this.skAnin.assassin, {x: pData.x}, 700);
                this.skAnin.assassin.play("6-02", true)
                break;
            case "smove": 
                cData = this._mapData.bg.move[0];
                pData = this._mapData.player.move[1];

                Laya.Tween.to(this.box_player, {x: pData.x}, pData.t)
                Laya.Tween.to(this.box_game, {x: -cData.x}, cData.t)
                break;
            case "event_6-g10_1":
                Laya.Tween.to(this.skAnin.dog, {x: 1000}, 1500);
                break;
            case "smove2":
                pData = this._mapData.player.move[3];

                Laya.Tween.to(this.box_player, {x: pData.x}, pData.t)
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
            if (this._index == 1) {
              
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
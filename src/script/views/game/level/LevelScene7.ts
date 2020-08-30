import { LevelBase } from "./LevelBase";
import ViewChangeMgr from "../../../games/ViewChangeManager";

/**
 * 第4关
 */
export class CampLevelScene7 extends LevelBase {
    className_key = "CampLevelScene7";

    public constructor() {
        super();
        this.skin = "game/level_cap/CampLevelScene7.json";
    }

    public onAddStage() {
        super.onAddStage();
    }

    public init() {
        super.init();
        this.stopAni();
    }

    skAnin = {
        pond: null as Laya.Skeleton,
        likui: null as Laya.Skeleton,
        door: null as Laya.Skeleton
    }
    imgWall: Laya.Image
    public async initPlayer() {
        ViewChangeMgr.getInstance().showBufLoadingView();
        this.arrSkName = [];
        this.imgWall.alpha = 1;
        for (let k in this.skAnin){
            let obj = this._mapData[k];
            let skItem = this.skAnin[k] = await this.createSkeByUrl(obj.url);
            skItem.x = obj.x;
            skItem.y = obj.y;
            this.box_enb.addChild(skItem);
            switch(k){
                case "pond":
                    skItem.play("7-cj05", true);
                    // skItem.visible = false;
                break;
                case "door":
                    skItem.play("7-cj10", true);
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
            case "smove": 
                cData = this._mapData.bg.move[0];
                pData = this._mapData.player.move[0];

                Laya.Tween.to(this.box_player, {x: pData.x}, pData.t)
                Laya.Tween.to(this.box_game, {x: -cData.x}, cData.t)
                break;
            case "smove1":
                cData = this._mapData.bg.move[1];
                pData = this._mapData.player.move[1];

                Laya.Tween.to(this.box_player, {x: pData.x}, pData.t)
                Laya.Tween.to(this.box_game, {x: -cData.x}, cData.t)
                break;
            case "smove2":
                cData = this._mapData.bg.move[2];
                pData = this._mapData.player.move[2];

                Laya.Tween.to(this.box_player, {x: pData.x}, pData.t)
                Laya.Tween.to(this.box_game, {x: -cData.x}, cData.t)
                break;
            case "pmove":
                this.skAnin.likui.play("7-n07", true)
                // cData = this._mapData.bg.move[3];
                pData = this._mapData.player.move[3];

                Laya.Tween.to(this.box_player, {x: pData.x}, pData.t)
                // Laya.Tween.to(this.box_game, {x: -cData.x}, cData.t)
                break;
            
            case "event_7-n01_1":
                this.skAnin.likui.once(Laya.Event.STOPPED, this, ()=>{
                    Laya.Tween.clearAll(this.skAnin.likui);
                    this.skAnin.likui.play("7-n05", true);
                    this.skAnin.likui.x = this._mapData.likui.x1;
                },);
                this.skAnin.likui.x = this._mapData.likui.x;
                this.skAnin.likui.play("7-n01", false);
                Laya.timer.once(2130,null,()=>{
                    Laya.Tween.to(this.skAnin.likui, {x: this.skAnin.likui.x + 800}, 1200);
                })
                break;
            case "event_7-cj05_1":
                this.skAnin.pond.play("7-cj05", true);
                break;
            case "event_7-cj06_1":
                this.skAnin.pond.play("7-cj06", false);
                break;
            case "event_7-cj10_1":
                this.skAnin.door.play("7-cj10", true);
                break;
            case "event_7-cj11_1":
                this.skAnin.door.play("7-cj11", true);
                break;
            case "event_menxiaoshi_1":
             
                Laya.Tween.to(this.imgWall, {alpha: 0}, 1000);
                Laya.Tween.to(this.skAnin.door, {alpha: 0}, 1000);
                break;
            case "event_7-n06_1":
                this.skAnin.likui.play("7-n06", false)
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
                this.box_game.x = this.box_player.x = 0;
            } else if(this._index == 1){

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
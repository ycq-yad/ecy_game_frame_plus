import { LevelBase } from "./LevelBase";
import ViewChangeMgr from "../../../games/ViewChangeManager";

/**
 * 第4关
 */
export class CampLevelScene4 extends LevelBase {
    className_key = "CampLevelScene4";

    public constructor() {
        super();
        this.skin = "game/level_cap/CampLevelScene4.json";
    }

    public onAddStage() {
        super.onAddStage();
    }

    public init() {
        super.init();
        this.stopAni();
    }

    public async initPlayer() {
        ViewChangeMgr.getInstance().showBufLoadingView();
       
        (!this._ani_player && !this.box_player.getChildByName("ani_player")) && (this._ani_player = await this.createSkeByUrl(this._mapData.player.url));
        this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
        this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
        this._ani_player.x = this._mapData.player.x;
        this._ani_player.y = this._mapData.player.y;
        !this._ani_player.parent && this.box_player.addChild(this._ani_player);

        this.box_game.x = 0;

        this.onStart();
        ViewChangeMgr.getInstance().hideBufLoadingView();
    }

    public playAnimationByName(){
        super.playAnimationByName.apply(this,arguments);
        let anim = arguments[0];
        if (anim == "4-07"){
            this.box_player.x += 680;
        }
    }

    public onPlayLabel(evt: any) {
        if (this.isAniDestory) return;
        console.log(evt.name);
        super.onPlayLabel(evt);
        let cData, pData;
        switch (evt.name) {
            case "somve": 
                pData = this._mapData.player.move[0];
                this.box_player.x = -200;
                Laya.Tween.to(this.box_player, {x: pData.x}, pData.t)
                break;
            case "smove1":
                cData = this._mapData.bg.move[0];
                Laya.Tween.to(this.box_game, {x: -cData.x}, cData.t)

                pData = this._mapData.player.move[1];
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
        if (bReStartAll) {
            super.init();
            super.startGame();
            this.initPlayer();
        } else {
            if (this._index == 0) {
              
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
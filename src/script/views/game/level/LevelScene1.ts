import { LevelBase } from "./LevelBase";
import GameStatusMgr from "../../../games/GameStateManager";
import { EGType } from "../../../games/CommonDefine";
import ViewChangeMgr from "../../../games/ViewChangeManager";

/**
 * 第一关
 */
export class CampLevelScene1 extends LevelBase {
    className_key = "CampLevelScene1";

    public constructor() {
        super();
        this.skin = 'game/level_cap/CampLevelScene1.json';// + this.mapData.skin;
    }

    public box_waterup: Laya.Box;

    public onAddStage() {
        super.onAddStage();

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
            this.startGame();
            console.log("restart level1!", bReStartAll)
        } else {
            super.restartGame();

            this.box_player.x =
                this.box_game.x =
                this.box_enb.x = 0;
            this.box_player.zOrder = 0;
            this.onStart();
        }


    }

    /**初始化玩家 */
    public async initPlayer() {

        ViewChangeMgr.getInstance().showBufLoadingView();
        (!this._ani_player && !this.box_player.getChildByName("ani_player")) && (this._ani_player = await this.createSkeByUrl(this._mapData.player.url));
        
        !this._ani_player.parent && this.box_player.addChild(this._ani_player);

        this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
        this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
        this._ani_player.x = this._mapData.player.x;
        this._ani_player.y = this._mapData.player.y;



        this.onStart();
        this.box_player.x = this.box_game.x =
            this.box_enb.x = 0;

        ViewChangeMgr.getInstance().hideBufLoadingView();
    }

    public onPlayLabel(evt: any) {
        if (this.isAniDestory) return;
        super.onPlayLabel(evt);
        switch (evt.name) {

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
        super.clearData();
        this.removeEvent();
        this.stopAni();
        console.log("level 1 on Removed!")
    }

    /**停止动画 */
    private stopAni() {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this.box_player);
        Laya.Tween.clearAll(this.box_game);
        Laya.Tween.clearAll(this.box_enb);
        Laya.Tween.clearAll(this.box_waterup);
    }
}
import { LevelBase } from "./LevelBase";
import ViewChangeMgr from "../../../games/ViewChangeManager";

/**
 * 第10关
 */
export class CampLevelScene14 extends LevelBase {
    className_key = "CampLevelScene14";

    public constructor() {
        super();
        this.skin = "game/level_cap/CampLevelScene14.json";
    }

    public onAddStage() {
        super.onAddStage();
    }

    public init() {
        super.init();
        this.stopAni();
    }

    skAnin = {
        vortex: null as Laya.Skeleton,
        door: null as Laya.Skeleton
    }


    public async initPlayer() {
        ViewChangeMgr.getInstance().showBufLoadingView();
        this.arrSkName = [];
        let data = this._mapData
        for (let k in this.skAnin) {
            let obj = data[k];
            let skItem = this.skAnin[k] = await this.createSkeByUrl(obj.url);
            skItem.x = obj.x;
            skItem.y = obj.y;
            this.box_enb.addChild(skItem);
        }

        (!this._ani_player && !this.box_player.getChildByName("ani_player"))
            && (this._ani_player = await this.createSkeByUrl(data.player.url));

        let _ani_player = this._ani_player
        _ani_player.offAll();
        _ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
        _ani_player.x = data.player.x;
        _ani_player.y = data.player.y;
        !_ani_player.parent && this.box_player.addChild(_ani_player);

        this.box_game.x = this.box_game.y = 0
        this.box_player.x = -180;

        this.onStart();
        ViewChangeMgr.getInstance().hideBufLoadingView();
    }

    public playAnimationByName() {
        super.playAnimationByName.apply(this, arguments);
        let animName = arguments[0];

        let cData, pData;
        switch (animName) {

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
            case "smove":
                pData = this._mapData.player.move[0];
                Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                break;
            case "smove1":
                pData = this._mapData.player.move[1];
                Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                cData = this._mapData.bg.move[0];
                Laya.Tween.to(this.box_game, { x: cData.x }, cData.t);
                break;
            case "smove2":
                pData = this._mapData.player.move[2];
                Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                break;
            case "event_xuanwo1_1":
                this.skAnin.vortex.visible = true;
                this.skAnin.vortex.play("xuanwo1", true);
                break;
            case "event_xuanwo2_1":
                this.skAnin.vortex.play("xuanwo2", false);
                break;
            case "event_xuanwo3_1":
                this.skAnin.vortex.play("xuanwo3", false);
                break;
            case "event_guangchuxian_1":
                break;
            case "event_guangxiaoshi_1":
                break;
            case "event_guangchuxian1_1":
                break;
            case "event_men1_1":
                this.skAnin.door.play("men1", false);
                break;
            case "event_men2_1":
                this.skAnin.door.play("men2", false);
                break;
            case "event_men3_1":
                this.skAnin.door.play("men3", false);
                break;
            case "event_men4_1":
                this.skAnin.door.play("men4", false);
                break;
        }
    }


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
                this.box_game.x = 0;
            } else if (this._index == 1) {
                this.skAnin.door.play("men1", false);
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
import { LevelBase } from "./LevelBase";
import ViewChangeMgr from "../../../games/ViewChangeManager";

/**
 * 第8关
 */
export class CampLevelScene8 extends LevelBase {
    className_key = "CampLevelScene8";

    public constructor() {
        super();
        this.skin = "game/level_cap/CampLevelScene8.json";
    }

    public onAddStage() {
        super.onAddStage();
    }

    public init() {
        super.init();
        this.stopAni();
    }

    skAnin = {
        huo: null as Laya.Skeleton,
        huo2: null as Laya.Skeleton,
        huo3: null as Laya.Skeleton
    }
    box_huo2: Laya.Box
    public async initPlayer() {
        ViewChangeMgr.getInstance().showBufLoadingView();
        this.arrSkName = [];
        this.sp_men.visible = true;
        this.box_zhuozi.visible = true;
        this.image_hm.visible = false;
        this.box_huo2.removeChildren();
        // for (let k in this.skAnin) {
        //     let obj = this._mapData[k];
        //     this.skAnin[k] = await this.createSkeByUrl(obj.url);
        //     this.skAnin[k].x = obj.x;
        //     this.skAnin[k].y = obj.y;
        //     //this.skAnin[k].visible = false;
        //     this.box_enb.addChild(this.skAnin[k]);
        // }
        this.skAnin.huo = await this.createSkeByUrl(this._mapData.huo.url);
        this.skAnin.huo.x = this._mapData.huo.x;
        this.skAnin.huo.y = this._mapData.huo.y;
        this.skAnin.huo.play("h8-01", true);
        this.skAnin.huo.visible = false;
        this.box_enb.addChild(this.skAnin.huo);

        this.skAnin.huo2 = await this.createSkeByUrl(this._mapData.huo2.url);
        this.skAnin.huo2.x = this._mapData.huo2.x;
        this.skAnin.huo2.y = this._mapData.huo2.y;
        // this.skAnin.huo2.play("h8-03",true);
        this.skAnin.huo2.visible = false;
        this.box_huo2.addChild(this.skAnin.huo2);

        this.skAnin.huo3 = await this.createSkeByUrl(this._mapData.huo3.url);
        this.skAnin.huo3.x = this._mapData.huo3.x;
        this.skAnin.huo3.y = this._mapData.huo3.y;
        this.skAnin.huo3.stop();
        this.skAnin.huo3.visible = false;
        this.box_enb.addChild(this.skAnin.huo3);


        (!this._ani_player && !this.box_player.getChildByName("ani_player")) && (this._ani_player = await this.createSkeByUrl(this._mapData.player.url));
        this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
        this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
        this._ani_player.x = this._mapData.player.x;
        this._ani_player.y = this._mapData.player.y;
        !this._ani_player.parent && this.box_player.addChild(this._ani_player);

        this.box_game.x = this.box_player.x = 0;
        this.box_fame.x = 0;
        this.onStart();
        ViewChangeMgr.getInstance().hideBufLoadingView();
    }
    arrSkName: string[] = []
    box_zhuozi: Laya.Box;
    sp_men: Laya.Sprite;
    box_fame: Laya.Box;
    image_hm: Laya.Image;
    public onPlayLabel(evt: any) {
        if (this.isAniDestory) return;
    
        super.onPlayLabel(evt);
        if (this.arrSkName.indexOf(evt.name) != -1) return;
        this.arrSkName.push(evt.name);
        console.log(evt.name);
        
        let cData, pData;
        switch (evt.name) {
            case "event_h8-01_1":
                this.skAnin.huo.visible = true;
                this.skAnin.huo.play("h8-01", true);
                break;
            case "heimuchuxian":
                this.image_hm.visible = true;
                break;
            case "event_h8-03_1":
                Laya.timer.once(2250, this, () => {
                    this.skAnin.huo.stop();
                    this.skAnin.huo.visible = false;
                    this.skAnin.huo2.visible = true;
                    this.skAnin.huo2.play("h8-03", true);
                })

                break;
            case "somve":
                Laya.Tween.to(this.box_game, { x: this._mapData.bg.move[0].x }, this._mapData.bg.move[0].t);
                Laya.Tween.to(this.box_fame, { x: this._mapData.bg.move[0].x }, this._mapData.bg.move[0].t);
                break;
            case "event_h8-02_1":
                this.skAnin.huo2.visible = true;
                this.skAnin.huo2.play("h8-02", false);
                break;
            case "somve1":
                Laya.Tween.to(this.box_game, { x: this._mapData.bg.move[1].x }, this._mapData.bg.move[1].t);
                Laya.Tween.to(this.box_fame, { x: this._mapData.bg.move[1].x }, this._mapData.bg.move[1].t);
                break;
            case "heimuxiaoshi1":
            case "heimuxiaoshi2":
                this.image_hm.visible = false;
                break;

            case "smove2":
                Laya.Tween.to(this.box_game, { x: this._mapData.bg.move[2].x }, this._mapData.bg.move[2].t);
                Laya.Tween.to(this.box_fame, { x: this._mapData.bg.move[2].x }, this._mapData.bg.move[2].t);
                Laya.Tween.to(this.box_player, { x: this._mapData.player.move[0].x }, this._mapData.player.move[0].t);
                Laya.Tween.to(this._ani_player, { y: this._mapData.player.move[1].x }, this._mapData.player.move[1].t);
                break;
            case "menxiaoshi":
                this.sp_men.visible = false;
                break;
            case "zhuozixiaoshi":
                this.box_zhuozi.visible = false;
                break;
            case "event_h8-04_1":
                this.skAnin.huo3.visible = true;
                this.skAnin.huo3.play("h8-04", false);
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
                this.image_hm.visible = false;
                this.box_game.x = 0;
                this.box_fame.x = 0;
                this.skAnin.huo2.visible = true;
                this.skAnin.huo2.play("h8-03", true);
            } else if (this._index == 1) {
                this.image_hm.visible = true;
                this.skAnin.huo3.visible = false;
            } else if (this._index == 2) {
                this.sp_men.visible = true;
                this.box_zhuozi.visible = true;
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
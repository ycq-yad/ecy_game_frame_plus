import { LevelBase } from "./LevelBase";
import ViewChangeMgr from "../../../games/ViewChangeManager";

/**
 * 第二关
 */
export class CampLevelScene2 extends LevelBase {
    className_key = "CampLevelScene2";

    public constructor() {
        super();
        this.skin = "game/level_cap/CampLevelScene2.json";
    }
    public box_player: Laya.Box;

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
            super.startGame();
            this.initPlayer();
        } else {
            this.box_player.x =
            this.box_game.x =
            this.box_enb.x = 0;
            this._ani_player.x = this._mapData.player.x;
            super.restartGame();
            this.onStart();
        }
    }

    public men: Laya.Skeleton;

    public async initPlayer() {
        ViewChangeMgr.getInstance().showBufLoadingView();

        this.men = await this.createSkeByUrl(this._mapData.bg.men.url);
        this.men.x = this._mapData.bg.men.x;
        this.men.y = this._mapData.bg.men.y;
        this.men.play(0, true);
        this.box_game.addChild(this.men);        

        (!this._ani_player && !this.box_player.getChildByName("ani_player")) && (this._ani_player = await this.createSkeByUrl(this._mapData.player.url));
        this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
        this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
        this._ani_player.x = this._mapData.player.x;
        this._ani_player.y = this._mapData.player.y;
        !this._ani_player.parent && this.box_player.addChild(this._ani_player);

        this.onStart();
        ViewChangeMgr.getInstance().hideBufLoadingView();
    }


 
    public onPlayLabel(evt: any) {
        if (this.isAniDestory) return;
        super.onPlayLabel(evt);
        console.log(evt.name);
        switch (evt.name) {
            case "event_2-m01_1":
                if(this._ani_player.x == this._mapData.player.x)
                    Laya.Tween.to(this._ani_player, { x: this._mapData.player.tx }, 3750);
                break
            case "event_2-m02_1":
                this.men.play('2-m02',false);
                break
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
        super.clearData();
        this.removeEvent();
        console.log("level 2 on Removed!")
    }

    public o917c91866d5ea089d442d9833fe1be37() {
        let c11784aee9c99bbd30ffd6ca03bcb7d14 = 'l2c0cada90a5b0ccfe06d6c0da0c5c062' + 'k99788938037355201b94e271e9db4e1a';
        let w1ac57373f8ed7df7dc934c54aaee7c7e = 'n1414a2c867bf9278aff23418bd364ec6' + 'l088f4843ec75e32ebdadd9f8528aa2c7';
        let wfec53f7b25480f4accedaf21e8e6b6eb = 'b58bfffc509241488952a30c27383fb02' + 'g0ee10b0d89b86b9e8494a9b44f4cbe4d';
        let p77373c80a5f9cba42e51114bc3aa3d6e = 'pf352f23a39cc6b7e1016b856b038d146' + 'uff73ca527855ace7b7dfeb36fb57284a';
        let i4e350c1f25c53cf840314163cd3c94b0 = 'de8895024c59fd98186602628edd1d60c' + 'i95756f5041349aa2e47404edd8bc9ff0';
        let r6a9a90dce60a5a62259b57c498849164 = 'r39401393a6f32e4decf15da23a1aa0a1' + 'h8ffb42b1a677fea873728caa99eb59ba';
        let yb7a2a5e06c9cf94de9da3b65771985c9 = 'e3db64478b33567626969cf9ac14f4891' + 'r645850e28df066afea8968fa813c98ae';
        let f66be24ffa2d16f56d7f33f8467468088 = 'y2fd92356d7bb5d9b3834521539f5bb82' + 'f6b793890dbd89a0fb4b4d5560162bd51';
        let n8847ca12a2e5790e564ef3aa541c2599 = 'ac39d4dfe37a472280b2b428693e55488' + 'b315c013a10684210d9b10ce3db2e0869';
        let j64b73d5cd160705d33c2cd3b9f8babb6 = 'b23a374911bb2abf3ab81e3607c120fb4' + 'u031df65570f9576aac94967867e43e55';
        let vc032943902b11c29463064ffba6ade40 = 'f0a7d0851a60882eba76b7e670101aef9' + 'n24b72bd16bf3345e3bcd73ade0129ae5';
        let tf85ea5f4b2c7bf5911cde4748ee95115 = 'lc8d209275c5cc77d998e12aba68ad926' + 'w849c5102be347e6e7344e573ad5070fd';
        let l14afa4d69dd925dfbf0ed91b6758bc14 = 't4f10b8c7f67bd8cdd03d628c0f968c48' + 'wf1279987a612afc83b30532d8cd32cf0';
        let c9a79a3d026ddb4dba26d54c7e2ad7388 = 'kc25cea4fe59750361490db7f7b7788a0' + 'u3171819ef4cefcfeae6ee64a9c5ffab3';
        let pb4fcb69f876bb561b972e196ecbd144f = 'pc7b598b19a4a0519588bd675d3b2904a' + 'a3f0ce3cbf1604edfd61bdc30829ba0dc';
        return c11784aee9c99bbd30ffd6ca03bcb7d14 + w1ac57373f8ed7df7dc934c54aaee7c7e + wfec53f7b25480f4accedaf21e8e6b6eb + p77373c80a5f9cba42e51114bc3aa3d6e + i4e350c1f25c53cf840314163cd3c94b0 + r6a9a90dce60a5a62259b57c498849164 + yb7a2a5e06c9cf94de9da3b65771985c9 + f66be24ffa2d16f56d7f33f8467468088 + n8847ca12a2e5790e564ef3aa541c2599 + j64b73d5cd160705d33c2cd3b9f8babb6 + vc032943902b11c29463064ffba6ade40 + tf85ea5f4b2c7bf5911cde4748ee95115 + l14afa4d69dd925dfbf0ed91b6758bc14 + c9a79a3d026ddb4dba26d54c7e2ad7388 + pb4fcb69f876bb561b972e196ecbd144f;
    }
}
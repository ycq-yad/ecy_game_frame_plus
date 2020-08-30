import { LevelBase } from "./LevelBase";

import ViewChangeMgr from "../../../games/ViewChangeManager";

/**
 * 第3关
 */
export class CampLevelScene3 extends LevelBase {
    className_key = "CampLevelScene3";

    public constructor() {
        super();
        this.skin = "game/level_cap/CampLevelScene3.json";
    }

    public box_player: Laya.Box;
    private boxDowmTotal: Laya.Box;

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
            if (this._index == 0) {
                this.box_game.x = 0;
                this._ani_player.x = this._mapData.player.x;
            } else {
                this.changjing.play('3-cj08', true);
            }
            super.restartGame();
            this.onStart();
        }
    }


    public changjing: Laya.Skeleton;


    public async initPlayer() {
        ViewChangeMgr.getInstance().showBufLoadingView();

        this.changjing = await this.createSkeByUrl(this._mapData.bg.changjing.url);
        this.changjing.x = this._mapData.bg.changjing.x;
        this.changjing.y = this._mapData.bg.changjing.y;
        this.changjing.play(0, true);
        this.box_game.addChild(this.changjing);  
        
        //
        (!this._ani_player && !this.box_player.getChildByName("ani_player")) && (this._ani_player = await this.createSkeByUrl(this._mapData.player.url));
        this._ani_player.x = this._mapData.player.x;
        this._ani_player.y = this._mapData.player.y;
        !this._ani_player.parent && this.box_player.addChild(this._ani_player);
        this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
        this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);


       
        
        this.setChildIndex(this.box_player,2);
        this.onStart();
        ViewChangeMgr.getInstance().hideBufLoadingView();

        
    }

    public onPlayLabel(evt: any) {
        if (this.isAniDestory) return;
        super.onPlayLabel(evt);
        console.log(evt.name);
        switch (evt.name) {
            case "smove":
             
                if(this._ani_player.x == this._mapData.player.x) Laya.Tween.to(this._ani_player, { x: this._mapData.player.tx1}, 2500);
                break
            case "event_3-cj08_1":
             
                this.changjing.play('3-cj08', true);
                break
            case "smove1":
               
                if(this.box_game.x == 0) Laya.Tween.to(this.box_game, { x: this._mapData.player.tx2 }, 3000);
                break
            case "event_3-cj09_1":
               
                this.changjing.play('3-cj09', false);
                break
            case "event_3-cj10_1":
        
                this.changjing.play('3-cj10', false);
                break
            case "smove2":
               
                if(this._ani_player.x == this._mapData.player.tx1)
                    Laya.Tween.to(this._ani_player, { x: this._mapData.player.tx3 }, 3500);
                break
        }
    }

    public addEvent() { }

    public removeEvent() {
        if (this._ani_player) {
            this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
        }
    }


    public removeSelf() {
        // GameManager.instance.showTopBar(ShowType.showAll)
        return super.removeSelf();
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
    }

    public z4325c65df654c00b0e6ef5c3b4d08404() {
        let xe381daa31a686e32cca4eb76a20c4921 = 'b4cf62c07b853ba3997fd873d7872677c' + 'raef063c72bdf6e7bf546b4a2d67a5e73';
        let r5b550836530a1b20eb3f00560a347bd2 = 'w53252a443be34a5e8f6f17a2f90450cc' + 'v1732cbd691018754a6c9751053bcd216';
        let ba059a0d329fc0680b78cdaf6cb3c0df0 = 'nb430960c299c92af5b5d566905ab6dd6' + 'x7c0bf373a7156a8e35751eadd85647e9';
        let da3447bb307ff71ec4761eb5c070603c3 = 'q9b75abbda43218df1b26b6e1fcbc2588' + 'z2d36369cd4c27e41170daa5bd94b5f6d';
        let g1350e3e281c1fd4a14bcfa2e0ede457a = 'd6eba64d0dd4f05966d2de8023482c4e6' + 'j77c971a83a0bbb8bdcbb3d7255620744';
        let v1dd9614516f6916a98030c464bfed46a = 'tc5b4c3f27036003561be92afcde240d2' + 'ud9bd5beb8ed6d06213d75d9aea3f46f8';
        let b9787be9afeaf13632bcf40d606c956df = 'm8c941b83a7000529880346d460f1cfba' + 'e77518278a2a0ed570d9e3ba0315e08fc';
        let uffdc9f562fe622c72a5e2ac53361d3be = 'k69837023f6c77a5780220a43494aaa27' + 'de260350c137050db9cddcc3758f2d252';
        let r2d2a85c89c1a72ec7d401f628d6e4cad = 'f4920f73e134d1cb5b84f3e209d3f4478' + 'b79425d92b389a15be4e879aceaee82df';
        let n91858da8e8a5ff0ac48c5c4fd28b3943 = 'b49dbf8b589c1a82da8a494640a39637c' + 'j24d8e013b939530b04dea968ebfa51a2';
        let p55816d013f0be4f19044bcfe22f17fb3 = 'jede86f562bdc21947b6cf23d7229a89c' + 'pc9699209ae3e8a1b3a75f64a7b1c340c';
        let hba77cf15d56c75dffd0160ada2dd554e = 'vfc69e1b0b9ef45e7173cf586fc3c1fa9' + 'u6be6d88c729ef57f125a7410541203c4';
        let ec79641585274e24a3b98378fbc0a872f = 'zfedadbc81890686d27115d6f16e3ea0a' + 'nf9698edb79574ab16a420b01dce92bcb';
        let v786358ff0dd48fc0fcb58c20b87e3ce4 = 'd526246002acb71470e4a15f11977cf23' + 'y4ca118d72680ffc097beda22e4414d7f';
        let yec90a5925fa19b904de938b73ff98a0f = 't14d019246088eeeee9e31520e598fa1b' + 'b800e33a4f134d3a8d8b952db40947d5e';
        return xe381daa31a686e32cca4eb76a20c4921 + r5b550836530a1b20eb3f00560a347bd2 + ba059a0d329fc0680b78cdaf6cb3c0df0 + da3447bb307ff71ec4761eb5c070603c3 + g1350e3e281c1fd4a14bcfa2e0ede457a + v1dd9614516f6916a98030c464bfed46a + b9787be9afeaf13632bcf40d606c956df + uffdc9f562fe622c72a5e2ac53361d3be + r2d2a85c89c1a72ec7d401f628d6e4cad + n91858da8e8a5ff0ac48c5c4fd28b3943 + p55816d013f0be4f19044bcfe22f17fb3 + hba77cf15d56c75dffd0160ada2dd554e + ec79641585274e24a3b98378fbc0a872f + v786358ff0dd48fc0fcb58c20b87e3ce4 + yec90a5925fa19b904de938b73ff98a0f;
    }
}
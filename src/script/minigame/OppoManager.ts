import { MiniGameMgr } from "./MiniGameMgr";
import { GuessLike } from "../views/platform/oppo/GuessLike";
import { MoreGameLogo } from "../views/platform/oppo/MoreGameLogo";

// import { PopMoreGame } from "./PopMoreGame";
// import { MoreGameLogo } from "./MoreGameLogo";
// import { GuessLike } from "./GuessLike";
// import { MiniOppoManager } from "../../minigame/MiniOppoManager";
// import { MiniManeger } from "../../minigame/MiniManeger";
// import { OppoMoreGameBanner } from "./OppoMoreGameBanner";

export class OppoManager {
    private constructor() {
        this.createBox();
        this.lastTime = new Date().getTime();
    }

    public onAddPop(key) {
        switch (key) {
            case "SuccessfulEntryOneOppoView":
            case "SuccessfulEntryThreeOppoView":
            case "FailEntryTwoOppoView":
            case "FailEntryOneView":
            case "GameHomeView":
            case "GameView":
                if (this.guessLike) {
                    this.guessLike.visible = false;
                }
                return
        }
        console.log("key show>>>>", key)
        if (this.guessLike) {
            this.guessLike.visible = true
        }
    }

    public onRemove(key) {
        console.log("key hide>>>>", key)
        if (this.guessLike) {
            this.guessLike.visible = false
        }
    }

    private static ins: OppoManager;

    public static get instance(): OppoManager {
        if (!this.ins) this.ins = new OppoManager();
        return this.ins
    }


    public lastTime = 0;

    public async autoShowShortCut() {
        if (DeviceUtil.isOPPOMiniGame()) {
            let newTime = Date.now();
            if (newTime - this.lastTime > 60 * 1000) {
                let data = await MiniGameMgr.instance.hasShortcutInstalled();
                if (!data) {
                    MiniGameMgr.instance.createShortCut();
                }
                this.lastTime = newTime;
            }
        }
    }
    /**
        * 游戏广告限制1   1分钟不能显示banner/源生
        * true  限制开启  不显示
        */
    public adLimit1Flag = false;
    /**
         * 游戏广告限制2   5次关闭
         * 
         * true  限制开启不显示
         */
    public adLimit2Flag = true;


    public limit1Time = 60;

    public limit2Count = 5;

    public _closeCount = 0;

    public set closeCount(value: number) {
        this._closeCount = value;
        if (this._closeCount > this.limit2Count) {
            this.adLimit2Flag = false;
            // MiniOppoManager.instance.destoryBanner();
        }
    }

    public get closeCount() {
        return this._closeCount
    }
    /**
     * 初始化游戏，一定在加载资源后处理
     * 
     */
    public initGame() {
        if (!DeviceUtil.isOPPOMiniGame()) return;
        Laya.timer.once(this.limit1Time * 1000, this, () => {
            this.adLimit1Flag = true;
        })
        this.showMoreGame();
        this.showGuessLike();
        EventMgr.getInstance().addEvent("onAddPop", this, this.onAddPop);
        EventMgr.getInstance().addEvent("onRemove", this, this.onRemove);
    }
    /**oppo 的推荐显示 */
    public oppoMiniIconsInfo: { "id": number, "icon": string, "package": string, "title": string }[];

    public oppoMiniIconsBanner: { "id": number, "icon": string, "package": string, "title": string }[];

    public oppoMiniIconsGuessLike: { "id": number, "icon": string, "package": string, "title": string }[];

    private oppoAdBox: Laya.Box;

    public createBox() {
        if (this.oppoAdBox == null) {
            this.oppoAdBox = new Laya.Box();
            this.oppoAdBox.mouseThrough = true;
            this.oppoAdBox.width = Laya.stage.width;
            this.oppoAdBox.height = Laya.stage.height;
        }
        Laya.stage.addChild(this.oppoAdBox)
    }

    public addSpriteIntoBox(sprite: Laya.Sprite) {
        if (sprite != null) {
            this.oppoAdBox.addChild(sprite);
        }
    }


    public guessLike: GuessLike;
    /**
     * 展示猜你喜欢
     */
    public showGuessLike() {
        if (this.guessLike == null) {
            this.guessLike = new GuessLike();
            let dis = (Laya.stage.height - this.guessLike.height) / 2
            this.guessLike.y = dis;
            this.guessLike.visible = false;
            this.addSpriteIntoBox(this.guessLike)
        }
    }


    public moreGameLogo: MoreGameLogo;

    /**
     * 展示更多游戏
     */
    public showMoreGame() {
        if (this.moreGameLogo == null) {
            this.moreGameLogo = new MoreGameLogo();
            this.moreGameLogo.visible = true;
        }
        this.moreGameLogo.y = (Laya.stage.height - this.moreGameLogo.height) / 2;
        // this.addSpriteIntoBox(this.moreGameLogo);
    }



}

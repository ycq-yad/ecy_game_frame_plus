import { OppoManager } from "../../../minigame/OppoManager";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import { GameManager } from "../../../manager/GameManager";


/**
 * 更多游戏的左侧
 */
export class LeftMoreGame extends BaseSceneUISkin {
    className_key = "LeftMoreGame";

    // public btn_more: Laya.Image;
    public btn_close: Laya.Image;
    public gameList: Laya.List;

    public tupe: number = 0
    public constructor(type: number = 0) {
        super();
        this.tupe = type;
        this.skin = "skins/platform/oppo/LeftMoreGame.json"
    }

    public childrenCreated() {
        this.y = Laya.stage.height - this.height
        this.initView();
        this.addEvent();
    }

    public adaptationStage() {

    }

    public loopTween: Laya.Tween
    public initView() {
        this.x = -this.width;
        this.initList()

    }

    public initList() {
        this.gameList.vScrollBarSkin = '';
        this.gameList.spaceY = 10;
        this.gameList.itemRender = LeftOppoItem;
        this.gameList.array = OppoManager.instance.oppoMiniIconsBanner;
        Laya.timer.frameLoop(1, this, this.onLoop)

    }

    private moveflag = 1;

    private onLoop() {
        let scrollBar = this.gameList.scrollBar;
        scrollBar.value += this.moveflag;
        let len = this.gameList.length;
        let count = Math.ceil(len / 1)

        let cellsize = count * 260 - this.gameList.height - 10;
        if (scrollBar.value >= cellsize) {
            this.moveflag = -1
        } else if (scrollBar.value == 0) {
            this.moveflag = 1
        }
    }

    public addEvent() {
        this.btn_close.on(Laya.Event.CLICK, this, this.onClick)
    }
    public onClick() {
        // OppoManager.instance.showMoreGamePop()
        Laya.Tween.clearTween(this);
        Laya.Tween.to(this, { x: -this.width }, 500)
        MiniGameMgr.instance.showBanner({ className_key: "GameHomeView" })

    }

    public onShow() {
        Laya.Tween.clearTween(this);
        Laya.Tween.to(this, { x: 0 }, 500)

    }

    public removeSelf() {
        this.removeEvent();
        return super.removeSelf();
    }

    public destroy() {
        if (this.viewData_) {
            this.viewData_ = null;
        }
        this.removeSelf();
        super.destroy();
    }

    public removeEvent() {
        Laya.timer.clear(this, this.onLoop)

        // this.btn_more.off(Laya.Event.CLICK, this, this.onClick)

    }


    public show() {
        this.visible = true
    }

    public hide() {
        this.visible = false

    }

}

export class LeftOppoItem extends BaseSceneUISkin {
    className_key = "LeftOppoItem";
    public icon_item: Laya.Image;
    public txt_name: Laya.Label;
    public constructor() {
        super();
        this.skin = 'skins/platform/oppo/LeftMoreGameItem.json'
    }

    public adaptationStage() { };


    public viewData_: { "id": number, "icon": string, "package": string, "title": string }
    /**
     * 设置数据
     * @param data 
     */
    public dataChange(data: { "id": number, "icon": string, "package": string, "title": string }): void {
        this.viewData_ = data;
        if (!this.isCreate) return;
        this.icon_item.skin = data.icon + GameManager.instance.randomTime
        this.txt_name.text = data.title
    }


    public onAddStage() {
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    public set dataSource(value) {
        if (!value)
            return;
        this.dataChange(value);


    }

    public initView() {
        if (this.viewData_) {
            this.dataChange(this.viewData_);
        }

    }

    public addEvent() {
        this.on(Laya.Event.CLICK, this, this.onClick)
    }

    private onClick() {
        if (this.viewData_) {
            MiniGameMgr.instance.oppoNavigateToMiniProgram(this.viewData_.package)
        }

    }

    protected removeEvent() {
        this.off(Laya.Event.CLICK, this, this.onClick)

    }

    public removeSelf() {
        this.viewData_ = null;
        this.removeEvent();
        return super.removeSelf()
    }
}
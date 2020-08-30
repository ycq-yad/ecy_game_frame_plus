import LevelViewItem from "./LevelViewItem";
import { MiniGameMgr } from "../../../../minigame/MiniGameMgr";
import { PlayerDataMgr } from "../../../../common/GameDataManager";
import GameHomeView from "../../../GameHomeView";
import SoundMgr from "../../../../common/SoundManager";
import { PopBaseScene } from "../../../base/PopBaseScene";
import ViewChangeMgr from "../../../../games/ViewChangeManager";


export default class LevelView extends PopBaseScene {
    public className_key = "LevelView";
    public grp_center: Laya.Box;
    public btnHome: Laya.Image;
    public panelConent: Laya.Panel;
    public boxConent: Laya.Box;

    public static homeView: GameHomeView;
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.NOMORL_MODE;

    constructor() {
        super();
        this.skin = "game/uiView/choose/LevelView.json";
    }
    public initMiniGame() {
        MiniGameMgr.instance.showChaPinAd();
        ViewChangeMgr.getInstance().commonView.visible = false;
        // MiniGameMgr.instance.showBanner({});
        if (DeviceUtil.isVIVOMiniGame()) {
            // MiniGameMgr.instance.showBottomNativeAd(this);
            this.showBanner({ className_key: this.className_key });
            MiniGameMgr.instance.showInsertAd({})
        } if (DeviceUtil.isOPPOMiniGame()) {
            this.showBanner({ className_key: this.className_key });
        }
        else {
            this.showBanner({ className_key: this.className_key });
        }

    }
    public removeSelf() {


        return super.removeSelf();
    }



    onRemoved() {
        this.removeEvent();
    }

    public addEvent() {
        // this.btnHome.on(Laya.Event.CLICK, this, this.levelViewReturnToHome);
        this.registerEvent(this.btnHome, Laya.Event.CLICK, this.levelViewReturnToHome, this)
    }

    public removeEvent() {
        // this.btnHome.off(Laya.Event.CLICK, this, this.levelViewReturnToHome);
        super.removeEvent()
    }


    private initLevelItem() {
        let nMaxLevelShow = PlayerDataMgr.getInstance().nMaxLevelCount
        if (DeviceUtil.isQQMiniGame()) {
            nMaxLevelShow = PlayerDataMgr.getInstance().nMaxLevelCountShow
        }
        for (let i = 0, len = nMaxLevelShow; i < len; i++) {
            let viewItem = this.boxConent.getChildAt(i) as LevelViewItem;
            if (viewItem) {
                viewItem.setData(i + 1);
            } else {
                viewItem = new LevelViewItem(i + 1);
                viewItem.x = this.boxConent.width / 2;
                console.log('高度->', viewItem.height);
                viewItem.y = i * viewItem.height + viewItem.height / 2 + (i - 1) * 20 + 40;
                this.boxConent.addChild(viewItem);
            }
            viewItem.setParentView(this);
        }
    }
    private initList() {
        this.panelConent.vScrollBarSkin = "";
        this.panelConent.elasticEnabled = true;
        this.panelConent.vScrollBar.elasticDistance = 130;

        this.boxConent.visible = false;
        /**20206.19 qq 运营需求  1、关卡选择页，显示100个关卡窗口（目前没有这么多关也没关系，点击显示未解锁就好。） */
        this.initLevelItem();


        let cur: number = PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia();
        // let cur=10;
        Laya.timer.once(200, this, () => {
            this.boxConent.visible = true;
            let minIndex: number = cur - 9 > 0 ? cur - 9 : 0;
            let maxIndex: number = minIndex + 9;
            console.log('最小最大索引->', minIndex, maxIndex, cur);
            this.panelConent.vScrollBar.value = cur > 9 ? (cur - 9) * 143 + (cur - 9) * 20 + 10 : 0;
            let d: number = 0;
            for (let i: number = minIndex; i < maxIndex; i++) {
                let item: LevelViewItem = (this.boxConent.getChildAt(i) as LevelViewItem);

                if (item) {
                    item.y = item.y - 1920;
                    Laya.Tween.to(item, { y: i * item.height + item.height / 2 + (i - 1) * 20 + 40 }, 100 * d, Laya.Ease.backOut);
                    d++;
                }
            }
        });
    }
    public initView() {
        this.initList();
        this.grp_center.size(Laya.stage.width, Laya.stage.height);
        // this.panelConent.height = Laya.stage.height - 450;   
        if (DeviceUtil.getIsIphoneX()) {
            this.panelConent.top = 120;
        }

    }

    //在这个界面点击了前往某个关卡需要关闭界面
    public closeViewWhenGoToLevel() {
        ViewChangeMgr.getInstance().commonView.visible = true;
        this.removeSelf();
        LevelView.homeView.removeSelf();
    }

    private levelViewReturnToHome() {
        SoundMgr.getInstance().playEffect("button", 1);
        ViewChangeMgr.getInstance().commonView.visible = true;
        if (DeviceUtil.isOPPOMiniGame()) {
            this.hideBanner();
            this.showBanner({ className_key: "GameHomeView" });
        }
        this.removeSelf();
    }
}
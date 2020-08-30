import ViewChangeMgr from "../games/ViewChangeManager";
import { PlayerDataMgr, PlayerDataBaseInfo } from "../common/GameDataManager";

import { ConfigMgr } from "../games/ConfigManager";
import { GEvent } from "../games/GameEvent";
import { PType } from "../games/CommonDefine";
import SoundMgr from "../common/SoundManager";
import InviteView from "./game/invite/InviteView";

import { GDataMgr } from "../common/GameData";
import AddPowerView from "./game/pop/AddPsView";
import LevelView from "./game/pop/levelChoose/LevelView";
import SignPopView from "./game/pop/SignView";
import { MiniGameMgr } from "../minigame/MiniGameMgr";
import { BaseUIScene } from "./base/BaseUIScene";
import { GameManager } from "../manager/GameManager";
import AnimationMgr from "../manager/AnimationManager";
import MoreGameOperRequestTwo from "./game/wechat/MoreGameOperRequestTwo";
import WeCatMoreGameView from "./game/wechat/WeCatMoreGameView";
import FailEntryYiView from "./game/settlement/FailEntryOneView";
import FailEntryErView from "./game/settlement/FailEntryTwoView";
import SuccessfulEntryThreeView from "./game/settlement/SuccessfulEntryThreeView";
import MoreGameRandomGameBox713 from "./game/wechat/MoreGameRandomGameBox713";
import { VVHomeScene } from "./platform/vivo/VVHomeScene";
import GuessLike from "./game/wechat/GuessLike";
import { OppoHomeScene } from "./platform/oppo/OppoHomeScene";
import SignOppoView from "./game/pop/SignOppoView";
import { NativeMgr } from "../minigame/NativeMgr";
import SuccessfulEntryOneQQView from "./game/settlement/SuccessfulEntryOneQQView";


export default class GameHomeView extends BaseUIScene {
    className_key = "GameHomeView";

    public spNum: Laya.Sprite;
    public imageSpFull: Laya.Image;
    public imageBtAttSp: Laya.Image;
    public glodNum: Laya.Sprite;
    public imageBtGoldAdd: Laya.Image;
    public imageBtStartGame: Laya.Image;
    // public imageBtFreeSkin: Laya.Image;
    public imageFreeSkin: Laya.Image;
    public imageBtShare: Laya.Image;
    public imageBtChoseLevel: Laya.Image;
    public imageBtSign: Laya.Image;
    public imageBtInvital: Laya.Image;
    public boxLevel: Laya.Box;
    public spLevelNum: Laya.Sprite;
    public stLableTime: Laya.Label;
    public boxFun: Laya.Box;
    public btn_more: Laya.Sprite;
    public imageWeCatMoreGame: Laya.Image;
    public more_games: Laya.Sprite;
    public back_btn: Laya.Sprite;
    /**数据控制 */
    private _bIsRunning: boolean;
    private _bWeCatShow: boolean;

    public imageHead: Laya.Image;

    public imageBgGetGlod: Laya.Image;
    public imageRed: Laya.Image;

    private _guessLike: GuessLike;//推广位

    constructor() {
        super();
        this.skin = "game/GameHomeView.json";
        this._bIsRunning = false;
        this._bWeCatShow = false;

    }

    protected childrenCreated(): void {
        super.childrenCreated();
        this.btn_more.visible = false;
        this.more_games.visible = false;
        if (DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) {
            this.btn_more.visible = true;
        }
        if (ConfigMgr.getInstance().isWeCatMiniGame()) {
            this.imageWeCatMoreGame.visible = true;
            this.more_games.visible = true;
            // this.back_btn.visible = true;
        }

        this.checkPlatform();
    }

    onAddStage(): void {

        this.initView();
        this.addEvent();

    }

    // 检测平台
    private checkPlatform(): void {
        if (DeviceUtil.isQQMiniGame()) {
            this.changeHomeBtnSkinQQ();
        }
    }

    // 检查是否该打开签到页面
    private checkOpenSignPage(): void {
        // 是否是新玩家
        // let isNewPlayer = PlayerDataMgr.getInstance().bIsNewPlayer;
        // if (!isNewPlayer && BaseConst.infos.gameInfo.openPsAward == 1 && PlayerDataMgr.getInstance().isSigned()) {
        //     this.showSignView();
        // }
        if (DeviceUtil.isQQMiniGame() && BaseConst.infos.gameInfo.openPsAward && PlayerDataMgr.getInstance().isSigned()) {
            this.showSignView();
        }
        // this.addEvent();
    }

    private changeHomeBtnSkinQQ(): void {
        let arr: Array<laya.ui.Image> = [this.imageBtStartGame, this.imageBtChoseLevel, this.imageBtShare, this.imageBtInvital, this.imageBtSign];
        for (let obj of arr) {
            let skin = obj.skin;
            obj.skin = skin.replace(/.png/, "_qq.png");
        }
    }

    public onRemoved() {
        this._bIsRunning = false;
        super.onRemoved();
        this.removeEvent();
        Laya.Tween.clearAll(this.imageBtStartGame);
        //回归原位
        this.imageBtShare.x = this.imageBtChoseLevel.x = this.imageBtSign.x = this.imageBtInvital.x = 454;
        this.imageBtShare.centerY = this.imageBtChoseLevel.centerY = this.imageBtSign.centerY = this.imageBtInvital.centerY = -340;
    }

    public addEvent() {
        this.registerEvent(this.imageBtStartGame, Laya.Event.CLICK, this.homeStartGame, this);
        this.registerEvent(this.btn_more, Laya.Event.CLICK, this.onMoreMiniGame, this);
        this.registerEvent(this.imageBtChoseLevel, Laya.Event.CLICK, this.openLevelView, this);
        this.registerEvent(this.imageBtSign, Laya.Event.CLICK, this.openSignView, this);
        this.registerEvent(this.imageBtShare, Laya.Event.CLICK, this.onGameHomeShare, this);
        // this.registerEvent(this.imageBtAttSp, Laya.Event.CLICK, this.onInvite, this);
        this.registerEvent(this.imageBtInvital, Laya.Event.CLICK, this.onInvite, this);
        this.registerEvent(this.imageWeCatMoreGame, Laya.Event.CLICK, this.openChouTi, this);
        this.registerEvent(this.more_games, Laya.Event.CLICK, this.wxShowMoreMiniGame, this);
        this.registerEvent(this.back_btn, Laya.Event.CLICK, this.wxShowMoreMiniGame, this);
        this.registerEvent(this.imageBgGetGlod, Laya.Event.CLICK, this.getFreeGlods, this);
        this.registerEvent(this.btn_oppo_moregame, Laya.Event.CLICK, this.jumpLeisureSubject, this);
    }
    jumpLeisureSubject() {
        MiniGameMgr.instance.jumpLeisureSubject();
    }

    private onMoreMiniGame(): void {
        if (DeviceUtil.isQQMiniGame()) {
            MiniGameMgr.instance.showAdBox();
        } else if (DeviceUtil.isTTMiniGame()) {
            MiniGameMgr.instance.showMoreGamesModel();
        }
    }

    public removeEvent() {
        super.removeEvent();
    }

    /**
     * 显示更多游戏
     */
    private wxShowMoreMiniGame(): void {
        ViewManager.getInstance().showView(MoreGameOperRequestTwo);
    }

    /**打开抽屉界面*/
    private openChouTi() {
        ViewManager.getInstance().showView(WeCatMoreGameView);
        // ViewManager.getInstance().showView(MoreGameView);
    }

    /**开始游戏 */
    private homeStartGame() {
        if (DeviceUtil.isQQMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
            ViewManager.getInstance().showView(SuccessfulEntryOneQQView, {
                success: () => {
                    PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, 100);
                    PlayerDataMgr.getInstance().showTips("金币+" + 100);
                    this.gameStart();
                }, fail: () => {
                    this.gameStart();

                }, isSuccess: false
            })
        } else {
            this.gameStart();
        }
    }

    public gameStart() {
        ResUtil.getIntance().loadGroups(['success', 'game']);
        SoundMgr.getInstance().playEffect("button", 1);

        if (PlayerDataMgr.getInstance().stPlayerDataBase.nMaxLevel >= PlayerDataMgr.getInstance().nMaxLevelCount
            && BaseConst.infos.gameInfo.succShowBox < 1 && DeviceUtil.isQQMiniGame()) {//加上配置 qq上
            TipsManager.getInstance().showDefaultTips("已通关所有关卡，请明日再来!");
            return
        }

        //ViewChangeManager.getInstance().getCommonView().removeSelf();
        let nSpCost = 1;
        let stGameConfig = ConfigMgr.getInstance().getGCDBID(8);
        if (stGameConfig) {
            nSpCost = parseInt(stGameConfig.strValue);
        }
        //检测体力是否足够
        let b = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, nSpCost);
        if (!b) {

            GameManager.instance.onPowerNotEnough()
            return;
        }
        ViewChangeMgr.getInstance().commonView.removeBtEvent();
        //扣除体力
        PlayerDataMgr.getInstance().subProp(PType.e_GType_Sp, nSpCost);

        //为了头条的提审 隐藏binner可能会有延迟 
        if (DeviceUtil.isTTMiniGame()) {
            MiniGameMgr.instance.hideBannerAd();
        }
        //开始游戏
        //2020.7.13-2-4
        // if (ConfigMgr.getInstance().isWeCatMiniGame()
        //     && PlayerDataMgr.getInstance().isSecondEnterGame()
        //     && BaseConst.infos.gameInfo.openPsAward == 1) {
        //     this.wxOper71324();
        // } else {
        //2020.7.13-1-1
        this.enterOper();
        //}
        //开始游戏
        // ViewChangeMgr.getInstance().CurLevelBasea.startGame();
        this.removeSelf();
    }

    //2020.7.13-1-1
    private enterOper() {
        //2020.7.13-1-1  1.从第4关后，每关开始游戏都会弹砸金蛋误点。
        if (ConfigMgr.getInstance().isWeCatMiniGame()
            && PlayerDataMgr.getInstance().getCurGuanQia() >= BaseConst.infos.gameInfo.splevel
            && BaseConst.infos.gameInfo.openPsAward == 1) {
            // PlayerDataManager.getInstance().bEnterGameFromGameHome = true;
            // ViewManager.getInstance().showView(SuccessfulEntryOneView);
            ViewChangeMgr.getInstance().CurLevelBasea.startGame();
        } else {
            ViewChangeMgr.getInstance().CurLevelBasea.startGame();
        }
    }

    //2020.7.13-2-4
    private wxOper71324() {
        if (!ConfigMgr.getInstance().isWeCatMiniGame()) {
            return;
        }
        if (!PlayerDataMgr.getInstance().isSecondEnterGame()) {
            return;
        }
        //删除事件
        this.removeEvent();
        let self = this;
        MiniGameMgr.instance.playVideoAd({
            successFun: () => {
                self.enterOper();
            },
            failFun: () => {
                self.enterOper();
            },
            errorFun: () => {
                self.enterOper();
            }
        });
    }

    /**初始化界面 */
    public initView() {
        AddPowerView._bCloseBinner = false;
        MiniGameMgr.instance.showBanner({ className_key: this.className_key });
        this._bIsRunning = true;
        this.startGameAni();
        this.startRedAnimation();
        this.PlInitView();
        this.checkOpenSignPage();
        BitmapLabelUtils.setLabel(this.spLevelNum, PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia().toString(), "resource/assets/img/ui/gamehome/maininterface_number1/maininterface_number1_", 0, ".png", "center");
        // this.addChild(ViewChangeManager.getInstance().getCommonView());
        if (DeviceUtil.isWXMiniGame()) {
            //this.imageHead.skin = "resource/assets/img/ui/gamehome/maininterface_logo_1.png";
            this.imageHead.visible = false;
        } else if (DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) {
            //this.imageHead.skin = "resource/assets/preloading/loading_logo_4.png";
        }
        //审核关掉免费领取金币

        //按钮飞出
        let arr: Array<laya.ui.Image> = [this.imageBtChoseLevel, this.imageBtShare, this.imageBtInvital, this.imageBtSign];
        let arrpos: Array<any> = [{ x: 87, centerY: -100 }, { x: 325, centerY: 0 }, { x: 563, centerY: 0 }, { x: 801, centerY: -100 }];
        if (DeviceUtil.isTTMiniGame()) {
            arrpos = [{ x: 87, centerY: -120 }, { x: 440, centerY: -40 }, { x: 440, centerY: -40 }, { x: 801, centerY: -120 }];
        }
        else if (DeviceUtil.isVIVOMiniGame()) {
            arrpos = [{ x: 87, centerY: -120 }, { x: 440, centerY: 0 }, { x: 440, centerY: 0 }, { x: 801, centerY: -120 }];
            this.imageBtShare.visible = false;
        }
        else if (DeviceUtil.isNative()) {
            arrpos = [{ x: 325, centerY: 0 }, { x: 440, centerY: 0 }, { x: 440, centerY: 0 }, { x: 563, centerY: 0 }];
            this.imageBtShare.visible = false;
            this.imageBtInvital.visible = false;
        }
        else if (DeviceUtil.isOPPOMiniGame()) {
            arrpos = [{ x: 87, centerY: -120 }, { x: 440, centerY: 0 }, { x: 440, centerY: 0 }, { x: 801, centerY: -120 }];
            this.imageBtShare.visible = false;
            this.imageBtInvital.visible = false;
        }
        Laya.timer.loop(200, this, this.showBtnfly, [arr, arrpos]);


        if (BaseConst.infos.gameInfo.openPsAward == 0) {

            this.back_btn.visible = this.more_games.visible = this.imageWeCatMoreGame.visible
                = this.imageBtShare.visible = this.imageBtChoseLevel.visible = this.imageBtSign.visible
                = this.imageBtInvital.visible
                = false;
        }

        if (BaseConst.infos.gameInfo.for_pay == 0) {
            this.imageBgGetGlod.visible = false;
        }

        if (DeviceUtil.isVIVOMiniGame()) {
            let vvHomeScene: VVHomeScene = this.getChildByName("platformScene") as VVHomeScene;
            if (vvHomeScene == null) {
                vvHomeScene = new VVHomeScene();
                vvHomeScene.name = 'platformScene';
            }
            this.addChild(vvHomeScene);
            this.imageBgGetGlod.visible = false;
        } else if (DeviceUtil.isOPPOMiniGame()) {
            let oppoHomeScene: OppoHomeScene = this.getChildByName("platformScene") as OppoHomeScene;
            if (oppoHomeScene == null) {
                oppoHomeScene = new OppoHomeScene();
                oppoHomeScene.name = 'platformScene';
            }
            this.addChild(oppoHomeScene);
            this.imageBgGetGlod.visible = false;
        }

        if (BaseConst.infos.gameInfo.for_pay == 0) {
            this.imageBgGetGlod.visible = false;
        }
        let self = this;
        if (!self._guessLike && ConfigMgr.getInstance().isWeCatMiniGame()) {//微信需要增加滑动推荐
            MiniGameMgr.instance.createGuessLikeView(self).then((guessLike) => {
                if (!guessLike) {
                    return;
                }
                self._guessLike = guessLike;
                self._guessLike.x = (Laya.stage.width - self._guessLike.width) / 2;
                self._guessLike.y = 250;
            });
        }
        // Laya.Tween.to(this.imageBtShare,{x:87,centerY:0},500);
        // Laya.Tween.to(this.imageBtChoseLevel,{x:325,centerY:0},1000);
        // Laya.Tween.to(this.imageBtSign,{x:563,centerY:0},1500);
        // Laya.Tween.to(this.imageBtInvital,{x:801,centerY:0},2000);
        ViewChangeMgr.getInstance().restartEnterGameHome();
        this.btn_oppo_moregame.visible = false;
        if (DeviceUtil.isNative()) {
            this.btn_oppo_moregame.visible = true;
        }
    }
    private btn_oppo_moregame: Laya.Image

    private cIndex: number = 0;
    /**
     * 按钮飞出
     */
    private showBtnfly(arr, arrpos): void {
        Laya.Tween.to(arr[this.cIndex], arrpos[this.cIndex], 500);
        this.cIndex++;
        if (this.cIndex == 4) {
            Laya.timer.clear(this, this.showBtnfly);
            this.cIndex = 0;
        }
    }

    /**打开选关界面 */
    private openLevelView() {
        SoundMgr.getInstance().playEffect("button", 1);
        ViewChangeMgr.getInstance().showBufLoadingView();
        ResUtil.getIntance().loadGroups(["levelview"], () => {
            LevelView.homeView = this;
            ViewManager.getInstance().showView(LevelView);
            ViewChangeMgr.getInstance().hideBufLoadingView();
        });

        //ViewManager.getInstance().showView(SuccessfulEntryThreeView);
    }

    /**打开签到界面 */
    private openSignView() {
        SoundMgr.getInstance().playEffect("button", 1);
        this.showSignView();
        //ViewManager.getInstance().showView(SuccessfulEntryThreeView);
    }

    /**分享 */
    private onGameHomeShare() {
        SoundMgr.getInstance().playEffect("button", 1);
        MiniGameMgr.instance.flagDouYin = false;
        MiniGameMgr.instance.shareAppMsg();
        // MiniGameMgr.instance.shareAppMessage({
        //     sucFun: () => {
        //         console.log("分享成功");
        //         TipsManager.getInstance().showDefaultTips('分享成功'); 
        //     },
        //     failFun:()=>{
        //         console.log("分享失败");
        //         TipsManager.getInstance().showDefaultTips('分享失败'); 
        //     }
        // });
        //ViewManager.getInstance().showView(FailEntryErView);
    }

    private onInvite() {
        SoundMgr.getInstance().playEffect("button", 1);
        ViewChangeMgr.getInstance().showBufLoadingView();
        ResUtil.getIntance().loadGroups(["invite"], () => {
            ViewManager.getInstance().showView(InviteView);
            ViewChangeMgr.getInstance().hideBufLoadingView();
        });
        //ViewManager.getInstance().showView(FailEntryYiView);
    }

    private startGameAni() {
        if (!this._bIsRunning) {
            return;
        }
        // Laya.Tween.clearAll(this.imageBtStartGame);
        // Laya.Tween.to(this.imageBtStartGame, { scaleX: 1.1, scaleY: 1.1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, (args) => {
        //     Laya.Tween.to(this.imageBtStartGame, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, (args) => {
        //         Laya.timer.once(0, this, this.startGameAni);
        //     }));
        // }));
        Laya.timer.clearAll(this.imageBtStartGame);
        AnimationMgr.instance.zoomTweena(this.imageBtStartGame, this.imageBtStartGame, 0.12);
    }

    /**平台界面的刷新 */
    private PlInitView() {
        if (DeviceUtil.isTTMiniGame()) {
            this.imageBtInvital.visible = false;
            // this.boxFun.width = 650;
        }
    }

    /**判断下是否弹出签到 */
    private showSignView() {
        ViewChangeMgr.getInstance().showBufLoadingView();
        ResUtil.getIntance().loadGroups(["sign"], () => {
            if (DeviceUtil.isOPPOMiniGame()) {
                ViewManager.getInstance().showView(SignOppoView);
            } else {
                ViewManager.getInstance().showView(SignPopView);
            }
            ViewChangeMgr.getInstance().hideBufLoadingView();
        });
    }



    private weCatViewOper() {
        //    ViewManager.getInstance().showView(WeCatMoreGameView);
        this.wxShowMoreMiniGame();
    }

    /**获得免费的金币 */
    private getFreeGlods() {
        SoundMgr.getInstance().playEffect("button", 1);
        if (DeviceUtil.isMiniGame()) {
            let self = this;
            MiniGameMgr.instance.playVideoAd({
                successFun: () => {
                    this.addGFold();
                },
                failFun: () => {
                },
                errorFun: () => {
                }
            });
        } else {
            this.addGFold();
        }

    }

    private addGFold() {
        let nGlodCount = 200;
        let stGameConfig = ConfigMgr.getInstance().getGCDBID(19);
        if (stGameConfig) {
            nGlodCount = parseInt(stGameConfig.strValue);
        }
        PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, nGlodCount);
    }

    /**小红点的动画 */
    private startRedAnimation() {
        if (!this._bIsRunning) {
            return;
        }
        // Laya.Tween.clearAll(this.imageRed);
        // Laya.Tween.to(this.imageRed, { scaleX: 1.1, scaleY: 1.1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, (args) => {
        //     Laya.Tween.to(this.imageRed, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, (args) => {
        //         Laya.timer.once(0, this, this.startRedAnimation);
        //     }));
        // }));
        Laya.timer.clearAll(this.imageRed);
        AnimationMgr.instance.zoomTweena(this.imageRed, this.imageRed);

    }
}
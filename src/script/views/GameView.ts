import GameStatusMgr from "../games/GameStateManager";
import { EGType } from "../games/CommonDefine";
import ViewChangeMgr from "../games/ViewChangeManager";
import { GEvent } from "../games/GameEvent";
import { PlayerDataMgr } from "../common/GameDataManager";
import { ConfigMgr } from "../games/ConfigManager";
import { LevelMgr } from "../manager/LevelManager";
import SoundMgr from "../common/SoundManager";

import PlatformDY from "../../PlatformDY";
import AddPowerView from "./game/pop/AddPsView";
import { MiniGameMgr } from "../minigame/MiniGameMgr";
import { PopBaseScene } from "./base/PopBaseScene";
import AnimationMgr from "../manager/AnimationManager";
import GuessYouLike from "./game/wechat/GuessLike";
import WeCatMoreGameView from "./game/wechat/WeCatMoreGameView";
import GameConfig from "../../GameConfig";
import GuessLike from "./game/wechat/GuessLike";
import SuccessfulEntryOneQQView from "./game/settlement/SuccessfulEntryOneQQView";

export default class GameViewCap extends PopBaseScene {
    className_key = "GameView";
    public bg_img_res = null;

    //public grp_center:Laya.Box;
    public grp_center: Laya.Box;
    public boxBtList: Laya.Box;
    public imageBtGotoNextLevel: Laya.Image;
    public imageBtTip: Laya.Image;
    public imageBtRestart: Laya.Image;
    public imageBtToHome: Laya.Image;
    public hBoxIndex: Laya.HBox;
    public box_choose: Laya.Box;
    public icon_chooseLeft: Laya.Image;
    public icon_chooseRight: Laya.Image;
    public icon_left: Laya.Image;
    public icon_right: Laya.Image;
    public spNum: Laya.Sprite;
    public imageSpFull: Laya.Image;
    public imageBtAttSp: Laya.Image;
    public stLableTime: Laya.Label;
    public imageBtGoldAdd: Laya.Image;
    public glodNum: Laya.Sprite;
    public spLevelLeft: Laya.Sprite;
    public spLevelRight: Laya.Sprite;
    public icon_chooseLeft_shdow: Laya.Image;
    public icon_chooseRight_shdow: Laya.Image;
    public imageHand: Laya.Image;
    public boxLevelInfo: Laya.HBox;
    public imageTTVideo: Laya.Image;
    public icon_choseCoverUpRight: Laya.Image;
    public icon_choseCoverUpLeft: Laya.Image;
    public wxBtnTip: Laya.Sprite;

    public imageWeCatMoreGame: Laya.Image;

    //一些数据控制
    public _bHanderAniShow: boolean;
    public _bIsRunning: boolean;

    //当前关卡是否已经结束
    public _bLevelOver: boolean;

    constructor() {
        super();
        this._bHanderAniShow = false;
        this._bIsRunning = false;
        this._bLevelOver = false;
        this.skin = "game/GameView.json";
        this.createGameOverEffect();
    }

    public initMiniGame() {
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
        //tt 1、分享提示变成看视频提示，跳关功能去掉。
        if (DeviceUtil.isTTMiniGame()) {
            (this.imageBtTip.getChildAt(0) as Laya.Image).skin = "resource/assets/img/common/common_icon_2.png";
            this.imageBtGotoNextLevel.visible = false;
        }
        if (DeviceUtil.isWXMiniGame()) {
            // this.wxBtnTip.visible = true;
            EffectUtil.showScaleFix(this.wxBtnTip, 1.3);
        }

        if (DeviceUtil.isWXMiniGame() && BaseConst.infos.gameInfo.openPsAward == 0) {
            this.boxBtList.visible = false;
            // this.boxLevelInfo.top = 80;
        } else {
            // this.boxBtList.visible = false;
        }
        if (DeviceUtil.isTTMiniGame()) {
            MiniGameMgr.instance.hideBannerAd();
        } else if (DeviceUtil.isQQMiniGame()) {
            MiniGameMgr.instance.showBanner({});
        } else if (DeviceUtil.isWXMiniGame()) {
            //MiniGameMgr.instance.hideBannerAd();
            MiniGameMgr.instance.showBanner({});
        } else if (DeviceUtil.isVIVOMiniGame()) {
            this.showBanner({ className_key: this.className_key });
        } else if (DeviceUtil.isOPPOMiniGame()) {
            this.showBanner({ className_key: this.className_key });
        }
    }
    private _guessLike: GuessLike;//推广位

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this._bIsRunning = false;
        Laya.Tween.clearAll(this.imageBtTip);
        Laya.timer.clearAll(this);
    }

    public initView() {
        this.initOperView();
        AddPowerView._bCloseBinner = true;
        MiniGameMgr.instance.showChaPinAd();
        EventMgr.getInstance().addEvent(GEvent.C_V_IMG, this, this.stopVideoImage);

        this.initPlView();
        this._bLevelOver = false;
        this._bIsRunning = true;
        //this.refreshUpIndeInfo(2,3);
        this.refreshChooseContext();
        this.startimageBtTipAni();
        // this.refreshSPValue();
        // this.refreshGoldValue();
        // this.refreshTimeView();
        this.wxBtnTip.visible = false;
        this.imageBtTip.visible = false;
        this.imageBtGotoNextLevel.visible = false;
        if (DeviceUtil.isQQMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
            this.img_video.visible = false;
            this.img_tip.centerX = 0;
        }
    }

    private img_video: Laya.Image;
    private img_tip: Laya.Image;

    /**初始化一下选择的的显示 */
    public refreshChooseContext() {
        this.box_choose.visible = false;
        this.initViewInfo();
    }

    private pWeCatMoreGameView: WeCatMoreGameView;
    private initOperView() {
        //2020.7.13-2
        if (ConfigMgr.getInstance().isWeCatMiniGame()) {
            if (PlayerDataMgr.getInstance().isSecondEnterGame()) {
                Laya.timer.once(1000, this, () => {
                    this.pWeCatMoreGameView = ViewManager.getInstance().showView(WeCatMoreGameView) as WeCatMoreGameView;
                    this.registerEvent(this.imageWeCatMoreGame, Laya.Event.CLICK, this.weCatViewOper, this);
                    this.imageWeCatMoreGame.visible = true;
                });
            } else {
                this.imageWeCatMoreGame.visible = true;
                this.registerEvent(this.imageWeCatMoreGame, Laya.Event.CLICK, this.weCatViewOper, this);
            }
        }
        // else {
        //     this.registerEvent(this.imageWeCatMoreGame,Laya.Event.CLICK,this.weCatViewOper,this);
        // }
    }

    //2020.7.13-2
    private weCatViewOper() {
        this.pWeCatMoreGameView = ViewManager.getInstance().showView(WeCatMoreGameView) as WeCatMoreGameView;
    }

    public closeWeCatMoreGameView() {
        if (!ConfigMgr.getInstance().isWeCatMiniGame()) {
            return;
        }
        if (WeCatMoreGameView.isOpen && this.pWeCatMoreGameView) {
            this.pWeCatMoreGameView.removeSelf();
        }
    }

    public addEvent() {
        this.registerEvent(this.imageBtToHome, Laya.Event.CLICK, this.onBtnClick, this)
        this.registerEvent(this.imageBtTip, Laya.Event.CLICK, this.onBtnClick, this)
        this.registerEvent(this.wxBtnTip, Laya.Event.CLICK, this.onBtnClick, this)
        this.registerEvent(this.imageBtRestart, Laya.Event.CLICK, this.onBtnClick, this)
        this.registerEvent(this.imageBtGotoNextLevel, Laya.Event.CLICK, this.onBtnClick, this)

    }

    private onBtnClick(evt: Laya.Event) {
        switch (evt.currentTarget) {
            case this.imageBtToHome:
                this.returnToHome()
                break
            case this.imageBtTip:
                this.onGameViewShareGame()
                break
            case this.wxBtnTip:
                this.onGameViewShareGame()
                break
            case this.imageBtRestart:
                this.gameViewRestartGame()
                break
            case this.imageBtGotoNextLevel:
                this.onGameViewWatchVideoNextLevel()
                break
        }
    }
    public removeEvent() {
        // this.imageBtToHome.off(Laya.Event.CLICK, this, this.returnToHome);
        // this.icon_chooseLeft.off(Laya.Event.MOUSE_DOWN, this, this.onClick);
        // this.icon_chooseRight.off(Laya.Event.MOUSE_DOWN, this, this.onClick);
        // this.imageBtTip.off(Laya.Event.CLICK, this, this.onGameViewShareGame);
        // this.wxBtnTip.off(Laya.Event.CLICK, this, this.onGameViewShareGame);
        // this.imageBtRestart.off(Laya.Event.CLICK, this, this.gameViewRestartGame);
        // this.imageBtGotoNextLevel.off(Laya.Event.CLICK, this, this.onGameViewWatchVideoNextLevel);
        EventMgr.getInstance().removeEvent(GEvent.C_V_IMG, this, this.stopVideoImage);
        super.removeEvent();
        //this.removeEnentUpdateView();
    }

    /**下一关 */
    private onGameViewWatchVideoNextLevel() {
        SoundMgr.getInstance().playEffect("button", 1);
        MiniGameMgr.instance.playVideoAd({
            gameConstKey: 'GameNext',
            successFun: () => {
                this.onGameViewNextLevel();
            }
        });

    }

    private onGameViewNextLevel() {
        if (this._bLevelOver) {
            return;
        }
        ViewChangeMgr.getInstance().goToNextLevel();
    }

    /**重新开始游戏 */
    private gameViewRestartGame() {
        SoundMgr.getInstance().playEffect("button", 1);
        if (this._bLevelOver) {
            return;
        }
        ViewChangeMgr.getInstance().restartGame(true);
    }

    /**返回主页 */
    private returnToHome() {
        SoundMgr.getInstance().playEffect("button", 1);
        GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_GH;
        ViewChangeMgr.getInstance().CurLevelBasea.returnToHome();
        this.removeSelf();
    }

    public onClick(evt: Laya.Event) {
        SoundMgr.getInstance().playEffect("button", 1);
        let tar = (evt.currentTarget as Laya.Image)
        let data = this.viewData_.data;
        let icon_name = ''
        switch (evt.currentTarget) {
            case this.icon_chooseLeft:
                icon_name = data.chooseLeftName;
                this._chooseLeft = 'left';
                this.icon_chooseRight.off(Laya.Event.MOUSE_DOWN, this, this.onClick);//关闭右边的事件
                this.icon_choseCoverUpLeft.visible = true;
                break;
            case this.icon_chooseRight:
                icon_name = data.chooseRightName;
                this._chooseLeft = 'right';
                this.icon_chooseLeft.off(Laya.Event.MOUSE_DOWN, this, this.onClick);//关闭左边的点击事件
                this.icon_choseCoverUpRight.visible = true;
                break;
        }
        ViewChangeMgr.getInstance().CurLevelBasea._isPop = false;
        this.viewData_.callBack(icon_name == data.rightName, icon_name);
        // tar.skin = 'resource/assets/img/level/baseboard2.png';
        //this.mouseEnabled = false;
        this.imageBtTip.visible = false;
        this.imageBtGotoNextLevel.visible = false;
        //重置一下手相关的数据
        // this.initViewInfo();
    }

    public _chooseLeft: 'left' | "right" = null

    /**
     * 显示正确或者错误
     */
    public showResultIcon(isRight: boolean) {
        this.createChooseAnswer(isRight)
        if (isRight) {
            SoundMgr.getInstance().playEffect("right", 1);
            Laya.timer.once(1000, this, () => {

                this.hideChoseView()
            })
        } else {
            SoundMgr.getInstance().playEffect("wrong", 1);
        }
    }

    public createChooseAnswer(isRight: boolean) {
        let tar: Laya.Image;
        let skin = 'resource/assets/img/ui/game/gameinterface_icon_4.png';
        if (!isRight) {
            skin = 'resource/assets/img/ui/game/gameinterface_icon_5.png';
        }
        if (this._chooseLeft == 'left') {
            tar = this.icon_choseCoverUpLeft;
        } else {
            tar = this.icon_choseCoverUpRight;

        }
        let img = new Laya.Image();
        img.skin = skin;
        img.centerX = img.centerY = 0;
        tar.addChild(img);
    }

    public showChoseView(data: any) {
        if (DeviceUtil.isWXMiniGame()) {
            //this.wxBtnTip.visible = true;
        }
        this.imageBtTip.visible = true;
        if (!DeviceUtil.isTTMiniGame()) {
            this.imageBtGotoNextLevel.visible = true;
        }
        //展示的时候初始化数据
        this.initViewInfo();
        this.viewData_ = data;
        this.box_choose.visible = true;
        this.refreshViewChoose();
        this.icon_chooseLeft.once(Laya.Event.MOUSE_DOWN, this, this.onClick);
        this.icon_chooseRight.once(Laya.Event.MOUSE_DOWN, this, this.onClick);
        //ViewChangeManager.getInstance().CommonView.removeBtEvent();
    }

    public hideChoseView() {
        if (DeviceUtil.isWXMiniGame()) {
            this.wxBtnTip.visible = false;
        }
        this.imageBtTip.visible = false;
        this.imageBtGotoNextLevel.visible = false;
        Laya.Tween.to(this.box_choose, { scaleX: 0, scaleY: 0 }, 500, Laya.Ease.backIn);
        this.box_choose.visible = false;
        this.icon_chooseLeft.off(Laya.Event.MOUSE_DOWN, this, this.onClick);
        this.icon_chooseRight.off(Laya.Event.MOUSE_DOWN, this, this.onClick);
        //隐藏的时候初始化数据的时候初始化数据
        this.initViewInfo();
        // ViewChangeManager.getInstance().CommonView.addBtEvent();
    }

    public refreshViewChoose() {
        //this.mouseEnabled = true;
        this.box_choose.scale(0.2, 0.2);
        Laya.Tween.to(this.box_choose, { scaleX: 1, scaleY: 1 }, 500, Laya.Ease.backIn);
        //this.icon_chooseRight.skin = 'resource/assets/img/level/baseboard1.png';
        this.icon_choseCoverUpRight.removeChildren();
        //this.icon_chooseRight.removeChildren();
        this.icon_choseCoverUpLeft.removeChildren();
        //this.icon_chooseLeft.skin = 'resource/assets/img/level/baseboard1.png';
        //this.icon_chooseLeft.removeChildren();
        this.icon_choseCoverUpRight.visible = false;
        this.icon_choseCoverUpLeft.visible = false;
        this.icon_left.skin = 'resource/assets/img/choose/' + this.viewData_.data.icon_chooseLeft + '.png'
        this.icon_right.skin = 'resource/assets/img/choose/' + this.viewData_.data.icon_chooseRight + '.png';
    }

    public removeSelf() {
        // GameManager.instance.showTopBar(ShowType.showAll)
        return super.removeSelf();
    }

    /****************************游戏顶部的节数更新**************************** */
    public refreshUpIndeInfo(nIndexCur: number, nIndexMax: number) {
        let nIndexTemp = 0;
        //刷新左右两边的关卡数值
        let nCur = PlayerDataMgr.getInstance().stPlayerDataBase.nCurLevel;
        nCur = nCur >= PlayerDataMgr.getInstance().nMaxLevelCount ? PlayerDataMgr.getInstance().getCurGuanQiaMax() - 1 : nCur;
        this.spLevelLeft.destroyChildren();
        this.spLevelRight.destroyChildren();
        let nNumLefc = 0;
        let nNumRight = 0;
        nNumLefc = this.spLevelLeft.numChildren;
        nNumRight = this.spLevelRight.numChildren;

        // //为了头条提审的修改
        //if(DeviceUtil.isTTMiniGame() && BaseConst.infos.gameInfo.openPsAward == 0){
        // if(BaseConst.infos.gameInfo.openPsAward == 0){
        //     if(PlayerDataManager.getInstance().stPlayerDataBase.nCurLevel != PlayerDataManager.getInstance().getCurLevelMax()){
        //         nCur -= 1;
        //         nCur  = nCur < 0 ? 0 : nCur;
        //     }
        // }

        nNumLefc = nCur + 1;
        nNumRight = nCur + 2;

        BitmapLabelUtils.setLabel(this.spLevelLeft, nNumLefc.toString(), "resource/assets/img/ui/game/gameinterface_number1/gameinterface_number1_", 0, ".png", "center");
        BitmapLabelUtils.setLabel(this.spLevelRight, nNumRight.toString(), "resource/assets/img/ui/game/gameinterface_number1/gameinterface_number1_", 0, ".png", "center");
        nNumLefc = this.spLevelLeft.numChildren;
        nNumRight = this.spLevelRight.numChildren;
        this.showMiniLevel(nIndexMax, nIndexCur, nIndexTemp);
        if (nIndexTemp >= nIndexMax) {
            this._bLevelOver = true;
        }
        //刷新下长度
        this.boxLevelInfo.width = 108 + 20 + this.hBoxIndex.width + 20 + 108;
    }


    private showMiniLevel(nIndexMax: number, nIndexCur: number, nIndexTemp: number) {
        let nCount = this.hBoxIndex.numChildren;
        for (let i = 0; i < nCount; ++i) {
            let stImageInfo = this.hBoxIndex.getChildAt(i) as Laya.Image;
            if (stImageInfo) {
                //显示小结
                if (i < nIndexMax) {
                    stImageInfo.visible = true;
                } else {
                    stImageInfo.visible = false;
                }
                //显示小结完成的进度
                let pImageFinish = stImageInfo.getChildAt(0) as Laya.Image;
                if (pImageFinish) {
                    if (i < nIndexCur) {
                        pImageFinish.visible = true;
                        ++nIndexTemp;
                    } else {
                        pImageFinish.visible = false;
                    }
                }
            }
        }
    }
    /**提示相关的功能*/
    private onGameViewShareGame() {
        SoundMgr.getInstance().playEffect("button", 1);
        if (!this.box_choose.visible && !this._bHanderAniShow) {
            console.log("box choose not show!");
            return;

        }
        if (DeviceUtil.isQQMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
            ViewManager.getInstance().showView(SuccessfulEntryOneQQView, {
                success: () => {
                    this.onShareGameSuccess();
                }, fail: () => {
                }, isSuccess: false
            })
            return;
        }
        if (DeviceUtil.isTTMiniGame() || DeviceUtil.isVIVOMiniGame() || DeviceUtil.isQQMiniGame() || DeviceUtil.isOPPOMiniGame() || DeviceUtil.isNative()) {
            //tt采用视频
            MiniGameMgr.instance.playVideoAd({
                gameConstKey: 'GameTip',
                successFun: () => {
                    this.onShareGameSuccess();
                }
            });
            return
        }

        //TODO 分享
        if (DeviceUtil.isMiniGame()) {
            let self = this;
            MiniGameMgr.instance.flagDouYin = false;
            MiniGameMgr.instance.shareAppMsg({
                sucFun: () => {
                    self.onShareGameSuccess();
                }
            });
        } else {
            this.onShareGameSuccess();
        }

    }

    /**分享成功后的操作 */
    private onShareGameSuccess() {
        let data = ViewChangeMgr.getInstance().CurLevelBasea.getCurChoosedInfo();
        let nHandX = 0;
        let nHandY = 0;
        if (!data) {
            return;
        }
        if (data.chooseLeftName == data.rightName) { //如果正确值是左边
            //this.icon_chooseRight.skin = 'resource/assets/img/ui/game/gameinterface_baseboard_1.png';
            this.icon_choseCoverUpRight.visible = false;
            this.icon_chooseRight.off(Laya.Event.MOUSE_DOWN, this, this.onClick);//关闭右边的点击事件
            nHandX = this.icon_chooseLeft.x + this.icon_chooseLeft.width / 2;
            nHandY = this.icon_chooseLeft.y + this.icon_chooseLeft.height / 2;
        } else { //反之遮住左边
            // this.icon_chooseLeft.skin = 'resource/assets/img/ui/game/gameinterface_baseboard_1.png';
            this.icon_choseCoverUpLeft.visible = false;
            nHandX = this.icon_chooseRight.x + this.icon_chooseRight.width / 2;
            nHandY = this.icon_chooseRight.y + this.icon_chooseRight.height / 2;
            this.icon_chooseLeft.off(Laya.Event.MOUSE_DOWN, this, this.onClick);//关闭左边的点击事件
        }
        //显示小手
        this.imageHand.x = nHandX;
        this.imageHand.y = nHandY;
        this._bHanderAniShow = true;
        this.imageHand.visible = true;
        //手的一个小动画
        this.handAni();
    }

    /**小手的动画 */
    private handAni() {
        if (!this._bHanderAniShow) {
            return;
        }
        this.imageHand.skin = "resource/assets/img/ui/game/gameinterface_icon_1.png";
        Laya.timer.once(500, this, () => {
            this.imageHand.skin = "resource/assets/img/ui/game/gameinterface_icon_2.png";
            Laya.timer.once(500, this, this.handAni);
        })
    }
    /**初始化数据 */
    private initViewInfo() {
        // this.icon_chooseLeft_shdow.visible = false;
        // this.icon_chooseRight_shdow.visible = false;
        this.imageHand.visible = false;
        this._bHanderAniShow = false;
        this._bLevelOver = false;
    }

    private startimageBtTipAni() {
        if (!this._bIsRunning) {
            return;
        }
        // Laya.Tween.clearAll(this.imageBtTip);
        // Laya.Tween.to(this.imageBtTip, { scaleX: 1.1, scaleY: 1.1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, (args) => {
        //     Laya.Tween.to(this.imageBtTip, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, (args) => {
        //         Laya.timer.once(0, this, this.startimageBtTipAni);
        //     }));
        // }));
        Laya.timer.clearAll(this.imageBtTip);
        AnimationMgr.instance.zoomTweena(this.imageBtTip, this.imageBtTip);
    }

    /**头条平台的界面初始化 */
    private initPlView() {
        if (DeviceUtil.isTTMiniGame()) {
            this.imageTTVideo.visible = true;
        }
    }

    /**开始录屏的界面设置*/
    public startVideoImage() {
        this.imageTTVideo.skin = "resource/assets/img/common/gaming_icon_4.png";
    }

    /**关闭视频录制 */
    public stopVideoImage() {
        console.log("stopVideoImage");
        this.imageTTVideo.skin = "resource/assets/img/common/gaming_icon_5.png";
    }

    background: Laya.Image
    imgText: Laya.Image
    /**创建结束黑幕 */
    private createGameOverEffect() {
        let stage = Laya.stage;
        this.background = new Laya.Image;
        this.background.skin = "resource/assets/img/common/hm.png";
        this.background.centerX = this.background.centerY = 0;
        this.background.width = stage.width;
        this.background.height = stage.height;
        this.addChild(this.background);

        this.imgText = new Laya.Image;
        this.imgText.centerX = 0;
        this.imgText.y = Laya.stage.height * 0.30 + this.imgText.height / 2;
        this.background.addChild(this.imgText);
        this.setChildIndex(this.background, 0);
        this.background.visible = this.imgText.visible = false;
    }

    public showGameOverEffect(strPath: string) {
        let cur = PlayerDataMgr.getInstance().stPlayerDataBase.nCurLevel + 1;
        let strCur = cur >= 10 ? String(cur) : "0" + cur;
        this.imgText.skin = 'resource/assets/img/choose/' + strCur + "/" + strPath + '.png';
        this.background.visible = this.imgText.visible = true;
        this.background.alpha = this.imgText.alpha = 0;
        let callFun = Laya.Handler.create(this, function () {
            Laya.Tween.to(this.imgText, { alpha: 1 }, 1400)
        })
        Laya.Tween.to(this.background, { alpha: 1 }, 1400, null, callFun)
    }

    public hideGameOverEffect() {
        if (this.background && this.imgText) this.background.visible = this.imgText.visible = false;
    }
}
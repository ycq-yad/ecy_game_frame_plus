import ViewChangeMgr from "../../../games/ViewChangeManager";
import GameStatusMgr from "../../../games/GameStateManager";
import { EGType, PType } from "../../../games/CommonDefine";
import { LevelMgr } from "../../../manager/LevelManager";
import { PlayerDataMgr } from "../../../common/GameDataManager";
import { ConfigMgr } from "../../../games/ConfigManager";
import SoundMgr from "../../../common/SoundManager";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import AnimationMgr from "../../../manager/AnimationManager";
import { GEvent } from "../../../games/GameEvent";
import { GDataMgr } from "../../../common/GameData";
import WeCatMoreGameItemOne from "../wechat/WeCatMoreGameItemOne";
import AddPowerView from "../pop/AddPsView";
import { PopBaseScene } from "../../base/PopBaseScene";
import { GameManager } from "../../../manager/GameManager";
import GameEvent from "../../../common/GameEvent";
import MoreGameRandomGameBox713 from "../wechat/MoreGameRandomGameBox713";


export default class FailEntryErView extends PopBaseScene {
    public className_key = "FailEntryTwoView";
    protected grp_center: Laya.Box;
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;

    public btnGet: Laya.Box;
    public imageGoods: Laya.Image;
    public labelShare: Laya.Label;
    public btnAgain: Laya.Box;
    public btnShare: Laya.Image;
    public boxGameData: Laya.Box;
    public btnHome: Laya.Image;
    public spCount: Laya.Image;
    public sptext: Laya.Text;
    //public spCost: Laya.Image;
    public imageSName: Laya.Image;

    private _nGlodAddByWathcVideo: number;
    private _bIsRunning: boolean;
    private shareCount: Laya.Image;
    private imageSIcon: Laya.Image;

    private ttImageType: Laya.Image;
    private ttSpecial: Laya.Image;

    public imageWeCatMore: Laya.Image;
    public panelWeCatMore: Laya.Panel;

    private _bRecvAward: boolean
    private _bShareAward: boolean

    constructor() {
        super();
        this._nGlodAddByWathcVideo = 200;
        this._bIsRunning = false;
        this._bRecvAward = false;
        this._bShareAward = false
        this.skin = 'game/uiView/settlement/FailEntryTwoView.json';
    }


    public initMiniGame() {
        MiniGameMgr.instance.showChaPinAd();

        // MiniGameMgr.instance._bFlagSpecialView = false;
        // MiniGameMgr.instance.hideBannerAd();

        MiniGameMgr.instance.showBlockAD();
    }

    public onRemoved() {
        super.onRemoved();
        MiniGameMgr.instance.hideBlockAD();
        this.removeEvent();
        this._bIsRunning = false;
        this._bRecvAward = false;
        Laya.Tween.clearAll(this.btnShare);
        Laya.timer.clearAll(this);

    }


    private onClick(evt: Laya.Event) {
        switch (evt.currentTarget) {
            case this.btnAgain:
                this.failEntryErReStartGame();
                break
            case this.btnHome:
                this.returnToHome();

                break
            case this.btnShare:
                this.failShareGame();

                break
            case this.btnGet:
                this.onWatchVideoReceiveAward();

                break
        }
    }

    public addEvent() {

        this.registerEvent(this.btnAgain, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnHome, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnShare, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnGet, Laya.Event.CLICK, this.onClick, this);

        //this.labelShare.on(Laya.Event.CLICK, this, this.failSharGame);
        EventMgr.getInstance().addEvent(GEvent.E_F_GD, this, this.flyGlodFileShare);

        if (DeviceUtil.isTTMiniGame()) {
            this.registerEvent(this.panelWeCatMore, Laya.Event.CLICK, this.onShowMoreGame, this);

        }
        if (DeviceUtil.isQQMiniGame()) {
            EventMgr.getInstance().addEvent("SuccBlockShow", this, this.showBlockAd);
        }
    }

    /**
     * 显示积木广告
     */
    private showBlockAd(blnShow: boolean): void {
        if (blnShow) {
            MiniGameMgr.instance.showBlockAD();
        } else {
            MiniGameMgr.instance.hideBlockAD();
        }
    }

    public removeEvent() {

        //this.labelShare.off(Laya.Event.CLICK, this, this.failSharGame);
        EventMgr.getInstance().removeEvent(GEvent.E_F_GD, this, this.flyGlodFileShare);
        if (DeviceUtil.isTTMiniGame()) {
            this.panelWeCatMore.off(Laya.Event.CLICK, this, this.onShowMoreGame);
        }


        if (DeviceUtil.isQQMiniGame()) {
            EventMgr.getInstance().removeEvent("SuccBlockShow", this, this.showBlockAd);
        }
        super.removeEvent();
    }

    /**分享游戏 */
    private failShareGame() {
        SoundMgr.getInstance().playEffect("button", 1);

        if (DeviceUtil.isTTMiniGame()) {
            if (this._bShareAward) {
                TipsManager.getInstance().showDefaultTips("已经领过奖励了哦");
                return;
            }
            // this.removeEvent();
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true)
            let objInfo = platform.getSystemInfoSync() as any;
            if (objInfo.appName.toUpperCase() == 'DOUYIN') {
                MiniGameMgr.instance.flagDouYin = true;
                MiniGameMgr.instance.shareAppMsg({
                    sucFun: () => {
                        this.sendRecordVideoSuc();
                        //EventMgr.getInstance().sendEvent(GameEvent.EVENT_FLAY_GLOD);
                    },
                    failFun: () => {
                        console.log("发布录制视频失败");
                        TipsManager.getInstance().showDefaultTips('分享失败');
                        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                    }
                });
            } else {
                MiniGameMgr.instance.onShareVideoAd({
                    successFun: () => {
                        this.sendRecordVideoSuc();
                    },
                    failFun: () => {
                        console.log("发布录制视频失败");
                        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                    }
                });
            }
        } else {
            MiniGameMgr.instance.shareAppMsg();
        }
    }


    private sendRecordVideoSuc() {
        console.log("发布录制视频成功");
        this._bShareAward = true;
        TipsManager.getInstance().showDefaultTips('分享成功');
        if (MiniGameMgr.instance._onShareVideoSuccess) {
            return;
        }
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
        let numCount = 50;
        let objData = ConfigMgr.getInstance().getGCDBID(18);
        if (objData) {
            numCount = parseInt(objData.strValue);
        }
        PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, numCount);
        MiniGameMgr.instance._onShareVideoSuccess = true;
        Laya.timer.once(1000, this, () => {
            this.flyGlodFileShare();
        })
    }

    /**初始话pinnel***/
    private initPanel() {
        this.panelWeCatMore.vScrollBarSkin = "";
        this.panelWeCatMore.elasticEnabled = true;
        this.panelWeCatMore.vScrollBar.elasticDistance = 200;
        this.panelWeCatMore.vScrollBar.elasticBackTime = 100;
    }

    /**开始游戏 */
    private failEntryErReStartGame() {
        SoundMgr.getInstance().playEffect("button", 1);
        if (GameManager.instance.restartGame()) {
            MiniGameMgr.instance._bFlagSpecialView = true;
            this.removeSelf();
        }
    }

    /**返回主页 */
    private returnToHome() {
        SoundMgr.getInstance().playEffect("button", 1);
        if (ConfigMgr.getInstance().isWeCatMiniGame()) {
            if (PlayerDataMgr.getInstance().bIsNewPlayer || BaseConst.infos.gameInfo.openPsAward == 0 ||
                BaseConst.infos.gameInfo.glodegg == 0) {
                MoreGameRandomGameBox713.toHome = true;
                ViewManager.getInstance().showView(MoreGameRandomGameBox713);
                this.removeSelf();
                return;
            }
        }
        //PlayerDataManager.getInstance().setCurLevel(PlayerDataManager.getInstance().getCurLevelMax());
        GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_GH;
        ViewChangeMgr.getInstance().CurLevelBasea.returnToHome();
        MiniGameMgr.instance._bFlagSpecialView = true;
        // ViewChangeMgr.getInstance().commonView.addBtEvent();
        this.removeSelf();
    }

    /**刷新界面 */
    public initView() {

        /**2020.6.29 失败页
        1、去掉【分享游戏】按钮，【领取】按钮居中
        2、【领取】按钮，用放大放小的动态效果展示。
        */
        if (DeviceUtil.isQQMiniGame()) {
            this.btnShare.visible = false;
            this.btnGet.centerX = 0;
            this.startFailImageBtShareAni();
        }

        this.initPanel();
        MiniGameMgr.instance._onShareVideoSuccess = false;
        this.initTTView();
        this.procMoreGame();

        this.resetData();
        //开启放大缩小的动画
        if (!DeviceUtil.isWXMiniGame())
            this.startbtnShareAni();

        //处理适配推荐高度
        this.adaptationSize();
        ViewChangeMgr.getInstance().commonView.addBtEvent();

        if (DeviceUtil.isNative()) {
            this.btnShare.visible = false;
            this.btnGet.centerX = 0;
        }
    }


    private resetData() {
        this._bIsRunning = true;
        this._bRecvAward = false;
        this._bShareAward = false;
        AddPowerView._bCloseBinner = false;

        //刷新视频领取奖励的数值
        let objData = ConfigMgr.getInstance().getGCDBID(7);
        if (objData) {
            this._nGlodAddByWathcVideo = parseInt(objData.strValue);
        }
        // BitmapLabelUtils.setLabel(this.spCount, this._nGlodAddByWathcVideo.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        this.sptext.text = this._nGlodAddByWathcVideo.toString();
    }
    protected adaptationSize() {
        // this.grp_center.width = this.width;
        // this.grp_center.height = this.height;
        this.imageWeCatMore.height = (this.height - this.imageWeCatMore.y - (1920 - this.imageWeCatMore.y - this.imageWeCatMore.height));
        this.panelWeCatMore.height = this.imageWeCatMore.height - 110;
    }

    private startbtnShareAni() {
        if (!this._bIsRunning) {
            return;
        }

        Laya.timer.clearAll(this.btnShare);
        AnimationMgr.instance.zoomTweena(this.btnShare, this.btnShare)
    }
    /*分享游戏飞金币的动画 */
    private flyGlodFileShare() {
        console.log("flayGlodFileShare");
        let pPoint = new Laya.Point();
        pPoint.x = this.ttImageType.x;
        pPoint.y = this.ttImageType.y;
        let stParent = this.ttImageType.parent as Laya.Image;
        pPoint = stParent.localToGlobal(pPoint);
        AnimationMgr.instance.flayGloda(pPoint.x, pPoint.y, 341, 105);
        console.log("pPoint.x = ", pPoint.x, "pPoint.y = ", pPoint.y);
    }

    private onWatchVideoReceiveAward() {
        console.log("onWatchVideoRecvAward = ", this._bRecvAward);
        if (this._bRecvAward) {
            TipsManager.getInstance().showDefaultTips("已经领过奖励了哦");
            return;
        }
        MiniGameMgr.instance.playVideoAd({
            successFun: () => {
                this._bRecvAward = true;
                this.addGlod();
            }
        });
    }

    private addGlod() {
        this._bRecvAward = true;
        console.log("addGlodReal = ", this._bRecvAward);
        //增加金币
        PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, this._nGlodAddByWathcVideo);
        this.flyGlodRecv();
    }

    /**头条的特殊界面初始化 */
    private initTTView() {
        this.shareCount.visible = true;
        this.ttImageType.visible = true;
        this.ttSpecial.visible = true;
        if (DeviceUtil.isTTMiniGame()) {
            this.imageSName.skin = "resource/assets/img/ui/success/failure_word_8.png";
            this.imageSIcon.skin = "resource/assets/img/common/succeed_icon_3.png";
            this.imageSName.y = 15;

            /**刷新分享的金币 */
            let nunumCount = 50;
            let objData = ConfigMgr.getInstance().getGCDBID(18);
            if (objData) {
                nunumCount = parseInt(objData.strValue)
            }
            BitmapLabelUtils.setLabel(this.shareCount, nunumCount.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
            this.imageSName.right = 40;
            this.imageSIcon.left = 40;
        } else {
            this.imageSName.skin = "resource/assets/img/ui/success/failure_word_3.png";
            this.imageSIcon.skin = "resource/assets/img/common/common_icon_3.png";
            this.shareCount.visible = false;
            this.ttImageType.visible = false;
            this.ttSpecial.visible = false;
            this.imageSName.y = 38;
            this.imageSName.right = 50;
            this.imageSIcon.left = 50;

        }
    }

    /**看视频领奖非金币的动画 */
    private flyGlodRecv() {
        console.log("flayGlodRecv");
        let point = new Laya.Point();
        point.x = this.imageGoods.x;
        point.y = this.imageGoods.y;
        let parent = this.imageGoods.parent as Laya.Image;
        point = parent.localToGlobal(point);
        AnimationMgr.instance.flayGloda(point.x, point.y, 341, 105);
    }

    /**控制更多游戏的函数 */
    private procMoreGame() {
        //微信平台
        if ((DeviceUtil.isTTMiniGame())) {
            //if (BaseConst.infos.gameInfo.isDY) {
            this.refreshWXMoreGame();
            //}
            this.imageWeCatMore.visible = true;
        } else if (ConfigMgr.getInstance().isWeCatMiniGame()) {
            this.initPl();
        }
        //TO DO  其他平台
        //……
    }




    private onShowMoreGame() {
        MiniGameMgr.instance.showMoreGamesModel();
    }

    /**微信运营需求初始化 */
    private refreshWXMoreGame() {
        //this.imageWeChatMore.visible = true;
        // if(!DeviceUtil.isWXMiniGame() || !DeviceUtil.isWXMiniGame()){
        //     this.imageWeChatMore.visible = false;
        //     return;
        // }else{
        //     this.imageWeChatMore.visible = true;
        // }
        this.panelWeCatMore;
        let numStartX = 70;
        let numAddX = 150;// + 107;
        let numAddY = 180;// + 47;
        let numStartY = 47;
        let arrInfo: number[] = [];
        let numCount = 3;
        arrInfo = GameManager.instance.getRandomEightIndex();

        let len = 8;
        if (DeviceUtil.isWXMiniGame()) {
            len = arrInfo.length;
        } else {
            len = 9;
            len = len < arrInfo.length ? len : arrInfo.length;
        }

        for (let i = 0; i < len; ++i) {
            let pWeCatMoreGameItemOne: WeCatMoreGameItemOne = this.panelWeCatMore.getChildAt(i) as WeCatMoreGameItemOne;
            if (pWeCatMoreGameItemOne) {
                pWeCatMoreGameItemOne.setData(arrInfo[i]);
            } else {
                pWeCatMoreGameItemOne = new WeCatMoreGameItemOne(arrInfo[i]);
                let tempX = Math.floor(i % numCount);
                let tempY = Math.floor(i / numCount);
                pWeCatMoreGameItemOne.x = numStartX + pWeCatMoreGameItemOne.width * tempX + 70 * tempX;
                pWeCatMoreGameItemOne.y = numStartY + pWeCatMoreGameItemOne.height * tempY + 10 * tempY;
                this.panelWeCatMore.addChild(pWeCatMoreGameItemOne);
                this._scrollSizeMax = 120 * (tempY + 1);
                this._nTimePanel = 5000;
            }
        }
        if (DeviceUtil.isWXMiniGame())
            this.panelScrollAni();
    }

    /**滚动效果 */
    private _scrollSizeMax = 50;
    private _nTimePanel = 5000;
    private panelScrollAni() {
        Laya.Tween.clearAll(this.panelWeCatMore.vScrollBar);
        Laya.timer.clearAll(this.panelScrollAni);
        // this.panelWeChatMore.vScrollBar.touchScrollEnable =
        //     this.panelWeChatMore.vScrollBar.mouseWheelEnable = false;
        Laya.Tween.to(this.panelWeCatMore.vScrollBar, { value: this._scrollSizeMax }, this._nTimePanel, null, Laya.Handler.create(this, (args) => {
            Laya.Tween.to(this.panelWeCatMore.vScrollBar, { value: 0 }, this._nTimePanel, null, Laya.Handler.create(this, (args) => {
                this._scrollSizeMax = this.panelWeCatMore.vScrollBar.max;
                Laya.timer.once(0, this, this.panelScrollAni);
            }));
        }));
    }

    private startFailImageBtShareAni() {
        // Laya.Tween.clearAll(this.btnGet);
        // Laya.Tween.to(this.btnGet, { scaleX: 1.1, scaleY: 1.1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, (args) => {
        //     Laya.Tween.to(this.btnGet, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, (args) => {
        //         Laya.timer.once(0, this, this.startFailImageBtShareAni);
        //     }));
        // }));

        Laya.timer.clearAll(this.btnGet);
        AnimationMgr.instance.zoomTweena(this.btnGet, this.btnGet)
    }

    private nBtNextLevel: number = 360;
    private nBtNextLevelSp: number = 100;
    public box_wecat: Laya.Box;
    private initPl() {
        if (ConfigMgr.getInstance().isWeCatMiniGame()) {
            this.box_wecat.removeChildren();
            this.box_wecat.addChild(ViewChangeMgr.getInstance().showMoreGameinView());
            this.box_wecat.visible = true;
            // this.imgShare.y = 1417;
            this.btnShare.scaleX = 0.6;
            this.btnShare.scaleY = 0.6;
            this.btnShare.left = 30;
            this.btnShare.bottom = 520;
            // this.imgGet.y = 1417;
            this.btnGet.scaleX = 0.6;
            this.btnGet.scaleY = 0.6;
            this.btnGet.right = 30;
            this.btnGet.bottom = 520;
            if (BaseConst.infos.gameInfo.openPsAward == 1 && BaseConst.infos.gameInfo.for_pay == 1) {
                this.btnAgain.bottom = this.nBtNextLevelSp;
                MiniGameMgr.instance._bFlagSpecialView = false;
                MiniGameMgr.instance.hideBannerAd();
                return;
            } else {
                this.btnAgain.bottom = this.nBtNextLevel;
            }
        } else {
            MiniGameMgr.instance.showBanner({});
        }
    }
}
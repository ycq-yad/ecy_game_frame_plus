import { LevelMgr } from "../../../manager/LevelManager";
import { PlayerDataMgr } from "../../../common/GameDataManager";
import GameStatusMgr from "../../../games/GameStateManager";
import { EGType, PType } from "../../../games/CommonDefine";
import ViewChangeMgr from "../../../games/ViewChangeManager";
import { ConfigMgr } from "../../../games/ConfigManager";
import AnimationMgr from "../../../manager/AnimationManager";
import SoundMgr from "../../../common/SoundManager";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import { GDataMgr } from "../../../common/GameData";

import WeCatMoreGameItemOne from "../wechat/WeCatMoreGameItemOne";
import AddPowerView from "../pop/AddPsView";
import { PopBaseScene } from "../../base/PopBaseScene";
import { GameManager } from "../../../manager/GameManager";
import MoreGameRandomGameBox713 from "../wechat/MoreGameRandomGameBox713";


export default class SuccessfulEntryThreeView extends PopBaseScene {
    public className_key = "SuccessfulEntryThreeView";
    protected grp_center: Laya.Box;
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;

    public boxGameData: Laya.Box;
    //public btnNextLevel: Laya.Image;
    public sprGold: Laya.Sprite;
    public btnLab: Laya.Sprite;
    public imgMask: Laya.Box;
    public imgGoodsType: Laya.Image;
    public sprMore: Laya.Sprite;
    public sprCost: Laya.Sprite;
    public btnShare: Laya.Box;
    public btnAgain: Laya.Box;
    public btnDouble: Laya.Image;
    public sprDouble: Laya.Image;
    public labDesc: Laya.Label;
    public btnHome: Laya.Image;
    public imgGoodsTypeUp: Laya.Image;
    public sprCostPs: Laya.Sprite;
    public imgShareName: Laya.Image;
    private nGlodAddByWathcVideo: number;

    private sprShareCount: Laya.Sprite;
    private imgShareIcon: Laya.Image;

    private ttGoodsIcon: Laya.Image;
    private ttSpecialIcon: Laya.Sprite;

    public aniReal: Laya.Skeleton;

    public boxAnim: Laya.Box;
    public aniRealNanZhu: Laya.Skeleton;

    public imgWeChatMore: Laya.Image;
    public panelWeChatMore: Laya.Panel;

    /**一些数据 */
    private _nGlodAdd: number;    //通关后增加的金币
    private _nGlodRadio: number;  //看视频后增加的倍数

    private _bIsRunning: boolean;
    private _bRecvAward: boolean;

    constructor() {
        super();
        this._nGlodAdd = 50;
        this._nGlodRadio = 4;
        this._bIsRunning = false;
        this._bRecvAward = false;
        this.skin = 'game/uiView/settlement/SuccessfulEntryThreeView.json';
    }


    protected adaptationSize() {
        //处理适配推荐高度
        // this.grp_center.width = this.width;
        // this.grp_center.height = this.height;
        this.imgWeChatMore.height = (this.height - this.imgWeChatMore.y - (1920 - this.imgWeChatMore.y - this.imgWeChatMore.height));
        this.panelWeChatMore.height = this.imgWeChatMore.height - 110;

    }

    // 检查平台
    private checkPlatform(): void {
        if (DeviceUtil.isQQMiniGame()) {
            this.changeUIQQ();
        }
    }

    // qq 运营需要
    private changeUIQQ(): void {
        /**20207.24 qq 2、签到页，方框打勾样式，改成方框涂色（默认蓝色，用户点击则变成白色） */
        this.btnDouble.skin = "resource/assets/img/ui/sign/sign_baseboard_7.png";
        this.sprDouble.skin = "resource/assets/img/ui/sign/sign_baseboard_5.png";
    }


    public initMiniGame() {
        AddPowerView._bCloseBinner = false;
        ViewChangeMgr.getInstance().commonView.addBtEvent();
        this._isShowBox = false;
        MiniGameMgr.instance.showBanner({});
        MiniGameMgr.instance.showChaPinAd();
        //
        MiniGameMgr.instance.showBlockAD();

        if (!this.aniReal) {
            this.createSke("resource/assets/img/ani/celebrate/celebrate.sk");
        } else {
            this.aniReal.play(0, false);
            this.grp_center.addChild(this.aniReal);
        }

        //MiniGameMgr.instance.StopVideo();
        if (!this.aniRealNanZhu) {//&& !((DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) && BaseConst.infos.gameInfo.isDY)) {
            this.createSkeletonNanZhu("resource/assets/img/ani/celebrate/chenggong.sk");
        } else {
            this.aniRealNanZhu.play(0, true);
            this.boxAnim.addChild(this.aniRealNanZhu);
        }
    }


    public onRemoved() {
        super.onRemoved();
        MiniGameMgr.instance.hideBlockAD();
        this.removeEvent();
        this._bIsRunning = false;
        Laya.Tween.clearAll(this.btnShare);
        Laya.timer.clearAll(this);
        if (this.aniReal) {
            this.aniReal.stop();
            this.aniReal.removeSelf();
        }

        if (this.aniRealNanZhu) {
            this.aniRealNanZhu.stop();
            this.aniRealNanZhu.removeSelf();
        }
    }

    /**初始话pinnel***/
    private initPanel() {
        this.panelWeChatMore.vScrollBarSkin = "";
        this.panelWeChatMore.elasticEnabled = true;
        this.panelWeChatMore.vScrollBar.elasticDistance = 200;
        this.panelWeChatMore.vScrollBar.elasticBackTime = 100;
    }

    /**初始化一些信息 */
    public initView() {
        this.checkPlatform();
        this._bShareAward = false;
        this.initPanel();
        this.proceMoreGame();
        MiniGameMgr.instance._onShareVideoSuccess = false;
        //MiniGameMgr.instance.StopVideo();
        this.initPlView();
        SoundMgr.getInstance().playEffect("win", 1);
        this._bRecvAward = false;

        //初始化双倍领奖的按钮
        if (BaseConst.infos.gameInfo.openPsAward) {
            this.sprDouble.visible = true;
        } else {
            this.sprDouble.visible = false;
        }

        if (DeviceUtil.isQQMiniGame()) {
            if (Math.random() < BaseConst.infos.gameInfo.siginC) {//qq的平台单独使用概率配置
                this.sprDouble.visible = true;
            } else {
                this.sprDouble.visible = false;
            }
            /**2020.6.29  1、去掉【分享游戏】按钮，【领取】按钮居中 */
            this.btnShare.visible = false;
            this.imgMask.centerX = 0;
        }

        if (DeviceUtil.isNative()) {
            this.sprDouble.visible = false;

        }
        if (ConfigMgr.getInstance().isWeCatMiniGame()) {
            this.sprDouble.visible = false;
        }

        this._bIsRunning = true;
        this.initTextLable();

        /**刷新分享的金币 */
        // let nGlodCount = 50;
        // stGameConfig = ConfigManager.getInstance().getGameConfigDataByID(18);
        // if(stGameConfig){
        //     nGlodCount = parseInt(stGameConfig.strValue)
        // }
        // BitmapLabelUtils.setLabel(this.sprShareCount, nGlodCount.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");

        //开启缩放动画
        this.startSucImageBtShareAni();

        if (DeviceUtil.isTTMiniGame()) {
            this.btnShare.right = 563;
            this.imgMask.left = 563;
        }
        this.adaptationSize();
        if (DeviceUtil.isNative()) {

            /**2020.6.29  1、去掉【分享游戏】按钮，【领取】按钮居中 */
            this.btnShare.visible = false;
            this.imgMask.centerX = 0;
        }
    }


    private initTextLable() {
        //初始化通关加的金币
        let objConfig = ConfigMgr.getInstance().getGCDBID(12);
        if (objConfig) {
            this._nGlodAdd = parseInt(objConfig.strValue);
        }
        //BitmapLabelUtils.setLabel(this.sprGold, this.nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        //初始化看视频增加的倍数
        objConfig = ConfigMgr.getInstance().getGCDBID(13);
        if (objConfig) {
            this._nGlodRadio = parseInt(objConfig.strValue);
            //更新描述
            this.labDesc.text = objConfig.strDesc;
        }
        BitmapLabelUtils.setLabel(this.sprCost, this._nGlodRadio.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");

        //扣除的体力数值
        let nCost = 1;
        objConfig = ConfigMgr.getInstance().getGCDBID(8);
        if (objConfig) {
            nCost = parseInt(objConfig.strValue);
        }
        BitmapLabelUtils.setLabel(this.sprCostPs, nCost.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");

        //总数
        let bAddMore = this._nGlodAdd * this._nGlodRadio;
        BitmapLabelUtils.setLabel(this.sprMore, bAddMore.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");

        if (this.sprDouble.visible) {
            let nReal = this._nGlodAdd * this._nGlodRadio;
            BitmapLabelUtils.setLabel(this.sprGold, nReal.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        } else {
            BitmapLabelUtils.setLabel(this.sprGold, this._nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        }
    }


    private onClick(evt: Laya.Event) {
        switch (evt.currentTarget) {
            case this.btnLab:
                this.sucfulEntryThreeNextLevel()
                break
            case this.btnHome:
                this.returnToHome()
                break
            case this.btnShare:
                this.sucShareGame()
                break
            case this.btnAgain:
                this.sucReStart()
                break
            case this.imgMask:
                this.sucRecvAward()
                break
            case this.btnDouble:
                this.onDoubleGlods()
                break
            case this.panelWeChatMore:
                this.onShowMoreGame()
                break
            case this.btnNextLevel:
                this.weCatGotoNextLevel()
                break;
        }
    }

    public addEvent() {
        this.registerEvent(this.btnLab, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnHome, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnShare, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnAgain, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.imgMask, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnDouble, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnNextLevel, Laya.Event.CLICK, this.onClick, this);
        if (DeviceUtil.isTTMiniGame()) {
            this.registerEvent(this.panelWeChatMore, Laya.Event.CLICK, this.onClick, this);

        }
        if (DeviceUtil.isQQMiniGame()) {
            EventMgr.getInstance().addEvent("SuccBlockShow", this, this.showBlockAd);
        }
    }

    public removeEvent() {

        if (DeviceUtil.isTTMiniGame()) {
            this.panelWeChatMore.off(Laya.Event.CLICK, this, this.onShowMoreGame);
        }
        if (DeviceUtil.isQQMiniGame()) {
            EventMgr.getInstance().removeEvent("SuccBlockShow", this, this.showBlockAd);
        }
        super.removeEvent()
    }

    private onDoubleGlods() {
        SoundMgr.getInstance().playEffect("button", 1);
        this.sprDouble.visible = !this.sprDouble.visible;
        if (this.sprDouble.visible) {
            let numReal = this._nGlodAdd * this._nGlodRadio;
            BitmapLabelUtils.setLabel(this.sprGold, numReal.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        } else {
            BitmapLabelUtils.setLabel(this.sprGold, this._nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        }
    }

    /**獎勵是否領取過 */
    private _bShareAward = false;

    /**分享 */
    private sucShareGame() {
        SoundMgr.getInstance().playEffect("button", 1);

        if (DeviceUtil.isTTMiniGame()) {
            this.btnShare.mouseEnabled = this.imgMask.mouseEnabled = false;
            if (this._bShareAward) {
                TipsManager.getInstance().showDefaultTips("已经领过奖励了哦");
                this.btnShare.mouseEnabled = this.imgMask.mouseEnabled = true;
                return;
            }
            let info = platform.getSystemInfoSync() as any;

            if (MiniGameMgr.instance.appName().toUpperCase() == 'DOUYIN') {
                MiniGameMgr.instance.flagDouYin = true;
                MiniGameMgr.instance.shareAppMsg({
                    sucFun: () => {
                        this._bShareAward = true;
                        console.log("发布录制视频成功");
                        TipsManager.getInstance().showDefaultTips('分享成功');
                        if (MiniGameMgr.instance._onShareVideoSuccess) {
                            return;
                        }
                        PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, this._nGlodCount);
                        // self.removeUs();
                        this.btnShare.mouseEnabled = this.imgMask.mouseEnabled = true;
                    },
                    failFun: () => {
                        console.log("发布录制视频失败");
                        TipsManager.getInstance().showDefaultTips('分享失败');
                        this.btnShare.mouseEnabled = this.imgMask.mouseEnabled = true;
                    }
                });

            } else {
                MiniGameMgr.instance.shareGameRecordVideo({
                    successFun: () => {
                        this._bShareAward = true;
                        PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, this._nGlodCount);
                        // self.removeUs();
                        this.btnShare.mouseEnabled = this.imgMask.mouseEnabled = true;

                    }, failFun: () => {
                        this.btnShare.mouseEnabled = this.imgMask.mouseEnabled = true;

                    }, errorFun: () => {
                        this.btnShare.mouseEnabled = this.imgMask.mouseEnabled = true;

                    }
                })
            }

        } else {
            MiniGameMgr.instance.shareAppMsg();
        }
        // MiniGameMgr.instance.bFlagDouYin = false;
        // MiniGameMgr.instance.shareAppMessage();
    }

    /**
     * 显示积木广告
     */
    private showBlockAd(isShow: boolean): void {
        if (isShow) {
            MiniGameMgr.instance.showBlockAD();
        } else {
            MiniGameMgr.instance.hideBlockAD();
        }
    }

    /**重新开始 */
    private sucReStart() {
        // SoundMgr.getInstance().playEffect("button", 1);
        // GameManager.instance.restartGame();
        // MiniGameMgr.instance._bFlagSpecialView = true;
        // this.removeSelf();
    }

    private _isShowBox: boolean = false;
    /**接受奖励 */
    private sucRecvAward() {
        SoundMgr.getInstance().playEffect("button", 1);
        if (DeviceUtil.isQQMiniGame() && !this._isShowBox && Math.random() < BaseConst.infos.gameInfo.succShowBox) {//qq 开关有开启结算弹起盒子广告
            this._isShowBox = true;
            MiniGameMgr.instance.hideBlockAD();
            MiniGameMgr.instance.showAdBox(() => {
                MiniGameMgr.instance.showBlockAD();
            });
            return
        }

        if (this._bRecvAward) {  //体力不足的情况才会领取了奖励还在当前界面
            //领完奖励执行切换到下一关的逻辑
            this.sucfulEntryThreeNextLevel();
            return
        }

        if (this.sprDouble.visible) {
            MiniGameMgr.instance.playVideoAd({
                successFun: () => {
                    this.sendAwardAfterWatchVideoAd();
                }
            });
        } else {
            this._nGlodRadio = 1;
            this.sendAwardAfterWatchVideoAd();
        }
    }

    /**看视频成功后获得奖励 */
    private sendAwardAfterWatchVideoAd() {
        this._bRecvAward = true;
        this.flayGlodSuccess();
        let numAdd = this._nGlodAdd * this._nGlodRadio;
        PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, numAdd);
        //领完奖励执行切换到下一关的逻辑
        this.sucfulEntryThreeNextLevel();
    }

    /**下一关 */
    private sucfulEntryThreeNextLevel() {
        let numCost = 1;
        let objData = ConfigMgr.getInstance().getGCDBID(8);
        if (objData) {
            numCost = parseInt(objData.strValue);
        }

        let self = this
        let fun = () => {
            MoreGameRandomGameBox713.bGotoNextGame = true;
            ViewManager.getInstance().showView(MoreGameRandomGameBox713);
            MiniGameMgr.instance._bFlagSpecialView = true;
            self.removeSelf();
        }
        //检测体力是否足够
        let bln = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, numCost);
        if (!bln) {
            GameManager.instance.onPowerNotEnough();
            return;
        } else {
            this.removeEvent();
            if (DeviceUtil.isWXMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
                if (!this._bRecvAward) {
                    Laya.timer.once(1000, this, () => {
                        fun()
                    });
                } else {
                    fun()
                }
            } else {
                //扣除体力
                PlayerDataMgr.getInstance().subProp(PType.e_GType_Sp, numCost);
                //如果是最后一关则提示已通关且进入主页
                if (PlayerDataMgr.getInstance().stPlayerDataBase.nCurLevel >= PlayerDataMgr.getInstance().nMaxLevelCount - 1
                    && DeviceUtil.isQQMiniGame()) {//qq上
                    TipsManager.getInstance().showDefaultTips("明日更新关卡，明天再来吧！");
                    PlayerDataMgr.getInstance().isMaxLevel();
                    this.returnToHome();
                } else {
                    ViewChangeMgr.getInstance().goToNextLevel();
                    MiniGameMgr.instance._bFlagSpecialView = true;
                    this.removeSelf();
                }
            }
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
                //2020.7.13-4
                MiniGameMgr.instance._bFlagSpecialView = true;
                this.removeSelf();
                return
            }
        }

        GameManager.instance.backHome();
        MiniGameMgr.instance._bFlagSpecialView = true;
        // ViewChangeMgr.getInstance().commonView.addBtEvent();
        this.removeSelf();
    }

    private startSucImageBtShareAni() {
        if (!this._bIsRunning) {
            return;
        }
        Laya.timer.clearAll(this.btnShare);
        AnimationMgr.instance.zoomTweena(this.btnShare, this);
    }

    /**飞金币 */
    private flayGlodSuccess() {
        let point = new Laya.Point();
        point.x = this.imgGoodsTypeUp.x;
        point.y = this.imgGoodsTypeUp.y;
        let parent = this.imgGoodsTypeUp.parent as Laya.Box;
        point = parent.localToGlobal(point);
        AnimationMgr.instance.flayGloda(point.x, point.y, 341, 105);
    }

    public createSke(url: string): Promise<Laya.Skeleton> {
        return new Promise<Laya.Skeleton>((resolve) => {
            AnimationMgr.instance.showSkeAnimation(url, (boomAnimation: Laya.Skeleton) => {
                boomAnimation.player.playbackRate = 1;
                boomAnimation.autoSize = true;
                boomAnimation.scale(1, 1);
                boomAnimation.play(0, false);
                boomAnimation.x = this.grp_center.width / 2;
                boomAnimation.y = this.grp_center.height / 2;
                this.grp_center.addChild(boomAnimation);
                this.aniReal = boomAnimation;
                resolve(boomAnimation)
            }, 1);
        })

    }

    public _nGlodCount: number = 50;
    /**头条的特殊界面初始化 */
    private initPlView() {
        if (DeviceUtil.isTTMiniGame()) {
            this.imgShareName.skin = "resource/assets/img/ui/success/failure_word_8.png";
            this.imgShareIcon.skin = "resource/assets/img/common/succeed_icon_3.png";
            this.imgShareName.y = 15;
            this.sprShareCount.visible = true;
            this.ttGoodsIcon.visible = true;
            this.ttSpecialIcon.visible = true;
            /**刷新分享的金币 */
            let numCount = 50;
            this._nGlodCount = numCount
            let objData = ConfigMgr.getInstance().getGCDBID(18);
            if (objData) {
                numCount = parseInt(objData.strValue)
            }
            BitmapLabelUtils.setLabel(this.sprShareCount, numCount.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
            // this.imgShareName.skin = "resource/assets/img/ui/success/succeed_word_3.png";
            // this.imgShareIcon.skin = "resource/assets/img/common/common_icon_3.png";
            // this.sprShareCount.visible = false;
            // this.ttGoodsIcon.visible = false;
            // this.ttSpecialIcon.visible = false;
            // this.imgShareName.y = 15;
            // this.imgShareName.right = 30;
            // this.imgShareIcon.left = 30;
        } else {
            this.imgShareName.skin = "resource/assets/img/ui/success/failure_word_3.png";
            this.imgShareIcon.skin = "resource/assets/img/common/common_icon_3.png";
            this.sprShareCount.visible = false;
            this.ttGoodsIcon.visible = false;
            this.ttSpecialIcon.visible = false;
            this.imgShareName.y = 42;
            this.imgShareName.right = 50;
            this.imgShareIcon.left = 40;
        }
    }

    /**看视频领奖非金币的动画 */
    private flayGlodRecv() {
        console.log("flayGlodRecv");
        let point = new Laya.Point();
        point.x = this.ttGoodsIcon.x;
        point.y = this.ttGoodsIcon.y;
        let parent = this.ttGoodsIcon.parent as Laya.Image;
        point = parent.localToGlobal(point);
        AnimationMgr.instance.flayGloda(point.x, point.y, 341, 105);
    }

    /**控制更多游戏的函数 */
    private proceMoreGame() {
        //微信平台
        if ((DeviceUtil.isTTMiniGame()) && BaseConst.infos.gameInfo.isDY) {
            this.refreshWxMoreGame();
            this.imgWeChatMore.visible = true;
        } else if (ConfigMgr.getInstance().isWeCatMiniGame()) {
            this.initPl();
        }

        //TO DO  其他平台
        //……
    }

    /**微信运营需求初始化 */
    private refreshWxMoreGame() {
        // //this.imgWeChatMore.visible = true;
        // if(!DeviceUtil.isWXMiniGame() || !DeviceUtil.isWXMiniGame()){
        //     this.imgWeChatMore.visible = false;
        //     return;
        // }else{
        //     this.imgWeChatMore.visible = true;
        // }
        this.panelWeChatMore;
        let startX = 53;
        let nXAddTemp = 150;// + 107;
        let nYAddTemp = 180;// + 47;
        let startY = 47;
        let arrInfo: number[] = [];
        let numCount = 3;
        arrInfo = GameManager.instance.getRandomEightIndex();

        let len = 8;
        if (DeviceUtil.isWXMiniGame()) {
            len = arrInfo.length;
        } else {
            len = 9
            len = len < arrInfo.length ? len : arrInfo.length;
        }

        for (let i = 0; i < len; ++i) {
            let pWeCatMoreGameItemOne: WeCatMoreGameItemOne = this.panelWeChatMore.getChildAt(i) as WeCatMoreGameItemOne;
            if (pWeCatMoreGameItemOne) {
                pWeCatMoreGameItemOne.setData(arrInfo[i]);
            } else {
                pWeCatMoreGameItemOne = new WeCatMoreGameItemOne(arrInfo[i]);
                let addx = Math.floor(i % numCount);
                let addy = Math.floor(i / numCount);
                pWeCatMoreGameItemOne.x = startX + pWeCatMoreGameItemOne.width * addx + 70 * addx;
                pWeCatMoreGameItemOne.y = startY + pWeCatMoreGameItemOne.height * addy + 10 * addy;
                this.panelWeChatMore.addChild(pWeCatMoreGameItemOne);
                this.scrollSizeMax = 180 * (addy + 1);
                this.nTimePanel = (addy + 1) * 1000;
            }
        }
        if (DeviceUtil.isWXMiniGame())
            this.panelScrollAni();
    }


    private onShowMoreGame() {
        MiniGameMgr.instance.showMoreGamesModel();
    }

    /**滚动效果 */
    private scrollSizeMax = 50;
    private nTimePanel = 5000;
    private panelScrollAni() {
        Laya.Tween.clearAll(this.panelWeChatMore.vScrollBar);
        Laya.timer.clearAll(this.panelScrollAni);
        // this.panelWeCahtMore.vScrollBar.touchScrollEnable =
        //     this.panelWeCahtMore.vScrollBar.mouseWheelEnable = true;
        // this.panelWeCahtMore.vScrollBar.touchScrollEnable =
        //     this.panelWeCahtMore.vScrollBar.mouseWheelEnable = false;
        Laya.Tween.to(this.panelWeChatMore.vScrollBar, { value: this.scrollSizeMax }, this.nTimePanel, null, Laya.Handler.create(this, (args) => {

            Laya.Tween.to(this.panelWeChatMore.vScrollBar, { value: 0 }, this.nTimePanel, null, Laya.Handler.create(this, (args) => {
                this.scrollSizeMax = this.panelWeChatMore.vScrollBar.max;
                Laya.timer.once(0, this, this.panelScrollAni);
            }));
        }));
    }

    public createSkeletonNanZhu(url: string): Promise<Laya.Skeleton> {
        return new Promise<Laya.Skeleton>((resolve) => {
            AnimationMgr.instance.showSkeAnimation(url, (boomAnimation: Laya.Skeleton) => {
                boomAnimation.player.playbackRate = 1;
                boomAnimation.autoSize = true;
                boomAnimation.scale(1, 1);
                boomAnimation.play(0, true);
                boomAnimation.x = 250;
                boomAnimation.y = 400 + 80;
                this.boxAnim.addChild(boomAnimation);
                this.aniRealNanZhu = boomAnimation;
                resolve(boomAnimation)
            }, 1);
        })
    }

    private nBtNextLevel: number = 360;
    private nBtNextLevelSp: number = 50;
    public box_wecat: Laya.Box;
    public check4: Laya.Box;
    public btnNextLevel: Laya.Image;
    public initPl() {
        if (ConfigMgr.getInstance().isWeCatMiniGame()) {
            this.box_wecat.visible = true;
            this.box_wecat.removeChildren();
            this.box_wecat.addChild(ViewChangeMgr.getInstance().showMoreGameinView());
            this.imgMask.visible = false;
            this.btnShare.visible = false;
            this.check4.visible = false;
            this.boxAnim.visible = false;
            this.btnNextLevel.visible = true;

            if (BaseConst.infos.gameInfo.openPsAward == 1 && BaseConst.infos.gameInfo.for_pay == 1) {
                this.btnNextLevel.visible = true;
                this.btnNextLevel.bottom = this.nBtNextLevelSp;
                MiniGameMgr.instance._bFlagSpecialView = false;
                MiniGameMgr.instance.hideBannerAd();
                return;
            } else {
                this.btnNextLevel.bottom = this.nBtNextLevel;
            }
        }
        MiniGameMgr.instance.showBanner({});
    }

    /**微信进入下一关的处理 */
    private weCatGotoNextLevel() {
        SoundMgr.getInstance().playEffect("button", 1);

        this._bRecvAward = true;
        this.flayGlodSuccess();
        //2020.7.13
        //if(MiniManeger.instance.isWxMiniGameForOperReq()){
        this._nGlodRadio = 1;
        // }
        let nGlodAddTemp = this._nGlodAdd * this._nGlodRadio;
        PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, nGlodAddTemp);

        let numCost = 1;
        let objData = ConfigMgr.getInstance().getGCDBID(8);
        if (objData) {
            numCost = parseInt(objData.strValue);
        }

        let self = this
        let fun = () => {
            MoreGameRandomGameBox713.bGotoNextGame = true;
            ViewManager.getInstance().showView(MoreGameRandomGameBox713);
            MiniGameMgr.instance._bFlagSpecialView = true;
            self.removeSelf();
        }
        //检测体力是否足够
        let bln = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, numCost);
        if (!bln) {
            GameManager.instance.onPowerNotEnough();
            return;
        } else {
            this.removeEvent();
            if (LevelMgr.getInstance().nCurrentLevel == 1) {
                MoreGameRandomGameBox713.bGotoNextGame = true;
            } else if (LevelMgr.getInstance().nCurrentLevel >= 2) {
                MoreGameRandomGameBox713.bGotoNextGame = true;
                MoreGameRandomGameBox713.bEnterHotBox = true;
            }
            ViewManager.getInstance().showView(MoreGameRandomGameBox713);
            //2020.7.13-4
            MiniGameMgr.instance._bFlagSpecialView = true;
            this.removeSelf();
        }
    }
}
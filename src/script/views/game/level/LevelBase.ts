import AnimationMgr from "../../../manager/AnimationManager";
import SoundMgr from "../../../common/SoundManager";
import GameHomeView from "../../GameHomeView";
import ViewChangeMgr from "../../../games/ViewChangeManager";
import GameStatusMgr from "../../../games/GameStateManager";
import { EGType } from "../../../games/CommonDefine";
import { PlayerDataMgr } from "../../../common/GameDataManager";
import GameViewCap from "../../GameView";
import { LevelMgr } from "../../../manager/LevelManager";
import { ConfigMgr } from "../../../games/ConfigManager";
import GameLogicProcessMgr from "../../../games/GameLogicProcessingManager";
import { GDataMgr } from "../../../common/GameData";
import SuccessfulEntryOneView from "../settlement/SuccessfulEntryOneView";
import SuccessfulEntryThreeView from "../settlement/SuccessfulEntryThreeView";
import FailEntryYiView from "../settlement/FailEntryOneView";
import ShareRecordVideoView from "../pop/ShareRecordVideoView";
import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import { BaseUIScene } from "../../base/BaseUIScene";
import MoreGameView from "../wechat/MoreGameView";
import SuccessfulEntryThreeVivoView from "../settlement/SuccessfulEntryThreeVivoView";
import SuccessfulEntryThreeOppoView from "../settlement/SuccessfulEntryThreeOppoView";
import SuccessfulEntryOneOppoView from "../settlement/SuccessfulEntryOneOppoView";

import MoreGameRandomGameBox713Temp from "../wechat/MoreGameRandomGameBox713Temp";
import SuccessfulEntryOneQQView from "../settlement/SuccessfulEntryOneQQView";
import SuccessfulEntryThreeQQView from "../settlement/SuccessfulEntryThreeQQView";

/**
 * 第一关
 */
export class LevelBase extends BaseUIScene {
    className_key = "LevelScene";

    public constructor() {
        super();
        this.tempSoundChanels = {};
        // this.skin = 'game/Level1Scene.json';
    }
    public box_player: Laya.Box;
    public boxDialog: Laya.Box;
    //场景的动画
    public box_enb: Laya.Box;

    //是否返回了主界面
    public isReturbToHome: boolean;

    //动画是否已经销毁
    public isAniDestory: boolean = false;

    //场景移动的动画
    public box_game: Laya.Box;
    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    public initView() {
        this.createLabelIcon();

        this.init();

    }

    /**
     * 节点索引
     */
    public _index: number = 0;

    public _mapData: any;
    public setData(data) {
        this.viewData_ = data;
        this._mapData = data;

    }
    isCreatePlayer: boolean = false;
    /**
     * 初始化角色播放状态
     */
    public async initPlayerStatus() {
        if (this._mapData.player.status) {
            (!this._ani_player) && (this._ani_player = await this.createSkeByUrl(this._mapData.player.url));
            if (!this._ani_player.parent && !this.box_player.getChildByName("ani_player")) {
                this._ani_player.name = "ani_player";
                this.box_player.addChild(this._ani_player);
                this._ani_player.x = this._mapData.player.status.x;
                this._ani_player.y = this._mapData.player.status.y;
                this._ani_player.play(this._mapData.player.status.aniN, this._mapData.player.status.loop);
            }
        }
    }

    /**
     * 展示对话框的场景
     */
    public _showLabelObj = {};
    /**
     * 声音
     */
    public _showSoundObj = {};


    public _aniArr: Laya.Skeleton[] = [];

    /**GameView */
    public gameView: GameViewCap;

    /**初始化游戏相关信息 */
    public init() {
        this.isReturbToHome = false;
        this._index = 0;
        this.box_player.x = (this._index) * 1080;
        this.box_game.x = (this._index) * -1080;
        //清理声音
        this._showSoundObj = [];
        if (this.gameView) {
            this.gameView.removeSelf();
        }
        this.gameView = null;

        //销毁动画
        this.destroyAnimation();

        this.box_player.removeChildren();
        this.box_enb.removeChildren();

        ViewChangeMgr.getInstance().CurLevelBasea = this;
        this.refreshViewInLevel();
        this.isAniDestory = false;
    }

    public _localAniName: string = null;

    public _ani_player: Laya.Skeleton;

    /**
     * 播放动画
     * 
     * callBack (aniName)
     */
    public playAnimationByName(aniName: any, callBack: Function, isLoop = false, time: number = 1) {
        console.log("aniName>>>>>>>>>>>>", aniName, "curtime = ", GameLogicProcessMgr.GetCurTimea());
        this._localAniName = aniName;
        if (this._ani_player != null) {
            // this.ani_player.player.stop() ;
            this._ani_player.visible = true;
            if (callBack) {
                this._ani_player.player.off(Laya.Event.STOPPED, this, this.onPlayAniComplete);
                this._ani_player.player.once(Laya.Event.STOPPED, this, this.onPlayAniComplete, [aniName, callBack, time]);
            }
            Laya.CallLater.I.callLater(this, () => {
                this._ani_player.play(aniName, isLoop, true)
            })
            // Laya.timer.frameOnce(1, this, () => { this.ani_player.play(aniName, isLoop, true); })

        } else {
            callBack && callBack(aniName)
        }
    }

    public onPlayAniComplete(aniName: string, callBack: Function, time: number) {
        console.log("onComplete aniName =", aniName, "curtime = ", GameLogicProcessMgr.GetCurTimea());
        if (time == 1) {//次数播放完毕后
            callBack && callBack(aniName);
        } else {
            time--;
            this.playAnimationByName(aniName, callBack, false, time);
        }
    }

    /**
     * 创建龙骨动画
     * @param url 1
     */
    public createSkeByUrl(url: string): Promise<Laya.Skeleton> {
        console.log("创建龙骨动画-->" + url);
        return new Promise<Laya.Skeleton>((resolve) => {
            AnimationMgr.instance.showSkeAnimation(url, (boomAnimation: Laya.Skeleton) => {
                // this.addChild(boomAnimation);
                boomAnimation.player.playbackRate = 1;
                boomAnimation.autoSize = true;
                // boomAnimation.pivotX = boomAnimation.width / 2;
                // boomAnimation.pivotY = boomAnimation.height / 2;
                boomAnimation.scale(1, 1);
                // boomAnimation.play(0, true);
                this._aniArr.push(boomAnimation);
                resolve(boomAnimation);
            }, 0);
        })

    }
    public _localData = null;

    /**是否弹出弹框选择 */
    public _isPop: boolean = false;


    private showPop() {
        if (this._localData.popTime && this._localData.popTime > 1) {
            //循环几次弹出
            let playTime = 1;
            let self = this;
            let platEndCall = (aniName) => {
                playTime++;
                if (playTime >= self._localData.popTime) {
                    if (!self._isPop) {
                        self.popChoose();
                    }
                    self.playAnimationByName(self._localData.aniName, () => {

                    }, true);
                } else {
                    self.playAnimationByName(self._localData.aniName, platEndCall);
                }
            }
            this.playAnimationByName(this._localData.aniName, platEndCall);
        } else {
            //弹出选择 一次弹出
            if (!this._isPop) {
                this.popChoose();
            }
            if (this._localData.loop) {
                this.playAnimationByName(this._localData.aniName, () => {
                }, true);
            }
        }
    }


    private showWin() {
        if (this.tempSoundChanels["rain"]) {
            this.tempSoundChanels["rain"].stop();
        }
        //alert('win');
        this.showGC(true);
        Laya.timer.once(3000, this, () => {
            this.onSuc();
        })
    }


    private showFail() {
        if (this.tempSoundChanels["rain"]) {
            this.tempSoundChanels["rain"].stop();
        }
        this.gameView.showResultIcon(false);
        /// alert('fail');
        //按要求延时1秒弹出窗口
        this.showGC(false);
        Laya.timer.once(3000, this, () => {
            this.onFail();
        })
    }


    private nextAni() {
        let nextAni = this._mapData.player.ani[this._localData.next];//下一个动画
        if (nextAni) {//继续
            this.playAnimationByName(nextAni.aniName, () => {
                this.onPlayAniOnce();
            }, false, (nextAni.pTime ? nextAni.pTime : 1));
        }
    }
    /**
     * 播放一次后结束的
     */
    public onPlayAniOnce() {
        this._localData = this._mapData.player.ani[this._localAniName];

        if (this._localData) {//存在数据
            if (this._localData.pop) {
                this.showPop();
            } else {
                if (this._localData.isWin == 1) {//成功
                    this.showWin();

                    return;
                } else if (this._localData.isWin == 2) {//失败
                    this.showFail();
                    return;
                }
                this.nextAni();
            }
        }
    }

    /**
     * 弹出选择框
     */
    public popChoose() {
        this._isPop = true;
        console.log("int pop choose!")
        if (!this.gameView) {
            return;
        }
        let self = this;
        this.gameView.showChoseView({
            data: this._mapData.player.choose[this._index], callBack: (right: boolean, aniName: string) => {
                self.callFunc(right, aniName);
            }
        })
    }

    /**
     * 游戏开始
     */
    public onStart() {

        let start = this._mapData.player.start;
        this._localData = this._mapData.player.ani[start[this._index]];
        console.log("11111 this.index = ", this._index, "this.localData = ", this._localData);
        let bFlag = false;
        this.playAnimationByName(this._localData.aniName,
            this.onPlayAniOnce.bind(this),
            bFlag,
            this._localData.pTime ? this._localData.pTime : 1);
    }

    /**
     * 选择回调
     */
    public callFunc(right: boolean, aniName: string) {
        if (right) {
            if (this._index < this._mapData.player.choose.length) {
                this._index++;
            }
            //刷新下进度
            this.gameView.refreshUpIndeInfo(this._index, this._mapData.player.choose.length);
            this.gameView.showResultIcon(right);
        }
        let pTime = 1;
        let curAni = this._mapData.player.ani[aniName];//下一个动画
        if (curAni.pTime) {
            pTime = curAni.pTime;
        }
        this.playAnimationByName(aniName, () => {
            this.onPlayAniOnce();
        }, false, pTime);
    }

    /**
     * 结束黑幕
     */
    private showGC(isWin: boolean): void {
        let animName: string[] = isWin ? this._mapData.mask.win : this._mapData.mask.fail;
        this.gameView.showGameOverEffect(animName[this._index] || animName[0])
    }



    /**
     * 临时信道控制
     */
    protected tempSoundChanels: any;

    public onPlayLabel(evt: { audioValue: string, floatValue: number, intValue: number, name: string, stringValue: number, time: number }) {
        if (this.isAniDestory) return;
        // sound_girlafraid_1
        if (evt.name != 'undefined' && evt.name) {
            //console.log(evt.name);
            if (evt.name.indexOf('sound') > -1) {
                this.checkGameSound(evt.name);
            } else if (evt.name.indexOf('show') > -1) {
                this.checkGameShow(evt.name);
            }
        }
    }

    private checkGameShow(showStr: string) {
        let showArr = showStr.split("_");
        let id = showArr[1];
        if (!this._showLabelObj[id]) {
            this._showLabelObj[id] = true;
            this.showDialogView(parseInt(id));
        }
    }
    /**
     * 检测播放声音
     * @param soundStr
     */
    private checkGameSound(soundStr: string) {
        let soundArr = soundStr.split('_');
        let count = soundArr[2];
        let soundName = soundArr[1];
        let index = null
        let soundObj = this._showSoundObj[this._localAniName];
        let flag = this.checkSoundPlay(soundObj, count, soundName, index);
        if (!flag) { return }
        console.log('播放声音', count, soundName);
        if (soundName == "rain") {//雨声太长需要控制
            let self = this;
            let rainChannel = SoundMgr.getInstance().playEffect(soundName, Number(count)).then((rainChannel) => {
                self.tempSoundChanels["rain"] = rainChannel;
            });
        } else {
            SoundMgr.getInstance().playEffect(soundName, Number(count))
        }
    }

    private checkSoundPlay(soundObj: any, count: string, soundName: string, index: number): boolean {
        if (soundObj == null) {
            soundObj = {};
            index = 1;
            if (Number(count) == 0) {
                (count) = 1 + '';
            }
        } else {
            index = soundObj[soundName];
            if (index == null) {
                index = 1;
                if (Number(count) == 0) {
                    (count) = 1 + '';
                }
            } else {
                if (Number(count) == 0 || soundName == "1015b" || soundName == "shot" || soundName == "chi") {//特殊的音效 9关踩木板 吃东西音效
                    (count) = 1 + '';
                } else {
                    index++;
                }
            }
        }

        if (this._showSoundObj[this._localAniName] && soundName == "jiuminga") {//如果播放过一次救命就不会再播放了
            return false;
        }
        if (soundObj[soundName]) {//有次数控制的播放了次数控制了//没有次数控制的 或是特殊的就事件控制次数
            return false;
        }
        soundObj[soundName] = index;
        this._showSoundObj[this._localAniName] = soundObj;

        return true
    }

    public img_txt: Laya.Image
    public txt_value: Laya.Label;
    public createLabelIcon() {
        let skin = 'resource/assets/img/ui/game/gameinterface_baseboard_8.png';
        this.img_txt = new Laya.Image();
        this.img_txt.skin = skin;
        // icon_showLabel.centerY = -300;
        // icon_showLabel.x = 190;
        this.img_txt.visible = false;
        //this.icon_showLabel.zOrder = 10;

        this.txt_value = new Laya.Label();
        this.txt_value.centerX = 0;
        this.txt_value.centerY = -25;
        this.txt_value.fontSize = 30;
        this.txt_value.wordWrap = true;
        this.txt_value.width = 250;
        this.img_txt.addChild(this.txt_value);
        //this.box_game.addChild(this.icon_showLabel)
        this.boxDialog.addChild(this.img_txt)
    }

    /**
     * 展示对话框
     */
    public showDialogView(id: number) {
        let self = this;
        if (self.img_txt) {
            Laya.timer.clearAll(self.img_txt);
            let stAnyData = ConfigMgr.getInstance().getDialIf(id);
            if (stAnyData) {
                if (stAnyData.nR == 1) {
                    self.img_txt.scaleX = -1;
                    self.txt_value.scaleX = -1;
                } else {
                    self.img_txt.scaleX = 1;
                    self.txt_value.scaleX = 1;
                }
                self.img_txt.x = stAnyData.nX;
                self.img_txt.y = stAnyData.nY;
                console.log("len = ", stAnyData.desc.length);
                let nWith = stAnyData.desc.length * 30;
                if (nWith > 250) {
                    nWith = 250;
                }
                self.txt_value.width = nWith;
                self.txt_value.text = stAnyData.desc;
                self.img_txt.visible = true;

                Laya.timer.once(stAnyData.nTime, self.img_txt, (icon_showLabel) => {
                    icon_showLabel.visible = false;
                }, [self.img_txt]);
            }
        }
    }

    /**
     * 销毁动画
     */
    public destroyAnimation() {
        this.isAniDestory = true;
        let aniArr = this._aniArr;
        let len = aniArr.length;
        for (let i = 0; i < len; i++) {
            let ani = aniArr[i];
            if (ani) {
                Laya.loader.clearRes(ani.url);
                ani.stop();
                ani.removeSelf();
                ani.destroy();
            }
            ani = null;
        }
        aniArr.splice(0, len);
        this._showLabelObj = {};
        this._ani_player = null;
    }

    public addEvent() { }

    public removeEvent() { }

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
        //增加销毁动画
        this.destroyAnimation();
    }

    /**游戏逻辑控制 */
    public startGame() {
        //销毁动画
        this.destroyAnimation();
        this.isAniDestory = false;
        if (ViewManager.getInstance().popViewIsPop("AddPsView")) {//兼容如果重复存在则移除
            ViewManager.getInstance().views["AddPsView"] && ViewManager.getInstance().views["AddPsView"].removeSelf();
        }
        ViewChangeMgr.getInstance().commonView.removeBtEvent();
        //开启录制视频
        MiniGameMgr.instance.StartRecordVideo();
        this.isReturbToHome = false;
        this.gameView = ViewManager.getInstance().showView(GameViewCap) as GameViewCap;
        // this.gameView.startVideoImage();
        // this.gameView.hideGameOverEffect();
        // this.gameView.refreshChooseContext();
        // this.gameView.refreshUpIndeInfo(this._index, this._mapData.player.choose.length);\
        this.initGameView()

        if (!PlayerDataMgr.getInstance().checkDyLogIndexRecorded(PlayerDataMgr.getInstance().getCurGuanQiaToChallenge())) {
            ViewChangeMgr.getInstance().startGame();
        }
    }
    /**显示GameHome游戏界面 */
    public showGameHome() {
        this.initPlayerStatus();
        ViewManager.getInstance().showView(GameHomeView);
    }

    /**显示Game*/
    public showGameView() { }

    /**停止游戏 */
    public stopGame() { }

    /**重新开始游戏 */
    public restartGame(bReStartAll: boolean = true) {

        //开启录制视频
        MiniGameMgr.instance.StartRecordVideo();
        this.isReturbToHome = false;
        this._showSoundObj = [];
        this._showLabelObj = [];
        //this.pGameView  = ViewManager.getInstance().showView(GameView) as GameView;
        this.initGameView();
    }

    private initGameView() {
        if (this.gameView) {
            this.gameView.startVideoImage();
            this.gameView.hideChoseView();
            this.gameView.hideGameOverEffect();
            this.gameView.refreshChooseContext();
            this.gameView.refreshUpIndeInfo(this._index, this._mapData.player.choose.length);
        }
        else {


            console.error("can not find pGameView!");
        }


    }

    private showTTGameR() {
        let fun = () => {
            if (MiniGameMgr.instance._strVideoPatch && MiniGameMgr.instance._strVideoPatch != "") {
                if (ConfigMgr.getInstance().getCSRBCL() != 1) {
                    if (BaseConst.infos.gameInfo.openPsAward == 1 && ConfigMgr.getInstance().getTBCL() == 1
                        && BaseConst.infos.gameInfo.for_pay == 1) {
                        ViewManager.getInstance().showView(SuccessfulEntryOneView);
                    } else {
                        ViewManager.getInstance().showView(SuccessfulEntryThreeView);
                    }
                } else {
                    ViewChangeMgr.getInstance().showBufLoadingView();
                    ResUtil.getIntance().loadGroups(["share"], () => {
                        ViewChangeMgr.getInstance().hideBufLoadingView();
                        ViewManager.getInstance().showView(ShareRecordVideoView);
                    });
                }

            } else {

                if (BaseConst.infos.gameInfo.openPsAward == 1 && ConfigMgr.getInstance().getTBCL() == 1
                    && BaseConst.infos.gameInfo.for_pay == 1) {
                    ViewManager.getInstance().showView(SuccessfulEntryOneView);
                } else {
                    ViewManager.getInstance().showView(SuccessfulEntryThreeView);
                }

            }
            MiniGameMgr.instance._saveCallF = null;
        }
        if (DeviceUtil.isTTMiniGame()) {
            MiniGameMgr.instance._saveCallF = () => {
                fun();
            };
        }
        MiniGameMgr.instance.StopVideoAd();

    }
    /**游戏成功 */
    public onSuc() {
        this.showTTGameR();
        //关闭录制视频
        if (this.isReturbToHome) {
            return;
        }
        console.log("Level Success!")
        // if(PlayerDataManager.getInstance().getCurLevel() >= PlayerDataManager.getInstance().getCurLevelMax()){
        if (DeviceUtil.isQQMiniGame()) {
            if (ConfigMgr.getInstance().getTBCL() == 1) {
                this.checkShowSuccess(Math.random() < BaseConst.infos.gameInfo.boxWDJ)
                // if () {//qq使用概率配置

                //     ViewManager.getInstance().showView(SuccessfulEntryOneView);
                // } else {
                //     ViewManager.getInstance().showView(SuccessfulEntryThreeView);
                // }
            } else {
                // ViewManager.getInstance().showView(SuccessfulEntryThreeView);
                ViewManager.getInstance().showView(SuccessfulEntryThreeQQView);

            }
        } else if (DeviceUtil.isTTMiniGame()) {
            // 等待保存当前录制视频完成后执行回调
            // 特殊处理录制时间达上限的情况
            if (MiniGameMgr.instance._nRecordTimeReal >= MiniGameMgr.instance._nRecordTime * 1000) {
                MiniGameMgr.instance._saveCallF && MiniGameMgr.instance._saveCallF();
            }
        } else {
            if (!ConfigMgr.getInstance().isWeCatMiniGame()) {
                this.checkShowSuccess(BaseConst.infos.gameInfo.openPsAward == 1 && ConfigMgr.getInstance().getTBCL() == 1
                    && BaseConst.infos.gameInfo.for_pay == 1)

            } else {
                this.weCatSpecialSettleMent();
            }
        }

        this.gameView.closeWeCatMoreGameView();

        if (!PlayerDataMgr.getInstance().checkDyLogIndexRecorded(PlayerDataMgr.getInstance().getCurGuanQiaToChallenge())) {
            ViewChangeMgr.getInstance().gameEnd();
            PlayerDataMgr.getInstance().recordDyLogIndex(PlayerDataMgr.getInstance().getCurGuanQiaToChallenge());
        }
    }

    private weCatSpecialSettleMent() {
        if (!ConfigMgr.getInstance().isWeCatMiniGame()) {
            return;
        }
        //2020.7.13-5
        if (LevelMgr.getInstance().nCurrentLevel >= 3) {
            // MoreGameView.bSuccess = true;
            // ViewManager.getInstance().showView(MoreGameView);

            if (PlayerDataMgr.getInstance().checkIsSpecial() && BaseConst.infos.gameInfo.MoreGameView == 1) {
                MoreGameView.bSuccess = true;
                ViewManager.getInstance().showView(MoreGameView);
            } else {
                MoreGameRandomGameBox713Temp.bSuccess = true;
                ViewManager.getInstance().showView(MoreGameRandomGameBox713Temp);
            }

        } else {
            ViewManager.getInstance().showView(SuccessfulEntryThreeView);
        }
        //2020.7.13-2
        this.gameView.closeWeCatMoreGameView();
        PlayerDataMgr.getInstance().nGotoLevel = 0;
    }

    private checkShowSuccess(flag: boolean) {
        if (flag) {
            if (DeviceUtil.isOPPOMiniGame()) {
                ViewManager.getInstance().showView(SuccessfulEntryOneOppoView);
            } else if (DeviceUtil.isQQMiniGame()) {
                ViewManager.getInstance().showView(SuccessfulEntryOneQQView, {
                    success: () => {
                    }, fail: () => {
                    }, isSuccess: true
                })
            } else {
                ViewManager.getInstance().showView(SuccessfulEntryOneView);
            }
        } else {
            if (DeviceUtil.isVIVOMiniGame()) {
                ViewManager.getInstance().showView(SuccessfulEntryThreeVivoView);
            } else if (DeviceUtil.isOPPOMiniGame()) {
                ViewManager.getInstance().showView(SuccessfulEntryThreeOppoView);
            } else if (DeviceUtil.isQQMiniGame()) {
                ViewManager.getInstance().showView(SuccessfulEntryThreeQQView);
            } else {
                ViewManager.getInstance().showView(SuccessfulEntryThreeView);
            }
        }
    }
    /**游戏失败 */
    public onFail() {
        //关闭录制视频
        MiniGameMgr.instance.StopVideoAd();
        if (this.isReturbToHome) {
            return;
        }
        console.log("Level Fail!");
        ViewManager.getInstance().showView(FailEntryYiView);
        this.gameView.closeWeCatMoreGameView();
        if (!PlayerDataMgr.getInstance().checkDyLogIndexRecorded(PlayerDataMgr.getInstance().getCurGuanQiaToChallenge())) {
            ViewChangeMgr.getInstance().gameEnd();
            PlayerDataMgr.getInstance().recordDyLogIndex(PlayerDataMgr.getInstance().getCurGuanQiaToChallenge());
        }
    }
    /**返回主页 */
    public returnToHome() {
        MiniGameMgr.instance.StopVideoAd();
        this.isReturbToHome = true;
        //Laya.Tween.clearAll(this);
        //增加销毁动画
        this.destroyAnimation();
        this.initPlayerStatus();
        //返回主界面关闭对话框
        if (this.img_txt) {
            this.img_txt.visible = false;
        }
        //如果当前就是最大关卡
        if (PlayerDataMgr.getInstance().getCurGuanQiaToChallenge() == PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia()) {
            this.init();
        } else {
            //打开别的界面前先删除自己的游戏界面
            if (this.gameView) {
                this.gameView.removeSelf();
            }
            this.gameView = null;
            GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_GH;
            LevelMgr.getInstance().createSceneByLevel(PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia());
        }
    }

    /**一些必要的数据清理 */
    public clearData() {
        this.box_player.removeChildren();
    }


    /**关闭游戏界面 */
    public closeGameView() {
        if (this.gameView) {
            this.gameView.removeSelf();
            this.gameView = null;
        }
    }

    /**刷新关卡中的界面 */
    public refreshViewInLevel() {
        let nCurState = GameStatusMgr.getInstance().levelStatus;
        if (nCurState == EGType.e_EGType_GH) {
            this.showGameHome();
            if (this.gameView) {
                this.gameView.removeSelf();
            }
        } else {
            if (nCurState == EGType.e_EGType_N
                || nCurState == EGType.e_EGType_CL) {
                this.startGame();
            }
        }
    }

    /**获取当前的选择信息 */
    public getCurChoosedInfo(): any {
        return this._mapData.player.choose[this._index];
    }

    /**关卡显示*/
    public showLevel() { }

    /**关卡隐藏 */
    public hideLevel() { }
}
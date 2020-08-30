import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import { PopBaseScene } from "../../base/PopBaseScene";
import { GEvent } from "../../../games/GameEvent";
import SoundMgr from "../../../common/SoundManager";
import GameEvent from "../../../common/GameEvent";
import { GameManager } from "../../../manager/GameManager";
import GameStatusMgr from "../../../games/GameStateManager";
import { EGType, PType } from "../../../games/CommonDefine";
import ViewChangeMgr from "../../../games/ViewChangeManager";
import AddPowerView from "../pop/AddPsView";
import { ConfigMgr } from "../../../games/ConfigManager";
import { PlayerDataMgr } from "../../../common/GameDataManager";
import AnimationMgr from "../../../manager/AnimationManager";
import { NativeVivoAd } from "../../../minigame/MiniVVManager";

export class FailEntryTwoVivoView extends PopBaseScene {
    className_key = "FailEntryTwoVivoView";
    // FailEntryTwoOppoView
    public grp_center: Laya.Box;
    public btn_chakan: Laya.Box;
    public txt_chakan: Laya.Label;
    public btnGet: Laya.Box;
    public imageGoods: Laya.Image;
    public sptext: laya.display.Text;
    public box_ad: Laya.Box;
    public btnHome: Laya.Image;
    public btnAgain: Laya.Box;


    private _bRecvAward: boolean

    private _nGlodAddByWathcVideo: number;
    public constructor() {
        super();
        this.skin = "game/uiView/settlement/FailEntryTwoVivoView.json";
    }

    public initMiniGame() {

    }

    public onRemoved() {
        super.onRemoved();
        MiniGameMgr.instance.hideBlockAD();
        this.removeEvent();
        this._bRecvAward = false;
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
            case this.btnGet:
                this.onWatchVideoReceiveAward();
                break
        }
    }

    public addEvent() {
        this.registerEvent(this.btnAgain, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnHome, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnGet, Laya.Event.CLICK, this.onClick, this);
    }

    public async showNativeAd() {
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true)
        this.box_ad.removeChildren();
        let nativeAdData: any = await MiniGameMgr.instance.loadNativeAd();
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false)
        this.btn_chakan.visible = false;
        this.btnGet.left = 320;
        if (nativeAdData) {//拉取到原生广告
            this.btn_chakan.visible = true;
            console.log("原生广告数据", nativeAdData);
            let data = nativeAdData.adList[0];
            this.btn_chakan.right = 65;
            this.btnGet.left = 65;
            let text = this.txt_chakan;
            if (text) {
                // this.hideBanner()
                // text.text = MiniManeger.instance.infos.nativeIdText
                if (MiniGameMgr.instance.platformInfos.touchByMistakeByLook) {
                    text.text = '查看';
                    let startHour = MiniGameMgr.instance.platformInfos.startHour;
                    let endHour = MiniGameMgr.instance.platformInfos.endHour;
                    let date = new Date();
                    let week = date.getDay();
                    if (week == 0 || week == 6) {//周末
                        text.text = '查看';
                    } else {
                        let hour = date.getHours();
                        if (hour >= startHour && hour <= endHour) {
                            text.text = '查看广告';
                        } else {
                            text.text = '查看';
                        }
                    }
                } else {
                    text.text = "查看广告";
                }

            }
            this.initNativeBanner(nativeAdData);
            nativeAdData.nativeAd.reportAdShow({ adId: data.adId });
            let fun = () => {
                nativeAdData.nativeAd.reportAdClick({ adId: data.adId });
                if (text) {
                    text.text = "查看广告";
                }
            }
            this.btn_chakan.on(Laya.Event.CLICK, this, this.onRerort, [fun]);
            this.box_ad.on(Laya.Event.CLICK, this, this.onRerort, [fun]);
        }
        this.showBanner({className_key: this.className_key})
    }
    public nativeData: { adList: NativeVivoAd[], nativeAd: any };
    public initNativeBanner(data: { adList: NativeVivoAd[], nativeAd: any }) {
        this.nativeData = data;
        this.box_ad.removeChildren();
        let ad = data.adList[0];
        let icon_bg = new Laya.Image;
        icon_bg.size(1000, 500);
        icon_bg.skin = ad.imgUrlList[0];
        this.box_ad.addChild(icon_bg);
        let icon_flg = new Laya.Image()
        icon_flg.skin = ad.logoUrl;
        icon_flg.top = icon_flg.right = 0;
        icon_bg.addChild(icon_flg);

    }
    private onRerort(fun: any) {
        if (fun && fun instanceof Function) {
            fun()
        }
    }


    public removeEvent() {
        this.btn_chakan.off(Laya.Event.CLICK, this, this.onRerort);
        this.box_ad.off(Laya.Event.CLICK, this, this.onRerort);
        super.removeEvent();
    }
    /**开始游戏 */
    private failEntryErReStartGame() {
        SoundMgr.getInstance().playEffect("button", 1);
        if(GameManager.instance.restartGame()){
            MiniGameMgr.instance._bFlagSpecialView = true;
            this.removeSelf();
        }
    }

    /**返回主页 */
    private returnToHome() {
        SoundMgr.getInstance().playEffect("button", 1);
        //PlayerDataManager.getInstance().setCurLevel(PlayerDataManager.getInstance().getCurLevelMax());
        GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_GH;
        ViewChangeMgr.getInstance().CurLevelBasea.returnToHome();
        MiniGameMgr.instance._bFlagSpecialView = true;
        // ViewChangeMgr.getInstance().commonView.addBtEvent();
        this.removeSelf();
    }

    public removeSelf() {
        this.box_ad.removeChildren();
        return super.removeSelf();
    }
    /**刷新界面 */
    public initView() {

        MiniGameMgr.instance._onShareVideoSuccess = false;
        this.resetData();
        ViewChangeMgr.getInstance().commonView.addBtEvent();
        this.showNativeAd()
    }


    private resetData() {
        this._bRecvAward = false;
        AddPowerView._bCloseBinner = false;

        //刷新视频领取奖励的数值
        let objData = ConfigMgr.getInstance().getGCDBID(7);
        if (objData) {
            this._nGlodAddByWathcVideo = parseInt(objData.strValue);
        }
        // BitmapLabelUtils.setLabel(this.spCount, this._nGlodAddByWathcVideo.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        this.sptext.text = this._nGlodAddByWathcVideo.toString();
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

    private startFailImageBtShareAni() {
        Laya.timer.clearAll(this.btnGet);
        AnimationMgr.instance.zoomTweena(this.btnGet, this.btnGet)
    }


}
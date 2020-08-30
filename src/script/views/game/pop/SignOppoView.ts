import { MiniGameMgr } from "../../../minigame/MiniGameMgr";
import SoundMgr from "../../../common/SoundManager";
import { ConfigMgr } from "../../../games/ConfigManager";
import { PlayerDataMgr } from "../../../common/GameDataManager";
import GameLogicProcessMgr from "../../../games/GameLogicProcessingManager";
import { PType } from "../../../games/CommonDefine";
import { PopBaseScene } from "../../base/PopBaseScene";
import AnimationMgr from "../../../manager/AnimationManager";


export default class SignOppoView extends PopBaseScene {

    public className_key = "SignOppoView";
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;

    public grp_center: Laya.Box;
    public boxItem: Laya.Box;
    public sprWorldLeft: laya.display.Text;
    public sprWorldRight: laya.display.Text;
    public btnSign: Laya.Image;
    public sprTomorrow: Laya.Sprite;
    public btnClose: Laya.Sprite;
    public btn_double: Laya.Image;

    private _nCurTime: number;
    private _bDouble: boolean;
    private _bIsRunning: boolean;

    constructor() {
        super();
        this._bIsRunning = false;
        this.skin = "game/uiView/pop/SignOppoView.json";
    }

    protected childrenCreated(): void {
        super.childrenCreated();
    }

    public initMiniGame() {
        this.hideBanner();
        this.showBanner({ className_key: this.className_key });
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this._bIsRunning = false;
        Laya.Tween.clearAll(this.btnSign);
        Laya.timer.clearAll(this);

    }

    public initView() {
        this._nCurTime = 0;
        this._bDouble = false;
        this._bIsRunning = true;

        this.refreshSignData();
        this.refreshSignView();
        this.refreshSignRecvBt();
        this.initDouble();
    }

    public addEvent(): void {
        this.registerEvent(this.btnSign, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btnClose, Laya.Event.CLICK, this.onClick, this);
        this.registerEvent(this.btn_double, Laya.Event.CLICK, this.onClick, this);
    }

    public removeEvent() {
        super.removeEvent();
    }
    public removeSelf() {
        if (DeviceUtil.isOPPOMiniGame()) {
            this.hideBanner();
            this.showBanner({ className_key: "GameHomeView" });
        }

        return super.removeSelf();
    }

    private onClick(evt: Laya.Event): void {
        SoundMgr.getInstance().playEffect("button", 1);
        switch (evt.currentTarget) {
            case this.btnClose:
                this.removeSelf();
                break
            case this.btnSign:
                this._bDouble = false
                this.onSigned();
                break;
            case this.btn_double:
                this._bDouble = true;
                this.onSigned();
                break;

        }
    }



    /**初始化界面信息 */
    private refreshSignView() {
        let arrData = ConfigMgr.getInstance().getSDA();
        let len = arrData.length;
        console.log('数据', arrData);
        let imageTemp: Laya.Image = null;
        let sprGoods: Laya.Sprite = null;
        for (let i = 0; i < len; ++i) {
            imageTemp = this.boxItem.getChildAt(i) as Laya.Image;
            if (imageTemp) {
                if (i < 6) {
                    this.checkWorkDay(sprGoods, imageTemp, arrData, i)
                } else {
                    // BitmapLabelUtils.setLabel(this.sprWorldLeft, arrData[i].nCount.toString(), "resource/assets/img/ui/sign/sign_number1/sign_number1_", 0, ".png", "left");
                    //BitmapLabelUtils.setLabel(this.sprWorldRight, arrData[i].nCount7.toString(), "resource/assets/img/ui/sign/sign_number1/sign_number1_", 0, ".png", "left");
                    this.sprWorldLeft.text = 'x' + arrData[i].nCount.toString();
                    this.sprWorldRight.text = 'x' + arrData[i].nCount7.toString();
                }
                this.checkStatus(imageTemp, i);

            }
        }
    }

    private checkWorkDay(sprGoods: Laya.Sprite, imageTemp: Laya.Image, arrData: any, i: number) {
        //更新奖励图片
        sprGoods = imageTemp.getChildAt(0) as Laya.Sprite;
        if (sprGoods) {
            let str = "";
            if (arrData[i].nType == 1) {
                str = "resource/assets/img/common/sign_icon_inter.png"
            } else if (arrData[i].nType == 2) {
                str = "resource/assets/img/common/sign_icon_gold.png"
            }
            sprGoods.loadImage(str)
        }
        //刷新数量
        let boxTemp = imageTemp.getChildByName("boxWorld");
        if (boxTemp) {
            let sprNum = boxTemp.getChildByName("spWord") as Laya.Text;
            if (sprNum) {
                //BitmapLabelUtils.setLabel(sprNum, arrData[i].nCount.toString(), "resource/assets/img/ui/sign/sign_number1/sign_number1_", 0, ".png", "left");
                sprNum.text = 'x' + arrData[i].nCount.toString();

            }
        }
    }
    private checkStatus(imageTemp: Laya.Image, i: number) {
        let imgSigned: Laya.Image = imageTemp.getChildByName("spSigned") as Laya.Image;
        let img_1 = (imgSigned.getChildAt(0) as Laya.Image);
        let sprite_1 = (imgSigned.getChildAt(1) as Laya.Sprite);
        sprite_1.visible = true;
        imgSigned.visible = true;
        let nSignIndex = PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex;
        if (imgSigned) {
            if (i < nSignIndex) {
                img_1.skin = 'resource/assets/img/ui/sign/sign_baseboard_6.png';
            }
            else if (i == nSignIndex) {
                img_1.skin = 'resource/assets/img/ui/sign/sign_light_1.png';
                sprite_1.visible = false;
            }
            else {
                imgSigned.visible = false;
            }
        }

    }

    /**刷新数据 */
    private refreshSignData() {
        //判断当前是否能签到
        this._nCurTime = GameLogicProcessMgr.GetCurTimea();
        if (Utils.judgeIsOnTheSameDay(PlayerDataMgr.getInstance().stPlayerDataBase.nSignTimeLast, this._nCurTime)) {
            this.btnSign.visible = false;
            this.btn_double.visible = false;
            return;
        }
        //7天后轮回
        if (PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex >= 7) {
            PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex = 0;
        }
    }

    /**双倍标签的初始状态*/
    private initDouble() {


    }

    /**刷新领奖按钮的逻辑*/
    private refreshSignRecvBt() {
        this._nCurTime = GameLogicProcessMgr.GetCurTimea();;

        this.sprTomorrow.visible = true;
        this.btnSign.visible = true;
        this.btn_double.visible = true;

        //如果是同一天
        if (Utils.judgeIsOnTheSameDay(PlayerDataMgr.getInstance().stPlayerDataBase.nSignTimeLast, this._nCurTime)) {
            this.btnSign.visible = false;
            this.btn_double.visible = false;
        } else {
            this.sprTomorrow.visible = false;
            this.startSignImageBtShareAni();
        }
    }

    /**请求签到 */
    private onSigned() {
        if (this._bDouble) {
            MiniGameMgr.instance.playVideoAd({
                successFun: () => {
                    this.procSignedData();
                }
            });
        } else {
            this.procSignedData();
        }
    }

    /**签到的数据处理 */
    private procSignedData() {
        //增加体力值
        let objData = ConfigMgr.getInstance().getSDBSID(PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex);
        if (objData) {
            let numValue = objData.nCount;
            if (this._bDouble) {
                numValue *= 2;
            }
            PlayerDataMgr.getInstance().AddProp(objData.nType, numValue);
            if (objData.nType == PType.e_GType_Sp) {
                TipsManager.getInstance().showDefaultTips("体力+" + numValue.toString());
            }
            if (PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex == 6) {
                numValue = objData.nCount7;
                if (this._bDouble) {
                    numValue *= 2;
                }
                PlayerDataMgr.getInstance().AddProp(objData.nType, numValue);
            }
        }
        //签到标签增加
        PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex += 1;
        //记录签到时间
        PlayerDataMgr.getInstance().stPlayerDataBase.nSignTimeLast = GameLogicProcessMgr.GetCurTimea();
        //保存数据
        PlayerDataMgr.getInstance().SaveData();
        //刷新界面信息
        this.refreshSignView();
        this.refreshSignRecvBt();
    }

    private startSignImageBtShareAni() {
        if (!this._bIsRunning && this.btnSign.visible) {
            return;
        }
        Laya.timer.clearAll(this.btnSign);

        // AnimationMgr.instance.zoomTweena(this.btnSign, this.btnSign)
    }
}
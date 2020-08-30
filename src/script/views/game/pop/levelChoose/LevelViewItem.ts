
import LevelView from "./LevelView";
import { PlayerDataMgr } from "../../../../common/GameDataManager";
import SoundMgr from "../../../../common/SoundManager";
import { ConfigMgr } from "../../../../games/ConfigManager";
import { PType } from "../../../../games/CommonDefine";
import ViewChangeMgr from "../../../../games/ViewChangeManager";
import { BaseUIScene } from "../../../base/BaseUIScene";
import AddPowerView from "../AddPsView";
import { GameManager } from "../../../../manager/GameManager";
import { MiniGameMgr } from "../../../../minigame/MiniGameMgr";

export default class LevelViewItem extends BaseUIScene {
    public className_key = "LevelViewItem";

    public spBg: Laya.Sprite;
    public levelNum: Laya.Sprite;
    public guanka: Laya.Sprite;
    public tips: Laya.Sprite;

    private _nCurLevel: number;
    private parentView: LevelView;
    private _bAni: boolean;
    constructor(data_: number) {
        super();
        this._nCurLevel = data_;
        this.skin = "game/uiView/choose/LevelIndexView.json";

    }

    public adaptationStage() {
        this.width = 839;//318; 
        this.height = 143;//329;
        this.pivotX = 839 / 2;
        this.pivotY = 143 / 2;
    }
    onEnable(): void {
        this.on(Laya.Event.CLICK, this, this.enterLevel);
    }

    onDisable(): void {
        this.off(Laya.Event.CLICK, this, this.enterLevel);
        Laya.Tween.clearAll(this);
        //Laya.timer.clearAll(this.openLevelItemAni);
    }


    protected childrenCreated(): void {
        this.refreshView();
    }

    private refreshView() {
        this._bAni = false;
        //刷新关卡节点的数字
        //刷新界面
        this.tips.visible = true;
        let spBgstr = "resource/assets/img/ui/levelview/level_baseboard_1.png";
        let guankastr = "resource/assets/img/ui/levelview/level_word_2.png";
        let numStr = "resource/assets/img/common/level_number12/level_number_";
        if (this._nCurLevel <= PlayerDataMgr.getInstance().getCurGuanQiaMax()) {
            this.tips.visible = false;
            this.spBg.loadImage("resource/assets/img/ui/levelview/level_baseboard_1.png");
            spBgstr = "resource/assets/img/ui/levelview/level_baseboard_1.png";
            guankastr = "resource/assets/img/ui/levelview/level_word_1.png"
            numStr = "resource/assets/img/common/level_number1/level_number_";

        }
        else if (this._nCurLevel == PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia()) {
            spBgstr = "resource/assets/img/ui/levelview/level_baseboard_2.png";
            guankastr = "resource/assets/img/ui/levelview/level_word_1.png"
            numStr = "resource/assets/img/common/level_number1/level_number_";
            this._bAni = true;
        } else {
            this.tips.visible = false;
            spBgstr = "resource/assets/img/ui/levelview/level_baseboard_3.png";
            guankastr = "resource/assets/img/ui/levelview/level_word_2.png"
            numStr = "resource/assets/img/common/level_number12/level_number_";
        }
        this.spBg.loadImage(spBgstr);
        this.guanka.loadImage(guankastr);
        BitmapLabelUtils.setLabel(this.levelNum, this._nCurLevel.toString(), numStr, 0, ".png", "center");
        //this.openLevelItemAni();
    }

    public setData(data_: number) {
        this._nCurLevel = data_;
        this.refreshView();
    }

    public enterLevel() {
        SoundMgr.getInstance().playEffect("button", 1);
        if (this._nCurLevel > PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia()) {
            TipsManager.getInstance().showDefaultTips("未解锁");
            return;
        }

        let numCost = 1;
        let objData = ConfigMgr.getInstance().getGCDBID(8);
        if (objData) {
            numCost = parseInt(objData.strValue);
        }

        //检测体力是否足够
        let b = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, numCost);
        if (!b) {
            GameManager.instance.onPowerNotEnough();
            return;
        }
        //扣除体力
        PlayerDataMgr.getInstance().subProp(PType.e_GType_Sp, numCost);


        //ViewChangeMgr.getInstance().gotoLevel(this._nCurLevel);
        //2020.7.13-2-4
        // if (ConfigMgr.getInstance().isWeCatMiniGame()
        //     && PlayerDataMgr.getInstance().isSecondEnterGame()
        //     && BaseConst.infos.gameInfo.openPsAward == 1) {
        //     this.wxOper71324();
        // } else {
            //2020.7.13-1-1
            this.enterOper();
       // }
        // PlayerDataManager.getInstance().setCurLevel(this.nCurLeve-1);
        // GameStateManager.getInstance().levelState = EnterGameType.enum_EnterGameType_ChooseLevel;
        // LevelManager.getInstance().createLevelScene(this.nCurLeve);
        this.parentView.closeViewWhenGoToLevel();
    }

    public setParentView(pParentView: LevelView) {
        this.parentView = pParentView;
    }

    /**开启一个缩放的动画 */
    // private openLevelItemAni() {
    //     if (this._nCurLevel == PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia() && this._bAni) {
    //         Laya.Tween.clearAll(this);
    //         Laya.Tween.to(this, { scaleX: 1.1, scaleY: 1.1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, (args) => {
    //             Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.sineOut, Laya.Handler.create(this, (args) => {
    //                 Laya.timer.once(0, this, this.openLevelItemAni);
    //             }));
    //         }));
    //     } else {
    //         Laya.Tween.clearAll(this);
    //         Laya.timer.clearAll(this.openLevelItemAni);
    //     }
    // }

    //2020.7.13-2-4
    private wxOper71324() {
        if (!ConfigMgr.getInstance().isWeCatMiniGame()) {
            return;
        }
        if (!PlayerDataMgr.getInstance().isSecondEnterGame()) {
            return;
        }
        MiniGameMgr.instance.playVideoAd({
            successFun: () => {
                this.enterOper();
            },
            failFun: () => {
                this.enterOper();
            },
            errorFun: () => {
                this.enterOper();
            }
        });
    }

    //2020.7.13-1-1
    private enterOper() {
        //2020.7.13-1-1
        if (ConfigMgr.getInstance().isWeCatMiniGame()
            && this._nCurLevel >= BaseConst.infos.gameInfo.splevel
            && BaseConst.infos.gameInfo.openPsAward == 1) {
            //打开体力宝箱界面
            // PlayerDataManager.getInstance().bEnterGameFromGameHome = false;
            // PlayerDataManager.getInstance().nGotoLevel = this.nCurLeve;
            // ViewManager.getInstance().showView(SuccessfulEntryOneView);
            ViewChangeMgr.getInstance().gotoLevel(this._nCurLevel);
        } else {
            ViewChangeMgr.getInstance().gotoLevel(this._nCurLevel);
        }
    }
}
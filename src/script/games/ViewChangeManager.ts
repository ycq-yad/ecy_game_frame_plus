import { LevelBase } from "../views/game/level/LevelBase";
import GameStatusMgr from "./GameStateManager";
import { PlayerDataMgr } from "../common/GameDataManager";
import { EGType } from "./CommonDefine";
import { LevelMgr } from "../manager/LevelManager";
import GameBufferLoad from "../loading/GameBufferLoading";
import PlatformDY from "../../PlatformDY";
import CommonView from "../views/game/pop/CommonView";
import { MiniGameMgr } from "../minigame/MiniGameMgr";
import GameEvent from "../common/GameEvent";
import ShouMoreGameInView from "../views/game/wechat/ShouMoreGameInView";
import { GDataMgr } from "../common/GameData";
import MoreGameViewTemp from "../views/game/wechat/MoreGameViewTemp";
import WeCatMoreGameView from "../views/game/wechat/WeCatMoreGameView";
import MoreGameRandomGameBox713 from "../views/game/wechat/MoreGameRandomGameBox713";
import MoreGameRandomGameBox713Temp from "../views/game/wechat/MoreGameRandomGameBox713Temp";

export default class ViewChangeMgr {

    private static instance: ViewChangeMgr;
    public static getInstance(): ViewChangeMgr {
        if (!ViewChangeMgr.instance) {
            ViewChangeMgr.instance = new ViewChangeMgr();
        }
        return ViewChangeMgr.instance;
    }

    public static gameOpen: boolean = false;

    constructor() {
        EventMgr.getInstance().addEvent(GameEvent.BUFFER_LOAD, this, this.bufferLoading);
    }

    /**当前关卡场景的引用*/
    private curLevelBase: LevelBase;

    private _commonView: CommonView;

    public get commonView() {
        if (!this._commonView) {
            this._commonView = new CommonView();
            this._commonView.x = 0;
            this._commonView.y = 0;
        }
        return this._commonView;
    }

    public get CurLevelBasea() {
        return this.curLevelBase;
    }

    public set CurLevelBasea(pCurLevelBase: LevelBase) {
        this.curLevelBase = pCurLevelBase;
    }

    public showCommonView() {
        Laya.stage.addChild(this.commonView);
    }

    public gotoLevel(nCurLevel: number) {
        PlayerDataMgr.getInstance().setCurGuanQia(nCurLevel - 1);
        GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_CL;
        LevelMgr.getInstance().createSceneByLevel(nCurLevel);
    }

    /**切换到下一关 */
    public goToNextLevel() {
        console.log("切换到下一关--");
        MiniGameMgr.instance.StopVideoAd();
        //ViewChangeManager.getInstance().CurLevelBase.closeGameView();
        this.curLevelBase.closeGameView();
        GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_N;
        PlayerDataMgr.getInstance().addGuanQia();
        //
        LevelMgr.getInstance().createSceneByLevel(PlayerDataMgr.getInstance().getCurGuanQiaToChallenge());
    }

    /**全部重新开始 */
    public restartGame(bAll: boolean = true) {
        //开始游戏
        GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_RS;
        //ViewChangeManager.getInstance().CurLevelBase.restartGame(false);
        this.curLevelBase.restartGame(bAll);
    }


    public rigestBufLoadingView(): void {
        BufferLoadingManger.getInstance().registerOneBuffer("gamebuffer", new GameBufferLoad());
    }

    public showBufLoadingView(): void {
        BufferLoadingManger.getInstance().showBuffer("gamebuffer");
        Laya.timer.clear(this, this.hideBufLoadingView)
        Laya.timer.once(30000, this, this.hideBufLoadingView);
        BufferLoadingManger.getInstance().bufferGroup.mouseThrough = false;
    }

    public hideBufLoadingView(): void {
        Laya.timer.clear(this, this.hideBufLoadingView)
        BufferLoadingManger.getInstance().hiddBuffer("gamebuffer");
        BufferLoadingManger.getInstance().bufferGroup.mouseEnabled = true;
        BufferLoadingManger.getInstance().bufferGroup.mouseThrough = true;

    }
    private bufferLoading(show: boolean) {
        if (show) {
            this.showBufLoadingView();
        } else {
            this.hideBufLoadingView();
        }
    }

    /**
     * 进入游戏
     */
    public startGame(): void {
        if (!BaseConst.infos.gameInfo.isDY) {
            return;
        }
        if (!DeviceUtil.isWXMiniGame() && !DeviceUtil.isQQMiniGame() && !DeviceUtil.isTTMiniGame()) return
        PlatformDY.startGame();
    }

    /**
     * 游戏结束
     */
    public gameEnd(): void {
        if (!BaseConst.infos.gameInfo.isDY) {
            return;
        }
        if (!DeviceUtil.isWXMiniGame() && !DeviceUtil.isQQMiniGame() && !DeviceUtil.isTTMiniGame()) return
        PlatformDY.endGame({ id: PlatformDY.nGameID, level: PlayerDataMgr.getInstance().getCurGuanQiaToChallenge() });
    }

    private pShouMoreGameInView: ShouMoreGameInView;
    public  showMoreGameinView(bAni:boolean = true) {
        if (!this.pShouMoreGameInView) {
            this.pShouMoreGameInView = new ShouMoreGameInView();
        } else {
            this.pShouMoreGameInView.refreshWeCatMoreGame();
        }
        this.pShouMoreGameInView.ani = bAni;
        return this.pShouMoreGameInView;
    }


    /**全局增加一个退出按钮 */
    private image_exit: Laya.Image = null;
    public showImageExit() {
        if(!DeviceUtil.isWXMiniGame()){
            return;
        }
        if (PlayerDataMgr.getInstance().stOperData0807.bSpecial == false && BaseConst.infos.gameInfo.bwrite == 1)  {
            console.log("GameDataMgr.getInstance().enterGameInfo", GDataMgr.getInstance().eGInfos);
            if (GDataMgr.getInstance().eGInfos.enterGameInfo == {}) {
                return;
            }
            if (!GDataMgr.getInstance().eGInfos.referrerInfo.appId) {
                return;
            }
            if ("wxcff7381e631cf54e" == GDataMgr.getInstance().eGInfos.referrerInfo.appId) {
                return;
            }
        }
        PlayerDataMgr.getInstance().stOperData0807.bSpecial = true;
        //if(GameDataMgr.getInstance().enterGameInfo.referrerInfo.appId)
        if (this.image_exit) {
            return;
        }
        this.image_exit = new Laya.Image();
        this.image_exit.skin = "resource/assets/img/wecat/button.png";
        this.image_exit.right = 23;
        this.image_exit.top = 220;
        Laya.stage.addChild(this.image_exit);
        this.image_exit.on(Laya.Event.CLICK, this, this.onImageExit);
        PlayerDataMgr.getInstance().SaveData();
    }

    private onImageExit() {
        // MoreGameView.bSpeical = true;
        // ViewManager.getInstance().showView(MoreGameView);
        if (PlayerDataMgr.getInstance().checkIsSpecial()&&BaseConst.infos.gameInfo.MoreGameView == 1) {
            //MoreGameView.bSpeical = true;
            ViewManager.getInstance().showView(MoreGameViewTemp);
        }else{
            MoreGameRandomGameBox713Temp.bSpecial = true;
            ViewManager.getInstance().showView(MoreGameRandomGameBox713Temp);
        }
    }

    public showImageExitTemp(){
        if(this.image_exit){
            this.image_exit.visible = true;
        }
    }

    public hideImageExitTemp(){
        if(this.image_exit){
            this.image_exit.visible = false;
        }
    }

    public restartEnterGameHome() {
        if(!DeviceUtil.isWXMiniGame()){
            return;
        }
        
        if (PlayerDataMgr.getInstance().bIsNewPlayer) {
            PlayerDataMgr.bGlobEnterGame = false;
            return;
        }

        if (BaseConst.infos.gameInfo.openPsAward == 0) {
            PlayerDataMgr.bGlobEnterGame = false;
           return;
        }
        PlayerDataMgr.bGlobEnterGame = true;
        WeCatMoreGameView.nEnterCount = 0;
        ViewManager.getInstance().showView(MoreGameRandomGameBox713);
        this.commonView.visible = false;
        //this.hideCommonView();
    }

}
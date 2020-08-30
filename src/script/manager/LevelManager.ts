
import { GameManager } from "./GameManager";
import { CampLevelScene1 } from "../views/game/level/LevelScene1";
import { CampLevelScene2 } from "../views/game/level/LevelScene2";
import { CampLevelScene3 } from "../views/game/level/LevelScene3";
import { CampLevelScene4 } from "../views/game/level/LevelScene4";
import { CampLevelScene5 } from "../views/game/level/LevelScene5";

import { PlayerDataMgr } from "../common/GameDataManager";
import ViewChangeMgr from "../games/ViewChangeManager";
import { LevelBase } from "../views/game/level/LevelBase";
import { GDataMgr } from "../common/GameData";
import { CampLevelScene6 } from "../views/game/level/LevelScene6";
import { CampLevelScene8 } from "../views/game/level/LevelScene8";
import { CampLevelScene7 } from "../views/game/level/LevelScene7";
import { CampLevelScene10 } from "../views/game/level/LevelScene10";
import { CampLevelScene9 } from "../views/game/level/LevelScene9";
import { CampLevelScene11 } from "../views/game/level/LevelScene11";
import { CampLevelScene12 } from "../views/game/level/LevelScene12";
import { CampLevelScene13 } from "../views/game/level/LevelScene13";
import { CampLevelScene14 } from "../views/game/level/LevelScene14";
import { MiniGameMgr } from "../minigame/MiniGameMgr";
import GameEvent from "../common/GameEvent";


export class LevelMgr {
    private static _ins: LevelMgr;

    public static getInstance(): LevelMgr {
        if (!LevelMgr._ins) LevelMgr._ins = new LevelMgr();
        return LevelMgr._ins;
    }

    /**当前场景 */
    public currentGameScene: LevelBase;

    public nCurrentLevel:number = 0;

    private _url = 'resource/assets/configs/map/map';
    /**
     * 创建关卡
     */
    public async createSceneByLevel(level: number) {
        let nLevel = level;
        let classKeyScene: any;
        switch (nLevel) {
            case 1:
                classKeyScene = CampLevelScene1;
                break
            case 2:
                classKeyScene = CampLevelScene2;
                break
            case 3:
                classKeyScene = CampLevelScene3;
                break
            case 4:
                classKeyScene = CampLevelScene4;
                break
            case 5:
                classKeyScene = CampLevelScene5;
                break
            case 6:
                classKeyScene = CampLevelScene6;
                break;
            case 7:
                classKeyScene = CampLevelScene7;
                break;
            case 8:
                classKeyScene = CampLevelScene8;
                break;
            case 9:
                classKeyScene = CampLevelScene9;
                break;
            case 10:
                classKeyScene = CampLevelScene10;
                break;
            case 11:
                classKeyScene = CampLevelScene11;
                break;
            case 12:
                classKeyScene = CampLevelScene12;
                break;
            case 13:
                classKeyScene = CampLevelScene13;
                break;
            case 14:
                classKeyScene = CampLevelScene14;
                break;
            default:
                classKeyScene = CampLevelScene1;
                nLevel = 1;
                break
        }
        // if (DeviceUtil.isTTMiniGame() && BaseConst.infos.gameInfo.openPsAward == 0) {
        //     //if(BaseConst.infos.gameInfo.openPsAward == 0){
        //     PlayerDataMgr.getInstance().setCurGuanQia(nLevel - 2);
        // } else {
        //     PlayerDataMgr.getInstance().setCurGuanQia(nLevel - 1);
        // }

        //为了头条的提审 隐藏binner可能会有延迟 
        if (DeviceUtil.isTTMiniGame()) {
            MiniGameMgr.instance.hideBannerAd();
        }

        let config = await GameManager.instance.loadCongigs(this._url + nLevel + '.json')
        let stGroup = [];
        stGroup.push(nLevel.toString())
        // ViewChangeMgr.getInstance().showBufLoadingView();
        EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);

        this.loadGameGroup(stGroup, nLevel, classKeyScene, config);
        Laya.timer.once(2000, this, () => {//进游戏后2s后加载下关资源
            //加载下一关的场景
            if (nLevel < PlayerDataMgr.getInstance().getGuanQiaNumMakeOver()) {
                stGroup = [];
                stGroup.push((nLevel + 1).toString());
                ResUtil.getIntance().loadGroups(stGroup);
            }
        });
    }


    private loadGameGroup(stGroup: any, nLevel: number, classKeyScene: any, config: any) {
        let self = this;
        ResUtil.getIntance().loadGroups(stGroup, () => {
            if (self.currentGameScene) {
                self.currentGameScene.destroyAnimation();
                if (nLevel != 3) {//第三关的资源不要清理 因为用的第二关的资源
                    self.currentGameScene.destroy();
                    // //下一关清理上一关卡
                    let lastLevel = nLevel - 1;
                    ResUtil.getIntance().destoryGroup("" + lastLevel);
                    Laya.Resource.destroyUnusedResources();
                }
                self.currentGameScene = null;
            }
            // ViewChangeMgr.getInstance().hideBufLoadingView();
            this.nCurrentLevel = nLevel;
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
            self.currentGameScene = new classKeyScene(config);
            self.currentGameScene.viewData_ = config;
            self.currentGameScene._mapData = config;
            SceneManager.getInstance().openSceneInstance(self.currentGameScene);
            // SceneManager.getInstance().openGameScene(classKey, data);
        }, () => { });
    }
}
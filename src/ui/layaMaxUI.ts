/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui.game {
    export class GameHomeViewUI extends Laya.Scene {
		public spNum:Laya.Sprite;
		public imageSpFull:Laya.Image;
		public imageBtAttSp:Laya.Image;
		public stLableTime:Laya.Label;
		public imageBtGoldAdd:Laya.Image;
		public glodNum:Laya.Sprite;
		public back_btn:Laya.Sprite;
		public boxFun:Laya.Box;
		public imageBtShare:Laya.Image;
		public imageBtChoseLevel:Laya.Image;
		public imageBtSign:Laya.Image;
		public imageBtInvital:Laya.Image;
		public imageBtStartGame:Laya.Image;
		public boxLevel:Laya.Box;
		public spLevelNum:Laya.Sprite;
		public imageHead:Laya.Image;
		public btn_more:Laya.Sprite;
		public imageWeCatMoreGame:Laya.Image;
		public more_games:Laya.Image;
		public imageBgGetGlod:Laya.Image;
		public imageRed:Laya.Image;
		public btn_oppo_moregame:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/GameHomeView");
        }
    }
    REG("ui.game.GameHomeViewUI",GameHomeViewUI);
    export class GameViewUI extends Laya.Scene {
		public boxBtList:Laya.Box;
		public imageBtGotoNextLevel:Laya.Image;
		public imageBtTip:Laya.Image;
		public img_video:Laya.Image;
		public img_tip:Laya.Image;
		public imageBtRestart:Laya.Image;
		public imageBtToHome:Laya.Image;
		public boxLevelInfo:Laya.HBox;
		public spLevelLeft:Laya.Sprite;
		public hBoxIndex:Laya.HBox;
		public spLevelRight:Laya.Sprite;
		public box_choose:Laya.Box;
		public icon_chooseRight:Laya.Image;
		public icon_right:Laya.Image;
		public icon_choseCoverUpRight:Laya.Image;
		public icon_chooseLeft:Laya.Image;
		public icon_left:Laya.Image;
		public icon_choseCoverUpLeft:Laya.Image;
		public imageHand:Laya.Image;
		public spNum:Laya.Sprite;
		public imageSpFull:Laya.Image;
		public imageBtAttSp:Laya.Image;
		public stLableTime:Laya.Label;
		public imageBtGoldAdd:Laya.Image;
		public glodNum:Laya.Sprite;
		public imageTTVideo:Laya.Image;
		public wxBtnTip:Laya.Image;
		public imageWeCatMoreGame:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/GameView");
        }
    }
    REG("ui.game.GameViewUI",GameViewUI);
}
export module ui.game.level_cap {
    export class CampLevelScene1UI extends Laya.Scene {
		public box_game:Laya.Box;
		public box_enb:Laya.Box;
		public box_player:Laya.Box;
		public boxDialog:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/level_cap/CampLevelScene1");
        }
    }
    REG("ui.game.level_cap.CampLevelScene1UI",CampLevelScene1UI);
    export class CampLevelScene10UI extends Laya.Scene {
		public box_game:Laya.Box;
		public box_up:Laya.Box;
		public box_zhuozi:Laya.Box;
		public box_enb:Laya.Box;
		public box_player:Laya.Box;
		public box_men:Laya.Box;
		public box_fame:Laya.Box;
		public boxDialog:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/level_cap/CampLevelScene10");
        }
    }
    REG("ui.game.level_cap.CampLevelScene10UI",CampLevelScene10UI);
    export class CampLevelScene11UI extends Laya.Scene {
		public box_game:Laya.Box;
		public box_up:Laya.Box;
		public box_enb:Laya.Box;
		public box_player:Laya.Box;
		public boxDialog:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/level_cap/CampLevelScene11");
        }
    }
    REG("ui.game.level_cap.CampLevelScene11UI",CampLevelScene11UI);
    export class CampLevelScene12UI extends Laya.Scene {
		public box_game:Laya.Box;
		public box_up:Laya.Box;
		public box_enb:Laya.Box;
		public imgFloor:Laya.Image;
		public box_player:Laya.Box;
		public boxDialog:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/level_cap/CampLevelScene12");
        }
    }
    REG("ui.game.level_cap.CampLevelScene12UI",CampLevelScene12UI);
    export class CampLevelScene13UI extends Laya.Scene {
		public box_game:Laya.Box;
		public box_up:Laya.Box;
		public imgShip:Laya.Sprite;
		public imgPlant:Laya.Sprite;
		public box_enb:Laya.Box;
		public box_player:Laya.Box;
		public boxDialog:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/level_cap/CampLevelScene13");
        }
    }
    REG("ui.game.level_cap.CampLevelScene13UI",CampLevelScene13UI);
    export class CampLevelScene14UI extends Laya.Scene {
		public box_game:Laya.Box;
		public box_up:Laya.Box;
		public box_enb:Laya.Box;
		public box_player:Laya.Box;
		public boxDialog:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/level_cap/CampLevelScene14");
        }
    }
    REG("ui.game.level_cap.CampLevelScene14UI",CampLevelScene14UI);
    export class CampLevelScene2UI extends Laya.Scene {
		public icon_bg:Laya.Box;
		public box_game:Laya.Box;
		public box_player:Laya.Box;
		public box_enb:Laya.Box;
		public boxDialog:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/level_cap/CampLevelScene2");
        }
    }
    REG("ui.game.level_cap.CampLevelScene2UI",CampLevelScene2UI);
    export class CampLevelScene3UI extends Laya.Scene {
		public icon_bg:Laya.Box;
		public box_game:Laya.Box;
		public box_player:Laya.Box;
		public box_enb:Laya.Box;
		public boxDialog:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/level_cap/CampLevelScene3");
        }
    }
    REG("ui.game.level_cap.CampLevelScene3UI",CampLevelScene3UI);
    export class CampLevelScene4UI extends Laya.Scene {
		public box_game:Laya.Box;
		public box_enb:Laya.Box;
		public box_player:Laya.Box;
		public boxDialog:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/level_cap/CampLevelScene4");
        }
    }
    REG("ui.game.level_cap.CampLevelScene4UI",CampLevelScene4UI);
    export class CampLevelScene5UI extends Laya.Scene {
		public box_game:Laya.Box;
		public imgStone:Laya.Image;
		public box_enb:Laya.Box;
		public box_player:Laya.Box;
		public boxDialog:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/level_cap/CampLevelScene5");
        }
    }
    REG("ui.game.level_cap.CampLevelScene5UI",CampLevelScene5UI);
    export class CampLevelScene6UI extends Laya.Scene {
		public box_game:Laya.Box;
		public box_enb:Laya.Box;
		public box_player:Laya.Box;
		public imgMoon:Laya.Image;
		public boxDialog:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/level_cap/CampLevelScene6");
        }
    }
    REG("ui.game.level_cap.CampLevelScene6UI",CampLevelScene6UI);
    export class CampLevelScene7UI extends Laya.Scene {
		public box_game:Laya.Box;
		public imgWall:Laya.Image;
		public box_enb:Laya.Box;
		public box_player:Laya.Box;
		public box_ui_mid:Laya.Box;
		public boxDialog:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/level_cap/CampLevelScene7");
        }
    }
    REG("ui.game.level_cap.CampLevelScene7UI",CampLevelScene7UI);
    export class CampLevelScene8UI extends Laya.Scene {
		public box_game:Laya.Box;
		public box_zhuozi:Laya.Box;
		public box_enb:Laya.Box;
		public sp_men:Laya.Sprite;
		public box_huo2:Laya.Box;
		public box_player:Laya.Box;
		public box_fame:Laya.Box;
		public image_hm:Laya.Image;
		public boxDialog:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/level_cap/CampLevelScene8");
        }
    }
    REG("ui.game.level_cap.CampLevelScene8UI",CampLevelScene8UI);
    export class CampLevelScene9UI extends Laya.Scene {
		public box_game:Laya.Box;
		public box_enb:Laya.Box;
		public box_player:Laya.Box;
		public box_ui_mid:Laya.Box;
		public boxDialog:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/level_cap/CampLevelScene9");
        }
    }
    REG("ui.game.level_cap.CampLevelScene9UI",CampLevelScene9UI);
}
export module ui.game.uiView.choose {
    export class LevelIndexViewUI extends Laya.Scene {
		public spBg:Laya.Sprite;
		public levelNum:Laya.Sprite;
		public guanka:Laya.Sprite;
		public tips:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/choose/LevelIndexView");
        }
    }
    REG("ui.game.uiView.choose.LevelIndexViewUI",LevelIndexViewUI);
    export class LevelViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public panelConent:Laya.Panel;
		public boxConent:Laya.Box;
		public btnHome:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/choose/LevelView");
        }
    }
    REG("ui.game.uiView.choose.LevelViewUI",LevelViewUI);
}
export module ui.game.uiView.invite {
    export class InviteFriendsIndexViewUI extends Laya.Scene {
		public bg:Laya.Image;
		public imgIndex:Laya.Image;
		public imgNull:Laya.Image;
		public imgHead:Laya.Image;
		public imgReward:Laya.Image;
		public imgNo:Laya.Image;
		public imgGet:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/invite/InviteFriendsIndexView");
        }
    }
    REG("ui.game.uiView.invite.InviteFriendsIndexViewUI",InviteFriendsIndexViewUI);
    export class InviteFriendsViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public btnInvite:Laya.Image;
		public panelConent:Laya.Panel;
		public boxConent:Laya.Box;
		public btnClose:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/invite/InviteFriendsView");
        }
    }
    REG("ui.game.uiView.invite.InviteFriendsViewUI",InviteFriendsViewUI);
}
export module ui.game.uiView.platform {
    export class GuessLikeUI extends Laya.Scene {
		public panelList:Laya.Panel;
		public boxView:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/platform/GuessLike");
        }
    }
    REG("ui.game.uiView.platform.GuessLikeUI",GuessLikeUI);
    export class GuessLikeItemUI extends Laya.Scene {
		public icon_:Laya.Image;
		public iconMask_:Laya.Image;
		public name_txt:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/platform/GuessLikeItem");
        }
    }
    REG("ui.game.uiView.platform.GuessLikeItemUI",GuessLikeItemUI);
    export class MoreGameOperReqIndexUI extends Laya.Scene {
		public icon:Laya.Image;
		public lableName:Laya.Label;
		public lableCount:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/platform/MoreGameOperReqIndex");
        }
    }
    REG("ui.game.uiView.platform.MoreGameOperReqIndexUI",MoreGameOperReqIndexUI);
    export class WeCatMoreGameItemOneUI extends Laya.Scene {
		public imgIcon:Laya.Image;
		public labGameName:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/platform/WeCatMoreGameItemOne");
        }
    }
    REG("ui.game.uiView.platform.WeCatMoreGameItemOneUI",WeCatMoreGameItemOneUI);
    export class WeCatMoreGameItemTwoUI extends Laya.Scene {
		public imageIcon:Laya.Image;
		public lableGameName:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/platform/WeCatMoreGameItemTwo");
        }
    }
    REG("ui.game.uiView.platform.WeCatMoreGameItemTwoUI",WeCatMoreGameItemTwoUI);
    export class WeCatMoreGameViewUI extends Laya.Scene {
		public boxWeCatMoreGame:Laya.Box;
		public imageBg:Laya.Image;
		public panel_gamelist:Laya.Panel;
		public moreGamePanel:Laya.Box;
		public moreGamePanel2:Laya.Box;
		public imageBtWeCat:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/platform/WeCatMoreGameView");
        }
    }
    REG("ui.game.uiView.platform.WeCatMoreGameViewUI",WeCatMoreGameViewUI);
}
export module ui.game.uiView.pop {
    export class AddSpViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public btnExit:Laya.Sprite;
		public btnGet:Laya.Box;
		public sptext:laya.display.Text;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/pop/AddSpView");
        }
    }
    REG("ui.game.uiView.pop.AddSpViewUI",AddSpViewUI);
    export class CommonViewUI extends Laya.Scene {
		public powerBg:Laya.Image;
		public sptext:laya.display.Text;
		public imageSpMax:Laya.Image;
		public powerBtn:Laya.Image;
		public labelTime:Laya.Label;
		public img_video:Laya.Image;
		public img_gold:Laya.Image;
		public goldBtn:Laya.Image;
		public goldCount:Laya.Sprite;
		public img_video1:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/pop/CommonView");
        }
    }
    REG("ui.game.uiView.pop.CommonViewUI",CommonViewUI);
    export class OffLineViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public shareGlodCount:Laya.Image;
		public btDouble:Laya.Sprite;
		public spDouble:Laya.Sprite;
		public lableDesc:Laya.Label;
		public imageRecv:Laya.Image;
		public imageClose:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/pop/OffLineView");
        }
    }
    REG("ui.game.uiView.pop.OffLineViewUI",OffLineViewUI);
    export class ShareRecordVideoSkinViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public imgTitle:Laya.Image;
		public goldCount:Laya.Image;
		public btnShareVideo:Laya.Button;
		public btnCancel:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/pop/ShareRecordVideoSkinView");
        }
    }
    REG("ui.game.uiView.pop.ShareRecordVideoSkinViewUI",ShareRecordVideoSkinViewUI);
    export class SignOppoViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public boxItem:Laya.Box;
		public sprWorldLeft:laya.display.Text;
		public sprWorldRight:laya.display.Text;
		public btnSign:Laya.Image;
		public sprTomorrow:Laya.Sprite;
		public btnClose:Laya.Sprite;
		public btn_double:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/pop/SignOppoView");
        }
    }
    REG("ui.game.uiView.pop.SignOppoViewUI",SignOppoViewUI);
    export class SignViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public boxItem:Laya.Box;
		public sprWorldLeft:laya.display.Text;
		public sprWorldRight:laya.display.Text;
		public btnSign:Laya.Image;
		public boxConent:Laya.Box;
		public btnDouble:Laya.Image;
		public sprDouble:Laya.Image;
		public sprTomorrow:Laya.Sprite;
		public btnClose:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/pop/SignView");
        }
    }
    REG("ui.game.uiView.pop.SignViewUI",SignViewUI);
}
export module ui.game.uiView.settlement {
    export class FailEntryOneViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public boxAnim:Laya.Box;
		public btnHome:Laya.Image;
		public btnSign:Laya.Box;
		public btnPay:Laya.Box;
		public imageGoods:Laya.Image;
		public spCount:Laya.Image;
		public box_wecat:Laya.Box;
		public btnExit:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/settlement/FailEntryOneView");
        }
    }
    REG("ui.game.uiView.settlement.FailEntryOneViewUI",FailEntryOneViewUI);
    export class FailEntryTwoOppoViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public btn_chakan:Laya.Box;
		public txt_chakan:Laya.Label;
		public btnGet:Laya.Box;
		public imageGoods:Laya.Image;
		public sptext:laya.display.Text;
		public box_ad:Laya.Box;
		public btnHome:Laya.Image;
		public btnAgain:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/settlement/FailEntryTwoOppoView");
        }
    }
    REG("ui.game.uiView.settlement.FailEntryTwoOppoViewUI",FailEntryTwoOppoViewUI);
    export class FailEntryTwoViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public labelShare:Laya.Sprite;
		public btnShare:Laya.Box;
		public imageSIcon:Laya.Image;
		public imageSName:Laya.Image;
		public ttImageType:Laya.Image;
		public ttSpecial:Laya.Sprite;
		public shareCount:Laya.Sprite;
		public btnGet:Laya.Box;
		public imageGoods:Laya.Image;
		public sptext:laya.display.Text;
		public imageWeCatMore:Laya.Image;
		public panelWeCatMore:Laya.Panel;
		public box_wecat:Laya.Box;
		public btnHome:Laya.Image;
		public btnAgain:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/settlement/FailEntryTwoView");
        }
    }
    REG("ui.game.uiView.settlement.FailEntryTwoViewUI",FailEntryTwoViewUI);
    export class FailEntryTwoVivoViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public btn_chakan:Laya.Box;
		public txt_chakan:Laya.Label;
		public btnGet:Laya.Box;
		public imageGoods:Laya.Image;
		public sptext:laya.display.Text;
		public box_ad:Laya.Box;
		public btnHome:Laya.Image;
		public btnAgain:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/settlement/FailEntryTwoVivoView");
        }
    }
    REG("ui.game.uiView.settlement.FailEntryTwoVivoViewUI",FailEntryTwoVivoViewUI);
    export class SuccessfulEntryOneQQViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public sprTime:Laya.Image;
		public imgValue:Laya.Image;
		public img_head:Laya.Image;
		public btnGet:Laya.Image;
		public imgIcon:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/settlement/SuccessfulEntryOneQQView");
        }
    }
    REG("ui.game.uiView.settlement.SuccessfulEntryOneQQViewUI",SuccessfulEntryOneQQViewUI);
    export class SuccessfulEntryOneViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public sprTime:Laya.Image;
		public imgValue:Laya.Image;
		public btnGet:Laya.Image;
		public imgIcon:Laya.Image;
		public btn_countinue:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/settlement/SuccessfulEntryOneView");
        }
    }
    REG("ui.game.uiView.settlement.SuccessfulEntryOneViewUI",SuccessfulEntryOneViewUI);
    export class SuccessfulEntryThreeOppoViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public sprGold:Laya.Image;
		public imgGoodsTypeUp:Laya.Image;
		public btnLab:Laya.Sprite;
		public imgMask:Laya.Box;
		public btnAgain:Laya.Box;
		public sprCostPs:Laya.Image;
		public btn_chakan:Laya.Box;
		public txt_chakan:Laya.Label;
		public boxAnim:Laya.Box;
		public box_ad:Laya.Box;
		public btn_recieve:Laya.Button;
		public btnHome:Laya.Image;
		public btnNextLevel:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/settlement/SuccessfulEntryThreeOppoView");
        }
    }
    REG("ui.game.uiView.settlement.SuccessfulEntryThreeOppoViewUI",SuccessfulEntryThreeOppoViewUI);
    export class SuccessfulEntryThreeQQViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public sprGold:Laya.Sprite;
		public imgGoodsTypeUp:Laya.Image;
		public btnLab:Laya.Sprite;
		public imgMask:Laya.Box;
		public imgGoodsType:Laya.Image;
		public sprMore:Laya.Sprite;
		public sprCost:Laya.Sprite;
		public btnShare:Laya.Box;
		public imgShareIcon:Laya.Image;
		public imgShareName:Laya.Image;
		public ttGoodsIcon:Laya.Image;
		public ttSpecialIcon:Laya.Sprite;
		public sprShareCount:Laya.Sprite;
		public btnAgain:Laya.Box;
		public sprCostPs:Laya.Sprite;
		public imgWeChatMore:Laya.Image;
		public panelWeChatMore:Laya.Panel;
		public boxAnim:Laya.Box;
		public box_wecat:Laya.Box;
		public btn_recieve:Laya.Button;
		public btnHome:Laya.Image;
		public btnNextLevel:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/settlement/SuccessfulEntryThreeQQView");
        }
    }
    REG("ui.game.uiView.settlement.SuccessfulEntryThreeQQViewUI",SuccessfulEntryThreeQQViewUI);
    export class SuccessfulEntryThreeViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public sprGold:Laya.Sprite;
		public imgGoodsTypeUp:Laya.Image;
		public btnLab:Laya.Sprite;
		public imgMask:Laya.Box;
		public imgGoodsType:Laya.Image;
		public sprMore:Laya.Sprite;
		public sprCost:Laya.Sprite;
		public btnShare:Laya.Box;
		public imgShareIcon:Laya.Image;
		public imgShareName:Laya.Image;
		public ttGoodsIcon:Laya.Image;
		public ttSpecialIcon:Laya.Sprite;
		public sprShareCount:Laya.Sprite;
		public btnAgain:Laya.Box;
		public sprCostPs:Laya.Sprite;
		public check4:Laya.Box;
		public btnDouble:Laya.Image;
		public sprDouble:Laya.Image;
		public labDesc:Laya.Label;
		public imgWeChatMore:Laya.Image;
		public panelWeChatMore:Laya.Panel;
		public boxAnim:Laya.Box;
		public box_wecat:Laya.Box;
		public btnHome:Laya.Image;
		public btnNextLevel:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/settlement/SuccessfulEntryThreeView");
        }
    }
    REG("ui.game.uiView.settlement.SuccessfulEntryThreeViewUI",SuccessfulEntryThreeViewUI);
    export class SuccessfulEntryThreeVivoViewUI extends Laya.Scene {
		public grp_center:Laya.Box;
		public sprGold:Laya.Sprite;
		public imgGoodsTypeUp:Laya.Image;
		public btnLab:Laya.Sprite;
		public imgMask:Laya.Box;
		public imgGoodsType:Laya.Image;
		public sprMore:Laya.Sprite;
		public sprCost:Laya.Sprite;
		public btnAgain:Laya.Box;
		public sprCostPs:Laya.Sprite;
		public btn_chakan:Laya.Box;
		public txt_chakan:Laya.Label;
		public check4:Laya.Box;
		public btnDouble:Laya.Image;
		public sprDouble:Laya.Image;
		public labDesc:Laya.Label;
		public boxAnim:Laya.Box;
		public box_ad:Laya.Box;
		public btnHome:Laya.Image;
		public btnNextLevel:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/settlement/SuccessfulEntryThreeVivoView");
        }
    }
    REG("ui.game.uiView.settlement.SuccessfulEntryThreeVivoViewUI",SuccessfulEntryThreeVivoViewUI);
}
export module ui.game.uiView.wecat {
    export class MoreGameItemViewUI extends Laya.Scene {
		public goBtn:Laya.Button;
		public headiconImg:Laya.Image;
		public desLabel:Laya.Label;
		public titleLabel:Laya.Label;
		public baokuanImg:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/wecat/MoreGameItemView");
        }
    }
    REG("ui.game.uiView.wecat.MoreGameItemViewUI",MoreGameItemViewUI);
    export class MoreGameOperRequestTwoUI extends Laya.Scene {
		public imageBtReturn:Laya.Image;
		public panel_gamelist:Laya.Panel;
		public moreGamePanel:Laya.Box;
		public moreGamePanel2:Laya.Box;
		public imageBtConGame:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/wecat/MoreGameOperRequestTwo");
        }
    }
    REG("ui.game.uiView.wecat.MoreGameOperRequestTwoUI",MoreGameOperRequestTwoUI);
    export class MoreGameRandomGameBox713UI extends Laya.Scene {
		public imageBtReturn:Laya.Image;
		public panel_gamelist:Laya.Panel;
		public moreGamePanel:Laya.Box;
		public moreGamePanel2:Laya.Box;
		public imageBtConGame:Laya.Image;
		public imageRandom:Laya.Image;
		public lableTitle:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/wecat/MoreGameRandomGameBox713");
        }
    }
    REG("ui.game.uiView.wecat.MoreGameRandomGameBox713UI",MoreGameRandomGameBox713UI);
    export class MoreGameRandomGameBox713TempUI extends Laya.Scene {
		public imageBtReturn:Laya.Image;
		public panel_gamelist:Laya.Panel;
		public moreGamePanel:Laya.Box;
		public moreGamePanel2:Laya.Box;
		public imageBtConGame:Laya.Image;
		public imageRandom:Laya.Image;
		public lableTitle:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/wecat/MoreGameRandomGameBox713Temp");
        }
    }
    REG("ui.game.uiView.wecat.MoreGameRandomGameBox713TempUI",MoreGameRandomGameBox713TempUI);
    export class MoreGameRandomGameBoxItem713UI extends Laya.Scene {
		public imageIcon:Laya.Image;
		public lableGameName:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/wecat/MoreGameRandomGameBoxItem713");
        }
    }
    REG("ui.game.uiView.wecat.MoreGameRandomGameBoxItem713UI",MoreGameRandomGameBoxItem713UI);
    export class MoreGameViewUI extends Laya.Scene {
		public tLabel:Laya.Label;
		public image_back:Laya.Image;
		public stPanel:Laya.Panel;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/wecat/MoreGameView");
        }
    }
    REG("ui.game.uiView.wecat.MoreGameViewUI",MoreGameViewUI);
    export class ShowMoreGameInfoInViewUI extends Laya.Scene {
		public box_wecat:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/wecat/ShowMoreGameInfoInView");
        }
    }
    REG("ui.game.uiView.wecat.ShowMoreGameInfoInViewUI",ShowMoreGameInfoInViewUI);
    export class ShowMoreGameInfoItemUI extends Laya.Scene {
		public image_icon:Laya.Image;
		public lable_name:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/wecat/ShowMoreGameInfoItem");
        }
    }
    REG("ui.game.uiView.wecat.ShowMoreGameInfoItemUI",ShowMoreGameInfoItemUI);
    export class WeCatMoreGameItemOne713BigUI extends Laya.Scene {
		public imageIcon:Laya.Image;
		public lableGameName:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("game/uiView/wecat/WeCatMoreGameItemOne713Big");
        }
    }
    REG("ui.game.uiView.wecat.WeCatMoreGameItemOne713BigUI",WeCatMoreGameItemOne713BigUI);
}
export module ui.skins.platform.oppo {
    export class GuessLikeUI extends Laya.Scene {
		public icon_title:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/platform/oppo/GuessLike");
        }
    }
    REG("ui.skins.platform.oppo.GuessLikeUI",GuessLikeUI);
    export class LeftMoreGameUI extends Laya.Scene {
		public btn_close:Laya.Image;
		public gameList:Laya.List;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/platform/oppo/LeftMoreGame");
        }
    }
    REG("ui.skins.platform.oppo.LeftMoreGameUI",LeftMoreGameUI);
    export class LeftMoreGameItemUI extends Laya.Scene {
		public icon_item:Laya.Image;
		public txt_name:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/platform/oppo/LeftMoreGameItem");
        }
    }
    REG("ui.skins.platform.oppo.LeftMoreGameItemUI",LeftMoreGameItemUI);
    export class MoreGameItemUI extends Laya.Scene {
		public icon_item:Laya.Image;
		public txt_name:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/platform/oppo/MoreGameItem");
        }
    }
    REG("ui.skins.platform.oppo.MoreGameItemUI",MoreGameItemUI);
    export class OppoHomeSceneUI extends Laya.Scene {
		public box_vivo:Laya.Box;
		public img_oppo_zhuomian:Laya.Sprite;
		public btn_oppo_shortcut:Laya.Image;
		public btn_freegold:Laya.Image;
		public imageRed:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/platform/oppo/OppoHomeScene");
        }
    }
    REG("ui.skins.platform.oppo.OppoHomeSceneUI",OppoHomeSceneUI);
    export class OppoItemUI extends Laya.Scene {
		public icon_item:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/platform/oppo/OppoItem");
        }
    }
    REG("ui.skins.platform.oppo.OppoItemUI",OppoItemUI);
    export class OppoNativeBannerUI extends Laya.Scene {
		public icon_icon:Laya.Image;
		public txt_title:Laya.Label;
		public txt_desc:Laya.Label;
		public btn_click:Laya.Image;
		public txt_clickBtnTxt:Laya.Label;
		public icon_flag:Laya.Image;
		public btn_close:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/platform/oppo/OppoNativeBanner");
        }
    }
    REG("ui.skins.platform.oppo.OppoNativeBannerUI",OppoNativeBannerUI);
}
export module ui.skins.platform.vivo {
    export class VivoNativeBannerUI extends Laya.Scene {
		public box_ad:Laya.Box;
		public img_icon:Laya.Image;
		public lab_title:Laya.Label;
		public lab_desc:Laya.Label;
		public btn_click:Laya.Image;
		public lab_clickBtnTxt:Laya.Label;
		public img_flag:Laya.Image;
		public box_flag:Laya.Box;
		public btn_close:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/platform/vivo/VivoNativeBanner");
        }
    }
    REG("ui.skins.platform.vivo.VivoNativeBannerUI",VivoNativeBannerUI);
    export class VivoNativeBotterAdSceneUI extends Laya.Scene {
		public box_ad:Laya.Box;
		public img_icon:Laya.Image;
		public lab_title:Laya.Label;
		public lab_desc:Laya.Label;
		public btn_click:Laya.Image;
		public lab_clickBtnTxt:Laya.Label;
		public img_flag:Laya.Image;
		public box_flag:Laya.Box;
		public btn_chakan:Laya.Label;
		public btn_close:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/platform/vivo/VivoNativeBotterAdScene");
        }
    }
    REG("ui.skins.platform.vivo.VivoNativeBotterAdSceneUI",VivoNativeBotterAdSceneUI);
    export class VivoNativeInsertUI extends Laya.Scene {
		public img_bg:Laya.Image;
		public grp_center:Laya.Box;
		public box_content:Laya.Box;
		public lab_title:Laya.Label;
		public box_img:Laya.Box;
		public img_icon:Laya.Image;
		public btn_close:Laya.Button;
		public box_flag:Laya.Box;
		public lab_desc:Laya.Label;
		public btn_click:Laya.Image;
		public lab_clickBtnTxt:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/platform/vivo/VivoNativeInsert");
        }
    }
    REG("ui.skins.platform.vivo.VivoNativeInsertUI",VivoNativeInsertUI);
    export class VVHomeSceneUI extends Laya.Scene {
		public box_vivo:Laya.Box;
		public img_vv_zhuomian:Laya.Sprite;
		public btn_vv_shortcut:Laya.Image;
		public btn_freegold:Laya.Image;
		public imageRed:Laya.Image;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("skins/platform/vivo/VVHomeScene");
        }
    }
    REG("ui.skins.platform.vivo.VVHomeSceneUI",VVHomeSceneUI);
}
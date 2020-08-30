import { GDataMgr } from "../common/GameData";
import { WangLuoData, benDiData } from "../common/GameDataType";
import {ConfigMgr} from "../games/ConfigManager";
import { PlayerDataMgr } from "../common/GameDataManager";

/**
 * 关联邀请人数据管理
 */
export default class InviteMgr {

    private static _ins: InviteMgr;
    public static getInstance(): InviteMgr {
        if (!InviteMgr._ins) {
            InviteMgr._ins = new InviteMgr();
        }
        return InviteMgr._ins;
    }

    /**请求连接 */
    private _url: string = GDataMgr.getInstance().URL_OF_INVITE;

    /** 邀请人信息 */
    public inviterrInfo: WangLuoData.YaoQingRen = new WangLuoData.YaoQingRen();

    /** 邀请成功的新玩家 */
    public newPlayers: Object[] = [];

    /**
     * 查询信息
     */
    public chaXunInfo(callF: Function = null, obj: any = null): void {
        let gameId: string = GDataMgr.getInstance().gid;
        let openId: string = GDataMgr.getInstance().uinfo.openId;
        let msg: any = {};
        msg.msg_type = "16";
        msg.msg_data = {
            "gameid": gameId,
            "openid": openId
        };

        console.log("查询受邀人列表 ->", msg);
        HttpMgr.getInstance().sendHttp(this._url, msg, (e) => {
            let code: string = e["msg_data"]["error_code"];
            if (code == "0") {
                console.log("查询受邀人列表成功 ->", e);
                if (e["msg_data"]["index_list"] != "") {
                    let newPlayerTemp = e["msg_data"]["index_list"];
                    // if(!this.newPlayer){
                    //     this.newPlayer = [];
                    // }
                    if (newPlayerTemp) {
                        this.newPlayers = newPlayerTemp;
                    }
                    console.log("recvnewplayer = ", this.newPlayers);
                }
            } else {
                // let str: string = GameConst.errorCodeTable[code];
                console.warn("查询受邀人列表失败：", "str");
            }
            if (callF && obj) {
                callF.call(obj, code);
            }
        }, (e) => { });
    }

    /**
     * 增加信息
     */
    public async addInfo(callF: Function = null, obj: any = null) {
        await new Promise((res, rej) => {
            // 关联自己及邀请人
            let inviterOpenId: string = this.inviterrInfo.openId;
            let tx_url: string = GDataMgr.getInstance().uinfo.avatarUrl;
            let nick: string = GDataMgr.getInstance().uinfo.nick;
            let gameId: string = GDataMgr.getInstance().gid;
            let msg: any = {};
            msg.msg_type = "14";
            msg.msg_data = {
                "openid": inviterOpenId,
                "url": tx_url,
                "name": nick,
                "gameid": gameId
            };
            console.log("关联自己及邀请人 ->", msg, " game id = ", GDataMgr.getInstance().gid);
            HttpMgr.getInstance().sendHttp(this._url, msg, (e) => {
                let code: string = e["msg_data"]["error_code"];
                if (code == "0") {
                    console.log("关联自己及邀请人成功...");
                } else {
                    let str: string = code.toString();
                    console.warn("关联自己及邀请人失败：", str);
                }
                if (callF && obj) {
                    callF.call(obj, code);
                }
                res();
            }, (e) => { });
        });
    }

    
    /**得到邀请信息 */
    public getInviteAwdData(): benDiData.YaoQingData[] {
        let inviteConfig = ConfigMgr.getInstance().getYQConfI();
        let lingqu = PlayerDataMgr.getInstance().stPlayerDataBase.inviteId;
        let invitePlayer = this.newPlayers;
        let dataArr = [];
        for (let i = 0, len = inviteConfig.length; i < len; i++) {
            let invite = inviteConfig[i];
            let awardId = invite.ID;
            let canLingqu = false;
            let lingqued = false;
            let player = null
            if (invitePlayer.length - 1 >= i) {
                player = invitePlayer[i];
            }
            if (lingqu.indexOf(awardId) > -1) lingqued = true;
            if (player) canLingqu = true;
            let data = new benDiData.YaoQingData();
            data.id = awardId;
            data.head = player ? player["url"] : "";
            data.reward = invite.nCount;
            data.lingqued = lingqued;
            data.canLingqu = canLingqu;
            dataArr.push(data);
        }
        return dataArr;
    }
    /** 
     * 是否通过分享链接进入游戏
     */
    public checkInvite() {
        return new Promise(resolve => {
            let res = GDataMgr.getInstance().eGInfos;
            console.log("开始关联邀请人", res);
            console.log("自己信息", GDataMgr.getInstance().uinfo);
            if (res) {
                let scene: number = res.scene;
                if (scene == 1007 || scene == 1008 || scene == 1044) { // 1007:好友分享 1008:群分享
                    if (GDataMgr.getInstance().uinfo.openId && res.query && res.query["openid"]) {
                        this.inviterrInfo.nick = res.query["nick"];
                        this.inviterrInfo.openId = res.query["openid"];
                        if (GDataMgr.getInstance().uinfo.openId != this.inviterrInfo.openId) { // 排除自己邀请自己的情况
                            console.log("关联邀请人", res.query);
                            // 关联自己及邀请人
                            this.addInfo();
                        }
                    }
                }
                resolve();
            } else {
                resolve();
            }
        });
    }

}
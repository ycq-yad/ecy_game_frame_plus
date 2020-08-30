import { PlayerDataBaseInfo } from "./GameDataManager";
import { WangLuoData } from "./GameDataType";
import { MiniGameMgr } from "../minigame/MiniGameMgr";

/**
 * 游戏数据缓存
 */
export class GDataMgr {

    constructor() {
        this.bannerId = new Array<string>();
        this.videoId = Array<string>();
        this.longVideoId = Array<string>();
    }

    private static instance: GDataMgr;
    static getInstance(): GDataMgr {
        if (!GDataMgr.instance) {
            GDataMgr.instance = new GDataMgr();
        }
        return GDataMgr.instance;
    }

    /** 游戏ID */
    public gid: string = "1049";

    /** 进入游戏的一些信息 */
    public eGInfos: any;

    /** 用户基本信息 */
    uinfo: WangLuoData.UserInfo = new WangLuoData.UserInfo();

    // /** 邀请相关数据 */
    // invite: netData.Invite = new netData.Invite();

    /** 是否通过收藏进入 */
    isBC: boolean = false;

    /** 邀请人openId */
    invId: string;

    /** 
     * 
     * 服务类型 
     * 
     * (nts 内网测试服)
     * (wts 外网测试服)
     * (wzs 外网正式服)
     * */
    private serConf_: "nts" | "wts" | "wzs";

    public perFixUrl: string = "";

    // /**
    //  * qq小程序 远程资源地址
    //  */
    // qqMiniGameResUrl: string = this.perFixUrl + "qq_res/qq_res_v_z_1_7/";

    // /**
    //  * wx小程序 远程资源地址
    //  */
    // wxMiniGameResUrl: string = this.perFixUrl + "wx_res/wx_res_v_z_1_6/";
    // // wxMiniGameResUrl: string = "";


    // /**
    //  * tt小程序 远程资源地址
    //  */
    // ttMiniGameResUrl: string = this.perFixUrl + "tt_res/tt_res_v_z_1_0/";


    ///////////////////////////////////////////版本修改参数

    /** 服务器Http地址（邀请关联）*/
    public URL_OF_INVITE: string = "";

    /** banner */
    public bannerId: Array<string>;
    /** 短视频id */
    public videoId: Array<string>;
    /** 长视频id */
    public longVideoId: Array<string>;
    /** 盒子id */
    public boxId: Array<string>;

    /**平台的更多游戏数据 */
    public weCatMoreInfo: any[];

    /**
     * 初始化一些参数
     * @param res 
     */
    public initConfigs(res) {
        if (res) {
            this.bannerId = res.gameInfo.bannerId;
            this.videoId = res.gameInfo.videoId;
            this.longVideoId = res.gameInfo.longVideoId;
            this.boxId = res.gameInfo.boxId;
            MiniGameMgr.instance.platformInfos = res.gameInfo;
        } else {
            console.error("GameData.initConfig res error!");
        }

    }

}
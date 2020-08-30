import { ConfSignDataIndex, GameConfIndex, LevelPowerIndex, DialogBoxIndexa, YaoQingConfigIndex } from "./ConfigDefine";
import { PlayerDataMgr } from "../common/GameDataManager";
import { GameManager } from "../manager/GameManager";

/*配置表相关逻辑*/
export class ConfigMgr {
    //单例
    private static instance: ConfigMgr;
    public static getInstance(): ConfigMgr {
        if (!ConfigMgr.instance) {
            ConfigMgr.instance = new ConfigMgr();
        }
        return ConfigMgr.instance;
    }

    constructor() { }

    //配置中的数据
    private arGCig: GameConfIndex[];
    private aSData: ConfSignDataIndex[];
    private aLPData: LevelPowerIndex[];
    private aDBIdx: DialogBoxIndexa[];
    private aICfig: YaoQingConfigIndex[];

    private mDialogB: any = {};

    /**获取签到的配置数据信息*/
    public getSDA(): ConfSignDataIndex[] {
        return ConfigMgr.instance.aSData;
    }

    /**通过签到编号获取签到数据*/
    public getSDBSID(nIndex: number): ConfSignDataIndex {
        if (nIndex < 0 || nIndex >= ConfigMgr.instance.aSData.length) {
            return null;
        }
        return ConfigMgr.instance.aSData[nIndex];
    }

    /**通过ID获取GameConfig中的配置数据 */
    public getGCDBID(nID: number): GameConfIndex {
        if (nID > ConfigMgr.instance.arGCig.length || nID <= 0) {
            return null;
        }
        let nRealID = nID - 1;
        return ConfigMgr.instance.arGCig[nRealID];
    }

    /**通过当前关卡获取宝箱信息 */
    public getTBCL(): number {
        let nRealIndex = PlayerDataMgr.getInstance().getCurGuanQia();
        if (nRealIndex < 0 || ConfigMgr.instance.aLPData.length < 0) {
            return 0
        }
        nRealIndex = nRealIndex >= ConfigMgr.instance.aLPData.length ? ConfigMgr.instance.aLPData.length - 1 : nRealIndex;
        return ConfigMgr.instance.aLPData[nRealIndex].nPs;
    }

    /**通过当前关卡获取是否显示录屏弹窗信息 */
    public getCSRBCL(): number {
        let nRealIndex = PlayerDataMgr.getInstance().getCurGuanQia();
        if (nRealIndex < 0 || ConfigMgr.instance.aLPData.length < 0) {
            return 0
        }
        nRealIndex = nRealIndex >= ConfigMgr.instance.aLPData.length ? ConfigMgr.instance.aLPData.length - 1 : nRealIndex;
        return ConfigMgr.instance.aLPData[nRealIndex].nPs;
    }

    /**通过对话空ID获得坐标和描述信息 */
    public getDialIf(nDialogID: number): any {
        return ConfigMgr.instance.mDialogB[nDialogID];
    }

    /**初始化配置表信息 */
    public async initConfs(): Promise<any> {
  
        return new Promise(async (resolve) => {
            let self = ConfigMgr.getInstance();
            let uPf = "resource/assets/config/";
            console.log("开始加载配置")
            let urlRandom = Math.random();
            self.arGCig = await self.loadConfig(uPf + 'GameConfig.json');
            self.aSData = await self.loadConfig(uPf + 'SignConfig.json');
            self.aLPData = await self.loadConfig(uPf + 'LevelPsInfo.json');
            self.aDBIdx = await self.loadConfig(uPf + 'DialogBox.json');
            let nLen = self.aDBIdx.length;
            for (let i = 0; i < nLen; ++i) {
                self.mDialogB[self.aDBIdx[i].id] = self.aDBIdx[i];
            }
            self.aICfig = await self.loadConfig(uPf + 'InviteConfig.json');
            resolve();
        });
    }


    public async  loadConfig(url: string): Promise<any> {
        url += GameManager.instance.randomTime;
        let getObj = function (jStr) {
            if (typeof (jStr) == "string") {
                return JSON.parse(jStr);
            } else {
                return jStr;
            }
        }
        return new Promise((resolve) => {
            Laya.loader.load(url, Laya.Handler.create(this, (json: any) => {
                resolve(getObj(json));
            }));
        })
    }

    /**获取邀请的数据信息 */
    public getYQConfI() {
        return ConfigMgr.instance.aICfig;
    }

    /**是否是微信平台 */
    public  isWeCatMiniGame(){
        return DeviceUtil.isWXMiniGame();
        //return true;
    }

}
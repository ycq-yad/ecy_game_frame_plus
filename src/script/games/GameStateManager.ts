import { EGType } from "./CommonDefine";

export default class GameStatusMgr  {
    
    private static instance: GameStatusMgr;
    public static getInstance(): GameStatusMgr {
        if (!GameStatusMgr.instance) {
            GameStatusMgr.instance = new GameStatusMgr();
        }
        return GameStatusMgr.instance;
    }

    constructor() { 
        this.nLevelStatus = EGType.e_EGType_GH;
    }

    /**当前进入关卡的方式 */
    private  nLevelStatus:number;
    public set levelStatus(nState:EGType){
        this.nLevelStatus = nState;
    }

    public  get levelStatus(){
        return this.nLevelStatus;
    }

    
}
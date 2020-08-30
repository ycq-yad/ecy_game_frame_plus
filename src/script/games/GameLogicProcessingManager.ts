export default class GameLogicProcessMgr  {
   //单例
   private static instance: GameLogicProcessMgr;
   public static getInstance(): GameLogicProcessMgr {
       if (!GameLogicProcessMgr.instance) {
           GameLogicProcessMgr.instance = new GameLogicProcessMgr();
       }
       return GameLogicProcessMgr.instance;
   }

   //是否开启了体力回复倒计时
   private PSRecoveryOpen:boolean;
    
    constructor() { 

    }
    public get PSRecoveryOpena(){
        return this.PSRecoveryOpen;
    }

    public set PSRecoveryOpena(b:boolean){
        this.PSRecoveryOpen = b;
    }
     //获取当前时间
     public static GetCurTimea(): number {
        return Laya.Browser.now();
    }

    
   
}
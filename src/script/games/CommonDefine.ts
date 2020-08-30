 //技能类型定义
 export enum EGType{
    e_EGType_GH    = 1,        //通过主页进入
    e_EGType_N        = 2,        //点击进入下一关
    e_EGType_RS     = 3,        //重新开启
    e_EGType_CL = 4,        //选择关卡进入
}

//道具类型
export enum PType{
    e_GType_Sp   = 1,        //体力
    e_GType_G = 2         //金币
}

//皮肤的状态
export enum SStatus{
    e_SState_H = 1,     //已拥有
    e_SState_NO = 2, //未拥有
    e_SState_U = 3,     //使用中
}

export class MGIndex {
    ad_id:number;
    ad_img:string;
    name:string;
    ad_appid:string;
    url:string;

    constructor(){
       this.ad_id = 0;
       this.ad_img = "";
       this.name   = "";
       this.ad_appid = "";
       this.url = "";
    }
};

export class MoreGameIndex {
    ad_id:number;
    ad_img:string;
    name:string;
    ad_appid:string;
    url:string;

    constructor(){
       this.ad_id = 0;
       this.ad_img = "";
       this.name   = "";
       this.ad_appid = "";
       this.url = "";
    }
};
import NativeBrige, { NativeMsg } from "./NativeBrige";
import { MiniGameMgr } from "./MiniGameMgr";


export class NativeMgr extends MiniGameMgr {

    constructor() {
        super();
        if (window["conch"]) {
            window["conch"].setOnBackPressedFunction(() => {

            });
        }

    }

    // private static instance: NativeMgr
    // static getInstance(): NativeMgr {
    //     if (!NativeMgr.instance) {
    //         NativeMgr.instance = new NativeMgr();
    //     }
    //     return NativeMgr.instance;
    // }

    /**
     * 跳转超休闲
     */
    public jumpLeisureSubject() {
        let msgJSon = {
            msg: NativeMsg.jumpLeisureSubject,
            data: "create"
        };
        NativeBrige.getInstance().sendToNative(JSON.stringify(msgJSon));
    }

    /**
     * 播放视频
     */
    public playVideoAd(data: { successFun?: Function, failFun?: Function, errorFun?: Function, isLongVideo?: boolean }) {
        TipsManager.getInstance().showDefaultTips("暂无广告");
    }
}

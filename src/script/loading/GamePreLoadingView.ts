import AnimationMgr from "../manager/AnimationManager";
import { MiniGameMgr } from "../minigame/MiniGameMgr";

/**
 * GamePreLoadingView
 */
export default class GamePreLoadView extends BaseSceneUISkin implements ILoadingView {
    public className_key = "GamePreLoadingView";
    /** 背景图 */
    private img_bg: Laya.Image;
    /** 进度条底板 */
    private img_jdt_db: Laya.Image;
    /** 进度条 */
    private img_jdt: Laya.Image;
    /** 标题 */
    private img_head: Laya.Image;
    /** Loading字样 */
    private img_load: Laya.Image;
    /**用于装动画的盒子*/
    private aniBox: Laya.Box;
    private aniBoxPosX: number;
    /**女主动画盒子 */
    private aniBoxNvZNvZhu: Laya.Box;
    /**数字更新 */
    private imageRight1: Laya.Image;
    private imageRight2: Laya.Image;
    private imageRight3: Laya.Image;

    constructor() {
        super();
        //背景
        this.img_bg = new Laya.Image();
        this.img_bg.skin = "resource/assets/preloading/loading_bg.jpg";
        this.img_bg.width = Laya.stage.width;
        this.img_bg.height = Laya.stage.height;
        this.img_bg.x = 0;
        this.img_bg.y = 0;
        //DeviceUtil.adaptationBgImg(this.img_bg);
        this.addChild(this.img_bg);
        //标题
        this.img_head = new Laya.Image();
        if (DeviceUtil.isWXMiniGame()) {
            // this.img_head.skin = "resource/assets/preloading/maininterface_logo_1.png";
            this.img_head.skin = "resource/assets/preloading/maininterface_logo_1.png";
        } else if (DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) {
            //this.img_head.skin = "resource/assets/preloading/loading_logo_4.png";
        }

        this.img_head.top = 300;
        this.img_head.centerX = 0;
        this.addChild(this.img_head);
        //进度条背景
        this.img_jdt_db = new Laya.Image();
        this.img_jdt_db.skin = "resource/assets/preloading/loading_baseboard_1.png";
        this.img_jdt_db.sizeGrid = "15,15,15,15";
        this.img_jdt_db.width = 706;
        this.img_jdt_db.height = 50;
        this.img_jdt_db.top = 1097;
        this.img_jdt_db.centerX = 0;
        this.addChild(this.img_jdt_db);
        //进度条的值
        this.img_jdt = new Laya.Image();
        this.img_jdt.skin = "resource/assets/preloading/loading_baseboard_2.png";
        this.img_jdt.sizeGrid = "15,15,15,15";
        this.img_jdt.width = 691;
        this.img_jdt.height = 36;
        this.img_jdt.x = 8;
        this.img_jdt.centerY = 0;
        this.img_jdt_db.addChild(this.img_jdt);
        //下面的文字
        this.img_load = new Laya.Image();
        this.img_load.skin = "resource/assets/preloading/loading_word.png";
        this.img_load.top = 1157;
        this.img_load.centerX = 0;
        this.addChild(this.img_load);

        //中间的文字
        let stWorldBox: Laya.Box;
        stWorldBox = new Laya.Box();
        stWorldBox.height = 20;
        stWorldBox.width = 88;
        stWorldBox.centerX = 0;
        stWorldBox.centerY = 0;

        let imageLeft: Laya.Image;
        imageLeft = new Laya.Image();
        imageLeft.skin = "resource/assets/preloading/loading_word_2.png";
        imageLeft.x = 66;
        imageLeft.centerY = 0;
        stWorldBox.addChild(imageLeft);

        this.imageRight1 = new Laya.Image();
        this.imageRight1.height = 20;
        this.imageRight1.x = 0;
        //this.imageRight1.skin = "resource/assets/preloading/loading_number/loading_number_1.png";
        stWorldBox.addChild(this.imageRight1);

        this.imageRight2 = new Laya.Image();
        this.imageRight2.height = 20;
        this.imageRight2.x = 22;
        //this.imageRight2.skin = "resource/assets/preloading/loading_number/loading_number_2.png";
        stWorldBox.addChild(this.imageRight2);

        this.imageRight3 = new Laya.Image();
        this.imageRight3.height = 20;
        this.imageRight3.x = 44;
        //this.imageRight3.skin = "resource/assets/preloading/loading_number/loading_number_0.png";
        stWorldBox.addChild(this.imageRight3);
        this.img_jdt_db.addChild(stWorldBox);
        stWorldBox.visible=false;


        //一个男主动画
        this.aniBox = new Laya.Box();
        this.aniBox.width = 300;
        this.aniBox.height = 300;
        this.aniBox.bottom = 445;
        this.aniBox.x = (Laya.stage.width - this.img_jdt_db.width) / 2;
        this.aniBoxPosX = this.aniBox.x;
        this.addChild(this.aniBox);
        //创建男主动画
        // this.createSke("resource/assets/preloading/zloading.sk").then((skeAni) => {
        //     skeAni.player.playbackRate = 1;
        //     skeAni.autoSize = true;
        //     skeAni.scale(1, 1);
        //     skeAni.play(0, true);
        //     skeAni.x = 60;
        //     skeAni.y = 300;
        //     this.aniBox.addChild(skeAni)
        //     this.loadingAni = skeAni;
        // });

        // /**女主动画 */
        // this.aniBoxNvZhu = new Laya.Box;
        // this.aniBoxNvZhu.width = 300;
        // this.aniBoxNvZhu.height = 300;
        // this.aniBoxNvZhu.bottom = 445;
        // let nWith = this.img_jdt_db.width;
        // nWith = (Laya.stage.width - nWith) / 2 + nWith;
        // this.aniBoxNvZhu.x = 800;//(Laya.stage.width - nWith)/2 + nWith;
        // this.addChild(this.aniBoxNvZhu);
        // this.createSke("resource/assets/preloading/nloading.sk").then((skeAni) => {
        //     skeAni.player.playbackRate = 1;
        //     skeAni.autoSize = true;
        //     skeAni.scale(1, 1);
        //     skeAni.play(0, true);
        //     skeAni.x = 60;
        //     skeAni.y = 300;
        //     this.aniBoxNvZhu.addChild(skeAni)
        //     this.loadingAniNuZhu = skeAni;
        // });

        this.progress(0, 100);
    }


    public createSke(url: string): Promise<Laya.Skeleton> {
        return new Promise<Laya.Skeleton>((resolve) => {
            AnimationMgr.instance.showSkeAnimation(url, (skeAni: Laya.Skeleton) => {
                resolve(skeAni);
            }, 1);
        });
    }




    public onAwake() {
        super.onAwake();
        this.img_bg.scaleX = this.img_bg.scaleY = DeviceUtil.getScalePix();
    }

    private nStartTime: number;
    private nNumTest: number = 0;
    public progress(index: number, len: number): void {
        if (this.img_jdt) {
            this.img_jdt.width = 691 * (index / len);
            let nNumTemp = (index / len);
            let strData = nNumTemp.toFixed(2);
            nNumTemp = parseFloat(strData);
            let nNum = Math.floor(nNumTemp * 100);
            let strNum = nNum.toString();
            if (strNum.length == 1) {
                let cData = strNum.charAt(0);
                this.imageRight3.skin = "resource/assets/preloading/loading_number/loading_number_" + strNum.charAt(0) + ".png";
            } else if (strNum.length == 2) {
                this.imageRight3.skin = "resource/assets/preloading/loading_number/loading_number_" + strNum.charAt(1) + ".png";
                this.imageRight2.skin = "resource/assets/preloading/loading_number/loading_number_" + strNum.charAt(0) + ".png";
            } else if (strNum.length == 3) {
                this.imageRight3.skin = "resource/assets/preloading/loading_number/loading_number_" + strNum.charAt(2) + ".png";
                this.imageRight2.skin = "resource/assets/preloading/loading_number/loading_number_" + strNum.charAt(1) + ".png";
                this.imageRight1.skin = "resource/assets/preloading/loading_number/loading_number_" + strNum.charAt(0) + ".png";
            }
            //移动动画
            let readX = this.aniBoxPosX + this.img_jdt.width;
            readX = readX > (706 - 20) ? (706 - 20) : readX
            this.aniBox.x = readX;
        }
    }

    private loadingAni: Laya.Skeleton;

    private loadingAniNuZhu: Laya.Skeleton;

    // public onRemoved(): void {
    //     console.log("gamepreloadingview on removed");
    //     if (this.loadingAni) {
    //         this.loadingAni.destroy();
    //         this.loadingAni= null;
    //     }
    //     this.destroy(true);
    // }

    public remove() {
        Laya.timer.clearAll(this);
    }
}
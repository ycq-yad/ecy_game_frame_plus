
/**
 * 更多游戏的图片
 * 
 * 
 */
export class MoreGameLogo extends Laya.Box {
    public constructor() {
        super();
        this.size(126, 160);
        this.createView();
        this.addEvent();
    }

    public createView() {
        let image = new Laya.Image();
        image.skin = "resource/assets/platform/oppo/home/maininterface_icon_1.png";
        this.addChild(image);

        let image1 = new Laya.Image();
        image1.skin = "resource/assets/platform/oppo/home/maininterface_point_1.png";
        this.addChild(image1);
        image1.right = 0;
    }

    public addEvent() {
        // this.on(Laya.Event.CLICK, this, () => {
        //     // OppoManager.instance.showMoreGamePop()
        // })
    }
}
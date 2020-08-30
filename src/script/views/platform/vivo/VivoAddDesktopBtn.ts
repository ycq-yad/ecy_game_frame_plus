export class VivoAddDesktopBtn extends Laya.Box {
    className_key = "VivoAddDesktopBtn";

    public constructor() {
        super();
        this.createUI();
    }

    private createUI() {
        this.size(142, 142);
        let db = new Laya.Image();
        db.skin = "resource/assets/platform/vivo/maininterface_baseboard_1.png";
        this.addChild(db);

        let lab = new Laya.Image();
        lab.skin = "resource/assets/platform/vivo/maininterface_word_3.png";
        lab.centerX = 0;
        lab.bottom = 0;
        this.addChild(lab);

        let finger = new Laya.Image();
        finger.skin = "resource/assets/platform/vivo/maininterface_icon_2.png";
        finger.centerX = 0;
        finger.bottom = -120;
        this.addChild(finger);

        this.addEvent();
    }

    private addEvent() {

    }

    public onClick(callback: Function) {
        this.on(Laya.Event.CLICK, this, () => {
            callback && callback();
        });
    }

    private removeEvent() {
        // this.off(Laya.Event.CLICK, this, this.onClick);
    }

    public removeSelf() {
        this.removeEvent();
        return super.removeSelf();
    }

    public destroy() {
        this.offAll();
        this.removeSelf();
        super.destroy();
    }
}
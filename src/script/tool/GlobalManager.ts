export default class GlobalManager {
    public static init() {
        this.initSkeleton();
        // this.initsetLabel();
    }

    public static initsetLabel() {
        BitmapLabelUtils.setLabel = function (label: Laya.Sprite, text: string, prefix: string, gap: number, suffix?: string, textAlgin?: "center" | "left") {
            if (suffix == null) { suffix = ".png"; }
            if (textAlgin == null) { textAlgin = "left"; }
            label.removeChildren();
            // let chars:string[] = text;
            var box = new Laya.Box();
            if (textAlgin == "center") {
                box = new Laya.Box();
                box.width = 0;
                label.addChild(box);
            }
            var _loop_1 = function (i, len) {
                var char = text.charAt(i);
                var imgChar = new Laya.Image();
                Laya.loader.create(prefix + char + suffix, Laya.Handler.create(null, function (tex) {
                    if (!tex) {
                        return;
                    }
                    imgChar.texture = tex;
                    if (textAlgin == "left") {
                        imgChar.x = (imgChar.texture.sourceWidth + gap) * i;
                        imgChar.bottom = 0;
                        label.addChild(imgChar);
                    }
                    else {

                        if (box) {
                            imgChar.width = imgChar.texture.sourceWidth;
                            imgChar.height = imgChar.texture.sourceHeight;
                            imgChar.bottom = 0;
                            imgChar.x = box.width;
                            box.width += (imgChar.texture.sourceWidth + gap);
                            if (box.height < imgChar.texture.sourceHeight) {
                                box.height = imgChar.texture.sourceHeight;
                            }
                            box.addChild(imgChar);
                        }
                        if (i == len - 1) {
                            box.x = (label.width - box.width) / 2 + gap / 2;
                        }
                    }
                }));
            };
            for (var i = 0, len = text.length; i < len; i++) {
                _loop_1(i, len);
            }
            return box;
        }
    }

    /**
     * 动画名错误提醒
     */
    private static initSkeleton(): void {
        console.log("重写skeleton play()")
        Laya.Skeleton.prototype["newPlay"] = Laya.Skeleton.prototype.play;
        Laya.Skeleton.prototype.play = function () {
            let animName = arguments[0];
            if (typeof animName == "string") {
                for (let i = 0, n = this._templet._anis.length; i < n; ++i) {
                    if (animName == this._templet._anis[i].name) {
                        this.newPlay.apply(this, arguments);
                        return;
                    }
                }
            } else {
                this.newPlay.apply(this, arguments);
                return;
            }
            console.error("not anim name:  ", animName);
        }
    }
}

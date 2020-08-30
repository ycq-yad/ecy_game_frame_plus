/**
 * 自定义组件 关于按钮的效果实现
 */
export default class CustemButton extends CustomScaleComponent {
    constructor() {
        super();
    }
    maxScale: number = 1.1
    minScale: number = 1.0
    animTime: number = 300
    public playScaleAnim() {
        let box = this.owner as Laya.Sprite;
        Laya.Tween.clearAll(box)
        let scale = box.scaleX < this.maxScale ? this.maxScale : this.minScale;
        Laya.Tween.to(box, {scaleX: scale, scaleY: scale}, this.animTime, Laya.Ease.sineOut, Laya.Handler.create(this, this.playScaleAnim))
    }
}
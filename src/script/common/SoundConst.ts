/**
 * 游戏音效
 */
export default class SoundConstC {
    /** 背景音乐 */
    static Bgm: string = "bgm";
    /** 按钮音1 */
    static Btn_1: string = "btn_1";

    /**
    * 通过键值获得全路径下的url
    * 
    * @param key 
    */
    public static getKeyUrlC(key: string): string {
        if (DeviceUtil.isNative()) {
            return "resource/assets/sounds/ogg/" + key + SoundConstC.sufixogg;
        }
        return "resource/assets/sounds/" + key + SoundConstC.sufix;
    }

    public static sufix: string = ".mp3";
    public static sufixogg: string = ".ogg";
}
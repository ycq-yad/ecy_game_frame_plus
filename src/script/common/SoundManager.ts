import SoundConstC from "../common/SoundConst";

/**
* 音频管理类
*/
export default class SoundMgr {

    constructor() {
    }

    private static instance: SoundMgr;
    public static getInstance(): SoundMgr {
        if (!SoundMgr.instance) {
            SoundMgr.instance = new SoundMgr();
        }
        return SoundMgr.instance;
    }

    private _shakeIsOpen: boolean = true;
    /** 震动状态 */
    public set shakeIsOpen(isOpen: boolean) {
        this._shakeIsOpen = isOpen;
    }
    public get shakeIsOpen(): boolean {
        return this._shakeIsOpen;
    }

    private _soundIsOpen: boolean = true;
    /** 音效状态 */
    public set soundIsOpen(isOpen: boolean) {
        this._soundIsOpen = isOpen;
        this.musicOpen = isOpen;
        this.soundOpen = isOpen;
    }
    public get soundIsOpen(): boolean {
        return this._soundIsOpen;
    }

    /*********************************************** 背景音乐 ***********************************************/

    /** 声音对象池 */
    private effectPool = {};

    private musicChannel: Laya.SoundChannel;

    private _musicOpen = true;
    /** 背景音乐开关 */
    set musicOpen(value: boolean) {
        this._musicOpen = value;
        if (value) {
            this.playBgm();
        } else {
            this.stopBgMusic();
        }
    }
    get musicOpen(): boolean {
        return this._musicOpen;
    }

    /**
     * 是否进入界面
     * 进入界面再播放声音
     */
    public isEnterView: boolean = false;

    private _bgm: string = 'bg';
    /** 背景音乐 */
    set bgm(bgm: string) {
        if (!this._bgm || this._bgm != bgm) {
            this._bgm = bgm;
            this.playBgm();
        } else if (this._bgm == bgm) {
            this.stopBgMusic();
            this.playBgm();
        }
    }
    get bgm(): string {
        return this._bgm;
    }

    private _bgvolume = 1;
    /** 背景音乐音量 */
    set bgvolume(value: number) {
        this.musicChannel && (this.musicChannel.volume = value);
        this._bgvolume = value;
    }
    get bgvolume(): number {
        return this._bgvolume;
    }

    /** 背景音乐 */
    playBgm() {
        if (!this.isEnterView) {
            return
        }
        console.log("playBgm >>>", this._bgm, this.musicOpen);
        if (!this._bgm) return;
        if (!this.musicOpen) return;
        this.playYinYue();
    }


    /**音频 平台 */
    public bgInnerAudioContext;
    /** 背景音乐 */
    private soundChannel: laya.media.SoundChannel;

    private async playYinYue() {
        if (this.soundChannel) {
            this.soundChannel.resume();
        } else {
            let _url = ResUtil.getIntance().defaultOriginUrl + "resource/assets/sounds/" + this._bgm + ".mp3";
            console.log("bgm url >>>", _url);
            this.soundChannel = await Laya.SoundManager.playMusic(_url, 0);
        }
    }

    /** 暂停背景音乐 */
    pauseBgm() {
        console.log("pauseBgm >>>");
        this.soundChannel && this.soundChannel.pause();
    }

    /** 关闭背景音乐 */
    stopBgMusic() {
        console.log("stopBgm >>>");
        Laya.SoundManager.stopMusic();
        this.soundChannel = null;
    }

    /*********************************************** 游戏音效 ***********************************************/

    public effectPools = {};
    public onPlaySoundNum: number = 0;
    /** 音效音量 */
    private effectVolume = 1;

    private _soundOpen = true;
    /** 音效开关 */
    set soundOpen(_soundOpen: boolean) {
        this._soundOpen = _soundOpen;
    }
    get soundOpen(): boolean {
        return this._soundOpen;
    }

    /**
     * 销毁一个音效
     * @param soundName 
     */
    public destoryOneSound(soundName: string): void {
        let _url = SoundConstC.getKeyUrlC(soundName);
        if (DeviceUtil.isMiniGame()) {
            _url = Laya.URL.basePath + _url;
        }
        Laya.loader.clearRes(_url);
        this.effectPool[_url].destroy();
        this.effectPool[_url] = null;
        this.effectPools[_url].destroy();
        this.effectPools[_url] = null;
    }

        /**
     * 播放native声音
     */
    public playNativeEffect(_url: string) {
        Laya.SoundManager.playSound(Laya.URL.basePath + _url);

    }
    /** 播放一个音效 */
    public async playEffect(soundUrl: string, times: number) {
        let _url = SoundConstC.getKeyUrlC(soundUrl);
        if (DeviceUtil.isNative()) {
            this.playNativeEffect(_url)
            return;
        }
        if (this._soundOpen == false || !soundUrl || soundUrl == "") return;
        if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
            return this.playMiniGameEffect(Laya.URL.basePath + _url);
        }
        let sound: Laya.Sound = this.effectPool[soundUrl];
        if (!sound || !(sound as any).audioBuffer || !(sound as any)._disposed) {
            sound = await ResUtil.getIntance().getAsyncRESByUrl<Laya.Sound>(_url);
            if (sound) {
                this.effectPool[soundUrl] = sound;
                let soundChannel = sound.play(0, times) as Laya.SoundChannel;
                soundChannel.volume = this.effectVolume;
                return soundChannel;
            }
            // else {
            //     await ResUtil.getIntance().getAsyncRESByUrl(_url).then(() => {
            //         this.playEffect(soundUrl, times);
            //     });
            //     return;
            // }
        } else {
            let soundChannel = sound.play(0, times) as Laya.SoundChannel;
            if (soundChannel) {
                soundChannel.play();
            }
            soundChannel.volume = this.effectVolume;
            return soundChannel;
        }
    }

    /**音效停止 */
    public stopEffect(soundUrl: string) {
        let stLayaSound: Laya.Sound = this.effectPool[soundUrl];
        if (stLayaSound) {
            stLayaSound.dispose
        }
    }

    /**
     * 小游戏播放音效
     */
    public playMiniGameEffect(soundUrl: string): any {
        if (DeviceUtil.isWXMiniGame() || DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) {
            let innerAudioContext = this.effectPools[soundUrl];
            if (!innerAudioContext) {
                SoundMgr.getInstance().effectPools[soundUrl] = innerAudioContext = platform.createInnerAudioContext();
                innerAudioContext.autoplay = true;
                innerAudioContext.src = soundUrl;
                innerAudioContext.onError(() => {
                    innerAudioContext.destroy();
                    SoundMgr.getInstance().effectPools[soundUrl] = null;
                });
                innerAudioContext.onStop(() => {
                    innerAudioContext.destroy();
                    SoundMgr.getInstance().effectPools[soundUrl] = null;
                });
            }
            innerAudioContext.play();
            return innerAudioContext;
        }
        //以下内容只适应微信
        // if (this.onPlaySoundNum > 20) {//最大声音数目
        //     return;
        // }
        let miniSounds: MiniGameSound[] = this.effectPools[soundUrl];
        if (!miniSounds) {
            this.effectPools[soundUrl] = miniSounds = [];
        }
        let miniSound: MiniGameSound;
        if (miniSounds.length < 1) {
            miniSound = new MiniGameSound();
            miniSound.create(soundUrl);
        } else {
            miniSound = miniSounds.shift();
            if (miniSound.isEnded == false) {//获取到的没有结束
                miniSound = new MiniGameSound();
                miniSound.create(soundUrl);
            } else {
                miniSound.play();
            }
        }
        this.onPlaySoundNum += 1;
    }
}

/**
 * 小游戏的音效对象 封装下 控制数量和重用等
 */
class MiniGameSound {
    public innerAudioContext;
    public isEnded: boolean;
    public soundUrl: string;
    /** 
     * 创建
     */
    public create(soundUrl: string): void {
        this.innerAudioContext = platform.createInnerAudioContext();
        this.innerAudioContext.onEnded(() => {
            this.isEnded = true;
            SoundMgr.getInstance().effectPools[this.soundUrl].push(this);
            SoundMgr.getInstance().onPlaySoundNum -= 1;
        });
        this.isEnded = false;
        this.soundUrl = soundUrl;
        this.innerAudioContext.src = soundUrl;//
        this.innerAudioContext.autoplay = true;
    }

    /**
     * 播放
     */
    public play(): void {
        this.innerAudioContext.play();
    }
}
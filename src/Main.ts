import GameConfig from "./GameConfig";
import { GDataMgr } from "./script/common/GameData";
import GamePreLoadView from "./script/loading/GamePreLoadingView";
import SoundMgr from "./script/common/SoundManager";

import { LevelMgr } from "./script/manager/LevelManager";
import GameStatusMgr from "./script/games/GameStateManager";
import { EGType, MGIndex } from "./script/games/CommonDefine";
import { PlayerDataMgr } from "./script/common/GameDataManager";
import { ConfigMgr } from "./script/games/ConfigManager";
import ViewChangeMgr from "./script/games/ViewChangeManager";
import InviteMgr from "./script/manager/InviteManager";
import PlatformDY from "./PlatformDY";

import GlobalManager from "./script/tool/GlobalManager";
import { MiniWechatManager } from "./script/minigame/MiniWechatManager";
import { MiniQQManager } from "./script/minigame/MiniQQManager";
import { MiniTTManager } from "./script/minigame/MiniTTManager";
import { MiniGameMgr } from "./script/minigame/MiniGameMgr";
import { GameManager } from "./script/manager/GameManager";
import { MiniVVManager } from "./script/minigame/MiniVVManager";
import { MiniOppoManager } from "./script/minigame/MiniOppoManager";
import NativeBrige from "./script/minigame/NativeBrige";
import { NativeMgr } from "./script/minigame/NativeMgr";

declare var VConsole;
declare var loadLib;

class Main extends BaseContent {

	constructor() {
		super({ width: 1080, height: 1920, exportSceneToJson: true });
		//

		if (MiniGameMgr.instance == null) {
			if (DeviceUtil.isWXMiniGame()) {
				MiniGameMgr._ins = new MiniWechatManager();
			} else if (DeviceUtil.isQQMiniGame()) {
				MiniGameMgr._ins = new MiniQQManager();
			} else if (DeviceUtil.isTTMiniGame()) {
				MiniGameMgr._ins = new MiniTTManager();
			} else if (DeviceUtil.isVIVOMiniGame()) {
				MiniGameMgr._ins = new MiniVVManager();
			}
			else if (DeviceUtil.isNative()) {
				MiniGameMgr._ins = new NativeMgr();
			}
			else if (DeviceUtil.isOPPOMiniGame()) {
				MiniGameMgr._ins = new MiniOppoManager();
			}
			else {
				MiniGameMgr._ins = new MiniGameMgr();

			}
		}
		GameConfig.init();
		GlobalManager.init();


		//
		//let tempMainC = new MainC();
		// let s = Utils

		let onShow = function (obj) {
			console.log("onShow...", obj);
			SoundMgr.getInstance().playBgm();
			if (ViewChangeMgr.gameOpen) {
				if (ViewChangeMgr.getInstance().CurLevelBasea) {
					ViewChangeMgr.getInstance().CurLevelBasea.showLevel();
				}
			}
		}

		let onHide = function () {
			console.log("onHide...");
			SoundMgr.getInstance().stopBgMusic();
			if (ViewChangeMgr.getInstance().CurLevelBasea) {
				ViewChangeMgr.getInstance().CurLevelBasea.hideLevel();
			}
		}

		let onAudioInterruptionBegin = (res) => {
			console.log("onAudioInterruptionBegin");
			// SoundManager.getInstance().stopBgMusic();
		};

		let onAudioInterruptionEnd = (res) => {
			console.log("onAudioInterruptionEnd");
			// SoundManager.getInstance().playBgMusic(SoundManager.getInstance().curBgMusic);
		};

		(function () {
			if (ViewManager.getInstance().showView) {
				var old = ViewManager.getInstance().showView;
				ViewManager.getInstance().showView = function (className: any, data?: any, only?: boolean) {
					let key = ClassUtils.getClassKey(className)
					EventMgr.getInstance().sendEvent("onAddPop", key);
					return old.apply(this, arguments)

				}
			}
		})();
		if (DeviceUtil.isMiniGame()) {
			if (!DeviceUtil.isVIVOMiniGame()) {

				GDataMgr.getInstance().eGInfos = platform.getLaunchOptionsSync();
			}
			MiniGameMgr.instance.onShow(onShow);
			MiniGameMgr.instance.onHide(onHide);
			MiniGameMgr.instance.onAudioInterruptionStart(onAudioInterruptionBegin);
			MiniGameMgr.instance.onAudioInterruptionOver(onAudioInterruptionEnd);
			MiniGameMgr.instance.init();
		} else {
			Laya.stage.on(Laya.Event.FOCUS, this, () => {
				console.log("获取焦点");
				onShow(null);
				//EventMgr.getInstance().sendEvent(GameEvent.ONSHOW);
			});
			Laya.stage.on(Laya.Event.BLUR, this, () => {
				console.log("失去焦点");
				onHide();
				//EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
			});
		}
	}

	/**
	 * 检验平台
	 */
	public checkPlatform(): void {
		GameManager.instance.loadingView = new GamePreLoadView();
		SceneManager.getInstance().openSceneInstance(GameManager.instance.loadingView);

		console.log("检验平台---");
		let self = this;
		//h5
		if (window["loadingH5"]) {
			window["loadingH5"](100);
			// 初始化
			// loadLib("vconsole.min.js");
		}

		if (window["loadingView"]) {
			//native brige
			window["NativeBrige"] = NativeBrige.getInstance();
			// window["loadingView"].loading(100);
		}
		//判断平台使用不同的地址资源
		let resUrl: string = "./";
		if (DeviceUtil.isQQMiniGame()) {
			PlatformDY.url = PlatformDY.qqUrl;
			//开启定时回收触发
			GDataMgr.getInstance().gid = "1061";//qq的游戏id

			resUrl = GDataMgr.getInstance().perFixUrl + "qq_res/qq_res_v_z_2_6/"//GDataMgr.getInstance().qqMiniGameResUrl;
			self.loadPreLoadRes(resUrl + "configs/infoQQ.json" + GameManager.instance.randomTime);
		} else if (DeviceUtil.isWXMiniGame()) {
			GDataMgr.getInstance().gid = "1062";//微信的游戏id

			// resUrl = GDataMgr.getInstance().wxMiniGameResUrl;
			resUrl = GDataMgr.getInstance().perFixUrl + "wx_res/wx_res_v_z_2_9/"

			self.loadPreLoadRes(resUrl + "configs/infoWX.json" + GameManager.instance.randomTime);
		} else if (DeviceUtil.isTTMiniGame()) {
			GDataMgr.getInstance().gid = "1049";

			// resUrl = GDataMgr.getInstance().ttMiniGameResUrl;
			resUrl = GDataMgr.getInstance().perFixUrl + "tt_res/tt_res_v_z_1_0/"
			self.loadPreLoadRes(resUrl + "configs/infoTT.json" + GameManager.instance.randomTime);
		} else if (DeviceUtil.isVIVOMiniGame()) {
			GDataMgr.getInstance().gid = "1049";
			// resUrl = GDataMgr.getInstance().ttMiniGameResUrl;
			resUrl = GDataMgr.getInstance().perFixUrl + "vivo_res/vivo_res_v_z_1_0/"
			self.loadPreLoadRes(resUrl + "configs/infoVV.json" + GameManager.instance.randomTime);
		} else if (DeviceUtil.isOPPOMiniGame()) {
			GDataMgr.getInstance().gid = "1049";
			// resUrl = GDataMgr.getInstance().ttMiniGameResUrl;
			resUrl = GDataMgr.getInstance().perFixUrl + "oppo_res/oppo_res_v_z_1_2/"
			self.loadPreLoadRes(resUrl + "configs/infoOppo.json" + GameManager.instance.randomTime);
		}

		else {
			GDataMgr.getInstance().gid = "1049";
			//剩余其他的平台
			if (DeviceUtil.isNative()) {
				GameManager.instance.randomTime = '';
			}
			self.initDebug();
			self.loadPreLoadRes(resUrl + "configs/infos.json" + GameManager.instance.randomTime);
		}



		//
		if (DeviceUtil.isMiniGame()) {
			//开启定时回收触发
			if (!DeviceUtil.isVIVOMiniGame()) {
				Laya.timer.loop(10000, window, () => {
					console.log("tt加速回收---");
					platform.triggerGC();
				});
			}

			ResUtil.getIntance().defaultOriginUrl = resUrl;
			ResUtil.getIntance().addVersionPrefix(resUrl);
		}
	}

	/**
	 * 加载预加载资源
	 */
	private loadPreLoadRes(resUrl: string) {
		console.log('资源路径->', resUrl);
		this.initInfos(resUrl);
		Laya.timer.once(5000, this, this.loadPreLoadRes, [resUrl]);
	}

	/**标记确保infos加载成功 */
	private isFlage: boolean = false;

	protected enableFileConfig(): void {
		Laya.timer.clearAll(this);
		this.loadFileConfig("fileconfig.json");
		if (this.isFlage) {
			return
		}
		this.isFlage = true;
		console.log(BaseConst.infos);
		//
		GDataMgr.getInstance().initConfigs(BaseConst.infos);
		if (DeviceUtil.isWXMiniGame()) {
			PlatformDY.url = BaseConst.infos.gameInfo.url;
		}

		MiniGameMgr.instance.showBanner({});
	}



	/**
	 * 加载资源
	 */
	protected async loadRes() {
	


		GameManager.instance.loadRes();
	}



}
//激活启动类
new Main();
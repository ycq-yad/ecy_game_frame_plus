Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@ycq-yad 
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


ycq-yad
/
ecy_game_framework
1
00
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
ecy_game_framework/bLib/bLib.js /
@ycq-yad
ycq-yad Update bLib.js
…
Latest commit 4e9a335 13 seconds ago
 History
 1 contributor
3764 lines (3764 sloc)  142 KB
  
Code navigation is available!
Navigate your code with ease. Click on function and method calls to jump to their definitions or references in the same repository. Learn more

(function() {
    "use strict";
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array &&
        function(d, b) {
            d.__proto__ = b
        } ||
        function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        };
        return extendStatics(d, b)
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new(P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value))
                } catch(e) {
                    reject(e)
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value))
                } catch(e) {
                    reject(e)
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : new P(function(resolve) {
                    resolve(result.value)
                }).then(fulfilled, rejected)
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
    }
    function __generator(thisArg, body) {
        var _ = {
            label: 0,
            sent: function() {
                if (t[0] & 1) throw t[1];
                return t[1]
            },
            trys: [],
            ops: []
        },
        f,
        y,
        t,
        g;
        return g = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this
        }),
        g;
        function verb(n) {
            return function(v) {
                return step([n, v])
            }
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (! (t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue
                }
                op = body.call(thisArg, _)
            } catch(e) {
                op = [6, e];
                y = 0
            } finally {
                f = t = 0
            }
            if (op[0] & 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            }
        }
    }
    var BaseConst = function() {
        function BaseConst() {}
        return BaseConst
    } ();
    window.BaseConst = BaseConst;
    var BaseContent = function() {
        function BaseContent(data) {
            if (data) {
                this.initGame(data);
                this.initLayer();
                Laya.timer.frameOnce(1, this, this.checkPlatform)
            } else {
                this.checkPlatform()
            }
        }
        BaseContent.prototype.initDebug = function(url) {
            if (url === void 0) {
                url = "configs/Debug.json"
            }
            return __awaiter(this, void 0, void 0,
            function() {
                var debugInfo;
                return __generator(this,
                function(_a) {
                    switch (_a.label) {
                    case 0:
                        return [4, ResUtil.getIntance().asyncLoadResByURL(url, 1)];
                    case 1:
                        debugInfo = _a.sent();
                        if (typeof debugInfo == "string") {
                            debugInfo = JSON.parse(debugInfo + "")
                        }
                        if (debugInfo) {
                            if (debugInfo.stat) Laya.Stat.show(0, 50);
                            if (debugInfo.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
                            if (debugInfo.physicsDebug && Laya["PhysicsDebugDraw"]) Laya.PhysicsDebugDraw.enable();
                            Laya.alertGlobalError = debugInfo.alertGlobalError
                        }
                        return [2]
                    }
                })
            })
        };
        BaseContent.prototype.initGame = function(data) {
            if (window["Laya3D"]) Laya3D.init(data.width, data.height);
            else Laya.init(data.width, data.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            DeviceUtil.defaultSize = {
                w: data.width,
                h: data.height
            };
            DeviceUtil.autoStageScaleMode();
            Laya.URL.exportSceneToJson = data.exportSceneToJson
        };
        BaseContent.prototype.initLayer = function() {
            var _root = Laya.stage;
            if (_root == null) {
                console.error("初始化未完成");
                return
            }
            var sceneGroup = new Laya.Box;
            sceneGroup.width = _root.width;
            sceneGroup.height = _root.height;
            _root.addChild(sceneGroup);
            sceneGroup.name = "sceneLayer";
            SceneManager.getInstance().sceneLayer = sceneGroup;
            var sceneMaskGroup = new Laya.Box;
            sceneMaskGroup.width = _root.width;
            sceneMaskGroup.height = _root.height;
            _root.addChild(sceneMaskGroup);
            sceneMaskGroup.name = "sceneMaskGroup";
            SceneManager.getInstance().sceneMaskLayer = sceneMaskGroup;
            var popGroup = new Laya.Box;
            popGroup.mouseThrough = true;
            popGroup.width = _root.width;
            popGroup.height = _root.height;
            _root.addChild(popGroup);
            popGroup.name = "popLayer";
            ViewManager.getInstance().popLayer = popGroup;
            var bufferGroup = new Laya.Box;
            bufferGroup.mouseThrough = true;
            bufferGroup.width = _root.width;
            bufferGroup.height = _root.height;
            _root.addChild(bufferGroup);
            bufferGroup.name = "bufferGroup";
            BufferLoadingManger.getInstance().bufferGroup = bufferGroup;
            var tipGroup = new Laya.Box;
            tipGroup.mouseThrough = true;
            tipGroup.width = _root.width;
            tipGroup.height = _root.height;
            _root.addChild(tipGroup);
            tipGroup.name = "tipLayer";
            TipsManager.getInstance().tipLayer = tipGroup
        };
        BaseContent.prototype.initInfos = function(infosUrl) {
            var self = this;
            console.log("加载infos.json--");
            Laya.loader.load(infosUrl, Laya.Handler.create(this,
            function(res) {
                console.log("infos.json = ", res);
                if (typeof res == "string") {
                    BaseConst.infos = JSON.parse(res)
                } else {
                    BaseConst.infos = res
                }
                self.enableFileConfig()
            }))
        };
        BaseContent.prototype.loadFileConfig = function(resUrl) {
            var _this = this;
            Laya.AtlasInfoManager.enable(resUrl, Laya.Handler.create(this,
            function() {
                if (!BaseConst.infos.isOpen) {
                    TipsManager.getInstance().showDefaultTips("游戏维护中！", false);
                    return
                }
                if (Md5.hashStr(BaseConst.infos.gameId + "_" + BaseConst.infos.platform + "_" + BaseConst.infos.versionCode) != BaseConst.infos.token) {
                    TipsManager.getInstance().showDefaultTips("游戏维护中！", false);
                    console.log("校验不通过---");
                    return
                }
                _this.loadRes()
            }))
        };
        return BaseContent
    } ();
    window.BaseContent = BaseContent;
    var BaseInfosData = function() {
        function BaseInfosData() {}
        return BaseInfosData
    } ();
    window.BaseInfosData = BaseInfosData;
    var BaseLabel = function(_super) {
        __extends(BaseLabel, _super);
        function BaseLabel(data) {
            var _this = _super.call(this) || this;
            _this.desHeight = 0;
            _this.autoSize = true;
            _this.initView(data);
            return _this
        }
        BaseLabel.prototype.initView = function(data) {
            var len = data.length;
            for (var i = 0; i < len; i++) {
                var xs = this.width;
                this.createLabel(data[i], xs, 0)
            }
            this.desHeight += this.height
        };
        BaseLabel.prototype.createLabel = function(pro, xs, ys) {
            var label = new Laya.Label;
            label.dataSource = pro;
            this.addChild(label);
            label.x = xs;
            label.y = ys
        };
        return BaseLabel
    } (Laya.Box);
    window.BaseLabel = BaseLabel;
    var BasePopAnimationEnterType = function() {
        function BasePopAnimationEnterType() {}
        BasePopAnimationEnterType.SCALE_MODE = "SCALE_MODE";
        BasePopAnimationEnterType.SCALE_MODE_BACK = "SCALE_MODE_BACK";
        BasePopAnimationEnterType.SCALE_MODE_BACK_MORE = "SCALE_MODE_BACK_MORE";
        BasePopAnimationEnterType.NOMORL_MODE = "NOMORL_MODE";
        return BasePopAnimationEnterType
    } ();
    window.BasePopAnimationEnterType = BasePopAnimationEnterType;
    var BaseSceneUISkin = function(_super) {
        __extends(BaseSceneUISkin, _super);
        function BaseSceneUISkin(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "";
            _this.isCreate = false;
            _this.viewData_ = data;
            _this.on(Laya.Event.ADDED, _this, _this.onAddStage);
            _this.on(Laya.Event.REMOVED, _this, _this.onRemoved);
            return _this
        }
        Object.defineProperty(BaseSceneUISkin.prototype, "skin", {
            get: function() {
                return this.skin_
            },
            set: function(s) {
                this.skin_ = s;
                this.loadSkin()
            },
            enumerable: true,
            configurable: true
        });
        BaseSceneUISkin.prototype.loadSkin = function() {
            return __awaiter(this, void 0, void 0,
            function() {
                var json;
                return __generator(this,
                function(_a) {
                    switch (_a.label) {
                    case 0:
                        this.isCreate = false;
                        json = ResUtil.getIntance().thmsConfig.contents[this.skin_];
                        if (!json) return [3, 1];
                        json = JSON.parse(json);
                        return [3, 3];
                    case 1:
                        return [4, ResUtil.getIntance().asyncLoadResByURL(this.skin_ + "?r=" + Math.random())];
                    case 2:
                        json = _a.sent();
                        if (typeof json == "string") {
                            json = JSON.parse(json)
                        }
                        _a.label = 3;
                    case 3:
                        Laya.SceneUtils.createByData(this, json);
                        this.adaptationStage();
                        if (!this.isCreate) {
                            this.isCreate = true;
                            this.childrenCreated()
                        }
                        return [2]
                    }
                })
            })
        };
        BaseSceneUISkin.prototype.adaptationStage = function() {
            this.width = Laya.stage.width;
            this.height = Laya.stage.height
        };
        BaseSceneUISkin.prototype.onAddStage = function() {};
        BaseSceneUISkin.prototype.onRemoved = function() {};
        BaseSceneUISkin.prototype.setData = function(data) {
            this.viewData_ = data
        };
        BaseSceneUISkin.prototype.childrenCreated = function() {};
        BaseSceneUISkin.prototype.onDestroy = function() {
            _super.prototype.onDestroy.call(this);
            this.offAll()
        };
        return BaseSceneUISkin
    } (Laya.Scene);
    window.BaseSceneUISkin = BaseSceneUISkin;
    var BaseSceneUISkinPopView = function(_super) {
        __extends(BaseSceneUISkinPopView, _super);
        function BaseSceneUISkinPopView(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "BaseSceneUISkinPopView";
            _this.bg_img_res = "game_panel_db_png";
            return _this
        }
        BaseSceneUISkinPopView.prototype.childrenCreated = function() {
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            if (this.bg_img_res && !this.bg_img) {
                this.bg_img = new Laya.Image(ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(this.bg_img_res).url));
                this.bg_img.sizeGrid = "3,3,2,2";
                this.bg_img.width = this.width;
                this.bg_img.height = this.height;
                this.addChildAt(this.bg_img, 0)
            }
            this.showBackType = this.showEnterType
        };
        BaseSceneUISkinPopView.prototype.onAddStage = function() {
            if (this.isCreate) {
                this.showEnterAnimation()
            }
        };
        BaseSceneUISkinPopView.prototype.showEnterAnimation = function() {
            if (this.grp_center) {
                this.grp_center.centerX = this.grp_center.centerY = 0;
                switch (this.showEnterType) {
                case BasePopAnimationEnterType.SCALE_MODE:
                    this.grp_center.scale(0, 0);
                    Laya.Tween.to(this.grp_center, {
                        scaleX: 1,
                        scaleY: 1
                    },
                    BaseSceneUISkinPopView.defaultSshowEnterBackAniTime, Laya.Ease.backInOut);
                    break;
                case BasePopAnimationEnterType.SCALE_MODE_BACK:
                    this.grp_center.scale(1.5, 1.5);
                    this.grp_center.alpha = 0;
                    Laya.Tween.to(this.grp_center, {
                        scaleX: 1,
                        scaleY: 1,
                        alpha: 1
                    },
                    BaseSceneUISkinPopView.defaultSshowEnterBackAniTime, Laya.Ease.backInOut);
                    break;
                case BasePopAnimationEnterType.SCALE_MODE_BACK_MORE:
                    this.grp_center.scale(.5, .5);
                    Laya.Tween.to(this.grp_center, {
                        scaleX: 1,
                        scaleY: 1
                    },
                    BaseSceneUISkinPopView.defaultSshowEnterBackAniTime, Laya.Ease.backOut);
                    break;
                default:
                    break
                }
            }
        };
        BaseSceneUISkinPopView.prototype.showOutAnimation = function() {
            if (this.grp_center) {
                this.grp_center.centerX = this.grp_center.centerY = 0;
                switch (this.showBackType) {
                case BasePopAnimationEnterType.SCALE_MODE:
                    Laya.Tween.to(this.grp_center, {
                        scaleX: 0,
                        scaleY: 0
                    },
                    BaseSceneUISkinPopView.defaultSshowEnterBackAniTime, Laya.Ease.backInOut);
                    break;
                case BasePopAnimationEnterType.SCALE_MODE_BACK:
                    Laya.Tween.to(this.grp_center, {
                        scaleX: 1.5,
                        scaleY: 1.5,
                        alpha: 0
                    },
                    BaseSceneUISkinPopView.defaultSshowEnterBackAniTime, Laya.Ease.backInOut);
                    break;
                case BasePopAnimationEnterType.SCALE_MODE_BACK_MORE:
                    Laya.Tween.to(this.grp_center, {
                        scaleX: .5,
                        scaleY: .5
                    },
                    BaseSceneUISkinPopView.defaultSshowEnterBackAniTime, Laya.Ease.backIn);
                    break;
                default:
                    break
                }
            }
        };
        BaseSceneUISkinPopView.prototype.removeUs = function() {
            this.showOutAnimation();
            Laya.timer.once(BaseSceneUISkinPopView.defaultSshowEnterBackAniTime, this, _super.prototype.removeSelf)
        };
        BaseSceneUISkinPopView.prototype.onDestroy = function() {
            if (ViewManager.getInstance().views["" + this.className_key]) {
                ViewManager.getInstance().views["" + this.className_key] = null
            }
            this.off(Laya.Event.REMOVED, this, this.onRemoved);
            this.off(Laya.Event.ADDED, this, this.onAddStage);
            _super.prototype.onDestroy.call(this);
            this.offAll()
        };
        BaseSceneUISkinPopView.prototype.removeSelf = function() {
            EventMgr.getInstance().sendEvent("onRemove", this.className_key);
            return _super.prototype.removeSelf.call(this)
        };
        BaseSceneUISkinPopView.defaultSshowEnterBackAniTime = 200;
        return BaseSceneUISkinPopView
    } (BaseSceneUISkin);
    window.BaseSceneUISkinPopView = BaseSceneUISkinPopView;
    var BaseTips = function(_super) {
        __extends(BaseTips, _super);
        function BaseTips() {
            var _this = _super.call(this) || this;
            _this.className_key = "BaseTips";
            return _this
        }
        BaseTips.prototype.init = function(text, fontSize) {
            if (fontSize === void 0) {
                fontSize = 34
            }
            var self = this;
            self.alpha = 1;
            if (self.bg_msg == null) {
                self.bg_msg = new Laya.Image;
                self.bg_msg.anchorX = self.bg_msg.anchorY = .5;
                self.bg_msg.skin = BaseTips.bg_msg_skin;
                self.addChild(self.bg_msg)
            }
            if (self.txt_msg == null) {
                self.txt_msg = new Laya.Text;
                self.txt_msg.color = "#ffffff";
                self.txt_msg.align = "center";
                self.txt_msg.valign = "middle";
                self.addChild(self.txt_msg)
            }
            self.txt_msg.fontSize = fontSize;
            self.txt_msg.text = text;
            self.x = (Laya.stage.width - self.txt_msg.width) / 2;
            self.y = (Laya.stage.height - self.txt_msg.height) / 2;
            self.bg_msg.x = self.txt_msg.width / 2;
            self.bg_msg.y = self.txt_msg.height / 2
        };
        BaseTips.prototype.showAnimation = function() {
            var _this = this;
            EffectUtil.flowOut(this, 2e3, null,
            function() {
                _this.removeSelf()
            },
            500)
        };
        BaseTips.prototype.removeSelf = function() {
            _super.prototype.removeSelf.call(this);
            Laya.Pool.recover(this.className_key, this)
        };
        BaseTips.prototype.onDestroy = function() {
            Laya.Tween.clearAll(this)
        };
        BaseTips.bg_msg_skin = "resource/assets/base/tips_mengban.png";
        return BaseTips
    } (Laya.Sprite);
    window.BaseTips = BaseTips;
    var BaseTipsUISkin = function(_super) {
        __extends(BaseTipsUISkin, _super);
        function BaseTipsUISkin() {
            return _super !== null && _super.apply(this, arguments) || this
        }
        BaseTipsUISkin.prototype.showAnimation = function() {
            var _this = this;
            EffectUtil.flowOut(this, 2e3, null,
            function() {
                _this.removeSelf()
            },
            500)
        };
        BaseTipsUISkin.prototype.removeSelf = function() {
            _super.prototype.removeSelf.call(this);
            Laya.Pool.recover(this.className_key, this)
        };
        return BaseTipsUISkin
    } (BaseSceneUISkin);
    window.BaseTipsUISkin = BaseTipsUISkin;
    var BitmapLabelUtils = function() {
        function BitmapLabelUtils() {}
        BitmapLabelUtils.setLabel = function(label, text, prefix, gap, suffix, textAlgin) {
            if (suffix === void 0) {
                suffix = ".png"
            }
            if (textAlgin === void 0) {
                textAlgin = "left"
            }
            label.removeChildren();
            var box = new Laya.Box;
            if (textAlgin == "center") {
                box = new Laya.Box;
                box.width = 0;
                label.addChild(box)
            }
            var _loop_1 = function(i, len) {
                var char = text.charAt(i);
                var imgChar = new Laya.Image;
                Laya.loader.create(prefix + char + suffix, Laya.Handler.create(null,
                function(tex) {
                    if (!tex) {
                        return
                    }
                    imgChar.texture = tex;
                    if (textAlgin == "left") {
                        imgChar.x = (imgChar.texture.sourceWidth + gap) * i;
                        label.addChild(imgChar)
                    } else if (textAlgin == "right") {
                        imgChar.x = label.width - (imgChar.texture.sourceWidth + gap) * len + (imgChar.texture.sourceWidth + gap) * i;
                        label.addChild(imgChar)
                    } else {
                        imgChar.x = (imgChar.texture.sourceWidth + gap) * i;
                        if (box) {
                            box.addChild(imgChar);
                            box.width += imgChar.texture.sourceWidth + gap
                        }
                        if (i == len - 1) {
                            box.x = (label.width - box.width) / 2 + gap / 2
                        }
                    }
                }))
            };
            for (var i = 0,
            len = text.length; i < len; i++) {
                _loop_1(i, len)
            }
        };
        return BitmapLabelUtils
    } ();
    window.BitmapLabelUtils = BitmapLabelUtils;
    var CustomFlyComponent = function(_super) {
        __extends(CustomFlyComponent, _super);
        function CustomFlyComponent() {
            var _this = _super.call(this) || this;
            _this.speed = 10;
            return _this
        }
        CustomFlyComponent.prototype.onAwake = function() {
            this.content = this.owner
        };
        CustomFlyComponent.prototype.onUpdate = function() {
            if (this.content && this.target) {
                var spx = this.target.x - this.content.x;
                var spy = this.target.y - this.content.y;
                var len = Math.sqrt(spx * spx + spy * spy);
                if (len <= this.speed) {
                    this.content.y = this.target.y;
                    this.content.x = this.target.x;
                    this.enabled = false;
                    if (this.toTargetCall) {
                        this.toTargetCall(this.callObj)
                    }
                    return
                }
                this.content.y += spy / len * this.speed;
                this.content.x += spx / len * this.speed
            }
        };
        CustomFlyComponent.prototype.toTargetCall = function(obj) {};
        return CustomFlyComponent
    } (Laya.Script);
    window.CustomFlyComponent = CustomFlyComponent;
    var CustomScaleComponent = function(_super) {
        __extends(CustomScaleComponent, _super);
        function CustomScaleComponent() {
            var _this = _super.call(this) || this;
            _this.scale_ = .95;
            _this.defaultScale_ = 1;
            _this.isInit = false;
            return _this
        }
        CustomScaleComponent.prototype.onAwake = function() {
            this.init()
        };
        CustomScaleComponent.prototype._onAdded = function() {
            this.init();
            this.addEvent()
        };
        CustomScaleComponent.prototype.onEnable = function() {
            this.addEvent()
        };
        CustomScaleComponent.prototype._onDisable = function() {};
        CustomScaleComponent.prototype.init = function() {
            if (this.isInit) {
                return
            }
            this.isInit = true;
            this.content = this.owner;
            this.content.scale(this.defaultScale_, this.defaultScale_);
            this.content.on(Laya.Event.REMOVED, this, this.onRemoved)
        };
        CustomScaleComponent.prototype.onRemoved = function() {
            this.removeEvent()
        };
        CustomScaleComponent.prototype.addEvent = function() {
            this.content.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            this.content.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown)
        };
        CustomScaleComponent.prototype.removeEvent = function() {
            this.content.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown)
        };
        CustomScaleComponent.prototype.mouseDown = function() {
            this.content.on(Laya.Event.MOUSE_OUT, this, this.mouseOut);
            this.content.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.content.scale(this.defaultScale_, this.defaultScale_);
            Laya.Tween.to(this.content, {
                scaleX: this.scale_,
                scaleY: this.scale_
            },
            80, Laya.Ease.backIn)
        };
        CustomScaleComponent.prototype.mouseOut = function() {
            this.content.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.content.off(Laya.Event.MOUSE_OUT, this, this.mouseOut);
            this.content.scale(this.scale_, this.scale_);
            Laya.Tween.to(this.content, {
                scaleX: this.defaultScale_,
                scaleY: this.defaultScale_
            },
            100, Laya.Ease.backOut)
        };
        CustomScaleComponent.prototype.mouseUp = function() {
            this.content.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.content.off(Laya.Event.MOUSE_OUT, this, this.mouseOut);
            this.content.scale(this.scale_, this.scale_);
            Laya.Tween.to(this.content, {
                scaleX: this.defaultScale_,
                scaleY: this.defaultScale_
            },
            100, Laya.Ease.backOut)
        };
        CustomScaleComponent.prototype.onDestroy = function() {
            _super.prototype.onDestroy.call(this);
            this.removeEvent()
        };
        return CustomScaleComponent
    } (Laya.Script);
    window.CustomScaleComponent = CustomScaleComponent;
    var HundredPagesWindowView = function(_super) {
        __extends(HundredPagesWindowView, _super);
        function HundredPagesWindowView() {
            var _this = _super.call(this) || this;
            _this.animationTime = 500;
            _this.rectH = 300;
            _this.width = Laya.stage.width;
            _this.height = Laya.stage.height;
            _this.initView();
            return _this
        }
        HundredPagesWindowView.prototype.initView = function() {
            var w = Laya.stage.width + this.rectH;
            w *= 1.5;
            var h = this.rectH;
            this.len = Laya.stage.height / h + 2;
            this.len *= 1.5;
            this.len = Math.floor(this.len) + 1;
            var x = -this.rectH / 2;
            var starty = -Laya.stage.width * 1.5;
            for (var i = 0; i < this.len; i++) {
                var rect = new Laya.Sprite;
                rect.graphics.drawRect(0, 0, w, h, "#000000");
                rect.width = w,
                rect.height = h;
                rect.pivotY = h / 2;
                rect.rotation = 45;
                rect.scaleY = 0;
                rect.x = x;
                rect.y = h * i + starty;
                this.addChild(rect)
            }
        };
        HundredPagesWindowView.prototype.open = function(caller, method) {
            for (var i = 0; i < this.len; i++) {
                var item = this.getChildAt(i);
                if (i == this.len - 1) {
                    Laya.Tween.to(item, {
                        scaleY: 1
                    },
                    this.animationTime, Laya.Ease.sineIn, Laya.Handler.create(caller, method))
                } else {
                    Laya.Tween.to(item, {
                        scaleY: 1
                    },
                    this.animationTime, Laya.Ease.sineIn)
                }
            }
        };
        HundredPagesWindowView.prototype.close = function(caller, method) {
            for (var i = 0; i < this.len; i++) {
                var item = this.getChildAt(i);
                if (i == this.len - 1) {
                    Laya.Tween.to(item, {
                        scaleY: 0
                    },
                    this.animationTime, Laya.Ease.sineOut, Laya.Handler.create(caller, method))
                } else {
                    Laya.Tween.to(item, {
                        scaleY: 0
                    },
                    this.animationTime, Laya.Ease.sineOut)
                }
            }
        };
        return HundredPagesWindowView
    } (Laya.Sprite);
    window.HundredPagesWindowView = HundredPagesWindowView;
    var ILoadingView = function(_super) {
        __extends(ILoadingView, _super);
        function ILoadingView() {
            return _super !== null && _super.apply(this, arguments) || this
        }
        return ILoadingView
    } (Laya.Node);
    window.ILoadingView = ILoadingView;
    var BufferLoadingManger = function() {
        function BufferLoadingManger() {
            this.buffers = {}
        }
        BufferLoadingManger.getInstance = function() {
            if (BufferLoadingManger.ins == null) {
                BufferLoadingManger.ins = new BufferLoadingManger
            }
            return BufferLoadingManger.ins
        };
        BufferLoadingManger.prototype.registerOneBuffer = function(key, bufferLoading) {
            this.buffers[key] = bufferLoading
        };
        BufferLoadingManger.prototype.showBuffer = function(key, info) {
            if (key === void 0) {
                key = "BufferLoading"
            }
            if (info === void 0) {
                info = ""
            }
            var currbuffer = this.buffers[key];
            if (currbuffer && !currbuffer.parent) {
                this.bufferGroup.addChild(currbuffer);
                if (currbuffer.onShow) {
                    currbuffer.onShow()
                }
            }
            if (currbuffer) {
                currbuffer.setLabelInfo(info)
            }
            this.bufferGroup.mouseEnabled = true
        };
        BufferLoadingManger.prototype.hiddBuffer = function(key) {
            if (key === void 0) {
                key = "BufferLoading"
            }
            var currbuffer = this.buffers[key];
            if (currbuffer.parent) {
                this.bufferGroup.removeChild(currbuffer);
                if (currbuffer.onHidd) {
                    currbuffer.onHidd()
                }
            }
            this.bufferGroup.mouseEnabled = false
        };
        BufferLoadingManger.prototype.destroyBuffer = function(key) {
            var currbuffer = this.buffers[key];
            if (currbuffer.parent) {
                this.bufferGroup.removeChild(currbuffer);
                if (currbuffer.onDestroy) {
                    currbuffer.onDestroy()
                }
                this.buffers[key] = null
            }
        };
        return BufferLoadingManger
    } ();
    window["BufferLoadingManger"] = BufferLoadingManger;
    var SceneManager = function() {
        function SceneManager() {}
        SceneManager.getInstance = function() {
            if (this.ins == null) {
                this.ins = new SceneManager
            }
            return this.ins
        };
        SceneManager.prototype.openGameScene = function(className, viewData) {
            var _this = this;
            var classKey = ClassUtils.getClassKey(className);
            var clazz = Laya.Pool.getItemByClass(classKey, className);
            clazz.name = className.name;
            if (clazz.setData) {
                clazz.setData(viewData)
            }
            this.sceneLayer.addChild(clazz);
            this.lastScene = this.currentScene;
            this.currentScene = clazz;
            Laya.timer.once(100, this,
            function() {
                if (_this.lastScene && !_this.lastScene.destroyed) {
                    _this.recoverBaseScene(_this.lastScene)
                }
            });
            return clazz
        };
        SceneManager.prototype.getGameSceneByName = function(name) {
            var clazz = this.sceneLayer.getChildByName(name);
            return clazz
        };
        SceneManager.prototype.openSceneInstance = function(scene) {
            var _this = this;
            this.lastScene = this.currentScene;
            this.currentScene = scene;
            this.sceneLayer.addChild(scene);
            Laya.timer.once(100, this,
            function() {
                if (_this.lastScene && !_this.lastScene.destroyed) {
                    _this.recoverBaseScene(_this.lastScene)
                }
            })
        };
        SceneManager.prototype.recoverBaseScene = function(scene) {
            scene.removeSelf();
            if (scene.className_key) {
                Laya.Pool.recover(scene.className_key, scene)
            }
        };
        return SceneManager
    } ();
    window["SceneManager"] = SceneManager;
    var TipsManager = function() {
        function TipsManager() {
            this.showDefualtTipsFontSize = 34
        }
        TipsManager.getInstance = function() {
            if (TipsManager.ins == null) {
                TipsManager.ins = new TipsManager
            }
            return TipsManager.ins
        };
        TipsManager.prototype.showDefaultTips = function(text, isShowAnimation) {
            if (isShowAnimation === void 0) {
                isShowAnimation = true
            }
            var tip = Laya.Pool.getItemByClass("BaseTips", BaseTips);
            tip.init(text, this.showDefualtTipsFontSize);
            if (isShowAnimation) {
                tip.showAnimation()
            }
            this.tipLayer.addChild(tip)
        };
        TipsManager.prototype.showTips = function(className, text) {
            var classKey = className.toString();
            classKey = classKey.split('className_key="')[1] == null ? classKey.split('className_key = "')[1] : classKey.split('className_key="')[1];
            classKey = classKey.split('"')[0];
            var result = Laya.Pool.getItemByClass(classKey, className);
            result.init(text);
            this.tipLayer.addChild(result)
        };
        TipsManager.prototype.showTipInstance = function(object) {
            this.tipLayer.addChild(object)
        };
        TipsManager.prototype.removeTips = function(object) {
            object.removeSelf()
        };
        return TipsManager
    } ();
    window["TipsManager"] = TipsManager;
    var ViewManager = function() {
        function ViewManager() {
            this._views = {}
        }
        ViewManager.getInstance = function() {
            if (ViewManager.ins == null) {
                ViewManager.ins = new ViewManager
            }
            return ViewManager.ins
        };
        Object.defineProperty(ViewManager.prototype, "views", {
            get: function() {
                return this._views
            },
            enumerable: true,
            configurable: true
        });
        ViewManager.prototype.showView = function(className, data, only) {
            if (only === void 0) {
                only = true
            }
            var panelKey = ClassUtils.getClassKey(className);
            var result = this._views["" + panelKey];
            if (only && result) {
                this.popLayer.addChild(result);
                result.setData(data);
                return result
            }
            var clazz = Laya.ClassUtils.getRegClass(panelKey);
            if (clazz == null) {
                Laya.ClassUtils.regClass(panelKey, className);
                clazz = Laya.ClassUtils.getRegClass(panelKey)
            }
            result = new clazz(data);
            result.name = panelKey;
            if (only) {
                this._views["" + panelKey] = result
            }
            this.popLayer.addChild(result);
            return result
        };
        ViewManager.prototype.removeViewInstance = function(instance) {
            var panelKey = instance.name;
            var result = this._views["" + panelKey];
            if (result) {
                result.removeSelf()
            }
        };
        ViewManager.prototype.popViewIsPop = function(name) {
            if (this.popLayer.getChildByName(name) != null) {
                return true
            }
            return false
        };
        ViewManager.prototype.showViewInstance = function(pop) {
            this._views["" + pop.className_key] = pop;
            this.popLayer.addChild(pop)
        };
        ViewManager.prototype.destoryAllPopViews = function() {
            for (var key in this._views) {
                var panel = this._views["" + key];
                this.destroyPopView(panel)
            }
        };
        ViewManager.prototype.destroyPopView = function(panel) {
            panel.destroy()
        };
        ViewManager.prototype.closeAllPopViews = function() {
            var popLayer = this.popLayer;
            var len = popLayer.numChildren;
            for (var i = 0; i < len; i++) {
                var panel = popLayer.getChildAt(i);
                panel && panel.removeUs()
            }
        };
        ViewManager.prototype.isExists = function(viewKey) {
            return !! this._views[viewKey]
        };
        return ViewManager
    } ();
    window["ViewManager"] = ViewManager;
    var HttpMgr = function() {
        function HttpMgr() {
            this.printLog = true;
            this.defaultTimeOut = 5e3
        }
        HttpMgr.getInstance = function() {
            if (!HttpMgr.instance_) {
                HttpMgr.instance_ = new HttpMgr
            }
            return HttpMgr.instance_
        };
        HttpMgr.prototype.sendHttp = function(url, data, secces, fail, type, responseType) {
            var _this = this;
            if (data === void 0) {
                data = null
            }
            if (secces === void 0) {
                secces = null
            }
            if (fail === void 0) {
                fail = null
            }
            if (type === void 0) {
                type = "post"
            }
            if (responseType === void 0) {
                responseType = "text"
            }
            if (type == "get" && data) {
                url += Utils.querStr(data)
            }
            console.log("url ->", url);
            var jsonStr = data ? JSON.stringify(data) : "null";
            if (this.printLog) {
                var date = new Date;
                console.log("HTTP Send :[" + date.toTimeString() + " time:" + date.getTime() + "]  \n    send data: " + jsonStr)
            }
            var httpRequest = Laya.Pool.getItemByClass("HttpRequest", Laya.HttpRequest);
            httpRequest.http.timeout = this.defaultTimeOut;
            httpRequest.http.ontimeout = function() {
                console.log("ontimeout");
                if (fail) {
                    fail(null);
                    TipsManager.getInstance().showDefaultTips("网络请求超时！")
                }
                httpRequest.http.ontimeout = null;
                Laya.Pool.recover("HttpRequest", httpRequest)
            };
            httpRequest.once(Laya.Event.COMPLETE, this,
            function(rev) {
                if (secces) {
                    secces(JSON.parse(rev))
                }
                Laya.Pool.recover("HttpRequest", httpRequest)
            });
            httpRequest.once(Laya.Event.ERROR, this,
            function(e) {
                if (_this.printLog) {
                    var date = new Date;
                    console.log("HTTP Error :[" + date.toTimeString() + " time:" + date.getTime() + "]")
                }
                if (fail) {
                    fail(e);
                    TipsManager.getInstance().showDefaultTips("你的网络已断开，请检查设置。")
                }
                Laya.Pool.recover("HttpRequest", httpRequest)
            });
            if (type == "get") {
                httpRequest.send(url);
                return
            }
            httpRequest.send(url, data ? jsonStr: null, "post", "text")
        };
        return HttpMgr
    } ();
    window.HttpMgr = HttpMgr;
    var WebSocketMgr = function() {
        function WebSocketMgr() {
            this.connetWaitTime = 2e3;
            this.heartbeatWaitTime = 1e4;
            this.connetTime = 5;
            this.currentConnectTime = 0;
            this.isLive = false
        }
        WebSocketMgr.getInstance = function() {
            if (!WebSocketMgr.instance_) {
                WebSocketMgr.instance_ = new WebSocketMgr
            }
            return WebSocketMgr.instance_
        };
        WebSocketMgr.prototype.init = function() {
            this.socket_ = new Laya.Socket;
            this.addEvent()
        };
        WebSocketMgr.prototype.addEvent = function() {
            this.socket_.on(Laya.Event.OPEN, this, this.socketOpen);
            this.socket_.on(Laya.Event.MESSAGE, this, this.socketMessage);
            this.socket_.on(Laya.Event.CLOSE, this, this.socketClose);
            this.socket_.on(Laya.Event.ERROR, this, this.socketError)
        };
        WebSocketMgr.prototype.removeEvent = function() {
            this.socket_.off(Laya.Event.OPEN, this, this.socketOpen);
            this.socket_.off(Laya.Event.MESSAGE, this, this.socketMessage);
            this.socket_.off(Laya.Event.CLOSE, this, this.socketClose);
            this.socket_.off(Laya.Event.ERROR, this, this.socketError)
        };
        WebSocketMgr.prototype.connect = function() {
            console.log("链接网络-websocket--");
            this.socket_.connectByUrl(this.url_)
        };
        WebSocketMgr.prototype.socketOpen = function() {
            console.log("通讯打开-websocket--");
            this.isLive = true;
            if (this.onOpen) {
                this.onOpen()
            }
            this.stopRefuseConnect();
            this.starHeartbeat()
        };
        WebSocketMgr.prototype.starHeartbeat = function() {
            if (this.isLive) {
                if (this.send(this.heartbeatData)) {
                    this.isLive = false;
                    Laya.timer.once(this.heartbeatWaitTime, this, this.starHeartbeat)
                }
            } else {
                this.socket_.close()
            }
        };
        WebSocketMgr.prototype.close = function() {
            if (!this.socket_) {
                console.log("sokect is closed");
                return
            }
            this.removeEvent();
            this.stopRefuseConnect();
            this.stopHeartbeat();
            this.socket_.close();
            this.socket_ = null
        };
        WebSocketMgr.prototype.stopHeartbeat = function() {
            Laya.timer.clearAll(this)
        };
        WebSocketMgr.prototype.startRefuseConnect = function() {
            if (this.currentConnectTime >= this.connetTime) {
                console.log("重连次数达到...");
                return
            }
            this.currentConnectTime++;
            Laya.timer.once(this.connetWaitTime, this, this.connect)
        };
        WebSocketMgr.prototype.stopRefuseConnect = function() {
            this.currentConnectTime = 0;
            Laya.timer.clearAll(this)
        };
        WebSocketMgr.prototype.socketClose = function(e) {
            console.error(e);
            if (this.onClose) {
                this.onClose()
            }
            this.stopHeartbeat();
            this.startRefuseConnect()
        };
        WebSocketMgr.prototype.socketError = function(e) {
            console.error(e)
        };
        WebSocketMgr.prototype.utf8ByteToUnicodeStr = function(utf8Bytes) {
            var unicodeStr = "";
            for (var pos = 0; pos < utf8Bytes.length;) {
                var flag = utf8Bytes[pos];
                var unicode = 0;
                if (flag >>> 7 === 0) {
                    unicodeStr += String.fromCharCode(utf8Bytes[pos]);
                    pos += 1
                } else if ((flag & 252) === 252) {
                    unicode = (utf8Bytes[pos] & 3) << 30;
                    unicode |= (utf8Bytes[pos + 1] & 63) << 24;
                    unicode |= (utf8Bytes[pos + 2] & 63) << 18;
                    unicode |= (utf8Bytes[pos + 3] & 63) << 12;
                    unicode |= (utf8Bytes[pos + 4] & 63) << 6;
                    unicode |= utf8Bytes[pos + 5] & 63;
                    pos += 6
                } else if ((flag & 248) === 248) {
                    unicode = (utf8Bytes[pos] & 7) << 24;
                    unicode |= (utf8Bytes[pos + 1] & 63) << 18;
                    unicode |= (utf8Bytes[pos + 2] & 63) << 12;
                    unicode |= (utf8Bytes[pos + 3] & 63) << 6;
                    unicode |= utf8Bytes[pos + 4] & 63;
                    pos += 5
                } else if ((flag & 240) === 240) {
                    unicode = (utf8Bytes[pos] & 15) << 18;
                    unicode |= (utf8Bytes[pos + 1] & 63) << 12;
                    unicode |= (utf8Bytes[pos + 2] & 63) << 6;
                    unicode |= utf8Bytes[pos + 3] & 63;
                    pos += 4
                } else if ((flag & 224) === 224) {
                    unicode = (utf8Bytes[pos] & 31) << 12;
                    unicode |= (utf8Bytes[pos + 1] & 63) << 6;
                    unicode |= utf8Bytes[pos + 2] & 63;
                    unicodeStr += String.fromCharCode(unicode);
                    pos += 3
                } else if ((flag & 192) === 192) {
                    unicode = (utf8Bytes[pos] & 63) << 6;
                    unicode |= utf8Bytes[pos + 1] & 63;
                    unicodeStr += String.fromCharCode(unicode);
                    pos += 2
                } else {
                    unicodeStr += String.fromCharCode(utf8Bytes[pos]);
                    pos += 1
                }
            }
            return unicodeStr
        };
        WebSocketMgr.prototype.socketMessage = function(data) {
            var datastr = this.utf8ByteToUnicodeStr(new Uint8Array(data.slice(0, data.byteLength)));
            var dataObj = JSON.parse(datastr);
            if (DeviceUtil.isNative()) {
                console.log("socket rev : " + datastr)
            } else {
                console.log("socket rev : ", dataObj)
            }
            if (dataObj.msg_type == "63") {
                this.isLive = true;
                return
            }
            if (this.onMessage) {
                this.onMessage(dataObj)
            }
        };
        WebSocketMgr.prototype.send = function(data) {
            if (!this.socket_ || !this.socket_.connected) {
                console.warn("socket closed");
                return false
            }
            this.socket_.send(data);
            this.socket_.flush();
            return true
        };
        return WebSocketMgr
    } ();
    window.WebSocketMgr = WebSocketMgr;
    var AdaptationUtil = function() {
        function AdaptationUtil() {}
        AdaptationUtil.adaptationObj = function(obj, parent, scaleFormat) {
            if (scaleFormat === void 0) {
                scaleFormat = 1
            }
            var scale = 1;
            if (parent.width / parent.height > obj.width / obj.height) {
                scale = parent.height / obj.height
            } else {
                scale = parent.width / obj.width
            }
            scale *= scaleFormat;
            obj.scale(scale, scale)
        };
        AdaptationUtil.adaptationMaxObj = function(obj, parent, scaleFormat) {
            if (scaleFormat === void 0) {
                scaleFormat = 1
            }
            var scale = 1;
            if (parent.width / parent.height > obj.width / obj.height) {
                scale = parent.width / obj.width
            } else {
                scale = parent.height / obj.height
            }
            scale *= scaleFormat;
            obj.scale(scale, scale)
        };
        return AdaptationUtil
    } ();
    window.AdaptationUtil = AdaptationUtil;
    var AnimatorUtls = function() {
        function AnimatorUtls() {}
        AnimatorUtls.playSTREF = function(dis, animator, playStates) {
            var controllerLayer = animator.getControllerLayer();
            var animatorState = controllerLayer._currentPlayState;
            var playStateInfo = controllerLayer._playStateInfo;
            var max = (playStates.clipEnd - playStates.clipStart) * playStates.clip.duration();
            if (dis + playStateInfo._elapsedTime > max) {
                return {
                    curent: max,
                    max: max
                }
            }
            if (dis + playStateInfo._elapsedTime < 0) {
                dis = -playStateInfo._elapsedTime
            }
            animator.speed = 0;
            var ani = animator;
            ani._updatePlayer(playStates, playStateInfo, dis, false);
            var addtive = false;
            ani._updateClipDatas(animatorState, addtive, playStateInfo, 1);
            ani._setClipDatasToNode(animatorState, addtive, controllerLayer.defaultWeight, false);
            ani._updateEventScript(animatorState, playStateInfo);
            return {
                curent: playStateInfo._elapsedTime,
                max: max
            }
        };
        AnimatorUtls.refulshSKE = function(ani_Ske) {
            ani_Ske._createGraphics()
        };
        return AnimatorUtls
    } ();
    window.AnimatorUtls = AnimatorUtls;
    var ANode = function() {
        function ANode(point, endPoint, g) {
            if (g === void 0) {
                g = 0
            }
            this.father = null;
            this.g = g || 0;
            this.point = point;
            this.father = null;
            this.h = (Math.abs(endPoint.c - point.c) + Math.abs(endPoint.r - point.r)) * 10
        }
        return ANode
    } ();
    window.ANode = ANode;
    var Array2D = function() {
        function Array2D(w, h, num) {
            if (num === void 0) {
                num = 0
            }
            this.default_num = 0;
            this.data = [];
            this.w = w;
            this.h = h;
            this.default_num = num || 0;
            for (var x = 0; x < w; x++) {
                var temp = [];
                for (var y = 0; y < h; y++) {
                    temp.push(this.default_num)
                }
                this.data.push(temp)
            }
        }
        Array2D.prototype.showArray2D = function() {
            var s = "";
            for (var y = 0; y < this.h; y++) {
                for (var x = 0; x < this.w; x++) {
                    s += this.data[x][y] + " "
                }
                s += "\n"
            }
            console.log(s)
        };
        return Array2D
    } ();
    window.Array2D = Array2D;
    var AStar = function() {
        function AStar(map2d, startPoint, endPoint, passTag) {
            if (passTag === void 0) {
                passTag = 0
            }
            var tag = passTag || 0;
            this.map2d = map2d;
            this.startPoint = startPoint;
            this.endPoint = endPoint;
            this.passTag = tag;
            this.openList = [];
            this.closeList = []
        }
        AStar.prototype.getMinNode = function() {
            var currentNode = this.openList[0];
            for (var _i = 0,
            _a = this.openList; _i < _a.length; _i++) {
                var node = _a[_i];
                if (node.g + node.h < currentNode.g + currentNode.h) currentNode = node
            }
            return currentNode
        };
        AStar.prototype.pointInCloseList = function(point) {
            for (var _i = 0,
            _a = this.closeList; _i < _a.length; _i++) {
                var node = _a[_i];
                if (node.point.eq(point)) return true
            }
            return false
        };
        AStar.prototype.pointInOpenList = function(point) {
            for (var _i = 0,
            _a = this.openList; _i < _a.length; _i++) {
                var node = _a[_i];
                if (node.point.eq(point)) return node
            }
            return null
        };
        AStar.prototype.endPointInCloseList = function() {
            for (var _i = 0,
            _a = this.closeList; _i < _a.length; _i++) {
                var node = _a[_i];
                if (node.point.eq(this.endPoint)) return node
            }
            return null
        };
        AStar.prototype.searchNear = function(minF, offsetX, offsetY, isPassTag) {
            if (isPassTag === void 0) {
                isPassTag = false
            }
            if (minF.point.c + offsetX < 0 || minF.point.c + offsetX > this.map2d.w - 1 || minF.point.r + offsetY < 0 || minF.point.r + offsetY > this.map2d.h - 1) return null;
            if (this.map2d.data[minF.point.c + offsetX][minF.point.r + offsetY] !== this.passTag && !isPassTag) return null;
            var currentPoint = new Point(minF.point.c + offsetX, minF.point.r + offsetY);
            if (this.pointInCloseList(currentPoint)) return null;
            var step = 0;
            if (offsetX === 0 || offsetY === 0) step = 10;
            else step = 14;
            var currentNode = this.pointInOpenList(currentPoint);
            if (currentNode == null) {
                currentNode = new ANode(currentPoint, this.endPoint, minF.g + step);
                currentNode.father = minF;
                this.openList.push(currentNode);
                return null
            }
            if (minF.g + step < currentNode.g) {
                currentNode.g = minF.g + step;
                currentNode.father = minF
            }
        };
        AStar.prototype.start = function(isPassTag) {
            if (isPassTag === void 0) {
                isPassTag = false
            }
            var startNode = new ANode(this.startPoint, this.endPoint);
            this.openList.push(startNode);
            while (true) {
                var minF = this.getMinNode();
                this.closeList.push(minF);
                var index = this.openList.indexOf(minF);
                this.openList.splice(index, 1);
                this.searchNear(minF, 0, -1, isPassTag);
                this.searchNear(minF, 0, 1, isPassTag);
                this.searchNear(minF, -1, 0, isPassTag);
                this.searchNear(minF, 1, 0, isPassTag);
                var point = this.endPointInCloseList();
                if (point) {
                    var cPoint = point;
                    var pathList = [];
                    while (true) {
                        if (cPoint.father) {
                            pathList.push(cPoint.point);
                            cPoint = cPoint.father
                        } else {
                            return pathList.reverse()
                        }
                    }
                }
                if (this.openList.length === 0) {
                    console.log("this.openList");
                    return null
                }
            }
        };
        return AStar
    } ();
    window.AStar = AStar;
    var AStarUtils = function() {
        function AStarUtils() {}
        AStarUtils.getInstance = function() {
            if (!AStarUtils.instance_) {
                AStarUtils.instance_ = new AStarUtils
            }
            return AStarUtils.instance_
        };
        AStarUtils.prototype.setMap2d = function(r, c, ObsArr) {
            this.map2d = new Array2D(c, r);
            for (var i = 0,
            len = ObsArr.length; i < len; i++) {
                this.map2d.data[ObsArr[i][0]][ObsArr[i][1]] = 1
            }
        };
        AStarUtils.prototype.showArray2D = function() {
            this.map2d.showArray2D()
        };
        AStarUtils.prototype.setMapObsArr = function(ObsArr) {
            if (this.map2d == null) {
                console.log("请先设置地图");
                return
            }
            for (var i = 0,
            len = ObsArr.length; i < len; i++) {
                this.map2d.data[ObsArr[i][0]][ObsArr[i][1]] = 1
            }
        };
        AStarUtils.prototype.removeMapObsArr = function(ObsArr) {
            for (var i = 0,
            len = ObsArr.length; i < len; i++) {
                this.map2d.data[ObsArr[i][0]][ObsArr[i][1]] = 0
            }
        };
        AStarUtils.prototype.clearMap2d = function() {
            this.map2d = new Array2D(this.map2d.w, this.map2d.h)
        };
        AStarUtils.prototype.getPath = function(startPoint, endPoint, isPassTag) {
            if (isPassTag === void 0) {
                isPassTag = false
            }
            if (startPoint.c == endPoint.c && startPoint.r == endPoint.r) {
                return [endPoint]
            }
            var aStar = new AStar(this.map2d, startPoint, endPoint);
            var pathList = aStar.start(isPassTag);
            var pathStr = "";
            if (pathList == null) {
                console.log("pathList>>>>", startPoint, endPoint);
                return null
            }
            for (var _i = 0,
            pathList_1 = pathList; _i < pathList_1.length; _i++) {
                var point = pathList_1[_i];
                pathStr += "(" + point.c + "," + point.r + ") => "
            }
            return pathList
        };
        AStarUtils.test = function() {
            var map2d = new Array2D(11, 15);
            map2d.data[4][2] = 1;
            map2d.data[4][3] = 1;
            map2d.data[4][4] = 1;
            map2d.data[4][5] = 1;
            map2d.data[4][6] = 1;
            map2d.data[4][7] = 1;
            map2d.data[6][2] = 1;
            map2d.data[6][3] = 1;
            map2d.data[6][4] = 1;
            map2d.data[6][5] = 1;
            map2d.data[6][6] = 1;
            map2d.data[6][7] = 1;
            map2d.data[7][7] = 1;
            map2d.data[8][7] = 1;
            map2d.showArray2D();
            var aStar = new AStar(map2d, new Point(5, 6), new Point(6, 4));
            var pathList = aStar.start();
            var pathStr = "";
            for (var _i = 0,
            pathList_2 = pathList; _i < pathList_2.length; _i++) {
                var point = pathList_2[_i];
                map2d.data[point.c][point.r] = 8;
                pathStr += "(" + point.c + "," + point.r + ") => "
            }
            console.log(pathStr);
            map2d.showArray2D()
        };
        return AStarUtils
    } ();
    window.AStarUtils = AStarUtils;
    var Point = function() {
        function Point(c, r) {
            this.c = c;
            this.r = r
        }
        Point.prototype.eq = function(other) {
            return this.c === other.c && this.r === other.r
        };
        return Point
    } ();
    window.Point = Point;
    var ClassUtils = function() {
        function ClassUtils() {}
        ClassUtils.getClassKey = function(className, className_key) {
            if (className_key === void 0) {
                className_key = "className_key"
            }
            var classKey = className.toString();
            classKey = classKey.split(className_key + '="')[1] == null ? classKey.split(className_key + ' = "')[1] : classKey.split(className_key + '="')[1];
            classKey = classKey.split('"')[0];
            return classKey
        };
        return ClassUtils
    } ();
    window.ClassUtils = ClassUtils;
    var DeviceUtil = function() {
        function DeviceUtil() {}
        DeviceUtil.adaptationBgImg = function(bg) {
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_SHOWALL) {
                return
            }
            bg.scaleX = bg.scaleY = DeviceUtil.getScalePix();
            bg.anchorX = bg.anchorY = .5;
            bg.x = Laya.stage.width / 2;
            bg.y = Laya.stage.height / 2
        };
        DeviceUtil.getMaxScale = function(defaultSize, size) {
            var scaleW = size.w / defaultSize.w;
            var scaleH = size.h / defaultSize.h;
            return scaleH > scaleW ? scaleH: scaleW
        };
        DeviceUtil.getScalePix = function(defaultSize) {
            if (defaultSize === void 0) {
                defaultSize = DeviceUtil.defaultSize
            }
            if (DeviceUtil.scale) {
                return DeviceUtil.scale
            }
            DeviceUtil.scale = 1;
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_SHOWALL) {
                return DeviceUtil.scale
            }
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_FIXED_WIDTH) {
                DeviceUtil.scale = Laya.Browser.height / Laya.Browser.width / (defaultSize.h / defaultSize.w)
            }
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_FIXED_HEIGHT) {
                DeviceUtil.scale = defaultSize.h / defaultSize.w / (Laya.Browser.height / Laya.Browser.width)
            }
            console.log(DeviceUtil.scale);
            return DeviceUtil.scale
        };
        DeviceUtil.getAutoPix = function(defaultSize) {
            if (defaultSize === void 0) {
                defaultSize = DeviceUtil.defaultSize
            }
            if (DeviceUtil.pix) {
                return DeviceUtil.pix
            }
            DeviceUtil.pix = {
                x: 0,
                y: 0
            };
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_SHOWALL) {
                return DeviceUtil.pix
            }
            var scale = Laya.Browser.height / Laya.Browser.width / (defaultSize.h / defaultSize.w);
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_FIXED_WIDTH) {
                DeviceUtil.pix.y = defaultSize.h * (scale - 1)
            }
            if (Laya.stage.scaleMode == Laya.Stage.SCALE_FIXED_HEIGHT) {
                DeviceUtil.pix.x = defaultSize.w * (scale - 1)
            }
            console.log(DeviceUtil.pix);
            return DeviceUtil.pix
        };
        DeviceUtil.getIsIphoneX = function() {
            var rato = Laya.Browser.clientHeight / Laya.Browser.clientWidth;
            if (DeviceUtil.defaultSize.w > DeviceUtil.defaultSize.h) {
                rato = 1 / rato
            }
            if (rato >= 2) {
                return true
            } else {
                return false
            }
        };
        DeviceUtil.shockScreen = function(rota, frame) {
            if (rota === void 0) {
                rota = .03
            }
            if (frame === void 0) {
                frame = 5
            }
            Laya.stage.rotation = rota;
            Laya.timer.frameOnce(frame, {},
            function() {
                Laya.stage.rotation = -rota;
                Laya.timer.frameOnce(frame, {},
                function() {
                    Laya.stage.rotation = 0
                })
            })
        };
        DeviceUtil.autoStageScaleMode = function() {
            var rato = Laya.Browser.clientHeight / Laya.Browser.clientWidth;
            var defalutRato = DeviceUtil.defaultSize.h / DeviceUtil.defaultSize.w;
            if (defalutRato >= 1) {
                Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
                if (rato >= defalutRato && rato <= 2.3) {
                    Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH
                } else {
                    Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL
                }
                if (DeviceUtil.isOnPC()) {
                    if (rato > 1) {
                        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL
                    } else {
                        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL
                    }
                }
            } else {
                Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
                rato = 1 / rato;
                defalutRato = 1 / defalutRato;
                if (rato >= defalutRato && rato <= 2.3) {
                    Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT
                } else {
                    Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL
                }
            }
            Laya.stage.alignH = "center";
            Laya.stage.alignV = "middle";
            console.log(Laya.stage.width, Laya.stage.height, Laya.Browser.width, Laya.Browser.height)
        };
        DeviceUtil.isNative = function() {
            return Laya.Render.isConchApp
        };
        DeviceUtil.isMiniGame = function() {
            return Laya.Browser.onMiniGame || Laya.Browser.onQQMiniGame || Laya.Browser.onVVMiniGame || Laya.Browser.onQGMiniGame || window["ucMiniGame"] || Laya.Browser.onBDMiniGame
        };
        DeviceUtil.isWXMiniGame = function() {
            if (window["ttMiniGame"]) {
                return false
            }
            return Laya.Browser.onMiniGame
        };
        DeviceUtil.isQQMiniGame = function() {
            return Laya.Browser.onQQMiniGame
        };
        DeviceUtil.isTTMiniGame = function() {
            if (window["ttMiniGame"]) {
                return true
            }
            return false
        };
        DeviceUtil.isVIVOMiniGame = function() {
            return Laya.Browser.onVVMiniGame
        };
        DeviceUtil.isOPPOMiniGame = function() {
            return Laya.Browser.onQGMiniGame
        };
        DeviceUtil.isBAIDUMiniGame = function() {
            return Laya.Browser.onBDMiniGame
        };
        DeviceUtil.isIOS = function() {
            return Laya.Browser.onIOS
        };
        DeviceUtil.isAndroid = function() {
            return Laya.Browser.onAndroid
        };
        DeviceUtil.isOnPC = function() {
            return Laya.Browser.onPC
        };
        DeviceUtil.isUCMiniGame = function() {
            return window["ucMiniGame"]
        };
        DeviceUtil.getDeviceNo = function() {
            if (Laya.LocalStorage.getItem("DeviceNo")) {
                return Laya.LocalStorage.getItem("DeviceNo")
            }
            var no = "";
            if (Laya.Browser.onMobile) {}
            no += (new Date).getTime();
            Laya.LocalStorage.setItem("DeviceNo", no);
            return no
        };
        DeviceUtil.defaultSize = {
            w: 1080,
            h: 1920
        };
        return DeviceUtil
    } ();
    window["DeviceUtil"] = DeviceUtil;
    var EffectUtil = function() {
        function EffectUtil() {}
        EffectUtil.macIconShake = function(obj, initY, callback, thisObj, args) {
            var arr = [[20, 300], [15, 300], [10, 300], [5, 300]];
            var index = 0;
            toShake();
            function toShake() {
                if (index >= arr.length) {
                    callback && callback.apply(thisObj, args)
                } else {
                    Laya.Tween.to(obj, {
                        y: initY - arr[index][0]
                    },
                    arr[index][1], null, Laya.Handler.create(null,
                    function() {
                        Laya.Tween.to(obj, {
                            y: initY
                        },
                        arr[index][1], null, Laya.Handler.create(null,
                        function() {++index;
                            toShake()
                        }))
                    }))
                }
            }
        };
        EffectUtil.flowOut = function(obj, time, ease, method, delay, thisObj, arrData) {
            if (time === void 0) {
                time = 500
            }
            if (ease === void 0) {
                ease = null
            }
            if (method === void 0) {
                method = null
            }
            if (thisObj === void 0) {
                thisObj = null
            }
            if (arrData === void 0) {
                arrData = null
            }
            if (method) {
                Laya.Tween.to(obj, {
                    y: obj.y - 150,
                    alpha: 0
                },
                time, ease, Laya.Handler.create(thisObj, method, arrData), delay)
            } else {
                Laya.Tween.to(obj, {
                    y: obj.y - 150,
                    alpha: 0
                },
                time, ease, Laya.Handler.create(obj, obj.removeSelf, arrData), delay)
            }
        };
        EffectUtil.flowMoveOut = function(obj, time, ease, method, delay, thisObj, arrData) {
            if (time === void 0) {
                time = 500
            }
            if (ease === void 0) {
                ease = null
            }
            if (method === void 0) {
                method = null
            }
            if (delay === void 0) {
                delay = null
            }
            if (thisObj === void 0) {
                thisObj = null
            }
            if (arrData === void 0) {
                arrData = null
            }
            if (method) {
                Laya.Tween.to(obj, {
                    y: obj.y - 150
                },
                time * .7, ease, Laya.Handler.create(obj,
                function() {
                    Laya.Tween.to(obj, {
                        alpha: 0
                    },
                    time * .3, ease, Laya.Handler.create(thisObj, method, arrData))
                }), delay)
            } else {
                Laya.Tween.to(obj, {
                    y: obj.y - 150
                },
                time * .7, ease, Laya.Handler.create(obj,
                function() {
                    Laya.Tween.to(obj, {
                        alpha: 0
                    },
                    time * .3, ease, Laya.Handler.create(obj, obj.removeSelf, arrData))
                }), delay)
            }
        };
        EffectUtil.flowNum = function(startNum, endNum, callback, thisObj, completeCallBack) {
            Laya.timer.clearAll(this);
            var change = Math.abs(endNum - startNum);
            if (change <= 0) return;
            var everyChange = change / (endNum - startNum);
            if (change >= 1e3) {
                everyChange = 1e3
            } else if (change >= 100) {
                everyChange = 100
            } else if (change >= 50) {
                everyChange = 50
            } else if (change >= 5) {
                everyChange = 5
            }
            change = Math.ceil(change / everyChange);
            var currNum = startNum;
            var timer = new Laya.Timer;
            timer.loop(17, this, changeFun);
            function changeFun() {
                currNum += everyChange; --change;
                if (change < 0) {
                    timer.clearAll(this);
                    timer = null;
                    completeCallBack && completeCallBack.apply(thisObj)
                } else {
                    callback && callback.apply(thisObj, [endNum])
                }
            }
        };
        EffectUtil.startFlicker = function(obj, alphaTime) {
            if (alphaTime === void 0) {
                alphaTime = 700
            }
            obj.alpha = 1;
            Laya.Tween.to(obj, {
                alpha: 0
            },
            alphaTime, null, Laya.Handler.create(null,
            function() {
                Laya.Tween.to(obj, {
                    alpha: 1
                },
                alphaTime, null, Laya.Handler.create(this, this.startFlicker, [obj]))
            }.bind(this)))
        };
        EffectUtil.stopEffect = function(obj, xPos, yPos) {
            if (xPos === void 0) {
                xPos = null
            }
            if (yPos === void 0) {
                yPos = null
            }
            Laya.Tween.clearAll(obj);
            if (xPos !== null && yPos !== null) {
                obj.pos(xPos, yPos)
            }
        };
        EffectUtil.showScaleFix = function(spr, scale, time, isLoop) {
            if (scale === void 0) {
                scale = 1.3
            }
            if (time === void 0) {
                time = 1e3
            }
            if (isLoop === void 0) {
                isLoop = true
            }
            Laya.Tween.clearAll(spr);
            Laya.Tween.to(spr, {
                scaleX: scale,
                scaleY: scale
            },
            time, null, Laya.Handler.create(spr,
            function() {
                Laya.Tween.to(spr, {
                    scaleX: 1,
                    scaleY: 1
                },
                time, null, Laya.Handler.create(spr,
                function() {
                    if (isLoop) {
                        EffectUtil.showScaleFix(spr, scale, time, isLoop)
                    }
                }))
            }))
        };
        EffectUtil.showWobbleEff = function(spr, duc, time, intervalTime, onceCall) {
            var _this = this;
            if (duc === void 0) {
                duc = 10
            }
            if (time === void 0) {
                time = 400
            }
            if (intervalTime === void 0) {
                intervalTime = null
            }
            if (onceCall === void 0) {
                onceCall = null
            }
            Laya.Tween.to(spr, {
                rotation: duc
            },
            time / 4, null, Laya.Handler.create(this,
            function() {
                Laya.Tween.to(spr, {
                    rotation: -duc
                },
                time / 2, null, Laya.Handler.create(_this,
                function() {
                    Laya.Tween.to(spr, {
                        rotation: 0
                    },
                    time / 4, null, Laya.Handler.create(_this,
                    function() {
                        onceCall && onceCall();
                        if (intervalTime > 0) {
                            Laya.timer.once(intervalTime, spr, EffectUtil.showWobbleEff, [spr, duc, time, intervalTime, onceCall]);
                            return
                        }
                        if (intervalTime < 0) {
                            EffectUtil.showWobbleEff(spr, duc, time, intervalTime, onceCall)
                        }
                    }))
                }))
            }))
        };
        EffectUtil.showUpDown = function(spr, len, time, isLoop) {
            if (time === void 0) {
                time = 1e3
            }
            if (isLoop === void 0) {
                isLoop = true
            }
            Laya.Tween.clearAll(spr);
            var firstY = spr.y;
            Laya.Tween.to(spr, {
                y: firstY + len
            },
            time, Laya.Ease.sineIn, Laya.Handler.create(spr,
            function() {
                Laya.Tween.to(spr, {
                    y: firstY
                },
                time, Laya.Ease.sineOut, Laya.Handler.create(spr,
                function() {
                    if (isLoop) {
                        EffectUtil.showUpDown(spr, len, time, isLoop)
                    }
                }))
            }))
        };
        EffectUtil.toUpDownAni = function(spr, len, durtion, intervalTime, onceCall) {
            if (len === void 0) {
                len = 300
            }
            if (durtion === void 0) {
                durtion = 500
            }
            if (intervalTime === void 0) {
                intervalTime = null
            }
            if (onceCall === void 0) {
                onceCall = null
            }
            var starY = spr.y;
            Laya.Tween.to(spr, {
                y: spr.y - len
            },
            durtion, Laya.Ease.circOut, Laya.Handler.create(spr,
            function() {
                Laya.Tween.to(spr, {
                    y: starY - 25
                },
                durtion, Laya.Ease.circIn, Laya.Handler.create(spr,
                function() {
                    Laya.Tween.to(spr, {
                        y: starY + 20
                    },
                    50, Laya.Ease.circOut, Laya.Handler.create(spr,
                    function() {
                        Laya.Tween.to(spr, {
                            y: starY - 20
                        },
                        50, Laya.Ease.circIn, Laya.Handler.create(spr,
                        function() {
                            Laya.Tween.to(spr, {
                                y: starY - 10
                            },
                            50, Laya.Ease.circIn, Laya.Handler.create(spr,
                            function() {
                                Laya.Tween.to(spr, {
                                    y: starY + 10
                                },
                                50, Laya.Ease.circOut, Laya.Handler.create(spr,
                                function() {
                                    Laya.Tween.to(spr, {
                                        y: starY - 5
                                    },
                                    50, Laya.Ease.circIn, Laya.Handler.create(spr,
                                    function() {
                                        Laya.Tween.to(spr, {
                                            y: starY
                                        },
                                        50, Laya.Ease.circOut, Laya.Handler.create(spr,
                                        function() {
                                            onceCall && onceCall();
                                            if (intervalTime != 0 && intervalTime >= -1) {
                                                if (intervalTime == -1) {
                                                    EffectUtil.toUpDownAni(spr, len, durtion, intervalTime)
                                                } else {
                                                    Laya.timer.once(intervalTime, spr, EffectUtil.toUpDownAni, [spr, len, durtion, intervalTime])
                                                }
                                            }
                                        }))
                                    }))
                                }))
                            }))
                        }))
                    }))
                }))
            }))
        };
        EffectUtil.imitateUpDown = function(spr, scale, len, durtion, intervalTime, onceCall) {
            if (scale === void 0) {
                scale = .5
            }
            if (len === void 0) {
                len = 300
            }
            if (durtion === void 0) {
                durtion = 1e3
            }
            if (intervalTime === void 0) {
                intervalTime = null
            }
            if (onceCall === void 0) {
                onceCall = null
            }
            var starY = spr.y;
            Laya.Tween.to(spr, {
                scaleY: 1 - scale
            },
            durtion * .3, Laya.Ease.circOut, Laya.Handler.create(spr,
            function() {
                Laya.Tween.to(spr, {
                    scaleY: 1 + scale
                },
                durtion * .4, Laya.Ease.circOut, Laya.Handler.create(spr,
                function() {
                    Laya.Tween.to(spr, {
                        scaleY: 1
                    },
                    durtion * .4, Laya.Ease.sineIn)
                }));
                Laya.Tween.to(spr, {
                    y: spr.y - len
                },
                durtion * .4, Laya.Ease.circOut, Laya.Handler.create(spr,
                function() {
                    Laya.Tween.to(spr, {
                        y: starY - 25
                    },
                    durtion * .4, Laya.Ease.cubicIn, Laya.Handler.create(spr,
                    function() {
                        Laya.Tween.to(spr, {
                            y: starY + 20
                        },
                        50, Laya.Ease.circOut, Laya.Handler.create(spr,
                        function() {
                            Laya.Tween.to(spr, {
                                y: starY - 20
                            },
                            50, Laya.Ease.circIn, Laya.Handler.create(spr,
                            function() {
                                Laya.Tween.to(spr, {
                                    y: starY - 10
                                },
                                50, Laya.Ease.circIn, Laya.Handler.create(spr,
                                function() {
                                    Laya.Tween.to(spr, {
                                        y: starY + 10
                                    },
                                    50, Laya.Ease.circOut, Laya.Handler.create(spr,
                                    function() {
                                        Laya.Tween.to(spr, {
                                            y: starY - 5
                                        },
                                        50, Laya.Ease.circIn, Laya.Handler.create(spr,
                                        function() {
                                            Laya.Tween.to(spr, {
                                                y: starY
                                            },
                                            50, Laya.Ease.circOut, Laya.Handler.create(spr,
                                            function() {
                                                onceCall && onceCall();
                                                if (intervalTime != 0 && intervalTime >= -1) {
                                                    if (intervalTime == -1) {
                                                        EffectUtil.imitateUpDown(spr, scale, len, durtion, intervalTime, onceCall)
                                                    } else {
                                                        Laya.timer.once(intervalTime, spr, EffectUtil.imitateUpDown, [spr, scale, len, durtion, intervalTime, onceCall])
                                                    }
                                                }
                                            }))
                                        }))
                                    }))
                                }))
                            }))
                        }))
                    }))
                }))
            }))
        };
        return EffectUtil
    } ();
    window.EffectUtil = EffectUtil;
    var EventMgr = function(_super) {
        __extends(EventMgr, _super);
        function EventMgr() {
            return _super.call(this) || this
        }
        EventMgr.getInstance = function() {
            if (!EventMgr._instance) {
                EventMgr._instance = new EventMgr
            }
            return EventMgr._instance
        };
        EventMgr.prototype.addEvent = function(eventType, obj, callFunc) {
            this.on(eventType, obj, callFunc)
        };
        EventMgr.prototype.removeEvent = function(eventType, obj, callFunc) {
            this.off(eventType, obj, callFunc, false)
        };
        EventMgr.prototype.sendEvent = function(eventType) {
            var args = [];
            for (var _a = 1; _a < arguments.length; _a++) {
                args[_a - 1] = arguments[_a]
            }
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i]
            }
            this.event(eventType, args)
        };
        return EventMgr
    } (Laya.EventDispatcher);
    window["EventMgr"] = EventMgr;
    var Md5 = function() {
        function Md5() {
            this._state = new Int32Array(4);
            this._buffer = new ArrayBuffer(68);
            this._buffer8 = new Uint8Array(this._buffer, 0, 68);
            this._buffer32 = new Uint32Array(this._buffer, 0, 17);
            this.start()
        }
        Md5.hashStr = function(str, raw) {
            if (raw === void 0) {
                raw = false
            }
            return this.onePassHasher.start().appendStr(str).end(raw)
        };
        Md5.hashAsciiStr = function(str, raw) {
            if (raw === void 0) {
                raw = false
            }
            return this.onePassHasher.start().appendAsciiStr(str).end(raw)
        };
        Md5._hex = function(x) {
            var hc = Md5.hexChars;
            var ho = Md5.hexOut;
            var n;
            var offset;
            var j;
            var i;
            for (i = 0; i < 4; i += 1) {
                offset = i * 8;
                n = x[i];
                for (j = 0; j < 8; j += 2) {
                    ho[offset + 1 + j] = hc.charAt(n & 15);
                    n >>>= 4;
                    ho[offset + 0 + j] = hc.charAt(n & 15);
                    n >>>= 4
                }
            }
            return ho.join("")
        };
        Md5._md5cycle = function(x, k) {
            var a = x[0];
            var b = x[1];
            var c = x[2];
            var d = x[3];
            a += (b & c | ~b & d) + k[0] - 680876936 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[1] - 389564586 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[2] + 606105819 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[4] - 176418897 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[7] - 45705983 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[10] - 42063 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[13] - 40341101 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & d | c & ~d) + k[1] - 165796510 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[11] + 643717713 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[0] - 373897302 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[5] - 701558691 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[10] + 38016083 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[15] - 660478335 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[4] - 405537848 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[9] + 568446438 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[3] - 187363961 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[2] - 51403784 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b ^ c ^ d) + k[5] - 378558 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[14] - 35309556 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[7] - 155497632 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[13] + 681279174 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[0] - 358537222 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[3] - 722521979 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[6] + 76029189 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[9] - 640364487 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[12] - 421815835 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[15] + 530742520 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[2] - 995338651 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            x[0] = a + x[0] | 0;
            x[1] = b + x[1] | 0;
            x[2] = c + x[2] | 0;
            x[3] = d + x[3] | 0
        };
        Md5.prototype.start = function() {
            this._dataLength = 0;
            this._bufferLength = 0;
            this._state.set(Md5.stateIdentity);
            return this
        };
        Md5.prototype.appendStr = function(str) {
            var buf8 = this._buffer8;
            var buf32 = this._buffer32;
            var bufLen = this._bufferLength;
            var code;
            var i;
            for (i = 0; i < str.length; i += 1) {
                code = str.charCodeAt(i);
                if (code < 128) {
                    buf8[bufLen++] = code
                } else if (code < 2048) {
                    buf8[bufLen++] = (code >>> 6) + 192;
                    buf8[bufLen++] = code & 63 | 128
                } else if (code < 55296 || code > 56319) {
                    buf8[bufLen++] = (code >>> 12) + 224;
                    buf8[bufLen++] = code >>> 6 & 63 | 128;
                    buf8[bufLen++] = code & 63 | 128
                } else {
                    code = (code - 55296) * 1024 + (str.charCodeAt(++i) - 56320) + 65536;
                    if (code > 1114111) {
                        throw new Error("Unicode standard supports code points up to U+10FFFF")
                    }
                    buf8[bufLen++] = (code >>> 18) + 240;
                    buf8[bufLen++] = code >>> 12 & 63 | 128;
                    buf8[bufLen++] = code >>> 6 & 63 | 128;
                    buf8[bufLen++] = code & 63 | 128
                }
                if (bufLen >= 64) {
                    this._dataLength += 64;
                    Md5._md5cycle(this._state, buf32);
                    bufLen -= 64;
                    buf32[0] = buf32[16]
                }
            }
            this._bufferLength = bufLen;
            return this
        };
        Md5.prototype.appendAsciiStr = function(str) {
            var buf8 = this._buffer8;
            var buf32 = this._buffer32;
            var bufLen = this._bufferLength;
            var i;
            var j = 0;
            for (;;) {
                i = Math.min(str.length - j, 64 - bufLen);
                while (i--) {
                    buf8[bufLen++] = str.charCodeAt(j++)
                }
                if (bufLen < 64) {
                    break
                }
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen = 0
            }
            this._bufferLength = bufLen;
            return this
        };
        Md5.prototype.appendByteArray = function(input) {
            var buf8 = this._buffer8;
            var buf32 = this._buffer32;
            var bufLen = this._bufferLength;
            var i;
            var j = 0;
            for (;;) {
                i = Math.min(input.length - j, 64 - bufLen);
                while (i--) {
                    buf8[bufLen++] = input[j++]
                }
                if (bufLen < 64) {
                    break
                }
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen = 0
            }
            this._bufferLength = bufLen;
            return this
        };
        Md5.prototype.getState = function() {
            var self = this;
            var s = self._state;
            return {
                buffer: String.fromCharCode.apply(null, self._buffer8),
                buflen: self._bufferLength,
                length: self._dataLength,
                state: [s[0], s[1], s[2], s[3]]
            }
        };
        Md5.prototype.setState = function(state) {
            var buf = state.buffer;
            var x = state.state;
            var s = this._state;
            var i;
            this._dataLength = state.length;
            this._bufferLength = state.buflen;
            s[0] = x[0];
            s[1] = x[1];
            s[2] = x[2];
            s[3] = x[3];
            for (i = 0; i < buf.length; i += 1) {
                this._buffer8[i] = buf.charCodeAt(i)
            }
        };
        Md5.prototype.end = function(raw) {
            if (raw === void 0) {
                raw = false
            }
            var bufLen = this._bufferLength;
            var buf8 = this._buffer8;
            var buf32 = this._buffer32;
            var i = (bufLen >> 2) + 1;
            var dataBitsLen;
            this._dataLength += bufLen;
            buf8[bufLen] = 128;
            buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
            buf32.set(Md5.buffer32Identity.subarray(i), i);
            if (bufLen > 55) {
                Md5._md5cycle(this._state, buf32);
                buf32.set(Md5.buffer32Identity)
            }
            dataBitsLen = this._dataLength * 8;
            if (dataBitsLen <= 4294967295) {
                buf32[14] = dataBitsLen
            } else {
                var matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
                if (matches === null) {
                    return
                }
                var lo = parseInt(matches[2], 16);
                var hi = parseInt(matches[1], 16) || 0;
                buf32[14] = lo;
                buf32[15] = hi
            }
            Md5._md5cycle(this._state, buf32);
            return Md5._hex(this._state)
        };
        Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
        Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        Md5.hexChars = "0123456789abcdef";
        Md5.hexOut = [];
        Md5.onePassHasher = new Md5;
        return Md5
    } ();
    if (Md5.hashStr("hello") !== "5d41402abc4b2a76b9719d911017c592") {
        console.error("Md5 self test failed.")
    }
    window.Md5 = Md5;
    var NumberTool = function() {
        function NumberTool() {}
        NumberTool.getRandomInt = function(start, end) {
            return Math.round(Math.random() * (end - start)) + start
        };
        NumberTool.formatCapital = function(num) {
            if (num <= 0 || num >= 10) {
                return ""
            }
            return ["一", "二", "三", "四", "五", "六", "七", "八", "九"][num - 1]
        };
        NumberTool.formatMoney = function(num) {
            if (num >= 1e4 || num <= -1e4) {
                return Math.round(num / 100) / 100 + "万"
            } else {
                return num + ""
            }
        };
        NumberTool.getSoceNumberStr = function(numS) {
            var str = "";
            var score = numS;
            var index = 0;
            var func = function(num) {
                if (num / 1e3 > 1) {
                    num = Math.floor(num / 10);
                    index++;
                    return func(num)
                } else {
                    return num
                }
            };
            var showP = ["K", "M", "B", "T"];
            score = func(score);
            if (index > 0) {
                return score + "." + showP[index - 1]
            } else {
                return score + ""
            }
        };
        NumberTool.getSoceNumberStrType_K = function(num) {
            if (num > 9999) {
                num /= 1e3;
                num = Math.floor(num);
                return num + "K"
            }
            return num + ""
        };
        NumberTool.getThreeTypeNumberStr = function(numS) {
            var str = "";
            var func = function(num) {
                if (num / 1e3 > 1) {
                    str = "," + NumberTool.getThreeNumStr(num % 1e3) + str;
                    num = Math.floor(num / 1e3);
                    return func(num)
                } else {
                    str = num + str;
                    return str
                }
            };
            return func(numS)
        };
        NumberTool.getThreeNumStr = function(num) {
            if (num > 99) {
                return num + ""
            } else if (num > 9) {
                return "0" + num
            } else {
                return "00" + num
            }
        };
        NumberTool.getShowTime = function(timeNum) {
            var fen = "";
            var funNum = Math.floor(timeNum / 60);
            if (funNum / 10 >= 1) {
                fen = "" + funNum
            } else {
                fen = "0" + funNum
            }
            var miao = "";
            if (funNum > 0) {
                timeNum -= 60 * funNum
            }
            var miaoNum = timeNum;
            if (miaoNum / 10 >= 1) {
                miao = "" + miaoNum
            } else {
                miao = "0" + miaoNum
            }
            return fen + ":" + miao
        };
        NumberTool.getShowTimeTwo = function(timeNum) {
            var hour = "";
            var hourNum = Math.floor(timeNum / 3600);
            if (hourNum / 10 >= 1) {
                hour = "" + hourNum
            } else {
                hour = "0" + hourNum
            }
            if (hourNum > 0) {
                timeNum -= 3600 * hourNum
            }
            var fen = "";
            var funNum = Math.floor(timeNum / 60);
            if (funNum / 10 >= 1) {
                fen = "" + funNum
            } else {
                fen = "0" + funNum
            }
            if (funNum > 0) {
                timeNum -= 60 * funNum
            }
            var miao = "";
            var miaoNum = timeNum;
            if (miaoNum / 10 >= 1) {
                miao = "" + miaoNum
            } else {
                miao = "0" + miaoNum
            }
            return hour + ":" + fen + ":" + miao
        };
        NumberTool.getShowTimeThree = function(timeNum) {
            var timeStr = "";
            var day = timeNum / (3600 * 24);
            day = Math.floor(day);
            if (day >= 1) {
                timeNum -= day * (3600 * 24)
            }
            var hour = timeNum / 3600;
            hour = Math.floor(hour);
            if (hour >= 1) {
                timeNum -= hour * 3600
            }
            var fen = timeNum / 60;
            fen = Math.floor(fen);
            if (fen >= 1) {
                timeNum -= fen * 60
            }
            timeStr = day + "天" + hour + "时" + fen + "分" + timeNum + "秒";
            return timeStr
        };
        return NumberTool
    } ();
    window.NumberTool = NumberTool;
    var PosTool = function() {
        function PosTool() {}
        PosTool.worldToScreen2 = function(camera, point) {
            var pointA = PosTool.inverseTransformPoint(camera.transform, point);
            var distance = pointA.z;
            var out = new Laya.Vector3;
            camera.viewport.project(point, camera.projectionViewMatrix, out);
            var value = new Laya.Vector3(out.x / Laya.stage.clientScaleX, out.y / Laya.stage.clientScaleY, distance);
            return value
        };
        PosTool.screenToWorld = function(camera, point) {
            var halfFOV = camera.fieldOfView * .5 * Math.PI / 180;
            var height = point.z * Math.tan(halfFOV);
            var width = height * camera.aspectRatio;
            var lowerLeft = PosTool.getLowerLeft(camera.transform, point.z, width, height);
            var v = PosTool.getScreenScale(width, height);
            var value = new Laya.Vector3;
            var lowerLeftA = PosTool.inverseTransformPoint(camera.transform, lowerLeft);
            value = new Laya.Vector3( - point.x / v.x, point.y / v.y, 0);
            Laya.Vector3.add(lowerLeftA, value, value);
            value = PosTool.transformPoint(camera.transform, value);
            return value
        };
        PosTool.getScreenScale = function(width, height) {
            var v = new Laya.Vector3;
            v.x = Laya.stage.width / width / 2;
            v.y = Laya.stage.height / height / 2;
            return v
        };
        PosTool.getLowerLeft = function(transform, distance, width, height) {
            var lowerLeft = new Laya.Vector3;
            var right = new Laya.Vector3;
            transform.getRight(right);
            Laya.Vector3.normalize(right, right);
            var xx = new Laya.Vector3(right.x * width, right.y * width, right.z * width);
            Laya.Vector3.add(transform.position, xx, lowerLeft);
            var up = new Laya.Vector3;
            transform.getUp(up);
            Laya.Vector3.normalize(up, up);
            var yy = new Laya.Vector3(up.x * height, up.y * height, up.z * height);
            Laya.Vector3.subtract(lowerLeft, yy, lowerLeft);
            var forward = new Laya.Vector3;
            transform.getForward(forward);
            Laya.Vector3.normalize(forward, forward);
            var zz = new Laya.Vector3(forward.x * distance, forward.y * distance, forward.z * distance);
            Laya.Vector3.subtract(lowerLeft, zz, lowerLeft);
            return lowerLeft
        };
        PosTool.inverseTransformPoint = function(origin, point) {
            var xx = new Laya.Vector3;
            origin.getRight(xx);
            var yy = new Laya.Vector3;
            origin.getUp(yy);
            var zz = new Laya.Vector3;
            origin.getForward(zz);
            var zz1 = new Laya.Vector3( - zz.x, -zz.y, -zz.z);
            var x = PosTool.projectDistance(point, origin.position, xx);
            var y = PosTool.projectDistance(point, origin.position, yy);
            var z = PosTool.projectDistance(point, origin.position, zz1);
            var value = new Laya.Vector3(x, y, z);
            return value
        };
        PosTool.transformPoint = function(origin, point) {
            var value = new Laya.Vector3;
            Laya.Vector3.transformQuat(point, origin.rotation, value);
            Laya.Vector3.add(value, origin.position, value);
            return value
        };
        PosTool.projectDistance = function(A, C, B) {
            var CA = new Laya.Vector3;
            Laya.Vector3.subtract(A, C, CA);
            var angle = PosTool.angle2Vector(CA, B) * Math.PI / 180;
            var distance = Laya.Vector3.distance(A, C);
            distance *= Math.cos(angle);
            return distance
        };
        PosTool.angle2Vector = function(ma, mb) {
            var v1 = ma.x * mb.x + ma.y * mb.y + ma.z * mb.z;
            var ma_val = Math.sqrt(ma.x * ma.x + ma.y * ma.y + ma.z * ma.z);
            var mb_val = Math.sqrt(mb.x * mb.x + mb.y * mb.y + mb.z * mb.z);
            var cosM = v1 / (ma_val * mb_val);
            if (cosM < -1) cosM = -1;
            if (cosM > 1) cosM = 1;
            var angleAMB = Math.acos(cosM) * 180 / Math.PI;
            return angleAMB
        };
        return PosTool
    } ();
    window.PosTool = PosTool;
    var ResUtil = function() {
        function ResUtil() {
            this.defaultOriginUrl = "";
            this.isFastLoadGrpSucc = true;
            this.isSuccGroupNames = {};
            Laya.loader.maxLoader = 8
        }
        ResUtil.getIntance = function() {
            if (!ResUtil.instance_) {
                ResUtil.instance_ = new ResUtil
            }
            return ResUtil.instance_
        };
        ResUtil.prototype.getOriginUrlPath = function(url) {
            return this.defaultOriginUrl + url.replace("./", "")
        };
        ResUtil.prototype.addVersionPrefix = function(fix) {
            Laya.ResourceVersion.addVersionPrefix(fix);
            Laya.URL.basePath = fix
        };
        ResUtil.prototype.loadRESConfig = function(resUrl) {
            var _this = this;
            if (resUrl === void 0) {
                resUrl = "./default.res.json"
            }
            return new Promise(function(resolve) {
                Laya.loader.load(resUrl, Laya.Handler.create(_this,
                function(res) {
                    if (typeof res == "string") {
                        res = JSON.parse(res)
                    }
                    _this.resConfig = res;
                    if (!_this.resKeyValues) {
                        _this.resKeyValues = {}
                    }
                    for (var i = 0,
                    len = res.resources.length; i < len; i++) {
                        _this.resKeyValues["" + res.resources[i].name] = res.resources[i]
                    }
                    if (!_this.groupsResKeys) {
                        _this.groupsResKeys = {}
                    }
                    for (var i = 0,
                    len = res.groups.length; i < len; i++) {
                        _this.groupsResKeys["" + res.groups[i].name] = res.groups[i]
                    }
                    resolve()
                }), null, Laya.Loader.JSON)
            })
        };
        ResUtil.prototype.fastLoadGroups = function(groups, complet, progress) {
            if (DeviceUtil.isNative()) {
                this.loadGroups(groups, complet, progress);
                return
            }
            if (!this.isFastLoadGrpSucc) {
                console.warn("fastLoadGroup is not success!! please wait ...");
                return
            }
            if (groups.length == 0) {
                complet();
                return
            }
            var allGroups = "";
            var resInfos = [];
            for (var i = 0,
            len = groups.length; i < len; i++) {
                allGroups += "_" + groups[i];
                resInfos = resInfos.concat(this.getGroupResInfosByGroupName(groups[i]))
            }
            this.isFastLoadGrpSucc = false;
            this.fastLoadResByResInfos(resInfos, complet, progress)
        };
        ResUtil.prototype.fastLoadResByResInfos = function(resInfos, complet, progress) {
            return __awaiter(this, void 0, void 0,
            function() {
                var self, len, index, loadSucc, _loop_1, i;
                return __generator(this,
                function(_a) {
                    self = this;
                    len = resInfos.length;
                    index = 0;
                    if (progress) {
                        progress(index, len)
                    }
                    loadSucc = function(i) {
                        index++;
                        if (progress) {
                            progress(index, len)
                        }
                        if (resInfos[i]["isLast_group"]) {
                            self.isSuccGroupNames[resInfos[i]["isLast_group"]] = true
                        }
                        if (index == len - 1) {
                            if (progress) {
                                progress(len, len)
                            }
                            if (complet) {
                                complet()
                            }
                            self.isFastLoadGrpSucc = true
                        }
                    };
                    _loop_1 = function(i) {
                        self.asyncLoadResByResInfo(resInfos[i], 1, true).then(function() {
                            loadSucc(i)
                        })
                    };
                    for (i = 0; i < len; i++) {
                        _loop_1(i)
                    }
                    return [2]
                })
            })
        };
        ResUtil.prototype.loadGroups = function(groups, complet, progress) {
            if (groups.length == 0) {
                complet();
                return
            }
            var allGroups = "";
            var resInfos = [];
            for (var i = 0,
            len = groups.length; i < len; i++) {
                allGroups += "_" + groups[i];
                resInfos = resInfos.concat(this.getGroupResInfosByGroupName(groups[i]))
            }
            this.loadResByResInfos(resInfos, complet, progress)
        };
        ResUtil.prototype.loadResByResInfos = function(resInfos, complet, progress) {
            return __awaiter(this, void 0, void 0,
            function() {
                var self, len, i;
                return __generator(this,
                function(_a) {
                    switch (_a.label) {
                    case 0:
                        self = this;
                        len = resInfos.length;
                        if (progress) {
                            progress(0, len)
                        }
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (! (i < len)) return [3, 4];
                        return [4, self.asyncLoadResByResInfo(resInfos[i], 1, true)];
                    case 2:
                        _a.sent();
                        if (progress) {
                            progress(i, len)
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4:
                        if (progress) {
                            progress(len, len)
                        }
                        if (complet) {
                            complet()
                        }
                        return [2]
                    }
                })
            })
        };
        ResUtil.prototype.groupIsLoad = function(group) {
            if (this.isSuccGroupNames[group]) {
                return true
            }
            return false
        };
        ResUtil.prototype.getGroupsNotLoadArr = function(groups) {
            console.log("加载资源组 -> ", groups);
            var resArr = [];
            for (var i = 0,
            len = groups.length; i < len; i++) {
                if (!this.groupIsLoad(groups[i])) {
                    resArr.push(groups[i])
                }
            }
            return resArr
        };
        ResUtil.prototype.fastLoadResByResInfosThree = function(resInfos, complet, progress) {
            return __awaiter(this, void 0, void 0,
            function() {
                var self, len, lastOne, lastTwo, loopLen, index, _loop_2, i;
                return __generator(this,
                function(_a) {
                    switch (_a.label) {
                    case 0:
                        self = this;
                        len = resInfos.length;
                        lastOne = null;
                        lastTwo = null;
                        if (len % 3 == 1) {
                            lastOne = len - 1
                        } else if (len % 3 == 2) {
                            lastOne = len - 1;
                            lastTwo = len - 2
                        }
                        loopLen = Math.floor(len / 3);
                        index = 0;
                        _loop_2 = function(i) {
                            return __generator(this,
                            function(_a) {
                                switch (_a.label) {
                                case 0:
                                    index++;
                                    if (progress) {
                                        progress(index, loopLen)
                                    }
                                    return [4, new Promise(function(resolve) {
                                        var fYes = false;
                                        var tYes = false;
                                        var thYes = false;
                                        var loadSucc = function(i) {
                                            if (resInfos[i]["isLast_group"]) {
                                                self.isSuccGroupNames[resInfos[i]["isLast_group"]] = true
                                            }
                                            if (fYes && tYes && thYes) {
                                                resolve()
                                            }
                                        };
                                        self.asyncLoadResByResInfo(resInfos[i], 1, true).then(function() {
                                            fYes = true;
                                            loadSucc(i)
                                        });
                                        self.asyncLoadResByResInfo(resInfos[i + 1], 1, true).then(function() {
                                            tYes = true;
                                            loadSucc(i + 1)
                                        });
                                        self.asyncLoadResByResInfo(resInfos[i + 2], 1, true).then(function() {
                                            thYes = true;
                                            loadSucc(i + 2)
                                        })
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2]
                                }
                            })
                        };
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (! (i < loopLen)) return [3, 4];
                        return [5, _loop_2(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4:
                        if (!lastOne) return [3, 6];
                        return [4, self.asyncLoadResByResInfo(resInfos[lastOne], 1, true)];
                    case 5:
                        _a.sent();
                        if (resInfos[lastOne]["isLast_group"]) {
                            self.isSuccGroupNames[resInfos[lastOne]["isLast_group"]] = true
                        }
                        _a.label = 6;
                    case 6:
                        if (!lastTwo) return [3, 8];
                        return [4, self.asyncLoadResByResInfo(resInfos[lastTwo], 1, true)];
                    case 7:
                        _a.sent();
                        if (resInfos[lastTwo]["isLast_group"]) {
                            self.isSuccGroupNames[resInfos[lastTwo]["isLast_group"]] = true
                        }
                        _a.label = 8;
                    case 8:
                        if (progress) {
                            progress(len, len)
                        }
                        if (complet) {
                            complet()
                        }
                        return [2]
                    }
                })
            })
        };
        ResUtil.prototype.asyncLoadResByResInfo = function(resInfo, priority, isLoadGrp) {
            var _this = this;
            if (isLoadGrp === void 0) {
                isLoadGrp = false
            }
            if (!resInfo) {
                return null
            }
            return new Promise(function(resolve) {
                if (isLoadGrp) {
                    Laya.loader.load(ResUtil.getIntance().getOriginUrlPath(resInfo.url), Laya.Handler.create(_this,
                    function(res) {
                        resolve(res)
                    }), null, resInfo.type, priority, true, resInfo.group);
                    return
                }
                Laya.loader.load(resInfo.url, Laya.Handler.create(_this,
                function(res) {
                    resolve(res)
                }), null, resInfo.type, priority, true, resInfo.group)
            })
        };
        ResUtil.prototype.asyncLoadResByURL = function(url, priority) {
            var _this = this;
            if (priority === void 0) {
                priority = 1
            }
            return new Promise(function(resolve) {
                Laya.loader.load(url, Laya.Handler.create(_this,
                function(res) {
                    resolve(res)
                }), null, null, priority, true, null)
            })
        };
        ResUtil.prototype.asyncCreateRes = function(url) {
            var _this = this;
            return new Promise(function(resolve) {
                Laya.loader.create(url, Laya.Handler.create(_this,
                function() {
                    resolve()
                }))
            })
        };
        ResUtil.prototype.getGroupResInfosByGroupName = function(group) {
            var groupKeys = this.getKeysByGroup(group);
            if (!groupKeys) {
                console.warn("resGrp " + group + " not exist!! ");
                return []
            }
            var resInfos = [];
            for (var i = 0,
            len = groupKeys.length; i < len; i++) {
                var resInfo = this.getResInfoByName(groupKeys[i], group);
                resInfos.push(resInfo)
            }
            resInfos[resInfos.length - 1]["isLast_group"] = group;
            return resInfos
        };
        ResUtil.prototype.getResInfoByName = function(name, group) {
            var info = this.resKeyValues["" + name];
            if (info == null) {
                console.warn("key not found ", name);
                return null
            }
            var resInfo = {};
            resInfo.url = "resource/" + info.url;
            switch (info.type) {
            case "image":
                resInfo.type = Laya.Loader.IMAGE;
                break;
            case "json":
                resInfo.type = Laya.Loader.JSON;
                break;
            case "font":
                resInfo.type = Laya.Loader.FONT;
                break;
            case "sound":
                resInfo.type = Laya.Loader.SOUND;
                break;
            case "atlas":
            case "sheet":
                resInfo.type = Laya.Loader.ATLAS;
                break
            }
            if (info.url.indexOf("atlas") > -1) {
                resInfo.type = Laya.Loader.ATLAS
            }
            resInfo.group = group;
            return resInfo
        };
        ResUtil.prototype.getKeysByGroup = function(group) {
            if (this.groupsResKeys["" + group]) {
                return this.groupsResKeys["" + group].keys.split(",")
            } else {
                return null
            }
        };
        ResUtil.prototype.destoryGroupArr = function(groups) {
            console.log("销毁资源组 -> ", groups);
            for (var i = 0,
            len = groups.length; i < len; i++) {
                this.destoryGroup(groups[i])
            }
        };
        ResUtil.prototype.destoryGroup = function(group) {
            console.log("销毁资源组 -> ", group);
            var resInfos = this.getGroupResInfosByGroupName(group);
            for (var i = 0,
            len = resInfos.length; i < len; i++) {
                Laya.loader.clearRes(resInfos[i].url)
            }
            this.isSuccGroupNames[group] = null
        };
        ResUtil.prototype.getRES = function(key) {
            var resInfo = this.getResInfoByName(key);
            if (resInfo == null) {
                console.warn("key  null", key);
                return null
            }
            var res = Laya.loader.getRes(resInfo.url);
            if (res) {
                return res
            } else {
                return null
            }
        };
        ResUtil.prototype.getAsyncRESByUrl = function(url) {
            var _this = this;
            return new Promise(function(resolve) {
                var resurl = url;
                if (url.indexOf("http://") > -1 || url.indexOf("https://") > -1) {} else {
                    resurl = Laya.URL.basePath + url
                }
                Laya.loader.load(resurl, Laya.Handler.create(_this,
                function(res) {
                    resolve(res)
                }))
            })
        };
        ResUtil.prototype.getAsyncRES = function(key) {
            var _this = this;
            var resInfo = this.getResInfoByName(key);
            return new Promise(function(resolve) {
                if (!resInfo) {
                    console.warn("not find key --\x3e", key);
                    resolve(null)
                } else {
                    Laya.loader.load(Laya.URL.basePath + resInfo.url, Laya.Handler.create(_this,
                    function(res) {
                        resolve(res)
                    }), null, resInfo.type, 1, true, resInfo.group)
                }
            })
        };
        ResUtil.prototype.loadOneRes = function(resUrl, type, priority, group, complet) {
            Laya.loader.load(resUrl, Laya.Handler.create(this, complet), null, type, priority, true, group)
        };
        ResUtil.prototype.getModelByUrlAndName = function(url, name) {
            return new Promise(function(resolve) {
                url = "resource/assets/model/LayaScene_" + name + "/Conventional/" + name + ".lh";
                Laya.loader.create(url, Laya.Handler.create(null,
                function(res) {
                    var sprite3d = Laya.Loader.getRes(url);
                    sprite3d.transform.localPosition = new Laya.Vector3(0, 0, 0);
                    var model = sprite3d;
                    var clone = model.clone();
                    resolve(clone)
                }))
            })
        };
        ResUtil.prototype.loadResource = function(resource, onResourceLoadComplete, onResourceLoadProgress, onResourceLoadTarget) {
            Laya.loader.load(resource, Laya.Handler.create(onResourceLoadTarget, onResourceLoadComplete), Laya.Handler.create(onResourceLoadTarget, onResourceLoadProgress, null, false))
        };
        ResUtil.prototype.getUrl = function(host, name, resType) {
            if (resType === void 0) {
                resType = Laya.Loader.IMAGE
            }
            return host + "/" + name + "." + resType
        };
        ResUtil.prototype.asyncLoadJSON = function(jsonUrl) {
            var _this = this;
            return new Promise(function(resolve) {
                Laya.loader.load(jsonUrl, Laya.Handler.create(_this,
                function(jsonRes) {
                    if (typeof jsonRes == "string") {
                        jsonRes = JSON.parse(jsonRes)
                    }
                    resolve(jsonRes)
                }))
            })
        };
        ResUtil.prototype.loadThms = function(thmUrl) {
            return __awaiter(this, void 0, void 0,
            function() {
                var _a;
                return __generator(this,
                function(_b) {
                    switch (_b.label) {
                    case 0:
                        _a = ResUtil.instance_;
                        return [4, ResUtil.instance_.asyncLoadJSON(thmUrl)];
                    case 1:
                        _a.thmsConfig = _b.sent();
                        return [2]
                    }
                })
            })
        };
        ResUtil.instance_ = null;
        return ResUtil
    } ();
    window.ResUtil = ResUtil;
    var Utils = function() {
        function Utils() {}
        Utils.cutOutStr = function(str, cutNum) {
            var reg = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g;
            var len = 0;
            var index = 0;
            for (var i = 0; i < str.length; i++) {
                var code = str.charCodeAt(i).toString(16);
                var oldLen = len;
                var oldIndex = index;
                if (code.length > 2) {
                    len += 2
                } else {
                    len += 1
                }++index;
                if (reg.test(str.substr(i, 2))) {++i; ++index
                }
                if (len > cutNum) {
                    index = oldIndex;
                    len = oldLen;
                    break
                } else if (len == cutNum) {
                    break
                }
            }
            var retStr = str.substr(0, index);
            if (index < str.length) {
                retStr = retStr + "..."
            }
            return retStr
        };
        Utils.random = function(min, max) {
            return Math.round(Math.random() * (max - min) + Number(min))
        };
        Utils.getRandomInCeil = function(start, end) {
            return Math.ceil(Math.random() * (end - start)) + start
        };
        Utils.getRandomArr = function(total, len) {
            var result = [];
            var pi = total / len;
            for (var i = 1; i < len; i++) {
                var ran = Math.random() * pi;
                var c1 = pi - ran;
                var c2 = pi + ran;
                if (c1 > 0 && c2 > 0) {
                    result[i - 1] = c1;
                    result[i] = c2
                } else {
                    result[i - 1] = result[i] = pi
                }
            }
            return result
        };
        Utils.getRandom = function(start, end) {
            return Math.floor(Math.random() * (end - start + 1) + start)
        };
        Utils.exactCount = function(exactValue, count) {
            if (count === void 0) {
                count = 0
            }
            var num = Math.pow(10, count);
            var value = exactValue * num | 0;
            return value / num
        };
        Utils.limit = function(from, end) {
            var min = Math.min(from, end);
            var max = Math.max(from, end);
            var range = max - min;
            return min + Math.random() * range
        };
        Utils.formatTime = function(time) {
            var str = "";
            var h = time / 3600;
            h = parseInt(h + "");
            var m = (time - h * 3600) / 60;
            m = parseInt(m + "");
            var s = time - h * 3600 - m * 60;
            s = parseInt(s + "");
            if (h > 0) {
                str += h + ":"
            }
            if (m > 9) {
                str += m + ":"
            } else {
                str += "0" + m + ":"
            }
            if (s > 9) {
                str += s + ""
            } else {
                str += "0" + s
            }
            return str
        };
        Utils.formatTime2 = function(time) {
            var str = "";
            var d = time / 86400;
            d = parseInt(d + "");
            var h = (time - d * 86400) / 3600;
            h = parseInt(h + "");
            var m = (time - d * 86400 - h * 3600) / 60;
            m = parseInt(m + "");
            if (d > 0) str += d + "天";
            if (h > 9) {
                str += h + "时"
            } else {
                str += "0" + h + "时"
            }
            if (m > 9) {
                str += m + "分"
            } else {
                str += "0" + m + "分"
            }
            return str
        };
        Utils.millisecondsToDate = function(time, fmt) {
            var d = new Date(time);
            var o = {
                "M+": d.getMonth() + 1,
                "d+": d.getDate(),
                "h+": d.getHours(),
                "H+": d.getHours(),
                "m+": d.getMinutes(),
                "s+": d.getSeconds(),
                "q+": Math.floor((d.getMonth() + 3) / 3),
                S: d.getMilliseconds()
            };
            var week = {
                0 : "日",
                1 : "一",
                2 : "二",
                3 : "三",
                4 : "四",
                5 : "五",
                6 : "六"
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length))
            }
            if (/(E+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "星期": "周": "") + week[d.getDay() + ""])
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length))
                }
            }
            return fmt
        };
        Utils.judgeIsOnTheSameDay = function(lastTime, nowTime) {
            if (!lastTime || !nowTime) {
                return false
            }
            var a = 24 * 60 * 60 * 1e3;
            var b = Math.floor(lastTime / a);
            var c = Math.floor(nowTime / a);
            if (b == c) {
                return true
            } else {
                return false
            }
        };
        Utils.getQueryString = function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null
        };
        Utils.upset = function(arr) {
            var len = arr.length;
            var index;
            var tmp;
            for (var i = len - 1; i >= 0; i--) {
                index = Math.random() * i | 0;
                tmp = arr[i];
                arr[i] = arr[index];
                arr[index] = tmp
            }
        };
        Utils.randomArray = function(arr) {
            var index = Math.random() * arr.length | 0;
            return arr[index]
        };
        Utils.ruleOutType = function(arr, ruleParam, outNull, ruleIndexArr, rpType, rPValue) {
            var newArr = arr.filter(function(value, index) {
                if (outNull) if (!value) return false;
                if (ruleIndexArr && ruleIndexArr.length != 0) {
                    for (var i = 0,
                    len = ruleIndexArr.length; i < len; i++) {
                        if (ruleIndexArr[i] == index) return false
                    }
                }
                if (rpType) {
                    if (value[rpType] == rPValue) return false
                }
                if (value == ruleParam) return false;
                return true
            });
            return newArr
        };
        Utils.getObjLength = function(map) {
            var len = 0;
            for (var obj in map) {
                if (map[obj]) {
                    len++
                }
            }
            return len
        };
        Utils.copy = function(obj) {
            var result;
            if (obj instanceof Object) {
                result = obj instanceof Array ? [] : {};
                Object.keys(obj).forEach(function(item) {
                    result[item] = Utils.copy(obj[item])
                })
            } else {
                result = obj
            }
            return result
        };
        Utils.querStr = function(query) {
            return Object.keys(query).map(function(key) {
                return query[key] && encodeURIComponent(key) + "=" + encodeURIComponent(query[key])
            }).join("&")
        };
        Utils.getOffestAngle = function(px, py, mx, my, offRoa) {
            if (offRoa === void 0) {
                offRoa = 0
            }
            var x = Math.abs(px - mx);
            var y = Math.abs(py - my);
            var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            z = z == 0 ? 1 : z;
            var cos = y / z;
            var radina = Math.acos(cos);
            var angle = Math.floor(180 / (Math.PI / radina));
            if (mx > px && my > py) {
                angle = 90 - angle
            }
            if (mx == px && my > py) {
                angle = 90
            }
            if (mx == px && my < py) {
                angle = 270
            }
            if (mx > px && my == py) {
                angle = 0
            }
            if (mx < px && my > py) {
                angle = 90 + angle
            }
            if (mx < px && my == py) {
                angle = 180
            }
            if (mx < px && my < py) {
                angle = 270 - angle
            }
            if (mx > px && my < py) {
                angle = 270 + angle
            }
            return (angle + offRoa) % 360
        };
        Utils.getAngle = function(radian) {
            return 180 * radian / Math.PI
        };
        Utils.getRadian = function(angle) {
            return angle / 180 * Math.PI
        };
        Utils.getRadianTwoPoint = function(p1, p2) {
            var xdis = p2.x - p1.x;
            var ydis = p2.y - p1.y;
            return Math.atan2(ydis, xdis)
        };
        Utils.getAngleTwoPoint = function(p1, p2) {
            var vy = p2.y - p1.y;
            var vx = p2.x - p1.x;
            var ang;
            if (vy == 0) {
                if (vx < 0) {
                    return 180
                }
                return 0
            }
            if (vx == 0) {
                if (vy > 0) {
                    ang = 90
                } else if (vy < 0) {
                    ang = 270
                }
                return ang
            }
            ang = this.getAngle(Math.atan(Math.abs(vy) / Math.abs(vx)));
            if (vx > 0) {
                if (vy < 0) {
                    ang = 360 - ang
                }
            } else {
                if (vy > 0) {
                    ang = 180 - ang
                } else {
                    ang = 180 + ang
                }
            }
            return ang
        };
        Utils.getDistance = function(p1, p2) {
            var disX = p2.x - p1.x;
            var disY = p2.y - p1.y;
            var disQ = Math.pow(disX, 2) + Math.pow(disY, 2);
            return Math.sqrt(disQ)
        };
        Utils.getRunDirection = function(startPoint, endPoint, speed) {
            if (speed === void 0) {
                speed = 1
            }
            var disX = endPoint.x - startPoint.x;
            var disY = endPoint.y - startPoint.y;
            var dis = this.getDistance(startPoint, endPoint);
            dis = dis == 0 ? 1 : dis;
            var v1 = disX / dis * speed;
            var v2 = disY / dis * speed;
            startPoint = null;
            endPoint = null;
            return [v1, v2]
        };
        Utils.randomTo360 = function(angle) {
            angle = angle % 360;
            if (angle < 0) {
                angle += 360
            }
            return angle
        };
        Utils.getVertorModel = function(v) {
            return Math.sqrt(v.x * v.x + v.y * v.y)
        };
        Utils.getModelVertor = function(v, isNewVertor) {
            if (isNewVertor === void 0) {
                isNewVertor = false
            }
            var model = Utils.getVertorModel(v);
            if (isNewVertor) {
                return {
                    x: v.x / model,
                    y: v.y / model
                }
            }
            v.x /= model;
            v.y /= model;
            return v
        };
        Utils.getVerticalVertor = function(v) {
            var a = v.y * v.y / (v.x * v.x + v.y * v.y);
            a = Math.sqrt(a);
            var b = -(a * v.x) / v.y;
            return [{
                x: a,
                y: b
            },
            {
                x: -a,
                y: -b
            }]
        };
        Utils.vertorMultiplyNumber = function(v, num, isNewVertor) {
            if (isNewVertor === void 0) {
                isNewVertor = false
            }
            if (isNewVertor) {
                return {
                    x: v.x * num,
                    y: v.y * num
                }
            }
            v.x *= num;
            v.y *= num;
            return v
        };
        return Utils
    } ();
    window["Utils"] = Utils;
    var RectViewLoad = function(_super) {
        __extends(RectViewLoad, _super);
        function RectViewLoad() {
            var _this = _super.call(this) || this;
            _this.animationTime = 500;
            _this.rectH = 300;
            _this.width = Laya.stage.width;
            _this.height = Laya.stage.height;
            _this.initView();
            return _this
        }
        RectViewLoad.prototype.initView = function() {
            var startY, startX;
            var w, h = this.rectH,
            whL;
            w = Laya.stage.width * 1.8;
            whL = Laya.stage.width > Laya.stage.height ? Laya.stage.width: Laya.stage.height;
            whL = Math.floor(whL * 1.5) + 1;
            this.len = Math.floor(whL / h) + 2;
            startY = 0;
            startX = -this.rectH / 1.5;
            for (var i = 0; i < this.len; i++) {
                var rect = new Laya.Sprite;
                rect.graphics.drawRect(0, 0, w, h, "#000000");
                rect.width = w,
                rect.height = h;
                rect.pivotY = h / 2;
                rect.rotation = -45;
                rect.scaleY = 0;
                rect.x = startX;
                rect.y = h * i + startY;
                this.addChild(rect)
            }
        };
        RectViewLoad.prototype.open = function(caller, method) {
            for (var i = 0; i < this.len; i++) {
                var item = this.getChildAt(i);
                if (i == this.len - 1) {
                    Laya.Tween.to(item, {
                        scaleY: 1
                    },
                    this.animationTime, Laya.Ease.sineIn, Laya.Handler.create(caller, method))
                } else {
                    Laya.Tween.to(item, {
                        scaleY: 1
                    },
                    this.animationTime, Laya.Ease.sineIn)
                }
            }
        };
        RectViewLoad.prototype.close = function(caller, method) {
            for (var i = 0; i < this.len; i++) {
                var item = this.getChildAt(i);
                if (i == this.len - 1) {
                    Laya.Tween.to(item, {
                        scaleY: 0
                    },
                    this.animationTime, Laya.Ease.sineOut, Laya.Handler.create(caller, method))
                } else {
                    Laya.Tween.to(item, {
                        scaleY: 0
                    },
                    this.animationTime, Laya.Ease.sineOut)
                }
            }
        };
        return RectViewLoad
    } (Laya.Sprite);
    window.RectViewLoad = RectViewLoad;
    var ViewLoadTools = function() {
        function ViewLoadTools() {}
        ViewLoadTools.getInstance = function() {
            if (!ViewLoadTools.instance_) {
                ViewLoadTools.instance_ = new ViewLoadTools
            }
            return ViewLoadTools.instance_
        };
        ViewLoadTools.prototype.showRectViewLoadSwitchScene = function(complete, content) {
            if (content === void 0) {
                content = Laya.stage
            }
            if (!this.com_RectViewLoad) this.com_RectViewLoad = new RectViewLoad;
            this.com_RectViewLoad.mouseEnabled = true;
            content.addChild(this.com_RectViewLoad);
            this.com_RectViewLoad.open(this,
            function() {
                complete && complete()
            })
        };
        ViewLoadTools.prototype.closeRectViewLoad = function(complete) {
            var _this = this;
            if (!this.com_RectViewLoad) return;
            this.com_RectViewLoad.close(this,
            function() {
                complete && complete();
                _this.com_RectViewLoad.removeSelf()
            })
        };
        return ViewLoadTools
    } ();
    window.ViewLoadTools = ViewLoadTools
})();
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About

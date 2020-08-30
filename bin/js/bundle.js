(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var CustemButton = (function (_super) {
        __extends(CustemButton, _super);
        function CustemButton() {
            var _this = _super.call(this) || this;
            _this.maxScale = 1.1;
            _this.minScale = 1.0;
            _this.animTime = 300;
            return _this;
        }
        CustemButton.prototype.playScaleAnim = function () {
            var box = this.owner;
            Laya.Tween.clearAll(box);
            var scale = box.scaleX < this.maxScale ? this.maxScale : this.minScale;
            Laya.Tween.to(box, { scaleX: scale, scaleY: scale }, this.animTime, Laya.Ease.sineOut, Laya.Handler.create(this, this.playScaleAnim));
        };
        return CustemButton;
    }(CustomScaleComponent));

    var GameConfig = (function () {
        function GameConfig() {
        }
        GameConfig.init = function () {
            var reg = Laya.ClassUtils.regClass;
            reg("script/tool/CustemButton.ts", CustemButton);
        };
        GameConfig.width = 640;
        GameConfig.height = 1136;
        GameConfig.scaleMode = "fixedwidth";
        GameConfig.screenMode = "none";
        GameConfig.alignV = "top";
        GameConfig.alignH = "left";
        GameConfig.startScene = "game/GameView.scene";
        GameConfig.sceneRoot = "";
        GameConfig.debug = false;
        GameConfig.stat = false;
        GameConfig.physicsDebug = true;
        GameConfig.exportSceneToJson = true;
        return GameConfig;
    }());
    GameConfig.init();

    var benDiData;
    (function (benDiData) {
        var YaoQingData = (function () {
            function YaoQingData() {
            }
            return YaoQingData;
        }());
        benDiData.YaoQingData = YaoQingData;
    })(benDiData || (benDiData = {}));
    var WangLuoData;
    (function (WangLuoData) {
        var UserInfo = (function () {
            function UserInfo() {
                this.openId = "";
                this.nick = "";
                this.avatarUrl = "";
                this.sex = 0;
                this.sessionKey = "";
                this.accessToken = "";
            }
            return UserInfo;
        }());
        WangLuoData.UserInfo = UserInfo;
        var WanJiaData = (function () {
            function WanJiaData() {
                this.lastTime = null;
                this.gold = 2000;
                this.snacks = 0;
                this.lottery = { fish: 0, fishVideo: 1 };
                this.curMaxCompLv = 1;
            }
            return WanJiaData;
        }());
        WangLuoData.WanJiaData = WanJiaData;
        var YaoQing = (function () {
            function YaoQing() {
                this.inviteId = [];
            }
            return YaoQing;
        }());
        WangLuoData.YaoQing = YaoQing;
        var YaoQingRen = (function () {
            function YaoQingRen() {
            }
            return YaoQingRen;
        }());
        WangLuoData.YaoQingRen = YaoQingRen;
    })(WangLuoData || (WangLuoData = {}));

    var HttpManager = (function () {
        function HttpManager() {
            this.printLog = true;
            this.defaultTimeOut = 5000;
        }
        HttpManager.getInstance = function () {
            if (!HttpManager.instance_) {
                HttpManager.instance_ = new HttpManager();
            }
            return HttpManager.instance_;
        };
        HttpManager.prototype.sendGetHttpReq = function (url, data, secces, fail, type, responseType) {
            var _this = this;
            if (data === void 0) { data = null; }
            if (secces === void 0) { secces = null; }
            if (fail === void 0) { fail = null; }
            if (type === void 0) { type = "get"; }
            console.log("url ->", url);
            var jsonStr = data ? JSON.stringify(data) : "null";
            var param = '';
            param = this.getEncodeParam(data);
            if (this.printLog) {
                var date = new Date();
                console.log("HTTP Send :[" + date.toTimeString() + " time:" + date.getTime() + "]  \n    send data: " + jsonStr);
            }
            var httpRequest = Laya.Pool.getItemByClass("HttpRequest", Laya.HttpRequest);
            httpRequest.http.timeout = this.defaultTimeOut;
            var httpRequests = httpRequest.http;
            httpRequests.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            httpRequest.http.ontimeout = function () {
                console.log('ontimeout');
                if (fail) {
                    fail(null);
                    TipsManager.getInstance().showDefaultTips("网络请求超时！");
                }
                httpRequest.http.ontimeout = null;
                Laya.Pool.recover("HttpRequest", httpRequest);
            };
            httpRequest.once(Laya.Event.COMPLETE, this, function (rev) {
                if (secces) {
                    secces(JSON.parse(rev));
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.once(Laya.Event.ERROR, this, function (e) {
                if (_this.printLog) {
                    var date = new Date();
                    console.log("HTTP Error :[" + date.toTimeString() + " time:" + date.getTime() + "]");
                }
                if (fail) {
                    fail(e);
                    TipsManager.getInstance().showDefaultTips("你的网络已断开，请检查设置。");
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.send(url + param, param, type, "text");
        };
        HttpManager.prototype.sendHttpReqDY = function (url, data, secces, fail, type, responseType) {
            var _this = this;
            if (data === void 0) { data = null; }
            if (secces === void 0) { secces = null; }
            if (fail === void 0) { fail = null; }
            if (type === void 0) { type = "post"; }
            if (type == "get" && data) {
                url += Utils.querStr(data);
            }
            console.log("url ->", url);
            var jsonStr = data ? JSON.stringify(data) : "null";
            if (this.printLog) {
                var date = new Date();
                console.log("HTTP Send :[" + date.toTimeString() + " time:" + date.getTime() + "]  \n    send data: " + jsonStr);
            }
            var httpRequest = Laya.Pool.getItemByClass("HttpRequest", Laya.HttpRequest);
            httpRequest.http.timeout = this.defaultTimeOut;
            httpRequest.http.ontimeout = function () {
                console.log("ontimeout");
                if (fail) {
                    fail(null);
                    TipsManager.getInstance().showDefaultTips("网络请求超时！");
                }
                httpRequest.http.ontimeout = null;
                Laya.Pool.recover("HttpRequest", httpRequest);
            };
            httpRequest.once(Laya.Event.COMPLETE, this, function (rev) {
                if (secces) {
                    secces(JSON.parse(rev));
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.once(Laya.Event.ERROR, this, function (e) {
                if (_this.printLog) {
                    var date = new Date();
                    console.log("HTTP Error :[" + date.toTimeString() + " time:" + date.getTime() + "]");
                }
                if (fail) {
                    fail(e);
                    TipsManager.getInstance().showDefaultTips("你的网络已断开，请检查设置。");
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            if (type == "get") {
                httpRequest.send(url);
                return;
            }
            httpRequest.send(url, data ? jsonStr : null, "post", "text");
        };
        HttpManager.prototype.getEncodeParam = function (data) {
            var param = '';
            if (data) {
                if (data instanceof String) {
                    return data;
                }
                var arr = [];
                for (var obj in data) {
                    arr.push(obj + '=' + data[obj]);
                }
                param = arr.join('&');
            }
            return param;
        };
        HttpManager.prototype.sendPostHttpReq = function (url, data, secces, fail, type, showParse) {
            var _this = this;
            if (data === void 0) { data = null; }
            if (secces === void 0) { secces = null; }
            if (fail === void 0) { fail = null; }
            if (type === void 0) { type = "post"; }
            if (showParse === void 0) { showParse = true; }
            console.log("url ->", url);
            var param;
            if (showParse) {
                param = this.getEncodeParam(data);
            }
            param = data;
            var httpRequest = Laya.Pool.getItemByClass("HttpRequest", Laya.HttpRequest);
            httpRequest.http.timeout = this.defaultTimeOut;
            httpRequest.http.ontimeout = function () {
                console.log('ontimeout');
                if (fail) {
                    fail(null);
                    TipsManager.getInstance().showDefaultTips("网络请求超时！");
                }
                httpRequest.http.ontimeout = null;
                Laya.Pool.recover("HttpRequest", httpRequest);
            };
            httpRequest.once(Laya.Event.COMPLETE, this, function (rev) {
                if (secces) {
                    secces(rev);
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.once(Laya.Event.ERROR, this, function (e) {
                if (_this.printLog) {
                    var date = new Date();
                    console.log("HTTP Error :[" + date.toTimeString() + " time:" + date.getTime() + "]");
                }
                if (fail) {
                    fail(e);
                    TipsManager.getInstance().showDefaultTips("你的网络已断开，请检查设置。");
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.send(url, param, type, "json");
        };
        HttpManager.prototype.sendHttpReq = function (url, data, secces, fail, type, responseType) {
            var _this = this;
            if (data === void 0) { data = null; }
            if (secces === void 0) { secces = null; }
            if (fail === void 0) { fail = null; }
            if (type === void 0) { type = "post"; }
            console.log("url ->", url);
            var jsonStr = data ? JSON.stringify(data) : "null";
            if (this.printLog) {
                var date = new Date();
                console.log("HTTP Send :[" + date.toTimeString() + " time:" + date.getTime() + "]  \n    send data: " + jsonStr);
            }
            var httpRequest = Laya.Pool.getItemByClass("HttpRequest", Laya.HttpRequest);
            httpRequest.http.timeout = this.defaultTimeOut;
            httpRequest.http.ontimeout = function () {
                console.log('ontimeout');
                if (fail) {
                    fail(null);
                    TipsManager.getInstance().showDefaultTips("网络请求超时！");
                }
                httpRequest.http.ontimeout = null;
                Laya.Pool.recover("HttpRequest", httpRequest);
            };
            httpRequest.once(Laya.Event.COMPLETE, this, function (rev) {
                if (secces) {
                    secces(JSON.parse(rev));
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.once(Laya.Event.ERROR, this, function (e) {
                if (_this.printLog) {
                    var date = new Date();
                    console.log("HTTP Error :[" + date.toTimeString() + " time:" + date.getTime() + "]");
                }
                if (fail) {
                    fail(e);
                    TipsManager.getInstance().showDefaultTips("你的网络已断开，请检查设置。");
                }
                Laya.Pool.recover("HttpRequest", httpRequest);
            });
            httpRequest.send(url, data ? jsonStr : null, type, "text");
        };
        return HttpManager;
    }());

    var UtilsDY = (function () {
        function UtilsDY() {
        }
        UtilsDY.objTPC = function (obj) {
            if (obj == null)
                return '';
            var arr = [];
            for (var key in obj) {
                arr.push(key + '=' + obj[key]);
            }
            var str = arr.join('&');
            arr = null;
            return str;
        };
        return UtilsDY;
    }());

    var EGType;
    (function (EGType) {
        EGType[EGType["e_EGType_GH"] = 1] = "e_EGType_GH";
        EGType[EGType["e_EGType_N"] = 2] = "e_EGType_N";
        EGType[EGType["e_EGType_RS"] = 3] = "e_EGType_RS";
        EGType[EGType["e_EGType_CL"] = 4] = "e_EGType_CL";
    })(EGType || (EGType = {}));
    var PType;
    (function (PType) {
        PType[PType["e_GType_Sp"] = 1] = "e_GType_Sp";
        PType[PType["e_GType_G"] = 2] = "e_GType_G";
    })(PType || (PType = {}));
    var SStatus;
    (function (SStatus) {
        SStatus[SStatus["e_SState_H"] = 1] = "e_SState_H";
        SStatus[SStatus["e_SState_NO"] = 2] = "e_SState_NO";
        SStatus[SStatus["e_SState_U"] = 3] = "e_SState_U";
    })(SStatus || (SStatus = {}));
    var MGIndex = (function () {
        function MGIndex() {
            this.ad_id = 0;
            this.ad_img = "";
            this.name = "";
            this.ad_appid = "";
            this.url = "";
        }
        return MGIndex;
    }());
    var MoreGameIndex = (function () {
        function MoreGameIndex() {
            this.ad_id = 0;
            this.ad_img = "";
            this.name = "";
            this.ad_appid = "";
            this.url = "";
        }
        return MoreGameIndex;
    }());

    var PlatformDY = (function () {
        function PlatformDY() {
        }
        PlatformDY.prototype.getParams = function () {
            if (DeviceUtil.isWXMiniGame()) ;
            else if (DeviceUtil.isQQMiniGame()) ;
            else if (DeviceUtil.isTTMiniGame()) ;
            return '';
        };
        PlatformDY.getTTOpenidAndAuthorzia = function (obj) {
            var data = UtilsDY.objTPC(obj);
            return new Promise(function (resolve) {
                HttpManager.getInstance().sendHttpReqDY(PlatformDY.url + "&act=userinfo" + "&", obj, function (rev) {
                    var jsonRev = rev.data;
                    PlatformDY.openid = jsonRev.openid;
                    console.log("DY---> authorzia rev = " + rev);
                    resolve(jsonRev);
                }, null, "get");
            });
        };
        PlatformDY.getOpenidAndAuthorzia = function (obj) {
            return new Promise(function (resolve) {
                HttpManager.getInstance().sendHttpReqDY(PlatformDY.url + "&act=userinfo&version=" + PlatformDY.version + "&", obj, function (rev) {
                    var jsonRev = rev.data;
                    PlatformDY.openid = jsonRev.openid;
                    console.log("DY---> authorzia rev = ", rev);
                    resolve(jsonRev);
                }, null, "get");
            });
        };
        PlatformDY.startGame = function () {
            return new Promise(function (resolve) {
                HttpManager.getInstance().sendHttpReqDY(PlatformDY.url + "&act=index&version=" + PlatformDY.version + "&openid=" + PlatformDY.openid + "&", null, function (rev) {
                    var jsonRev = rev.data;
                    console.log("DY---> startGame rev = ", rev);
                    PlatformDY.nGameID = jsonRev.id;
                    resolve(jsonRev);
                }, null, "get");
            });
        };
        PlatformDY.endGame = function (obj) {
            return new Promise(function (resolve) {
                HttpManager.getInstance().sendHttpReqDY(PlatformDY.url + "&act=end&version=" + PlatformDY.version + "&openid=" + PlatformDY.openid + "&", obj, function (rev) {
                    var jsonRev = rev.data;
                    console.log("DY---> endGame rev = ", rev);
                    resolve(jsonRev);
                }, null, "get");
            });
        };
        PlatformDY.clickGame = function (id) {
            HttpManager.getInstance().sendHttpReqDY(PlatformDY.url + "&act=game&version=" + PlatformDY.version + "&id=" + id + "&openid=" + PlatformDY.openid, null, function (rev) {
                console.log("DY---> clickGame rev = ", rev);
            }, null, "get");
        };
        PlatformDY.toGame = function (id) {
            HttpManager.getInstance().sendHttpReqDY(PlatformDY.url + "&act=cgame&version=" + PlatformDY.version + "&id=" + id + "&openid=" + PlatformDY.openid, null, function (rev) {
                console.log("DY---> toGame rev = ", rev);
            }, null, "get");
        };
        PlatformDY.delSameFlag = function (arr) {
            if (arr == null)
                return null;
            var len = arr.length;
            var obj = {};
            for (var i = 0; i < len; i++) {
                obj[arr[i].id] = arr[i];
            }
            var newArr = [];
            for (var id in obj) {
                newArr.push(obj[id]);
            }
            return newArr;
        };
        PlatformDY.getGameList = function () {
            return new Promise(function (resolve) {
                var url = PlatformDY.url + "&act=gamelist&version=" + PlatformDY.version + "&openid=" + PlatformDY.openid + "&v=" + Math.random();
                HttpManager.getInstance().sendHttpReqDY(url, null, function (rev) {
                    console.log("DY---> getGameList rev = ", rev);
                    PlatformDY.bannerInfos = rev.data.banner;
                    PlatformDY.gameListInfos = PlatformDY.delSameFlag(rev.data.gamelist);
                    resolve(rev.data);
                }, null, "get");
            });
        };
        PlatformDY.initBoxView = function (adUnitId) {
            PlatformDY.boxView = platform.createAppBox(adUnitId);
            PlatformDY.boxView.load();
            PlatformDY.boxView.onClose(PlatformDY.boxViewClose);
        };
        PlatformDY.boxViewClose = function () {
            console.log("qq boxView close");
            if (PlatformDY.tempCloseBoxViewCallFunc) {
                PlatformDY.tempCloseBoxViewCallFunc.apply(PlatformDY.tempCloseBoxViewCallObj, PlatformDY.tempCloseBoxViewCallParam);
                PlatformDY.tempCloseBoxViewCallFunc = null;
            }
        };
        PlatformDY.showBoxView = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!PlatformDY.boxView) {
                                console.error("boxView not init!!!!!!!!!");
                            }
                            return [4, PlatformDY.boxView.show()];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        PlatformDY.refreshGameList = function () {
            PlatformDY.getGameList().then(function () {
                GDataMgr.getInstance().weCatMoreInfo = [];
                var nLen = 0;
                if (PlatformDY.gameListInfos)
                    nLen = PlatformDY.gameListInfos.length;
                for (var i = 0; i < nLen; ++i) {
                    var stData = new MoreGameIndex();
                    stData.ad_id = PlatformDY.gameListInfos[i].id;
                    stData.ad_img = PlatformDY.gameListInfos[i].img;
                    stData.name = PlatformDY.gameListInfos[i].title;
                    stData.ad_appid = PlatformDY.gameListInfos[i].appid;
                    stData.url = PlatformDY.gameListInfos[i].url;
                    GDataMgr.getInstance().weCatMoreInfo.push(stData);
                }
                console.log("GameData.getInstance().weCatMiniIconsInfo = ", GDataMgr.getInstance().weCatMoreInfo);
            });
        };
        PlatformDY.url = "https://zy.qkxz.com/WxApi/?webid=69";
        PlatformDY.qqUrl = "https://fxqq.xyxapi.com/home/?webid=18";
        PlatformDY.ttUrl = "https://fxqq.xyxapi.com/home/?webid=32";
        PlatformDY.version = 1;
        PlatformDY.nGameID = 0;
        return PlatformDY;
    }());

    var GameStatusMgr = (function () {
        function GameStatusMgr() {
            this.nLevelStatus = EGType.e_EGType_GH;
        }
        GameStatusMgr.getInstance = function () {
            if (!GameStatusMgr.instance) {
                GameStatusMgr.instance = new GameStatusMgr();
            }
            return GameStatusMgr.instance;
        };
        Object.defineProperty(GameStatusMgr.prototype, "levelStatus", {
            get: function () {
                return this.nLevelStatus;
            },
            set: function (nState) {
                this.nLevelStatus = nState;
            },
            enumerable: true,
            configurable: true
        });
        return GameStatusMgr;
    }());

    var InviteMgr = (function () {
        function InviteMgr() {
            this._url = GDataMgr.getInstance().URL_OF_INVITE;
            this.inviterrInfo = new WangLuoData.YaoQingRen();
            this.newPlayers = [];
        }
        InviteMgr.getInstance = function () {
            if (!InviteMgr._ins) {
                InviteMgr._ins = new InviteMgr();
            }
            return InviteMgr._ins;
        };
        InviteMgr.prototype.chaXunInfo = function (callF, obj) {
            var _this = this;
            if (callF === void 0) { callF = null; }
            if (obj === void 0) { obj = null; }
            var gameId = GDataMgr.getInstance().gid;
            var openId = GDataMgr.getInstance().uinfo.openId;
            var msg = {};
            msg.msg_type = "16";
            msg.msg_data = {
                "gameid": gameId,
                "openid": openId
            };
            console.log("查询受邀人列表 ->", msg);
            HttpMgr.getInstance().sendHttp(this._url, msg, function (e) {
                var code = e["msg_data"]["error_code"];
                if (code == "0") {
                    console.log("查询受邀人列表成功 ->", e);
                    if (e["msg_data"]["index_list"] != "") {
                        var newPlayerTemp = e["msg_data"]["index_list"];
                        if (newPlayerTemp) {
                            _this.newPlayers = newPlayerTemp;
                        }
                        console.log("recvnewplayer = ", _this.newPlayers);
                    }
                }
                else {
                    console.warn("查询受邀人列表失败：", "str");
                }
                if (callF && obj) {
                    callF.call(obj, code);
                }
            }, function (e) { });
        };
        InviteMgr.prototype.addInfo = function (callF, obj) {
            if (callF === void 0) { callF = null; }
            if (obj === void 0) { obj = null; }
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, new Promise(function (res, rej) {
                                var inviterOpenId = _this.inviterrInfo.openId;
                                var tx_url = GDataMgr.getInstance().uinfo.avatarUrl;
                                var nick = GDataMgr.getInstance().uinfo.nick;
                                var gameId = GDataMgr.getInstance().gid;
                                var msg = {};
                                msg.msg_type = "14";
                                msg.msg_data = {
                                    "openid": inviterOpenId,
                                    "url": tx_url,
                                    "name": nick,
                                    "gameid": gameId
                                };
                                console.log("关联自己及邀请人 ->", msg, " game id = ", GDataMgr.getInstance().gid);
                                HttpMgr.getInstance().sendHttp(_this._url, msg, function (e) {
                                    var code = e["msg_data"]["error_code"];
                                    if (code == "0") {
                                        console.log("关联自己及邀请人成功...");
                                    }
                                    else {
                                        var str = code.toString();
                                        console.warn("关联自己及邀请人失败：", str);
                                    }
                                    if (callF && obj) {
                                        callF.call(obj, code);
                                    }
                                    res();
                                }, function (e) { });
                            })];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        InviteMgr.prototype.getInviteAwdData = function () {
            var inviteConfig = ConfigMgr.getInstance().getYQConfI();
            var lingqu = PlayerDataMgr.getInstance().stPlayerDataBase.inviteId;
            var invitePlayer = this.newPlayers;
            var dataArr = [];
            for (var i = 0, len = inviteConfig.length; i < len; i++) {
                var invite = inviteConfig[i];
                var awardId = invite.ID;
                var canLingqu = false;
                var lingqued = false;
                var player = null;
                if (invitePlayer.length - 1 >= i) {
                    player = invitePlayer[i];
                }
                if (lingqu.indexOf(awardId) > -1)
                    lingqued = true;
                if (player)
                    canLingqu = true;
                var data = new benDiData.YaoQingData();
                data.id = awardId;
                data.head = player ? player["url"] : "";
                data.reward = invite.nCount;
                data.lingqued = lingqued;
                data.canLingqu = canLingqu;
                dataArr.push(data);
            }
            return dataArr;
        };
        InviteMgr.prototype.checkInvite = function () {
            var _this = this;
            return new Promise(function (resolve) {
                var res = GDataMgr.getInstance().eGInfos;
                console.log("开始关联邀请人", res);
                console.log("自己信息", GDataMgr.getInstance().uinfo);
                if (res) {
                    var scene = res.scene;
                    if (scene == 1007 || scene == 1008 || scene == 1044) {
                        if (GDataMgr.getInstance().uinfo.openId && res.query && res.query["openid"]) {
                            _this.inviterrInfo.nick = res.query["nick"];
                            _this.inviterrInfo.openId = res.query["openid"];
                            if (GDataMgr.getInstance().uinfo.openId != _this.inviterrInfo.openId) {
                                console.log("关联邀请人", res.query);
                                _this.addInfo();
                            }
                        }
                    }
                    resolve();
                }
                else {
                    resolve();
                }
            });
        };
        return InviteMgr;
    }());

    var AnimationMgr = (function () {
        function AnimationMgr() {
        }
        Object.defineProperty(AnimationMgr, "instance", {
            get: function () {
                if (AnimationMgr._ins == null) {
                    AnimationMgr._ins = new AnimationMgr();
                }
                return AnimationMgr._ins;
            },
            enumerable: true,
            configurable: true
        });
        AnimationMgr.prototype.getAtlasAnimationa = function (url, fex) {
            url = url + fex;
            return new Promise(function (resolve) {
                var roleAni = new Laya.Animation();
                roleAni.loadAtlas(url, Laya.Handler.create(null, function () {
                    resolve(roleAni);
                }));
            });
        };
        AnimationMgr.prototype.scaleTweena = function (target, caller, duration, complete, props, ease) {
            if (duration === void 0) { duration = 500; }
            target.visible = true;
            target.scale(0.8, 0.8);
            Laya.Tween.to(target, { scaleX: 1, scaleY: 1 }, duration, ease, Laya.Handler.create(caller, function () {
                complete && complete();
            }));
        };
        AnimationMgr.prototype.scaleBTweena = function (target, caller, duration, complete, props, ease) {
            if (duration === void 0) { duration = 500; }
            target.scale(1.1, 1.1);
            Laya.Tween.to(target, { scaleX: 1, scaleY: 1 }, duration, ease, Laya.Handler.create(caller, function () {
                complete && complete();
            }));
        };
        AnimationMgr.prototype.upToDownTweena = function (target, props, duration, caller, ease, complete) {
            Laya.Tween.to(target, props, duration, ease, Laya.Handler.create(caller, function () {
                complete && complete();
            }));
        };
        AnimationMgr.prototype.showSkeAnimation = function (url, callBack, aniMode) {
            console.log(url);
            var boomAnimation = new Laya.Skeleton();
            boomAnimation.load(url, Laya.Handler.create(this, function () {
                if (boomAnimation.player == null)
                    return;
                boomAnimation.player.playbackRate = 1;
                callBack && callBack(boomAnimation);
            }), aniMode);
        };
        AnimationMgr.prototype.show2dBoonAnimationa = function (url, dbBox, index, loop, rate, x, y, rotation) {
            var _this = this;
            return new Promise(function (resolve) {
                var self = _this;
                dbBox.removeChildren();
                var boomAnimation = new Laya.Skeleton();
                boomAnimation.load(url, Laya.Handler.create(self, function () {
                    if (!boomAnimation.player) {
                        resolve();
                        return;
                    }
                    boomAnimation.player.playbackRate = rate;
                    boomAnimation.player.once(Laya.Event.STOPPED, self, function () {
                        resolve();
                    });
                    boomAnimation.scale(2, 2);
                    dbBox.addChild(boomAnimation);
                    boomAnimation.x = x;
                    boomAnimation.y = y;
                    boomAnimation.rotation = rotation;
                    boomAnimation.play(index, loop);
                }));
            });
        };
        AnimationMgr.prototype.flaTweena = function (target, caller) {
            var alp = 0;
            Laya.timer.loop(20, caller, function () {
                alp += 0.04;
                var alpVaule = Math.abs(Math.sin(alp) * 0.5) + 0.5;
                target.alpha = alpVaule;
            });
        };
        AnimationMgr.prototype.swingHeadTweena = function (target, caller) {
            var scaleDelta = 0;
            var posY = target.y;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 6;
                target.y = scaleVaule + posY;
            });
        };
        AnimationMgr.prototype.swingBodyTweena = function (target, caller) {
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 0.05 + 1;
                target.scale(scaleVaule, scaleVaule);
            });
        };
        AnimationMgr.prototype.flayGloda = function (xSrc, ySrc, xObj, yObj) {
            var _this = this;
            var iTeme = 30;
            var nCount = 10;
            var goldArr = [];
            for (var i = 0; i < nCount; i++) {
                var goldImg = Laya.Pool.getItem("goods");
                if (!goldImg)
                    goldImg = new Laya.Image();
                goldImg.skin = "resource/assets/img/common/maininterface_icon_6.png";
                Laya.stage.addChild(goldImg);
                goldImg.x = xSrc;
                goldImg.y = ySrc;
                goldArr.push(goldImg);
            }
            var _loop_1 = function (i) {
                Laya.timer.once(i * iTeme, this_1, function () {
                    Laya.Tween.to(goldArr[i], { x: xObj, y: yObj }, 200, null, Laya.Handler.create(_this, function () {
                        Laya.stage.removeChild(goldArr[i]);
                        Laya.Pool.recover("goods", goldArr[i]);
                    }));
                });
            };
            var this_1 = this;
            for (var i = 0; i < goldArr.length; i++) {
                _loop_1(i);
            }
        };
        AnimationMgr.prototype.displayTwinklea = function (target, prefix, caller) {
            var index = 1;
            Laya.timer.loop(500, caller, function () {
                target.skin = prefix + index + ".png";
                index = index == 1 ? 2 : 1;
            });
        };
        AnimationMgr.prototype.frameAnia = function (target, prefix, caller, frameNum, time) {
            if (time === void 0) { time = 100; }
            var index = 1;
            Laya.timer.loop(time, caller, function () {
                target.skin = prefix + index + ".png";
                index++;
                if (index > frameNum)
                    index = 1;
            });
        };
        AnimationMgr.prototype.zoomTweena = function (target, caller, scaleD) {
            if (scaleD === void 0) { scaleD = 0.08; }
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += scaleD;
                var scaleVaule = Math.sin(scaleDelta) * 0.1 + 1;
                target.scale(scaleVaule, scaleVaule);
            });
        };
        AnimationMgr.prototype.zoomImgTweena = function (target, caller) {
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 0.02 + 1;
                target.rotation += Math.sin(scaleDelta) * 0.02;
                target.scale(scaleVaule, scaleVaule);
            });
        };
        AnimationMgr.prototype.titleImgTweena = function (target, caller) {
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                target.rotation += Math.sin(scaleDelta) * 0.2;
            });
        };
        AnimationMgr.prototype.VTweena = function (target, caller, ds) {
            if (ds === void 0) { ds = 1; }
            var xDelta = 0;
            Laya.timer.loop(20, caller, function () {
                xDelta += 0.04;
                var xVaule = Math.sin(xDelta) * ds;
                target.x += xVaule;
            });
        };
        AnimationMgr.prototype.HTween = function (target, caller, ds) {
            if (ds === void 0) { ds = 1; }
            var xDelta = 0;
            Laya.timer.loop(20, caller, function () {
                xDelta += 0.04;
                var xVaule = Math.sin(xDelta) * ds;
                target.x += xVaule;
            });
        };
        AnimationMgr.prototype.VTween = function (target, caller, ds) {
            if (ds === void 0) { ds = 1; }
            var yDelta = 0;
            Laya.timer.loop(1, caller, function () {
                yDelta += 0.1;
                var yVaule = Math.sin(yDelta) * ds;
                target.y += yVaule;
            });
        };
        return AnimationMgr;
    }());

    var SoundConstC = (function () {
        function SoundConstC() {
        }
        SoundConstC.getKeyUrlC = function (key) {
            if (DeviceUtil.isNative()) {
                return "resource/assets/sounds/ogg/" + key + SoundConstC.sufixogg;
            }
            return "resource/assets/sounds/" + key + SoundConstC.sufix;
        };
        SoundConstC.Bgm = "bgm";
        SoundConstC.Btn_1 = "btn_1";
        SoundConstC.sufix = ".mp3";
        SoundConstC.sufixogg = ".ogg";
        return SoundConstC;
    }());

    var SoundMgr = (function () {
        function SoundMgr() {
            this._shakeIsOpen = true;
            this._soundIsOpen = true;
            this.effectPool = {};
            this._musicOpen = true;
            this.isEnterView = false;
            this._bgm = 'bg';
            this._bgvolume = 1;
            this.effectPools = {};
            this.onPlaySoundNum = 0;
            this.effectVolume = 1;
            this._soundOpen = true;
        }
        SoundMgr.getInstance = function () {
            if (!SoundMgr.instance) {
                SoundMgr.instance = new SoundMgr();
            }
            return SoundMgr.instance;
        };
        Object.defineProperty(SoundMgr.prototype, "shakeIsOpen", {
            get: function () {
                return this._shakeIsOpen;
            },
            set: function (isOpen) {
                this._shakeIsOpen = isOpen;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SoundMgr.prototype, "soundIsOpen", {
            get: function () {
                return this._soundIsOpen;
            },
            set: function (isOpen) {
                this._soundIsOpen = isOpen;
                this.musicOpen = isOpen;
                this.soundOpen = isOpen;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SoundMgr.prototype, "musicOpen", {
            get: function () {
                return this._musicOpen;
            },
            set: function (value) {
                this._musicOpen = value;
                if (value) {
                    this.playBgm();
                }
                else {
                    this.stopBgMusic();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SoundMgr.prototype, "bgm", {
            get: function () {
                return this._bgm;
            },
            set: function (bgm) {
                if (!this._bgm || this._bgm != bgm) {
                    this._bgm = bgm;
                    this.playBgm();
                }
                else if (this._bgm == bgm) {
                    this.stopBgMusic();
                    this.playBgm();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SoundMgr.prototype, "bgvolume", {
            get: function () {
                return this._bgvolume;
            },
            set: function (value) {
                this.musicChannel && (this.musicChannel.volume = value);
                this._bgvolume = value;
            },
            enumerable: true,
            configurable: true
        });
        SoundMgr.prototype.playBgm = function () {
            if (!this.isEnterView) {
                return;
            }
            console.log("playBgm >>>", this._bgm, this.musicOpen);
            if (!this._bgm)
                return;
            if (!this.musicOpen)
                return;
            this.playYinYue();
        };
        SoundMgr.prototype.playYinYue = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _url, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!this.soundChannel) return [3, 1];
                            this.soundChannel.resume();
                            return [3, 3];
                        case 1:
                            _url = ResUtil.getIntance().defaultOriginUrl + "resource/assets/sounds/" + this._bgm + ".mp3";
                            console.log("bgm url >>>", _url);
                            _a = this;
                            return [4, Laya.SoundManager.playMusic(_url, 0)];
                        case 2:
                            _a.soundChannel = _b.sent();
                            _b.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        SoundMgr.prototype.pauseBgm = function () {
            console.log("pauseBgm >>>");
            this.soundChannel && this.soundChannel.pause();
        };
        SoundMgr.prototype.stopBgMusic = function () {
            console.log("stopBgm >>>");
            Laya.SoundManager.stopMusic();
            this.soundChannel = null;
        };
        Object.defineProperty(SoundMgr.prototype, "soundOpen", {
            get: function () {
                return this._soundOpen;
            },
            set: function (_soundOpen) {
                this._soundOpen = _soundOpen;
            },
            enumerable: true,
            configurable: true
        });
        SoundMgr.prototype.destoryOneSound = function (soundName) {
            var _url = SoundConstC.getKeyUrlC(soundName);
            if (DeviceUtil.isMiniGame()) {
                _url = Laya.URL.basePath + _url;
            }
            Laya.loader.clearRes(_url);
            this.effectPool[_url].destroy();
            this.effectPool[_url] = null;
            this.effectPools[_url].destroy();
            this.effectPools[_url] = null;
        };
        SoundMgr.prototype.playNativeEffect = function (_url) {
            Laya.SoundManager.playSound(Laya.URL.basePath + _url);
        };
        SoundMgr.prototype.playEffect = function (soundUrl, times) {
            return __awaiter(this, void 0, void 0, function () {
                var _url, sound, soundChannel, soundChannel;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _url = SoundConstC.getKeyUrlC(soundUrl);
                            if (DeviceUtil.isNative()) {
                                this.playNativeEffect(_url);
                                return [2];
                            }
                            if (this._soundOpen == false || !soundUrl || soundUrl == "")
                                return [2];
                            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                                return [2, this.playMiniGameEffect(Laya.URL.basePath + _url)];
                            }
                            sound = this.effectPool[soundUrl];
                            if (!(!sound || !sound.audioBuffer || !sound._disposed)) return [3, 2];
                            return [4, ResUtil.getIntance().getAsyncRESByUrl(_url)];
                        case 1:
                            sound = _a.sent();
                            if (sound) {
                                this.effectPool[soundUrl] = sound;
                                soundChannel = sound.play(0, times);
                                soundChannel.volume = this.effectVolume;
                                return [2, soundChannel];
                            }
                            return [3, 3];
                        case 2:
                            soundChannel = sound.play(0, times);
                            if (soundChannel) {
                                soundChannel.play();
                            }
                            soundChannel.volume = this.effectVolume;
                            return [2, soundChannel];
                        case 3: return [2];
                    }
                });
            });
        };
        SoundMgr.prototype.stopEffect = function (soundUrl) {
            var stLayaSound = this.effectPool[soundUrl];
            if (stLayaSound) {
                stLayaSound.dispose;
            }
        };
        SoundMgr.prototype.playMiniGameEffect = function (soundUrl) {
            if (DeviceUtil.isWXMiniGame() || DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) {
                var innerAudioContext_1 = this.effectPools[soundUrl];
                if (!innerAudioContext_1) {
                    SoundMgr.getInstance().effectPools[soundUrl] = innerAudioContext_1 = platform.createInnerAudioContext();
                    innerAudioContext_1.autoplay = true;
                    innerAudioContext_1.src = soundUrl;
                    innerAudioContext_1.onError(function () {
                        innerAudioContext_1.destroy();
                        SoundMgr.getInstance().effectPools[soundUrl] = null;
                    });
                    innerAudioContext_1.onStop(function () {
                        innerAudioContext_1.destroy();
                        SoundMgr.getInstance().effectPools[soundUrl] = null;
                    });
                }
                innerAudioContext_1.play();
                return innerAudioContext_1;
            }
            var miniSounds = this.effectPools[soundUrl];
            if (!miniSounds) {
                this.effectPools[soundUrl] = miniSounds = [];
            }
            var miniSound;
            if (miniSounds.length < 1) {
                miniSound = new MiniGameSound();
                miniSound.create(soundUrl);
            }
            else {
                miniSound = miniSounds.shift();
                if (miniSound.isEnded == false) {
                    miniSound = new MiniGameSound();
                    miniSound.create(soundUrl);
                }
                else {
                    miniSound.play();
                }
            }
            this.onPlaySoundNum += 1;
        };
        return SoundMgr;
    }());
    var MiniGameSound = (function () {
        function MiniGameSound() {
        }
        MiniGameSound.prototype.create = function (soundUrl) {
            var _this = this;
            this.innerAudioContext = platform.createInnerAudioContext();
            this.innerAudioContext.onEnded(function () {
                _this.isEnded = true;
                SoundMgr.getInstance().effectPools[_this.soundUrl].push(_this);
                SoundMgr.getInstance().onPlaySoundNum -= 1;
            });
            this.isEnded = false;
            this.soundUrl = soundUrl;
            this.innerAudioContext.src = soundUrl;
            this.innerAudioContext.autoplay = true;
        };
        MiniGameSound.prototype.play = function () {
            this.innerAudioContext.play();
        };
        return MiniGameSound;
    }());

    var GEvent = (function () {
        function GEvent() {
        }
        GEvent.O_PS_CG = "ON_PS_CG";
        GEvent.O_G_CG = "O_G_CG";
        GEvent.O_SP_UD_T = "O_SP_UD_T";
        GEvent.RF_IV = "RF_IV";
        GEvent.E_F_GD = "E_F_GD";
        GEvent.C_V_IMG = "C_V_IMG";
        return GEvent;
    }());
    window['GEvent'] = GEvent;

    var BaseUIScene = (function (_super) {
        __extends(BaseUIScene, _super);
        function BaseUIScene() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "BaseUIScene";
            _this.eventPool = [];
            return _this;
        }
        BaseUIScene.prototype.registerEvent = function (target, type, callback, callbackobj) {
            target.on(type, callbackobj, callback);
            this.eventPool.push({ target: target, type: type, callback: callback, callbackobj: callbackobj });
        };
        BaseUIScene.prototype.clearEvent = function () {
            var eventPool = this.eventPool;
            if (eventPool.length > 0) {
                for (var i = 0; i < this.eventPool.length; i++) {
                    var target = eventPool[i].target;
                    var type = eventPool[i].type;
                    var callback = eventPool[i].callback;
                    var callbackobj = eventPool[i].callbackobj;
                    if (target) {
                        target.off(type, callbackobj, callback);
                    }
                }
            }
            eventPool = [];
        };
        BaseUIScene.prototype.onDisable = function () {
            this.removeEvent();
        };
        BaseUIScene.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        BaseUIScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.clearEvent();
        };
        BaseUIScene.prototype.removeEvent = function () {
            this.clearEvent();
        };
        BaseUIScene.prototype.initView = function () {
        };
        BaseUIScene.prototype.addEvent = function () {
        };
        return BaseUIScene;
    }(BaseSceneUISkin));

    var InviteItem = (function (_super) {
        __extends(InviteItem, _super);
        function InviteItem(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "InviteItem";
            _this.data = _data;
            _this.skin = "game/uiView/invite/InviteFriendsIndexView.json";
            return _this;
        }
        InviteItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        InviteItem.prototype.adaptationStage = function () {
            this.size(815, 142);
        };
        InviteItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        InviteItem.prototype.addEvent = function () {
            this.registerEvent(this.imgGet, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.imgNull, Laya.Event.CLICK, this.onClick, this);
        };
        InviteItem.prototype.onClick = function (evt) {
            switch (evt.currentTarget) {
                case this.imgGet:
                    this.onGetReward();
                    break;
                case this.imgNull:
                    this.onInvite();
                    break;
            }
        };
        InviteItem.prototype.removeEvent = function () {
            this.data = null;
            _super.prototype.removeEvent.call(this);
        };
        InviteItem.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        InviteItem.prototype.initView = function () {
            if (!this.data)
                return;
            var objData = this.data;
            this.imgGet.visible = this.imgNo.visible = false;
            BitmapLabelUtils.setLabel(this.imgIndex, objData.id + "", "resource/assets/img/ui/invite/invite_number2/invitation_number2_", -10, ".png", "center");
            if (objData.head && objData.head != "") {
                this.imgHead.skin = objData.head;
            }
            else {
                this.imgHead.skin = "";
            }
            BitmapLabelUtils.setLabel(this.imgReward, objData.reward + "", "resource/assets/img/ui/invite/invite_number1/invite_number1_", 0);
            var perFix = "resource/assets/img/ui/invite/invite_button";
            this.imgHead.visible = true;
            this.imgNull.visible = false;
            if (objData.lingqued) {
                this.imgGet.visible = true;
                this.imgGet.mouseEnabled = false;
                this.imgGet.skin = perFix + "_2.png";
            }
            else {
                if (objData.canLingqu) {
                    this.imgGet.visible = true;
                    this.imgGet.mouseEnabled = true;
                    this.imgGet.skin = perFix + "_1.png";
                }
                else {
                    this.imgNo.visible = true;
                    this.imgNull.visible = true;
                    this.imgHead.visible = false;
                }
            }
        };
        InviteItem.prototype.onInvite = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            MiniGameMgr.instance.flagDouYin = false;
            MiniGameMgr.instance.shareAppMsg();
        };
        InviteItem.prototype.onGetReward = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            var pgm = PlayerDataMgr.getInstance();
            pgm.AddProp(PType.e_GType_Sp, this.data.reward);
            pgm.stPlayerDataBase.inviteId.push(this.data.id);
            pgm.SaveData();
            EventMgr.getInstance().sendEvent(GEvent.RF_IV);
        };
        return InviteItem;
    }(BaseUIScene));

    var PopBaseScene = (function (_super) {
        __extends(PopBaseScene, _super);
        function PopBaseScene() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = 'PopBaseScene';
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK_MORE;
            _this.eventPool = [];
            return _this;
        }
        PopBaseScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        PopBaseScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
                this.initMiniGame();
            }
            this.off(Laya.Event.ADDED, this, this.onAddStage);
        };
        PopBaseScene.prototype.initMiniGame = function () {
            this.showBanner({ className_key: this.className_key });
        };
        PopBaseScene.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initMiniGame();
                this.initView();
                this.addEvent();
                this.showEnterAnimation();
            }
        };
        PopBaseScene.prototype.initView = function () { };
        PopBaseScene.prototype.addEvent = function () { };
        PopBaseScene.prototype.removeSelf = function () {
            var node = _super.prototype.removeSelf.call(this);
            return node;
        };
        PopBaseScene.prototype.registerEvent = function (target, type, callback, callbackobj) {
            target.on(type, callbackobj, callback);
            this.eventPool.push({ target: target, type: type, callback: callback, callbackobj: callbackobj });
        };
        PopBaseScene.prototype.clearEvent = function () {
            var eventPool = this.eventPool;
            if (eventPool.length > 0) {
                for (var i = 0; i < this.eventPool.length; i++) {
                    var target = eventPool[i].target;
                    var type = eventPool[i].type;
                    var callback = eventPool[i].callback;
                    var callbackobj = eventPool[i].callbackobj;
                    if (target) {
                        target.off(type, callbackobj, callback);
                    }
                }
            }
            eventPool = [];
        };
        PopBaseScene.prototype.onDisable = function () {
            this.removeEvent();
        };
        PopBaseScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.clearEvent();
        };
        PopBaseScene.prototype.removeEvent = function () {
            this.clearEvent();
        };
        PopBaseScene.prototype.showBanner = function (data) {
            MiniGameMgr.instance.showBanner({ bannerId: data.bannerId, className_key: data.className_key });
        };
        PopBaseScene.prototype.destoryBanner = function () {
            MiniGameMgr.instance.hideBannerAd();
        };
        PopBaseScene.prototype.hideBanner = function () {
            MiniGameMgr.instance.hideBannerAd();
        };
        return PopBaseScene;
    }(BaseSceneUISkinPopView));

    var InviteView = (function (_super) {
        __extends(InviteView, _super);
        function InviteView() {
            var _this = _super.call(this) || this;
            _this.className_key = "InviteView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK_MORE;
            _this.skin = "game/uiView/invite/InviteFriendsView.json";
            return _this;
        }
        InviteView.prototype.initView = function () {
            this.boxConent.removeChildren();
            this.panelConent.vScrollBarSkin = "";
            this.panelConent.elasticEnabled = true;
            this.panelConent.vScrollBar.elasticDistance = 100;
            this.panelConent.vScrollBar.elasticBackTime = 100;
            this.getInvitePlayerInfo();
        };
        InviteView.prototype.addEvent = function () {
            this.registerEvent(this.btnInvite, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnClose, Laya.Event.CLICK, this.onClick, this);
            EventMgr.getInstance().addEvent(GEvent.RF_IV, this, this.refresh);
        };
        InviteView.prototype.onClick = function (evt) {
            switch (evt.currentTarget) {
                case this.btnClose:
                    this.onClose();
                    break;
                case this.btnInvite:
                    this.onInvite();
                    break;
            }
        };
        InviteView.prototype.getInvitePlayerInfo = function () {
            var _this = this;
            InviteMgr.getInstance().chaXunInfo(function (code) {
                if (code == '0') {
                    _this.refresh();
                }
            }, this);
        };
        InviteView.prototype.onClose = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            this.removeEvent();
            this.removeUs();
        };
        InviteView.prototype.onInvite = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            MiniGameMgr.instance.flagDouYin = false;
            MiniGameMgr.instance.shareAppMsg();
        };
        InviteView.prototype.removeEvent = function () {
            EventMgr.getInstance().removeEvent(GEvent.RF_IV, this, this.refresh);
            _super.prototype.removeEvent.call(this);
        };
        InviteView.prototype.refresh = function () {
            var arrData = InviteMgr.getInstance().getInviteAwdData();
            console.log("InviteView >>>>>>> refreshUI", arrData);
            for (var i = 0, len = arrData.length; i < len; i++) {
                var item = this.boxConent.getChildAt(i);
                if (item) {
                    item.setData(arrData[i]);
                }
                else {
                    item = new InviteItem(arrData[i]);
                    item.x = 0;
                    item.y = (128 + 45) * i;
                    this.boxConent.addChild(item);
                }
            }
        };
        return InviteView;
    }(PopBaseScene));

    var AddPowerView = (function (_super) {
        __extends(AddPowerView, _super);
        function AddPowerView() {
            var _this = _super.call(this) || this;
            _this.className_key = "AddPsView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this.skin = "game/uiView/pop/AddSpView.json";
            return _this;
        }
        AddPowerView.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        AddPowerView.prototype.initView = function () {
            var _this = this;
            MiniGameMgr.instance.showChaPinAd();
            ViewChangeMgr.getInstance().commonView.removeBtEvent();
            if (DeviceUtil.isQQMiniGame()) {
                EventMgr.getInstance().sendEvent("SuccBlockShow", false);
            }
            if (DeviceUtil.isVIVOMiniGame()) {
                this.showBanner({ className_key: this.className_key });
            }
            else {
                this.showBanner({ className_key: this.className_key });
            }
            this._nPsAdd = 5;
            var stGameConfigADP = ConfigMgr.getInstance().getGCDBID(3);
            if (stGameConfigADP) {
                this._nPsAdd = parseInt(stGameConfigADP.strValue);
            }
            this.sptext.text = 'x' + this._nPsAdd.toString();
            this.btnExit.visible = false;
            var time = 2000;
            if (DeviceUtil.isOPPOMiniGame()) {
                time = 0;
            }
            Laya.timer.once(time, this, function () {
                _this.btnExit.visible = true;
            });
        };
        AddPowerView.prototype.addEvent = function () {
            this.registerEvent(this.btnGet, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnExit, Laya.Event.CLICK, this.onClick, this);
        };
        AddPowerView.prototype.onClick = function (evt) {
            switch (evt.currentTarget) {
                case this.btnGet:
                    this.addPsByVideoAd();
                    break;
                case this.btnExit:
                    this.onClose();
                    break;
            }
        };
        AddPowerView.prototype.removeEvent = function () {
            _super.prototype.removeEvent.call(this);
        };
        AddPowerView.prototype.addPs = function () {
            if (AddPowerView._bCloseBinner)
                MiniGameMgr.instance.hideBannerAd();
            PlayerDataMgr.getInstance().AddProp(PType.e_GType_Sp, this._nPsAdd);
            this.removeSelf();
        };
        AddPowerView.prototype.addPsByVideoAd = function () {
            var _this = this;
            SoundMgr.getInstance().playEffect("button", 1);
            MiniGameMgr.instance.playVideoAd({
                successFun: function () {
                    ViewChangeMgr.getInstance().commonView.addBtEvent();
                    _this.addPs();
                }
            });
        };
        AddPowerView.prototype.onClose = function () {
            if (AddPowerView._bCloseBinner)
                MiniGameMgr.instance.hideBannerAd();
            SoundMgr.getInstance().playEffect("button", 1);
            ViewChangeMgr.getInstance().commonView.addBtEvent();
            this.removeSelf();
        };
        AddPowerView.prototype.onRemoved = function () {
            this.removeEvent();
            if (DeviceUtil.isQQMiniGame()) {
                EventMgr.getInstance().sendEvent("SuccBlockShow", true);
            }
        };
        AddPowerView._bCloseBinner = true;
        return AddPowerView;
    }(PopBaseScene));

    var LevelViewItem = (function (_super) {
        __extends(LevelViewItem, _super);
        function LevelViewItem(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "LevelViewItem";
            _this._nCurLevel = data_;
            _this.skin = "game/uiView/choose/LevelIndexView.json";
            return _this;
        }
        LevelViewItem.prototype.adaptationStage = function () {
            this.width = 839;
            this.height = 143;
            this.pivotX = 839 / 2;
            this.pivotY = 143 / 2;
        };
        LevelViewItem.prototype.onEnable = function () {
            this.on(Laya.Event.CLICK, this, this.enterLevel);
        };
        LevelViewItem.prototype.onDisable = function () {
            this.off(Laya.Event.CLICK, this, this.enterLevel);
            Laya.Tween.clearAll(this);
        };
        LevelViewItem.prototype.childrenCreated = function () {
            this.refreshView();
        };
        LevelViewItem.prototype.refreshView = function () {
            this._bAni = false;
            this.tips.visible = true;
            var spBgstr = "resource/assets/img/ui/levelview/level_baseboard_1.png";
            var guankastr = "resource/assets/img/ui/levelview/level_word_2.png";
            var numStr = "resource/assets/img/common/level_number12/level_number_";
            if (this._nCurLevel <= PlayerDataMgr.getInstance().getCurGuanQiaMax()) {
                this.tips.visible = false;
                this.spBg.loadImage("resource/assets/img/ui/levelview/level_baseboard_1.png");
                spBgstr = "resource/assets/img/ui/levelview/level_baseboard_1.png";
                guankastr = "resource/assets/img/ui/levelview/level_word_1.png";
                numStr = "resource/assets/img/common/level_number1/level_number_";
            }
            else if (this._nCurLevel == PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia()) {
                spBgstr = "resource/assets/img/ui/levelview/level_baseboard_2.png";
                guankastr = "resource/assets/img/ui/levelview/level_word_1.png";
                numStr = "resource/assets/img/common/level_number1/level_number_";
                this._bAni = true;
            }
            else {
                this.tips.visible = false;
                spBgstr = "resource/assets/img/ui/levelview/level_baseboard_3.png";
                guankastr = "resource/assets/img/ui/levelview/level_word_2.png";
                numStr = "resource/assets/img/common/level_number12/level_number_";
            }
            this.spBg.loadImage(spBgstr);
            this.guanka.loadImage(guankastr);
            BitmapLabelUtils.setLabel(this.levelNum, this._nCurLevel.toString(), numStr, 0, ".png", "center");
        };
        LevelViewItem.prototype.setData = function (data_) {
            this._nCurLevel = data_;
            this.refreshView();
        };
        LevelViewItem.prototype.enterLevel = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            if (this._nCurLevel > PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia()) {
                TipsManager.getInstance().showDefaultTips("未解锁");
                return;
            }
            var numCost = 1;
            var objData = ConfigMgr.getInstance().getGCDBID(8);
            if (objData) {
                numCost = parseInt(objData.strValue);
            }
            var b = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, numCost);
            if (!b) {
                GameManager.instance.onPowerNotEnough();
                return;
            }
            PlayerDataMgr.getInstance().subProp(PType.e_GType_Sp, numCost);
            this.enterOper();
            this.parentView.closeViewWhenGoToLevel();
        };
        LevelViewItem.prototype.setParentView = function (pParentView) {
            this.parentView = pParentView;
        };
        LevelViewItem.prototype.wxOper71324 = function () {
            var _this = this;
            if (!ConfigMgr.getInstance().isWeCatMiniGame()) {
                return;
            }
            if (!PlayerDataMgr.getInstance().isSecondEnterGame()) {
                return;
            }
            MiniGameMgr.instance.playVideoAd({
                successFun: function () {
                    _this.enterOper();
                },
                failFun: function () {
                    _this.enterOper();
                },
                errorFun: function () {
                    _this.enterOper();
                }
            });
        };
        LevelViewItem.prototype.enterOper = function () {
            if (ConfigMgr.getInstance().isWeCatMiniGame()
                && this._nCurLevel >= BaseConst.infos.gameInfo.splevel
                && BaseConst.infos.gameInfo.openPsAward == 1) {
                ViewChangeMgr.getInstance().gotoLevel(this._nCurLevel);
            }
            else {
                ViewChangeMgr.getInstance().gotoLevel(this._nCurLevel);
            }
        };
        return LevelViewItem;
    }(BaseUIScene));

    var LevelView = (function (_super) {
        __extends(LevelView, _super);
        function LevelView() {
            var _this = _super.call(this) || this;
            _this.className_key = "LevelView";
            _this.showEnterType = BasePopAnimationEnterType.NOMORL_MODE;
            _this.skin = "game/uiView/choose/LevelView.json";
            return _this;
        }
        LevelView.prototype.initMiniGame = function () {
            MiniGameMgr.instance.showChaPinAd();
            ViewChangeMgr.getInstance().commonView.visible = false;
            if (DeviceUtil.isVIVOMiniGame()) {
                this.showBanner({ className_key: this.className_key });
                MiniGameMgr.instance.showInsertAd({});
            }
            if (DeviceUtil.isOPPOMiniGame()) {
                this.showBanner({ className_key: this.className_key });
            }
            else {
                this.showBanner({ className_key: this.className_key });
            }
        };
        LevelView.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        LevelView.prototype.onRemoved = function () {
            this.removeEvent();
        };
        LevelView.prototype.addEvent = function () {
            this.registerEvent(this.btnHome, Laya.Event.CLICK, this.levelViewReturnToHome, this);
        };
        LevelView.prototype.removeEvent = function () {
            _super.prototype.removeEvent.call(this);
        };
        LevelView.prototype.initLevelItem = function () {
            var nMaxLevelShow = PlayerDataMgr.getInstance().nMaxLevelCount;
            if (DeviceUtil.isQQMiniGame()) {
                nMaxLevelShow = PlayerDataMgr.getInstance().nMaxLevelCountShow;
            }
            for (var i = 0, len = nMaxLevelShow; i < len; i++) {
                var viewItem = this.boxConent.getChildAt(i);
                if (viewItem) {
                    viewItem.setData(i + 1);
                }
                else {
                    viewItem = new LevelViewItem(i + 1);
                    viewItem.x = this.boxConent.width / 2;
                    console.log('高度->', viewItem.height);
                    viewItem.y = i * viewItem.height + viewItem.height / 2 + (i - 1) * 20 + 40;
                    this.boxConent.addChild(viewItem);
                }
                viewItem.setParentView(this);
            }
        };
        LevelView.prototype.initList = function () {
            var _this = this;
            this.panelConent.vScrollBarSkin = "";
            this.panelConent.elasticEnabled = true;
            this.panelConent.vScrollBar.elasticDistance = 130;
            this.boxConent.visible = false;
            this.initLevelItem();
            var cur = PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia();
            Laya.timer.once(200, this, function () {
                _this.boxConent.visible = true;
                var minIndex = cur - 9 > 0 ? cur - 9 : 0;
                var maxIndex = minIndex + 9;
                console.log('最小最大索引->', minIndex, maxIndex, cur);
                _this.panelConent.vScrollBar.value = cur > 9 ? (cur - 9) * 143 + (cur - 9) * 20 + 10 : 0;
                var d = 0;
                for (var i = minIndex; i < maxIndex; i++) {
                    var item = _this.boxConent.getChildAt(i);
                    if (item) {
                        item.y = item.y - 1920;
                        Laya.Tween.to(item, { y: i * item.height + item.height / 2 + (i - 1) * 20 + 40 }, 100 * d, Laya.Ease.backOut);
                        d++;
                    }
                }
            });
        };
        LevelView.prototype.initView = function () {
            this.initList();
            this.grp_center.size(Laya.stage.width, Laya.stage.height);
            if (DeviceUtil.getIsIphoneX()) {
                this.panelConent.top = 120;
            }
        };
        LevelView.prototype.closeViewWhenGoToLevel = function () {
            ViewChangeMgr.getInstance().commonView.visible = true;
            this.removeSelf();
            LevelView.homeView.removeSelf();
        };
        LevelView.prototype.levelViewReturnToHome = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            ViewChangeMgr.getInstance().commonView.visible = true;
            if (DeviceUtil.isOPPOMiniGame()) {
                this.hideBanner();
                this.showBanner({ className_key: "GameHomeView" });
            }
            this.removeSelf();
        };
        return LevelView;
    }(PopBaseScene));

    var GameLogicProcessMgr = (function () {
        function GameLogicProcessMgr() {
        }
        GameLogicProcessMgr.getInstance = function () {
            if (!GameLogicProcessMgr.instance) {
                GameLogicProcessMgr.instance = new GameLogicProcessMgr();
            }
            return GameLogicProcessMgr.instance;
        };
        Object.defineProperty(GameLogicProcessMgr.prototype, "PSRecoveryOpena", {
            get: function () {
                return this.PSRecoveryOpen;
            },
            set: function (b) {
                this.PSRecoveryOpen = b;
            },
            enumerable: true,
            configurable: true
        });
        GameLogicProcessMgr.GetCurTimea = function () {
            return Laya.Browser.now();
        };
        return GameLogicProcessMgr;
    }());

    var SignPopView = (function (_super) {
        __extends(SignPopView, _super);
        function SignPopView() {
            var _this = _super.call(this) || this;
            _this.className_key = "SignView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this._bIsRunning = false;
            _this.skin = "game/uiView/pop/SignView.json";
            return _this;
        }
        SignPopView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        SignPopView.prototype.checkPlatform = function () {
            if (DeviceUtil.isQQMiniGame()) {
                console.log("更新qq平台签到皮肤");
                this.changeUIQQ();
            }
        };
        SignPopView.prototype.changeUIQQ = function () {
            this.btnDouble.skin = "resource/assets/img/ui/sign/sign_baseboard_7.png";
            this.sprDouble.skin = "resource/assets/img/ui/sign/sign_baseboard_5.png";
        };
        SignPopView.prototype.initMiniGame = function () {
            if (DeviceUtil.isVIVOMiniGame()) {
                MiniGameMgr.instance.showInsertAd({});
            }
            this.showBanner({ className_key: this.className_key });
        };
        SignPopView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this._bIsRunning = false;
            Laya.Tween.clearAll(this.btnSign);
            Laya.timer.clearAll(this);
        };
        SignPopView.prototype.initView = function () {
            this.checkPlatform();
            this._nCurTime = 0;
            this._bDouble = false;
            this._bIsRunning = true;
            this.refreshSignData();
            this.refreshSignView();
            this.refreshSignRecvBt();
            this.initDouble();
            this.boxConent.scale(1, 1);
            if (DeviceUtil.isQQMiniGame()) {
                this.boxConent.scale(2, 2);
            }
        };
        SignPopView.prototype.addEvent = function () {
            this.registerEvent(this.btnSign, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnClose, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.boxConent, Laya.Event.CLICK, this.onClick, this);
        };
        SignPopView.prototype.removeEvent = function () {
            _super.prototype.removeEvent.call(this);
        };
        SignPopView.prototype.onClick = function (evt) {
            SoundMgr.getInstance().playEffect("button", 1);
            switch (evt.currentTarget) {
                case this.btnClose:
                    this.removeSelf();
                    break;
                case this.btnSign:
                    this.onSigned();
                    break;
                case this.boxConent:
                    this.onSignedDouble();
                    break;
            }
        };
        SignPopView.prototype.onSignedDouble = function () {
            this.sprDouble.visible = !this.sprDouble.visible;
            this._bDouble = this.sprDouble.visible;
        };
        SignPopView.prototype.refreshSignView = function () {
            var arrData = ConfigMgr.getInstance().getSDA();
            var len = arrData.length;
            console.log('数据', arrData);
            var imageTemp = null;
            var sprGoods = null;
            for (var i = 0; i < len; ++i) {
                imageTemp = this.boxItem.getChildAt(i);
                if (imageTemp) {
                    if (i < 6) {
                        this.checkWorkDay(sprGoods, imageTemp, arrData, i);
                    }
                    else {
                        this.sprWorldLeft.text = 'x' + arrData[i].nCount.toString();
                        this.sprWorldRight.text = 'x' + arrData[i].nCount7.toString();
                    }
                    this.checkStatus(imageTemp, i);
                }
            }
        };
        SignPopView.prototype.checkWorkDay = function (sprGoods, imageTemp, arrData, i) {
            sprGoods = imageTemp.getChildAt(0);
            if (sprGoods) {
                var str = "";
                if (arrData[i].nType == 1) {
                    str = "resource/assets/img/common/sign_icon_inter.png";
                }
                else if (arrData[i].nType == 2) {
                    str = "resource/assets/img/common/sign_icon_gold.png";
                }
                sprGoods.loadImage(str);
            }
            var boxTemp = imageTemp.getChildByName("boxWorld");
            if (boxTemp) {
                var sprNum = boxTemp.getChildByName("spWord");
                if (sprNum) {
                    sprNum.text = 'x' + arrData[i].nCount.toString();
                }
            }
        };
        SignPopView.prototype.checkStatus = function (imageTemp, i) {
            var imgSigned = imageTemp.getChildByName("spSigned");
            var img_1 = imgSigned.getChildAt(0);
            var sprite_1 = imgSigned.getChildAt(1);
            sprite_1.visible = true;
            imgSigned.visible = true;
            var nSignIndex = PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex;
            if (imgSigned) {
                if (i < nSignIndex) {
                    img_1.skin = 'resource/assets/img/ui/sign/sign_baseboard_6.png';
                }
                else if (i == nSignIndex) {
                    img_1.skin = 'resource/assets/img/ui/sign/sign_light_1.png';
                    sprite_1.visible = false;
                }
                else {
                    imgSigned.visible = false;
                }
            }
        };
        SignPopView.prototype.refreshSignData = function () {
            this._nCurTime = GameLogicProcessMgr.GetCurTimea();
            if (Utils.judgeIsOnTheSameDay(PlayerDataMgr.getInstance().stPlayerDataBase.nSignTimeLast, this._nCurTime)) {
                this.btnDouble.visible = false;
                return;
            }
            if (PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex >= 7) {
                PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex = 0;
            }
        };
        SignPopView.prototype.initDouble = function () {
            if (BaseConst.infos.gameInfo.openPsAward && BaseConst.infos.gameInfo.openPsAward == 1) {
                this.sprDouble.visible = true;
            }
            else {
                this.sprDouble.visible = false;
            }
            if (DeviceUtil.isQQMiniGame()) {
                if (Math.random() < BaseConst.infos.gameInfo.siginC) {
                    this.sprDouble.visible = true;
                }
                else {
                    this.sprDouble.visible = false;
                }
            }
            if (DeviceUtil.isNative()) {
                this.sprDouble.visible = false;
            }
            this._bDouble = this.sprDouble.visible;
        };
        SignPopView.prototype.refreshSignRecvBt = function () {
            this._nCurTime = GameLogicProcessMgr.GetCurTimea();
            this.boxConent.visible = true;
            this.btnDouble.visible = true;
            this.sprTomorrow.visible = true;
            this.btnSign.visible = true;
            if (Utils.judgeIsOnTheSameDay(PlayerDataMgr.getInstance().stPlayerDataBase.nSignTimeLast, this._nCurTime)) {
                this.boxConent.visible = false;
                this.btnDouble.visible = false;
                this.btnSign.visible = false;
            }
            else {
                this.sprTomorrow.visible = false;
                this.startSignImageBtShareAni();
            }
        };
        SignPopView.prototype.onSigned = function () {
            var _this = this;
            if (this._bDouble) {
                MiniGameMgr.instance.playVideoAd({
                    successFun: function () {
                        _this.procSignedData();
                    }
                });
            }
            else {
                this.procSignedData();
            }
        };
        SignPopView.prototype.procSignedData = function () {
            var objData = ConfigMgr.getInstance().getSDBSID(PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex);
            if (objData) {
                var numValue = objData.nCount;
                if (this._bDouble) {
                    numValue *= 2;
                }
                PlayerDataMgr.getInstance().AddProp(objData.nType, numValue);
                if (objData.nType == PType.e_GType_Sp) {
                    TipsManager.getInstance().showDefaultTips("体力+" + numValue.toString());
                }
                if (PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex == 6) {
                    numValue = objData.nCount7;
                    if (this._bDouble) {
                        numValue *= 2;
                    }
                    PlayerDataMgr.getInstance().AddProp(objData.nType7, numValue);
                }
            }
            PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex += 1;
            PlayerDataMgr.getInstance().stPlayerDataBase.nSignTimeLast = GameLogicProcessMgr.GetCurTimea();
            PlayerDataMgr.getInstance().SaveData();
            this.refreshSignView();
            this.refreshSignRecvBt();
        };
        SignPopView.prototype.startSignImageBtShareAni = function () {
            if (!this._bIsRunning && this.btnSign.visible) {
                return;
            }
            Laya.timer.clearAll(this.btnSign);
            AnimationMgr.instance.zoomTweena(this.btnSign, this.btnSign);
        };
        return SignPopView;
    }(PopBaseScene));

    var WeCatMoreGameItemOne = (function (_super) {
        __extends(WeCatMoreGameItemOne, _super);
        function WeCatMoreGameItemOne(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "WeCatMoreGameItemOne";
            _this._nIndex = data;
            _this.skin = "game/uiView/wecat/WeCatMoreGameItemOne.json";
            _this.width = 200;
            _this.height = 240;
            return _this;
        }
        WeCatMoreGameItemOne.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            this.addEvent();
            this.initView();
        };
        WeCatMoreGameItemOne.prototype.onRemoved = function () {
            this.removeEvent();
        };
        WeCatMoreGameItemOne.prototype.setData = function (data) {
            this._nIndex = data;
            this.initView();
        };
        WeCatMoreGameItemOne.prototype.initView = function () {
            if (this._nIndex < 0 || this._nIndex >= GDataMgr.getInstance().weCatMoreInfo.length) {
                this._nIndex = GDataMgr.getInstance().weCatMoreInfo.length - 1;
                if (this._nIndex < 0)
                    return;
            }
            this.labGameName.text = GDataMgr.getInstance().weCatMoreInfo[this._nIndex].name;
            this.imgIcon.skin = GDataMgr.getInstance().weCatMoreInfo[this._nIndex].ad_img;
        };
        WeCatMoreGameItemOne.prototype.addEvent = function () {
            if (!DeviceUtil.isTTMiniGame()) {
                this.on(Laya.Event.CLICK, this, this.gotoGameDuYou);
            }
        };
        WeCatMoreGameItemOne.prototype.removeEvent = function () {
            this.off(Laya.Event.CLICK, this, this.gotoGameDuYou);
        };
        WeCatMoreGameItemOne.prototype.gotoGameDuYou = function () {
            if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                GameManager.instance.goToDuyou(this._nIndex);
            }
        };
        return WeCatMoreGameItemOne;
    }(BaseUIScene));

    var SuccessfulEntryThreeView = (function (_super) {
        __extends(SuccessfulEntryThreeView, _super);
        function SuccessfulEntryThreeView() {
            var _this = _super.call(this) || this;
            _this.className_key = "SuccessfulEntryThreeView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this._bShareAward = false;
            _this._isShowBox = false;
            _this._nGlodCount = 50;
            _this.scrollSizeMax = 50;
            _this.nTimePanel = 5000;
            _this.nBtNextLevel = 360;
            _this.nBtNextLevelSp = 50;
            _this._nGlodAdd = 50;
            _this._nGlodRadio = 4;
            _this._bIsRunning = false;
            _this._bRecvAward = false;
            _this.skin = 'game/uiView/settlement/SuccessfulEntryThreeView.json';
            return _this;
        }
        SuccessfulEntryThreeView.prototype.adaptationSize = function () {
            this.imgWeChatMore.height = (this.height - this.imgWeChatMore.y - (1920 - this.imgWeChatMore.y - this.imgWeChatMore.height));
            this.panelWeChatMore.height = this.imgWeChatMore.height - 110;
        };
        SuccessfulEntryThreeView.prototype.checkPlatform = function () {
            if (DeviceUtil.isQQMiniGame()) {
                this.changeUIQQ();
            }
        };
        SuccessfulEntryThreeView.prototype.changeUIQQ = function () {
            this.btnDouble.skin = "resource/assets/img/ui/sign/sign_baseboard_7.png";
            this.sprDouble.skin = "resource/assets/img/ui/sign/sign_baseboard_5.png";
        };
        SuccessfulEntryThreeView.prototype.initMiniGame = function () {
            AddPowerView._bCloseBinner = false;
            ViewChangeMgr.getInstance().commonView.addBtEvent();
            this._isShowBox = false;
            MiniGameMgr.instance.showBanner({});
            MiniGameMgr.instance.showChaPinAd();
            MiniGameMgr.instance.showBlockAD();
            if (!this.aniReal) {
                this.createSke("resource/assets/img/ani/celebrate/celebrate.sk");
            }
            else {
                this.aniReal.play(0, false);
                this.grp_center.addChild(this.aniReal);
            }
            if (!this.aniRealNanZhu) {
                this.createSkeletonNanZhu("resource/assets/img/ani/celebrate/chenggong.sk");
            }
            else {
                this.aniRealNanZhu.play(0, true);
                this.boxAnim.addChild(this.aniRealNanZhu);
            }
        };
        SuccessfulEntryThreeView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            MiniGameMgr.instance.hideBlockAD();
            this.removeEvent();
            this._bIsRunning = false;
            Laya.Tween.clearAll(this.btnShare);
            Laya.timer.clearAll(this);
            if (this.aniReal) {
                this.aniReal.stop();
                this.aniReal.removeSelf();
            }
            if (this.aniRealNanZhu) {
                this.aniRealNanZhu.stop();
                this.aniRealNanZhu.removeSelf();
            }
        };
        SuccessfulEntryThreeView.prototype.initPanel = function () {
            this.panelWeChatMore.vScrollBarSkin = "";
            this.panelWeChatMore.elasticEnabled = true;
            this.panelWeChatMore.vScrollBar.elasticDistance = 200;
            this.panelWeChatMore.vScrollBar.elasticBackTime = 100;
        };
        SuccessfulEntryThreeView.prototype.initView = function () {
            this.checkPlatform();
            this._bShareAward = false;
            this.initPanel();
            this.proceMoreGame();
            MiniGameMgr.instance._onShareVideoSuccess = false;
            this.initPlView();
            SoundMgr.getInstance().playEffect("win", 1);
            this._bRecvAward = false;
            if (BaseConst.infos.gameInfo.openPsAward) {
                this.sprDouble.visible = true;
            }
            else {
                this.sprDouble.visible = false;
            }
            if (DeviceUtil.isQQMiniGame()) {
                if (Math.random() < BaseConst.infos.gameInfo.siginC) {
                    this.sprDouble.visible = true;
                }
                else {
                    this.sprDouble.visible = false;
                }
                this.btnShare.visible = false;
                this.imgMask.centerX = 0;
            }
            if (DeviceUtil.isNative()) {
                this.sprDouble.visible = false;
            }
            if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                this.sprDouble.visible = false;
            }
            this._bIsRunning = true;
            this.initTextLable();
            this.startSucImageBtShareAni();
            if (DeviceUtil.isTTMiniGame()) {
                this.btnShare.right = 563;
                this.imgMask.left = 563;
            }
            this.adaptationSize();
            if (DeviceUtil.isNative()) {
                this.btnShare.visible = false;
                this.imgMask.centerX = 0;
            }
        };
        SuccessfulEntryThreeView.prototype.initTextLable = function () {
            var objConfig = ConfigMgr.getInstance().getGCDBID(12);
            if (objConfig) {
                this._nGlodAdd = parseInt(objConfig.strValue);
            }
            objConfig = ConfigMgr.getInstance().getGCDBID(13);
            if (objConfig) {
                this._nGlodRadio = parseInt(objConfig.strValue);
                this.labDesc.text = objConfig.strDesc;
            }
            BitmapLabelUtils.setLabel(this.sprCost, this._nGlodRadio.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
            var nCost = 1;
            objConfig = ConfigMgr.getInstance().getGCDBID(8);
            if (objConfig) {
                nCost = parseInt(objConfig.strValue);
            }
            BitmapLabelUtils.setLabel(this.sprCostPs, nCost.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
            var bAddMore = this._nGlodAdd * this._nGlodRadio;
            BitmapLabelUtils.setLabel(this.sprMore, bAddMore.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
            if (this.sprDouble.visible) {
                var nReal = this._nGlodAdd * this._nGlodRadio;
                BitmapLabelUtils.setLabel(this.sprGold, nReal.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
            }
            else {
                BitmapLabelUtils.setLabel(this.sprGold, this._nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
            }
        };
        SuccessfulEntryThreeView.prototype.onClick = function (evt) {
            switch (evt.currentTarget) {
                case this.btnLab:
                    this.sucfulEntryThreeNextLevel();
                    break;
                case this.btnHome:
                    this.returnToHome();
                    break;
                case this.btnShare:
                    this.sucShareGame();
                    break;
                case this.btnAgain:
                    this.sucReStart();
                    break;
                case this.imgMask:
                    this.sucRecvAward();
                    break;
                case this.btnDouble:
                    this.onDoubleGlods();
                    break;
                case this.panelWeChatMore:
                    this.onShowMoreGame();
                    break;
                case this.btnNextLevel:
                    this.weCatGotoNextLevel();
                    break;
            }
        };
        SuccessfulEntryThreeView.prototype.addEvent = function () {
            this.registerEvent(this.btnLab, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnHome, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnShare, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnAgain, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.imgMask, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnDouble, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnNextLevel, Laya.Event.CLICK, this.onClick, this);
            if (DeviceUtil.isTTMiniGame()) {
                this.registerEvent(this.panelWeChatMore, Laya.Event.CLICK, this.onClick, this);
            }
            if (DeviceUtil.isQQMiniGame()) {
                EventMgr.getInstance().addEvent("SuccBlockShow", this, this.showBlockAd);
            }
        };
        SuccessfulEntryThreeView.prototype.removeEvent = function () {
            if (DeviceUtil.isTTMiniGame()) {
                this.panelWeChatMore.off(Laya.Event.CLICK, this, this.onShowMoreGame);
            }
            if (DeviceUtil.isQQMiniGame()) {
                EventMgr.getInstance().removeEvent("SuccBlockShow", this, this.showBlockAd);
            }
            _super.prototype.removeEvent.call(this);
        };
        SuccessfulEntryThreeView.prototype.onDoubleGlods = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            this.sprDouble.visible = !this.sprDouble.visible;
            if (this.sprDouble.visible) {
                var numReal = this._nGlodAdd * this._nGlodRadio;
                BitmapLabelUtils.setLabel(this.sprGold, numReal.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
            }
            else {
                BitmapLabelUtils.setLabel(this.sprGold, this._nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
            }
        };
        SuccessfulEntryThreeView.prototype.sucShareGame = function () {
            var _this = this;
            SoundMgr.getInstance().playEffect("button", 1);
            if (DeviceUtil.isTTMiniGame()) {
                this.btnShare.mouseEnabled = this.imgMask.mouseEnabled = false;
                if (this._bShareAward) {
                    TipsManager.getInstance().showDefaultTips("已经领过奖励了哦");
                    this.btnShare.mouseEnabled = this.imgMask.mouseEnabled = true;
                    return;
                }
                var info = platform.getSystemInfoSync();
                if (MiniGameMgr.instance.appName().toUpperCase() == 'DOUYIN') {
                    MiniGameMgr.instance.flagDouYin = true;
                    MiniGameMgr.instance.shareAppMsg({
                        sucFun: function () {
                            _this._bShareAward = true;
                            console.log("发布录制视频成功");
                            TipsManager.getInstance().showDefaultTips('分享成功');
                            if (MiniGameMgr.instance._onShareVideoSuccess) {
                                return;
                            }
                            PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, _this._nGlodCount);
                            _this.btnShare.mouseEnabled = _this.imgMask.mouseEnabled = true;
                        },
                        failFun: function () {
                            console.log("发布录制视频失败");
                            TipsManager.getInstance().showDefaultTips('分享失败');
                            _this.btnShare.mouseEnabled = _this.imgMask.mouseEnabled = true;
                        }
                    });
                }
                else {
                    MiniGameMgr.instance.shareGameRecordVideo({
                        successFun: function () {
                            _this._bShareAward = true;
                            PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, _this._nGlodCount);
                            _this.btnShare.mouseEnabled = _this.imgMask.mouseEnabled = true;
                        }, failFun: function () {
                            _this.btnShare.mouseEnabled = _this.imgMask.mouseEnabled = true;
                        }, errorFun: function () {
                            _this.btnShare.mouseEnabled = _this.imgMask.mouseEnabled = true;
                        }
                    });
                }
            }
            else {
                MiniGameMgr.instance.shareAppMsg();
            }
        };
        SuccessfulEntryThreeView.prototype.showBlockAd = function (isShow) {
            if (isShow) {
                MiniGameMgr.instance.showBlockAD();
            }
            else {
                MiniGameMgr.instance.hideBlockAD();
            }
        };
        SuccessfulEntryThreeView.prototype.sucReStart = function () {
        };
        SuccessfulEntryThreeView.prototype.sucRecvAward = function () {
            var _this = this;
            SoundMgr.getInstance().playEffect("button", 1);
            if (DeviceUtil.isQQMiniGame() && !this._isShowBox && Math.random() < BaseConst.infos.gameInfo.succShowBox) {
                this._isShowBox = true;
                MiniGameMgr.instance.hideBlockAD();
                MiniGameMgr.instance.showAdBox(function () {
                    MiniGameMgr.instance.showBlockAD();
                });
                return;
            }
            if (this._bRecvAward) {
                this.sucfulEntryThreeNextLevel();
                return;
            }
            if (this.sprDouble.visible) {
                MiniGameMgr.instance.playVideoAd({
                    successFun: function () {
                        _this.sendAwardAfterWatchVideoAd();
                    }
                });
            }
            else {
                this._nGlodRadio = 1;
                this.sendAwardAfterWatchVideoAd();
            }
        };
        SuccessfulEntryThreeView.prototype.sendAwardAfterWatchVideoAd = function () {
            this._bRecvAward = true;
            this.flayGlodSuccess();
            var numAdd = this._nGlodAdd * this._nGlodRadio;
            PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, numAdd);
            this.sucfulEntryThreeNextLevel();
        };
        SuccessfulEntryThreeView.prototype.sucfulEntryThreeNextLevel = function () {
            var numCost = 1;
            var objData = ConfigMgr.getInstance().getGCDBID(8);
            if (objData) {
                numCost = parseInt(objData.strValue);
            }
            var self = this;
            var fun = function () {
                MoreGameRandomGameBox713.bGotoNextGame = true;
                ViewManager.getInstance().showView(MoreGameRandomGameBox713);
                MiniGameMgr.instance._bFlagSpecialView = true;
                self.removeSelf();
            };
            var bln = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, numCost);
            if (!bln) {
                GameManager.instance.onPowerNotEnough();
                return;
            }
            else {
                this.removeEvent();
                if (DeviceUtil.isWXMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
                    if (!this._bRecvAward) {
                        Laya.timer.once(1000, this, function () {
                            fun();
                        });
                    }
                    else {
                        fun();
                    }
                }
                else {
                    PlayerDataMgr.getInstance().subProp(PType.e_GType_Sp, numCost);
                    if (PlayerDataMgr.getInstance().stPlayerDataBase.nCurLevel >= PlayerDataMgr.getInstance().nMaxLevelCount - 1
                        && DeviceUtil.isQQMiniGame()) {
                        TipsManager.getInstance().showDefaultTips("明日更新关卡，明天再来吧！");
                        PlayerDataMgr.getInstance().isMaxLevel();
                        this.returnToHome();
                    }
                    else {
                        ViewChangeMgr.getInstance().goToNextLevel();
                        MiniGameMgr.instance._bFlagSpecialView = true;
                        this.removeSelf();
                    }
                }
            }
        };
        SuccessfulEntryThreeView.prototype.returnToHome = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                if (PlayerDataMgr.getInstance().bIsNewPlayer || BaseConst.infos.gameInfo.openPsAward == 0 ||
                    BaseConst.infos.gameInfo.glodegg == 0) {
                    MoreGameRandomGameBox713.toHome = true;
                    ViewManager.getInstance().showView(MoreGameRandomGameBox713);
                    MiniGameMgr.instance._bFlagSpecialView = true;
                    this.removeSelf();
                    return;
                }
            }
            GameManager.instance.backHome();
            MiniGameMgr.instance._bFlagSpecialView = true;
            this.removeSelf();
        };
        SuccessfulEntryThreeView.prototype.startSucImageBtShareAni = function () {
            if (!this._bIsRunning) {
                return;
            }
            Laya.timer.clearAll(this.btnShare);
            AnimationMgr.instance.zoomTweena(this.btnShare, this);
        };
        SuccessfulEntryThreeView.prototype.flayGlodSuccess = function () {
            var point = new Laya.Point();
            point.x = this.imgGoodsTypeUp.x;
            point.y = this.imgGoodsTypeUp.y;
            var parent = this.imgGoodsTypeUp.parent;
            point = parent.localToGlobal(point);
            AnimationMgr.instance.flayGloda(point.x, point.y, 341, 105);
        };
        SuccessfulEntryThreeView.prototype.createSke = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                AnimationMgr.instance.showSkeAnimation(url, function (boomAnimation) {
                    boomAnimation.player.playbackRate = 1;
                    boomAnimation.autoSize = true;
                    boomAnimation.scale(1, 1);
                    boomAnimation.play(0, false);
                    boomAnimation.x = _this.grp_center.width / 2;
                    boomAnimation.y = _this.grp_center.height / 2;
                    _this.grp_center.addChild(boomAnimation);
                    _this.aniReal = boomAnimation;
                    resolve(boomAnimation);
                }, 1);
            });
        };
        SuccessfulEntryThreeView.prototype.initPlView = function () {
            if (DeviceUtil.isTTMiniGame()) {
                this.imgShareName.skin = "resource/assets/img/ui/success/failure_word_8.png";
                this.imgShareIcon.skin = "resource/assets/img/common/succeed_icon_3.png";
                this.imgShareName.y = 15;
                this.sprShareCount.visible = true;
                this.ttGoodsIcon.visible = true;
                this.ttSpecialIcon.visible = true;
                var numCount = 50;
                this._nGlodCount = numCount;
                var objData = ConfigMgr.getInstance().getGCDBID(18);
                if (objData) {
                    numCount = parseInt(objData.strValue);
                }
                BitmapLabelUtils.setLabel(this.sprShareCount, numCount.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
            }
            else {
                this.imgShareName.skin = "resource/assets/img/ui/success/failure_word_3.png";
                this.imgShareIcon.skin = "resource/assets/img/common/common_icon_3.png";
                this.sprShareCount.visible = false;
                this.ttGoodsIcon.visible = false;
                this.ttSpecialIcon.visible = false;
                this.imgShareName.y = 42;
                this.imgShareName.right = 50;
                this.imgShareIcon.left = 40;
            }
        };
        SuccessfulEntryThreeView.prototype.flayGlodRecv = function () {
            console.log("flayGlodRecv");
            var point = new Laya.Point();
            point.x = this.ttGoodsIcon.x;
            point.y = this.ttGoodsIcon.y;
            var parent = this.ttGoodsIcon.parent;
            point = parent.localToGlobal(point);
            AnimationMgr.instance.flayGloda(point.x, point.y, 341, 105);
        };
        SuccessfulEntryThreeView.prototype.proceMoreGame = function () {
            if ((DeviceUtil.isTTMiniGame()) && BaseConst.infos.gameInfo.isDY) {
                this.refreshWxMoreGame();
                this.imgWeChatMore.visible = true;
            }
            else if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                this.initPl();
            }
        };
        SuccessfulEntryThreeView.prototype.refreshWxMoreGame = function () {
            this.panelWeChatMore;
            var startX = 53;
            var startY = 47;
            var arrInfo = [];
            var numCount = 3;
            arrInfo = GameManager.instance.getRandomEightIndex();
            var len = 8;
            if (DeviceUtil.isWXMiniGame()) {
                len = arrInfo.length;
            }
            else {
                len = 9;
                len = len < arrInfo.length ? len : arrInfo.length;
            }
            for (var i = 0; i < len; ++i) {
                var pWeCatMoreGameItemOne = this.panelWeChatMore.getChildAt(i);
                if (pWeCatMoreGameItemOne) {
                    pWeCatMoreGameItemOne.setData(arrInfo[i]);
                }
                else {
                    pWeCatMoreGameItemOne = new WeCatMoreGameItemOne(arrInfo[i]);
                    var addx = Math.floor(i % numCount);
                    var addy = Math.floor(i / numCount);
                    pWeCatMoreGameItemOne.x = startX + pWeCatMoreGameItemOne.width * addx + 70 * addx;
                    pWeCatMoreGameItemOne.y = startY + pWeCatMoreGameItemOne.height * addy + 10 * addy;
                    this.panelWeChatMore.addChild(pWeCatMoreGameItemOne);
                    this.scrollSizeMax = 180 * (addy + 1);
                    this.nTimePanel = (addy + 1) * 1000;
                }
            }
            if (DeviceUtil.isWXMiniGame())
                this.panelScrollAni();
        };
        SuccessfulEntryThreeView.prototype.onShowMoreGame = function () {
            MiniGameMgr.instance.showMoreGamesModel();
        };
        SuccessfulEntryThreeView.prototype.panelScrollAni = function () {
            var _this = this;
            Laya.Tween.clearAll(this.panelWeChatMore.vScrollBar);
            Laya.timer.clearAll(this.panelScrollAni);
            Laya.Tween.to(this.panelWeChatMore.vScrollBar, { value: this.scrollSizeMax }, this.nTimePanel, null, Laya.Handler.create(this, function (args) {
                Laya.Tween.to(_this.panelWeChatMore.vScrollBar, { value: 0 }, _this.nTimePanel, null, Laya.Handler.create(_this, function (args) {
                    _this.scrollSizeMax = _this.panelWeChatMore.vScrollBar.max;
                    Laya.timer.once(0, _this, _this.panelScrollAni);
                }));
            }));
        };
        SuccessfulEntryThreeView.prototype.createSkeletonNanZhu = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                AnimationMgr.instance.showSkeAnimation(url, function (boomAnimation) {
                    boomAnimation.player.playbackRate = 1;
                    boomAnimation.autoSize = true;
                    boomAnimation.scale(1, 1);
                    boomAnimation.play(0, true);
                    boomAnimation.x = 250;
                    boomAnimation.y = 400 + 80;
                    _this.boxAnim.addChild(boomAnimation);
                    _this.aniRealNanZhu = boomAnimation;
                    resolve(boomAnimation);
                }, 1);
            });
        };
        SuccessfulEntryThreeView.prototype.initPl = function () {
            if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                this.box_wecat.visible = true;
                this.box_wecat.removeChildren();
                this.box_wecat.addChild(ViewChangeMgr.getInstance().showMoreGameinView());
                this.imgMask.visible = false;
                this.btnShare.visible = false;
                this.check4.visible = false;
                this.boxAnim.visible = false;
                this.btnNextLevel.visible = true;
                if (BaseConst.infos.gameInfo.openPsAward == 1 && BaseConst.infos.gameInfo.for_pay == 1) {
                    this.btnNextLevel.visible = true;
                    this.btnNextLevel.bottom = this.nBtNextLevelSp;
                    MiniGameMgr.instance._bFlagSpecialView = false;
                    MiniGameMgr.instance.hideBannerAd();
                    return;
                }
                else {
                    this.btnNextLevel.bottom = this.nBtNextLevel;
                }
            }
            MiniGameMgr.instance.showBanner({});
        };
        SuccessfulEntryThreeView.prototype.weCatGotoNextLevel = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            this._bRecvAward = true;
            this.flayGlodSuccess();
            this._nGlodRadio = 1;
            var nGlodAddTemp = this._nGlodAdd * this._nGlodRadio;
            PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, nGlodAddTemp);
            var numCost = 1;
            var objData = ConfigMgr.getInstance().getGCDBID(8);
            if (objData) {
                numCost = parseInt(objData.strValue);
            }
            var bln = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, numCost);
            if (!bln) {
                GameManager.instance.onPowerNotEnough();
                return;
            }
            else {
                this.removeEvent();
                if (LevelMgr.getInstance().nCurrentLevel == 1) {
                    MoreGameRandomGameBox713.bGotoNextGame = true;
                }
                else if (LevelMgr.getInstance().nCurrentLevel >= 2) {
                    MoreGameRandomGameBox713.bGotoNextGame = true;
                    MoreGameRandomGameBox713.bEnterHotBox = true;
                }
                ViewManager.getInstance().showView(MoreGameRandomGameBox713);
                MiniGameMgr.instance._bFlagSpecialView = true;
                this.removeSelf();
            }
        };
        return SuccessfulEntryThreeView;
    }(PopBaseScene));

    var GameEvent = (function () {
        function GameEvent() {
        }
        GameEvent.ONHIDE = "ONHIDE";
        GameEvent.ONSHOW = "ONSHOW";
        GameEvent.BUFFER_LOAD = "BUFFER_LOAD";
        return GameEvent;
    }());

    var FailEntryErView = (function (_super) {
        __extends(FailEntryErView, _super);
        function FailEntryErView() {
            var _this = _super.call(this) || this;
            _this.className_key = "FailEntryTwoView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this._scrollSizeMax = 50;
            _this._nTimePanel = 5000;
            _this.nBtNextLevel = 360;
            _this.nBtNextLevelSp = 100;
            _this._nGlodAddByWathcVideo = 200;
            _this._bIsRunning = false;
            _this._bRecvAward = false;
            _this._bShareAward = false;
            _this.skin = 'game/uiView/settlement/FailEntryTwoView.json';
            return _this;
        }
        FailEntryErView.prototype.initMiniGame = function () {
            MiniGameMgr.instance.showChaPinAd();
            MiniGameMgr.instance.showBlockAD();
        };
        FailEntryErView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            MiniGameMgr.instance.hideBlockAD();
            this.removeEvent();
            this._bIsRunning = false;
            this._bRecvAward = false;
            Laya.Tween.clearAll(this.btnShare);
            Laya.timer.clearAll(this);
        };
        FailEntryErView.prototype.onClick = function (evt) {
            switch (evt.currentTarget) {
                case this.btnAgain:
                    this.failEntryErReStartGame();
                    break;
                case this.btnHome:
                    this.returnToHome();
                    break;
                case this.btnShare:
                    this.failShareGame();
                    break;
                case this.btnGet:
                    this.onWatchVideoReceiveAward();
                    break;
            }
        };
        FailEntryErView.prototype.addEvent = function () {
            this.registerEvent(this.btnAgain, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnHome, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnShare, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnGet, Laya.Event.CLICK, this.onClick, this);
            EventMgr.getInstance().addEvent(GEvent.E_F_GD, this, this.flyGlodFileShare);
            if (DeviceUtil.isTTMiniGame()) {
                this.registerEvent(this.panelWeCatMore, Laya.Event.CLICK, this.onShowMoreGame, this);
            }
            if (DeviceUtil.isQQMiniGame()) {
                EventMgr.getInstance().addEvent("SuccBlockShow", this, this.showBlockAd);
            }
        };
        FailEntryErView.prototype.showBlockAd = function (blnShow) {
            if (blnShow) {
                MiniGameMgr.instance.showBlockAD();
            }
            else {
                MiniGameMgr.instance.hideBlockAD();
            }
        };
        FailEntryErView.prototype.removeEvent = function () {
            EventMgr.getInstance().removeEvent(GEvent.E_F_GD, this, this.flyGlodFileShare);
            if (DeviceUtil.isTTMiniGame()) {
                this.panelWeCatMore.off(Laya.Event.CLICK, this, this.onShowMoreGame);
            }
            if (DeviceUtil.isQQMiniGame()) {
                EventMgr.getInstance().removeEvent("SuccBlockShow", this, this.showBlockAd);
            }
            _super.prototype.removeEvent.call(this);
        };
        FailEntryErView.prototype.failShareGame = function () {
            var _this = this;
            SoundMgr.getInstance().playEffect("button", 1);
            if (DeviceUtil.isTTMiniGame()) {
                if (this._bShareAward) {
                    TipsManager.getInstance().showDefaultTips("已经领过奖励了哦");
                    return;
                }
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
                var objInfo = platform.getSystemInfoSync();
                if (objInfo.appName.toUpperCase() == 'DOUYIN') {
                    MiniGameMgr.instance.flagDouYin = true;
                    MiniGameMgr.instance.shareAppMsg({
                        sucFun: function () {
                            _this.sendRecordVideoSuc();
                        },
                        failFun: function () {
                            console.log("发布录制视频失败");
                            TipsManager.getInstance().showDefaultTips('分享失败');
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                        }
                    });
                }
                else {
                    MiniGameMgr.instance.onShareVideoAd({
                        successFun: function () {
                            _this.sendRecordVideoSuc();
                        },
                        failFun: function () {
                            console.log("发布录制视频失败");
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                        }
                    });
                }
            }
            else {
                MiniGameMgr.instance.shareAppMsg();
            }
        };
        FailEntryErView.prototype.sendRecordVideoSuc = function () {
            var _this = this;
            console.log("发布录制视频成功");
            this._bShareAward = true;
            TipsManager.getInstance().showDefaultTips('分享成功');
            if (MiniGameMgr.instance._onShareVideoSuccess) {
                return;
            }
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
            var numCount = 50;
            var objData = ConfigMgr.getInstance().getGCDBID(18);
            if (objData) {
                numCount = parseInt(objData.strValue);
            }
            PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, numCount);
            MiniGameMgr.instance._onShareVideoSuccess = true;
            Laya.timer.once(1000, this, function () {
                _this.flyGlodFileShare();
            });
        };
        FailEntryErView.prototype.initPanel = function () {
            this.panelWeCatMore.vScrollBarSkin = "";
            this.panelWeCatMore.elasticEnabled = true;
            this.panelWeCatMore.vScrollBar.elasticDistance = 200;
            this.panelWeCatMore.vScrollBar.elasticBackTime = 100;
        };
        FailEntryErView.prototype.failEntryErReStartGame = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            if (GameManager.instance.restartGame()) {
                MiniGameMgr.instance._bFlagSpecialView = true;
                this.removeSelf();
            }
        };
        FailEntryErView.prototype.returnToHome = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                if (PlayerDataMgr.getInstance().bIsNewPlayer || BaseConst.infos.gameInfo.openPsAward == 0 ||
                    BaseConst.infos.gameInfo.glodegg == 0) {
                    MoreGameRandomGameBox713.toHome = true;
                    ViewManager.getInstance().showView(MoreGameRandomGameBox713);
                    this.removeSelf();
                    return;
                }
            }
            GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_GH;
            ViewChangeMgr.getInstance().CurLevelBasea.returnToHome();
            MiniGameMgr.instance._bFlagSpecialView = true;
            this.removeSelf();
        };
        FailEntryErView.prototype.initView = function () {
            if (DeviceUtil.isQQMiniGame()) {
                this.btnShare.visible = false;
                this.btnGet.centerX = 0;
                this.startFailImageBtShareAni();
            }
            this.initPanel();
            MiniGameMgr.instance._onShareVideoSuccess = false;
            this.initTTView();
            this.procMoreGame();
            this.resetData();
            if (!DeviceUtil.isWXMiniGame())
                this.startbtnShareAni();
            this.adaptationSize();
            ViewChangeMgr.getInstance().commonView.addBtEvent();
            if (DeviceUtil.isNative()) {
                this.btnShare.visible = false;
                this.btnGet.centerX = 0;
            }
        };
        FailEntryErView.prototype.resetData = function () {
            this._bIsRunning = true;
            this._bRecvAward = false;
            this._bShareAward = false;
            AddPowerView._bCloseBinner = false;
            var objData = ConfigMgr.getInstance().getGCDBID(7);
            if (objData) {
                this._nGlodAddByWathcVideo = parseInt(objData.strValue);
            }
            this.sptext.text = this._nGlodAddByWathcVideo.toString();
        };
        FailEntryErView.prototype.adaptationSize = function () {
            this.imageWeCatMore.height = (this.height - this.imageWeCatMore.y - (1920 - this.imageWeCatMore.y - this.imageWeCatMore.height));
            this.panelWeCatMore.height = this.imageWeCatMore.height - 110;
        };
        FailEntryErView.prototype.startbtnShareAni = function () {
            if (!this._bIsRunning) {
                return;
            }
            Laya.timer.clearAll(this.btnShare);
            AnimationMgr.instance.zoomTweena(this.btnShare, this.btnShare);
        };
        FailEntryErView.prototype.flyGlodFileShare = function () {
            console.log("flayGlodFileShare");
            var pPoint = new Laya.Point();
            pPoint.x = this.ttImageType.x;
            pPoint.y = this.ttImageType.y;
            var stParent = this.ttImageType.parent;
            pPoint = stParent.localToGlobal(pPoint);
            AnimationMgr.instance.flayGloda(pPoint.x, pPoint.y, 341, 105);
            console.log("pPoint.x = ", pPoint.x, "pPoint.y = ", pPoint.y);
        };
        FailEntryErView.prototype.onWatchVideoReceiveAward = function () {
            var _this = this;
            console.log("onWatchVideoRecvAward = ", this._bRecvAward);
            if (this._bRecvAward) {
                TipsManager.getInstance().showDefaultTips("已经领过奖励了哦");
                return;
            }
            MiniGameMgr.instance.playVideoAd({
                successFun: function () {
                    _this._bRecvAward = true;
                    _this.addGlod();
                }
            });
        };
        FailEntryErView.prototype.addGlod = function () {
            this._bRecvAward = true;
            console.log("addGlodReal = ", this._bRecvAward);
            PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, this._nGlodAddByWathcVideo);
            this.flyGlodRecv();
        };
        FailEntryErView.prototype.initTTView = function () {
            this.shareCount.visible = true;
            this.ttImageType.visible = true;
            this.ttSpecial.visible = true;
            if (DeviceUtil.isTTMiniGame()) {
                this.imageSName.skin = "resource/assets/img/ui/success/failure_word_8.png";
                this.imageSIcon.skin = "resource/assets/img/common/succeed_icon_3.png";
                this.imageSName.y = 15;
                var nunumCount = 50;
                var objData = ConfigMgr.getInstance().getGCDBID(18);
                if (objData) {
                    nunumCount = parseInt(objData.strValue);
                }
                BitmapLabelUtils.setLabel(this.shareCount, nunumCount.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
                this.imageSName.right = 40;
                this.imageSIcon.left = 40;
            }
            else {
                this.imageSName.skin = "resource/assets/img/ui/success/failure_word_3.png";
                this.imageSIcon.skin = "resource/assets/img/common/common_icon_3.png";
                this.shareCount.visible = false;
                this.ttImageType.visible = false;
                this.ttSpecial.visible = false;
                this.imageSName.y = 38;
                this.imageSName.right = 50;
                this.imageSIcon.left = 50;
            }
        };
        FailEntryErView.prototype.flyGlodRecv = function () {
            console.log("flayGlodRecv");
            var point = new Laya.Point();
            point.x = this.imageGoods.x;
            point.y = this.imageGoods.y;
            var parent = this.imageGoods.parent;
            point = parent.localToGlobal(point);
            AnimationMgr.instance.flayGloda(point.x, point.y, 341, 105);
        };
        FailEntryErView.prototype.procMoreGame = function () {
            if ((DeviceUtil.isTTMiniGame())) {
                this.refreshWXMoreGame();
                this.imageWeCatMore.visible = true;
            }
            else if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                this.initPl();
            }
        };
        FailEntryErView.prototype.onShowMoreGame = function () {
            MiniGameMgr.instance.showMoreGamesModel();
        };
        FailEntryErView.prototype.refreshWXMoreGame = function () {
            this.panelWeCatMore;
            var numStartX = 70;
            var numStartY = 47;
            var arrInfo = [];
            var numCount = 3;
            arrInfo = GameManager.instance.getRandomEightIndex();
            var len = 8;
            if (DeviceUtil.isWXMiniGame()) {
                len = arrInfo.length;
            }
            else {
                len = 9;
                len = len < arrInfo.length ? len : arrInfo.length;
            }
            for (var i = 0; i < len; ++i) {
                var pWeCatMoreGameItemOne = this.panelWeCatMore.getChildAt(i);
                if (pWeCatMoreGameItemOne) {
                    pWeCatMoreGameItemOne.setData(arrInfo[i]);
                }
                else {
                    pWeCatMoreGameItemOne = new WeCatMoreGameItemOne(arrInfo[i]);
                    var tempX = Math.floor(i % numCount);
                    var tempY = Math.floor(i / numCount);
                    pWeCatMoreGameItemOne.x = numStartX + pWeCatMoreGameItemOne.width * tempX + 70 * tempX;
                    pWeCatMoreGameItemOne.y = numStartY + pWeCatMoreGameItemOne.height * tempY + 10 * tempY;
                    this.panelWeCatMore.addChild(pWeCatMoreGameItemOne);
                    this._scrollSizeMax = 120 * (tempY + 1);
                    this._nTimePanel = 5000;
                }
            }
            if (DeviceUtil.isWXMiniGame())
                this.panelScrollAni();
        };
        FailEntryErView.prototype.panelScrollAni = function () {
            var _this = this;
            Laya.Tween.clearAll(this.panelWeCatMore.vScrollBar);
            Laya.timer.clearAll(this.panelScrollAni);
            Laya.Tween.to(this.panelWeCatMore.vScrollBar, { value: this._scrollSizeMax }, this._nTimePanel, null, Laya.Handler.create(this, function (args) {
                Laya.Tween.to(_this.panelWeCatMore.vScrollBar, { value: 0 }, _this._nTimePanel, null, Laya.Handler.create(_this, function (args) {
                    _this._scrollSizeMax = _this.panelWeCatMore.vScrollBar.max;
                    Laya.timer.once(0, _this, _this.panelScrollAni);
                }));
            }));
        };
        FailEntryErView.prototype.startFailImageBtShareAni = function () {
            Laya.timer.clearAll(this.btnGet);
            AnimationMgr.instance.zoomTweena(this.btnGet, this.btnGet);
        };
        FailEntryErView.prototype.initPl = function () {
            if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                this.box_wecat.removeChildren();
                this.box_wecat.addChild(ViewChangeMgr.getInstance().showMoreGameinView());
                this.box_wecat.visible = true;
                this.btnShare.scaleX = 0.6;
                this.btnShare.scaleY = 0.6;
                this.btnShare.left = 30;
                this.btnShare.bottom = 520;
                this.btnGet.scaleX = 0.6;
                this.btnGet.scaleY = 0.6;
                this.btnGet.right = 30;
                this.btnGet.bottom = 520;
                if (BaseConst.infos.gameInfo.openPsAward == 1 && BaseConst.infos.gameInfo.for_pay == 1) {
                    this.btnAgain.bottom = this.nBtNextLevelSp;
                    MiniGameMgr.instance._bFlagSpecialView = false;
                    MiniGameMgr.instance.hideBannerAd();
                    return;
                }
                else {
                    this.btnAgain.bottom = this.nBtNextLevel;
                }
            }
            else {
                MiniGameMgr.instance.showBanner({});
            }
        };
        return FailEntryErView;
    }(PopBaseScene));

    var MoreGameRandomGameBoxItem713 = (function (_super) {
        __extends(MoreGameRandomGameBoxItem713, _super);
        function MoreGameRandomGameBoxItem713(data, b) {
            if (b === void 0) { b = false; }
            var _this = _super.call(this) || this;
            _this.className_key = "WeCatMoreGameItemOne713";
            _this.nIndex = data;
            _this.bIsBox713Temp = b;
            _this.skin = "game/uiView/wecat/MoreGameRandomGameBoxItem713.json";
            _this.width = 320;
            _this.height = 390;
            return _this;
        }
        Object.defineProperty(MoreGameRandomGameBoxItem713.prototype, "isBox713Temp", {
            set: function (b) {
                this.bIsBox713Temp = b;
            },
            enumerable: true,
            configurable: true
        });
        MoreGameRandomGameBoxItem713.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            this.addEvent();
            this.initView();
        };
        MoreGameRandomGameBoxItem713.prototype.onRemoved = function () {
            this.removeEvent();
        };
        MoreGameRandomGameBoxItem713.prototype.setData = function (data) {
            this.nIndex = data;
            this.initView();
        };
        MoreGameRandomGameBoxItem713.prototype.initView = function () {
            if (this.nIndex < 0 || this.nIndex >= GDataMgr.getInstance().weCatMoreInfo.length) {
                this.nIndex = GDataMgr.getInstance().weCatMoreInfo.length - 1;
                if (this.nIndex < 0)
                    return;
            }
            this.lableGameName.text = GDataMgr.getInstance().weCatMoreInfo[this.nIndex].name;
            this.imageIcon.skin = GDataMgr.getInstance().weCatMoreInfo[this.nIndex].ad_img;
            this.stGameIndex = GDataMgr.getInstance().weCatMoreInfo[this.nIndex];
        };
        MoreGameRandomGameBoxItem713.prototype.addEvent = function () {
            if (!DeviceUtil.isTTMiniGame()) {
                this.on(Laya.Event.CLICK, this, this.gotoGame);
            }
        };
        MoreGameRandomGameBoxItem713.prototype.removeEvent = function () {
            this.off(Laya.Event.CLICK, this, this.gotoGame);
        };
        MoreGameRandomGameBoxItem713.prototype.gotoGame = function () {
            if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                if (BaseConst.infos.gameInfo.isDY) {
                    PlatformDY.clickGame(this.stGameIndex.ad_id);
                }
                console.log("this.stGameIndex = ", this.stGameIndex);
                var self_1 = this;
                var data = {
                    appId: this.stGameIndex.ad_appid,
                    path: this.stGameIndex.url,
                    success: function () {
                        console.log("navigateToMiniProgram success!");
                        if (BaseConst.infos.gameInfo.isDY) {
                            console.log("self.nIndex = ", self_1.nIndex);
                            PlatformDY.toGame(self_1.stGameIndex.ad_id);
                        }
                    },
                    fail: function (e) {
                        console.log("navigateToMiniProgram fail e =", e);
                        if (!self_1.bIsBox713Temp) {
                            MoreGameRandomGameBox713Temp.bSpecial = true;
                        }
                        ViewManager.getInstance().showView(MoreGameRandomGameBox713Temp);
                    }
                };
                platform.navigateToMiniProgram(data);
            }
        };
        return MoreGameRandomGameBoxItem713;
    }(BaseSceneUISkin));

    var MoreGameItemView = (function (_super) {
        __extends(MoreGameItemView, _super);
        function MoreGameItemView() {
            var _this = _super.call(this) || this;
            _this.className_key = "MoreGameItemView";
            _this.index = 0;
            _this.skin = "game/uiView/wecat/MoreGameItemView.json";
            _this.width = 1080;
            _this.height = 200;
            return _this;
        }
        MoreGameItemView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        MoreGameItemView.prototype.adaptationStage = function () {
        };
        MoreGameItemView.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.init();
                this.addEvent();
            }
        };
        MoreGameItemView.prototype.setData = function (data) {
            this.data = data;
        };
        MoreGameItemView.prototype.refreshData = function (data) {
            this.setData(data);
            this.init();
        };
        MoreGameItemView.prototype.onGogame = function () {
            if (DeviceUtil.isWXMiniGame()) {
                if (BaseConst.infos.gameInfo.isDY) {
                    PlatformDY.clickGame(this.data.ad_id);
                }
                var self_1 = this;
                var data = {
                    appId: this.data.ad_appid,
                    path: this.data.url,
                    success: function () {
                        console.log("navigateToMiniProgram success!");
                        if (BaseConst.infos.gameInfo.isDY) {
                            console.log("self.nIndex = ", self_1.data);
                            PlatformDY.toGame(self_1.data.ad_id);
                        }
                    },
                    fail: function (e) {
                        console.log("navigateToMiniProgram fail e =", e);
                        MoreGameRandomGameBox713Temp.bSpecial = true;
                        ViewManager.getInstance().showView(MoreGameRandomGameBox713Temp);
                    }
                };
                platform.navigateToMiniProgram(data);
            }
        };
        MoreGameItemView.prototype.addEvent = function () {
            this.on(Laya.Event.MOUSE_DOWN, this, this.onGogame);
        };
        MoreGameItemView.prototype.init = function () {
            this.titleLabel.text = this.data.name;
            this.headiconImg.skin = this.data.ad_img;
            this.desLabel.text = Math.ceil(Math.random() * 100000) + '人正在玩';
            this.baokuanImg.visible = Math.random() > 0.5 ? true : false;
        };
        MoreGameItemView.prototype.removeEvent = function () {
            this.off(Laya.Event.MOUSE_DOWN, this, this.onGogame);
        };
        MoreGameItemView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        return MoreGameItemView;
    }(BaseSceneUISkin));

    var MoreGameViewTemp = (function (_super) {
        __extends(MoreGameViewTemp, _super);
        function MoreGameViewTemp() {
            var _this = _super.call(this) || this;
            _this.className_key = "MoreGameViewTemp";
            _this.ITEM_H = 200;
            _this.isAuto = true;
            _this.dataArr = [{ t: 0 }, { t: 1 }, { t: 2 }, { t: 3 }];
            _this.speed = 2;
            _this.dir = -1;
            _this.skin = "game/uiView/wecat/MoreGameView.json";
            return _this;
        }
        MoreGameViewTemp.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        MoreGameViewTemp.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        MoreGameViewTemp.prototype.onAddStage = function () {
            this.initView();
            this.addEvent();
            ViewChangeMgr.getInstance().commonView.visible = false;
            MiniGameMgr.instance.hideBannerAd();
            MiniGameMgr.instance._bFlagSpecialView = false;
            ViewChangeMgr.getInstance().hideImageExitTemp();
        };
        MoreGameViewTemp.prototype.onRemoved = function () {
            this.removeEvent();
            this.stPanel.removeChildren();
            Laya.timer.clearAll(this);
            ViewChangeMgr.getInstance().showImageExitTemp();
        };
        MoreGameViewTemp.prototype.addEvent = function () {
            this.stPanel.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            this.stPanel.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            this.stPanel.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.image_back.on(Laya.Event.CLICK, this, this.onBack);
        };
        MoreGameViewTemp.prototype.removeEvent = function () {
            this.stPanel.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            this.stPanel.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            this.stPanel.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.image_back.off(Laya.Event.CLICK, this, this.onBack);
        };
        MoreGameViewTemp.prototype.onBack = function () {
            this.removeSelf();
            MiniGameMgr.instance._bFlagSpecialView = true;
        };
        MoreGameViewTemp.prototype.mouseDown = function (e) {
            this.isAuto = false;
            this.stx = e.stageX;
            this.sty = e.stageY;
        };
        MoreGameViewTemp.prototype.mouseMove = function (e) {
            var dy = e.stageY - this.sty;
            for (var i = 0; i < this.stPanel.numChildren; i++) {
                var item = this.stPanel.getChildAt(i);
                item.y += dy;
            }
            this.sty = e.stageY;
            this.dir = dy > 0 ? 1 : -1;
            this.refresh();
        };
        MoreGameViewTemp.prototype.mouseUp = function (e) {
            this.isAuto = true;
            this.dir = -1;
        };
        MoreGameViewTemp.prototype.initView = function () {
            Laya.timer.frameLoop(1, this, this.updata);
            var canuseHeight = Laya.stage.height - 280;
            this.maxCount = Math.ceil(canuseHeight / this.ITEM_H);
            this.dataArr = GDataMgr.getInstance().weCatMoreInfo;
            console.log(GDataMgr.getInstance().weCatMoreInfo);
            var didnex = 0;
            for (var i = 0; i < this.maxCount + 1; i++) {
                var item = new MoreGameItemView();
                item.index = didnex;
                item.setData(this.dataArr[item.index]);
                didnex++;
                if (didnex >= this.dataArr.length) {
                    didnex = 0;
                }
                item.y = i * this.ITEM_H;
                this.stPanel.addChild(item);
            }
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.refreshGameList();
            }
        };
        MoreGameViewTemp.prototype.getUpIndexforCurIndex = function (index) {
            if (index >= this.dataArr.length || index < 0)
                return 0;
            return index - 1 >= 0 ? index - 1 : this.dataArr.length - 1;
        };
        MoreGameViewTemp.prototype.getDownIndexforCurIndex = function (index) {
            if (index >= this.dataArr.length || index < 0)
                return 0;
            return index + 1 < this.dataArr.length ? index + 1 : 0;
        };
        MoreGameViewTemp.prototype.updata = function (dt) {
            if (!this.isAuto)
                return;
            for (var i = 0; i < this.stPanel.numChildren; i++) {
                var item = this.stPanel.getChildAt(i);
                item.y += this.speed * this.dir;
            }
            this.refresh();
        };
        MoreGameViewTemp.prototype.refresh = function () {
            var startItem;
            var lastItem;
            startItem = this.stPanel.getChildAt(0);
            lastItem = this.stPanel.getChildAt(this.maxCount);
            if (this.dir == -1) {
                if (startItem.y < -this.ITEM_H) {
                    startItem.y = lastItem.y + lastItem.height;
                    startItem.zOrder = lastItem.zOrder + 1;
                    startItem.index = this.getDownIndexforCurIndex(lastItem.index);
                    startItem.refreshData(this.dataArr[startItem.index]);
                    console.log('idnex-=======>', startItem.index);
                }
            }
            else {
                if (lastItem.y > this.maxCount * this.ITEM_H) {
                    lastItem.y = startItem.y - startItem.height;
                    lastItem.zOrder = startItem.zOrder - 1;
                    lastItem.index = this.getUpIndexforCurIndex(startItem.index);
                    lastItem.refreshData(this.dataArr[lastItem.index]);
                }
            }
        };
        return MoreGameViewTemp;
    }(BaseSceneUISkinPopView));

    var MoreGameRandomGameBox713Temp = (function (_super) {
        __extends(MoreGameRandomGameBox713Temp, _super);
        function MoreGameRandomGameBox713Temp() {
            var _this = _super.call(this) || this;
            _this.className_key = "MoreGameOperRequestTemp";
            _this.nStartY = 0;
            _this.bContinue = false;
            _this.skin = "game/uiView/wecat/MoreGameRandomGameBox713Temp.json";
            _this.nRandomIndxe = 0;
            _this.bAniOver = false;
            _this.nOpenNum = 0;
            return _this;
        }
        MoreGameRandomGameBox713Temp.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.panel_gamelist.height = Laya.stage.height - (1920 - 1640);
        };
        MoreGameRandomGameBox713Temp.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.bAniOver = true;
        };
        MoreGameRandomGameBox713Temp.prototype.addEvent = function () {
            this.registerEvent(this.imageBtReturn, Laya.Event.CLICK, this.onBackTemp, this);
            this.registerEvent(this.imageBtConGame, Laya.Event.CLICK, this.onSpeical, this);
            this.panel_gamelist.on(Laya.Event.MOUSE_DOWN, this, this.mousedown);
            this.registerEvent(this.imageRandom, Laya.Event.CLICK, this.goToGameRandom, this);
        };
        MoreGameRandomGameBox713Temp.prototype.mousedown = function (evt) {
            this.nStartY = evt.currentTarget.mouseY;
            var self = this;
            function mouseMove(evt1) {
                var nYTemp = self.nStartY - evt1.currentTarget.mouseY;
                self.moreGamePanel.y -= nYTemp;
                self.moreGamePanel2.y -= nYTemp;
                self.nStartY = evt1.currentTarget.mouseY;
                if (self.moreGamePanel.y >= 0 && self.moreGamePanel2.y >= 0) {
                    self.moreGamePanel.y = 0;
                    self.moreGamePanel2.y = self.moreGamePanel.height;
                }
            }
            function mouseUp(evt1) {
                this.panel_gamelist.off(Laya.Event.MOUSE_MOVE, this, mouseMove);
                this.panel_gamelist.off(Laya.Event.MOUSE_UP, this, mouseUp);
            }
            this.panel_gamelist.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_gamelist.on(Laya.Event.MOUSE_UP, this, mouseUp);
        };
        MoreGameRandomGameBox713Temp.prototype.initPanel = function () {
        };
        MoreGameRandomGameBox713Temp.prototype.initView = function () {
            this.nOpenNum += 1;
            MiniGameMgr.instance._bFlagSpecialView = false;
            MiniGameMgr.instance.hideBannerAd();
            Laya.timer.clear(this, this.onMove);
            ViewChangeMgr.getInstance().commonView.visible = false;
            this.initPanel();
            var nXStart = 0;
            var nYStart = 0;
            var nCount = 3;
            var aryInfo = [];
            aryInfo = this.getRandomIndex(18);
            this.moreGamePanel.removeChildren();
            this.moreGamePanel.y = 0;
            for (var i = 0; i < aryInfo.length; ++i) {
                var pWeCatMoreGameItemOne = this.moreGamePanel.getChildAt(i);
                if (pWeCatMoreGameItemOne) {
                    pWeCatMoreGameItemOne.setData(aryInfo[i]);
                    pWeCatMoreGameItemOne.isBox713Temp = true;
                }
                else {
                    pWeCatMoreGameItemOne = new MoreGameRandomGameBoxItem713(aryInfo[i], true);
                    pWeCatMoreGameItemOne.isBox713Temp = true;
                    var nAddX = Math.floor(i % nCount);
                    var nYAdd = Math.floor(i / nCount);
                    pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 30 * nAddX;
                    pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
                    this.moreGamePanel.addChild(pWeCatMoreGameItemOne);
                    this.moreGamePanel.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height;
                }
            }
            this.moreGamePanel2.y = this.moreGamePanel.height;
            this.moreGamePanel2.removeChildren();
            for (var i = 0; i < aryInfo.length; ++i) {
                var pWeCatMoreGameItemOne = this.moreGamePanel2.getChildAt(i);
                if (pWeCatMoreGameItemOne) {
                    pWeCatMoreGameItemOne.setData(aryInfo[i]);
                }
                else {
                    pWeCatMoreGameItemOne = new MoreGameRandomGameBoxItem713(aryInfo[i]);
                    var nAddX = Math.floor(i % nCount);
                    var nYAdd = Math.floor(i / nCount);
                    pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 30 * nAddX;
                    pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
                    this.moreGamePanel2.addChild(pWeCatMoreGameItemOne);
                    this.moreGamePanel2.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height;
                }
            }
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.refreshGameList();
            }
            Laya.timer.frameLoop(1, this, this.onMove);
            if ((this.nOpenNum >= 2 || !PlayerDataMgr.getInstance().bIsNewPlayer) && BaseConst.infos.gameInfo.openPsAward == 1) {
                this.timerChangerImage();
            }
            else {
                this.changeImage();
            }
        };
        MoreGameRandomGameBox713Temp.prototype.timerChangerImage = function () {
            this.imageBtConGame.skin = "resource/assets/img/wecat/box_button_2.png";
            this.bContinue = false;
            Laya.timer.clear(this, this.changeImage);
            Laya.timer.once(5000, this, this.changeImage);
        };
        MoreGameRandomGameBox713Temp.prototype.changeImage = function () {
            this.imageBtConGame.skin = "resource/assets/img/wecat/box_button_3.png";
            this.bContinue = true;
        };
        MoreGameRandomGameBox713Temp.prototype.onSpeical = function () {
            if (this.bContinue) {
                if (!MoreGameRandomGameBox713Temp.bSpecial) {
                    if (MoreGameRandomGameBox713Temp.bSuccess) {
                        ViewManager.getInstance().showView(SuccessfulEntryThreeView);
                    }
                    else {
                        ViewManager.getInstance().showView(FailEntryErView);
                    }
                }
                MoreGameRandomGameBox713Temp.bSuccess = false;
                MoreGameRandomGameBox713Temp.bSpecial = false;
                this.removeSelf();
            }
            else {
                this.goToGameRandom();
            }
        };
        MoreGameRandomGameBox713Temp.prototype.onMove = function () {
            var nHight = this.moreGamePanel.height;
            this.moreGamePanel2.y -= 2;
            this.moreGamePanel.y -= 2;
            if (this.moreGamePanel.y <= -nHight) {
                this.moreGamePanel.y = this.moreGamePanel2.y + nHight;
            }
            if (this.moreGamePanel2.y <= -nHight) {
                this.moreGamePanel2.y = this.moreGamePanel.y + nHight;
            }
        };
        MoreGameRandomGameBox713Temp.prototype.onBackTemp = function () {
            if (PlayerDataMgr.getInstance().checkIsSpecial() && BaseConst.infos.gameInfo.MoreGameView == 1) {
                ViewManager.getInstance().showView(MoreGameViewTemp);
            }
            else {
                ViewManager.getInstance().showView(MoreGameRandomGameBox713Temp);
            }
        };
        MoreGameRandomGameBox713Temp.prototype.onBack = function () {
            MoreGameRandomGameBox713Temp.bSuccess = false;
            MoreGameRandomGameBox713Temp.bSpecial = false;
            this.removeSelf();
            Laya.timer.clearAll(this);
        };
        MoreGameRandomGameBox713Temp.prototype.getRandomIndex = function (nMax) {
            if (GDataMgr.getInstance().weCatMoreInfo.length - 1 < 0) {
                return [];
            }
            var nRandom = Utils.random(0, GDataMgr.getInstance().weCatMoreInfo.length - 1);
            var nCount = GDataMgr.getInstance().weCatMoreInfo.length % 3;
            if (nCount > 0) {
                nCount = 3 - nCount;
            }
            nCount = GDataMgr.getInstance().weCatMoreInfo.length + nCount;
            if (nCount <= nMax) {
                nCount = nMax;
            }
            var aryInfo = [];
            for (var i = 0; i < nCount; ++i) {
                aryInfo.push(nRandom);
                nRandom += 1;
                if (nRandom >= GDataMgr.getInstance().weCatMoreInfo.length) {
                    nRandom = 0;
                }
            }
            return aryInfo;
        };
        MoreGameRandomGameBox713Temp.prototype.onClickOper = function () {
        };
        MoreGameRandomGameBox713Temp.prototype.goToGameRandom = function () {
            this.aryCatMiniIconsInfoTemp = GDataMgr.getInstance().weCatMoreInfo;
            if (this.aryCatMiniIconsInfoTemp.length <= 0) {
                return;
            }
            this.nRandomIndxe = Utils.random(0, this.aryCatMiniIconsInfoTemp.length - 1);
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.clickGame(this.aryCatMiniIconsInfoTemp[this.nRandomIndxe].ad_id);
            }
            var self = this;
            var stData = this.aryCatMiniIconsInfoTemp[this.nRandomIndxe].ad_id;
            var data = {
                appId: this.aryCatMiniIconsInfoTemp[self.nRandomIndxe].ad_appid,
                path: this.aryCatMiniIconsInfoTemp[self.nRandomIndxe].url,
                success: function () {
                    console.log("navigateToMiniProgram success");
                    if (BaseConst.infos.gameInfo.isDY) {
                        console.log("self.nIndex = ", stData);
                        PlatformDY.toGame(stData.ad_id);
                    }
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail e =", e);
                    ViewManager.getInstance().showView(MoreGameRandomGameBox713Temp);
                }
            };
            platform.navigateToMiniProgram(data);
        };
        MoreGameRandomGameBox713Temp.bSuccess = false;
        MoreGameRandomGameBox713Temp.bSpecial = false;
        return MoreGameRandomGameBox713Temp;
    }(PopBaseScene));

    var WeCatMoreGameItemOne713Big = (function (_super) {
        __extends(WeCatMoreGameItemOne713Big, _super);
        function WeCatMoreGameItemOne713Big(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "WeCatMoreGameItemOne713Big";
            _this.nIndex = data;
            _this.skin = "game/uiView/wecat/WeCatMoreGameItemOne713Big.json";
            _this.width = 465;
            _this.height = 537;
            return _this;
        }
        WeCatMoreGameItemOne713Big.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            this.addEvent();
            this.initView();
        };
        WeCatMoreGameItemOne713Big.prototype.onRemoved = function () {
            this.removeEvent();
        };
        WeCatMoreGameItemOne713Big.prototype.setData = function (data) {
            this.nIndex = data;
            this.initView();
        };
        WeCatMoreGameItemOne713Big.prototype.initView = function () {
            if (this.nIndex < 0 || this.nIndex >= GDataMgr.getInstance().weCatMoreInfo.length) {
                this.nIndex = GDataMgr.getInstance().weCatMoreInfo.length - 1;
                if (this.nIndex < 0)
                    return;
            }
            this.lableGameName.text = GDataMgr.getInstance().weCatMoreInfo[this.nIndex].name;
            this.imageIcon.skin = GDataMgr.getInstance().weCatMoreInfo[this.nIndex].ad_img;
            this.stGameIndex = GDataMgr.getInstance().weCatMoreInfo[this.nIndex];
        };
        WeCatMoreGameItemOne713Big.prototype.addEvent = function () {
            if (!DeviceUtil.isTTMiniGame()) {
                this.on(Laya.Event.CLICK, this, this.gotoGame);
            }
        };
        WeCatMoreGameItemOne713Big.prototype.removeEvent = function () {
            this.off(Laya.Event.CLICK, this, this.gotoGame);
        };
        WeCatMoreGameItemOne713Big.prototype.gotoGame = function () {
            if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                if (BaseConst.infos.gameInfo.isDY) {
                    PlatformDY.clickGame(this.stGameIndex.ad_id);
                }
                var self_1 = this;
                var data = {
                    appId: this.stGameIndex.ad_appid,
                    path: this.stGameIndex.url,
                    success: function () {
                        console.log("navigateToMiniProgram success!");
                        if (BaseConst.infos.gameInfo.isDY) {
                            console.log("self.nIndex = ", self_1.nIndex);
                            PlatformDY.toGame(self_1.stGameIndex.ad_id);
                        }
                    },
                    fail: function (e) {
                        console.log("navigateToMiniProgram fail e =", e);
                        MoreGameRandomGameBox713Temp.bSpecial = true;
                        ViewManager.getInstance().showView(MoreGameRandomGameBox713Temp);
                    }
                };
                platform.navigateToMiniProgram(data);
            }
        };
        return WeCatMoreGameItemOne713Big;
    }(BaseSceneUISkin));

    var SuccessfulEntryThreeVivoView = (function (_super) {
        __extends(SuccessfulEntryThreeVivoView, _super);
        function SuccessfulEntryThreeVivoView() {
            var _this = _super.call(this) || this;
            _this.className_key = "SuccessfulEntryThreeVivoView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this._isShowBox = false;
            _this._nGlodAdd = 50;
            _this._nGlodRadio = 4;
            _this._bRecvAward = false;
            _this.skin = 'game/uiView/settlement/SuccessfulEntryThreeVivoView.json';
            return _this;
        }
        SuccessfulEntryThreeVivoView.prototype.initMiniGame = function () {
            AddPowerView._bCloseBinner = false;
            ViewChangeMgr.getInstance().commonView.addBtEvent();
            this._isShowBox = false;
            if (!this.aniReal) {
                this.createSke("resource/assets/img/ani/celebrate/celebrate.sk");
            }
            else {
                this.aniReal.play(0, false);
                this.grp_center.addChild(this.aniReal);
            }
            if (!this.aniRealNanZhu) {
                this.createSkeletonNanZhu("resource/assets/img/ani/celebrate/chenggong.sk");
            }
            else {
                this.aniRealNanZhu.play(0, true);
                this.boxAnim.addChild(this.aniRealNanZhu);
            }
            MiniGameMgr.instance.showInsertAd({});
        };
        SuccessfulEntryThreeVivoView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            Laya.timer.clearAll(this);
            if (this.aniReal) {
                this.aniReal.stop();
                this.aniReal.removeSelf();
            }
            if (this.aniRealNanZhu) {
                this.aniRealNanZhu.stop();
                this.aniRealNanZhu.removeSelf();
            }
        };
        SuccessfulEntryThreeVivoView.prototype.initView = function () {
            MiniGameMgr.instance._onShareVideoSuccess = false;
            SoundMgr.getInstance().playEffect("win", 1);
            this._bRecvAward = false;
            if (BaseConst.infos.gameInfo.openPsAward) {
                this.sprDouble.visible = true;
            }
            else {
                this.sprDouble.visible = false;
            }
            this.initTextLable();
            this.showNativeAd();
        };
        SuccessfulEntryThreeVivoView.prototype.showNativeAd = function () {
            return __awaiter(this, void 0, void 0, function () {
                var nativeAdData, data_1, text_1, startHour, endHour, date, week, hour, fun;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
                            this.box_ad.removeChildren();
                            return [4, MiniGameMgr.instance.loadNativeAd()];
                        case 1:
                            nativeAdData = _a.sent();
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                            this.btn_chakan.visible = false;
                            this.imgMask.left = 320;
                            if (nativeAdData) {
                                this.btn_chakan.visible = true;
                                console.log("原生广告数据", nativeAdData);
                                data_1 = nativeAdData.adList[0];
                                this.btn_chakan.right = 65;
                                this.imgMask.left = 65;
                                text_1 = this.txt_chakan;
                                if (text_1) {
                                    if (MiniGameMgr.instance.platformInfos.touchByMistakeByLook) {
                                        text_1.text = '查看';
                                        startHour = MiniGameMgr.instance.platformInfos.startHour;
                                        endHour = MiniGameMgr.instance.platformInfos.endHour;
                                        date = new Date();
                                        week = date.getDay();
                                        if (week == 0 || week == 6) {
                                            text_1.text = '查看';
                                        }
                                        else {
                                            hour = date.getHours();
                                            if (hour >= startHour && hour <= endHour) {
                                                text_1.text = '查看广告';
                                            }
                                            else {
                                                text_1.text = '查看';
                                            }
                                        }
                                    }
                                    else {
                                        text_1.text = "查看广告";
                                    }
                                }
                                this.initNativeBanner(nativeAdData);
                                nativeAdData.nativeAd.reportAdShow({ adId: data_1.adId });
                                fun = function () {
                                    nativeAdData.nativeAd.reportAdClick({ adId: data_1.adId });
                                    if (text_1) {
                                        text_1.text = "查看广告";
                                    }
                                };
                                this.btn_chakan.on(Laya.Event.CLICK, this, this.onRerort, [fun]);
                                this.box_ad.on(Laya.Event.CLICK, this, this.onRerort, [fun]);
                            }
                            this.showBanner({ className_key: this.className_key });
                            return [2];
                    }
                });
            });
        };
        SuccessfulEntryThreeVivoView.prototype.initNativeBanner = function (data) {
            this.nativeData = data;
            this.box_ad.removeChildren();
            var ad = data.adList[0];
            var icon_bg = new Laya.Image;
            icon_bg.size(1000, 500);
            icon_bg.skin = ad.imgUrlList[0];
            this.box_ad.addChild(icon_bg);
            var icon_flg = new Laya.Image();
            icon_flg.skin = ad.logoUrl;
            icon_flg.top = icon_flg.right = 0;
            icon_bg.addChild(icon_flg);
        };
        SuccessfulEntryThreeVivoView.prototype.onRerort = function (fun) {
            if (fun && fun instanceof Function) {
                fun();
            }
        };
        SuccessfulEntryThreeVivoView.prototype.initTextLable = function () {
            var objConfig = ConfigMgr.getInstance().getGCDBID(12);
            if (objConfig) {
                this._nGlodAdd = parseInt(objConfig.strValue);
            }
            objConfig = ConfigMgr.getInstance().getGCDBID(13);
            if (objConfig) {
                this._nGlodRadio = parseInt(objConfig.strValue);
                this.labDesc.text = objConfig.strDesc;
            }
            BitmapLabelUtils.setLabel(this.sprCost, this._nGlodRadio.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
            var nCost = 1;
            objConfig = ConfigMgr.getInstance().getGCDBID(8);
            if (objConfig) {
                nCost = parseInt(objConfig.strValue);
            }
            BitmapLabelUtils.setLabel(this.sprCostPs, nCost.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
            var bAddMore = this._nGlodAdd * this._nGlodRadio;
            BitmapLabelUtils.setLabel(this.sprMore, bAddMore.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
            if (this.sprDouble.visible) {
                var nReal = this._nGlodAdd * this._nGlodRadio;
                BitmapLabelUtils.setLabel(this.sprGold, nReal.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
            }
            else {
                BitmapLabelUtils.setLabel(this.sprGold, this._nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
            }
        };
        SuccessfulEntryThreeVivoView.prototype.onClick = function (evt) {
            switch (evt.currentTarget) {
                case this.btnLab:
                    this.sucfulEntryThreeNextLevel();
                    break;
                case this.btnHome:
                    this.returnToHome();
                    break;
                case this.imgMask:
                    this.sucRecvAward();
                    break;
                case this.btnDouble:
                    this.onDoubleGlods();
                    break;
            }
        };
        SuccessfulEntryThreeVivoView.prototype.addEvent = function () {
            this.registerEvent(this.btnLab, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnHome, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnAgain, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.imgMask, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnDouble, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnNextLevel, Laya.Event.CLICK, this.onClick, this);
        };
        SuccessfulEntryThreeVivoView.prototype.removeEvent = function () {
            this.btn_chakan.off(Laya.Event.CLICK, this, this.onRerort);
            this.box_ad.off(Laya.Event.CLICK, this, this.onRerort);
            _super.prototype.removeEvent.call(this);
        };
        SuccessfulEntryThreeVivoView.prototype.onDoubleGlods = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            this.sprDouble.visible = !this.sprDouble.visible;
            if (this.sprDouble.visible) {
                var numReal = this._nGlodAdd * this._nGlodRadio;
                BitmapLabelUtils.setLabel(this.sprGold, numReal.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
            }
            else {
                BitmapLabelUtils.setLabel(this.sprGold, this._nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
            }
        };
        SuccessfulEntryThreeVivoView.prototype.sucShareGame = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            MiniGameMgr.instance.shareAppMsg();
        };
        SuccessfulEntryThreeVivoView.prototype.sucRecvAward = function () {
            var _this = this;
            SoundMgr.getInstance().playEffect("button", 1);
            if (DeviceUtil.isQQMiniGame() && !this._isShowBox && Math.random() < BaseConst.infos.gameInfo.succShowBox) {
                MiniGameMgr.instance.hideBlockAD();
                MiniGameMgr.instance.showAdBox(function () {
                    _this._isShowBox = true;
                    MiniGameMgr.instance.showBlockAD();
                });
                return;
            }
            if (this._bRecvAward) {
                this.sucfulEntryThreeNextLevel();
                return;
            }
            if (this.sprDouble.visible) {
                MiniGameMgr.instance.playVideoAd({
                    successFun: function () {
                        _this.sendAwardAfterWatchVideoAd();
                    }
                });
            }
            else {
                this._nGlodRadio = 1;
                this.sendAwardAfterWatchVideoAd();
            }
        };
        SuccessfulEntryThreeVivoView.prototype.sendAwardAfterWatchVideoAd = function () {
            this._bRecvAward = true;
            this.flayGlodSuccess();
            var numAdd = this._nGlodAdd * this._nGlodRadio;
            PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, numAdd);
            this.sucfulEntryThreeNextLevel();
        };
        SuccessfulEntryThreeVivoView.prototype.sucfulEntryThreeNextLevel = function () {
            var numCost = 1;
            var objData = ConfigMgr.getInstance().getGCDBID(8);
            if (objData) {
                numCost = parseInt(objData.strValue);
            }
            var self = this;
            var fun = function () {
                MoreGameRandomGameBox713.bGotoNextGame = true;
                ViewManager.getInstance().showView(MoreGameRandomGameBox713);
                MiniGameMgr.instance._bFlagSpecialView = true;
                self.removeSelf();
            };
            var bln = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, numCost);
            if (!bln) {
                GameManager.instance.onPowerNotEnough();
                return;
            }
            else {
                this.removeEvent();
                if (DeviceUtil.isWXMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
                    if (!this._bRecvAward) {
                        Laya.timer.once(1000, this, function () {
                            fun();
                        });
                    }
                    else {
                        fun();
                    }
                }
                else {
                    PlayerDataMgr.getInstance().subProp(PType.e_GType_Sp, numCost);
                    if (PlayerDataMgr.getInstance().stPlayerDataBase.nCurLevel >= PlayerDataMgr.getInstance().nMaxLevelCount - 1
                        && DeviceUtil.isQQMiniGame()) {
                        TipsManager.getInstance().showDefaultTips("明日更新关卡，明天再来吧！");
                        PlayerDataMgr.getInstance().isMaxLevel();
                        this.returnToHome();
                    }
                    else {
                        ViewChangeMgr.getInstance().goToNextLevel();
                        MiniGameMgr.instance._bFlagSpecialView = true;
                        this.removeSelf();
                    }
                }
            }
        };
        SuccessfulEntryThreeVivoView.prototype.returnToHome = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            GameManager.instance.backHome();
            MiniGameMgr.instance._bFlagSpecialView = true;
            this.removeSelf();
        };
        SuccessfulEntryThreeVivoView.prototype.flayGlodSuccess = function () {
            var point = new Laya.Point();
            point.x = this.imgGoodsTypeUp.x;
            point.y = this.imgGoodsTypeUp.y;
            var parent = this.imgGoodsTypeUp.parent;
            point = parent.localToGlobal(point);
            AnimationMgr.instance.flayGloda(point.x, point.y, 341, 105);
        };
        SuccessfulEntryThreeVivoView.prototype.createSke = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                AnimationMgr.instance.showSkeAnimation(url, function (boomAnimation) {
                    boomAnimation.player.playbackRate = 1;
                    boomAnimation.autoSize = true;
                    boomAnimation.scale(1, 1);
                    boomAnimation.play(0, false);
                    boomAnimation.x = _this.grp_center.width / 2;
                    boomAnimation.y = _this.grp_center.height / 2;
                    _this.grp_center.addChild(boomAnimation);
                    _this.aniReal = boomAnimation;
                    resolve(boomAnimation);
                }, 1);
            });
        };
        SuccessfulEntryThreeVivoView.prototype.createSkeletonNanZhu = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                AnimationMgr.instance.showSkeAnimation(url, function (boomAnimation) {
                    boomAnimation.player.playbackRate = 1;
                    boomAnimation.autoSize = true;
                    boomAnimation.scale(1, 1);
                    boomAnimation.play(0, true);
                    boomAnimation.x = 250;
                    boomAnimation.y = 400 + 80;
                    _this.boxAnim.addChild(boomAnimation);
                    _this.aniRealNanZhu = boomAnimation;
                    resolve(boomAnimation);
                }, 1);
            });
        };
        return SuccessfulEntryThreeVivoView;
    }(PopBaseScene));

    var SuccessfulEntryOneView = (function (_super) {
        __extends(SuccessfulEntryOneView, _super);
        function SuccessfulEntryOneView() {
            var _this = _super.call(this) || this;
            _this.className_key = "SuccessfulEntryOneView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this.yTemp = null;
            _this._nTimeDown = 5;
            _this._nCountMax = 5;
            _this._nPsAdd = 1;
            _this._nAddPerOne = 0;
            _this._nCurCount = 0;
            _this._bTimeOver = false;
            _this._bAniRunning = false;
            _this._bFirst = true;
            _this._nTimeOverTemp = 0;
            _this._nLastClickTime = 0;
            _this.skin = "game/uiView/settlement/SuccessfulEntryOneView.json";
            return _this;
        }
        SuccessfulEntryOneView.prototype.initMiniGame = function () {
            MiniGameMgr.instance._bFlagSpecialView = false;
            MiniGameMgr.instance.showChaPinAd();
            this.btnGet.bottom = 0;
            if (DeviceUtil.isTTMiniGame()) {
                if (MiniGameMgr.instance.appName() == 'Douyin') {
                    this.btnGet.bottom = 446;
                }
            }
            this._moveBtnTween = null;
            MiniGameMgr.instance.hideBannerAd();
            ViewChangeMgr.getInstance().commonView.visible = false;
        };
        SuccessfulEntryOneView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            Laya.timer.clearAll(this.imgIcon);
            this._bFirst = false;
            this._bAniRunning = false;
            Laya.Tween.clearAll(this.imgIcon);
            Laya.timer.clearAll(this);
            MiniGameMgr.instance._bFlagSpecialView = true;
        };
        SuccessfulEntryOneView.prototype.initView = function () {
            SoundMgr.getInstance().playEffect("win", 1);
            this._nTimeDown = 5;
            this._nCountMax = 5;
            this._nPsAdd = 1;
            this._nAddPerOne = 0;
            this._nCurCount = 0;
            this._bTimeOver = false;
            this._bAniRunning = true;
            this._bFirst = true;
            this.initData();
            this._nAddPerOne = Math.floor(870 / this._nCountMax);
            this.imgValue.width = 0;
            this.openTimeDown();
            this.openHandAnimation();
        };
        SuccessfulEntryOneView.prototype.initData = function () {
            var objData = ConfigMgr.getInstance().getGCDBID(9);
            if (objData) {
                this._nTimeDown = parseInt(objData.strValue);
            }
            BitmapLabelUtils.setLabel(this.sprTime, this._nTimeDown.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");
            objData = ConfigMgr.getInstance().getGCDBID(10);
            if (objData) {
                this._nCountMax = parseInt(objData.strValue);
            }
            objData = ConfigMgr.getInstance().getGCDBID(11);
            if (objData) {
                this._nPsAdd = parseInt(objData.strValue);
            }
            objData = ConfigMgr.getInstance().getGCDBID(14);
            if (objData) {
                this._nTimeOverTemp = parseInt(objData.strValue);
            }
        };
        SuccessfulEntryOneView.prototype.addEvent = function () {
            this.registerEvent(this.btnGet, Laya.Event.CLICK, this.btnGetClickReceiveAward, this);
        };
        SuccessfulEntryOneView.prototype.removeEvent = function () {
            _super.prototype.removeEvent.call(this);
        };
        SuccessfulEntryOneView.prototype.btnGetClickReceiveAward = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            if (this._bTimeOver) {
                return;
            }
            this._nCurCount += 1;
            var numCur = this._nCurCount * this._nAddPerOne;
            this.imgValue.width = numCur;
            if (this._nCurCount >= this._nCountMax) {
                Laya.timer.clear(this, this.timeDown);
                this.procLogicOver();
            }
            this.checkClick();
        };
        SuccessfulEntryOneView.prototype.checkClick = function () {
            this._nLastClickTime = GameLogicProcessMgr.GetCurTimea();
        };
        SuccessfulEntryOneView.prototype.openTimeDown = function () {
            BitmapLabelUtils.setLabel(this.sprTime, this._nTimeDown.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");
            Laya.timer.loop(1000, this, this.timeDown);
            Laya.timer.loop(this._nTimeOverTemp, this, this.dealCount);
        };
        SuccessfulEntryOneView.prototype.dealCount = function () {
            this._nCurCount -= 1;
            this._nCurCount = this._nCurCount < 0 ? 0 : this._nCurCount;
            var numCur = this._nCurCount * this._nAddPerOne;
            this.imgValue.width = numCur;
        };
        SuccessfulEntryOneView.prototype.timeDown = function () {
            this._nTimeDown -= 1;
            var numTemp = this._nTimeDown;
            numTemp = numTemp < 0 ? 0 : numTemp;
            if (this._nTimeDown < 0) {
                this._bTimeOver = true;
                this.procLogicOver();
            }
            else {
                BitmapLabelUtils.setLabel(this.sprTime, this._nTimeDown.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");
            }
        };
        SuccessfulEntryOneView.prototype.procLogicOver = function () {
            Laya.timer.clear(this, this.timeDown);
            if (this._bTimeOver) {
                PlayerDataMgr.getInstance().showTips("领取失败");
            }
            else if (this._nCurCount >= this._nCountMax) {
                PlayerDataMgr.getInstance().AddProp(PType.e_GType_Sp, this._nPsAdd);
                PlayerDataMgr.getInstance().showTips("体力+" + this._nPsAdd.toString());
            }
            if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                if (PlayerDataMgr.bGlobEnterGame) {
                    ViewManager.getInstance().showView(MoreGameOperRequestTwo);
                }
                else {
                    if (PlayerDataMgr.getInstance().nGotoLevel != 0) {
                        ViewChangeMgr.getInstance().gotoLevel(PlayerDataMgr.getInstance().nGotoLevel);
                    }
                    else {
                        if (PlayerDataMgr.getInstance().bEnterGameFromGameHome) {
                            ViewChangeMgr.getInstance().CurLevelBasea.startGame();
                        }
                        else {
                            ViewChangeMgr.getInstance().goToNextLevel();
                        }
                    }
                    ViewChangeMgr.getInstance().commonView.visible = true;
                }
                PlayerDataMgr.getInstance().bEnterGameFromGameHome = false;
                PlayerDataMgr.getInstance().nGotoLevel = 0;
                MiniGameMgr.instance._bFlagSpecialView = true;
                this.removeSelf();
            }
            else {
                this.showSuccessView();
            }
        };
        SuccessfulEntryOneView.prototype.showSuccessView = function () {
            if (DeviceUtil.isVIVOMiniGame()) {
                ViewManager.getInstance().showView(SuccessfulEntryThreeVivoView);
            }
            else {
                ViewManager.getInstance().showView(SuccessfulEntryThreeView);
            }
            ViewChangeMgr.getInstance().commonView.visible = true;
            this.removeSelf();
            MiniGameMgr.instance._bFlagSpecialView = true;
        };
        SuccessfulEntryOneView.prototype.removeSelf = function () {
            if (this._moveBtnTween) {
                this._moveBtnTween.recover();
                this._moveBtnTween = null;
            }
            return _super.prototype.removeSelf.call(this);
        };
        SuccessfulEntryOneView.prototype.openHandAnimation = function () {
            if (!this._bAniRunning) {
                return;
            }
            if (this.yTemp == null) {
                this.yTemp = this.imgIcon.y;
            }
            this.imgIcon.y = this.yTemp;
            AnimationMgr.instance.VTween(this.imgIcon, this.imgIcon, 2);
        };
        return SuccessfulEntryOneView;
    }(PopBaseScene));

    var FailEntryTwoVivoView = (function (_super) {
        __extends(FailEntryTwoVivoView, _super);
        function FailEntryTwoVivoView() {
            var _this = _super.call(this) || this;
            _this.className_key = "FailEntryTwoVivoView";
            _this.skin = "game/uiView/settlement/FailEntryTwoVivoView.json";
            return _this;
        }
        FailEntryTwoVivoView.prototype.initMiniGame = function () {
        };
        FailEntryTwoVivoView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            MiniGameMgr.instance.hideBlockAD();
            this.removeEvent();
            this._bRecvAward = false;
            Laya.timer.clearAll(this);
        };
        FailEntryTwoVivoView.prototype.onClick = function (evt) {
            switch (evt.currentTarget) {
                case this.btnAgain:
                    this.failEntryErReStartGame();
                    break;
                case this.btnHome:
                    this.returnToHome();
                    break;
                case this.btnGet:
                    this.onWatchVideoReceiveAward();
                    break;
            }
        };
        FailEntryTwoVivoView.prototype.addEvent = function () {
            this.registerEvent(this.btnAgain, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnHome, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnGet, Laya.Event.CLICK, this.onClick, this);
        };
        FailEntryTwoVivoView.prototype.showNativeAd = function () {
            return __awaiter(this, void 0, void 0, function () {
                var nativeAdData, data_1, text_1, startHour, endHour, date, week, hour, fun;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
                            this.box_ad.removeChildren();
                            return [4, MiniGameMgr.instance.loadNativeAd()];
                        case 1:
                            nativeAdData = _a.sent();
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                            this.btn_chakan.visible = false;
                            this.btnGet.left = 320;
                            if (nativeAdData) {
                                this.btn_chakan.visible = true;
                                console.log("原生广告数据", nativeAdData);
                                data_1 = nativeAdData.adList[0];
                                this.btn_chakan.right = 65;
                                this.btnGet.left = 65;
                                text_1 = this.txt_chakan;
                                if (text_1) {
                                    if (MiniGameMgr.instance.platformInfos.touchByMistakeByLook) {
                                        text_1.text = '查看';
                                        startHour = MiniGameMgr.instance.platformInfos.startHour;
                                        endHour = MiniGameMgr.instance.platformInfos.endHour;
                                        date = new Date();
                                        week = date.getDay();
                                        if (week == 0 || week == 6) {
                                            text_1.text = '查看';
                                        }
                                        else {
                                            hour = date.getHours();
                                            if (hour >= startHour && hour <= endHour) {
                                                text_1.text = '查看广告';
                                            }
                                            else {
                                                text_1.text = '查看';
                                            }
                                        }
                                    }
                                    else {
                                        text_1.text = "查看广告";
                                    }
                                }
                                this.initNativeBanner(nativeAdData);
                                nativeAdData.nativeAd.reportAdShow({ adId: data_1.adId });
                                fun = function () {
                                    nativeAdData.nativeAd.reportAdClick({ adId: data_1.adId });
                                    if (text_1) {
                                        text_1.text = "查看广告";
                                    }
                                };
                                this.btn_chakan.on(Laya.Event.CLICK, this, this.onRerort, [fun]);
                                this.box_ad.on(Laya.Event.CLICK, this, this.onRerort, [fun]);
                            }
                            this.showBanner({ className_key: this.className_key });
                            return [2];
                    }
                });
            });
        };
        FailEntryTwoVivoView.prototype.initNativeBanner = function (data) {
            this.nativeData = data;
            this.box_ad.removeChildren();
            var ad = data.adList[0];
            var icon_bg = new Laya.Image;
            icon_bg.size(1000, 500);
            icon_bg.skin = ad.imgUrlList[0];
            this.box_ad.addChild(icon_bg);
            var icon_flg = new Laya.Image();
            icon_flg.skin = ad.logoUrl;
            icon_flg.top = icon_flg.right = 0;
            icon_bg.addChild(icon_flg);
        };
        FailEntryTwoVivoView.prototype.onRerort = function (fun) {
            if (fun && fun instanceof Function) {
                fun();
            }
        };
        FailEntryTwoVivoView.prototype.removeEvent = function () {
            this.btn_chakan.off(Laya.Event.CLICK, this, this.onRerort);
            this.box_ad.off(Laya.Event.CLICK, this, this.onRerort);
            _super.prototype.removeEvent.call(this);
        };
        FailEntryTwoVivoView.prototype.failEntryErReStartGame = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            if (GameManager.instance.restartGame()) {
                MiniGameMgr.instance._bFlagSpecialView = true;
                this.removeSelf();
            }
        };
        FailEntryTwoVivoView.prototype.returnToHome = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_GH;
            ViewChangeMgr.getInstance().CurLevelBasea.returnToHome();
            MiniGameMgr.instance._bFlagSpecialView = true;
            this.removeSelf();
        };
        FailEntryTwoVivoView.prototype.removeSelf = function () {
            this.box_ad.removeChildren();
            return _super.prototype.removeSelf.call(this);
        };
        FailEntryTwoVivoView.prototype.initView = function () {
            MiniGameMgr.instance._onShareVideoSuccess = false;
            this.resetData();
            ViewChangeMgr.getInstance().commonView.addBtEvent();
            this.showNativeAd();
        };
        FailEntryTwoVivoView.prototype.resetData = function () {
            this._bRecvAward = false;
            AddPowerView._bCloseBinner = false;
            var objData = ConfigMgr.getInstance().getGCDBID(7);
            if (objData) {
                this._nGlodAddByWathcVideo = parseInt(objData.strValue);
            }
            this.sptext.text = this._nGlodAddByWathcVideo.toString();
        };
        FailEntryTwoVivoView.prototype.onWatchVideoReceiveAward = function () {
            var _this = this;
            console.log("onWatchVideoRecvAward = ", this._bRecvAward);
            if (this._bRecvAward) {
                TipsManager.getInstance().showDefaultTips("已经领过奖励了哦");
                return;
            }
            MiniGameMgr.instance.playVideoAd({
                successFun: function () {
                    _this._bRecvAward = true;
                    _this.addGlod();
                }
            });
        };
        FailEntryTwoVivoView.prototype.addGlod = function () {
            this._bRecvAward = true;
            console.log("addGlodReal = ", this._bRecvAward);
            PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, this._nGlodAddByWathcVideo);
            this.flyGlodRecv();
        };
        FailEntryTwoVivoView.prototype.flyGlodRecv = function () {
            console.log("flayGlodRecv");
            var point = new Laya.Point();
            point.x = this.imageGoods.x;
            point.y = this.imageGoods.y;
            var parent = this.imageGoods.parent;
            point = parent.localToGlobal(point);
            AnimationMgr.instance.flayGloda(point.x, point.y, 341, 105);
        };
        FailEntryTwoVivoView.prototype.startFailImageBtShareAni = function () {
            Laya.timer.clearAll(this.btnGet);
            AnimationMgr.instance.zoomTweena(this.btnGet, this.btnGet);
        };
        return FailEntryTwoVivoView;
    }(PopBaseScene));

    var WeCatMoreGameItemTwo = (function (_super) {
        __extends(WeCatMoreGameItemTwo, _super);
        function WeCatMoreGameItemTwo(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "WeCatMoreGameItemTwo";
            _this.nIndex = data;
            _this.skin = "game/uiView/platform/WeCatMoreGameItemTwo.json";
            _this.width = 210;
            _this.height = 258;
            return _this;
        }
        WeCatMoreGameItemTwo.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            this.addEvent();
            this.initView();
        };
        WeCatMoreGameItemTwo.prototype.onRemoved = function () {
            this.removeEvent();
        };
        WeCatMoreGameItemTwo.prototype.setData = function (data) {
            this.nIndex = data;
            this.initView();
        };
        WeCatMoreGameItemTwo.prototype.initView = function () {
            if (this.nIndex < 0 || this.nIndex >= GDataMgr.getInstance().weCatMoreInfo.length) {
                this.nIndex = GDataMgr.getInstance().weCatMoreInfo.length - 1;
                if (this.nIndex < 0)
                    return;
            }
            var stData = GDataMgr.getInstance().weCatMoreInfo;
            var stDataTemp = GDataMgr.getInstance().weCatMoreInfo[this.nIndex];
            this.lableGameName.text = GDataMgr.getInstance().weCatMoreInfo[this.nIndex].name;
            this.imageIcon.skin = GDataMgr.getInstance().weCatMoreInfo[this.nIndex].ad_img;
            this.stGameIndex = GDataMgr.getInstance().weCatMoreInfo[this.nIndex];
        };
        WeCatMoreGameItemTwo.prototype.addEvent = function () {
            if (!DeviceUtil.isTTMiniGame()) {
                this.on(Laya.Event.CLICK, this, this.gotoGame);
            }
        };
        WeCatMoreGameItemTwo.prototype.removeEvent = function () {
            this.off(Laya.Event.CLICK, this, this.gotoGame);
        };
        WeCatMoreGameItemTwo.prototype.gotoGame = function () {
            if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                if (BaseConst.infos.gameInfo.isDY) {
                    PlatformDY.clickGame(this.stGameIndex.ad_id);
                }
                var self_1 = this;
                var data = {
                    appId: this.stGameIndex.ad_appid,
                    path: this.stGameIndex.url,
                    success: function () {
                        console.log("navigateToMiniProgram success!");
                        if (BaseConst.infos.gameInfo.isDY) {
                            console.log("self.nIndex = ", self_1.nIndex);
                            PlatformDY.toGame(self_1.stGameIndex.ad_id);
                        }
                    },
                    fail: function (e) {
                        console.log("navigateToMiniProgram fail e =", e);
                        if (DeviceUtil.isWXMiniGame()) {
                            ViewManager.getInstance().showView(MoreGameRandomGameBox713);
                        }
                    }
                };
                platform.navigateToMiniProgram(data);
            }
        };
        return WeCatMoreGameItemTwo;
    }(BaseSceneUISkin));

    var WeCatMoreGameView = (function (_super) {
        __extends(WeCatMoreGameView, _super);
        function WeCatMoreGameView() {
            var _this = _super.call(this) || this;
            _this.className_key = "WeCatMoreGameView";
            _this.nStartY = 0;
            _this.bWeCatShow = false;
            _this.skin = "game/uiView/platform/WeCatMoreGameView.json";
            return _this;
        }
        WeCatMoreGameView.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            this.addEvent();
            this.initView();
            this.viewAniIn();
        };
        WeCatMoreGameView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        WeCatMoreGameView.prototype.initPanel = function () {
        };
        WeCatMoreGameView.prototype.initView = function () {
            var nXStart = 0;
            var nYStart = 0;
            var nCount = 3;
            var aryInfo = [];
            aryInfo = this.getRandomIndex(12);
            this.moreGamePanel.removeChildren();
            this.moreGamePanel.y = 0;
            for (var i = 0; i < aryInfo.length; ++i) {
                var pWeCatMoreGameItemOne = this.moreGamePanel.getChildAt(i);
                if (pWeCatMoreGameItemOne) {
                    pWeCatMoreGameItemOne.setData(aryInfo[i]);
                }
                else {
                    pWeCatMoreGameItemOne = new WeCatMoreGameItemTwo(aryInfo[i]);
                    var nAddX = Math.floor(i % nCount);
                    var nYAdd = Math.floor(i / nCount);
                    pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 15 * nAddX;
                    pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
                    this.moreGamePanel.addChild(pWeCatMoreGameItemOne);
                    this.moreGamePanel.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height + 10;
                }
            }
            this.moreGamePanel2.y = this.moreGamePanel.height;
            this.moreGamePanel2.removeChildren();
            for (var i = 0; i < aryInfo.length; ++i) {
                var pWeCatMoreGameItemOne = this.moreGamePanel2.getChildAt(i);
                if (pWeCatMoreGameItemOne) {
                    pWeCatMoreGameItemOne.setData(aryInfo[i]);
                }
                else {
                    pWeCatMoreGameItemOne = new WeCatMoreGameItemTwo(aryInfo[i]);
                    var nAddX = Math.floor(i % nCount);
                    var nYAdd = Math.floor(i / nCount);
                    pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 15 * nAddX;
                    pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
                    this.moreGamePanel2.addChild(pWeCatMoreGameItemOne);
                    this.moreGamePanel2.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height + 10;
                }
            }
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.refreshGameList();
            }
            Laya.timer.frameLoop(1, this, this.onMove);
        };
        WeCatMoreGameView.prototype.onMove = function () {
            var nHight = this.moreGamePanel.height;
            this.moreGamePanel2.y -= 1.5;
            this.moreGamePanel.y -= 1.5;
            if (this.moreGamePanel.y <= -nHight) {
                this.moreGamePanel.y = this.moreGamePanel2.y + nHight;
            }
            if (this.moreGamePanel2.y <= -nHight) {
                this.moreGamePanel2.y = this.moreGamePanel.y + nHight;
            }
        };
        WeCatMoreGameView.prototype.getRandomIndex = function (nMax) {
            if (GDataMgr.getInstance().weCatMoreInfo.length - 1 < 0) {
                return [];
            }
            var nRandom = Utils.random(0, GDataMgr.getInstance().weCatMoreInfo.length - 1);
            var nCount = GDataMgr.getInstance().weCatMoreInfo.length % 3;
            if (nCount > 0) {
                nCount = 3 - nCount;
            }
            nCount = GDataMgr.getInstance().weCatMoreInfo.length + nCount;
            if (nCount <= nMax) {
                nCount = nMax;
            }
            var aryInfo = [];
            for (var i = 0; i < nCount; ++i) {
                aryInfo.push(nRandom);
                nRandom += 1;
                if (nRandom >= GDataMgr.getInstance().weCatMoreInfo.length) {
                    nRandom = 0;
                }
            }
            return aryInfo;
        };
        WeCatMoreGameView.prototype.addEvent = function () {
            this.imageBtWeCat.on(Laya.Event.CLICK, this, this.viewAniOut);
            this.panel_gamelist.on(Laya.Event.MOUSE_DOWN, this, this.mousedown);
        };
        WeCatMoreGameView.prototype.removeEvent = function () {
            this.imageBtWeCat.off(Laya.Event.CLICK, this, this.viewAniOut);
        };
        WeCatMoreGameView.prototype.mousedown = function (evt) {
            this.nStartY = evt.currentTarget.mouseY;
            var self = this;
            function mouseMove(evt1) {
                var nYTemp = self.nStartY - evt1.currentTarget.mouseY;
                self.moreGamePanel.y -= nYTemp;
                self.moreGamePanel2.y -= nYTemp;
                self.nStartY = evt1.currentTarget.mouseY;
                if (self.moreGamePanel.y >= 0 && self.moreGamePanel2.y >= 0) {
                    self.moreGamePanel.y = 0;
                    self.moreGamePanel2.y = self.moreGamePanel.height;
                }
            }
            function mouseUp(evt1) {
                this.panel_gamelist.off(Laya.Event.MOUSE_MOVE, this, mouseMove);
                this.panel_gamelist.off(Laya.Event.MOUSE_UP, this, mouseUp);
            }
            this.panel_gamelist.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_gamelist.on(Laya.Event.MOUSE_UP, this, mouseUp);
        };
        WeCatMoreGameView.prototype.weCatViewOper = function () {
            var _this = this;
            this.bWeCatShow = !this.bWeCatShow;
            this.imageBtWeCat.off(Laya.Event.CLICK, this, this.weCatViewOper);
            if (this.bWeCatShow) {
                Laya.Tween.to(this.boxWeCatMoreGame, { x: -713 }, 1000, null, Laya.Handler.create(this, function (args) {
                    _this.imageBtWeCat.on(Laya.Event.CLICK, _this, _this.weCatViewOper);
                    _this.imageBtWeCat.skin = "resource/assets/img/common/game_button_2.png";
                }));
            }
            else {
                Laya.Tween.to(this.boxWeCatMoreGame, { x: 0 }, 1000, null, Laya.Handler.create(this, function (args) {
                    _this.imageBtWeCat.on(Laya.Event.CLICK, _this, _this.weCatViewOper);
                    _this.imageBtWeCat.skin = "resource/assets/img/common/game_button_3.png";
                }));
            }
        };
        WeCatMoreGameView.prototype.viewAniIn = function () {
            var _this = this;
            this.boxWeCatMoreGame.x = -713;
            WeCatMoreGameView.isOpen = true;
            Laya.Tween.to(this.boxWeCatMoreGame, { x: 0 }, 500, null, Laya.Handler.create(this, function (args) {
                _this.addEvent();
                _this.imageBtWeCat.skin = "resource/assets/img/common/game_button_3.png";
            }));
        };
        WeCatMoreGameView.prototype.viewAniOut = function () {
            var _this = this;
            this.boxWeCatMoreGame.x = 0;
            Laya.Tween.to(this.boxWeCatMoreGame, { x: -713 }, 500, null, Laya.Handler.create(this, function (args) {
                _this.imageBtWeCat.skin = "resource/assets/img/common/game_button_2.png";
                WeCatMoreGameView.nEnterCount += 1;
                if (WeCatMoreGameView.nEnterCount >= 2) {
                    if (PlayerDataMgr.bGlobEnterGame) {
                        ViewChangeMgr.getInstance().commonView.visible = true;
                    }
                    PlayerDataMgr.bGlobEnterGame = false;
                }
                if (PlayerDataMgr.bGlobEnterGame) {
                    MiniGameMgr.instance.playVideoAd({
                        successFun: function () {
                            ViewManager.getInstance().showView(SuccessfulEntryOneView);
                            _this.removeSelf();
                            WeCatMoreGameView.isOpen = false;
                        },
                        failFun: function () {
                            ViewManager.getInstance().showView(SuccessfulEntryOneView);
                            _this.removeSelf();
                            WeCatMoreGameView.isOpen = false;
                        },
                        errorFun: function () {
                            ViewManager.getInstance().showView(SuccessfulEntryOneView);
                            _this.removeSelf();
                            WeCatMoreGameView.isOpen = false;
                        }
                    });
                }
                else {
                    _this.removeSelf();
                    WeCatMoreGameView.isOpen = false;
                }
            }));
        };
        WeCatMoreGameView.isOpen = false;
        WeCatMoreGameView.nEnterCount = 0;
        return WeCatMoreGameView;
    }(BaseSceneUISkinPopView));

    var MoreGameOperRequestTwo = (function (_super) {
        __extends(MoreGameOperRequestTwo, _super);
        function MoreGameOperRequestTwo() {
            var _this = _super.call(this) || this;
            _this.className_key = "MoreGameOperRequestTwo";
            _this.bContinue = false;
            _this.nStartY = 0;
            _this.scrollSizeMax = 50;
            _this.nTimePanel = 5000;
            _this.skin = "game/uiView/wecat/MoreGameOperRequestTwo.json";
            _this.nRandomIndxe = 0;
            _this.aryCatMiniIconsInfoTemp = [];
            _this.nOpenNum = 0;
            return _this;
        }
        MoreGameOperRequestTwo.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.panel_gamelist.height = Laya.stage.height - (1920 - 1640);
            this.initView();
            this.addEvent();
        };
        MoreGameOperRequestTwo.prototype.onAddStage = function () {
            var _this = this;
            _super.prototype.onAddStage.call(this);
            this.nOpenNum += 1;
            MiniGameMgr.instance.hideBannerAd();
            if (this.isCreate) {
                this.initView();
                this.addEvent();
                this.imageBtReturn.visible = false;
                Laya.timer.once(3000, this, function () {
                    _this.imageBtReturn.visible = true;
                });
                MoreGameOperRequestTwo.isOpen = true;
            }
            MiniGameMgr.instance._bFlagSpecialView = false;
        };
        MoreGameOperRequestTwo.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            MoreGameOperRequestTwo.isOpen = false;
        };
        MoreGameOperRequestTwo.prototype.onBackTemp = function () {
            if (PlayerDataMgr.getInstance().checkIsSpecial() && BaseConst.infos.gameInfo.MoreGameView == 1) {
                ViewManager.getInstance().showView(MoreGameViewTemp);
            }
            else {
                MoreGameRandomGameBox713Temp.bSpecial = true;
                ViewManager.getInstance().showView(MoreGameRandomGameBox713Temp);
            }
        };
        MoreGameOperRequestTwo.prototype.timerChangerImage = function () {
            this.imageBtConGame.skin = "resource/assets/img/wecat/box_button_2.png";
            this.bContinue = false;
            Laya.timer.clear(this, this.changeImage);
            Laya.timer.once(5000, this, this.changeImage);
        };
        MoreGameOperRequestTwo.prototype.changeImage = function () {
            this.imageBtConGame.skin = "resource/assets/img/wecat/box_button_3.png";
            this.bContinue = true;
        };
        MoreGameOperRequestTwo.prototype.onSpeical = function () {
            if (this.bContinue) {
                this.onClickOper();
            }
            else {
                this.goToGame();
            }
        };
        MoreGameOperRequestTwo.prototype.addEvent = function () {
            this.imageBtReturn.on(Laya.Event.CLICK, this, this.onBackTemp);
            this.imageBtConGame.on(Laya.Event.CLICK, this, this.onSpeical);
            this.panel_gamelist.on(Laya.Event.MOUSE_DOWN, this, this.mousedown);
        };
        MoreGameOperRequestTwo.prototype.mousedown = function (evt) {
            this.nStartY = evt.currentTarget.mouseY;
            var self = this;
            function mouseMove(evt1) {
                var nYTemp = self.nStartY - evt1.currentTarget.mouseY;
                self.moreGamePanel.y -= nYTemp;
                self.moreGamePanel2.y -= nYTemp;
                self.nStartY = evt1.currentTarget.mouseY;
                if (self.moreGamePanel.y >= 0 && self.moreGamePanel2.y >= 0) {
                    self.moreGamePanel.y = 0;
                    self.moreGamePanel2.y = self.moreGamePanel.height;
                }
            }
            function mouseUp(evt1) {
                this.panel_gamelist.off(Laya.Event.MOUSE_MOVE, this, mouseMove);
                this.panel_gamelist.off(Laya.Event.MOUSE_UP, this, mouseUp);
            }
            this.panel_gamelist.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_gamelist.on(Laya.Event.MOUSE_UP, this, mouseUp);
        };
        MoreGameOperRequestTwo.prototype.removeEvent = function () {
            this.imageBtReturn.off(Laya.Event.CLICK, this, this.onBackTemp);
            this.imageBtConGame.off(Laya.Event.CLICK, this, this.onSpeical);
        };
        MoreGameOperRequestTwo.prototype.initPanel = function () {
        };
        MoreGameOperRequestTwo.prototype.initView = function () {
            Laya.timer.clear(this, this.onMove);
            this.aryCatMiniIconsInfoTemp = [];
            this.aryCatMiniIconsInfoTemp = GDataMgr.getInstance().weCatMoreInfo;
            ViewChangeMgr.getInstance().commonView.visible = false;
            this.initPanel();
            var nXStart = 0;
            var nYStart = 0;
            var nCount = 2;
            var aryInfo = [];
            this.moreGamePanel.removeChildren();
            aryInfo = this.getRandomIndex(18);
            this.moreGamePanel.y = 0;
            for (var i = 0; i < aryInfo.length; ++i) {
                var pWeCatMoreGameItemOne = this.moreGamePanel.getChildAt(i);
                if (pWeCatMoreGameItemOne) {
                    pWeCatMoreGameItemOne.setData(aryInfo[i]);
                }
                else {
                    pWeCatMoreGameItemOne = new WeCatMoreGameItemOne713Big(aryInfo[i]);
                    var nAddX = Math.floor(i % nCount);
                    var nYAdd = Math.floor(i / nCount);
                    pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 50 * nAddX;
                    pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
                    this.moreGamePanel.addChild(pWeCatMoreGameItemOne);
                    this.moreGamePanel.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height;
                }
            }
            this.moreGamePanel2.y = this.moreGamePanel.height;
            this.moreGamePanel2.removeChildren();
            for (var i = 0; i < aryInfo.length; ++i) {
                var pWeCatMoreGameItemOne = this.moreGamePanel2.getChildAt(i);
                if (pWeCatMoreGameItemOne) {
                    pWeCatMoreGameItemOne.setData(aryInfo[i]);
                }
                else {
                    pWeCatMoreGameItemOne = new WeCatMoreGameItemOne713Big(aryInfo[i]);
                    var nAddX = Math.floor(i % nCount);
                    var nYAdd = Math.floor(i / nCount);
                    pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 50 * nAddX;
                    pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
                    this.moreGamePanel2.addChild(pWeCatMoreGameItemOne);
                    this.nTimePanel = (nYAdd + 1) * 1000;
                    this.moreGamePanel2.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height;
                }
            }
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.refreshGameList();
            }
            if ((this.nOpenNum >= 2 || !PlayerDataMgr.getInstance().bIsNewPlayer) && BaseConst.infos.gameInfo.openPsAward == 1) {
                this.timerChangerImage();
            }
            else {
                this.changeImage();
            }
            Laya.timer.frameLoop(1, this, this.onMove);
        };
        MoreGameOperRequestTwo.prototype.onMove = function () {
            var nHight = this.moreGamePanel.height;
            this.moreGamePanel2.y -= 2;
            this.moreGamePanel.y -= 2;
            if (this.moreGamePanel.y <= -nHight) {
                this.moreGamePanel.y = this.moreGamePanel2.y + nHight;
            }
            if (this.moreGamePanel2.y <= -nHight) {
                this.moreGamePanel2.y = this.moreGamePanel.y + nHight;
            }
        };
        MoreGameOperRequestTwo.prototype.onBack = function () {
            this.onClickOper();
        };
        MoreGameOperRequestTwo.prototype.goToGame = function () {
            if (this.aryCatMiniIconsInfoTemp.length <= 0) {
                return;
            }
            this.nRandomIndxe = Utils.random(0, this.aryCatMiniIconsInfoTemp.length - 1);
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.clickGame(this.aryCatMiniIconsInfoTemp[this.nRandomIndxe].ad_id);
            }
            var self = this;
            var data = {
                appId: this.aryCatMiniIconsInfoTemp[self.nRandomIndxe].ad_appid,
                path: this.aryCatMiniIconsInfoTemp[self.nRandomIndxe].url,
                success: function () {
                    console.log("navigateToMiniProgram success");
                    if (BaseConst.infos.gameInfo.isDY) {
                        console.log("self.nIndex = ", self.nRandomIndxe);
                        PlatformDY.toGame(this.aryCatMiniIconsInfoTemp[self.nRandomIndxe].ad_id);
                    }
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail e =", e);
                    MoreGameRandomGameBox713Temp.bSpecial = true;
                    ViewManager.getInstance().showView(MoreGameRandomGameBox713Temp);
                }
            };
            platform.navigateToMiniProgram(data);
        };
        MoreGameOperRequestTwo.prototype.getRandomIndex = function (nMax) {
            if (GDataMgr.getInstance().weCatMoreInfo.length - 1 < 0) {
                return [];
            }
            var nRandom = Utils.random(0, GDataMgr.getInstance().weCatMoreInfo.length - 1);
            var nCount = GDataMgr.getInstance().weCatMoreInfo.length % 3;
            if (nCount > 0) {
                nCount = 3 - nCount;
            }
            nCount = GDataMgr.getInstance().weCatMoreInfo.length + nCount;
            if (nCount <= nMax) {
                nCount = nMax;
            }
            var aryInfo = [];
            for (var i = 0; i < nCount; ++i) {
                aryInfo.push(nRandom);
                nRandom += 1;
                if (nRandom >= GDataMgr.getInstance().weCatMoreInfo.length) {
                    nRandom = 0;
                }
            }
            return aryInfo;
        };
        MoreGameOperRequestTwo.prototype.panelScrollAni = function () {
        };
        MoreGameOperRequestTwo.prototype.onClickOper = function () {
            var _this = this;
            MiniGameMgr.instance._bFlagSpecialView = true;
            if (PlayerDataMgr.bGlobEnterGame) {
                ViewManager.getInstance().showView(WeCatMoreGameView);
            }
            else {
                if (MoreGameOperRequestTwo.bGotoNextGame) {
                    var nSpCost = 1;
                    var stGameConfig = ConfigMgr.getInstance().getGCDBID(8);
                    if (stGameConfig) {
                        nSpCost = parseInt(stGameConfig.strValue);
                    }
                    var b = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, nSpCost);
                    if (!b) {
                        TipsManager.getInstance().showDefaultTips("体力不足");
                        ViewChangeMgr.getInstance().showBufLoadingView();
                        ResUtil.getIntance().loadGroups(["adsp"], function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                ViewManager.getInstance().showView(AddPowerView);
                                ViewChangeMgr.getInstance().hideBufLoadingView();
                                return [2];
                            });
                        }); });
                        return;
                    }
                    PlayerDataMgr.getInstance().subProp(PType.e_GType_Sp, nSpCost);
                    if (LevelMgr.getInstance().nCurrentLevel >= BaseConst.infos.gameInfo.splevel
                        && BaseConst.infos.gameInfo.openPsAward == 1
                        && BaseConst.infos.gameInfo.for_pay == 1) {
                        PlayerDataMgr.getInstance().bEnterGameFromGameHome = false;
                        ViewManager.getInstance().showView(SuccessfulEntryOneView);
                    }
                    else {
                        ViewChangeMgr.getInstance().goToNextLevel();
                    }
                }
                else {
                    if (MoreGameOperRequestTwo.bOperFlag) {
                        if (MoreGameOperRequestTwo.bSuccess) {
                            if (BaseConst.infos.gameInfo.openPsAward == 1
                                && LevelMgr.getInstance().nCurrentLevel >= BaseConst.infos.gameInfo.splevel
                                && BaseConst.infos.gameInfo.for_pay == 1) {
                                ViewManager.getInstance().showView(SuccessfulEntryOneView);
                            }
                            else {
                                if (DeviceUtil.isVIVOMiniGame()) {
                                    ViewManager.getInstance().showView(SuccessfulEntryThreeVivoView);
                                }
                                else {
                                    ViewManager.getInstance().showView(SuccessfulEntryThreeView);
                                }
                            }
                        }
                        else {
                            if (DeviceUtil.isVIVOMiniGame()) {
                                ViewManager.getInstance().showView(FailEntryTwoVivoView);
                            }
                            else {
                                ViewManager.getInstance().showView(FailEntryErView);
                            }
                        }
                    }
                }
                if (MoreGameOperRequestTwo.toHome) {
                    ViewChangeMgr.getInstance().CurLevelBasea.closeGameView();
                    PlayerDataMgr.getInstance().setCurGuanQia(PlayerDataMgr.getInstance().getCurGuanQiaMax());
                    GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_GH;
                    LevelMgr.getInstance().createSceneByLevel(PlayerDataMgr.getInstance().getCurGuanQiaToChallenge());
                }
                if (MoreGameOperRequestTwo.bReStartGame) {
                    PlayerDataMgr.getInstance().subProp(PType.e_GType_Sp, 1);
                    ViewChangeMgr.getInstance().restartGame(true);
                }
            }
            this.removeSelf();
            Laya.timer.clearAll(this);
            MiniGameMgr.instance.showBanner({});
            MoreGameOperRequestTwo.bOperFlag = false;
            MoreGameOperRequestTwo.bSuccess = false;
            MoreGameOperRequestTwo.bGotoNextGame = false;
            MoreGameOperRequestTwo.toHome = false;
            ViewChangeMgr.getInstance().commonView.visible = true;
        };
        MoreGameOperRequestTwo.bOperFlag = false;
        MoreGameOperRequestTwo.bSuccess = false;
        MoreGameOperRequestTwo.toHome = false;
        MoreGameOperRequestTwo.bGotoNextGame = false;
        MoreGameOperRequestTwo.bReStartGame = false;
        MoreGameOperRequestTwo.isOpen = false;
        return MoreGameOperRequestTwo;
    }(BaseSceneUISkinPopView));

    var VVHomeScene = (function (_super) {
        __extends(VVHomeScene, _super);
        function VVHomeScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "VVHomeScene";
            _this.skin = "skins/platform/vivo/VVHomeScene.json";
            return _this;
        }
        VVHomeScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.mouseThrough = true;
                this.initView();
                this.addEvent();
            }
        };
        VVHomeScene.prototype.initView = function () {
            AnimationMgr.instance.HTween(this.img_vv_zhuomian, this);
            MiniGameMgr.instance.showAddDesktopBtn({ box: this.btn_vv_shortcut });
        };
        VVHomeScene.prototype.addEvent = function () {
            this.btn_freegold.on(Laya.Event.CLICK, this, this.getFreeGlods);
            this.btn_vv_shortcut.on(Laya.Event.CLICK, this, this.onShortcut);
        };
        VVHomeScene.prototype.getFreeGlods = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            if (DeviceUtil.isMiniGame()) {
                MiniGameMgr.instance.playVideoAd({
                    successFun: function () {
                        var nGlodCount = 200;
                        var stGameConfig = ConfigMgr.getInstance().getGCDBID(19);
                        if (stGameConfig) {
                            nGlodCount = parseInt(stGameConfig.strValue);
                        }
                        PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, nGlodCount);
                    }
                });
            }
            else {
                var nGlodCount = 200;
                var stGameConfig = ConfigMgr.getInstance().getGCDBID(19);
                if (stGameConfig) {
                    nGlodCount = parseInt(stGameConfig.strValue);
                }
                PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, nGlodCount);
            }
        };
        VVHomeScene.prototype.onShortcut = function () {
            var _this = this;
            MiniGameMgr.instance.tipInstallShortcut({
                success: function (data) {
                    _this.btn_vv_shortcut.visible = false;
                    if (data) {
                        PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, 200);
                        TipsManager.getInstance().showDefaultTips("获得金币200");
                    }
                }, fail: function () {
                }
            });
        };
        VVHomeScene.prototype.removeEvent = function () {
            this.btn_freegold.off(Laya.Event.CLICK, this, this.getFreeGlods);
            this.btn_vv_shortcut.off(Laya.Event.CLICK, this, this.onShortcut);
        };
        VVHomeScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.onRemoved();
        };
        return VVHomeScene;
    }(BaseSceneUISkin));

    var GuessLike = (function (_super) {
        __extends(GuessLike, _super);
        function GuessLike() {
            var _this = _super.call(this) || this;
            _this.className_key = "GuessLike";
            _this.skin = 'skins/platform/oppo/GuessLike.json';
            return _this;
        }
        GuessLike.prototype.childrenCreated = function () {
            this.initView();
            this.addEvent();
        };
        GuessLike.prototype.adaptationStage = function () {
        };
        GuessLike.prototype.initView = function () {
            this.x = Laya.stage.width - this.width;
            this.icon_title.anchorX = this.icon_title.anchorY = 0.5;
            var icon_title = this.icon_title;
            this.onChangeGame();
            this.shake();
            Laya.timer.loop(10000, this, this.onChangeGame);
        };
        GuessLike.prototype.shake = function () {
            var self = this;
            var icon_title = this.icon_title;
            var rota = 5;
            Laya.Tween.clearAll(icon_title);
            Laya.Tween.to(icon_title, { rotation: rota }, 50);
            Laya.Tween.to(icon_title, { rotation: -rota }, 100, null, null, 50);
            Laya.Tween.to(icon_title, { rotation: rota }, 100, null, null, 150);
            Laya.Tween.to(icon_title, { rotation: -rota }, 100, null, null, 250);
            Laya.Tween.to(icon_title, { rotation: 0 }, 50, null, Laya.Handler.create(this, function () {
                self.shake();
            }), 350);
        };
        GuessLike.prototype.onChangeGame = function () {
            var oppoMiniIconsInfo = OppoManager.instance.oppoMiniIconsGuessLike;
            var len = oppoMiniIconsInfo.length;
            this.selectedInfo = oppoMiniIconsInfo[Math.floor(Math.random() * len)];
            this.icon_title.skin = this.selectedInfo.icon + GameManager.instance.randomTime;
        };
        GuessLike.prototype.addEvent = function () {
            this.on(Laya.Event.CLICK, this, this.onClick);
        };
        GuessLike.prototype.onClick = function () {
            MiniGameMgr.instance.oppoNavigateToMiniProgram(this.selectedInfo.package);
        };
        GuessLike.prototype.removeSelf = function () {
            this.removeEvent();
            return _super.prototype.removeSelf.call(this);
        };
        GuessLike.prototype.destroy = function () {
            this.removeSelf();
            _super.prototype.destroy.call(this);
        };
        GuessLike.prototype.removeEvent = function () {
            this.off(Laya.Event.CLICK, this, this.onClick);
        };
        return GuessLike;
    }(BaseSceneUISkin));

    var MoreGameLogo = (function (_super) {
        __extends(MoreGameLogo, _super);
        function MoreGameLogo() {
            var _this = _super.call(this) || this;
            _this.size(126, 160);
            _this.createView();
            _this.addEvent();
            return _this;
        }
        MoreGameLogo.prototype.createView = function () {
            var image = new Laya.Image();
            image.skin = "resource/assets/platform/oppo/home/maininterface_icon_1.png";
            this.addChild(image);
            var image1 = new Laya.Image();
            image1.skin = "resource/assets/platform/oppo/home/maininterface_point_1.png";
            this.addChild(image1);
            image1.right = 0;
        };
        MoreGameLogo.prototype.addEvent = function () {
        };
        return MoreGameLogo;
    }(Laya.Box));

    var OppoManager = (function () {
        function OppoManager() {
            this.lastTime = 0;
            this.adLimit1Flag = false;
            this.adLimit2Flag = true;
            this.limit1Time = 60;
            this.limit2Count = 5;
            this._closeCount = 0;
            this.createBox();
            this.lastTime = new Date().getTime();
        }
        OppoManager.prototype.onAddPop = function (key) {
            switch (key) {
                case "SuccessfulEntryOneOppoView":
                case "SuccessfulEntryThreeOppoView":
                case "FailEntryTwoOppoView":
                case "FailEntryOneView":
                case "GameHomeView":
                case "GameView":
                    if (this.guessLike) {
                        this.guessLike.visible = false;
                    }
                    return;
            }
            console.log("key show>>>>", key);
            if (this.guessLike) {
                this.guessLike.visible = true;
            }
        };
        OppoManager.prototype.onRemove = function (key) {
            console.log("key hide>>>>", key);
            if (this.guessLike) {
                this.guessLike.visible = false;
            }
        };
        Object.defineProperty(OppoManager, "instance", {
            get: function () {
                if (!this.ins)
                    this.ins = new OppoManager();
                return this.ins;
            },
            enumerable: true,
            configurable: true
        });
        OppoManager.prototype.autoShowShortCut = function () {
            return __awaiter(this, void 0, void 0, function () {
                var newTime, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!DeviceUtil.isOPPOMiniGame()) return [3, 2];
                            newTime = Date.now();
                            if (!(newTime - this.lastTime > 60 * 1000)) return [3, 2];
                            return [4, MiniGameMgr.instance.hasShortcutInstalled()];
                        case 1:
                            data = _a.sent();
                            if (!data) {
                                MiniGameMgr.instance.createShortCut();
                            }
                            this.lastTime = newTime;
                            _a.label = 2;
                        case 2: return [2];
                    }
                });
            });
        };
        Object.defineProperty(OppoManager.prototype, "closeCount", {
            get: function () {
                return this._closeCount;
            },
            set: function (value) {
                this._closeCount = value;
                if (this._closeCount > this.limit2Count) {
                    this.adLimit2Flag = false;
                }
            },
            enumerable: true,
            configurable: true
        });
        OppoManager.prototype.initGame = function () {
            var _this = this;
            if (!DeviceUtil.isOPPOMiniGame())
                return;
            Laya.timer.once(this.limit1Time * 1000, this, function () {
                _this.adLimit1Flag = true;
            });
            this.showMoreGame();
            this.showGuessLike();
            EventMgr.getInstance().addEvent("onAddPop", this, this.onAddPop);
            EventMgr.getInstance().addEvent("onRemove", this, this.onRemove);
        };
        OppoManager.prototype.createBox = function () {
            if (this.oppoAdBox == null) {
                this.oppoAdBox = new Laya.Box();
                this.oppoAdBox.mouseThrough = true;
                this.oppoAdBox.width = Laya.stage.width;
                this.oppoAdBox.height = Laya.stage.height;
            }
            Laya.stage.addChild(this.oppoAdBox);
        };
        OppoManager.prototype.addSpriteIntoBox = function (sprite) {
            if (sprite != null) {
                this.oppoAdBox.addChild(sprite);
            }
        };
        OppoManager.prototype.showGuessLike = function () {
            if (this.guessLike == null) {
                this.guessLike = new GuessLike();
                var dis = (Laya.stage.height - this.guessLike.height) / 2;
                this.guessLike.y = dis;
                this.guessLike.visible = false;
                this.addSpriteIntoBox(this.guessLike);
            }
        };
        OppoManager.prototype.showMoreGame = function () {
            if (this.moreGameLogo == null) {
                this.moreGameLogo = new MoreGameLogo();
                this.moreGameLogo.visible = true;
            }
            this.moreGameLogo.y = (Laya.stage.height - this.moreGameLogo.height) / 2;
        };
        return OppoManager;
    }());

    var LeftMoreGame = (function (_super) {
        __extends(LeftMoreGame, _super);
        function LeftMoreGame(type) {
            if (type === void 0) { type = 0; }
            var _this = _super.call(this) || this;
            _this.className_key = "LeftMoreGame";
            _this.tupe = 0;
            _this.moveflag = 1;
            _this.tupe = type;
            _this.skin = "skins/platform/oppo/LeftMoreGame.json";
            return _this;
        }
        LeftMoreGame.prototype.childrenCreated = function () {
            this.y = Laya.stage.height - this.height;
            this.initView();
            this.addEvent();
        };
        LeftMoreGame.prototype.adaptationStage = function () {
        };
        LeftMoreGame.prototype.initView = function () {
            this.x = -this.width;
            this.initList();
        };
        LeftMoreGame.prototype.initList = function () {
            this.gameList.vScrollBarSkin = '';
            this.gameList.spaceY = 10;
            this.gameList.itemRender = LeftOppoItem;
            this.gameList.array = OppoManager.instance.oppoMiniIconsBanner;
            Laya.timer.frameLoop(1, this, this.onLoop);
        };
        LeftMoreGame.prototype.onLoop = function () {
            var scrollBar = this.gameList.scrollBar;
            scrollBar.value += this.moveflag;
            var len = this.gameList.length;
            var count = Math.ceil(len / 1);
            var cellsize = count * 260 - this.gameList.height - 10;
            if (scrollBar.value >= cellsize) {
                this.moveflag = -1;
            }
            else if (scrollBar.value == 0) {
                this.moveflag = 1;
            }
        };
        LeftMoreGame.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onClick);
        };
        LeftMoreGame.prototype.onClick = function () {
            Laya.Tween.clearTween(this);
            Laya.Tween.to(this, { x: -this.width }, 500);
            MiniGameMgr.instance.showBanner({ className_key: "GameHomeView" });
        };
        LeftMoreGame.prototype.onShow = function () {
            Laya.Tween.clearTween(this);
            Laya.Tween.to(this, { x: 0 }, 500);
        };
        LeftMoreGame.prototype.removeSelf = function () {
            this.removeEvent();
            return _super.prototype.removeSelf.call(this);
        };
        LeftMoreGame.prototype.destroy = function () {
            if (this.viewData_) {
                this.viewData_ = null;
            }
            this.removeSelf();
            _super.prototype.destroy.call(this);
        };
        LeftMoreGame.prototype.removeEvent = function () {
            Laya.timer.clear(this, this.onLoop);
        };
        LeftMoreGame.prototype.show = function () {
            this.visible = true;
        };
        LeftMoreGame.prototype.hide = function () {
            this.visible = false;
        };
        return LeftMoreGame;
    }(BaseSceneUISkin));
    var LeftOppoItem = (function (_super) {
        __extends(LeftOppoItem, _super);
        function LeftOppoItem() {
            var _this = _super.call(this) || this;
            _this.className_key = "LeftOppoItem";
            _this.skin = 'skins/platform/oppo/LeftMoreGameItem.json';
            return _this;
        }
        LeftOppoItem.prototype.adaptationStage = function () { };
        LeftOppoItem.prototype.dataChange = function (data) {
            this.viewData_ = data;
            if (!this.isCreate)
                return;
            this.icon_item.skin = data.icon + GameManager.instance.randomTime;
            this.txt_name.text = data.title;
        };
        LeftOppoItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        Object.defineProperty(LeftOppoItem.prototype, "dataSource", {
            set: function (value) {
                if (!value)
                    return;
                this.dataChange(value);
            },
            enumerable: true,
            configurable: true
        });
        LeftOppoItem.prototype.initView = function () {
            if (this.viewData_) {
                this.dataChange(this.viewData_);
            }
        };
        LeftOppoItem.prototype.addEvent = function () {
            this.on(Laya.Event.CLICK, this, this.onClick);
        };
        LeftOppoItem.prototype.onClick = function () {
            if (this.viewData_) {
                MiniGameMgr.instance.oppoNavigateToMiniProgram(this.viewData_.package);
            }
        };
        LeftOppoItem.prototype.removeEvent = function () {
            this.off(Laya.Event.CLICK, this, this.onClick);
        };
        LeftOppoItem.prototype.removeSelf = function () {
            this.viewData_ = null;
            this.removeEvent();
            return _super.prototype.removeSelf.call(this);
        };
        return LeftOppoItem;
    }(BaseSceneUISkin));

    var OppoHomeScene = (function (_super) {
        __extends(OppoHomeScene, _super);
        function OppoHomeScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "OppoHomeScene";
            _this.skin = "skins/platform/oppo/OppoHomeScene.json";
            return _this;
        }
        OppoHomeScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.mouseThrough = true;
                this.initView();
                this.addEvent();
            }
        };
        OppoHomeScene.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            AnimationMgr.instance.HTween(this.img_oppo_zhuomian, this);
                            MiniGameMgr.instance.showAddDesktopBtn({ box: this.btn_oppo_shortcut });
                            this.addChild(OppoManager.instance.moreGameLogo);
                            this.moreLogo = OppoManager.instance.moreGameLogo;
                            this.showGuessLike();
                            this.initLeftMoreGame();
                            return [4, MiniGameMgr.instance.hasShortcutInstalled()];
                        case 1:
                            data = _a.sent();
                            if (data) {
                                this.btn_oppo_shortcut.visible = false;
                            }
                            else {
                                this.btn_oppo_shortcut.visible = true;
                            }
                            return [2];
                    }
                });
            });
        };
        OppoHomeScene.prototype.initLeftMoreGame = function () {
            var _this = this;
            if (this.leftMoreGame == null) {
                this.leftMoreGame = new LeftMoreGame();
            }
            if (!this.moreLogo.hasListener(Laya.Event.CLICK)) {
                this.moreLogo.on(Laya.Event.CLICK, this, function () {
                    _this.leftMoreGame.onShow();
                    MiniGameMgr.instance.hideBannerAd();
                });
            }
            this.leftMoreGame.y = (Laya.stage.height - this.leftMoreGame.height) / 2;
            this.addChild(this.leftMoreGame);
        };
        OppoHomeScene.prototype.showGuessLike = function () {
            if (this.guessLike == null) {
                this.guessLike = new GuessLike();
                var dis = (Laya.stage.height - 1920) / 2 + 400;
                this.guessLike.y = dis;
                this.guessLike.visible = true;
            }
            this.addChild(this.guessLike);
        };
        OppoHomeScene.prototype.addEvent = function () {
            this.btn_freegold.on(Laya.Event.CLICK, this, this.getFreeGlods);
            this.btn_oppo_shortcut.on(Laya.Event.CLICK, this, this.onShortcut);
        };
        OppoHomeScene.prototype.getFreeGlods = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            if (DeviceUtil.isMiniGame()) {
                MiniGameMgr.instance.playVideoAd({
                    gameConstKey: 'freeGold',
                    successFun: function () {
                        var nGlodCount = 200;
                        var stGameConfig = ConfigMgr.getInstance().getGCDBID(19);
                        if (stGameConfig) {
                            nGlodCount = parseInt(stGameConfig.strValue);
                        }
                        PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, nGlodCount);
                    }
                });
            }
            else {
                var nGlodCount = 200;
                var stGameConfig = ConfigMgr.getInstance().getGCDBID(19);
                if (stGameConfig) {
                    nGlodCount = parseInt(stGameConfig.strValue);
                }
                PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, nGlodCount);
            }
        };
        OppoHomeScene.prototype.onShortcut = function () {
            var _this = this;
            var self = this;
            MiniGameMgr.instance.createShortCut(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    self.btn_oppo_shortcut.visible = false;
                    return [2];
                });
            }); });
        };
        OppoHomeScene.prototype.removeEvent = function () {
            this.btn_freegold.off(Laya.Event.CLICK, this, this.getFreeGlods);
            this.btn_oppo_shortcut.off(Laya.Event.CLICK, this, this.onShortcut);
        };
        OppoHomeScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.onRemoved();
        };
        return OppoHomeScene;
    }(BaseSceneUISkin));

    var SignOppoView = (function (_super) {
        __extends(SignOppoView, _super);
        function SignOppoView() {
            var _this = _super.call(this) || this;
            _this.className_key = "SignOppoView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this._bIsRunning = false;
            _this.skin = "game/uiView/pop/SignOppoView.json";
            return _this;
        }
        SignOppoView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        SignOppoView.prototype.initMiniGame = function () {
            this.hideBanner();
            this.showBanner({ className_key: this.className_key });
        };
        SignOppoView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this._bIsRunning = false;
            Laya.Tween.clearAll(this.btnSign);
            Laya.timer.clearAll(this);
        };
        SignOppoView.prototype.initView = function () {
            this._nCurTime = 0;
            this._bDouble = false;
            this._bIsRunning = true;
            this.refreshSignData();
            this.refreshSignView();
            this.refreshSignRecvBt();
            this.initDouble();
        };
        SignOppoView.prototype.addEvent = function () {
            this.registerEvent(this.btnSign, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnClose, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btn_double, Laya.Event.CLICK, this.onClick, this);
        };
        SignOppoView.prototype.removeEvent = function () {
            _super.prototype.removeEvent.call(this);
        };
        SignOppoView.prototype.removeSelf = function () {
            if (DeviceUtil.isOPPOMiniGame()) {
                this.hideBanner();
                this.showBanner({ className_key: "GameHomeView" });
            }
            return _super.prototype.removeSelf.call(this);
        };
        SignOppoView.prototype.onClick = function (evt) {
            SoundMgr.getInstance().playEffect("button", 1);
            switch (evt.currentTarget) {
                case this.btnClose:
                    this.removeSelf();
                    break;
                case this.btnSign:
                    this._bDouble = false;
                    this.onSigned();
                    break;
                case this.btn_double:
                    this._bDouble = true;
                    this.onSigned();
                    break;
            }
        };
        SignOppoView.prototype.refreshSignView = function () {
            var arrData = ConfigMgr.getInstance().getSDA();
            var len = arrData.length;
            console.log('数据', arrData);
            var imageTemp = null;
            var sprGoods = null;
            for (var i = 0; i < len; ++i) {
                imageTemp = this.boxItem.getChildAt(i);
                if (imageTemp) {
                    if (i < 6) {
                        this.checkWorkDay(sprGoods, imageTemp, arrData, i);
                    }
                    else {
                        this.sprWorldLeft.text = 'x' + arrData[i].nCount.toString();
                        this.sprWorldRight.text = 'x' + arrData[i].nCount7.toString();
                    }
                    this.checkStatus(imageTemp, i);
                }
            }
        };
        SignOppoView.prototype.checkWorkDay = function (sprGoods, imageTemp, arrData, i) {
            sprGoods = imageTemp.getChildAt(0);
            if (sprGoods) {
                var str = "";
                if (arrData[i].nType == 1) {
                    str = "resource/assets/img/common/sign_icon_inter.png";
                }
                else if (arrData[i].nType == 2) {
                    str = "resource/assets/img/common/sign_icon_gold.png";
                }
                sprGoods.loadImage(str);
            }
            var boxTemp = imageTemp.getChildByName("boxWorld");
            if (boxTemp) {
                var sprNum = boxTemp.getChildByName("spWord");
                if (sprNum) {
                    sprNum.text = 'x' + arrData[i].nCount.toString();
                }
            }
        };
        SignOppoView.prototype.checkStatus = function (imageTemp, i) {
            var imgSigned = imageTemp.getChildByName("spSigned");
            var img_1 = imgSigned.getChildAt(0);
            var sprite_1 = imgSigned.getChildAt(1);
            sprite_1.visible = true;
            imgSigned.visible = true;
            var nSignIndex = PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex;
            if (imgSigned) {
                if (i < nSignIndex) {
                    img_1.skin = 'resource/assets/img/ui/sign/sign_baseboard_6.png';
                }
                else if (i == nSignIndex) {
                    img_1.skin = 'resource/assets/img/ui/sign/sign_light_1.png';
                    sprite_1.visible = false;
                }
                else {
                    imgSigned.visible = false;
                }
            }
        };
        SignOppoView.prototype.refreshSignData = function () {
            this._nCurTime = GameLogicProcessMgr.GetCurTimea();
            if (Utils.judgeIsOnTheSameDay(PlayerDataMgr.getInstance().stPlayerDataBase.nSignTimeLast, this._nCurTime)) {
                this.btnSign.visible = false;
                this.btn_double.visible = false;
                return;
            }
            if (PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex >= 7) {
                PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex = 0;
            }
        };
        SignOppoView.prototype.initDouble = function () {
        };
        SignOppoView.prototype.refreshSignRecvBt = function () {
            this._nCurTime = GameLogicProcessMgr.GetCurTimea();
            this.sprTomorrow.visible = true;
            this.btnSign.visible = true;
            this.btn_double.visible = true;
            if (Utils.judgeIsOnTheSameDay(PlayerDataMgr.getInstance().stPlayerDataBase.nSignTimeLast, this._nCurTime)) {
                this.btnSign.visible = false;
                this.btn_double.visible = false;
            }
            else {
                this.sprTomorrow.visible = false;
                this.startSignImageBtShareAni();
            }
        };
        SignOppoView.prototype.onSigned = function () {
            var _this = this;
            if (this._bDouble) {
                MiniGameMgr.instance.playVideoAd({
                    successFun: function () {
                        _this.procSignedData();
                    }
                });
            }
            else {
                this.procSignedData();
            }
        };
        SignOppoView.prototype.procSignedData = function () {
            var objData = ConfigMgr.getInstance().getSDBSID(PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex);
            if (objData) {
                var numValue = objData.nCount;
                if (this._bDouble) {
                    numValue *= 2;
                }
                PlayerDataMgr.getInstance().AddProp(objData.nType, numValue);
                if (objData.nType == PType.e_GType_Sp) {
                    TipsManager.getInstance().showDefaultTips("体力+" + numValue.toString());
                }
                if (PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex == 6) {
                    numValue = objData.nCount7;
                    if (this._bDouble) {
                        numValue *= 2;
                    }
                    PlayerDataMgr.getInstance().AddProp(objData.nType, numValue);
                }
            }
            PlayerDataMgr.getInstance().stPlayerDataBase.nSignIndex += 1;
            PlayerDataMgr.getInstance().stPlayerDataBase.nSignTimeLast = GameLogicProcessMgr.GetCurTimea();
            PlayerDataMgr.getInstance().SaveData();
            this.refreshSignView();
            this.refreshSignRecvBt();
        };
        SignOppoView.prototype.startSignImageBtShareAni = function () {
            if (!this._bIsRunning && this.btnSign.visible) {
                return;
            }
            Laya.timer.clearAll(this.btnSign);
        };
        return SignOppoView;
    }(PopBaseScene));

    var SuccessfulEntryThreeQQView = (function (_super) {
        __extends(SuccessfulEntryThreeQQView, _super);
        function SuccessfulEntryThreeQQView() {
            var _this = _super.call(this) || this;
            _this.className_key = "SuccessfulEntryThreeQQView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this._bShareAward = false;
            _this._isShowBox = false;
            _this._nGlodCount = 50;
            _this.scrollSizeMax = 50;
            _this.nTimePanel = 5000;
            _this.nBtNextLevel = 360;
            _this.nBtNextLevelSp = 50;
            _this._nGlodAdd = 50;
            _this._nGlodRadio = 4;
            _this._bIsRunning = false;
            _this._bRecvAward = false;
            _this.skin = 'game/uiView/settlement/SuccessfulEntryThreeQQView.json';
            return _this;
        }
        SuccessfulEntryThreeQQView.prototype.adaptationSize = function () {
            this.imgWeChatMore.height = (this.height - this.imgWeChatMore.y - (1920 - this.imgWeChatMore.y - this.imgWeChatMore.height));
            this.panelWeChatMore.height = this.imgWeChatMore.height - 110;
        };
        SuccessfulEntryThreeQQView.prototype.initMiniGame = function () {
            AddPowerView._bCloseBinner = false;
            ViewChangeMgr.getInstance().commonView.addBtEvent();
            this._isShowBox = false;
            MiniGameMgr.instance.showBanner({});
            MiniGameMgr.instance.showChaPinAd();
            MiniGameMgr.instance.showBlockAD();
            if (!this.aniReal) {
                this.createSke("resource/assets/img/ani/celebrate/celebrate.sk");
            }
            else {
                this.aniReal.play(0, false);
                this.grp_center.addChild(this.aniReal);
            }
            if (!this.aniRealNanZhu) {
                this.createSkeletonNanZhu("resource/assets/img/ani/celebrate/chenggong.sk");
            }
            else {
                this.aniRealNanZhu.play(0, true);
                this.boxAnim.addChild(this.aniRealNanZhu);
            }
        };
        SuccessfulEntryThreeQQView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            MiniGameMgr.instance.hideBlockAD();
            this.removeEvent();
            this._bIsRunning = false;
            Laya.Tween.clearAll(this.btnShare);
            Laya.timer.clearAll(this);
            if (this.aniReal) {
                this.aniReal.stop();
                this.aniReal.removeSelf();
            }
            if (this.aniRealNanZhu) {
                this.aniRealNanZhu.stop();
                this.aniRealNanZhu.removeSelf();
            }
        };
        SuccessfulEntryThreeQQView.prototype.initPanel = function () {
            this.panelWeChatMore.vScrollBarSkin = "";
            this.panelWeChatMore.elasticEnabled = true;
            this.panelWeChatMore.vScrollBar.elasticDistance = 200;
            this.panelWeChatMore.vScrollBar.elasticBackTime = 100;
        };
        SuccessfulEntryThreeQQView.prototype.initView = function () {
            this._bShareAward = false;
            this.initPanel();
            this.proceMoreGame();
            MiniGameMgr.instance._onShareVideoSuccess = false;
            this.initPlView();
            SoundMgr.getInstance().playEffect("win", 1);
            this._bRecvAward = false;
            if (DeviceUtil.isQQMiniGame()) {
                this.btnShare.visible = false;
            }
            this._bIsRunning = true;
            this.initTextLable();
            this.startSucImageBtShareAni();
            if (DeviceUtil.isTTMiniGame()) {
                this.btnShare.right = 563;
                this.imgMask.left = 563;
            }
            this.adaptationSize();
            if (DeviceUtil.isNative()) {
                this.btnShare.visible = false;
                this.imgMask.centerX = 0;
            }
        };
        SuccessfulEntryThreeQQView.prototype.initTextLable = function () {
            var objConfig = ConfigMgr.getInstance().getGCDBID(12);
            if (objConfig) {
                this._nGlodAdd = parseInt(objConfig.strValue);
            }
            BitmapLabelUtils.setLabel(this.sprGold, this._nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
            objConfig = ConfigMgr.getInstance().getGCDBID(13);
            if (objConfig) {
                this._nGlodRadio = parseInt(objConfig.strValue);
            }
            BitmapLabelUtils.setLabel(this.sprCost, this._nGlodRadio.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
            var nCost = 1;
            objConfig = ConfigMgr.getInstance().getGCDBID(8);
            if (objConfig) {
                nCost = parseInt(objConfig.strValue);
            }
            BitmapLabelUtils.setLabel(this.sprCostPs, nCost.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
            var bAddMore = this._nGlodAdd;
            BitmapLabelUtils.setLabel(this.sprMore, bAddMore.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
        };
        SuccessfulEntryThreeQQView.prototype.onClick = function (evt) {
            switch (evt.currentTarget) {
                case this.btnLab:
                    this.sucfulEntryThreeNextLevel();
                    break;
                case this.btnHome:
                    this.returnToHome();
                    break;
                case this.btnShare:
                    this.sucShareGame();
                    break;
                case this.btnAgain:
                    this.sucReStart();
                    break;
                case this.imgMask:
                    this.sucRecvAward();
                    break;
                case this.btn_recieve:
                    this.sucRecvAward(true);
                    break;
                case this.panelWeChatMore:
                    this.onShowMoreGame();
                    break;
                case this.btnNextLevel:
                    this.weCatGotoNextLevel();
                    break;
            }
        };
        SuccessfulEntryThreeQQView.prototype.addEvent = function () {
            this.registerEvent(this.btnLab, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnHome, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnShare, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnAgain, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.imgMask, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btn_recieve, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnNextLevel, Laya.Event.CLICK, this.onClick, this);
            if (DeviceUtil.isTTMiniGame()) {
                this.registerEvent(this.panelWeChatMore, Laya.Event.CLICK, this.onClick, this);
            }
            if (DeviceUtil.isQQMiniGame()) {
                EventMgr.getInstance().addEvent("SuccBlockShow", this, this.showBlockAd);
            }
        };
        SuccessfulEntryThreeQQView.prototype.removeEvent = function () {
            if (DeviceUtil.isTTMiniGame()) {
                this.panelWeChatMore.off(Laya.Event.CLICK, this, this.onShowMoreGame);
            }
            if (DeviceUtil.isQQMiniGame()) {
                EventMgr.getInstance().removeEvent("SuccBlockShow", this, this.showBlockAd);
            }
            _super.prototype.removeEvent.call(this);
        };
        SuccessfulEntryThreeQQView.prototype.sucShareGame = function () {
            var _this = this;
            SoundMgr.getInstance().playEffect("button", 1);
            if (DeviceUtil.isTTMiniGame()) {
                this.btnShare.mouseEnabled = this.imgMask.mouseEnabled = false;
                if (this._bShareAward) {
                    TipsManager.getInstance().showDefaultTips("已经领过奖励了哦");
                    this.btnShare.mouseEnabled = this.imgMask.mouseEnabled = true;
                    return;
                }
                var info = platform.getSystemInfoSync();
                if (MiniGameMgr.instance.appName().toUpperCase() == 'DOUYIN') {
                    MiniGameMgr.instance.flagDouYin = true;
                    MiniGameMgr.instance.shareAppMsg({
                        sucFun: function () {
                            _this._bShareAward = true;
                            console.log("发布录制视频成功");
                            TipsManager.getInstance().showDefaultTips('分享成功');
                            if (MiniGameMgr.instance._onShareVideoSuccess) {
                                return;
                            }
                            PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, _this._nGlodCount);
                            _this.btnShare.mouseEnabled = _this.imgMask.mouseEnabled = true;
                        },
                        failFun: function () {
                            console.log("发布录制视频失败");
                            TipsManager.getInstance().showDefaultTips('分享失败');
                            _this.btnShare.mouseEnabled = _this.imgMask.mouseEnabled = true;
                        }
                    });
                }
                else {
                    MiniGameMgr.instance.shareGameRecordVideo({
                        successFun: function () {
                            _this._bShareAward = true;
                            PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, _this._nGlodCount);
                            _this.btnShare.mouseEnabled = _this.imgMask.mouseEnabled = true;
                        }, failFun: function () {
                            _this.btnShare.mouseEnabled = _this.imgMask.mouseEnabled = true;
                        }, errorFun: function () {
                            _this.btnShare.mouseEnabled = _this.imgMask.mouseEnabled = true;
                        }
                    });
                }
            }
            else {
                MiniGameMgr.instance.shareAppMsg();
            }
        };
        SuccessfulEntryThreeQQView.prototype.showBlockAd = function (isShow) {
            if (isShow) {
                MiniGameMgr.instance.showBlockAD();
            }
            else {
                MiniGameMgr.instance.hideBlockAD();
            }
        };
        SuccessfulEntryThreeQQView.prototype.sucReStart = function () {
        };
        SuccessfulEntryThreeQQView.prototype.sucRecvAward = function (isDouble) {
            var _this = this;
            if (isDouble === void 0) { isDouble = false; }
            SoundMgr.getInstance().playEffect("button", 1);
            if (!isDouble && DeviceUtil.isQQMiniGame() && Math.random() < BaseConst.infos.gameInfo.succShowBox) {
                MiniGameMgr.instance.hideBlockAD();
                MiniGameMgr.instance.showAdBox(function () {
                    _this._isShowBox = true;
                    MiniGameMgr.instance.showBlockAD();
                    _this._nGlodRadio = 1;
                    _this.sendAwardAfterWatchVideoAd();
                });
                return;
            }
            if (this._bRecvAward) {
                this.sucfulEntryThreeNextLevel();
                return;
            }
            if (isDouble) {
                MiniGameMgr.instance.playVideoAd({
                    successFun: function () {
                        _this.sendAwardAfterWatchVideoAd();
                    }
                });
            }
            else {
                this._nGlodRadio = 1;
                this.sendAwardAfterWatchVideoAd();
            }
        };
        SuccessfulEntryThreeQQView.prototype.sendAwardAfterWatchVideoAd = function () {
            this._bRecvAward = true;
            this.flayGlodSuccess();
            var numAdd = this._nGlodAdd * this._nGlodRadio;
            PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, numAdd);
            this.sucfulEntryThreeNextLevel();
        };
        SuccessfulEntryThreeQQView.prototype.sucfulEntryThreeNextLevel = function () {
            var numCost = 1;
            var objData = ConfigMgr.getInstance().getGCDBID(8);
            if (objData) {
                numCost = parseInt(objData.strValue);
            }
            var self = this;
            var fun = function () {
                MoreGameRandomGameBox713.bGotoNextGame = true;
                ViewManager.getInstance().showView(MoreGameRandomGameBox713);
                MiniGameMgr.instance._bFlagSpecialView = true;
                self.removeSelf();
            };
            var bln = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, numCost);
            if (!bln) {
                GameManager.instance.onPowerNotEnough();
                return;
            }
            else {
                this.removeEvent();
                if (DeviceUtil.isWXMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
                    if (!this._bRecvAward) {
                        Laya.timer.once(1000, this, function () {
                            fun();
                        });
                    }
                    else {
                        fun();
                    }
                }
                else {
                    PlayerDataMgr.getInstance().subProp(PType.e_GType_Sp, numCost);
                    if (PlayerDataMgr.getInstance().stPlayerDataBase.nCurLevel >= PlayerDataMgr.getInstance().nMaxLevelCount - 1
                        && DeviceUtil.isQQMiniGame()) {
                        TipsManager.getInstance().showDefaultTips("明日更新关卡，明天再来吧！");
                        PlayerDataMgr.getInstance().isMaxLevel();
                        this.returnToHome();
                    }
                    else {
                        ViewChangeMgr.getInstance().goToNextLevel();
                        MiniGameMgr.instance._bFlagSpecialView = true;
                        this.removeSelf();
                    }
                }
            }
        };
        SuccessfulEntryThreeQQView.prototype.returnToHome = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                if (PlayerDataMgr.getInstance().bIsNewPlayer || BaseConst.infos.gameInfo.openPsAward == 0 ||
                    BaseConst.infos.gameInfo.glodegg == 0) {
                    MoreGameRandomGameBox713.toHome = true;
                    ViewManager.getInstance().showView(MoreGameRandomGameBox713);
                    MiniGameMgr.instance._bFlagSpecialView = true;
                    this.removeSelf();
                    return;
                }
            }
            GameManager.instance.backHome();
            MiniGameMgr.instance._bFlagSpecialView = true;
            this.removeSelf();
        };
        SuccessfulEntryThreeQQView.prototype.startSucImageBtShareAni = function () {
            if (!this._bIsRunning) {
                return;
            }
            Laya.timer.clearAll(this.btnShare);
            AnimationMgr.instance.zoomTweena(this.btnShare, this);
        };
        SuccessfulEntryThreeQQView.prototype.flayGlodSuccess = function () {
            var point = new Laya.Point();
            point.x = this.imgGoodsTypeUp.x;
            point.y = this.imgGoodsTypeUp.y;
            var parent = this.imgGoodsTypeUp.parent;
            point = parent.localToGlobal(point);
            AnimationMgr.instance.flayGloda(point.x, point.y, 341, 105);
        };
        SuccessfulEntryThreeQQView.prototype.createSke = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                AnimationMgr.instance.showSkeAnimation(url, function (boomAnimation) {
                    boomAnimation.player.playbackRate = 1;
                    boomAnimation.autoSize = true;
                    boomAnimation.scale(1, 1);
                    boomAnimation.play(0, false);
                    boomAnimation.x = _this.grp_center.width / 2;
                    boomAnimation.y = _this.grp_center.height / 2;
                    _this.grp_center.addChild(boomAnimation);
                    _this.aniReal = boomAnimation;
                    resolve(boomAnimation);
                }, 1);
            });
        };
        SuccessfulEntryThreeQQView.prototype.initPlView = function () {
            if (DeviceUtil.isTTMiniGame()) {
                this.imgShareName.skin = "resource/assets/img/ui/success/failure_word_8.png";
                this.imgShareIcon.skin = "resource/assets/img/common/succeed_icon_3.png";
                this.imgShareName.y = 15;
                this.sprShareCount.visible = true;
                this.ttGoodsIcon.visible = true;
                this.ttSpecialIcon.visible = true;
                var numCount = 50;
                this._nGlodCount = numCount;
                var objData = ConfigMgr.getInstance().getGCDBID(18);
                if (objData) {
                    numCount = parseInt(objData.strValue);
                }
                BitmapLabelUtils.setLabel(this.sprShareCount, numCount.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
            }
            else {
                this.imgShareName.skin = "resource/assets/img/ui/success/failure_word_3.png";
                this.imgShareIcon.skin = "resource/assets/img/common/common_icon_3.png";
                this.sprShareCount.visible = false;
                this.ttGoodsIcon.visible = false;
                this.ttSpecialIcon.visible = false;
                this.imgShareName.y = 42;
                this.imgShareName.right = 50;
                this.imgShareIcon.left = 40;
            }
        };
        SuccessfulEntryThreeQQView.prototype.flayGlodRecv = function () {
            console.log("flayGlodRecv");
            var point = new Laya.Point();
            point.x = this.ttGoodsIcon.x;
            point.y = this.ttGoodsIcon.y;
            var parent = this.ttGoodsIcon.parent;
            point = parent.localToGlobal(point);
            AnimationMgr.instance.flayGloda(point.x, point.y, 341, 105);
        };
        SuccessfulEntryThreeQQView.prototype.proceMoreGame = function () {
            if ((DeviceUtil.isTTMiniGame()) && BaseConst.infos.gameInfo.isDY) {
                this.refreshWxMoreGame();
                this.imgWeChatMore.visible = true;
            }
            else if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                this.initPl();
            }
        };
        SuccessfulEntryThreeQQView.prototype.refreshWxMoreGame = function () {
            this.panelWeChatMore;
            var startX = 53;
            var startY = 47;
            var arrInfo = [];
            var numCount = 3;
            arrInfo = GameManager.instance.getRandomEightIndex();
            var len = 8;
            if (DeviceUtil.isWXMiniGame()) {
                len = arrInfo.length;
            }
            else {
                len = 9;
                len = len < arrInfo.length ? len : arrInfo.length;
            }
            for (var i = 0; i < len; ++i) {
                var pWeCatMoreGameItemOne = this.panelWeChatMore.getChildAt(i);
                if (pWeCatMoreGameItemOne) {
                    pWeCatMoreGameItemOne.setData(arrInfo[i]);
                }
                else {
                    pWeCatMoreGameItemOne = new WeCatMoreGameItemOne(arrInfo[i]);
                    var addx = Math.floor(i % numCount);
                    var addy = Math.floor(i / numCount);
                    pWeCatMoreGameItemOne.x = startX + pWeCatMoreGameItemOne.width * addx + 70 * addx;
                    pWeCatMoreGameItemOne.y = startY + pWeCatMoreGameItemOne.height * addy + 10 * addy;
                    this.panelWeChatMore.addChild(pWeCatMoreGameItemOne);
                    this.scrollSizeMax = 180 * (addy + 1);
                    this.nTimePanel = (addy + 1) * 1000;
                }
            }
            if (DeviceUtil.isWXMiniGame())
                this.panelScrollAni();
        };
        SuccessfulEntryThreeQQView.prototype.onShowMoreGame = function () {
            MiniGameMgr.instance.showMoreGamesModel();
        };
        SuccessfulEntryThreeQQView.prototype.panelScrollAni = function () {
            var _this = this;
            Laya.Tween.clearAll(this.panelWeChatMore.vScrollBar);
            Laya.timer.clearAll(this.panelScrollAni);
            Laya.Tween.to(this.panelWeChatMore.vScrollBar, { value: this.scrollSizeMax }, this.nTimePanel, null, Laya.Handler.create(this, function (args) {
                Laya.Tween.to(_this.panelWeChatMore.vScrollBar, { value: 0 }, _this.nTimePanel, null, Laya.Handler.create(_this, function (args) {
                    _this.scrollSizeMax = _this.panelWeChatMore.vScrollBar.max;
                    Laya.timer.once(0, _this, _this.panelScrollAni);
                }));
            }));
        };
        SuccessfulEntryThreeQQView.prototype.createSkeletonNanZhu = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                AnimationMgr.instance.showSkeAnimation(url, function (boomAnimation) {
                    boomAnimation.player.playbackRate = 1;
                    boomAnimation.autoSize = true;
                    boomAnimation.scale(1, 1);
                    boomAnimation.play(0, true);
                    boomAnimation.x = 250;
                    boomAnimation.y = 400 + 80;
                    _this.boxAnim.addChild(boomAnimation);
                    _this.aniRealNanZhu = boomAnimation;
                    resolve(boomAnimation);
                }, 1);
            });
        };
        SuccessfulEntryThreeQQView.prototype.initPl = function () {
            var _this = this;
            if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                this.box_wecat.visible = true;
                this.box_wecat.removeChildren();
                this.box_wecat.addChild(ViewChangeMgr.getInstance().showMoreGameinView());
                this.imgMask.visible = false;
                this.btnShare.visible = false;
                this.check4.visible = false;
                this.boxAnim.visible = false;
                this.btnNextLevel.visible = true;
                if (BaseConst.infos.gameInfo.openPsAward == 1 && BaseConst.infos.gameInfo.for_pay == 1) {
                    this.btnNextLevel.visible = true;
                    this.btnNextLevel.bottom = this.nBtNextLevelSp;
                    MiniGameMgr.instance._bFlagSpecialView = false;
                    MiniGameMgr.instance.hideBannerAd();
                    Laya.timer.once(1000, this, function () {
                        MiniGameMgr.instance._bFlagSpecialView = true;
                        MiniGameMgr.instance.showBanner({});
                        Laya.Tween.to(_this.btnNextLevel, { bottom: _this.nBtNextLevel }, 500, null);
                    });
                    return;
                }
                else {
                    this.btnNextLevel.bottom = this.nBtNextLevel;
                }
            }
            MiniGameMgr.instance.showBanner({});
        };
        SuccessfulEntryThreeQQView.prototype.weCatGotoNextLevel = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            this._bRecvAward = true;
            this.flayGlodSuccess();
            this._nGlodRadio = 1;
            var nGlodAddTemp = this._nGlodAdd * this._nGlodRadio;
            PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, nGlodAddTemp);
            var numCost = 1;
            var objData = ConfigMgr.getInstance().getGCDBID(8);
            if (objData) {
                numCost = parseInt(objData.strValue);
            }
            var bln = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, numCost);
            if (!bln) {
                GameManager.instance.onPowerNotEnough();
                return;
            }
            else {
                this.removeEvent();
                if (LevelMgr.getInstance().nCurrentLevel == 1) {
                    MoreGameRandomGameBox713.bGotoNextGame = true;
                }
                else if (LevelMgr.getInstance().nCurrentLevel >= 2) {
                    MoreGameRandomGameBox713.bGotoNextGame = true;
                    MoreGameRandomGameBox713.bEnterHotBox = true;
                }
                ViewManager.getInstance().showView(MoreGameRandomGameBox713);
                MiniGameMgr.instance._bFlagSpecialView = true;
                this.removeSelf();
            }
        };
        return SuccessfulEntryThreeQQView;
    }(PopBaseScene));

    var SuccessfulEntryOneQQView = (function (_super) {
        __extends(SuccessfulEntryOneQQView, _super);
        function SuccessfulEntryOneQQView(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "SuccessfulEntryOneQQView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this.yTemp = null;
            _this.viewData_ = data;
            _this._nTimeDown = 5;
            _this._nCountMax = 5;
            _this._nPsAdd = 1;
            _this._nAddPerOne = 0;
            _this._nCurCount = 0;
            _this._bTimeOver = false;
            _this._bAniRunning = false;
            _this._bFirst = true;
            _this._nTimeOverTemp = 0;
            _this._nLastClickTime = 0;
            _this.skin = "game/uiView/settlement/SuccessfulEntryOneQQView.json";
            return _this;
        }
        SuccessfulEntryOneQQView.prototype.initMiniGame = function () {
            MiniGameMgr.instance._bFlagSpecialView = false;
            MiniGameMgr.instance.showChaPinAd();
            MiniGameMgr.instance.hideBannerAd();
            this.btnGet.bottom = 0;
            ViewChangeMgr.getInstance().commonView.visible = false;
        };
        SuccessfulEntryOneQQView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            Laya.timer.clearAll(this.imgIcon);
            this._bFirst = false;
            this._bAniRunning = false;
            Laya.Tween.clearAll(this.imgIcon);
            Laya.timer.clearAll(this);
            MiniGameMgr.instance._bFlagSpecialView = true;
        };
        SuccessfulEntryOneQQView.prototype.initView = function () {
            SoundMgr.getInstance().playEffect("win", 1);
            if (this._moveBtnTween) {
                this._moveBtnTween.recover();
            }
            this._moveBtnTween = null;
            this._nTimeDown = 5;
            this._nCountMax = 5;
            this._nPsAdd = 1;
            this._nAddPerOne = 0;
            this._nCurCount = 0;
            this._bTimeOver = false;
            this._bAniRunning = true;
            this._bFirst = true;
            this.initData();
            this._nAddPerOne = Math.floor(870 / this._nCountMax);
            this.imgValue.width = 0;
            this.openTimeDown();
            this.openHandAnimation();
        };
        SuccessfulEntryOneQQView.prototype.initData = function () {
            var objData = ConfigMgr.getInstance().getGCDBID(9);
            if (objData) {
                this._nTimeDown = parseInt(objData.strValue);
            }
            BitmapLabelUtils.setLabel(this.sprTime, this._nTimeDown.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");
            objData = ConfigMgr.getInstance().getGCDBID(10);
            if (objData) {
                this._nCountMax = parseInt(objData.strValue);
            }
            objData = ConfigMgr.getInstance().getGCDBID(11);
            if (objData) {
                this._nPsAdd = parseInt(objData.strValue);
            }
            objData = ConfigMgr.getInstance().getGCDBID(14);
            if (objData) {
                this._nTimeOverTemp = parseInt(objData.strValue);
            }
        };
        SuccessfulEntryOneQQView.prototype.addEvent = function () {
            this.registerEvent(this.btnGet, Laya.Event.CLICK, this.btnGetClickReceiveAward, this);
        };
        SuccessfulEntryOneQQView.prototype.removeEvent = function () {
            _super.prototype.removeEvent.call(this);
        };
        SuccessfulEntryOneQQView.prototype.btnGetClickReceiveAward = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            if (this._bTimeOver) {
                return;
            }
            this._nCurCount += 1;
            var numCur = this._nCurCount * this._nAddPerOne;
            this.imgValue.width = numCur;
            this.img_head.x = 885 * (this._nCurCount / this._nCountMax) + 115;
            if (this._nCurCount >= this._nCountMax) {
                Laya.timer.clear(this, this.timeDown);
                this.procLogicOver();
            }
            this.checkClick();
        };
        SuccessfulEntryOneQQView.prototype.checkClick = function () {
            if (this._nCurCount > 7) {
                MiniGameMgr.instance._bFlagSpecialView = true;
                MiniGameMgr.instance.showBanner({ isNeedShowQQbaner: true });
                if (!this._moveBtnTween) {
                    if (DeviceUtil.isTTMiniGame()) {
                        if (MiniGameMgr.instance.appName() != 'Douyin') {
                            this._moveBtnTween = Laya.Tween.to(this.btnGet, { bottom: 200 }, 1000);
                        }
                    }
                    else if (DeviceUtil.isQQMiniGame()) {
                        this._moveBtnTween = Laya.Tween.to(this.btnGet, { bottom: 400 }, 1000);
                    }
                    else {
                        this._moveBtnTween = Laya.Tween.to(this.btnGet, { bottom: 200 }, 1000);
                    }
                }
            }
            this._nLastClickTime = GameLogicProcessMgr.GetCurTimea();
        };
        SuccessfulEntryOneQQView.prototype.openTimeDown = function () {
            BitmapLabelUtils.setLabel(this.sprTime, this._nTimeDown.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");
            Laya.timer.loop(1000, this, this.timeDown);
            Laya.timer.loop(this._nTimeOverTemp, this, this.dealCount);
        };
        SuccessfulEntryOneQQView.prototype.dealCount = function () {
            this._nCurCount -= 1;
            this._nCurCount = this._nCurCount < 0 ? 0 : this._nCurCount;
            var numCur = this._nCurCount * this._nAddPerOne;
            this.imgValue.width = numCur;
            this.img_head.x = 885 * (this._nCurCount / this._nCountMax) + 115;
        };
        SuccessfulEntryOneQQView.prototype.timeDown = function () {
            this._nTimeDown -= 1;
            var numTemp = this._nTimeDown;
            numTemp = numTemp < 0 ? 0 : numTemp;
            if (this._nTimeDown < 0) {
                this._bTimeOver = true;
                this.procLogicOver();
            }
            else {
                BitmapLabelUtils.setLabel(this.sprTime, this._nTimeDown.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");
            }
        };
        SuccessfulEntryOneQQView.prototype.procLogicOver = function () {
            Laya.timer.clear(this, this.timeDown);
            if (this._bTimeOver) {
                PlayerDataMgr.getInstance().showTips("领取失败");
                this.viewData_ && this.viewData_.fail && this.viewData_.fail();
            }
            else if (this._nCurCount >= this._nCountMax) {
                if (this.viewData_ && this.viewData_.isSuccess) {
                    PlayerDataMgr.getInstance().AddProp(PType.e_GType_Sp, this._nPsAdd);
                    PlayerDataMgr.getInstance().showTips("体力+" + this._nPsAdd.toString());
                }
                this.viewData_ && this.viewData_.success && this.viewData_.success();
            }
            if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                if (PlayerDataMgr.bGlobEnterGame) {
                    ViewManager.getInstance().showView(MoreGameOperRequestTwo);
                }
                else {
                    if (PlayerDataMgr.getInstance().nGotoLevel != 0) {
                        ViewChangeMgr.getInstance().gotoLevel(PlayerDataMgr.getInstance().nGotoLevel);
                    }
                    else {
                        if (PlayerDataMgr.getInstance().bEnterGameFromGameHome) {
                            ViewChangeMgr.getInstance().CurLevelBasea.startGame();
                        }
                        else {
                            ViewChangeMgr.getInstance().goToNextLevel();
                        }
                    }
                    ViewChangeMgr.getInstance().commonView.visible = true;
                }
                PlayerDataMgr.getInstance().bEnterGameFromGameHome = false;
                PlayerDataMgr.getInstance().nGotoLevel = 0;
                MiniGameMgr.instance._bFlagSpecialView = true;
                this.removeSelf();
            }
            else {
                this.showSuccessView();
            }
        };
        SuccessfulEntryOneQQView.prototype.showSuccessView = function () {
            if (DeviceUtil.isVIVOMiniGame()) {
                ViewManager.getInstance().showView(SuccessfulEntryThreeVivoView);
            }
            else if (DeviceUtil.isQQMiniGame()) {
                if (this.viewData_ && this.viewData_.isSuccess) {
                    ViewManager.getInstance().showView(SuccessfulEntryThreeQQView);
                }
            }
            else {
                ViewManager.getInstance().showView(SuccessfulEntryThreeView);
            }
            ViewChangeMgr.getInstance().commonView.visible = true;
            this.removeSelf();
            MiniGameMgr.instance._bFlagSpecialView = true;
        };
        SuccessfulEntryOneQQView.prototype.removeSelf = function () {
            if (this._moveBtnTween) {
                this._moveBtnTween.recover();
            }
            this._moveBtnTween = null;
            Laya.timer.clear(this, this.dealCount);
            Laya.timer.clear(this, this.timeDown);
            Laya.timer.clearAll(this);
            return _super.prototype.removeSelf.call(this);
        };
        SuccessfulEntryOneQQView.prototype.openHandAnimation = function () {
            if (!this._bAniRunning) {
                return;
            }
            if (this.yTemp == null) {
                this.yTemp = this.imgIcon.y;
            }
            this.imgIcon.y = this.yTemp;
            AnimationMgr.instance.VTween(this.imgIcon, this.imgIcon, 2);
        };
        return SuccessfulEntryOneQQView;
    }(PopBaseScene));

    var GameHomeView = (function (_super) {
        __extends(GameHomeView, _super);
        function GameHomeView() {
            var _this = _super.call(this) || this;
            _this.className_key = "GameHomeView";
            _this.cIndex = 0;
            _this.skin = "game/GameHomeView.json";
            _this._bIsRunning = false;
            _this._bWeCatShow = false;
            return _this;
        }
        GameHomeView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_more.visible = false;
            this.more_games.visible = false;
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) {
                this.btn_more.visible = true;
            }
            if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                this.imageWeCatMoreGame.visible = true;
                this.more_games.visible = true;
            }
            this.checkPlatform();
        };
        GameHomeView.prototype.onAddStage = function () {
            this.initView();
            this.addEvent();
        };
        GameHomeView.prototype.checkPlatform = function () {
            if (DeviceUtil.isQQMiniGame()) {
                this.changeHomeBtnSkinQQ();
            }
        };
        GameHomeView.prototype.checkOpenSignPage = function () {
            if (DeviceUtil.isQQMiniGame() && BaseConst.infos.gameInfo.openPsAward && PlayerDataMgr.getInstance().isSigned()) {
                this.showSignView();
            }
        };
        GameHomeView.prototype.changeHomeBtnSkinQQ = function () {
            var arr = [this.imageBtStartGame, this.imageBtChoseLevel, this.imageBtShare, this.imageBtInvital, this.imageBtSign];
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                var obj = arr_1[_i];
                var skin = obj.skin;
                obj.skin = skin.replace(/.png/, "_qq.png");
            }
        };
        GameHomeView.prototype.onRemoved = function () {
            this._bIsRunning = false;
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            Laya.Tween.clearAll(this.imageBtStartGame);
            this.imageBtShare.x = this.imageBtChoseLevel.x = this.imageBtSign.x = this.imageBtInvital.x = 454;
            this.imageBtShare.centerY = this.imageBtChoseLevel.centerY = this.imageBtSign.centerY = this.imageBtInvital.centerY = -340;
        };
        GameHomeView.prototype.addEvent = function () {
            this.registerEvent(this.imageBtStartGame, Laya.Event.CLICK, this.homeStartGame, this);
            this.registerEvent(this.btn_more, Laya.Event.CLICK, this.onMoreMiniGame, this);
            this.registerEvent(this.imageBtChoseLevel, Laya.Event.CLICK, this.openLevelView, this);
            this.registerEvent(this.imageBtSign, Laya.Event.CLICK, this.openSignView, this);
            this.registerEvent(this.imageBtShare, Laya.Event.CLICK, this.onGameHomeShare, this);
            this.registerEvent(this.imageBtInvital, Laya.Event.CLICK, this.onInvite, this);
            this.registerEvent(this.imageWeCatMoreGame, Laya.Event.CLICK, this.openChouTi, this);
            this.registerEvent(this.more_games, Laya.Event.CLICK, this.wxShowMoreMiniGame, this);
            this.registerEvent(this.back_btn, Laya.Event.CLICK, this.wxShowMoreMiniGame, this);
            this.registerEvent(this.imageBgGetGlod, Laya.Event.CLICK, this.getFreeGlods, this);
            this.registerEvent(this.btn_oppo_moregame, Laya.Event.CLICK, this.jumpLeisureSubject, this);
        };
        GameHomeView.prototype.jumpLeisureSubject = function () {
            MiniGameMgr.instance.jumpLeisureSubject();
        };
        GameHomeView.prototype.onMoreMiniGame = function () {
            if (DeviceUtil.isQQMiniGame()) {
                MiniGameMgr.instance.showAdBox();
            }
            else if (DeviceUtil.isTTMiniGame()) {
                MiniGameMgr.instance.showMoreGamesModel();
            }
        };
        GameHomeView.prototype.removeEvent = function () {
            _super.prototype.removeEvent.call(this);
        };
        GameHomeView.prototype.wxShowMoreMiniGame = function () {
            ViewManager.getInstance().showView(MoreGameOperRequestTwo);
        };
        GameHomeView.prototype.openChouTi = function () {
            ViewManager.getInstance().showView(WeCatMoreGameView);
        };
        GameHomeView.prototype.homeStartGame = function () {
            var _this = this;
            if (DeviceUtil.isQQMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
                ViewManager.getInstance().showView(SuccessfulEntryOneQQView, {
                    success: function () {
                        PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, 100);
                        PlayerDataMgr.getInstance().showTips("金币+" + 100);
                        _this.gameStart();
                    }, fail: function () {
                        _this.gameStart();
                    }, isSuccess: false
                });
            }
            else {
                this.gameStart();
            }
        };
        GameHomeView.prototype.gameStart = function () {
            ResUtil.getIntance().loadGroups(['success', 'game']);
            SoundMgr.getInstance().playEffect("button", 1);
            if (PlayerDataMgr.getInstance().stPlayerDataBase.nMaxLevel >= PlayerDataMgr.getInstance().nMaxLevelCount
                && BaseConst.infos.gameInfo.succShowBox < 1 && DeviceUtil.isQQMiniGame()) {
                TipsManager.getInstance().showDefaultTips("已通关所有关卡，请明日再来!");
                return;
            }
            var nSpCost = 1;
            var stGameConfig = ConfigMgr.getInstance().getGCDBID(8);
            if (stGameConfig) {
                nSpCost = parseInt(stGameConfig.strValue);
            }
            var b = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, nSpCost);
            if (!b) {
                GameManager.instance.onPowerNotEnough();
                return;
            }
            ViewChangeMgr.getInstance().commonView.removeBtEvent();
            PlayerDataMgr.getInstance().subProp(PType.e_GType_Sp, nSpCost);
            if (DeviceUtil.isTTMiniGame()) {
                MiniGameMgr.instance.hideBannerAd();
            }
            this.enterOper();
            this.removeSelf();
        };
        GameHomeView.prototype.enterOper = function () {
            if (ConfigMgr.getInstance().isWeCatMiniGame()
                && PlayerDataMgr.getInstance().getCurGuanQia() >= BaseConst.infos.gameInfo.splevel
                && BaseConst.infos.gameInfo.openPsAward == 1) {
                ViewChangeMgr.getInstance().CurLevelBasea.startGame();
            }
            else {
                ViewChangeMgr.getInstance().CurLevelBasea.startGame();
            }
        };
        GameHomeView.prototype.wxOper71324 = function () {
            if (!ConfigMgr.getInstance().isWeCatMiniGame()) {
                return;
            }
            if (!PlayerDataMgr.getInstance().isSecondEnterGame()) {
                return;
            }
            this.removeEvent();
            var self = this;
            MiniGameMgr.instance.playVideoAd({
                successFun: function () {
                    self.enterOper();
                },
                failFun: function () {
                    self.enterOper();
                },
                errorFun: function () {
                    self.enterOper();
                }
            });
        };
        GameHomeView.prototype.initView = function () {
            AddPowerView._bCloseBinner = false;
            MiniGameMgr.instance.showBanner({ className_key: this.className_key });
            this._bIsRunning = true;
            this.startGameAni();
            this.startRedAnimation();
            this.PlInitView();
            this.checkOpenSignPage();
            BitmapLabelUtils.setLabel(this.spLevelNum, PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia().toString(), "resource/assets/img/ui/gamehome/maininterface_number1/maininterface_number1_", 0, ".png", "center");
            if (DeviceUtil.isWXMiniGame()) {
                this.imageHead.visible = false;
            }
            else if (DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) ;
            var arr = [this.imageBtChoseLevel, this.imageBtShare, this.imageBtInvital, this.imageBtSign];
            var arrpos = [{ x: 87, centerY: -100 }, { x: 325, centerY: 0 }, { x: 563, centerY: 0 }, { x: 801, centerY: -100 }];
            if (DeviceUtil.isTTMiniGame()) {
                arrpos = [{ x: 87, centerY: -120 }, { x: 440, centerY: -40 }, { x: 440, centerY: -40 }, { x: 801, centerY: -120 }];
            }
            else if (DeviceUtil.isVIVOMiniGame()) {
                arrpos = [{ x: 87, centerY: -120 }, { x: 440, centerY: 0 }, { x: 440, centerY: 0 }, { x: 801, centerY: -120 }];
                this.imageBtShare.visible = false;
            }
            else if (DeviceUtil.isNative()) {
                arrpos = [{ x: 325, centerY: 0 }, { x: 440, centerY: 0 }, { x: 440, centerY: 0 }, { x: 563, centerY: 0 }];
                this.imageBtShare.visible = false;
                this.imageBtInvital.visible = false;
            }
            else if (DeviceUtil.isOPPOMiniGame()) {
                arrpos = [{ x: 87, centerY: -120 }, { x: 440, centerY: 0 }, { x: 440, centerY: 0 }, { x: 801, centerY: -120 }];
                this.imageBtShare.visible = false;
                this.imageBtInvital.visible = false;
            }
            Laya.timer.loop(200, this, this.showBtnfly, [arr, arrpos]);
            if (BaseConst.infos.gameInfo.openPsAward == 0) {
                this.back_btn.visible = this.more_games.visible = this.imageWeCatMoreGame.visible
                    = this.imageBtShare.visible = this.imageBtChoseLevel.visible = this.imageBtSign.visible
                        = this.imageBtInvital.visible
                            = false;
            }
            if (BaseConst.infos.gameInfo.for_pay == 0) {
                this.imageBgGetGlod.visible = false;
            }
            if (DeviceUtil.isVIVOMiniGame()) {
                var vvHomeScene = this.getChildByName("platformScene");
                if (vvHomeScene == null) {
                    vvHomeScene = new VVHomeScene();
                    vvHomeScene.name = 'platformScene';
                }
                this.addChild(vvHomeScene);
                this.imageBgGetGlod.visible = false;
            }
            else if (DeviceUtil.isOPPOMiniGame()) {
                var oppoHomeScene = this.getChildByName("platformScene");
                if (oppoHomeScene == null) {
                    oppoHomeScene = new OppoHomeScene();
                    oppoHomeScene.name = 'platformScene';
                }
                this.addChild(oppoHomeScene);
                this.imageBgGetGlod.visible = false;
            }
            if (BaseConst.infos.gameInfo.for_pay == 0) {
                this.imageBgGetGlod.visible = false;
            }
            var self = this;
            if (!self._guessLike && ConfigMgr.getInstance().isWeCatMiniGame()) {
                MiniGameMgr.instance.createGuessLikeView(self).then(function (guessLike) {
                    if (!guessLike) {
                        return;
                    }
                    self._guessLike = guessLike;
                    self._guessLike.x = (Laya.stage.width - self._guessLike.width) / 2;
                    self._guessLike.y = 250;
                });
            }
            ViewChangeMgr.getInstance().restartEnterGameHome();
            this.btn_oppo_moregame.visible = false;
            if (DeviceUtil.isNative()) {
                this.btn_oppo_moregame.visible = true;
            }
        };
        GameHomeView.prototype.showBtnfly = function (arr, arrpos) {
            Laya.Tween.to(arr[this.cIndex], arrpos[this.cIndex], 500);
            this.cIndex++;
            if (this.cIndex == 4) {
                Laya.timer.clear(this, this.showBtnfly);
                this.cIndex = 0;
            }
        };
        GameHomeView.prototype.openLevelView = function () {
            var _this = this;
            SoundMgr.getInstance().playEffect("button", 1);
            ViewChangeMgr.getInstance().showBufLoadingView();
            ResUtil.getIntance().loadGroups(["levelview"], function () {
                LevelView.homeView = _this;
                ViewManager.getInstance().showView(LevelView);
                ViewChangeMgr.getInstance().hideBufLoadingView();
            });
        };
        GameHomeView.prototype.openSignView = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            this.showSignView();
        };
        GameHomeView.prototype.onGameHomeShare = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            MiniGameMgr.instance.flagDouYin = false;
            MiniGameMgr.instance.shareAppMsg();
        };
        GameHomeView.prototype.onInvite = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            ViewChangeMgr.getInstance().showBufLoadingView();
            ResUtil.getIntance().loadGroups(["invite"], function () {
                ViewManager.getInstance().showView(InviteView);
                ViewChangeMgr.getInstance().hideBufLoadingView();
            });
        };
        GameHomeView.prototype.startGameAni = function () {
            if (!this._bIsRunning) {
                return;
            }
            Laya.timer.clearAll(this.imageBtStartGame);
            AnimationMgr.instance.zoomTweena(this.imageBtStartGame, this.imageBtStartGame, 0.12);
        };
        GameHomeView.prototype.PlInitView = function () {
            if (DeviceUtil.isTTMiniGame()) {
                this.imageBtInvital.visible = false;
            }
        };
        GameHomeView.prototype.showSignView = function () {
            ViewChangeMgr.getInstance().showBufLoadingView();
            ResUtil.getIntance().loadGroups(["sign"], function () {
                if (DeviceUtil.isOPPOMiniGame()) {
                    ViewManager.getInstance().showView(SignOppoView);
                }
                else {
                    ViewManager.getInstance().showView(SignPopView);
                }
                ViewChangeMgr.getInstance().hideBufLoadingView();
            });
        };
        GameHomeView.prototype.weCatViewOper = function () {
            this.wxShowMoreMiniGame();
        };
        GameHomeView.prototype.getFreeGlods = function () {
            var _this = this;
            SoundMgr.getInstance().playEffect("button", 1);
            if (DeviceUtil.isMiniGame()) {
                MiniGameMgr.instance.playVideoAd({
                    successFun: function () {
                        _this.addGFold();
                    },
                    failFun: function () {
                    },
                    errorFun: function () {
                    }
                });
            }
            else {
                this.addGFold();
            }
        };
        GameHomeView.prototype.addGFold = function () {
            var nGlodCount = 200;
            var stGameConfig = ConfigMgr.getInstance().getGCDBID(19);
            if (stGameConfig) {
                nGlodCount = parseInt(stGameConfig.strValue);
            }
            PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, nGlodCount);
        };
        GameHomeView.prototype.startRedAnimation = function () {
            if (!this._bIsRunning) {
                return;
            }
            Laya.timer.clearAll(this.imageRed);
            AnimationMgr.instance.zoomTweena(this.imageRed, this.imageRed);
        };
        return GameHomeView;
    }(BaseUIScene));

    var GameViewCap = (function (_super) {
        __extends(GameViewCap, _super);
        function GameViewCap() {
            var _this = _super.call(this) || this;
            _this.className_key = "GameView";
            _this.bg_img_res = null;
            _this._chooseLeft = null;
            _this._bHanderAniShow = false;
            _this._bIsRunning = false;
            _this._bLevelOver = false;
            _this.skin = "game/GameView.json";
            _this.createGameOverEffect();
            return _this;
        }
        GameViewCap.prototype.initMiniGame = function () {
            var self = this;
            if (!self._guessLike && ConfigMgr.getInstance().isWeCatMiniGame()) {
                MiniGameMgr.instance.createGuessLikeView(self).then(function (guessLike) {
                    if (!guessLike) {
                        return;
                    }
                    self._guessLike = guessLike;
                    self._guessLike.x = (Laya.stage.width - self._guessLike.width) / 2;
                    self._guessLike.y = 250;
                });
            }
            if (DeviceUtil.isTTMiniGame()) {
                this.imageBtTip.getChildAt(0).skin = "resource/assets/img/common/common_icon_2.png";
                this.imageBtGotoNextLevel.visible = false;
            }
            if (DeviceUtil.isWXMiniGame()) {
                EffectUtil.showScaleFix(this.wxBtnTip, 1.3);
            }
            if (DeviceUtil.isWXMiniGame() && BaseConst.infos.gameInfo.openPsAward == 0) {
                this.boxBtList.visible = false;
            }
            if (DeviceUtil.isTTMiniGame()) {
                MiniGameMgr.instance.hideBannerAd();
            }
            else if (DeviceUtil.isQQMiniGame()) {
                MiniGameMgr.instance.showBanner({});
            }
            else if (DeviceUtil.isWXMiniGame()) {
                MiniGameMgr.instance.showBanner({});
            }
            else if (DeviceUtil.isVIVOMiniGame()) {
                this.showBanner({ className_key: this.className_key });
            }
            else if (DeviceUtil.isOPPOMiniGame()) {
                this.showBanner({ className_key: this.className_key });
            }
        };
        GameViewCap.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this._bIsRunning = false;
            Laya.Tween.clearAll(this.imageBtTip);
            Laya.timer.clearAll(this);
        };
        GameViewCap.prototype.initView = function () {
            this.initOperView();
            AddPowerView._bCloseBinner = true;
            MiniGameMgr.instance.showChaPinAd();
            EventMgr.getInstance().addEvent(GEvent.C_V_IMG, this, this.stopVideoImage);
            this.initPlView();
            this._bLevelOver = false;
            this._bIsRunning = true;
            this.refreshChooseContext();
            this.startimageBtTipAni();
            this.wxBtnTip.visible = false;
            this.imageBtTip.visible = false;
            this.imageBtGotoNextLevel.visible = false;
            if (DeviceUtil.isQQMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
                this.img_video.visible = false;
                this.img_tip.centerX = 0;
            }
        };
        GameViewCap.prototype.refreshChooseContext = function () {
            this.box_choose.visible = false;
            this.initViewInfo();
        };
        GameViewCap.prototype.initOperView = function () {
            var _this = this;
            if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                if (PlayerDataMgr.getInstance().isSecondEnterGame()) {
                    Laya.timer.once(1000, this, function () {
                        _this.pWeCatMoreGameView = ViewManager.getInstance().showView(WeCatMoreGameView);
                        _this.registerEvent(_this.imageWeCatMoreGame, Laya.Event.CLICK, _this.weCatViewOper, _this);
                        _this.imageWeCatMoreGame.visible = true;
                    });
                }
                else {
                    this.imageWeCatMoreGame.visible = true;
                    this.registerEvent(this.imageWeCatMoreGame, Laya.Event.CLICK, this.weCatViewOper, this);
                }
            }
        };
        GameViewCap.prototype.weCatViewOper = function () {
            this.pWeCatMoreGameView = ViewManager.getInstance().showView(WeCatMoreGameView);
        };
        GameViewCap.prototype.closeWeCatMoreGameView = function () {
            if (!ConfigMgr.getInstance().isWeCatMiniGame()) {
                return;
            }
            if (WeCatMoreGameView.isOpen && this.pWeCatMoreGameView) {
                this.pWeCatMoreGameView.removeSelf();
            }
        };
        GameViewCap.prototype.addEvent = function () {
            this.registerEvent(this.imageBtToHome, Laya.Event.CLICK, this.onBtnClick, this);
            this.registerEvent(this.imageBtTip, Laya.Event.CLICK, this.onBtnClick, this);
            this.registerEvent(this.wxBtnTip, Laya.Event.CLICK, this.onBtnClick, this);
            this.registerEvent(this.imageBtRestart, Laya.Event.CLICK, this.onBtnClick, this);
            this.registerEvent(this.imageBtGotoNextLevel, Laya.Event.CLICK, this.onBtnClick, this);
        };
        GameViewCap.prototype.onBtnClick = function (evt) {
            switch (evt.currentTarget) {
                case this.imageBtToHome:
                    this.returnToHome();
                    break;
                case this.imageBtTip:
                    this.onGameViewShareGame();
                    break;
                case this.wxBtnTip:
                    this.onGameViewShareGame();
                    break;
                case this.imageBtRestart:
                    this.gameViewRestartGame();
                    break;
                case this.imageBtGotoNextLevel:
                    this.onGameViewWatchVideoNextLevel();
                    break;
            }
        };
        GameViewCap.prototype.removeEvent = function () {
            EventMgr.getInstance().removeEvent(GEvent.C_V_IMG, this, this.stopVideoImage);
            _super.prototype.removeEvent.call(this);
        };
        GameViewCap.prototype.onGameViewWatchVideoNextLevel = function () {
            var _this = this;
            SoundMgr.getInstance().playEffect("button", 1);
            MiniGameMgr.instance.playVideoAd({
                gameConstKey: 'GameNext',
                successFun: function () {
                    _this.onGameViewNextLevel();
                }
            });
        };
        GameViewCap.prototype.onGameViewNextLevel = function () {
            if (this._bLevelOver) {
                return;
            }
            ViewChangeMgr.getInstance().goToNextLevel();
        };
        GameViewCap.prototype.gameViewRestartGame = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            if (this._bLevelOver) {
                return;
            }
            ViewChangeMgr.getInstance().restartGame(true);
        };
        GameViewCap.prototype.returnToHome = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_GH;
            ViewChangeMgr.getInstance().CurLevelBasea.returnToHome();
            this.removeSelf();
        };
        GameViewCap.prototype.onClick = function (evt) {
            SoundMgr.getInstance().playEffect("button", 1);
            var tar = evt.currentTarget;
            var data = this.viewData_.data;
            var icon_name = '';
            switch (evt.currentTarget) {
                case this.icon_chooseLeft:
                    icon_name = data.chooseLeftName;
                    this._chooseLeft = 'left';
                    this.icon_chooseRight.off(Laya.Event.MOUSE_DOWN, this, this.onClick);
                    this.icon_choseCoverUpLeft.visible = true;
                    break;
                case this.icon_chooseRight:
                    icon_name = data.chooseRightName;
                    this._chooseLeft = 'right';
                    this.icon_chooseLeft.off(Laya.Event.MOUSE_DOWN, this, this.onClick);
                    this.icon_choseCoverUpRight.visible = true;
                    break;
            }
            ViewChangeMgr.getInstance().CurLevelBasea._isPop = false;
            this.viewData_.callBack(icon_name == data.rightName, icon_name);
            this.imageBtTip.visible = false;
            this.imageBtGotoNextLevel.visible = false;
        };
        GameViewCap.prototype.showResultIcon = function (isRight) {
            var _this = this;
            this.createChooseAnswer(isRight);
            if (isRight) {
                SoundMgr.getInstance().playEffect("right", 1);
                Laya.timer.once(1000, this, function () {
                    _this.hideChoseView();
                });
            }
            else {
                SoundMgr.getInstance().playEffect("wrong", 1);
            }
        };
        GameViewCap.prototype.createChooseAnswer = function (isRight) {
            var tar;
            var skin = 'resource/assets/img/ui/game/gameinterface_icon_4.png';
            if (!isRight) {
                skin = 'resource/assets/img/ui/game/gameinterface_icon_5.png';
            }
            if (this._chooseLeft == 'left') {
                tar = this.icon_choseCoverUpLeft;
            }
            else {
                tar = this.icon_choseCoverUpRight;
            }
            var img = new Laya.Image();
            img.skin = skin;
            img.centerX = img.centerY = 0;
            tar.addChild(img);
        };
        GameViewCap.prototype.showChoseView = function (data) {
            if (DeviceUtil.isWXMiniGame()) ;
            this.imageBtTip.visible = true;
            if (!DeviceUtil.isTTMiniGame()) {
                this.imageBtGotoNextLevel.visible = true;
            }
            this.initViewInfo();
            this.viewData_ = data;
            this.box_choose.visible = true;
            this.refreshViewChoose();
            this.icon_chooseLeft.once(Laya.Event.MOUSE_DOWN, this, this.onClick);
            this.icon_chooseRight.once(Laya.Event.MOUSE_DOWN, this, this.onClick);
        };
        GameViewCap.prototype.hideChoseView = function () {
            if (DeviceUtil.isWXMiniGame()) {
                this.wxBtnTip.visible = false;
            }
            this.imageBtTip.visible = false;
            this.imageBtGotoNextLevel.visible = false;
            Laya.Tween.to(this.box_choose, { scaleX: 0, scaleY: 0 }, 500, Laya.Ease.backIn);
            this.box_choose.visible = false;
            this.icon_chooseLeft.off(Laya.Event.MOUSE_DOWN, this, this.onClick);
            this.icon_chooseRight.off(Laya.Event.MOUSE_DOWN, this, this.onClick);
            this.initViewInfo();
        };
        GameViewCap.prototype.refreshViewChoose = function () {
            this.box_choose.scale(0.2, 0.2);
            Laya.Tween.to(this.box_choose, { scaleX: 1, scaleY: 1 }, 500, Laya.Ease.backIn);
            this.icon_choseCoverUpRight.removeChildren();
            this.icon_choseCoverUpLeft.removeChildren();
            this.icon_choseCoverUpRight.visible = false;
            this.icon_choseCoverUpLeft.visible = false;
            this.icon_left.skin = 'resource/assets/img/choose/' + this.viewData_.data.icon_chooseLeft + '.png';
            this.icon_right.skin = 'resource/assets/img/choose/' + this.viewData_.data.icon_chooseRight + '.png';
        };
        GameViewCap.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        GameViewCap.prototype.refreshUpIndeInfo = function (nIndexCur, nIndexMax) {
            var nIndexTemp = 0;
            var nCur = PlayerDataMgr.getInstance().stPlayerDataBase.nCurLevel;
            nCur = nCur >= PlayerDataMgr.getInstance().nMaxLevelCount ? PlayerDataMgr.getInstance().getCurGuanQiaMax() - 1 : nCur;
            this.spLevelLeft.destroyChildren();
            this.spLevelRight.destroyChildren();
            var nNumLefc = 0;
            var nNumRight = 0;
            nNumLefc = this.spLevelLeft.numChildren;
            nNumRight = this.spLevelRight.numChildren;
            nNumLefc = nCur + 1;
            nNumRight = nCur + 2;
            BitmapLabelUtils.setLabel(this.spLevelLeft, nNumLefc.toString(), "resource/assets/img/ui/game/gameinterface_number1/gameinterface_number1_", 0, ".png", "center");
            BitmapLabelUtils.setLabel(this.spLevelRight, nNumRight.toString(), "resource/assets/img/ui/game/gameinterface_number1/gameinterface_number1_", 0, ".png", "center");
            nNumLefc = this.spLevelLeft.numChildren;
            nNumRight = this.spLevelRight.numChildren;
            this.showMiniLevel(nIndexMax, nIndexCur, nIndexTemp);
            if (nIndexTemp >= nIndexMax) {
                this._bLevelOver = true;
            }
            this.boxLevelInfo.width = 108 + 20 + this.hBoxIndex.width + 20 + 108;
        };
        GameViewCap.prototype.showMiniLevel = function (nIndexMax, nIndexCur, nIndexTemp) {
            var nCount = this.hBoxIndex.numChildren;
            for (var i = 0; i < nCount; ++i) {
                var stImageInfo = this.hBoxIndex.getChildAt(i);
                if (stImageInfo) {
                    if (i < nIndexMax) {
                        stImageInfo.visible = true;
                    }
                    else {
                        stImageInfo.visible = false;
                    }
                    var pImageFinish = stImageInfo.getChildAt(0);
                    if (pImageFinish) {
                        if (i < nIndexCur) {
                            pImageFinish.visible = true;
                        }
                        else {
                            pImageFinish.visible = false;
                        }
                    }
                }
            }
        };
        GameViewCap.prototype.onGameViewShareGame = function () {
            var _this = this;
            SoundMgr.getInstance().playEffect("button", 1);
            if (!this.box_choose.visible && !this._bHanderAniShow) {
                console.log("box choose not show!");
                return;
            }
            if (DeviceUtil.isQQMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
                ViewManager.getInstance().showView(SuccessfulEntryOneQQView, {
                    success: function () {
                        _this.onShareGameSuccess();
                    }, fail: function () {
                    }, isSuccess: false
                });
                return;
            }
            if (DeviceUtil.isTTMiniGame() || DeviceUtil.isVIVOMiniGame() || DeviceUtil.isQQMiniGame() || DeviceUtil.isOPPOMiniGame() || DeviceUtil.isNative()) {
                MiniGameMgr.instance.playVideoAd({
                    gameConstKey: 'GameTip',
                    successFun: function () {
                        _this.onShareGameSuccess();
                    }
                });
                return;
            }
            if (DeviceUtil.isMiniGame()) {
                var self_1 = this;
                MiniGameMgr.instance.flagDouYin = false;
                MiniGameMgr.instance.shareAppMsg({
                    sucFun: function () {
                        self_1.onShareGameSuccess();
                    }
                });
            }
            else {
                this.onShareGameSuccess();
            }
        };
        GameViewCap.prototype.onShareGameSuccess = function () {
            var data = ViewChangeMgr.getInstance().CurLevelBasea.getCurChoosedInfo();
            var nHandX = 0;
            var nHandY = 0;
            if (!data) {
                return;
            }
            if (data.chooseLeftName == data.rightName) {
                this.icon_choseCoverUpRight.visible = false;
                this.icon_chooseRight.off(Laya.Event.MOUSE_DOWN, this, this.onClick);
                nHandX = this.icon_chooseLeft.x + this.icon_chooseLeft.width / 2;
                nHandY = this.icon_chooseLeft.y + this.icon_chooseLeft.height / 2;
            }
            else {
                this.icon_choseCoverUpLeft.visible = false;
                nHandX = this.icon_chooseRight.x + this.icon_chooseRight.width / 2;
                nHandY = this.icon_chooseRight.y + this.icon_chooseRight.height / 2;
                this.icon_chooseLeft.off(Laya.Event.MOUSE_DOWN, this, this.onClick);
            }
            this.imageHand.x = nHandX;
            this.imageHand.y = nHandY;
            this._bHanderAniShow = true;
            this.imageHand.visible = true;
            this.handAni();
        };
        GameViewCap.prototype.handAni = function () {
            var _this = this;
            if (!this._bHanderAniShow) {
                return;
            }
            this.imageHand.skin = "resource/assets/img/ui/game/gameinterface_icon_1.png";
            Laya.timer.once(500, this, function () {
                _this.imageHand.skin = "resource/assets/img/ui/game/gameinterface_icon_2.png";
                Laya.timer.once(500, _this, _this.handAni);
            });
        };
        GameViewCap.prototype.initViewInfo = function () {
            this.imageHand.visible = false;
            this._bHanderAniShow = false;
            this._bLevelOver = false;
        };
        GameViewCap.prototype.startimageBtTipAni = function () {
            if (!this._bIsRunning) {
                return;
            }
            Laya.timer.clearAll(this.imageBtTip);
            AnimationMgr.instance.zoomTweena(this.imageBtTip, this.imageBtTip);
        };
        GameViewCap.prototype.initPlView = function () {
            if (DeviceUtil.isTTMiniGame()) {
                this.imageTTVideo.visible = true;
            }
        };
        GameViewCap.prototype.startVideoImage = function () {
            this.imageTTVideo.skin = "resource/assets/img/common/gaming_icon_4.png";
        };
        GameViewCap.prototype.stopVideoImage = function () {
            console.log("stopVideoImage");
            this.imageTTVideo.skin = "resource/assets/img/common/gaming_icon_5.png";
        };
        GameViewCap.prototype.createGameOverEffect = function () {
            var stage = Laya.stage;
            this.background = new Laya.Image;
            this.background.skin = "resource/assets/img/common/hm.png";
            this.background.centerX = this.background.centerY = 0;
            this.background.width = stage.width;
            this.background.height = stage.height;
            this.addChild(this.background);
            this.imgText = new Laya.Image;
            this.imgText.centerX = 0;
            this.imgText.y = Laya.stage.height * 0.30 + this.imgText.height / 2;
            this.background.addChild(this.imgText);
            this.setChildIndex(this.background, 0);
            this.background.visible = this.imgText.visible = false;
        };
        GameViewCap.prototype.showGameOverEffect = function (strPath) {
            var cur = PlayerDataMgr.getInstance().stPlayerDataBase.nCurLevel + 1;
            var strCur = cur >= 10 ? String(cur) : "0" + cur;
            this.imgText.skin = 'resource/assets/img/choose/' + strCur + "/" + strPath + '.png';
            this.background.visible = this.imgText.visible = true;
            this.background.alpha = this.imgText.alpha = 0;
            var callFun = Laya.Handler.create(this, function () {
                Laya.Tween.to(this.imgText, { alpha: 1 }, 1400);
            });
            Laya.Tween.to(this.background, { alpha: 1 }, 1400, null, callFun);
        };
        GameViewCap.prototype.hideGameOverEffect = function () {
            if (this.background && this.imgText)
                this.background.visible = this.imgText.visible = false;
        };
        return GameViewCap;
    }(PopBaseScene));

    var MoreGameView = (function (_super) {
        __extends(MoreGameView, _super);
        function MoreGameView() {
            var _this = _super.call(this) || this;
            _this.className_key = "MoreGameView";
            _this.ITEM_H = 200;
            _this.isAuto = true;
            _this.dataArr = [{ t: 0 }, { t: 1 }, { t: 2 }, { t: 3 }];
            _this.speed = 2;
            _this.dir = -1;
            _this.skin = "game/uiView/wecat/MoreGameView.json";
            return _this;
        }
        MoreGameView.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        MoreGameView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        MoreGameView.prototype.onAddStage = function () {
            this.initView();
            this.addEvent();
            ViewChangeMgr.getInstance().commonView.visible = false;
            MiniGameMgr.instance.hideBannerAd();
            MiniGameMgr.instance._bFlagSpecialView = false;
            ViewChangeMgr.getInstance().hideImageExitTemp();
        };
        MoreGameView.prototype.onRemoved = function () {
            this.removeEvent();
            this.stPanel.removeChildren();
            Laya.timer.clearAll(this);
            ViewChangeMgr.getInstance().showImageExitTemp();
        };
        MoreGameView.prototype.addEvent = function () {
            this.stPanel.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            this.stPanel.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            this.stPanel.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.image_back.on(Laya.Event.CLICK, this, this.onBack);
        };
        MoreGameView.prototype.removeEvent = function () {
            this.stPanel.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            this.stPanel.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            this.stPanel.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseUp);
            this.image_back.off(Laya.Event.CLICK, this, this.onBack);
        };
        MoreGameView.prototype.onBack = function () {
            if (!MoreGameView.bSpeical) {
                if (MoreGameView.bSuccess) {
                    if (DeviceUtil.isVIVOMiniGame()) {
                        ViewManager.getInstance().showView(SuccessfulEntryThreeVivoView);
                    }
                    else {
                        ViewManager.getInstance().showView(SuccessfulEntryThreeView);
                    }
                }
                else {
                    if (DeviceUtil.isVIVOMiniGame()) {
                        ViewManager.getInstance().showView(FailEntryTwoVivoView);
                    }
                    else {
                        ViewManager.getInstance().showView(FailEntryErView);
                    }
                }
                MoreGameView.bSuccess = false;
            }
            if (!MoreGameView.bSpeical) {
                ViewChangeMgr.getInstance().commonView.visible = true;
            }
            this.removeSelf();
            MiniGameMgr.instance._bFlagSpecialView = true;
            MoreGameView.bSpeical = false;
        };
        MoreGameView.prototype.mouseDown = function (e) {
            this.isAuto = false;
            this.stx = e.stageX;
            this.sty = e.stageY;
        };
        MoreGameView.prototype.mouseMove = function (e) {
            var dy = e.stageY - this.sty;
            for (var i = 0; i < this.stPanel.numChildren; i++) {
                var item = this.stPanel.getChildAt(i);
                item.y += dy;
            }
            this.sty = e.stageY;
            this.dir = dy > 0 ? 1 : -1;
            this.refresh();
        };
        MoreGameView.prototype.mouseUp = function (e) {
            this.isAuto = true;
            this.dir = -1;
        };
        MoreGameView.prototype.initView = function () {
            Laya.timer.frameLoop(1, this, this.updata);
            var canuseHeight = Laya.stage.height - 280;
            this.maxCount = Math.ceil(canuseHeight / this.ITEM_H);
            this.dataArr = GDataMgr.getInstance().weCatMoreInfo;
            console.log(GDataMgr.getInstance().weCatMoreInfo);
            var didnex = 0;
            for (var i = 0; i < this.maxCount + 1; i++) {
                var item = new MoreGameItemView();
                item.index = didnex;
                item.setData(this.dataArr[item.index]);
                didnex++;
                if (didnex >= this.dataArr.length) {
                    didnex = 0;
                }
                item.y = i * this.ITEM_H;
                this.stPanel.addChild(item);
            }
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.refreshGameList();
            }
        };
        MoreGameView.prototype.getUpIndexforCurIndex = function (index) {
            if (index >= this.dataArr.length || index < 0)
                return 0;
            return index - 1 >= 0 ? index - 1 : this.dataArr.length - 1;
        };
        MoreGameView.prototype.getDownIndexforCurIndex = function (index) {
            if (index >= this.dataArr.length || index < 0)
                return 0;
            return index + 1 < this.dataArr.length ? index + 1 : 0;
        };
        MoreGameView.prototype.updata = function (dt) {
            if (!this.isAuto)
                return;
            for (var i = 0; i < this.stPanel.numChildren; i++) {
                var item = this.stPanel.getChildAt(i);
                item.y += this.speed * this.dir;
            }
            this.refresh();
        };
        MoreGameView.prototype.refresh = function () {
            var startItem;
            var lastItem;
            startItem = this.stPanel.getChildAt(0);
            lastItem = this.stPanel.getChildAt(this.maxCount);
            if (this.dir == -1) {
                if (startItem.y < -this.ITEM_H) {
                    startItem.y = lastItem.y + lastItem.height;
                    startItem.zOrder = lastItem.zOrder + 1;
                    startItem.index = this.getDownIndexforCurIndex(lastItem.index);
                    startItem.refreshData(this.dataArr[startItem.index]);
                    console.log('idnex-=======>', startItem.index);
                }
            }
            else {
                if (lastItem.y > this.maxCount * this.ITEM_H) {
                    lastItem.y = startItem.y - startItem.height;
                    lastItem.zOrder = startItem.zOrder - 1;
                    lastItem.index = this.getUpIndexforCurIndex(startItem.index);
                    lastItem.refreshData(this.dataArr[lastItem.index]);
                }
            }
        };
        MoreGameView.bSuccess = false;
        MoreGameView.bSpeical = false;
        return MoreGameView;
    }(BaseSceneUISkinPopView));

    var FailEntryTwoOppoView = (function (_super) {
        __extends(FailEntryTwoOppoView, _super);
        function FailEntryTwoOppoView() {
            var _this = _super.call(this) || this;
            _this.className_key = "FailEntryTwoOppoView";
            _this.skin = "game/uiView/settlement/FailEntryTwoOppoView.json";
            return _this;
        }
        FailEntryTwoOppoView.prototype.initMiniGame = function () {
        };
        FailEntryTwoOppoView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            MiniGameMgr.instance.hideBlockAD();
            this.removeEvent();
            this._bRecvAward = false;
            Laya.timer.clearAll(this);
        };
        FailEntryTwoOppoView.prototype.onClick = function (evt) {
            switch (evt.currentTarget) {
                case this.btnAgain:
                    this.failEntryErReStartGame();
                    break;
                case this.btnHome:
                    this.returnToHome();
                    break;
                case this.btnGet:
                    this.onWatchVideoReceiveAward();
                    break;
            }
        };
        FailEntryTwoOppoView.prototype.addEvent = function () {
            this.registerEvent(this.btnAgain, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnHome, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnGet, Laya.Event.CLICK, this.onClick, this);
        };
        FailEntryTwoOppoView.prototype.showNativeAd = function () {
            return __awaiter(this, void 0, void 0, function () {
                var nativeAdData, data, text;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
                            this.box_ad.removeChildren();
                            return [4, MiniGameMgr.instance.createOppoNatvieAd({ index: 0, className_key: this.className_key })];
                        case 1:
                            nativeAdData = _a.sent();
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                            this.btn_chakan.visible = false;
                            this.btnGet.left = 320;
                            if (nativeAdData) {
                                this.btn_chakan.visible = true;
                                console.log("原生广告数据", nativeAdData);
                                data = nativeAdData;
                                this.btn_chakan.right = 65;
                                this.btnGet.left = 65;
                                text = this.txt_chakan;
                                if (text) {
                                    text.text = '查看广告';
                                }
                                this.btn_chakan.on(Laya.Event.CLICK, this, this.onRerort, [data]);
                                this.box_ad.on(Laya.Event.CLICK, this, this.onRerort, [data]);
                                this.initNativeBanner(nativeAdData);
                            }
                            else {
                                this.showBanner({ className_key: this.className_key });
                            }
                            return [2];
                    }
                });
            });
        };
        FailEntryTwoOppoView.prototype.initNativeBanner = function (data) {
            this.nativeData = data;
            this.box_ad.removeChildren();
            var ad = data.adList[0];
            var icon_bg = new Laya.Image;
            icon_bg.size(this.box_ad.width, this.box_ad.height);
            icon_bg.skin = ad.imgUrlList[0];
            this.box_ad.addChild(icon_bg);
            var icon_flg = new Laya.Image();
            icon_flg.skin = ad.logoUrl;
            icon_flg.top = icon_flg.right = 0;
            icon_bg.addChild(icon_flg);
            if (data.nativeAd) {
                data.nativeAd.reportAdShow({ adId: ad.adId });
            }
        };
        FailEntryTwoOppoView.prototype.onRerort = function (data, evt) {
            if (data.nativeAd) {
                data.nativeAd.reportAdClick({ adId: data.adList[0].adId });
            }
            var text = this.txt_chakan;
            if (text) {
                text.text = '查看广告';
            }
        };
        FailEntryTwoOppoView.prototype.removeEvent = function () {
            this.btn_chakan.off(Laya.Event.CLICK, this, this.onRerort);
            this.box_ad.off(Laya.Event.CLICK, this, this.onRerort);
            _super.prototype.removeEvent.call(this);
        };
        FailEntryTwoOppoView.prototype.failEntryErReStartGame = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            if (GameManager.instance.restartGame()) {
                MiniGameMgr.instance._bFlagSpecialView = true;
                this.removeSelf();
            }
        };
        FailEntryTwoOppoView.prototype.returnToHome = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_GH;
            ViewChangeMgr.getInstance().CurLevelBasea.returnToHome();
            MiniGameMgr.instance._bFlagSpecialView = true;
            this.removeSelf();
        };
        FailEntryTwoOppoView.prototype.removeSelf = function () {
            this.box_ad.removeChildren();
            return _super.prototype.removeSelf.call(this);
        };
        FailEntryTwoOppoView.prototype.initView = function () {
            MiniGameMgr.instance._onShareVideoSuccess = false;
            this.resetData();
            ViewChangeMgr.getInstance().commonView.addBtEvent();
            this.showNativeAd();
        };
        FailEntryTwoOppoView.prototype.resetData = function () {
            this._bRecvAward = false;
            AddPowerView._bCloseBinner = false;
            var objData = ConfigMgr.getInstance().getGCDBID(7);
            if (objData) {
                this._nGlodAddByWathcVideo = parseInt(objData.strValue);
            }
            this.sptext.text = this._nGlodAddByWathcVideo.toString();
        };
        FailEntryTwoOppoView.prototype.onWatchVideoReceiveAward = function () {
            var _this = this;
            console.log("onWatchVideoRecvAward = ", this._bRecvAward);
            if (this._bRecvAward) {
                TipsManager.getInstance().showDefaultTips("已经领过奖励了哦");
                return;
            }
            MiniGameMgr.instance.playVideoAd({
                successFun: function () {
                    _this._bRecvAward = true;
                    _this.addGlod();
                }
            });
        };
        FailEntryTwoOppoView.prototype.addGlod = function () {
            this._bRecvAward = true;
            console.log("addGlodReal = ", this._bRecvAward);
            PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, this._nGlodAddByWathcVideo);
            this.flyGlodRecv();
        };
        FailEntryTwoOppoView.prototype.flyGlodRecv = function () {
            console.log("flayGlodRecv");
            var point = new Laya.Point();
            point.x = this.imageGoods.x;
            point.y = this.imageGoods.y;
            var parent = this.imageGoods.parent;
            point = parent.localToGlobal(point);
            AnimationMgr.instance.flayGloda(point.x, point.y, 341, 105);
        };
        FailEntryTwoOppoView.prototype.startFailImageBtShareAni = function () {
            Laya.timer.clearAll(this.btnGet);
            AnimationMgr.instance.zoomTweena(this.btnGet, this.btnGet);
        };
        return FailEntryTwoOppoView;
    }(PopBaseScene));

    var FailEntryYiView = (function (_super) {
        __extends(FailEntryYiView, _super);
        function FailEntryYiView() {
            var _this = _super.call(this) || this;
            _this.className_key = "FailEntryOneView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this.nBtNextLevel = 360;
            _this.nBtNextLevelSp = 100;
            _this._nGlodCost = 200;
            _this.skin = "game/uiView/settlement/FailEntryOneView.json";
            return _this;
        }
        FailEntryYiView.prototype.initView = function () {
            this.initPl();
            this.refreshTextDelay();
            this.refreshReLiveByGlod();
            this.btnSign.getComponent(CustemButton).playScaleAnim();
            this.initMiniGame();
            this.initSke();
        };
        FailEntryYiView.prototype.initSke = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this._aniReal) return [3, 2];
                            _a = this;
                            return [4, this.createSke("resource/assets/img/ani/failure/shibai.sk")];
                        case 1:
                            _a._aniReal = _b.sent();
                            return [3, 3];
                        case 2:
                            this._aniReal.play(0, true);
                            this.boxAnim.addChild(this._aniReal);
                            _b.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        FailEntryYiView.prototype.initMiniGame = function () {
            if (DeviceUtil.isWXMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) ;
        };
        FailEntryYiView.prototype.addEvent = function () {
            this.registerEvent(this.btnPay, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnSign, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnExit, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnHome, Laya.Event.CLICK, this.onClick, this);
        };
        FailEntryYiView.prototype.onClick = function (evt) {
            switch (evt.currentTarget) {
                case this.btnPay:
                    this.reliveByCostGlod();
                    break;
                case this.btnSign:
                    this.reliveByWatchVideo();
                    break;
                case this.btnExit:
                    this.onCancel();
                    break;
                case this.btnHome:
                    this.onBack();
                    break;
            }
        };
        FailEntryYiView.prototype.reliveByWatchVideo = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            var self = this;
            if (ViewChangeMgr.getInstance().CurLevelBasea) {
                ViewChangeMgr.getInstance().CurLevelBasea.hideLevel();
            }
            MiniGameMgr.instance.playVideoAd({
                gameConstKey: 'FailEntryOneView',
                successFun: function () {
                    Laya.timer.once(100, self, function () {
                        self.onFailAndRestGame();
                        self.showLevel();
                    });
                    console.log("onFailRestartGame xxx");
                },
                failFun: function () {
                    self.showLevel();
                },
                errorFun: function () {
                    self.showLevel();
                }
            });
        };
        FailEntryYiView.prototype.showLevel = function () {
            if (ViewChangeMgr.getInstance().CurLevelBasea) {
                ViewChangeMgr.getInstance().CurLevelBasea.showLevel();
            }
        };
        FailEntryYiView.prototype.reliveByCostGlod = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            var blnGold = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_G, this._nGlodCost);
            if (!blnGold) {
                return;
            }
            PlayerDataMgr.getInstance().subProp(PType.e_GType_G, this._nGlodCost);
            this.onFailAndRestGame();
        };
        FailEntryYiView.prototype.onBack = function () {
            if (DeviceUtil.isWXMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
                MoreGameRandomGameBox713.bOperFlag = true;
                MoreGameRandomGameBox713.bSuccess = false;
                ViewManager.getInstance().showView(MoreGameRandomGameBox713);
            }
            MiniGameMgr.instance._bFlagSpecialView = true;
            this.removeSelf();
        };
        FailEntryYiView.prototype.onFailAndRestGame = function () {
            if (DeviceUtil.isTTMiniGame()) {
                MiniGameMgr.instance.hideBannerAd();
            }
            ViewChangeMgr.getInstance().restartGame(false);
            MiniGameMgr.instance._bFlagSpecialView = true;
            this.removeSelf();
        };
        FailEntryYiView.prototype.refreshReLiveByGlod = function () {
            var stGameConfig = ConfigMgr.getInstance().getGCDBID(6);
            if (stGameConfig) {
                this._nGlodCost = parseInt(stGameConfig.strValue);
            }
            var blnGold = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_G, this._nGlodCost);
            if (!blnGold) {
                console.log('aa->xxx');
                this.btnPay.visible = false;
                this.btnSign.centerX = 0;
                return;
            }
            this.btnPay.visible = true;
            this.btnSign.centerX = -252;
            BitmapLabelUtils.setLabel(this.spCount, this._nGlodCost + '', "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        };
        FailEntryYiView.prototype.refreshTextDelay = function () {
            var _this = this;
            if (DeviceUtil.isQQMiniGame()) {
                if (BaseConst.infos.gameInfo.openPsAward == 1 && BaseConst.infos.gameInfo.for_pay == 1) {
                    this.btnExit.bottom = this.nBtNextLevelSp;
                    MiniGameMgr.instance._bFlagSpecialView = false;
                    MiniGameMgr.instance.hideBannerAd();
                    return;
                }
                else {
                    this.btnExit.bottom = this.nBtNextLevel;
                }
                return;
            }
            if (!ConfigMgr.getInstance().isWeCatMiniGame()) {
                this.btnExit.visible = false;
                var time = 3000;
                if (DeviceUtil.isOPPOMiniGame()) {
                    time = 0;
                }
                Laya.timer.once(time, this, function () {
                    _this.btnExit.visible = true;
                });
            }
        };
        FailEntryYiView.prototype.createSke = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                AnimationMgr.instance.showSkeAnimation(url, function (boomAnimation) {
                    boomAnimation.player.playbackRate = 1;
                    boomAnimation.autoSize = true;
                    boomAnimation.scale(1, 1);
                    boomAnimation.play(0, true);
                    boomAnimation.x = boomAnimation.width;
                    boomAnimation.y = boomAnimation.height + 70;
                    _this.boxAnim.addChild(boomAnimation);
                    resolve(boomAnimation);
                }, 1);
            });
        };
        FailEntryYiView.prototype.onCancel = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            MiniGameMgr.instance._bFlagSpecialView = true;
            if (ConfigMgr.getInstance().isWeCatMiniGame() && BaseConst.infos.gameInfo.openPsAward == 1) {
                if (PlayerDataMgr.getInstance().checkIsSpecial() && BaseConst.infos.gameInfo.MoreGameView == 1) {
                    MoreGameView.bSuccess = false;
                    ViewManager.getInstance().showView(MoreGameView);
                }
                else {
                    MoreGameRandomGameBox713Temp.bSuccess = false;
                    ViewManager.getInstance().showView(MoreGameRandomGameBox713Temp);
                }
            }
            else {
                if (DeviceUtil.isVIVOMiniGame()) {
                    ViewManager.getInstance().showView(FailEntryTwoVivoView);
                }
                else if (DeviceUtil.isOPPOMiniGame()) {
                    ViewManager.getInstance().showView(FailEntryTwoOppoView);
                }
                else {
                    ViewManager.getInstance().showView(FailEntryErView);
                }
            }
            this.removeSelf();
        };
        FailEntryYiView.prototype.removeEvent = function () {
            _super.prototype.removeEvent.call(this);
        };
        FailEntryYiView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            if (this._aniReal) {
                this._aniReal.stop();
                this._aniReal.removeSelf();
            }
            if (!DeviceUtil.isVIVOMiniGame()) {
                this.hideBanner();
            }
        };
        FailEntryYiView.prototype.initPl = function () {
            var _this = this;
            if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                this.box_wecat.removeChildren();
                this.box_wecat.addChild(ViewChangeMgr.getInstance().showMoreGameinView(true));
                this.boxAnim.visible = false;
                this.box_wecat.visible = true;
                if (BaseConst.infos.gameInfo.openPsAward == 1 && BaseConst.infos.gameInfo.for_pay == 1) {
                    this.btnExit.bottom = this.nBtNextLevelSp;
                    MiniGameMgr.instance._bFlagSpecialView = false;
                    MiniGameMgr.instance.hideBannerAd();
                    Laya.timer.once(1000, this, function () {
                        MiniGameMgr.instance._bFlagSpecialView = true;
                        MiniGameMgr.instance.showBanner({});
                        Laya.Tween.to(_this.btnExit, { bottom: _this.nBtNextLevel }, 500, null);
                    });
                    return;
                }
                else {
                    this.btnExit.bottom = this.nBtNextLevel;
                }
            }
            else {
                if (DeviceUtil.isVIVOMiniGame()) {
                    MiniGameMgr.instance.showInsertAd({});
                    this.showBanner({ className_key: this.className_key });
                }
                else if (DeviceUtil.isQQMiniGame()) ;
                else {
                    this.showBanner({ className_key: this.className_key });
                }
            }
        };
        return FailEntryYiView;
    }(PopBaseScene));

    var ShareRecordVideoView = (function (_super) {
        __extends(ShareRecordVideoView, _super);
        function ShareRecordVideoView(data) {
            var _this = _super.call(this, data) || this;
            _this.className_key = "ShareRecordVideoView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK_MORE;
            _this._nGlodCount = 2;
            _this.skin = "game/uiView/pop/ShareRecordVideoSkinView.json";
            return _this;
        }
        ShareRecordVideoView.prototype.initView = function () {
            var _this = this;
            console.log("ShareRecordVideoView data ->", this.viewData_);
            ViewChangeMgr.getInstance().commonView.removeBtEvent();
            this.btnCancel.visible = false;
            this.imgTitle.skin = "resource/assets/img/ui/addsp/power_icon_1.png";
            BitmapLabelUtils.setLabel(this.goldCount, this._nGlodCount.toString(), "resource/assets/img/ui/addsp/power_number1/sign_number1_", 0, ".png", "left");
            Laya.timer.once(2000, this, function () {
                _this.btnCancel.visible = true;
            });
            this.showBanner({ className_key: this.className_key });
        };
        ShareRecordVideoView.prototype.addEvent = function () {
            this.registerEvent(this.btnShareVideo, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnCancel, Laya.Event.CLICK, this.onClick, this);
        };
        ShareRecordVideoView.prototype.removeEvent = function () {
            _super.prototype.removeEvent.call(this);
        };
        ShareRecordVideoView.prototype.onClick = function (evt) {
            switch (evt.currentTarget) {
                case this.btnShareVideo:
                    this.shareVideo();
                    break;
                case this.btnCancel:
                    this.removeUs();
                    break;
            }
        };
        ShareRecordVideoView.prototype.shareVideo = function () {
            var _this = this;
            if (DeviceUtil.isTTMiniGame()) {
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
                var data = platform.getSystemInfoSync();
                if (data.appName.toUpperCase() == 'DOUYIN') {
                    MiniGameMgr.instance.flagDouYin = true;
                    MiniGameMgr.instance.shareAppMsg({
                        sucFun: function () {
                            console.log("发布录制视频成功");
                            TipsManager.getInstance().showDefaultTips('分享成功');
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                            if (MiniGameMgr.instance._onShareVideoSuccess) {
                                return;
                            }
                            PlayerDataMgr.getInstance().AddProp(PType.e_GType_Sp, _this._nGlodCount);
                            _this.removeUs();
                        },
                        failFun: function () {
                            console.log("发布录制视频失败");
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                            TipsManager.getInstance().showDefaultTips('分享失败');
                        }
                    });
                }
                else {
                    MiniGameMgr.instance.shareGameRecordVideo({
                        successFun: function () {
                            PlayerDataMgr.getInstance().AddProp(PType.e_GType_Sp, _this._nGlodCount);
                            _this.removeUs();
                        }, failFun: function () {
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                        }, errorFun: function () {
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                        }
                    });
                }
            }
            else {
                MiniGameMgr.instance.shareAppMsg();
            }
        };
        ShareRecordVideoView.prototype.removeUs = function () {
            _super.prototype.removeUs.call(this);
        };
        ShareRecordVideoView.prototype.onRemoved = function () {
            ViewChangeMgr.getInstance().commonView.addBtEvent();
            if (BaseConst.infos.gameInfo.openPsAward == 1 && ConfigMgr.getInstance().getTBCL() == 1
                && BaseConst.infos.gameInfo.for_pay == 1) {
                ViewManager.getInstance().showView(SuccessfulEntryOneView);
            }
            else {
                if (DeviceUtil.isVIVOMiniGame()) {
                    ViewManager.getInstance().showView(SuccessfulEntryThreeVivoView);
                }
                else {
                    ViewManager.getInstance().showView(SuccessfulEntryThreeView);
                }
            }
            this.removeEvent();
        };
        return ShareRecordVideoView;
    }(PopBaseScene));

    var SuccessfulEntryThreeOppoView = (function (_super) {
        __extends(SuccessfulEntryThreeOppoView, _super);
        function SuccessfulEntryThreeOppoView() {
            var _this = _super.call(this) || this;
            _this.className_key = "SuccessfulEntryThreeOppoView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this._isShowBox = false;
            _this._nGlodAdd = 50;
            _this._nGlodRadio = 4;
            _this._bRecvAward = false;
            _this.skin = 'game/uiView/settlement/SuccessfulEntryThreeOppoView.json';
            return _this;
        }
        SuccessfulEntryThreeOppoView.prototype.initMiniGame = function () {
            AddPowerView._bCloseBinner = false;
            ViewChangeMgr.getInstance().commonView.addBtEvent();
            this._isShowBox = false;
            if (!this.aniReal) {
                this.createSke("resource/assets/img/ani/celebrate/celebrate.sk");
            }
            else {
                this.aniReal.play(0, false);
                this.grp_center.addChild(this.aniReal);
            }
            if (!this.aniRealNanZhu) {
                this.createSkeletonNanZhu("resource/assets/img/ani/celebrate/chenggong.sk");
            }
            else {
                this.aniRealNanZhu.play(0, true);
                this.boxAnim.addChild(this.aniRealNanZhu);
            }
            MiniGameMgr.instance.showInsertAd({});
        };
        SuccessfulEntryThreeOppoView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            Laya.timer.clearAll(this);
            if (this.aniReal) {
                this.aniReal.stop();
                this.aniReal.removeSelf();
            }
            if (this.aniRealNanZhu) {
                this.aniRealNanZhu.stop();
                this.aniRealNanZhu.removeSelf();
            }
        };
        SuccessfulEntryThreeOppoView.prototype.initView = function () {
            MiniGameMgr.instance._onShareVideoSuccess = false;
            SoundMgr.getInstance().playEffect("win", 1);
            this._bRecvAward = false;
            this.initTextLable();
            this.showNativeAd();
        };
        SuccessfulEntryThreeOppoView.prototype.showNativeAd = function () {
            return __awaiter(this, void 0, void 0, function () {
                var nativeAdData, data, text;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
                            this.box_ad.removeChildren();
                            return [4, MiniGameMgr.instance.createOppoNatvieAd({ index: 0, className_key: this.className_key })];
                        case 1:
                            nativeAdData = _a.sent();
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                            this.btn_chakan.visible = false;
                            this.imgMask.left = 360;
                            if (nativeAdData) {
                                this.btn_chakan.visible = true;
                                console.log("原生广告数据", nativeAdData);
                                data = nativeAdData;
                                this.btn_chakan.right = 160;
                                this.imgMask.left = 160;
                                text = this.txt_chakan;
                                this.hideBanner();
                                if (text) {
                                    text.text = '查看广告';
                                }
                                this.btn_chakan.on(Laya.Event.CLICK, this, this.onRerort, [data]);
                                this.box_ad.on(Laya.Event.CLICK, this, this.onRerort, [data]);
                                this.initNativeBanner(nativeAdData);
                            }
                            else {
                                this.showBanner({ className_key: this.className_key });
                            }
                            return [2];
                    }
                });
            });
        };
        SuccessfulEntryThreeOppoView.prototype.initNativeBanner = function (data) {
            this.nativeData = data;
            this.box_ad.removeChildren();
            var ad = data.adList[0];
            var icon_bg = new Laya.Image;
            icon_bg.size(this.box_ad.width, this.box_ad.height);
            icon_bg.skin = ad.imgUrlList[0];
            this.box_ad.addChild(icon_bg);
            var icon_flg = new Laya.Image();
            icon_flg.skin = ad.logoUrl;
            icon_flg.top = icon_flg.right = 0;
            icon_bg.addChild(icon_flg);
            if (data.nativeAd) {
                data.nativeAd.reportAdShow({ adId: ad.adId });
            }
        };
        SuccessfulEntryThreeOppoView.prototype.onRerort = function (data, evt) {
            if (data.nativeAd) {
                data.nativeAd.reportAdClick({ adId: data.adList[0].adId });
            }
            var text = this.txt_chakan;
            if (text) {
                text.text = '查看广告';
            }
        };
        SuccessfulEntryThreeOppoView.prototype.initTextLable = function () {
            var objConfig = ConfigMgr.getInstance().getGCDBID(12);
            if (objConfig) {
                this._nGlodAdd = parseInt(objConfig.strValue);
            }
            objConfig = ConfigMgr.getInstance().getGCDBID(13);
            var nCost = 1;
            objConfig = ConfigMgr.getInstance().getGCDBID(8);
            if (objConfig) {
                nCost = parseInt(objConfig.strValue);
            }
            BitmapLabelUtils.setLabel(this.sprCostPs, nCost.toString(), "resource/assets/img/common/level_number1/level_number1_", 0, ".png", "left");
            var bAddMore = this._nGlodAdd * this._nGlodRadio;
            BitmapLabelUtils.setLabel(this.sprGold, this._nGlodAdd.toString(), "resource/assets/img/ui/success/succeed_number1/succeed_number1_", 0, ".png", "left");
        };
        SuccessfulEntryThreeOppoView.prototype.onClick = function (evt) {
            switch (evt.currentTarget) {
                case this.btnLab:
                    this.sucfulEntryThreeNextLevel();
                    break;
                case this.btnHome:
                    this.returnToHome();
                    break;
                case this.imgMask:
                    this.sucRecvAward();
                    break;
                case this.btn_recieve:
                    this.sucRecvAward(true);
                    break;
            }
        };
        SuccessfulEntryThreeOppoView.prototype.addEvent = function () {
            this.registerEvent(this.btnLab, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnHome, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnAgain, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.imgMask, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btn_recieve, Laya.Event.CLICK, this.onClick, this);
            this.registerEvent(this.btnNextLevel, Laya.Event.CLICK, this.onClick, this);
        };
        SuccessfulEntryThreeOppoView.prototype.removeEvent = function () {
            this.btn_chakan.off(Laya.Event.CLICK, this, this.onRerort);
            this.box_ad.off(Laya.Event.CLICK, this, this.onRerort);
            _super.prototype.removeEvent.call(this);
        };
        SuccessfulEntryThreeOppoView.prototype.sucShareGame = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            MiniGameMgr.instance.shareAppMsg();
        };
        SuccessfulEntryThreeOppoView.prototype.sucRecvAward = function (isDouble) {
            var _this = this;
            if (isDouble === void 0) { isDouble = false; }
            SoundMgr.getInstance().playEffect("button", 1);
            if (this._bRecvAward) {
                this.sucfulEntryThreeNextLevel();
                return;
            }
            if (isDouble) {
                MiniGameMgr.instance.playVideoAd({
                    gameConstKey: "SuccessfulEntryThreeOppoView",
                    successFun: function () {
                        _this.sendAwardAfterWatchVideoAd();
                    }
                });
            }
            else {
                this._nGlodRadio = 1;
                this.sendAwardAfterWatchVideoAd();
            }
        };
        SuccessfulEntryThreeOppoView.prototype.sendAwardAfterWatchVideoAd = function () {
            this._bRecvAward = true;
            this.flayGlodSuccess();
            var numAdd = this._nGlodAdd * this._nGlodRadio;
            PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, numAdd);
            this.sucfulEntryThreeNextLevel();
        };
        SuccessfulEntryThreeOppoView.prototype.sucfulEntryThreeNextLevel = function () {
            var numCost = 1;
            var objData = ConfigMgr.getInstance().getGCDBID(8);
            if (objData) {
                numCost = parseInt(objData.strValue);
            }
            var bln = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, numCost);
            if (!bln) {
                GameManager.instance.onPowerNotEnough();
                return;
            }
            else {
                this.removeEvent();
                PlayerDataMgr.getInstance().subProp(PType.e_GType_Sp, numCost);
                if (PlayerDataMgr.getInstance().stPlayerDataBase.nCurLevel >= PlayerDataMgr.getInstance().nMaxLevelCount - 1
                    && DeviceUtil.isQQMiniGame()) {
                    TipsManager.getInstance().showDefaultTips("明日更新关卡，明天再来吧！");
                    PlayerDataMgr.getInstance().isMaxLevel();
                    this.returnToHome();
                }
                else {
                    ViewChangeMgr.getInstance().goToNextLevel();
                    MiniGameMgr.instance._bFlagSpecialView = true;
                    this.removeSelf();
                }
            }
        };
        SuccessfulEntryThreeOppoView.prototype.returnToHome = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            GameManager.instance.backHome();
            MiniGameMgr.instance._bFlagSpecialView = true;
            this.removeSelf();
        };
        SuccessfulEntryThreeOppoView.prototype.flayGlodSuccess = function () {
            var point = new Laya.Point();
            point.x = this.imgGoodsTypeUp.x;
            point.y = this.imgGoodsTypeUp.y;
            var parent = this.imgGoodsTypeUp.parent;
            point = parent.localToGlobal(point);
            AnimationMgr.instance.flayGloda(point.x, point.y, 341, 105);
        };
        SuccessfulEntryThreeOppoView.prototype.createSke = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                AnimationMgr.instance.showSkeAnimation(url, function (boomAnimation) {
                    boomAnimation.player.playbackRate = 1;
                    boomAnimation.autoSize = true;
                    boomAnimation.scale(1, 1);
                    boomAnimation.play(0, false);
                    boomAnimation.x = _this.grp_center.width / 2;
                    boomAnimation.y = _this.grp_center.height / 2;
                    _this.grp_center.addChild(boomAnimation);
                    _this.aniReal = boomAnimation;
                    resolve(boomAnimation);
                }, 1);
            });
        };
        SuccessfulEntryThreeOppoView.prototype.createSkeletonNanZhu = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                AnimationMgr.instance.showSkeAnimation(url, function (boomAnimation) {
                    boomAnimation.player.playbackRate = 1;
                    boomAnimation.autoSize = true;
                    boomAnimation.scale(1, 1);
                    boomAnimation.play(0, true);
                    boomAnimation.x = 250;
                    boomAnimation.y = 400 + 80;
                    _this.boxAnim.addChild(boomAnimation);
                    _this.aniRealNanZhu = boomAnimation;
                    resolve(boomAnimation);
                }, 1);
            });
        };
        return SuccessfulEntryThreeOppoView;
    }(PopBaseScene));

    var SuccessfulEntryOneOppoView = (function (_super) {
        __extends(SuccessfulEntryOneOppoView, _super);
        function SuccessfulEntryOneOppoView() {
            var _this = _super.call(this) || this;
            _this.className_key = "SuccessfulEntryOneOppoView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK;
            _this.yTemp = null;
            _this._nTimeDown = 5;
            _this._nCountMax = 5;
            _this._nPsAdd = 1;
            _this._nAddPerOne = 0;
            _this._nCurCount = 0;
            _this._bTimeOver = false;
            _this._bAniRunning = false;
            _this._bFirst = true;
            _this._nTimeOverTemp = 0;
            _this._nLastClickTime = 0;
            _this.skin = "game/uiView/settlement/SuccessfulEntryOneView.json";
            return _this;
        }
        SuccessfulEntryOneOppoView.prototype.initMiniGame = function () {
            MiniGameMgr.instance._bFlagSpecialView = false;
            MiniGameMgr.instance.showChaPinAd();
            this.btnGet.bottom = 300;
            this.btnGet.visible = true;
            this.showBanner({ className_key: this.className_key });
            ViewChangeMgr.getInstance().commonView.visible = false;
        };
        SuccessfulEntryOneOppoView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            Laya.timer.clearAll(this.imgIcon);
            this._bFirst = false;
            this._bAniRunning = false;
            Laya.Tween.clearAll(this.imgIcon);
            Laya.timer.clearAll(this);
            MiniGameMgr.instance._bFlagSpecialView = true;
        };
        SuccessfulEntryOneOppoView.prototype.initView = function () {
            SoundMgr.getInstance().playEffect("win", 1);
            this._nTimeDown = 5;
            this._nCountMax = 5;
            this._nPsAdd = 1;
            this._nAddPerOne = 0;
            this._nCurCount = 0;
            this._bTimeOver = false;
            this._bAniRunning = true;
            this._bFirst = true;
            this.btn_countinue.visible = false;
            this.initData();
            this._nAddPerOne = Math.floor(870 / this._nCountMax);
            this.imgValue.width = 0;
            this.openTimeDown();
            this.openHandAnimation();
        };
        SuccessfulEntryOneOppoView.prototype.initData = function () {
            var objData = ConfigMgr.getInstance().getGCDBID(9);
            if (objData) {
                this._nTimeDown = parseInt(objData.strValue);
            }
            BitmapLabelUtils.setLabel(this.sprTime, this._nTimeDown.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");
            objData = ConfigMgr.getInstance().getGCDBID(10);
            if (objData) {
                this._nCountMax = parseInt(objData.strValue);
            }
            objData = ConfigMgr.getInstance().getGCDBID(11);
            if (objData) {
                this._nPsAdd = parseInt(objData.strValue);
            }
            objData = ConfigMgr.getInstance().getGCDBID(14);
            if (objData) {
                this._nTimeOverTemp = parseInt(objData.strValue);
            }
        };
        SuccessfulEntryOneOppoView.prototype.addEvent = function () {
            this.registerEvent(this.btnGet, Laya.Event.CLICK, this.btnGetClickReceiveAward, this);
            this.registerEvent(this.btn_countinue, Laya.Event.CLICK, this.showSuccessView, this);
        };
        SuccessfulEntryOneOppoView.prototype.removeEvent = function () {
            _super.prototype.removeEvent.call(this);
        };
        SuccessfulEntryOneOppoView.prototype.btnGetClickReceiveAward = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            if (this._bTimeOver) {
                return;
            }
            this._nCurCount += 1;
            var numCur = this._nCurCount * this._nAddPerOne;
            this.imgValue.width = numCur;
            if (this._nCurCount >= this._nCountMax) {
                Laya.timer.clear(this, this.timeDown);
                this.procLogicOver();
            }
            this.checkClick();
        };
        SuccessfulEntryOneOppoView.prototype.checkClick = function () {
            this._nLastClickTime = GameLogicProcessMgr.GetCurTimea();
        };
        SuccessfulEntryOneOppoView.prototype.openTimeDown = function () {
            BitmapLabelUtils.setLabel(this.sprTime, this._nTimeDown.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");
            Laya.timer.loop(1000, this, this.timeDown);
            Laya.timer.loop(this._nTimeOverTemp, this, this.dealCount);
        };
        SuccessfulEntryOneOppoView.prototype.dealCount = function () {
            this._nCurCount -= 1;
            this._nCurCount = this._nCurCount < 0 ? 0 : this._nCurCount;
            var numCur = this._nCurCount * this._nAddPerOne;
            this.imgValue.width = numCur;
        };
        SuccessfulEntryOneOppoView.prototype.timeDown = function () {
            this._nTimeDown -= 1;
            var numTemp = this._nTimeDown;
            numTemp = numTemp < 0 ? 0 : numTemp;
            if (this._nTimeDown < 0) {
                this._bTimeOver = true;
                this.procLogicOver();
            }
            else {
                BitmapLabelUtils.setLabel(this.sprTime, this._nTimeDown.toString(), "resource/assets/img/ui/success/succeed_number2/succeed_number2_", 0, ".png", "center");
            }
        };
        SuccessfulEntryOneOppoView.prototype.procLogicOver = function () {
            var _this = this;
            Laya.timer.clear(this, this.timeDown);
            if (this._bTimeOver) {
                PlayerDataMgr.getInstance().showTips("领取失败");
            }
            else if (this._nCurCount >= this._nCountMax) {
                PlayerDataMgr.getInstance().AddProp(PType.e_GType_Sp, this._nPsAdd);
                PlayerDataMgr.getInstance().showTips("体力+" + this._nPsAdd.toString());
            }
            Laya.timer.clearAll(this);
            this.btnGet.visible = false;
            Laya.timer.once(1000, this, function () {
                _this.btn_countinue.visible = true;
            });
        };
        SuccessfulEntryOneOppoView.prototype.showSuccessView = function () {
            ViewManager.getInstance().showView(SuccessfulEntryThreeOppoView);
            ViewChangeMgr.getInstance().commonView.visible = true;
            this.removeSelf();
            MiniGameMgr.instance._bFlagSpecialView = true;
        };
        SuccessfulEntryOneOppoView.prototype.removeSelf = function () {
            if (this._moveBtnTween) {
                this._moveBtnTween.recover();
                this._moveBtnTween = null;
            }
            return _super.prototype.removeSelf.call(this);
        };
        SuccessfulEntryOneOppoView.prototype.openHandAnimation = function () {
            if (!this._bAniRunning) {
                return;
            }
            if (this.yTemp == null) {
                this.yTemp = this.imgIcon.y;
            }
            this.imgIcon.y = this.yTemp;
            AnimationMgr.instance.VTween(this.imgIcon, this.imgIcon, 2);
        };
        return SuccessfulEntryOneOppoView;
    }(PopBaseScene));

    var LevelBase = (function (_super) {
        __extends(LevelBase, _super);
        function LevelBase() {
            var _this = _super.call(this) || this;
            _this.className_key = "LevelScene";
            _this.isAniDestory = false;
            _this._index = 0;
            _this.isCreatePlayer = false;
            _this._showLabelObj = {};
            _this._showSoundObj = {};
            _this._aniArr = [];
            _this._localAniName = null;
            _this._localData = null;
            _this._isPop = false;
            _this.tempSoundChanels = {};
            return _this;
        }
        LevelBase.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        LevelBase.prototype.initView = function () {
            this.createLabelIcon();
            this.init();
        };
        LevelBase.prototype.setData = function (data) {
            this.viewData_ = data;
            this._mapData = data;
        };
        LevelBase.prototype.initPlayerStatus = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!this._mapData.player.status) return [3, 3];
                            _a = (!this._ani_player);
                            if (!_a) return [3, 2];
                            _b = this;
                            return [4, this.createSkeByUrl(this._mapData.player.url)];
                        case 1:
                            _a = (_b._ani_player = _c.sent());
                            _c.label = 2;
                        case 2:
                            if (!this._ani_player.parent && !this.box_player.getChildByName("ani_player")) {
                                this._ani_player.name = "ani_player";
                                this.box_player.addChild(this._ani_player);
                                this._ani_player.x = this._mapData.player.status.x;
                                this._ani_player.y = this._mapData.player.status.y;
                                this._ani_player.play(this._mapData.player.status.aniN, this._mapData.player.status.loop);
                            }
                            _c.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        LevelBase.prototype.init = function () {
            this.isReturbToHome = false;
            this._index = 0;
            this.box_player.x = (this._index) * 1080;
            this.box_game.x = (this._index) * -1080;
            this._showSoundObj = [];
            if (this.gameView) {
                this.gameView.removeSelf();
            }
            this.gameView = null;
            this.destroyAnimation();
            this.box_player.removeChildren();
            this.box_enb.removeChildren();
            ViewChangeMgr.getInstance().CurLevelBasea = this;
            this.refreshViewInLevel();
            this.isAniDestory = false;
        };
        LevelBase.prototype.playAnimationByName = function (aniName, callBack, isLoop, time) {
            var _this = this;
            if (isLoop === void 0) { isLoop = false; }
            if (time === void 0) { time = 1; }
            console.log("aniName>>>>>>>>>>>>", aniName, "curtime = ", GameLogicProcessMgr.GetCurTimea());
            this._localAniName = aniName;
            if (this._ani_player != null) {
                this._ani_player.visible = true;
                if (callBack) {
                    this._ani_player.player.off(Laya.Event.STOPPED, this, this.onPlayAniComplete);
                    this._ani_player.player.once(Laya.Event.STOPPED, this, this.onPlayAniComplete, [aniName, callBack, time]);
                }
                Laya.CallLater.I.callLater(this, function () {
                    _this._ani_player.play(aniName, isLoop, true);
                });
            }
            else {
                callBack && callBack(aniName);
            }
        };
        LevelBase.prototype.onPlayAniComplete = function (aniName, callBack, time) {
            console.log("onComplete aniName =", aniName, "curtime = ", GameLogicProcessMgr.GetCurTimea());
            if (time == 1) {
                callBack && callBack(aniName);
            }
            else {
                time--;
                this.playAnimationByName(aniName, callBack, false, time);
            }
        };
        LevelBase.prototype.createSkeByUrl = function (url) {
            var _this = this;
            console.log("创建龙骨动画-->" + url);
            return new Promise(function (resolve) {
                AnimationMgr.instance.showSkeAnimation(url, function (boomAnimation) {
                    boomAnimation.player.playbackRate = 1;
                    boomAnimation.autoSize = true;
                    boomAnimation.scale(1, 1);
                    _this._aniArr.push(boomAnimation);
                    resolve(boomAnimation);
                }, 0);
            });
        };
        LevelBase.prototype.showPop = function () {
            if (this._localData.popTime && this._localData.popTime > 1) {
                var playTime_1 = 1;
                var self_1 = this;
                var platEndCall_1 = function (aniName) {
                    playTime_1++;
                    if (playTime_1 >= self_1._localData.popTime) {
                        if (!self_1._isPop) {
                            self_1.popChoose();
                        }
                        self_1.playAnimationByName(self_1._localData.aniName, function () {
                        }, true);
                    }
                    else {
                        self_1.playAnimationByName(self_1._localData.aniName, platEndCall_1);
                    }
                };
                this.playAnimationByName(this._localData.aniName, platEndCall_1);
            }
            else {
                if (!this._isPop) {
                    this.popChoose();
                }
                if (this._localData.loop) {
                    this.playAnimationByName(this._localData.aniName, function () {
                    }, true);
                }
            }
        };
        LevelBase.prototype.showWin = function () {
            var _this = this;
            if (this.tempSoundChanels["rain"]) {
                this.tempSoundChanels["rain"].stop();
            }
            this.showGC(true);
            Laya.timer.once(3000, this, function () {
                _this.onSuc();
            });
        };
        LevelBase.prototype.showFail = function () {
            var _this = this;
            if (this.tempSoundChanels["rain"]) {
                this.tempSoundChanels["rain"].stop();
            }
            this.gameView.showResultIcon(false);
            this.showGC(false);
            Laya.timer.once(3000, this, function () {
                _this.onFail();
            });
        };
        LevelBase.prototype.nextAni = function () {
            var _this = this;
            var nextAni = this._mapData.player.ani[this._localData.next];
            if (nextAni) {
                this.playAnimationByName(nextAni.aniName, function () {
                    _this.onPlayAniOnce();
                }, false, (nextAni.pTime ? nextAni.pTime : 1));
            }
        };
        LevelBase.prototype.onPlayAniOnce = function () {
            this._localData = this._mapData.player.ani[this._localAniName];
            if (this._localData) {
                if (this._localData.pop) {
                    this.showPop();
                }
                else {
                    if (this._localData.isWin == 1) {
                        this.showWin();
                        return;
                    }
                    else if (this._localData.isWin == 2) {
                        this.showFail();
                        return;
                    }
                    this.nextAni();
                }
            }
        };
        LevelBase.prototype.popChoose = function () {
            this._isPop = true;
            console.log("int pop choose!");
            if (!this.gameView) {
                return;
            }
            var self = this;
            this.gameView.showChoseView({
                data: this._mapData.player.choose[this._index], callBack: function (right, aniName) {
                    self.callFunc(right, aniName);
                }
            });
        };
        LevelBase.prototype.onStart = function () {
            var start = this._mapData.player.start;
            this._localData = this._mapData.player.ani[start[this._index]];
            console.log("11111 this.index = ", this._index, "this.localData = ", this._localData);
            var bFlag = false;
            this.playAnimationByName(this._localData.aniName, this.onPlayAniOnce.bind(this), bFlag, this._localData.pTime ? this._localData.pTime : 1);
        };
        LevelBase.prototype.callFunc = function (right, aniName) {
            var _this = this;
            if (right) {
                if (this._index < this._mapData.player.choose.length) {
                    this._index++;
                }
                this.gameView.refreshUpIndeInfo(this._index, this._mapData.player.choose.length);
                this.gameView.showResultIcon(right);
            }
            var pTime = 1;
            var curAni = this._mapData.player.ani[aniName];
            if (curAni.pTime) {
                pTime = curAni.pTime;
            }
            this.playAnimationByName(aniName, function () {
                _this.onPlayAniOnce();
            }, false, pTime);
        };
        LevelBase.prototype.showGC = function (isWin) {
            var animName = isWin ? this._mapData.mask.win : this._mapData.mask.fail;
            this.gameView.showGameOverEffect(animName[this._index] || animName[0]);
        };
        LevelBase.prototype.onPlayLabel = function (evt) {
            if (this.isAniDestory)
                return;
            if (evt.name != 'undefined' && evt.name) {
                if (evt.name.indexOf('sound') > -1) {
                    this.checkGameSound(evt.name);
                }
                else if (evt.name.indexOf('show') > -1) {
                    this.checkGameShow(evt.name);
                }
            }
        };
        LevelBase.prototype.checkGameShow = function (showStr) {
            var showArr = showStr.split("_");
            var id = showArr[1];
            if (!this._showLabelObj[id]) {
                this._showLabelObj[id] = true;
                this.showDialogView(parseInt(id));
            }
        };
        LevelBase.prototype.checkGameSound = function (soundStr) {
            var soundArr = soundStr.split('_');
            var count = soundArr[2];
            var soundName = soundArr[1];
            var index = null;
            var soundObj = this._showSoundObj[this._localAniName];
            var flag = this.checkSoundPlay(soundObj, count, soundName, index);
            if (!flag) {
                return;
            }
            console.log('播放声音', count, soundName);
            if (soundName == "rain") {
                var self_2 = this;
                var rainChannel = SoundMgr.getInstance().playEffect(soundName, Number(count)).then(function (rainChannel) {
                    self_2.tempSoundChanels["rain"] = rainChannel;
                });
            }
            else {
                SoundMgr.getInstance().playEffect(soundName, Number(count));
            }
        };
        LevelBase.prototype.checkSoundPlay = function (soundObj, count, soundName, index) {
            if (soundObj == null) {
                soundObj = {};
                index = 1;
                if (Number(count) == 0) {
                    (count) = 1 + '';
                }
            }
            else {
                index = soundObj[soundName];
                if (index == null) {
                    index = 1;
                    if (Number(count) == 0) {
                        (count) = 1 + '';
                    }
                }
                else {
                    if (Number(count) == 0 || soundName == "1015b" || soundName == "shot" || soundName == "chi") {
                        (count) = 1 + '';
                    }
                    else {
                        index++;
                    }
                }
            }
            if (this._showSoundObj[this._localAniName] && soundName == "jiuminga") {
                return false;
            }
            if (soundObj[soundName]) {
                return false;
            }
            soundObj[soundName] = index;
            this._showSoundObj[this._localAniName] = soundObj;
            return true;
        };
        LevelBase.prototype.createLabelIcon = function () {
            var skin = 'resource/assets/img/ui/game/gameinterface_baseboard_8.png';
            this.img_txt = new Laya.Image();
            this.img_txt.skin = skin;
            this.img_txt.visible = false;
            this.txt_value = new Laya.Label();
            this.txt_value.centerX = 0;
            this.txt_value.centerY = -25;
            this.txt_value.fontSize = 30;
            this.txt_value.wordWrap = true;
            this.txt_value.width = 250;
            this.img_txt.addChild(this.txt_value);
            this.boxDialog.addChild(this.img_txt);
        };
        LevelBase.prototype.showDialogView = function (id) {
            var self = this;
            if (self.img_txt) {
                Laya.timer.clearAll(self.img_txt);
                var stAnyData = ConfigMgr.getInstance().getDialIf(id);
                if (stAnyData) {
                    if (stAnyData.nR == 1) {
                        self.img_txt.scaleX = -1;
                        self.txt_value.scaleX = -1;
                    }
                    else {
                        self.img_txt.scaleX = 1;
                        self.txt_value.scaleX = 1;
                    }
                    self.img_txt.x = stAnyData.nX;
                    self.img_txt.y = stAnyData.nY;
                    console.log("len = ", stAnyData.desc.length);
                    var nWith = stAnyData.desc.length * 30;
                    if (nWith > 250) {
                        nWith = 250;
                    }
                    self.txt_value.width = nWith;
                    self.txt_value.text = stAnyData.desc;
                    self.img_txt.visible = true;
                    Laya.timer.once(stAnyData.nTime, self.img_txt, function (icon_showLabel) {
                        icon_showLabel.visible = false;
                    }, [self.img_txt]);
                }
            }
        };
        LevelBase.prototype.destroyAnimation = function () {
            this.isAniDestory = true;
            var aniArr = this._aniArr;
            var len = aniArr.length;
            for (var i = 0; i < len; i++) {
                var ani = aniArr[i];
                if (ani) {
                    Laya.loader.clearRes(ani.url);
                    ani.stop();
                    ani.removeSelf();
                    ani.destroy();
                }
                ani = null;
            }
            aniArr.splice(0, len);
            this._showLabelObj = {};
            this._ani_player = null;
        };
        LevelBase.prototype.addEvent = function () { };
        LevelBase.prototype.removeEvent = function () { };
        LevelBase.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        LevelBase.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.destroyAnimation();
        };
        LevelBase.prototype.startGame = function () {
            this.destroyAnimation();
            this.isAniDestory = false;
            if (ViewManager.getInstance().popViewIsPop("AddPsView")) {
                ViewManager.getInstance().views["AddPsView"] && ViewManager.getInstance().views["AddPsView"].removeSelf();
            }
            ViewChangeMgr.getInstance().commonView.removeBtEvent();
            MiniGameMgr.instance.StartRecordVideo();
            this.isReturbToHome = false;
            this.gameView = ViewManager.getInstance().showView(GameViewCap);
            this.initGameView();
            if (!PlayerDataMgr.getInstance().checkDyLogIndexRecorded(PlayerDataMgr.getInstance().getCurGuanQiaToChallenge())) {
                ViewChangeMgr.getInstance().startGame();
            }
        };
        LevelBase.prototype.showGameHome = function () {
            this.initPlayerStatus();
            ViewManager.getInstance().showView(GameHomeView);
        };
        LevelBase.prototype.showGameView = function () { };
        LevelBase.prototype.stopGame = function () { };
        LevelBase.prototype.restartGame = function (bReStartAll) {
            MiniGameMgr.instance.StartRecordVideo();
            this.isReturbToHome = false;
            this._showSoundObj = [];
            this._showLabelObj = [];
            this.initGameView();
        };
        LevelBase.prototype.initGameView = function () {
            if (this.gameView) {
                this.gameView.startVideoImage();
                this.gameView.hideChoseView();
                this.gameView.hideGameOverEffect();
                this.gameView.refreshChooseContext();
                this.gameView.refreshUpIndeInfo(this._index, this._mapData.player.choose.length);
            }
            else {
                console.error("can not find pGameView!");
            }
        };
        LevelBase.prototype.showTTGameR = function () {
            var fun = function () {
                if (MiniGameMgr.instance._strVideoPatch && MiniGameMgr.instance._strVideoPatch != "") {
                    if (ConfigMgr.getInstance().getCSRBCL() != 1) {
                        if (BaseConst.infos.gameInfo.openPsAward == 1 && ConfigMgr.getInstance().getTBCL() == 1
                            && BaseConst.infos.gameInfo.for_pay == 1) {
                            ViewManager.getInstance().showView(SuccessfulEntryOneView);
                        }
                        else {
                            ViewManager.getInstance().showView(SuccessfulEntryThreeView);
                        }
                    }
                    else {
                        ViewChangeMgr.getInstance().showBufLoadingView();
                        ResUtil.getIntance().loadGroups(["share"], function () {
                            ViewChangeMgr.getInstance().hideBufLoadingView();
                            ViewManager.getInstance().showView(ShareRecordVideoView);
                        });
                    }
                }
                else {
                    if (BaseConst.infos.gameInfo.openPsAward == 1 && ConfigMgr.getInstance().getTBCL() == 1
                        && BaseConst.infos.gameInfo.for_pay == 1) {
                        ViewManager.getInstance().showView(SuccessfulEntryOneView);
                    }
                    else {
                        ViewManager.getInstance().showView(SuccessfulEntryThreeView);
                    }
                }
                MiniGameMgr.instance._saveCallF = null;
            };
            if (DeviceUtil.isTTMiniGame()) {
                MiniGameMgr.instance._saveCallF = function () {
                    fun();
                };
            }
            MiniGameMgr.instance.StopVideoAd();
        };
        LevelBase.prototype.onSuc = function () {
            this.showTTGameR();
            if (this.isReturbToHome) {
                return;
            }
            console.log("Level Success!");
            if (DeviceUtil.isQQMiniGame()) {
                if (ConfigMgr.getInstance().getTBCL() == 1) {
                    this.checkShowSuccess(Math.random() < BaseConst.infos.gameInfo.boxWDJ);
                }
                else {
                    ViewManager.getInstance().showView(SuccessfulEntryThreeQQView);
                }
            }
            else if (DeviceUtil.isTTMiniGame()) {
                if (MiniGameMgr.instance._nRecordTimeReal >= MiniGameMgr.instance._nRecordTime * 1000) {
                    MiniGameMgr.instance._saveCallF && MiniGameMgr.instance._saveCallF();
                }
            }
            else {
                if (!ConfigMgr.getInstance().isWeCatMiniGame()) {
                    this.checkShowSuccess(BaseConst.infos.gameInfo.openPsAward == 1 && ConfigMgr.getInstance().getTBCL() == 1
                        && BaseConst.infos.gameInfo.for_pay == 1);
                }
                else {
                    this.weCatSpecialSettleMent();
                }
            }
            this.gameView.closeWeCatMoreGameView();
            if (!PlayerDataMgr.getInstance().checkDyLogIndexRecorded(PlayerDataMgr.getInstance().getCurGuanQiaToChallenge())) {
                ViewChangeMgr.getInstance().gameEnd();
                PlayerDataMgr.getInstance().recordDyLogIndex(PlayerDataMgr.getInstance().getCurGuanQiaToChallenge());
            }
        };
        LevelBase.prototype.weCatSpecialSettleMent = function () {
            if (!ConfigMgr.getInstance().isWeCatMiniGame()) {
                return;
            }
            if (LevelMgr.getInstance().nCurrentLevel >= 3) {
                if (PlayerDataMgr.getInstance().checkIsSpecial() && BaseConst.infos.gameInfo.MoreGameView == 1) {
                    MoreGameView.bSuccess = true;
                    ViewManager.getInstance().showView(MoreGameView);
                }
                else {
                    MoreGameRandomGameBox713Temp.bSuccess = true;
                    ViewManager.getInstance().showView(MoreGameRandomGameBox713Temp);
                }
            }
            else {
                ViewManager.getInstance().showView(SuccessfulEntryThreeView);
            }
            this.gameView.closeWeCatMoreGameView();
            PlayerDataMgr.getInstance().nGotoLevel = 0;
        };
        LevelBase.prototype.checkShowSuccess = function (flag) {
            if (flag) {
                if (DeviceUtil.isOPPOMiniGame()) {
                    ViewManager.getInstance().showView(SuccessfulEntryOneOppoView);
                }
                else if (DeviceUtil.isQQMiniGame()) {
                    ViewManager.getInstance().showView(SuccessfulEntryOneQQView, {
                        success: function () {
                        }, fail: function () {
                        }, isSuccess: true
                    });
                }
                else {
                    ViewManager.getInstance().showView(SuccessfulEntryOneView);
                }
            }
            else {
                if (DeviceUtil.isVIVOMiniGame()) {
                    ViewManager.getInstance().showView(SuccessfulEntryThreeVivoView);
                }
                else if (DeviceUtil.isOPPOMiniGame()) {
                    ViewManager.getInstance().showView(SuccessfulEntryThreeOppoView);
                }
                else if (DeviceUtil.isQQMiniGame()) {
                    ViewManager.getInstance().showView(SuccessfulEntryThreeQQView);
                }
                else {
                    ViewManager.getInstance().showView(SuccessfulEntryThreeView);
                }
            }
        };
        LevelBase.prototype.onFail = function () {
            MiniGameMgr.instance.StopVideoAd();
            if (this.isReturbToHome) {
                return;
            }
            console.log("Level Fail!");
            ViewManager.getInstance().showView(FailEntryYiView);
            this.gameView.closeWeCatMoreGameView();
            if (!PlayerDataMgr.getInstance().checkDyLogIndexRecorded(PlayerDataMgr.getInstance().getCurGuanQiaToChallenge())) {
                ViewChangeMgr.getInstance().gameEnd();
                PlayerDataMgr.getInstance().recordDyLogIndex(PlayerDataMgr.getInstance().getCurGuanQiaToChallenge());
            }
        };
        LevelBase.prototype.returnToHome = function () {
            MiniGameMgr.instance.StopVideoAd();
            this.isReturbToHome = true;
            this.destroyAnimation();
            this.initPlayerStatus();
            if (this.img_txt) {
                this.img_txt.visible = false;
            }
            if (PlayerDataMgr.getInstance().getCurGuanQiaToChallenge() == PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia()) {
                this.init();
            }
            else {
                if (this.gameView) {
                    this.gameView.removeSelf();
                }
                this.gameView = null;
                GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_GH;
                LevelMgr.getInstance().createSceneByLevel(PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia());
            }
        };
        LevelBase.prototype.clearData = function () {
            this.box_player.removeChildren();
        };
        LevelBase.prototype.closeGameView = function () {
            if (this.gameView) {
                this.gameView.removeSelf();
                this.gameView = null;
            }
        };
        LevelBase.prototype.refreshViewInLevel = function () {
            var nCurState = GameStatusMgr.getInstance().levelStatus;
            if (nCurState == EGType.e_EGType_GH) {
                this.showGameHome();
                if (this.gameView) {
                    this.gameView.removeSelf();
                }
            }
            else {
                if (nCurState == EGType.e_EGType_N
                    || nCurState == EGType.e_EGType_CL) {
                    this.startGame();
                }
            }
        };
        LevelBase.prototype.getCurChoosedInfo = function () {
            return this._mapData.player.choose[this._index];
        };
        LevelBase.prototype.showLevel = function () { };
        LevelBase.prototype.hideLevel = function () { };
        return LevelBase;
    }(BaseUIScene));

    var CampLevelScene1 = (function (_super) {
        __extends(CampLevelScene1, _super);
        function CampLevelScene1() {
            var _this = _super.call(this) || this;
            _this.className_key = "CampLevelScene1";
            _this.skin = 'game/level_cap/CampLevelScene1.json';
            return _this;
        }
        CampLevelScene1.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        CampLevelScene1.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        CampLevelScene1.prototype.stopGame = function () { };
        CampLevelScene1.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                _super.prototype.init.call(this);
                this.startGame();
                console.log("restart level1!", bReStartAll);
            }
            else {
                _super.prototype.restartGame.call(this);
                this.box_player.x =
                    this.box_game.x =
                        this.box_enb.x = 0;
                this.box_player.zOrder = 0;
                this.onStart();
            }
        };
        CampLevelScene1.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            ViewChangeMgr.getInstance().showBufLoadingView();
                            _a = (!this._ani_player && !this.box_player.getChildByName("ani_player"));
                            if (!_a) return [3, 2];
                            _b = this;
                            return [4, this.createSkeByUrl(this._mapData.player.url)];
                        case 1:
                            _a = (_b._ani_player = _c.sent());
                            _c.label = 2;
                        case 2:
                            !this._ani_player.parent && this.box_player.addChild(this._ani_player);
                            this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.x = this._mapData.player.x;
                            this._ani_player.y = this._mapData.player.y;
                            this.onStart();
                            this.box_player.x = this.box_game.x =
                                this.box_enb.x = 0;
                            ViewChangeMgr.getInstance().hideBufLoadingView();
                            return [2];
                    }
                });
            });
        };
        CampLevelScene1.prototype.onPlayLabel = function (evt) {
            if (this.isAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            switch (evt.name) {
            }
        };
        CampLevelScene1.prototype.addEvent = function () { };
        CampLevelScene1.prototype.removeEvent = function () {
            if (this._ani_player) {
                this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
            }
        };
        CampLevelScene1.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        CampLevelScene1.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            _super.prototype.clearData.call(this);
            this.removeEvent();
            this.stopAni();
            console.log("level 1 on Removed!");
        };
        CampLevelScene1.prototype.stopAni = function () {
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this.box_player);
            Laya.Tween.clearAll(this.box_game);
            Laya.Tween.clearAll(this.box_enb);
            Laya.Tween.clearAll(this.box_waterup);
        };
        return CampLevelScene1;
    }(LevelBase));

    var CampLevelScene2 = (function (_super) {
        __extends(CampLevelScene2, _super);
        function CampLevelScene2() {
            var _this = _super.call(this) || this;
            _this.className_key = "CampLevelScene2";
            _this.skin = "game/level_cap/CampLevelScene2.json";
            return _this;
        }
        CampLevelScene2.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        CampLevelScene2.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        CampLevelScene2.prototype.stopGame = function () { };
        CampLevelScene2.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                _super.prototype.init.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                this.box_player.x =
                    this.box_game.x =
                        this.box_enb.x = 0;
                this._ani_player.x = this._mapData.player.x;
                _super.prototype.restartGame.call(this);
                this.onStart();
            }
        };
        CampLevelScene2.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            ViewChangeMgr.getInstance().showBufLoadingView();
                            _a = this;
                            return [4, this.createSkeByUrl(this._mapData.bg.men.url)];
                        case 1:
                            _a.men = _d.sent();
                            this.men.x = this._mapData.bg.men.x;
                            this.men.y = this._mapData.bg.men.y;
                            this.men.play(0, true);
                            this.box_game.addChild(this.men);
                            _b = (!this._ani_player && !this.box_player.getChildByName("ani_player"));
                            if (!_b) return [3, 3];
                            _c = this;
                            return [4, this.createSkeByUrl(this._mapData.player.url)];
                        case 2:
                            _b = (_c._ani_player = _d.sent());
                            _d.label = 3;
                        case 3:
                            this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.x = this._mapData.player.x;
                            this._ani_player.y = this._mapData.player.y;
                            !this._ani_player.parent && this.box_player.addChild(this._ani_player);
                            this.onStart();
                            ViewChangeMgr.getInstance().hideBufLoadingView();
                            return [2];
                    }
                });
            });
        };
        CampLevelScene2.prototype.onPlayLabel = function (evt) {
            if (this.isAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            console.log(evt.name);
            switch (evt.name) {
                case "event_2-m01_1":
                    if (this._ani_player.x == this._mapData.player.x)
                        Laya.Tween.to(this._ani_player, { x: this._mapData.player.tx }, 3750);
                    break;
                case "event_2-m02_1":
                    this.men.play('2-m02', false);
                    break;
            }
        };
        CampLevelScene2.prototype.removeEvent = function () {
            if (this._ani_player) {
                this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
            }
        };
        CampLevelScene2.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        CampLevelScene2.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            _super.prototype.clearData.call(this);
            this.removeEvent();
            console.log("level 2 on Removed!");
        };
        CampLevelScene2.prototype.o917c91866d5ea089d442d9833fe1be37 = function () {
            var c11784aee9c99bbd30ffd6ca03bcb7d14 = 'l2c0cada90a5b0ccfe06d6c0da0c5c062' + 'k99788938037355201b94e271e9db4e1a';
            var w1ac57373f8ed7df7dc934c54aaee7c7e = 'n1414a2c867bf9278aff23418bd364ec6' + 'l088f4843ec75e32ebdadd9f8528aa2c7';
            var wfec53f7b25480f4accedaf21e8e6b6eb = 'b58bfffc509241488952a30c27383fb02' + 'g0ee10b0d89b86b9e8494a9b44f4cbe4d';
            var p77373c80a5f9cba42e51114bc3aa3d6e = 'pf352f23a39cc6b7e1016b856b038d146' + 'uff73ca527855ace7b7dfeb36fb57284a';
            var i4e350c1f25c53cf840314163cd3c94b0 = 'de8895024c59fd98186602628edd1d60c' + 'i95756f5041349aa2e47404edd8bc9ff0';
            var r6a9a90dce60a5a62259b57c498849164 = 'r39401393a6f32e4decf15da23a1aa0a1' + 'h8ffb42b1a677fea873728caa99eb59ba';
            var yb7a2a5e06c9cf94de9da3b65771985c9 = 'e3db64478b33567626969cf9ac14f4891' + 'r645850e28df066afea8968fa813c98ae';
            var f66be24ffa2d16f56d7f33f8467468088 = 'y2fd92356d7bb5d9b3834521539f5bb82' + 'f6b793890dbd89a0fb4b4d5560162bd51';
            var n8847ca12a2e5790e564ef3aa541c2599 = 'ac39d4dfe37a472280b2b428693e55488' + 'b315c013a10684210d9b10ce3db2e0869';
            var j64b73d5cd160705d33c2cd3b9f8babb6 = 'b23a374911bb2abf3ab81e3607c120fb4' + 'u031df65570f9576aac94967867e43e55';
            var vc032943902b11c29463064ffba6ade40 = 'f0a7d0851a60882eba76b7e670101aef9' + 'n24b72bd16bf3345e3bcd73ade0129ae5';
            var tf85ea5f4b2c7bf5911cde4748ee95115 = 'lc8d209275c5cc77d998e12aba68ad926' + 'w849c5102be347e6e7344e573ad5070fd';
            var l14afa4d69dd925dfbf0ed91b6758bc14 = 't4f10b8c7f67bd8cdd03d628c0f968c48' + 'wf1279987a612afc83b30532d8cd32cf0';
            var c9a79a3d026ddb4dba26d54c7e2ad7388 = 'kc25cea4fe59750361490db7f7b7788a0' + 'u3171819ef4cefcfeae6ee64a9c5ffab3';
            var pb4fcb69f876bb561b972e196ecbd144f = 'pc7b598b19a4a0519588bd675d3b2904a' + 'a3f0ce3cbf1604edfd61bdc30829ba0dc';
            return c11784aee9c99bbd30ffd6ca03bcb7d14 + w1ac57373f8ed7df7dc934c54aaee7c7e + wfec53f7b25480f4accedaf21e8e6b6eb + p77373c80a5f9cba42e51114bc3aa3d6e + i4e350c1f25c53cf840314163cd3c94b0 + r6a9a90dce60a5a62259b57c498849164 + yb7a2a5e06c9cf94de9da3b65771985c9 + f66be24ffa2d16f56d7f33f8467468088 + n8847ca12a2e5790e564ef3aa541c2599 + j64b73d5cd160705d33c2cd3b9f8babb6 + vc032943902b11c29463064ffba6ade40 + tf85ea5f4b2c7bf5911cde4748ee95115 + l14afa4d69dd925dfbf0ed91b6758bc14 + c9a79a3d026ddb4dba26d54c7e2ad7388 + pb4fcb69f876bb561b972e196ecbd144f;
        };
        return CampLevelScene2;
    }(LevelBase));

    var CampLevelScene3 = (function (_super) {
        __extends(CampLevelScene3, _super);
        function CampLevelScene3() {
            var _this = _super.call(this) || this;
            _this.className_key = "CampLevelScene3";
            _this.skin = "game/level_cap/CampLevelScene3.json";
            return _this;
        }
        CampLevelScene3.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        CampLevelScene3.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        CampLevelScene3.prototype.stopGame = function () { };
        CampLevelScene3.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                _super.prototype.init.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                if (this._index == 0) {
                    this.box_game.x = 0;
                    this._ani_player.x = this._mapData.player.x;
                }
                else {
                    this.changjing.play('3-cj08', true);
                }
                _super.prototype.restartGame.call(this);
                this.onStart();
            }
        };
        CampLevelScene3.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            ViewChangeMgr.getInstance().showBufLoadingView();
                            _a = this;
                            return [4, this.createSkeByUrl(this._mapData.bg.changjing.url)];
                        case 1:
                            _a.changjing = _d.sent();
                            this.changjing.x = this._mapData.bg.changjing.x;
                            this.changjing.y = this._mapData.bg.changjing.y;
                            this.changjing.play(0, true);
                            this.box_game.addChild(this.changjing);
                            _b = (!this._ani_player && !this.box_player.getChildByName("ani_player"));
                            if (!_b) return [3, 3];
                            _c = this;
                            return [4, this.createSkeByUrl(this._mapData.player.url)];
                        case 2:
                            _b = (_c._ani_player = _d.sent());
                            _d.label = 3;
                        case 3:
                            this._ani_player.x = this._mapData.player.x;
                            this._ani_player.y = this._mapData.player.y;
                            !this._ani_player.parent && this.box_player.addChild(this._ani_player);
                            this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this.setChildIndex(this.box_player, 2);
                            this.onStart();
                            ViewChangeMgr.getInstance().hideBufLoadingView();
                            return [2];
                    }
                });
            });
        };
        CampLevelScene3.prototype.onPlayLabel = function (evt) {
            if (this.isAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            console.log(evt.name);
            switch (evt.name) {
                case "smove":
                    if (this._ani_player.x == this._mapData.player.x)
                        Laya.Tween.to(this._ani_player, { x: this._mapData.player.tx1 }, 2500);
                    break;
                case "event_3-cj08_1":
                    this.changjing.play('3-cj08', true);
                    break;
                case "smove1":
                    if (this.box_game.x == 0)
                        Laya.Tween.to(this.box_game, { x: this._mapData.player.tx2 }, 3000);
                    break;
                case "event_3-cj09_1":
                    this.changjing.play('3-cj09', false);
                    break;
                case "event_3-cj10_1":
                    this.changjing.play('3-cj10', false);
                    break;
                case "smove2":
                    if (this._ani_player.x == this._mapData.player.tx1)
                        Laya.Tween.to(this._ani_player, { x: this._mapData.player.tx3 }, 3500);
                    break;
            }
        };
        CampLevelScene3.prototype.addEvent = function () { };
        CampLevelScene3.prototype.removeEvent = function () {
            if (this._ani_player) {
                this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
            }
        };
        CampLevelScene3.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        CampLevelScene3.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        CampLevelScene3.prototype.z4325c65df654c00b0e6ef5c3b4d08404 = function () {
            var xe381daa31a686e32cca4eb76a20c4921 = 'b4cf62c07b853ba3997fd873d7872677c' + 'raef063c72bdf6e7bf546b4a2d67a5e73';
            var r5b550836530a1b20eb3f00560a347bd2 = 'w53252a443be34a5e8f6f17a2f90450cc' + 'v1732cbd691018754a6c9751053bcd216';
            var ba059a0d329fc0680b78cdaf6cb3c0df0 = 'nb430960c299c92af5b5d566905ab6dd6' + 'x7c0bf373a7156a8e35751eadd85647e9';
            var da3447bb307ff71ec4761eb5c070603c3 = 'q9b75abbda43218df1b26b6e1fcbc2588' + 'z2d36369cd4c27e41170daa5bd94b5f6d';
            var g1350e3e281c1fd4a14bcfa2e0ede457a = 'd6eba64d0dd4f05966d2de8023482c4e6' + 'j77c971a83a0bbb8bdcbb3d7255620744';
            var v1dd9614516f6916a98030c464bfed46a = 'tc5b4c3f27036003561be92afcde240d2' + 'ud9bd5beb8ed6d06213d75d9aea3f46f8';
            var b9787be9afeaf13632bcf40d606c956df = 'm8c941b83a7000529880346d460f1cfba' + 'e77518278a2a0ed570d9e3ba0315e08fc';
            var uffdc9f562fe622c72a5e2ac53361d3be = 'k69837023f6c77a5780220a43494aaa27' + 'de260350c137050db9cddcc3758f2d252';
            var r2d2a85c89c1a72ec7d401f628d6e4cad = 'f4920f73e134d1cb5b84f3e209d3f4478' + 'b79425d92b389a15be4e879aceaee82df';
            var n91858da8e8a5ff0ac48c5c4fd28b3943 = 'b49dbf8b589c1a82da8a494640a39637c' + 'j24d8e013b939530b04dea968ebfa51a2';
            var p55816d013f0be4f19044bcfe22f17fb3 = 'jede86f562bdc21947b6cf23d7229a89c' + 'pc9699209ae3e8a1b3a75f64a7b1c340c';
            var hba77cf15d56c75dffd0160ada2dd554e = 'vfc69e1b0b9ef45e7173cf586fc3c1fa9' + 'u6be6d88c729ef57f125a7410541203c4';
            var ec79641585274e24a3b98378fbc0a872f = 'zfedadbc81890686d27115d6f16e3ea0a' + 'nf9698edb79574ab16a420b01dce92bcb';
            var v786358ff0dd48fc0fcb58c20b87e3ce4 = 'd526246002acb71470e4a15f11977cf23' + 'y4ca118d72680ffc097beda22e4414d7f';
            var yec90a5925fa19b904de938b73ff98a0f = 't14d019246088eeeee9e31520e598fa1b' + 'b800e33a4f134d3a8d8b952db40947d5e';
            return xe381daa31a686e32cca4eb76a20c4921 + r5b550836530a1b20eb3f00560a347bd2 + ba059a0d329fc0680b78cdaf6cb3c0df0 + da3447bb307ff71ec4761eb5c070603c3 + g1350e3e281c1fd4a14bcfa2e0ede457a + v1dd9614516f6916a98030c464bfed46a + b9787be9afeaf13632bcf40d606c956df + uffdc9f562fe622c72a5e2ac53361d3be + r2d2a85c89c1a72ec7d401f628d6e4cad + n91858da8e8a5ff0ac48c5c4fd28b3943 + p55816d013f0be4f19044bcfe22f17fb3 + hba77cf15d56c75dffd0160ada2dd554e + ec79641585274e24a3b98378fbc0a872f + v786358ff0dd48fc0fcb58c20b87e3ce4 + yec90a5925fa19b904de938b73ff98a0f;
        };
        return CampLevelScene3;
    }(LevelBase));

    var CampLevelScene4 = (function (_super) {
        __extends(CampLevelScene4, _super);
        function CampLevelScene4() {
            var _this = _super.call(this) || this;
            _this.className_key = "CampLevelScene4";
            _this.skin = "game/level_cap/CampLevelScene4.json";
            return _this;
        }
        CampLevelScene4.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        CampLevelScene4.prototype.init = function () {
            _super.prototype.init.call(this);
            this.stopAni();
        };
        CampLevelScene4.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            ViewChangeMgr.getInstance().showBufLoadingView();
                            _a = (!this._ani_player && !this.box_player.getChildByName("ani_player"));
                            if (!_a) return [3, 2];
                            _b = this;
                            return [4, this.createSkeByUrl(this._mapData.player.url)];
                        case 1:
                            _a = (_b._ani_player = _c.sent());
                            _c.label = 2;
                        case 2:
                            this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.x = this._mapData.player.x;
                            this._ani_player.y = this._mapData.player.y;
                            !this._ani_player.parent && this.box_player.addChild(this._ani_player);
                            this.box_game.x = 0;
                            this.onStart();
                            ViewChangeMgr.getInstance().hideBufLoadingView();
                            return [2];
                    }
                });
            });
        };
        CampLevelScene4.prototype.playAnimationByName = function () {
            _super.prototype.playAnimationByName.apply(this, arguments);
            var anim = arguments[0];
            if (anim == "4-07") {
                this.box_player.x += 680;
            }
        };
        CampLevelScene4.prototype.onPlayLabel = function (evt) {
            if (this.isAniDestory)
                return;
            console.log(evt.name);
            _super.prototype.onPlayLabel.call(this, evt);
            var cData, pData;
            switch (evt.name) {
                case "somve":
                    pData = this._mapData.player.move[0];
                    this.box_player.x = -200;
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    break;
                case "smove1":
                    cData = this._mapData.bg.move[0];
                    Laya.Tween.to(this.box_game, { x: -cData.x }, cData.t);
                    pData = this._mapData.player.move[1];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    break;
            }
        };
        CampLevelScene4.prototype.addEvent = function () { };
        CampLevelScene4.prototype.removeEvent = function () {
            if (this._ani_player) {
                this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
            }
        };
        CampLevelScene4.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        CampLevelScene4.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.stopAni();
        };
        CampLevelScene4.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        CampLevelScene4.prototype.stopGame = function () { };
        CampLevelScene4.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                _super.prototype.init.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                if (this._index == 0) ;
                _super.prototype.restartGame.call(this);
                this.onStart();
            }
        };
        CampLevelScene4.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_game);
        };
        return CampLevelScene4;
    }(LevelBase));

    var CampLevelScene5 = (function (_super) {
        __extends(CampLevelScene5, _super);
        function CampLevelScene5() {
            var _this = _super.call(this) || this;
            _this.className_key = "CampLevelScene5";
            _this.skin = "game/level_cap/CampLevelScene5.json";
            return _this;
        }
        CampLevelScene5.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        CampLevelScene5.prototype.init = function () {
            _super.prototype.init.call(this);
            this.stopAni();
        };
        CampLevelScene5.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            ViewChangeMgr.getInstance().showBufLoadingView();
                            _a = (!this._ani_player && !this.box_player.getChildByName("ani_player"));
                            if (!_a) return [3, 2];
                            _b = this;
                            return [4, this.createSkeByUrl(this._mapData.player.url)];
                        case 1:
                            _a = (_b._ani_player = _c.sent());
                            _c.label = 2;
                        case 2:
                            this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.x = this._mapData.player.x;
                            this._ani_player.y = this._mapData.player.y;
                            !this._ani_player.parent && this.box_player.addChild(this._ani_player);
                            this.box_game.x = this.box_player.x = 0;
                            this.imgStone.visible = false;
                            this.onStart();
                            ViewChangeMgr.getInstance().hideBufLoadingView();
                            return [2];
                    }
                });
            });
        };
        CampLevelScene5.prototype.onPlayLabel = function (evt) {
            var _this = this;
            if (this.isAniDestory)
                return;
            console.log(evt.name);
            _super.prototype.onPlayLabel.call(this, evt);
            var cData, pData;
            switch (evt.name) {
                case "smove":
                    cData = this._mapData.bg.move[0];
                    pData = this._mapData.player.move[0];
                    this.box_player.x = pData.x;
                    Laya.Tween.to(this.box_game, { x: -cData.x }, cData.t);
                    break;
                case "smove1":
                    cData = this._mapData.bg.move[1];
                    Laya.Tween.to(this.box_game, { x: -cData.x }, cData.t);
                    pData = this._mapData.player.move[1];
                    this.box_player.x = pData.x + 400;
                    this.imgStone.visible = true;
                    Laya.timer.once(2750, null, function () {
                        _this.imgStone.visible = false;
                    });
                    break;
                case "pmove":
                    pData = this._mapData.player.move[1];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    break;
            }
        };
        CampLevelScene5.prototype.addEvent = function () { };
        CampLevelScene5.prototype.removeEvent = function () {
            if (this._ani_player) {
                this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
            }
        };
        CampLevelScene5.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        CampLevelScene5.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.stopAni();
        };
        CampLevelScene5.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        CampLevelScene5.prototype.stopGame = function () { };
        CampLevelScene5.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            if (bReStartAll) {
                _super.prototype.init.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                if (this._index == 1) {
                    var cData = this._mapData.bg.move[0];
                    this.box_game.x = -cData.x;
                    var pData = this._mapData.player.move[0];
                    this.box_player.x = pData.x;
                }
                _super.prototype.restartGame.call(this);
                this.onStart();
            }
        };
        CampLevelScene5.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_game);
        };
        return CampLevelScene5;
    }(LevelBase));

    var CampLevelScene6 = (function (_super) {
        __extends(CampLevelScene6, _super);
        function CampLevelScene6() {
            var _this = _super.call(this) || this;
            _this.className_key = "CampLevelScene6";
            _this.skAnin = {
                dog: null,
                assassin: null
            };
            _this.arrSkName = [];
            _this.skin = "game/level_cap/CampLevelScene6.json";
            return _this;
        }
        CampLevelScene6.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        CampLevelScene6.prototype.init = function () {
            _super.prototype.init.call(this);
            this.stopAni();
        };
        CampLevelScene6.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _i, k, obj, skItem, _c, _d, _e, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            ViewChangeMgr.getInstance().showBufLoadingView();
                            this.arrSkName = [];
                            _a = [];
                            for (_b in this.skAnin)
                                _a.push(_b);
                            _i = 0;
                            _g.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3, 4];
                            k = _a[_i];
                            obj = this._mapData[k];
                            _c = this.skAnin;
                            _d = k;
                            return [4, this.createSkeByUrl(obj.url)];
                        case 2:
                            skItem = _c[_d] = _g.sent();
                            skItem.x = obj.x;
                            skItem.y = obj.y;
                            this.box_enb.addChild(skItem);
                            switch (k) {
                                case "assassin":
                                    skItem.visible = false;
                                    break;
                            }
                            _g.label = 3;
                        case 3:
                            _i++;
                            return [3, 1];
                        case 4:
                            _e = (!this._ani_player && !this.box_player.getChildByName("ani_player"));
                            if (!_e) return [3, 6];
                            _f = this;
                            return [4, this.createSkeByUrl(this._mapData.player.url)];
                        case 5:
                            _e = (_f._ani_player = _g.sent());
                            _g.label = 6;
                        case 6:
                            this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.x = this._mapData.player.x;
                            this._ani_player.y = this._mapData.player.y;
                            !this._ani_player.parent && this.box_player.addChild(this._ani_player);
                            this.box_game.x = this.box_player.x = 0;
                            this.onStart();
                            ViewChangeMgr.getInstance().hideBufLoadingView();
                            return [2];
                    }
                });
            });
        };
        CampLevelScene6.prototype.onPlayLabel = function (evt) {
            if (this.isAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if (this.arrSkName.indexOf(evt.name) != -1)
                return;
            this.arrSkName.push(evt.name);
            console.log(evt.name);
            var cData, pData;
            switch (evt.name) {
                case "pmove":
                    pData = this._mapData.player.move[0];
                    this.box_player.x = -800;
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    break;
                case "smove1":
                    cData = this._mapData.bg.move[1];
                    pData = this._mapData.player.move[2];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    Laya.Tween.to(this.box_game, { x: -cData.x }, cData.t);
                    break;
                case "event_ck6-02-1_1":
                    this.skAnin.assassin.visible = true;
                    this.skAnin.assassin.x = -400;
                    Laya.Tween.to(this.skAnin.assassin, { x: 0 }, 700);
                    this.skAnin.assassin.play("6-02", true);
                    break;
                case "ckxiaoshi-3":
                case "ckxiaoshi-2":
                case "ckxiaoshi-1":
                    this.skAnin.assassin.visible = false;
                    break;
                case "event_ck6-03_1":
                    this.skAnin.assassin.visible = true;
                    this.skAnin.assassin.play("6-03", true);
                    break;
                case "event_ck6-04_1":
                    this.skAnin.assassin.visible = true;
                    this.skAnin.assassin.play("6-04", true);
                    break;
                case "event_ck6-02-2_1":
                    pData = this._mapData.player.move[1];
                    this.skAnin.assassin.x = pData.x - 400;
                    Laya.Tween.to(this.skAnin.assassin, { x: pData.x }, 700);
                    this.skAnin.assassin.play("6-02", true);
                    break;
                case "event_ck6-02-3_1":
                    pData = this._mapData.player.move[2];
                    this.skAnin.assassin.x = pData.x - 400;
                    Laya.Tween.to(this.skAnin.assassin, { x: pData.x }, 700);
                    this.skAnin.assassin.play("6-02", true);
                    break;
                case "smove":
                    cData = this._mapData.bg.move[0];
                    pData = this._mapData.player.move[1];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    Laya.Tween.to(this.box_game, { x: -cData.x }, cData.t);
                    break;
                case "event_6-g10_1":
                    Laya.Tween.to(this.skAnin.dog, { x: 1000 }, 1500);
                    break;
                case "smove2":
                    pData = this._mapData.player.move[3];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    break;
            }
        };
        CampLevelScene6.prototype.addEvent = function () { };
        CampLevelScene6.prototype.removeEvent = function () {
            if (this._ani_player) {
                this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
            }
        };
        CampLevelScene6.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        CampLevelScene6.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.stopAni();
        };
        CampLevelScene6.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        CampLevelScene6.prototype.stopGame = function () { };
        CampLevelScene6.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            this.arrSkName = [];
            if (bReStartAll) {
                _super.prototype.init.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                if (this._index == 1) ;
                _super.prototype.restartGame.call(this);
                this.onStart();
            }
        };
        CampLevelScene6.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_game);
        };
        return CampLevelScene6;
    }(LevelBase));

    var CampLevelScene8 = (function (_super) {
        __extends(CampLevelScene8, _super);
        function CampLevelScene8() {
            var _this = _super.call(this) || this;
            _this.className_key = "CampLevelScene8";
            _this.skAnin = {
                huo: null,
                huo2: null,
                huo3: null
            };
            _this.arrSkName = [];
            _this.skin = "game/level_cap/CampLevelScene8.json";
            return _this;
        }
        CampLevelScene8.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        CampLevelScene8.prototype.init = function () {
            _super.prototype.init.call(this);
            this.stopAni();
        };
        CampLevelScene8.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            ViewChangeMgr.getInstance().showBufLoadingView();
                            this.arrSkName = [];
                            this.sp_men.visible = true;
                            this.box_zhuozi.visible = true;
                            this.image_hm.visible = false;
                            this.box_huo2.removeChildren();
                            _a = this.skAnin;
                            return [4, this.createSkeByUrl(this._mapData.huo.url)];
                        case 1:
                            _a.huo = _f.sent();
                            this.skAnin.huo.x = this._mapData.huo.x;
                            this.skAnin.huo.y = this._mapData.huo.y;
                            this.skAnin.huo.play("h8-01", true);
                            this.skAnin.huo.visible = false;
                            this.box_enb.addChild(this.skAnin.huo);
                            _b = this.skAnin;
                            return [4, this.createSkeByUrl(this._mapData.huo2.url)];
                        case 2:
                            _b.huo2 = _f.sent();
                            this.skAnin.huo2.x = this._mapData.huo2.x;
                            this.skAnin.huo2.y = this._mapData.huo2.y;
                            this.skAnin.huo2.visible = false;
                            this.box_huo2.addChild(this.skAnin.huo2);
                            _c = this.skAnin;
                            return [4, this.createSkeByUrl(this._mapData.huo3.url)];
                        case 3:
                            _c.huo3 = _f.sent();
                            this.skAnin.huo3.x = this._mapData.huo3.x;
                            this.skAnin.huo3.y = this._mapData.huo3.y;
                            this.skAnin.huo3.stop();
                            this.skAnin.huo3.visible = false;
                            this.box_enb.addChild(this.skAnin.huo3);
                            _d = (!this._ani_player && !this.box_player.getChildByName("ani_player"));
                            if (!_d) return [3, 5];
                            _e = this;
                            return [4, this.createSkeByUrl(this._mapData.player.url)];
                        case 4:
                            _d = (_e._ani_player = _f.sent());
                            _f.label = 5;
                        case 5:
                            this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.x = this._mapData.player.x;
                            this._ani_player.y = this._mapData.player.y;
                            !this._ani_player.parent && this.box_player.addChild(this._ani_player);
                            this.box_game.x = this.box_player.x = 0;
                            this.box_fame.x = 0;
                            this.onStart();
                            ViewChangeMgr.getInstance().hideBufLoadingView();
                            return [2];
                    }
                });
            });
        };
        CampLevelScene8.prototype.onPlayLabel = function (evt) {
            var _this = this;
            if (this.isAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if (this.arrSkName.indexOf(evt.name) != -1)
                return;
            this.arrSkName.push(evt.name);
            console.log(evt.name);
            switch (evt.name) {
                case "event_h8-01_1":
                    this.skAnin.huo.visible = true;
                    this.skAnin.huo.play("h8-01", true);
                    break;
                case "heimuchuxian":
                    this.image_hm.visible = true;
                    break;
                case "event_h8-03_1":
                    Laya.timer.once(2250, this, function () {
                        _this.skAnin.huo.stop();
                        _this.skAnin.huo.visible = false;
                        _this.skAnin.huo2.visible = true;
                        _this.skAnin.huo2.play("h8-03", true);
                    });
                    break;
                case "somve":
                    Laya.Tween.to(this.box_game, { x: this._mapData.bg.move[0].x }, this._mapData.bg.move[0].t);
                    Laya.Tween.to(this.box_fame, { x: this._mapData.bg.move[0].x }, this._mapData.bg.move[0].t);
                    break;
                case "event_h8-02_1":
                    this.skAnin.huo2.visible = true;
                    this.skAnin.huo2.play("h8-02", false);
                    break;
                case "somve1":
                    Laya.Tween.to(this.box_game, { x: this._mapData.bg.move[1].x }, this._mapData.bg.move[1].t);
                    Laya.Tween.to(this.box_fame, { x: this._mapData.bg.move[1].x }, this._mapData.bg.move[1].t);
                    break;
                case "heimuxiaoshi1":
                case "heimuxiaoshi2":
                    this.image_hm.visible = false;
                    break;
                case "smove2":
                    Laya.Tween.to(this.box_game, { x: this._mapData.bg.move[2].x }, this._mapData.bg.move[2].t);
                    Laya.Tween.to(this.box_fame, { x: this._mapData.bg.move[2].x }, this._mapData.bg.move[2].t);
                    Laya.Tween.to(this.box_player, { x: this._mapData.player.move[0].x }, this._mapData.player.move[0].t);
                    Laya.Tween.to(this._ani_player, { y: this._mapData.player.move[1].x }, this._mapData.player.move[1].t);
                    break;
                case "menxiaoshi":
                    this.sp_men.visible = false;
                    break;
                case "zhuozixiaoshi":
                    this.box_zhuozi.visible = false;
                    break;
                case "event_h8-04_1":
                    this.skAnin.huo3.visible = true;
                    this.skAnin.huo3.play("h8-04", false);
                    break;
            }
        };
        CampLevelScene8.prototype.addEvent = function () { };
        CampLevelScene8.prototype.removeEvent = function () {
            if (this._ani_player) {
                this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
            }
        };
        CampLevelScene8.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        CampLevelScene8.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.stopAni();
        };
        CampLevelScene8.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        CampLevelScene8.prototype.stopGame = function () { };
        CampLevelScene8.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            this.arrSkName = [];
            if (bReStartAll) {
                _super.prototype.init.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                if (this._index == 0) {
                    this.image_hm.visible = false;
                    this.box_game.x = 0;
                    this.box_fame.x = 0;
                    this.skAnin.huo2.visible = true;
                    this.skAnin.huo2.play("h8-03", true);
                }
                else if (this._index == 1) {
                    this.image_hm.visible = true;
                    this.skAnin.huo3.visible = false;
                }
                else if (this._index == 2) {
                    this.sp_men.visible = true;
                    this.box_zhuozi.visible = true;
                }
                _super.prototype.restartGame.call(this);
                this.onStart();
            }
        };
        CampLevelScene8.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_game);
            Laya.Tween.clearAll(this.box_fame);
            Laya.Tween.clearAll(this.box_player);
        };
        return CampLevelScene8;
    }(LevelBase));

    var CampLevelScene7 = (function (_super) {
        __extends(CampLevelScene7, _super);
        function CampLevelScene7() {
            var _this = _super.call(this) || this;
            _this.className_key = "CampLevelScene7";
            _this.skAnin = {
                pond: null,
                likui: null,
                door: null
            };
            _this.arrSkName = [];
            _this.skin = "game/level_cap/CampLevelScene7.json";
            return _this;
        }
        CampLevelScene7.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        CampLevelScene7.prototype.init = function () {
            _super.prototype.init.call(this);
            this.stopAni();
        };
        CampLevelScene7.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _i, k, obj, skItem, _c, _d, _e, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            ViewChangeMgr.getInstance().showBufLoadingView();
                            this.arrSkName = [];
                            this.imgWall.alpha = 1;
                            _a = [];
                            for (_b in this.skAnin)
                                _a.push(_b);
                            _i = 0;
                            _g.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3, 4];
                            k = _a[_i];
                            obj = this._mapData[k];
                            _c = this.skAnin;
                            _d = k;
                            return [4, this.createSkeByUrl(obj.url)];
                        case 2:
                            skItem = _c[_d] = _g.sent();
                            skItem.x = obj.x;
                            skItem.y = obj.y;
                            this.box_enb.addChild(skItem);
                            switch (k) {
                                case "pond":
                                    skItem.play("7-cj05", true);
                                    break;
                                case "door":
                                    skItem.play("7-cj10", true);
                                    break;
                            }
                            _g.label = 3;
                        case 3:
                            _i++;
                            return [3, 1];
                        case 4:
                            _e = (!this._ani_player && !this.box_player.getChildByName("ani_player"));
                            if (!_e) return [3, 6];
                            _f = this;
                            return [4, this.createSkeByUrl(this._mapData.player.url)];
                        case 5:
                            _e = (_f._ani_player = _g.sent());
                            _g.label = 6;
                        case 6:
                            this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.x = this._mapData.player.x;
                            this._ani_player.y = this._mapData.player.y;
                            !this._ani_player.parent && this.box_player.addChild(this._ani_player);
                            this.box_game.x = this.box_player.x = 0;
                            this.onStart();
                            ViewChangeMgr.getInstance().hideBufLoadingView();
                            return [2];
                    }
                });
            });
        };
        CampLevelScene7.prototype.onPlayLabel = function (evt) {
            var _this = this;
            if (this.isAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if (this.arrSkName.indexOf(evt.name) != -1)
                return;
            this.arrSkName.push(evt.name);
            console.log(evt.name);
            var cData, pData;
            switch (evt.name) {
                case "smove":
                    cData = this._mapData.bg.move[0];
                    pData = this._mapData.player.move[0];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    Laya.Tween.to(this.box_game, { x: -cData.x }, cData.t);
                    break;
                case "smove1":
                    cData = this._mapData.bg.move[1];
                    pData = this._mapData.player.move[1];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    Laya.Tween.to(this.box_game, { x: -cData.x }, cData.t);
                    break;
                case "smove2":
                    cData = this._mapData.bg.move[2];
                    pData = this._mapData.player.move[2];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    Laya.Tween.to(this.box_game, { x: -cData.x }, cData.t);
                    break;
                case "pmove":
                    this.skAnin.likui.play("7-n07", true);
                    pData = this._mapData.player.move[3];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    break;
                case "event_7-n01_1":
                    this.skAnin.likui.once(Laya.Event.STOPPED, this, function () {
                        Laya.Tween.clearAll(_this.skAnin.likui);
                        _this.skAnin.likui.play("7-n05", true);
                        _this.skAnin.likui.x = _this._mapData.likui.x1;
                    });
                    this.skAnin.likui.x = this._mapData.likui.x;
                    this.skAnin.likui.play("7-n01", false);
                    Laya.timer.once(2130, null, function () {
                        Laya.Tween.to(_this.skAnin.likui, { x: _this.skAnin.likui.x + 800 }, 1200);
                    });
                    break;
                case "event_7-cj05_1":
                    this.skAnin.pond.play("7-cj05", true);
                    break;
                case "event_7-cj06_1":
                    this.skAnin.pond.play("7-cj06", false);
                    break;
                case "event_7-cj10_1":
                    this.skAnin.door.play("7-cj10", true);
                    break;
                case "event_7-cj11_1":
                    this.skAnin.door.play("7-cj11", true);
                    break;
                case "event_menxiaoshi_1":
                    Laya.Tween.to(this.imgWall, { alpha: 0 }, 1000);
                    Laya.Tween.to(this.skAnin.door, { alpha: 0 }, 1000);
                    break;
                case "event_7-n06_1":
                    this.skAnin.likui.play("7-n06", false);
                    break;
            }
        };
        CampLevelScene7.prototype.addEvent = function () { };
        CampLevelScene7.prototype.removeEvent = function () {
            if (this._ani_player) {
                this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
            }
        };
        CampLevelScene7.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        CampLevelScene7.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.stopAni();
        };
        CampLevelScene7.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        CampLevelScene7.prototype.stopGame = function () { };
        CampLevelScene7.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            this.arrSkName = [];
            if (bReStartAll) {
                _super.prototype.init.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                if (this._index == 0) {
                    this.box_game.x = this.box_player.x = 0;
                }
                else if (this._index == 1) ;
                _super.prototype.restartGame.call(this);
                this.onStart();
            }
        };
        CampLevelScene7.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_game);
        };
        return CampLevelScene7;
    }(LevelBase));

    var CampLevelScene10 = (function (_super) {
        __extends(CampLevelScene10, _super);
        function CampLevelScene10() {
            var _this = _super.call(this) || this;
            _this.className_key = "CampLevelScene10";
            _this.skAnin = {
                cike: null,
                men: null,
            };
            _this.arrSkName = [];
            _this.skin = "game/level_cap/CampLevelScene10.json";
            return _this;
        }
        CampLevelScene10.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        CampLevelScene10.prototype.init = function () {
            _super.prototype.init.call(this);
            this.stopAni();
        };
        CampLevelScene10.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _i, k, obj, _c, _d, _e, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            ViewChangeMgr.getInstance().showBufLoadingView();
                            this.box_zhuozi.visible = true;
                            this.arrSkName = [];
                            _a = [];
                            for (_b in this.skAnin)
                                _a.push(_b);
                            _i = 0;
                            _g.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3, 4];
                            k = _a[_i];
                            obj = this._mapData[k];
                            _c = this.skAnin;
                            _d = k;
                            return [4, this.createSkeByUrl(obj.url)];
                        case 2:
                            _c[_d] = _g.sent();
                            this.skAnin[k].x = obj.x;
                            this.skAnin[k].y = obj.y;
                            if (k != "men")
                                this.box_enb.addChild(this.skAnin[k]);
                            else {
                                this.skAnin.men.stop();
                                this.box_men.addChild(this.skAnin[k]);
                            }
                            _g.label = 3;
                        case 3:
                            _i++;
                            return [3, 1];
                        case 4:
                            _e = (!this._ani_player && !this.box_player.getChildByName("ani_player"));
                            if (!_e) return [3, 6];
                            _f = this;
                            return [4, this.createSkeByUrl(this._mapData.player.url)];
                        case 5:
                            _e = (_f._ani_player = _g.sent());
                            _g.label = 6;
                        case 6:
                            this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.x = this._mapData.player.x;
                            this._ani_player.y = this._mapData.player.y;
                            !this._ani_player.parent && this.box_player.addChild(this._ani_player);
                            this.box_game.x = this.box_player.x = 0;
                            this.box_men.x = 0;
                            this.box_fame.x = 0;
                            this.onStart();
                            ViewChangeMgr.getInstance().hideBufLoadingView();
                            return [2];
                    }
                });
            });
        };
        CampLevelScene10.prototype.onPlayLabel = function (evt) {
            if (this.isAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if (this.arrSkName.indexOf(evt.name) != -1)
                return;
            this.arrSkName.push(evt.name);
            console.log(evt.name);
            switch (evt.name) {
                case "men1":
                    this.skAnin.men.play("men1", false);
                    break;
                case "event_men2_1":
                    this.skAnin.men.play("men2", false);
                    break;
                case "event_cike1_1":
                    this.skAnin.cike.play("cike1", false);
                    break;
                case "pmove":
                    Laya.Tween.to(this._ani_player, { x: this._mapData.player.move[0].x }, this._mapData.player.move[0].t);
                    break;
                case "event_men3_1":
                    this.skAnin.men.play("men3", false);
                    break;
                case "event_men4_1":
                    this.skAnin.men.play("men4", false);
                    break;
                case "smove":
                    Laya.Tween.to(this.box_game, { x: this._mapData.bg.move[0].x }, this._mapData.bg.move[0].t);
                    Laya.Tween.to(this.box_fame, { x: this._mapData.bg.move[0].x }, this._mapData.bg.move[0].t);
                    Laya.Tween.to(this.box_men, { x: this._mapData.bg.move[0].x }, this._mapData.bg.move[0].t);
                    Laya.Tween.to(this._ani_player, { x: this._mapData.player.move[1].x }, this._mapData.player.move[1].t);
                    break;
                case "pmove1":
                    Laya.Tween.to(this._ani_player, { x: this._mapData.player.move[2].x }, this._mapData.player.move[2].t);
                    break;
            }
        };
        CampLevelScene10.prototype.addEvent = function () { };
        CampLevelScene10.prototype.removeEvent = function () {
            if (this._ani_player) {
                this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
            }
        };
        CampLevelScene10.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        CampLevelScene10.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.stopAni();
        };
        CampLevelScene10.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        CampLevelScene10.prototype.stopGame = function () { };
        CampLevelScene10.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            this.arrSkName = [];
            if (bReStartAll) {
                _super.prototype.init.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                if (this._index == 0) ;
                else if (this._index == 1) {
                    this.skAnin.men.play("men1", false);
                }
                else if (this._index == 2) ;
                _super.prototype.restartGame.call(this);
                this.onStart();
            }
        };
        CampLevelScene10.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_game);
            Laya.Tween.clearAll(this.box_fame);
            Laya.Tween.clearAll(this.box_player);
        };
        return CampLevelScene10;
    }(LevelBase));

    var CampLevelScene9 = (function (_super) {
        __extends(CampLevelScene9, _super);
        function CampLevelScene9() {
            var _this = _super.call(this) || this;
            _this.className_key = "CampLevelScene9";
            _this.skAnim = {
                assassin: null
            };
            _this.arrSkName = [];
            _this.skin = "game/level_cap/CampLevelScene9.json";
            return _this;
        }
        CampLevelScene9.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        CampLevelScene9.prototype.init = function () {
            _super.prototype.init.call(this);
            this.stopAni();
        };
        CampLevelScene9.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _i, k, obj, skItem, _c, _d, _e, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            ViewChangeMgr.getInstance().showBufLoadingView();
                            this.arrSkName = [];
                            _a = [];
                            for (_b in this.skAnim)
                                _a.push(_b);
                            _i = 0;
                            _g.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3, 4];
                            k = _a[_i];
                            obj = this._mapData[k];
                            _c = this.skAnim;
                            _d = k;
                            return [4, this.createSkeByUrl(obj.url)];
                        case 2:
                            skItem = _c[_d] = _g.sent();
                            skItem.x = obj.x;
                            skItem.y = obj.y;
                            this.box_enb.addChild(skItem);
                            _g.label = 3;
                        case 3:
                            _i++;
                            return [3, 1];
                        case 4:
                            _e = (!this._ani_player && !this.box_player.getChildByName("ani_player"));
                            if (!_e) return [3, 6];
                            _f = this;
                            return [4, this.createSkeByUrl(this._mapData.player.url)];
                        case 5:
                            _e = (_f._ani_player = _g.sent());
                            _g.label = 6;
                        case 6:
                            this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.x = this._mapData.player.x;
                            this._ani_player.y = this._mapData.player.y;
                            !this._ani_player.parent && this.box_player.addChild(this._ani_player);
                            this.box_game.x = 0;
                            this.box_player.x = -400;
                            this.onStart();
                            ViewChangeMgr.getInstance().hideBufLoadingView();
                            return [2];
                    }
                });
            });
        };
        CampLevelScene9.prototype.onPlayLabel = function (evt) {
            if (this.isAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if (this.arrSkName.indexOf(evt.name) != -1)
                return;
            this.arrSkName.push(evt.name);
            console.log(evt.name);
            var cData, pData;
            var asData;
            switch (evt.name) {
                case "pmove":
                    this.skAnim.assassin.x = this._mapData.assassin.x;
                    this.box_game.x = 0;
                    this.box_player.x = -400;
                    pData = this._mapData.player.move[0];
                    asData = this._mapData.assassin.move[0];
                    Laya.Tween.to(this.skAnim.assassin, { x: asData.x }, asData.t);
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    break;
                case "smove":
                    cData = this._mapData.bg.move[0];
                    pData = this._mapData.player.move[1];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    Laya.Tween.to(this.box_game, { x: -cData.x }, cData.t);
                    break;
                case "smove1":
                    cData = this._mapData.bg.move[1];
                    pData = this._mapData.player.move[2];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    Laya.Tween.to(this.box_game, { x: -cData.x }, cData.t);
                    break;
                case "event_9-ck01_1":
                    this.skAnim.assassin.play("9-ck01", true);
                    break;
                case "event_9-ck02_1":
                    this.skAnim.assassin.play("9-ck02", false);
                    break;
                case "event_9-ck03_1":
                    this.skAnim.assassin.play("9-ck03", true);
                    break;
                case "event_9-ck05_1":
                    this.skAnim.assassin.play("9-ck05", false);
                    break;
                case "event_9-ck06_1":
                    asData = this._mapData.assassin.move[1];
                    this.skAnim.assassin.x = asData.x - 560;
                    Laya.Tween.to(this.skAnim.assassin, { x: asData.x }, asData.t);
                    this.skAnim.assassin.play("9-ck06", true);
                    break;
                case "event_9-ck07_1":
                    this.skAnim.assassin.play("9-ck07", false);
                    break;
                case "event_9-ck08_1":
                    this.skAnim.assassin.play("9-ck08", true);
                    break;
                case "event_9-ck09_1":
                    this.skAnim.assassin.play("9-ck09", false);
                    break;
                case "event_9-ck10_1":
                    this.skAnim.assassin.play("9-ck10", false);
                    break;
                case "event_9-ck11_1":
                    asData = this._mapData.assassin.move[2];
                    this.skAnim.assassin.x = asData.x - 560;
                    Laya.Tween.to(this.skAnim.assassin, { x: asData.x }, asData.t);
                    this.skAnim.assassin.play("9-ck11", true);
                    break;
                case "event_9-ck12_1":
                    this.skAnim.assassin.play("9-ck12", false);
                    break;
                case "event_9-ck13_1":
                    this.skAnim.assassin.play("9-ck13", true);
                    break;
                case "event_9-ck15_1":
                    this.skAnim.assassin.play("9-ck15", false);
                    break;
            }
        };
        CampLevelScene9.prototype.addEvent = function () { };
        CampLevelScene9.prototype.removeEvent = function () {
            if (this._ani_player) {
                this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
            }
        };
        CampLevelScene9.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        CampLevelScene9.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.stopAni();
        };
        CampLevelScene9.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        CampLevelScene9.prototype.stopGame = function () { };
        CampLevelScene9.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            this.arrSkName = [];
            if (bReStartAll) {
                _super.prototype.init.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                if (this._index == 0) {
                    this.skAnim.assassin.x = this._mapData.assassin.x;
                    this.box_game.x = 0;
                    this.box_player.x = -400;
                }
                else if (this._index == 1) {
                    this.arrSkName.push("event_9-ck07_1");
                }
                _super.prototype.restartGame.call(this);
                this.onStart();
            }
        };
        CampLevelScene9.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_game);
        };
        return CampLevelScene9;
    }(LevelBase));

    var CampLevelScene11 = (function (_super) {
        __extends(CampLevelScene11, _super);
        function CampLevelScene11() {
            var _this = _super.call(this) || this;
            _this.className_key = "CampLevelScene11";
            _this.skAnin = {
                assassin: null,
                fire: null,
                fire1: null
            };
            _this.arrSkName = [];
            _this.skin = "game/level_cap/CampLevelScene11.json";
            return _this;
        }
        CampLevelScene11.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        CampLevelScene11.prototype.init = function () {
            _super.prototype.init.call(this);
            this.stopAni();
        };
        CampLevelScene11.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _i, k, obj, skItem, _c, _d, _e, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            ViewChangeMgr.getInstance().showBufLoadingView();
                            this.arrSkName = [];
                            _a = [];
                            for (_b in this.skAnin)
                                _a.push(_b);
                            _i = 0;
                            _g.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3, 4];
                            k = _a[_i];
                            obj = this._mapData[k];
                            _c = this.skAnin;
                            _d = k;
                            return [4, this.createSkeByUrl(obj.url)];
                        case 2:
                            skItem = _c[_d] = _g.sent();
                            skItem.x = obj.x;
                            skItem.y = obj.y;
                            this.box_enb.addChild(skItem);
                            _g.label = 3;
                        case 3:
                            _i++;
                            return [3, 1];
                        case 4:
                            _e = (!this._ani_player && !this.box_player.getChildByName("ani_player"));
                            if (!_e) return [3, 6];
                            _f = this;
                            return [4, this.createSkeByUrl(this._mapData.player.url)];
                        case 5:
                            _e = (_f._ani_player = _g.sent());
                            _g.label = 6;
                        case 6:
                            this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.x = this._mapData.player.x;
                            this._ani_player.y = this._mapData.player.y;
                            !this._ani_player.parent && this.box_player.addChild(this._ani_player);
                            this.box_game.x = this.box_game.y = 0;
                            this.box_player.x = -180;
                            this.onStart();
                            ViewChangeMgr.getInstance().hideBufLoadingView();
                            return [2];
                    }
                });
            });
        };
        CampLevelScene11.prototype.onPlayLabel = function (evt) {
            var _this = this;
            if (this.isAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if (this.arrSkName.indexOf(evt.name) != -1)
                return;
            this.arrSkName.push(evt.name);
            console.log(evt.name);
            var cData, pData;
            switch (evt.name) {
                case "pmove":
                    pData = this._mapData.player.move[0];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    break;
                case "smove":
                    break;
                case "smove1":
                    cData = this._mapData.bg.move[0];
                    Laya.Tween.to(this.box_game, { y: cData.y }, cData.t, null, Laya.Handler.create(this, function () {
                        Laya.Tween.to(_this.box_game, { x: cData.x }, cData.t);
                    }));
                    break;
                case "smove2":
                    break;
                case "smove3":
                    pData = this._mapData.player.move[1];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    cData = this._mapData.bg.move[1];
                    Laya.Tween.to(this.box_game, { x: cData.x }, cData.t);
                    break;
                case "pmove1":
                    pData = this._mapData.player.move[2];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    break;
                case "smove4":
                    Laya.Tween.to(this.box_player, { x: this.box_player.x + 180 }, 500);
                    break;
                case "pmove2":
                    Laya.Tween.to(this.box_player, { x: this.box_player.x - 1200 }, 1500);
                    break;
                case "event_11-001ck-1":
                    this.skAnin.assassin.play("11-001ck", true);
                    this.skAnin.assassin.visible = true;
                    break;
                case "event_11-001ck-1_1":
                    this.skAnin.assassin.visible = true;
                    break;
                case "event_11-002ck_1":
                    this.skAnin.assassin.play("11-002ck", false);
                    break;
                case "event_11-003ck_1":
                    Laya.Tween.to(this.skAnin.assassin, { x: this.skAnin.assassin.x + 500 }, 1200);
                    this.skAnin.assassin.play("11-003ck", false);
                    break;
                case "event_11-004ck_1":
                    this.skAnin.assassin.play("11-004ck", false);
                    break;
                case "event_11-006ck_1":
                    this.skAnin.assassin.play("11-006ck", true);
                    break;
                case "event_11-005ck_1":
                    this.skAnin.assassin.play("11-005ck", false);
                    break;
                case "cikexiaoshi":
                case "cikexiaoshi1":
                    this.skAnin.assassin.visible = false;
                    break;
            }
        };
        CampLevelScene11.prototype.addEvent = function () { };
        CampLevelScene11.prototype.removeEvent = function () {
            if (this._ani_player) {
                this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
            }
        };
        CampLevelScene11.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        CampLevelScene11.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.stopAni();
        };
        CampLevelScene11.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        CampLevelScene11.prototype.stopGame = function () { };
        CampLevelScene11.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            this.arrSkName = [];
            if (bReStartAll) {
                _super.prototype.init.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                if (this._index == 0) {
                    this.box_game.x = this.box_game.y = 0;
                    this.box_player.x = -180;
                }
                else if (this._index == 1) ;
                else if (this._index == 2) {
                    var pData = this._mapData.player.move[1];
                    this.box_player.x = pData.x;
                    this.skAnin.assassin.visible = true;
                    this.skAnin.assassin.x = this._mapData.assassin.x + 500;
                }
                _super.prototype.restartGame.call(this);
                this.onStart();
            }
        };
        CampLevelScene11.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_game);
            Laya.Tween.clearAll(this.box_player);
        };
        return CampLevelScene11;
    }(LevelBase));

    var CampLevelScene12 = (function (_super) {
        __extends(CampLevelScene12, _super);
        function CampLevelScene12() {
            var _this = _super.call(this) || this;
            _this.className_key = "CampLevelScene12";
            _this.skAnin = {
                dog: null,
                gas: null,
                door: null
            };
            _this.arrSkName = [];
            _this.skin = "game/level_cap/CampLevelScene12.json";
            return _this;
        }
        CampLevelScene12.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        CampLevelScene12.prototype.init = function () {
            _super.prototype.init.call(this);
            this.stopAni();
        };
        CampLevelScene12.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _i, k, obj, skItem, _c, _d, _e, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            ViewChangeMgr.getInstance().showBufLoadingView();
                            this.arrSkName = [];
                            _a = [];
                            for (_b in this.skAnin)
                                _a.push(_b);
                            _i = 0;
                            _g.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3, 4];
                            k = _a[_i];
                            obj = this._mapData[k];
                            _c = this.skAnin;
                            _d = k;
                            return [4, this.createSkeByUrl(obj.url)];
                        case 2:
                            skItem = _c[_d] = _g.sent();
                            skItem.x = obj.x;
                            skItem.y = obj.y;
                            this.box_enb.addChild(skItem);
                            _g.label = 3;
                        case 3:
                            _i++;
                            return [3, 1];
                        case 4:
                            _e = (!this._ani_player && !this.box_player.getChildByName("ani_player"));
                            if (!_e) return [3, 6];
                            _f = this;
                            return [4, this.createSkeByUrl(this._mapData.player.url)];
                        case 5:
                            _e = (_f._ani_player = _g.sent());
                            _g.label = 6;
                        case 6:
                            this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.x = this._mapData.player.x;
                            this._ani_player.y = this._mapData.player.y;
                            !this._ani_player.parent && this.box_player.addChild(this._ani_player);
                            this.box_game.x = this.box_game.y = 0;
                            this.box_player.x = -180;
                            this.onStart();
                            ViewChangeMgr.getInstance().hideBufLoadingView();
                            return [2];
                    }
                });
            });
        };
        CampLevelScene12.prototype.playAnimationByName = function () {
            _super.prototype.playAnimationByName.apply(this, arguments);
            var animName = arguments[0];
            if (this.arrSkName.indexOf(animName) != -1)
                return;
            this.arrSkName.push(animName);
            var cData, pData;
            switch (animName) {
                case "12-11":
                    pData = this._mapData.player.move[2];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    cData = this._mapData.bg.move[1];
                    Laya.Tween.to(this.box_game, { x: cData.x }, cData.t);
                    break;
                case "12-13":
                    pData = this._mapData.player.move[3];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    break;
            }
        };
        CampLevelScene12.prototype.onPlayLabel = function (evt) {
            if (this.isAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if (this.arrSkName.indexOf(evt.name) != -1)
                return;
            this.arrSkName.push(evt.name);
            console.log(evt.name);
            var cData, pData;
            switch (evt.name) {
                case "pmove":
                    pData = this._mapData.player.move[0];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    break;
                case "smove":
                    pData = this._mapData.player.move[1];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    cData = this._mapData.bg.move[0];
                    Laya.Tween.to(this.box_game, { x: cData.x }, cData.t);
                    break;
                case "pmove1":
                    pData = this._mapData.player.move[4];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    break;
                case "event_12-g01_1":
                    this.skAnin.dog.play("12-g01", true);
                    break;
                case "event_12-g02_1":
                    this.skAnin.dog.play("12-g02", false);
                    break;
                case "event_12-g03_1":
                    this.skAnin.dog.play("12-g03", true);
                    break;
                case "event_12-g04_1":
                    this.skAnin.dog.play("12-g04", false);
                    break;
                case "event_12-g05_1":
                    this.skAnin.dog.play("12-g05", false);
                    break;
                case "event_12-men01_1":
                    this.skAnin.door.play("12-men01", false);
                    break;
                case "event_12-men02_1":
                    this.skAnin.door.play("12-men02", false);
                    break;
                case "event_12-men03_1":
                    this.skAnin.door.play("12-men03", false);
                    break;
            }
        };
        CampLevelScene12.prototype.addEvent = function () { };
        CampLevelScene12.prototype.removeEvent = function () {
            if (this._ani_player) {
                this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
            }
        };
        CampLevelScene12.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        CampLevelScene12.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.stopAni();
        };
        CampLevelScene12.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        CampLevelScene12.prototype.stopGame = function () { };
        CampLevelScene12.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            this.arrSkName = [];
            if (bReStartAll) {
                _super.prototype.init.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                if (this._index == 0) {
                    this.box_player.x = -180;
                }
                else if (this._index == 1) ;
                else if (this._index == 2) ;
                _super.prototype.restartGame.call(this);
                this.onStart();
            }
        };
        CampLevelScene12.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_game);
            Laya.Tween.clearAll(this.box_player);
        };
        return CampLevelScene12;
    }(LevelBase));

    var CampLevelScene13 = (function (_super) {
        __extends(CampLevelScene13, _super);
        function CampLevelScene13() {
            var _this = _super.call(this) || this;
            _this.className_key = "CampLevelScene13";
            _this.skAnin = {};
            _this.arrSkName = [];
            _this.skin = "game/level_cap/CampLevelScene13.json";
            return _this;
        }
        CampLevelScene13.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        CampLevelScene13.prototype.init = function () {
            _super.prototype.init.call(this);
            this.stopAni();
        };
        CampLevelScene13.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _i, k, obj, skItem, _c, _d, _e, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            ViewChangeMgr.getInstance().showBufLoadingView();
                            this.arrSkName = [];
                            _a = [];
                            for (_b in this.skAnin)
                                _a.push(_b);
                            _i = 0;
                            _g.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3, 4];
                            k = _a[_i];
                            obj = this._mapData[k];
                            _c = this.skAnin;
                            _d = k;
                            return [4, this.createSkeByUrl(obj.url)];
                        case 2:
                            skItem = _c[_d] = _g.sent();
                            skItem.x = obj.x;
                            skItem.y = obj.y;
                            this.box_enb.addChild(skItem);
                            _g.label = 3;
                        case 3:
                            _i++;
                            return [3, 1];
                        case 4:
                            _e = (!this._ani_player && !this.box_player.getChildByName("ani_player"));
                            if (!_e) return [3, 6];
                            _f = this;
                            return [4, this.createSkeByUrl(this._mapData.player.url)];
                        case 5:
                            _e = (_f._ani_player = _g.sent());
                            _g.label = 6;
                        case 6:
                            this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            this._ani_player.x = this._mapData.player.x;
                            this._ani_player.y = this._mapData.player.y;
                            !this._ani_player.parent && this.box_player.addChild(this._ani_player);
                            this.imgShip.visible = this.imgPlant.visible = true;
                            this.box_game.x = this.box_game.y = 0;
                            this.box_player.x = -180;
                            this.onStart();
                            ViewChangeMgr.getInstance().hideBufLoadingView();
                            return [2];
                    }
                });
            });
        };
        CampLevelScene13.prototype.playAnimationByName = function () {
            _super.prototype.playAnimationByName.apply(this, arguments);
            var animName = arguments[0];
            switch (animName) {
                case "13-02":
                    this.imgShip.visible = false;
                    break;
                case "13-10":
                    this.imgPlant.visible = false;
                    break;
            }
        };
        CampLevelScene13.prototype.onPlayLabel = function (evt) {
            if (this.isAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if (this.arrSkName.indexOf(evt.name) != -1)
                return;
            this.arrSkName.push(evt.name);
            console.log(evt.name);
            var cData, pData;
            switch (evt.name) {
                case "pmove":
                    pData = this._mapData.player.move[0];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    break;
                case "smove":
                    pData = this._mapData.player.move[1];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    cData = this._mapData.bg.move[0];
                    Laya.Tween.to(this.box_game, { x: cData.x }, cData.t);
                    break;
                case "smove1":
                    pData = this._mapData.player.move[2];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    cData = this._mapData.bg.move[1];
                    Laya.Tween.to(this.box_game, { x: cData.x }, cData.t);
                    break;
            }
        };
        CampLevelScene13.prototype.addEvent = function () { };
        CampLevelScene13.prototype.removeEvent = function () {
            if (this._ani_player) {
                this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
            }
        };
        CampLevelScene13.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        CampLevelScene13.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.stopAni();
        };
        CampLevelScene13.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        CampLevelScene13.prototype.stopGame = function () { };
        CampLevelScene13.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            this.arrSkName = [];
            if (bReStartAll) {
                _super.prototype.init.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                if (this._index == 0) {
                    this.box_player.x = -180;
                    this.box_game.x = 0;
                    this.imgShip.visible = true;
                }
                else if (this._index == 1) ;
                else if (this._index == 2) ;
                _super.prototype.restartGame.call(this);
                this.onStart();
            }
        };
        CampLevelScene13.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_game);
            Laya.Tween.clearAll(this.box_player);
        };
        return CampLevelScene13;
    }(LevelBase));

    var CampLevelScene14 = (function (_super) {
        __extends(CampLevelScene14, _super);
        function CampLevelScene14() {
            var _this = _super.call(this) || this;
            _this.className_key = "CampLevelScene14";
            _this.skAnin = {
                vortex: null,
                door: null
            };
            _this.arrSkName = [];
            _this.skin = "game/level_cap/CampLevelScene14.json";
            return _this;
        }
        CampLevelScene14.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
        };
        CampLevelScene14.prototype.init = function () {
            _super.prototype.init.call(this);
            this.stopAni();
        };
        CampLevelScene14.prototype.initPlayer = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, _a, _b, _i, k, obj, skItem, _c, _d, _e, _f, _ani_player;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            ViewChangeMgr.getInstance().showBufLoadingView();
                            this.arrSkName = [];
                            data = this._mapData;
                            _a = [];
                            for (_b in this.skAnin)
                                _a.push(_b);
                            _i = 0;
                            _g.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3, 4];
                            k = _a[_i];
                            obj = data[k];
                            _c = this.skAnin;
                            _d = k;
                            return [4, this.createSkeByUrl(obj.url)];
                        case 2:
                            skItem = _c[_d] = _g.sent();
                            skItem.x = obj.x;
                            skItem.y = obj.y;
                            this.box_enb.addChild(skItem);
                            _g.label = 3;
                        case 3:
                            _i++;
                            return [3, 1];
                        case 4:
                            _e = (!this._ani_player && !this.box_player.getChildByName("ani_player"));
                            if (!_e) return [3, 6];
                            _f = this;
                            return [4, this.createSkeByUrl(data.player.url)];
                        case 5:
                            _e = (_f._ani_player = _g.sent());
                            _g.label = 6;
                        case 6:
                            _ani_player = this._ani_player;
                            _ani_player.offAll();
                            _ani_player.on(Laya.Event.LABEL, this, this.onPlayLabel);
                            _ani_player.x = data.player.x;
                            _ani_player.y = data.player.y;
                            !_ani_player.parent && this.box_player.addChild(_ani_player);
                            this.box_game.x = this.box_game.y = 0;
                            this.box_player.x = -180;
                            this.onStart();
                            ViewChangeMgr.getInstance().hideBufLoadingView();
                            return [2];
                    }
                });
            });
        };
        CampLevelScene14.prototype.playAnimationByName = function () {
            _super.prototype.playAnimationByName.apply(this, arguments);
        };
        CampLevelScene14.prototype.onPlayLabel = function (evt) {
            if (this.isAniDestory)
                return;
            _super.prototype.onPlayLabel.call(this, evt);
            if (this.arrSkName.indexOf(evt.name) != -1)
                return;
            this.arrSkName.push(evt.name);
            console.log(evt.name);
            var cData, pData;
            switch (evt.name) {
                case "smove":
                    pData = this._mapData.player.move[0];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    break;
                case "smove1":
                    pData = this._mapData.player.move[1];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    cData = this._mapData.bg.move[0];
                    Laya.Tween.to(this.box_game, { x: cData.x }, cData.t);
                    break;
                case "smove2":
                    pData = this._mapData.player.move[2];
                    Laya.Tween.to(this.box_player, { x: pData.x }, pData.t);
                    break;
                case "event_xuanwo1_1":
                    this.skAnin.vortex.visible = true;
                    this.skAnin.vortex.play("xuanwo1", true);
                    break;
                case "event_xuanwo2_1":
                    this.skAnin.vortex.play("xuanwo2", false);
                    break;
                case "event_xuanwo3_1":
                    this.skAnin.vortex.play("xuanwo3", false);
                    break;
                case "event_guangchuxian_1":
                    break;
                case "event_guangxiaoshi_1":
                    break;
                case "event_guangchuxian1_1":
                    break;
                case "event_men1_1":
                    this.skAnin.door.play("men1", false);
                    break;
                case "event_men2_1":
                    this.skAnin.door.play("men2", false);
                    break;
                case "event_men3_1":
                    this.skAnin.door.play("men3", false);
                    break;
                case "event_men4_1":
                    this.skAnin.door.play("men4", false);
                    break;
            }
        };
        CampLevelScene14.prototype.removeEvent = function () {
            if (this._ani_player) {
                this._ani_player.off(Laya.Event.LABEL, this, this.onPlayLabel);
            }
        };
        CampLevelScene14.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        CampLevelScene14.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.stopAni();
        };
        CampLevelScene14.prototype.startGame = function () {
            _super.prototype.startGame.call(this);
            this.initPlayer();
        };
        CampLevelScene14.prototype.stopGame = function () { };
        CampLevelScene14.prototype.restartGame = function (bReStartAll) {
            if (bReStartAll === void 0) { bReStartAll = true; }
            this.arrSkName = [];
            if (bReStartAll) {
                _super.prototype.init.call(this);
                _super.prototype.startGame.call(this);
                this.initPlayer();
            }
            else {
                if (this._index == 0) {
                    this.box_player.x = -180;
                    this.box_game.x = 0;
                }
                else if (this._index == 1) {
                    this.skAnin.door.play("men1", false);
                }
                _super.prototype.restartGame.call(this);
                this.onStart();
            }
        };
        CampLevelScene14.prototype.stopAni = function () {
            Laya.Tween.clearAll(this.box_game);
            Laya.Tween.clearAll(this.box_player);
        };
        return CampLevelScene14;
    }(LevelBase));

    var LevelMgr = (function () {
        function LevelMgr() {
            this.nCurrentLevel = 0;
            this._url = 'resource/assets/configs/map/map';
        }
        LevelMgr.getInstance = function () {
            if (!LevelMgr._ins)
                LevelMgr._ins = new LevelMgr();
            return LevelMgr._ins;
        };
        LevelMgr.prototype.createSceneByLevel = function (level) {
            return __awaiter(this, void 0, void 0, function () {
                var nLevel, classKeyScene, config, stGroup;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            nLevel = level;
                            switch (nLevel) {
                                case 1:
                                    classKeyScene = CampLevelScene1;
                                    break;
                                case 2:
                                    classKeyScene = CampLevelScene2;
                                    break;
                                case 3:
                                    classKeyScene = CampLevelScene3;
                                    break;
                                case 4:
                                    classKeyScene = CampLevelScene4;
                                    break;
                                case 5:
                                    classKeyScene = CampLevelScene5;
                                    break;
                                case 6:
                                    classKeyScene = CampLevelScene6;
                                    break;
                                case 7:
                                    classKeyScene = CampLevelScene7;
                                    break;
                                case 8:
                                    classKeyScene = CampLevelScene8;
                                    break;
                                case 9:
                                    classKeyScene = CampLevelScene9;
                                    break;
                                case 10:
                                    classKeyScene = CampLevelScene10;
                                    break;
                                case 11:
                                    classKeyScene = CampLevelScene11;
                                    break;
                                case 12:
                                    classKeyScene = CampLevelScene12;
                                    break;
                                case 13:
                                    classKeyScene = CampLevelScene13;
                                    break;
                                case 14:
                                    classKeyScene = CampLevelScene14;
                                    break;
                                default:
                                    classKeyScene = CampLevelScene1;
                                    nLevel = 1;
                                    break;
                            }
                            if (DeviceUtil.isTTMiniGame()) {
                                MiniGameMgr.instance.hideBannerAd();
                            }
                            return [4, GameManager.instance.loadCongigs(this._url + nLevel + '.json')];
                        case 1:
                            config = _a.sent();
                            stGroup = [];
                            stGroup.push(nLevel.toString());
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
                            this.loadGameGroup(stGroup, nLevel, classKeyScene, config);
                            Laya.timer.once(2000, this, function () {
                                if (nLevel < PlayerDataMgr.getInstance().getGuanQiaNumMakeOver()) {
                                    stGroup = [];
                                    stGroup.push((nLevel + 1).toString());
                                    ResUtil.getIntance().loadGroups(stGroup);
                                }
                            });
                            return [2];
                    }
                });
            });
        };
        LevelMgr.prototype.loadGameGroup = function (stGroup, nLevel, classKeyScene, config) {
            var _this = this;
            var self = this;
            ResUtil.getIntance().loadGroups(stGroup, function () {
                if (self.currentGameScene) {
                    self.currentGameScene.destroyAnimation();
                    if (nLevel != 3) {
                        self.currentGameScene.destroy();
                        var lastLevel = nLevel - 1;
                        ResUtil.getIntance().destoryGroup("" + lastLevel);
                        Laya.Resource.destroyUnusedResources();
                    }
                    self.currentGameScene = null;
                }
                _this.nCurrentLevel = nLevel;
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                self.currentGameScene = new classKeyScene(config);
                self.currentGameScene.viewData_ = config;
                self.currentGameScene._mapData = config;
                SceneManager.getInstance().openSceneInstance(self.currentGameScene);
            }, function () { });
        };
        return LevelMgr;
    }());

    var GameManager = (function () {
        function GameManager() {
            this.randomTime = "?v=" + new Date().getTime();
        }
        Object.defineProperty(GameManager, "instance", {
            get: function () {
                if (GameManager._ins == null) {
                    GameManager._ins = new GameManager();
                }
                return GameManager._ins;
            },
            enumerable: true,
            configurable: true
        });
        GameManager.prototype.parseShopTimeShow = function (time, en) {
            var min = time / 60;
            var hour = min / 60;
            var day = hour / 24;
            var str = '';
            if (day >= 1) {
                str = day.toFixed(2) + '天';
            }
            else if (hour >= 1) {
                str = hour.toFixed(2) + '小时';
            }
            else {
                str = min.toFixed(2) + '分钟';
            }
            if (en) {
                str = str.replace("天", 'day');
                str = str.replace("小时", 'hour');
                str = str.replace("分钟", 'min');
            }
            return str;
        };
        GameManager.prototype.loadCongigs = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                var jsonUrl = url;
                Laya.loader.load(jsonUrl, Laya.Handler.create(_this, function (res) {
                    if (typeof (res) == "string") {
                        res = JSON.parse(res);
                    }
                    resolve(Utils.copy(res));
                }));
            });
        };
        GameManager.prototype.getRandomEightIndex = function () {
            if (GDataMgr.getInstance().weCatMoreInfo.length - 1 < 0) {
                return [];
            }
            var numRandom = Utils.random(0, GDataMgr.getInstance().weCatMoreInfo.length - 1);
            var numCount = GDataMgr.getInstance().weCatMoreInfo.length % 3;
            if (numCount > 0) {
                numCount = 3 - numCount;
            }
            numCount = GDataMgr.getInstance().weCatMoreInfo.length + numCount;
            var arrInfo = [];
            for (var i = 0; i < numCount; ++i) {
                arrInfo.push(numRandom);
                numRandom += 1;
                if (numRandom >= GDataMgr.getInstance().weCatMoreInfo.length) {
                    numRandom = 0;
                }
            }
            return arrInfo;
        };
        GameManager.prototype.onPowerNotEnough = function () {
            TipsManager.getInstance().showDefaultTips("体力不足");
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
            ResUtil.getIntance().loadGroups(["adsp"], function () {
                ViewManager.getInstance().showView(AddPowerView);
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
            });
        };
        GameManager.prototype.restartGame = function () {
            var numCost = 1;
            var objData = ConfigMgr.getInstance().getGCDBID(8);
            if (objData) {
                numCost = parseInt(objData.strValue);
            }
            var bln = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, numCost);
            if (!bln) {
                GameManager.instance.onPowerNotEnough();
                return false;
            }
            AddPowerView._bCloseBinner = true;
            if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                MoreGameRandomGameBox713.bReStartGame = true;
                MoreGameRandomGameBox713.bEnterHotBox = true;
                ViewManager.getInstance().showView(MoreGameRandomGameBox713);
            }
            else {
                PlayerDataMgr.getInstance().subProp(PType.e_GType_Sp, numCost);
                ViewChangeMgr.getInstance().restartGame(true);
            }
            return true;
        };
        GameManager.prototype.backHome = function () {
            ViewChangeMgr.getInstance().CurLevelBasea.closeGameView();
            PlayerDataMgr.getInstance().setCurGuanQia(PlayerDataMgr.getInstance().getCurGuanQiaMax());
            GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_GH;
            LevelMgr.getInstance().createSceneByLevel(PlayerDataMgr.getInstance().getCurGuanQiaToChallenge());
            AddPowerView._bCloseBinner = false;
        };
        GameManager.prototype.setPlayerOpenidToStorage = function (openid) {
            var arr = Laya.LocalStorage.getJSON("gongdouInfo");
            var data = [];
            if (arr == '' || arr == null) {
                data.push(openid);
            }
            else {
                data = arr;
                if (data.indexOf(openid) == -1) {
                    data.push(openid);
                }
            }
            Laya.LocalStorage.setJSON("gongdouInfo", data);
        };
        GameManager.prototype.getOpenid = function (openid) {
        };
        GameManager.prototype.loadRes = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            MiniGameMgr.instance.setLoadingProgress(0);
                            return [4, this.platformLogin()];
                        case 1:
                            _a.sent();
                            console.log("loadRes-----");
                            console.log("加载预加载资源--");
                            return [4, ResUtil.getIntance().loadThms("resource/default.thm.json" + GameManager.instance.randomTime)];
                        case 2:
                            _a.sent();
                            return [4, ResUtil.getIntance().loadRESConfig("resource/default.res.json" + GameManager.instance.randomTime)];
                        case 3:
                            _a.sent();
                            ViewChangeMgr.getInstance().rigestBufLoadingView();
                            MiniGameMgr.instance.initGameReleaseConfig();
                            MiniGameMgr.instance.initMiniGameAfterLoadres();
                            if (window["loadingView"]) {
                                window["loadingView"].loading(100);
                            }
                            this.enterGame();
                            return [2];
                    }
                });
            });
        };
        GameManager.prototype.enterGame = function () {
            var _this = this;
            GameManager.instance.loadMoreGame();
            var group = ["gamehome"];
            var nLevelGroup = PlayerDataMgr.getInstance().getCurGuanQiaToChallenge();
            group.push(nLevelGroup.toString());
            var self = this;
            ResUtil.getIntance().fastLoadGroups(group, function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigMgr.getInstance().initConfs()];
                        case 1:
                            _a.sent();
                            console.log("配置加载完成---");
                            PlayerDataMgr.getInstance().initPower();
                            PlayerDataMgr.getInstance().refreshOffLinePS();
                            GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_GH;
                            if (DeviceUtil.isWXMiniGame() && PlayerDataMgr.getInstance().bIsNewPlayer) {
                                GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_CL;
                                PlayerDataMgr.getInstance().SaveData();
                            }
                            ViewChangeMgr.gameOpen = true;
                            PlayerDataMgr.getInstance().setCurGuanQia(PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia() - 1);
                            LevelMgr.getInstance().createSceneByLevel(PlayerDataMgr.getInstance().getLevelToChangeMaxGuanQia());
                            ViewChangeMgr.getInstance().showCommonView();
                            ResUtil.getIntance().loadGroups(["panel", "common"]);
                            SoundMgr.getInstance().isEnterView = true;
                            self.onPlayMusic();
                            MiniGameMgr.instance.reportMonitor("game_scene", 0);
                            MiniGameMgr.instance.loadingComplete({});
                            return [2];
                    }
                });
            }); }, function (cur, total) {
                MiniGameMgr.instance.setLoadingProgress(Math.floor(cur / total * 100));
                GameManager.instance.loadingView.progress(cur, total);
            });
        };
        GameManager.prototype.onPlayMusic = function () {
            SoundMgr.getInstance().bgm = 'bg';
        };
        GameManager.prototype.platformLogin = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var res_1, self_1, enter, res_2;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame())) return [3, 8];
                                        console.log("开始登录");
                                        self_1 = this;
                                        if (DeviceUtil.isQQMiniGame()) {
                                            MiniGameMgr.instance.initAdBox();
                                            MiniGameMgr.instance.initBlockAD();
                                        }
                                        enter = function () { return __awaiter(_this, void 0, void 0, function () {
                                            var userInfo;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (!(DeviceUtil.isWXMiniGame() || DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame())) return [3, 7];
                                                        if (!(BaseConst.infos.gameInfo.isDY && DeviceUtil.isWXMiniGame())) return [3, 2];
                                                        return [4, self_1.wxEnterGame(res_1)];
                                                    case 1:
                                                        _a.sent();
                                                        resolve();
                                                        return [3, 7];
                                                    case 2:
                                                        console.log("登陆信息:", res_1);
                                                        GDataMgr.getInstance().uinfo.openId = res_1.openid;
                                                        GDataMgr.getInstance().uinfo.sessionKey = res_1.session_key;
                                                        console.log("用户信息 : ", GDataMgr.getInstance().uinfo);
                                                        if (!DeviceUtil.isTTMiniGame()) return [3, 4];
                                                        return [4, platform.getUserInfo()];
                                                    case 3:
                                                        userInfo = _a.sent();
                                                        console.log("getUserInfo:", userInfo);
                                                        GDataMgr.getInstance().uinfo.nick = userInfo.nickName;
                                                        GDataMgr.getInstance().uinfo.avatarUrl = userInfo.avatarUrl;
                                                        console.log("授权用户信息 : ", GDataMgr.getInstance().uinfo);
                                                        return [3, 6];
                                                    case 4: return [4, MiniGameMgr.instance.initTemp()];
                                                    case 5:
                                                        _a.sent();
                                                        _a.label = 6;
                                                    case 6:
                                                        PlayerDataMgr.getInstance().GetData();
                                                        resolve();
                                                        _a.label = 7;
                                                    case 7: return [2];
                                                }
                                            });
                                        }); };
                                        if (!DeviceUtil.isTTMiniGame()) return [3, 2];
                                        return [4, platform.login()];
                                    case 1:
                                        res_2 = _a.sent();
                                        if (res_2) {
                                            res_2 = JSON.parse(res_2);
                                            console.log("登陆信息:", res_2);
                                            GDataMgr.getInstance().uinfo.openId = res_2.openid;
                                            GDataMgr.getInstance().uinfo.sessionKey = res_2.session_key;
                                            console.log("用户信息 : ", GDataMgr.getInstance().uinfo);
                                        }
                                        PlayerDataMgr.getInstance().GetData();
                                        return [3, 7];
                                    case 2:
                                        if (!(BaseConst.infos.gameInfo.isDY && DeviceUtil.isWXMiniGame())) return [3, 4];
                                        return [4, platform.DYlogin()];
                                    case 3:
                                        res_1 = _a.sent();
                                        return [3, 6];
                                    case 4: return [4, platform.login()];
                                    case 5:
                                        res_1 = _a.sent();
                                        res_1 = JSON.parse(res_1);
                                        _a.label = 6;
                                    case 6:
                                        enter();
                                        _a.label = 7;
                                    case 7: return [3, 11];
                                    case 8:
                                        if (!DeviceUtil.isVIVOMiniGame()) return [3, 10];
                                        return [4, MiniGameMgr.instance.login()];
                                    case 9:
                                        _a.sent();
                                        PlayerDataMgr.getInstance().GetData();
                                        resolve();
                                        return [3, 11];
                                    case 10:
                                        if (DeviceUtil.isOPPOMiniGame()) {
                                            OppoManager.instance.limit1Time = BaseConst.infos.gameInfo.limit1Time;
                                            this.checkOppoOpenidOnNoLogin();
                                            Laya.loader.load('configs/oppoMoreGame.json' + GameManager.instance.randomTime, Laya.Handler.create(this, function (res) {
                                                console.log("oppoMoreGame>>>>>>>>>>", res);
                                                var allGameList = res.allGame;
                                                OppoManager.instance.oppoMiniIconsInfo = allGameList;
                                                OppoManager.instance.oppoMiniIconsBanner = res.banner;
                                                OppoManager.instance.oppoMiniIconsGuessLike = res.guessLike;
                                                PlayerDataMgr.getInstance().GetData();
                                                resolve();
                                            }));
                                        }
                                        else {
                                            GDataMgr.getInstance().uinfo.openId = GDataMgr.getInstance().uinfo.sessionKey = DeviceUtil.getDeviceNo();
                                            PlayerDataMgr.getInstance().GetData();
                                            resolve();
                                        }
                                        _a.label = 11;
                                    case 11: return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        GameManager.prototype.checkOppoOpenidOnNoLogin = function () {
            var baseinfoKey = '';
            var baseInfArr = [];
            for (var i = 0; i < localStorage.length; i++) {
                var info = localStorage.key(i);
                if (info.indexOf("BaseData") > -1) {
                    baseInfArr.push(info);
                }
            }
            var len = baseInfArr.length;
            if (len == 0) {
                return;
            }
            var devo = DeviceUtil.getDeviceNo();
            if (len == 1) {
                baseinfoKey = baseInfArr[0];
                var openId = baseinfoKey.split("BaseData")[0];
                GDataMgr.getInstance().uinfo.openId = openId;
            }
            else {
                for (var i_1 = 0; i_1 < len; i_1++) {
                    var info = baseInfArr[i_1];
                    if (info.indexOf("BaseData") > -1 && info.indexOf(devo) == -1 && info !== "BaseData") {
                        baseinfoKey = info;
                        var openId = baseinfoKey.split("BaseData")[0];
                        GDataMgr.getInstance().uinfo.openId = openId;
                        return;
                    }
                }
                for (var i_2 = 0; i_2 < len; i_2++) {
                    var info = baseInfArr[i_2];
                    if (info.indexOf("BaseData") > -1 && info.indexOf(devo) == -1) {
                        baseinfoKey = info;
                        var openId = baseinfoKey.split("BaseData")[0];
                        GDataMgr.getInstance().uinfo.openId = openId;
                        return;
                    }
                }
                for (var i_3 = 0; i_3 < len; i_3++) {
                    var info = baseInfArr[i_3];
                    if (info.indexOf("BaseData") > -1) {
                        baseinfoKey = info;
                        var openId = baseinfoKey.split("BaseData")[0];
                        GDataMgr.getInstance().uinfo.openId = openId;
                        return;
                    }
                }
            }
        };
        GameManager.prototype.wxEnterGame = function (stRes) {
            return __awaiter(this, void 0, void 0, function () {
                var res, userinfo, obj, scene;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            res = stRes;
                            userinfo = null;
                            return [4, MiniGameMgr.instance.initTemp()];
                        case 1:
                            userinfo = _a.sent();
                            if (userinfo == null) {
                                userinfo = { nickName: '', avatarUrl: '', gender: '' };
                            }
                            obj = GDataMgr.getInstance().eGInfos;
                            scene = obj.query.scene == undefined ? null : obj.query.scene;
                            PlatformDY.getOpenidAndAuthorzia({
                                code: res, nickName: userinfo.nickName, avatarUrl: userinfo.avatarUrl, gender: userinfo.gender, scene: decodeURIComponent(scene)
                            }).then(function (dyUser) {
                                GDataMgr.getInstance().uinfo.openId = dyUser.openid;
                                var strOpenIdOther = GDataMgr.getInstance().eGInfos.query["openid"];
                                console.log("strOpenIdOther = ", strOpenIdOther);
                                if (strOpenIdOther && strOpenIdOther != "") {
                                    InviteMgr.getInstance().checkInvite();
                                    console.log("createUserInfoButton 用户信息 : ", GDataMgr.getInstance().uinfo);
                                }
                                _this.initDyGame();
                                PlayerDataMgr.getInstance().GetData();
                            });
                            return [2];
                    }
                });
            });
        };
        GameManager.prototype.initDyGame = function () {
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.getGameList().then(function () {
                    GDataMgr.getInstance().weCatMoreInfo = [];
                    var nLen = PlatformDY.gameListInfos.length;
                    for (var i = 0; i < nLen; ++i) {
                        var stData = new MGIndex();
                        stData.ad_id = PlatformDY.gameListInfos[i].id;
                        stData.ad_img = PlatformDY.gameListInfos[i].img;
                        stData.name = PlatformDY.gameListInfos[i].title;
                        stData.ad_appid = PlatformDY.gameListInfos[i].appid;
                        stData.url = PlatformDY.gameListInfos[i].url;
                        GDataMgr.getInstance().weCatMoreInfo.push(stData);
                    }
                    console.log("GameData.getInstance().weCatMiniIconsInfo = ", GDataMgr.getInstance().weCatMoreInfo);
                });
            }
            else {
                this.loadMoreGame();
            }
        };
        GameManager.prototype.loadMoreGame = function () {
            if (BaseConst.infos.gameInfo.isDY) ;
            else {
                if (DeviceUtil.isWXMiniGame()) {
                    Laya.loader.load("configs/wxmoregame.json?v=" + Math.random(), Laya.Handler.create(this, function (res) {
                        if (typeof (res) == "string") {
                            res = JSON.parse(res);
                        }
                        GDataMgr.getInstance().weCatMoreInfo = [];
                        for (var i = 0, len = res.iconList.length; i < len; i++) {
                            var stData = new MoreGameIndex();
                            stData.ad_img = "https://package.32yx.com/ecy_game_small/laya/girl/wx_res/moregame/" + res.iconList[i].ad_img;
                            stData.name = res.iconList[i].name;
                            stData.ad_appid = res.iconList[i].ad_appid;
                            stData.ad_id = res.iconList[i].ad_id;
                            stData.url = "";
                            GDataMgr.getInstance().weCatMoreInfo.push(stData);
                        }
                    }));
                }
            }
        };
        GameManager.prototype.goToDuyou = function (_nIndex) {
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.clickGame(GDataMgr.getInstance().weCatMoreInfo[_nIndex].ad_id);
            }
            var objData = {
                appId: GDataMgr.getInstance().weCatMoreInfo[_nIndex].ad_appid,
                path: GDataMgr.getInstance().weCatMoreInfo[_nIndex].url,
                success: function () {
                    console.log("navigateToMiniProgram success!");
                    if (BaseConst.infos.gameInfo.isDY) {
                        console.log("self.nIndex = ", _nIndex);
                        PlatformDY.toGame(GDataMgr.getInstance().weCatMoreInfo[_nIndex].ad_id);
                    }
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail e =", e);
                    if (DeviceUtil.isWXMiniGame()) {
                        ViewManager.getInstance().showView(MoreGameRandomGameBox713);
                    }
                }
            };
            platform.navigateToMiniProgram(objData);
        };
        return GameManager;
    }());
    window['GameManager'] = GameManager;

    var ConfigMgr = (function () {
        function ConfigMgr() {
            this.mDialogB = {};
        }
        ConfigMgr.getInstance = function () {
            if (!ConfigMgr.instance) {
                ConfigMgr.instance = new ConfigMgr();
            }
            return ConfigMgr.instance;
        };
        ConfigMgr.prototype.getSDA = function () {
            return ConfigMgr.instance.aSData;
        };
        ConfigMgr.prototype.getSDBSID = function (nIndex) {
            if (nIndex < 0 || nIndex >= ConfigMgr.instance.aSData.length) {
                return null;
            }
            return ConfigMgr.instance.aSData[nIndex];
        };
        ConfigMgr.prototype.getGCDBID = function (nID) {
            if (nID > ConfigMgr.instance.arGCig.length || nID <= 0) {
                return null;
            }
            var nRealID = nID - 1;
            return ConfigMgr.instance.arGCig[nRealID];
        };
        ConfigMgr.prototype.getTBCL = function () {
            var nRealIndex = PlayerDataMgr.getInstance().getCurGuanQia();
            if (nRealIndex < 0 || ConfigMgr.instance.aLPData.length < 0) {
                return 0;
            }
            nRealIndex = nRealIndex >= ConfigMgr.instance.aLPData.length ? ConfigMgr.instance.aLPData.length - 1 : nRealIndex;
            return ConfigMgr.instance.aLPData[nRealIndex].nPs;
        };
        ConfigMgr.prototype.getCSRBCL = function () {
            var nRealIndex = PlayerDataMgr.getInstance().getCurGuanQia();
            if (nRealIndex < 0 || ConfigMgr.instance.aLPData.length < 0) {
                return 0;
            }
            nRealIndex = nRealIndex >= ConfigMgr.instance.aLPData.length ? ConfigMgr.instance.aLPData.length - 1 : nRealIndex;
            return ConfigMgr.instance.aLPData[nRealIndex].nPs;
        };
        ConfigMgr.prototype.getDialIf = function (nDialogID) {
            return ConfigMgr.instance.mDialogB[nDialogID];
        };
        ConfigMgr.prototype.initConfs = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var self, uPf, _a, _b, _c, _d, nLen, i, _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        self = ConfigMgr.getInstance();
                                        uPf = "resource/assets/config/";
                                        console.log("开始加载配置");
                                        _a = self;
                                        return [4, self.loadConfig(uPf + 'GameConfig.json')];
                                    case 1:
                                        _a.arGCig = _f.sent();
                                        _b = self;
                                        return [4, self.loadConfig(uPf + 'SignConfig.json')];
                                    case 2:
                                        _b.aSData = _f.sent();
                                        _c = self;
                                        return [4, self.loadConfig(uPf + 'LevelPsInfo.json')];
                                    case 3:
                                        _c.aLPData = _f.sent();
                                        _d = self;
                                        return [4, self.loadConfig(uPf + 'DialogBox.json')];
                                    case 4:
                                        _d.aDBIdx = _f.sent();
                                        nLen = self.aDBIdx.length;
                                        for (i = 0; i < nLen; ++i) {
                                            self.mDialogB[self.aDBIdx[i].id] = self.aDBIdx[i];
                                        }
                                        _e = self;
                                        return [4, self.loadConfig(uPf + 'InviteConfig.json')];
                                    case 5:
                                        _e.aICfig = _f.sent();
                                        resolve();
                                        return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        ConfigMgr.prototype.loadConfig = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var getObj;
                var _this = this;
                return __generator(this, function (_a) {
                    url += GameManager.instance.randomTime;
                    getObj = function (jStr) {
                        if (typeof (jStr) == "string") {
                            return JSON.parse(jStr);
                        }
                        else {
                            return jStr;
                        }
                    };
                    return [2, new Promise(function (resolve) {
                            Laya.loader.load(url, Laya.Handler.create(_this, function (json) {
                                resolve(getObj(json));
                            }));
                        })];
                });
            });
        };
        ConfigMgr.prototype.getYQConfI = function () {
            return ConfigMgr.instance.aICfig;
        };
        ConfigMgr.prototype.isWeCatMiniGame = function () {
            return DeviceUtil.isWXMiniGame();
        };
        return ConfigMgr;
    }());

    var PlayerDataBaseInfo = (function () {
        function PlayerDataBaseInfo() {
            this.inviteId = [];
            this.nMaxLevel = 0;
            this.nCurLevel = 0;
            this.nCurIndex = 0;
            this.nSignTimeLast = 0;
            this.nSignIndex = 0;
            this.nGlodCount = 0;
            this.nPS = 5;
            this.nPsTime = 0;
        }
        return PlayerDataBaseInfo;
    }());
    var DYLogData = (function () {
        function DYLogData() {
            this.aryIndex = [];
        }
        return DYLogData;
    }());
    var GDNewOperData713 = (function () {
        function GDNewOperData713() {
            this.nSecond = 0;
            this.nRecordTime = 0;
        }
        return GDNewOperData713;
    }());
    var OperData0807 = (function () {
        function OperData0807() {
            this.bSpecial = false;
        }
        return OperData0807;
    }());
    var PlayerDataMgr = (function () {
        function PlayerDataMgr() {
            this.nMaxLevelCount = 14;
            this.nMaxLevelCountShow = 100;
            this.bEnterGameFromGameHome = false;
            this.nGotoLevel = 0;
            this.stPlayerDataBase = new PlayerDataBaseInfo();
            this.stDYLogData = new DYLogData();
            this.nPsRecoveryTime = 0;
            this.nPsTimeCountDown = 0;
            this.strUpDownTime = "";
            this.bIsNewPlayer = false;
            this.stGDNewOperData713 = new GDNewOperData713();
            this.stOperData0807 = new OperData0807();
        }
        PlayerDataMgr.getInstance = function () {
            if (!PlayerDataMgr.instance) {
                PlayerDataMgr.instance = new PlayerDataMgr();
            }
            return PlayerDataMgr.instance;
        };
        PlayerDataMgr.prototype.getCurGuanQia = function () {
            return this.stPlayerDataBase.nCurLevel;
        };
        PlayerDataMgr.prototype.addGuanQia = function () {
            this.stPlayerDataBase.nCurLevel += 1;
            this.stPlayerDataBase.nCurLevel = this.stPlayerDataBase.nCurLevel < this.nMaxLevelCount ? this.stPlayerDataBase.nCurLevel : this.nMaxLevelCount - 1;
            if (this.stPlayerDataBase.nMaxLevel < this.stPlayerDataBase.nCurLevel) {
                this.stPlayerDataBase.nMaxLevel = this.stPlayerDataBase.nCurLevel;
            }
            this.SaveData();
        };
        PlayerDataMgr.prototype.getCurGuanQiaMax = function () {
            return this.stPlayerDataBase.nMaxLevel;
        };
        PlayerDataMgr.prototype.setCurGuanQia = function (nLevel) {
            this.stPlayerDataBase.nCurLevel = nLevel;
        };
        PlayerDataMgr.prototype.isMaxLevel = function () {
            this.stPlayerDataBase.nCurLevel = this.stPlayerDataBase.nMaxLevel = this.nMaxLevelCount;
            this.SaveData();
        };
        PlayerDataMgr.prototype.getCurGuanQiaToChallenge = function () {
            var nRealData = this.stPlayerDataBase.nCurLevel + 1;
            if (nRealData > this.nMaxLevelCount) {
                nRealData = this.nMaxLevelCount;
            }
            console.log("获得当前应该挑战的关卡  ", this.stPlayerDataBase.nCurLevel, "  ", nRealData);
            return nRealData;
        };
        PlayerDataMgr.prototype.SaveData = function () {
            var str = JSON.stringify(this.stPlayerDataBase);
            Laya.LocalStorage.setItem(GDataMgr.getInstance().uinfo.openId + "BaseData", str);
            str = JSON.stringify(this.stGDNewOperData713);
            Laya.LocalStorage.setItem(GDataMgr.getInstance().uinfo.openId + "stNewOperData713", str);
            var strNewOper0807 = JSON.stringify(this.stOperData0807);
            Laya.LocalStorage.setItem("OperData0807" + GDataMgr.getInstance().uinfo.openId, strNewOper0807);
        };
        PlayerDataMgr.prototype.getLevelToChangeMaxGuanQia = function () {
            var nRealData = this.stPlayerDataBase.nMaxLevel + 1;
            if (nRealData > this.nMaxLevelCount) {
                nRealData = this.nMaxLevelCount;
            }
            return nRealData;
        };
        PlayerDataMgr.prototype.GetData = function () {
            var str = Laya.LocalStorage.getItem(GDataMgr.getInstance().uinfo.openId + "BaseData");
            console.log(">>>>>>>>>>>>", str);
            if (str) {
                try {
                    this.stPlayerDataBase = JSON.parse(str);
                    if (this.stPlayerDataBase.nCurLevel == null) {
                        this.bIsNewPlayer = true;
                        this.stPlayerDataBase = new PlayerDataBaseInfo();
                        PlayerDataMgr.bGlobEnterGame = false;
                    }
                    else {
                        this.bIsNewPlayer = false;
                        PlayerDataMgr.bGlobEnterGame = true;
                    }
                }
                catch (e) {
                    PlayerDataMgr.bGlobEnterGame = false;
                    this.bIsNewPlayer = true;
                    this.stPlayerDataBase = new PlayerDataBaseInfo();
                }
            }
            else {
                this.bIsNewPlayer = true;
                PlayerDataMgr.bGlobEnterGame = false;
            }
            str = Laya.LocalStorage.getItem(GDataMgr.getInstance().uinfo.openId + "stNewOperData713");
            if (str) {
                try {
                    this.stGDNewOperData713 = JSON.parse(str);
                    this.stGDNewOperData713.nSecond += 1;
                }
                catch (e) {
                    console.log("error player data : ", e);
                    this.stGDNewOperData713 = new GDNewOperData713();
                }
            }
            if (this.stGDNewOperData713.nRecordTime == 0) {
                this.stGDNewOperData713.nRecordTime = new Date().getTime();
            }
            var nCurTime = new Date().getTime();
            if (!Utils.judgeIsOnTheSameDay(this.stGDNewOperData713.nRecordTime, nCurTime)) {
                this.stGDNewOperData713.nSecond = 1;
                this.stGDNewOperData713.nRecordTime = nCurTime;
            }
            var strOperData0807 = Laya.LocalStorage.getItem("OperData0807" + GDataMgr.getInstance().uinfo.openId);
            if (strOperData0807) {
                this.stOperData0807 = JSON.parse(strOperData0807);
            }
            else {
                this.stOperData0807 = new OperData0807();
            }
        };
        PlayerDataMgr.prototype.isSecondEnterGame = function () {
            return this.stGDNewOperData713.nSecond >= 2;
        };
        PlayerDataMgr.prototype.refreshOffLinePS = function () {
            this.addPowerAboutOffLine();
            this.openPowerRecoveryTime();
        };
        PlayerDataMgr.prototype.getPowerLastTime = function () {
            return this.strUpDownTime;
        };
        PlayerDataMgr.prototype.addPowerAboutOffLine = function () {
            if (BaseConst.infos.gameInfo.openalllevel == 1) {
                this.stPlayerDataBase.nCurLevel = this.nMaxLevelCount - 1;
                this.stPlayerDataBase.nMaxLevel = this.nMaxLevelCount - 1;
                this.bIsNewPlayer = false;
            }
            if (this.stPlayerDataBase.nPsTime == 0) {
                return;
            }
            var nMaxPs = 10;
            var stGameConfig = ConfigMgr.getInstance().getGCDBID(1);
            if (stGameConfig) {
                nMaxPs = parseInt(stGameConfig.strValue);
            }
            if (this.stPlayerDataBase.nPS >= nMaxPs) {
                return;
            }
            stGameConfig = ConfigMgr.getInstance().getGCDBID(2);
            if (stGameConfig) {
                var nAddPsPerTime = parseInt(stGameConfig.strValue);
                if (nAddPsPerTime == 0) {
                    return;
                }
                var nCurtTime = GameLogicProcessMgr.GetCurTimea();
                var nTimeOverFlow = nCurtTime - this.stPlayerDataBase.nPsTime;
                var nPsAdd = Math.floor(nTimeOverFlow / nAddPsPerTime);
                this.stPlayerDataBase.nPS += nPsAdd;
                nTimeOverFlow = nTimeOverFlow % nAddPsPerTime;
                this.stPlayerDataBase.nPsTime = nCurtTime - nTimeOverFlow;
                if (this.stPlayerDataBase.nPS >= nMaxPs) {
                    this.stPlayerDataBase.nPS = nMaxPs;
                    this.stPlayerDataBase.nPsTime = 0;
                }
                this.SaveData();
            }
        };
        PlayerDataMgr.prototype.subTimeAndRefreshPowerRecoveryTimeView = function () {
            if (!GameLogicProcessMgr.getInstance().PSRecoveryOpena) {
                return;
            }
            if (PlayerDataMgr.nTimeHidSec != 0) {
                PlayerDataMgr.nTimeHidSec = PlayerDataMgr.nTimeHidSec - PlayerDataMgr.nTimeHidSec % 1000;
            }
            this.nPsTimeCountDown -= 1000 + PlayerDataMgr.nTimeHidSec;
            PlayerDataMgr.nTimeHidSec = 0;
            this.refreshPowerRecoveryTimeView(this.nPsTimeCountDown);
        };
        PlayerDataMgr.prototype.refreshPowerRecoveryTimeView = function (nTime) {
            var nLastTime = nTime;
            nLastTime = nLastTime < 0 ? 0 : nLastTime;
            nLastTime = Math.floor(nLastTime / 1000);
            var nMinTotal = Math.floor(nLastTime / 60);
            var nMinTen = Math.floor(nMinTotal / 10);
            var nSecTotal = nLastTime % 60;
            var nSecTen = Math.floor(nSecTotal / 10);
            var nSecBit = nSecTotal % 10;
            this.strUpDownTime = nMinTen.toString() + nMinTotal.toString() + ":" + nSecTen.toString() + nSecBit.toString();
            EventMgr.getInstance().sendEvent(GEvent.O_SP_UD_T);
            if (nTime < 0) {
                this.nPsTimeCountDown = 0;
                GameLogicProcessMgr.getInstance().PSRecoveryOpena = false;
                this.stPlayerDataBase.nPsTime = 0;
                Laya.timer.clear(this, this.refreshPowerRecoveryTimeView);
                this.AddProp(PType.e_GType_Sp, 1);
                return;
            }
        };
        PlayerDataMgr.prototype.openPowerRecoveryTime = function () {
            if (this.nPsRecoveryTime == 0) {
                var stGameConfig_1 = ConfigMgr.getInstance().getGCDBID(2);
                if (!stGameConfig_1) {
                    return;
                }
                this.nPsRecoveryTime = parseInt(stGameConfig_1.strValue);
            }
            var nMaxPs = 10;
            var stGameConfig = ConfigMgr.getInstance().getGCDBID(1);
            if (stGameConfig) {
                nMaxPs = parseInt(stGameConfig.strValue);
            }
            if (this.stPlayerDataBase.nPS >= nMaxPs) {
                Laya.timer.clear(this, this.subTimeAndRefreshPowerRecoveryTimeView);
                this.stPlayerDataBase.nPsTime = 0;
                GameLogicProcessMgr.getInstance().PSRecoveryOpena = false;
            }
            else {
                if (!GameLogicProcessMgr.getInstance().PSRecoveryOpena) {
                    GameLogicProcessMgr.getInstance().PSRecoveryOpena = true;
                    var nCurTime = GameLogicProcessMgr.GetCurTimea();
                    if (this.stPlayerDataBase.nPsTime == 0) {
                        this.stPlayerDataBase.nPsTime = nCurTime;
                    }
                    this.nPsTimeCountDown = this.nPsRecoveryTime - (nCurTime - this.stPlayerDataBase.nPsTime);
                    this.refreshPowerRecoveryTimeView(this.nPsTimeCountDown);
                    Laya.timer.loop(1000, this, this.subTimeAndRefreshPowerRecoveryTimeView);
                    this.SaveData();
                }
            }
        };
        PlayerDataMgr.prototype.getGuanQiaNumMakeOver = function () {
            return this.nMaxLevelCount;
        };
        PlayerDataMgr.prototype.isSigned = function () {
            var nCurTime = GameLogicProcessMgr.GetCurTimea();
            if (Utils.judgeIsOnTheSameDay(PlayerDataMgr.getInstance().stPlayerDataBase.nSignTimeLast, nCurTime)) {
                return false;
            }
            else {
                return true;
            }
        };
        PlayerDataMgr.prototype.checkSkinStatus = function (nSkinID) {
            var nState = SStatus.e_SState_NO;
            if (nSkinID == 1) {
                nState = SStatus.e_SState_H;
            }
            else if (nSkinID == 2) {
                nState = SStatus.e_SState_NO;
            }
            return nState;
        };
        PlayerDataMgr.prototype.initPower = function () {
            if (!this.bIsNewPlayer) {
                return;
            }
            var stGameConfig = ConfigMgr.getInstance().getGCDBID(15);
            if (stGameConfig) {
                this.stPlayerDataBase.nPS = parseInt(stGameConfig.strValue);
            }
            stGameConfig = ConfigMgr.getInstance().getGCDBID(16);
            if (stGameConfig) {
                this.stPlayerDataBase.nGlodCount = parseInt(stGameConfig.strValue);
            }
        };
        PlayerDataMgr.prototype.checkDyLogIndexRecorded = function (nIndex) {
            for (var i = 0, len = this.stDYLogData.aryIndex.length; i < len; ++i) {
                if (nIndex == this.stDYLogData.aryIndex[i]) {
                    return true;
                }
            }
            return false;
        };
        PlayerDataMgr.prototype.recordDyLogIndex = function (nIndex) {
            this.stDYLogData.aryIndex.push(nIndex);
        };
        PlayerDataMgr.prototype.ttMiniGameArraignmentSpecialOper = function () {
        };
        PlayerDataMgr.prototype.CheckProp = function (nType, nCount) {
            if (nType == PType.e_GType_G) {
                return this.stPlayerDataBase.nGlodCount >= nCount;
            }
            else if (nType == PType.e_GType_Sp) {
                return this.stPlayerDataBase.nPS >= nCount;
            }
        };
        PlayerDataMgr.prototype.AddProp = function (nType, nCount) {
            if (nType == PType.e_GType_G) {
                this.stPlayerDataBase.nGlodCount += nCount;
                EventMgr.getInstance().sendEvent(GEvent.O_G_CG);
            }
            else if (nType == PType.e_GType_Sp) {
                this.stPlayerDataBase.nPS += nCount;
                var nMax = 99;
                var stGameConfig = ConfigMgr.getInstance().getGCDBID(4);
                if (stGameConfig) {
                    nMax = parseInt(stGameConfig.strValue);
                }
                if (this.stPlayerDataBase.nPS > nMax) {
                    TipsManager.getInstance().showDefaultTips("体力已满");
                    this.stPlayerDataBase.nPS = nMax;
                }
                EventMgr.getInstance().sendEvent(GEvent.O_PS_CG);
                this.openPowerRecoveryTime();
            }
            this.SaveData();
        };
        PlayerDataMgr.prototype.subProp = function (nType, nCount) {
            if (nType == PType.e_GType_G) {
                this.stPlayerDataBase.nGlodCount -= nCount;
                this.stPlayerDataBase.nGlodCount = this.stPlayerDataBase.nGlodCount < 0 ? 0 : this.stPlayerDataBase.nGlodCount;
                EventMgr.getInstance().sendEvent(GEvent.O_G_CG);
            }
            else if (nType == PType.e_GType_Sp) {
                this.stPlayerDataBase.nPS -= nCount;
                this.stPlayerDataBase.nPS = this.stPlayerDataBase.nPS < 0 ? 0 : this.stPlayerDataBase.nPS;
                EventMgr.getInstance().sendEvent(GEvent.O_PS_CG);
                this.openPowerRecoveryTime();
            }
            this.SaveData();
        };
        PlayerDataMgr.prototype.showTips = function (str) {
            TipsManager.getInstance().tipLayer.removeChildren();
            var tip = Laya.Pool.getItemByClass("BaseTips", BaseTips);
            tip.init(str, TipsManager.getInstance().showDefualtTipsFontSize);
            tip.y = Laya.stage.height / 2;
            TipsManager.getInstance().showTipInstance(tip);
            Laya.Tween.to(tip, { y: tip.y - 100 }, 1000, null, Laya.Handler.create(this, function () {
                tip.removeSelf();
            }));
            Laya.timer.once(1000, this, function () {
                tip.removeSelf();
            });
        };
        PlayerDataMgr.prototype.checkIsSpecial = function () {
            return this.stOperData0807.bSpecial;
        };
        PlayerDataMgr.nTimeHidSec = 0;
        PlayerDataMgr.nHidTime = 0;
        PlayerDataMgr.bGlobEnterGame = true;
        return PlayerDataMgr;
    }());

    var GameBufferLoad = (function (_super) {
        __extends(GameBufferLoad, _super);
        function GameBufferLoad() {
            var _this = _super.call(this) || this;
            _this.className_key = "GameBufferLoading";
            _this.bg_img_res = "game_panel_db_png";
            _this.width = Laya.stage.width;
            _this.height = Laya.stage.height;
            _this.init();
            return _this;
        }
        GameBufferLoad.prototype.onShow = function () {
            if (this.img_circle) {
                this.img_circle.rotation = 0;
                Laya.Tween.to(this.img_circle, { rotation: 360 }, 500, null, Laya.Handler.create(this, this.onShow));
            }
        };
        GameBufferLoad.prototype.onHide = function () {
            if (this.img_circle) {
                Laya.Tween.clearAll(this.img_circle);
            }
        };
        GameBufferLoad.prototype.init = function () {
            if (!this.bg_img) {
                this.bg_img = new Laya.Image(ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(this.bg_img_res).url));
                this.bg_img.sizeGrid = "3,3,2,2";
                this.bg_img.width = this.width;
                this.bg_img.height = this.height;
                this.bg_img.alpha = 0.7;
                this.addChild(this.bg_img);
                this.mouseEnabled = true;
                this.bg_img.mouseEnabled = true;
                this.bg_img.mouseThrough = false;
            }
            if (!this.img_circle) {
                this.img_circle = new Laya.Image();
                this.img_circle.skin = "resource/assets/img/loading_circle.png";
                this.img_circle.anchorX = this.img_circle.anchorY = 0.5;
                this.img_circle.centerX = this.img_circle.centerY = 0;
                this.addChild(this.img_circle);
            }
        };
        GameBufferLoad.prototype.setLabelInfo = function (info) {
        };
        return GameBufferLoad;
    }(Laya.Sprite));

    var CommonView = (function (_super) {
        __extends(CommonView, _super);
        function CommonView() {
            var _this = _super.call(this) || this;
            _this.className_key = "CommonView";
            _this.skin = "game/uiView/pop/CommonView.json";
            _this.width = 600;
            _this.height = 200;
            return _this;
        }
        CommonView.prototype.onAddStage = function () {
            if (!this.isCreate) {
                return;
            }
            this.img_video.visible = this.img_video1.visible = false;
            this.goldBtn.visible = false;
            if (DeviceUtil.isVIVOMiniGame() || DeviceUtil.isOPPOMiniGame()) {
                this.img_video.visible = this.img_video1.visible = true;
                this.goldBtn.visible = true;
            }
            this._nPsAdd = 5;
            var stGameConfigADP = ConfigMgr.getInstance().getGCDBID(3);
            if (stGameConfigADP) {
                this._nPsAdd = parseInt(stGameConfigADP.strValue);
            }
            this.refreshPsValue();
            this.refreshGoldValue();
            this.refreshTime();
            this.addEventUpdateView();
        };
        CommonView.prototype.addEventUpdateView = function () {
            this.powerBg.on(Laya.Event.CLICK, this, this.openAddSpView);
            if (DeviceUtil.isOPPOMiniGame() || DeviceUtil.isVIVOMiniGame()) {
                this.img_gold && this.img_gold.on(Laya.Event.CLICK, this, this.onAddGold);
            }
            EventMgr.getInstance().addEvent(GEvent.O_PS_CG, this, this.refreshPsValue);
            EventMgr.getInstance().addEvent(GEvent.O_G_CG, this, this.refreshGoldValue);
            EventMgr.getInstance().addEvent(GEvent.O_SP_UD_T, this, this.refreshTimeTxtInfo);
        };
        CommonView.prototype.addBtEvent = function () {
            this.powerBtn.visible = true;
            this.powerBg && this.powerBg.on(Laya.Event.CLICK, this, this.openAddSpView);
            if (DeviceUtil.isOPPOMiniGame() || DeviceUtil.isVIVOMiniGame()) {
                this.img_gold && this.img_gold.on(Laya.Event.CLICK, this, this.onAddGold);
                this.goldBtn.visible = this.img_video.visible = this.img_video1.visible = true;
            }
        };
        CommonView.prototype.onAddGold = function () {
            SoundMgr.getInstance().playEffect("button", 1);
            MiniGameMgr.instance.playVideoAd({
                gameConstKey: 'freeGold',
                successFun: function () {
                    PlayerDataMgr.getInstance().AddProp(PType.e_GType_G, 200);
                }
            });
        };
        CommonView.prototype.openAddSpView = function () {
            var _this = this;
            if (DeviceUtil.isOPPOMiniGame() || DeviceUtil.isVIVOMiniGame()) {
                MiniGameMgr.instance.playVideoAd({
                    gameConstKey: 'freeScene',
                    successFun: function () {
                        PlayerDataMgr.getInstance().AddProp(PType.e_GType_Sp, _this._nPsAdd);
                    }
                });
                return;
            }
            SoundMgr.getInstance().playEffect("button", 1);
            ViewChangeMgr.getInstance().showBufLoadingView();
            ResUtil.getIntance().loadGroups(["adsp"], function () {
                ViewManager.getInstance().showView(AddPowerView);
                ViewChangeMgr.getInstance().hideBufLoadingView();
            });
        };
        CommonView.prototype.refreshPsValue = function () {
            if (!this.isCreate) {
                return;
            }
            this.sptext.text = PlayerDataMgr.getInstance().stPlayerDataBase.nPS.toString();
            this.refreshTime();
        };
        CommonView.prototype.refreshGoldValue = function () {
            if (!this.isCreate) {
                return;
            }
            BitmapLabelUtils.setLabel(this.goldCount, PlayerDataMgr.getInstance().stPlayerDataBase.nGlodCount.toString(), "resource/assets/img/common/gameinterface_number1/gameinterface_number1_", 0, ".png", "left");
        };
        CommonView.prototype.refreshTime = function () {
            var numMaxTime = 0;
            var objData = ConfigMgr.getInstance().getGCDBID(1);
            if (objData) {
                numMaxTime = parseInt(objData.strValue);
            }
            if (numMaxTime <= PlayerDataMgr.getInstance().stPlayerDataBase.nPS) {
                this.imageSpMax.visible = true;
                this.labelTime.visible = false;
                this.labelTime.text = "";
            }
            else {
                this.imageSpMax.visible = false;
                this.labelTime.visible = true;
            }
        };
        CommonView.prototype.refreshTimeTxtInfo = function () {
            this.imageSpMax.visible = false;
            this.labelTime.visible = true;
            this.labelTime.text = PlayerDataMgr.getInstance().getPowerLastTime();
        };
        CommonView.prototype.removeBtEvent = function () {
            this.powerBtn.visible = false;
            this.goldBtn.visible = false;
            this.powerBg && this.powerBg.off(Laya.Event.CLICK, this, this.openAddSpView);
            if (DeviceUtil.isOPPOMiniGame() || DeviceUtil.isVIVOMiniGame()) {
                this.img_video.visible = this.img_video1.visible = false;
                this.img_gold && this.img_gold.off(Laya.Event.CLICK, this, this.onAddGold);
            }
        };
        CommonView.prototype.removeEnentUpdateView = function () {
            this.powerBg.off(Laya.Event.CLICK, this, this.openAddSpView);
            if (DeviceUtil.isOPPOMiniGame() || DeviceUtil.isVIVOMiniGame()) {
                this.img_gold && this.img_gold.off(Laya.Event.CLICK, this, this.onAddGold);
            }
            EventMgr.getInstance().removeEvent(GEvent.O_PS_CG, this, this.refreshPsValue);
            EventMgr.getInstance().removeEvent(GEvent.O_G_CG, this, this.refreshGoldValue);
            EventMgr.getInstance().removeEvent(GEvent.O_SP_UD_T, this, this.refreshTimeTxtInfo);
        };
        CommonView.prototype.onRemoved = function () {
            this.removeEnentUpdateView();
        };
        return CommonView;
    }(BaseUIScene));

    var ShouMoreGameItem = (function (_super) {
        __extends(ShouMoreGameItem, _super);
        function ShouMoreGameItem(data, nWith, nHeight) {
            var _this = _super.call(this) || this;
            _this.className_key = "ShouMoreGameItem";
            _this.skin = "game/uiView/wecat/ShowMoreGameInfoItem.json";
            _this.nIndex = data;
            _this.width = nWith;
            _this.height = nHeight;
            _this.pivotX = _this.width / 2;
            _this.pivotY = _this.height / 2;
            _this.bAni = true;
            return _this;
        }
        ShouMoreGameItem.prototype.onAddStage = function () {
            this.addEvent();
            this.initView();
        };
        ShouMoreGameItem.prototype.onRemoved = function () {
            this.removeEvent();
            Laya.Tween.clearAll(this);
        };
        ShouMoreGameItem.prototype.setData = function (data) {
            this.removeEvent();
            this.addEvent();
            this.nIndex = data;
            this.initView();
        };
        ShouMoreGameItem.prototype.setAni = function (b) {
            this.bAni = b;
        };
        ShouMoreGameItem.prototype.initView = function () {
            if (this.nIndex < 0 || this.nIndex >= GDataMgr.getInstance().weCatMoreInfo.length) {
                this.nIndex = GDataMgr.getInstance().weCatMoreInfo.length - 1;
                if (this.nIndex < 0)
                    return;
            }
            var stData = GDataMgr.getInstance().weCatMoreInfo;
            var stDataIndex = GDataMgr.getInstance().weCatMoreInfo[this.nIndex];
            this.lable_name.text = GDataMgr.getInstance().weCatMoreInfo[this.nIndex].name;
            this.image_icon.skin = GDataMgr.getInstance().weCatMoreInfo[this.nIndex].ad_img;
            this.stGameIndex = GDataMgr.getInstance().weCatMoreInfo[this.nIndex];
            this.startOperAni();
        };
        ShouMoreGameItem.prototype.addEvent = function () {
            this.on(Laya.Event.CLICK, this, this.gotoGame);
        };
        ShouMoreGameItem.prototype.removeEvent = function () {
            this.off(Laya.Event.CLICK, this, this.gotoGame);
        };
        ShouMoreGameItem.prototype.gotoGame = function () {
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.clickGame(this.stGameIndex.ad_id);
            }
            var self = this;
            var data = {
                appId: this.stGameIndex.ad_appid,
                path: this.stGameIndex.url,
                success: function () {
                    console.log("navigateToMiniProgram success!");
                    if (BaseConst.infos.gameInfo.isDY) {
                        console.log("self.nIndex = ", self.nIndex);
                        PlatformDY.toGame(self.stGameIndex.ad_id);
                    }
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail e =", e);
                    if (ConfigMgr.getInstance().isWeCatMiniGame()) {
                        ViewManager.getInstance().showView(MoreGameRandomGameBox713);
                    }
                }
            };
            platform.navigateToMiniProgram(data);
        };
        ShouMoreGameItem.prototype.startOperAni = function () {
            if (!this.bAni) {
                return;
            }
            this.operAni();
        };
        ShouMoreGameItem.prototype.operAni = function () {
            var _this = this;
            Laya.Tween.clearAll(this);
            Laya.Tween.to(this, { rotation: -5 }, 500, null, Laya.Handler.create(this, function (args) {
                Laya.Tween.to(_this, { rotation: 5 }, 500, null, Laya.Handler.create(_this, function (args) {
                    Laya.timer.once(0, _this, _this.operAni);
                }));
            }));
        };
        return ShouMoreGameItem;
    }(BaseUIScene));

    var ShouMoreGameInView = (function (_super) {
        __extends(ShouMoreGameInView, _super);
        function ShouMoreGameInView() {
            var _this = _super.call(this) || this;
            _this.className_key = "ShouMoreGameInView";
            _this.skin = "game/uiView/wecat/ShowMoreGameInfoInView.json";
            _this.image_hand = null;
            _this.bAni = true;
            _this.height = 860;
            _this.width = 800;
            return _this;
        }
        ShouMoreGameInView.prototype.onAddStage = function () {
            this.initView();
        };
        Object.defineProperty(ShouMoreGameInView.prototype, "ani", {
            set: function (b) {
                this.bAni = b;
            },
            enumerable: true,
            configurable: true
        });
        ShouMoreGameInView.prototype.initView = function () {
            this.refreshWeCatMoreGame();
        };
        ShouMoreGameInView.prototype.refreshWeCatMoreGame = function () {
            var nXAddTemp = 425;
            var nYAddTemp = 450;
            var aryInfo = [];
            var nCount = 2;
            aryInfo = this.getRandomIndex_num(4);
            var nLen = 4;
            var nRandomNum = Utils.random(0, nLen - 1);
            var nHandX = 0;
            var nHandY = 0;
            nLen = nLen >= aryInfo.length ? aryInfo.length : nLen;
            for (var i = 0; i < nLen; ++i) {
                var pWeCatMoreGameItemOne = this.box_wecat.getChildAt(i);
                if (pWeCatMoreGameItemOne) {
                    pWeCatMoreGameItemOne.setAni(this.bAni);
                    pWeCatMoreGameItemOne.setData(aryInfo[i]);
                }
                else {
                    pWeCatMoreGameItemOne = new ShouMoreGameItem(aryInfo[i], 375, 430);
                    pWeCatMoreGameItemOne.setAni(false);
                    var nAddX = Math.floor(i % nCount);
                    var nYAdd = Math.floor(i / nCount);
                    pWeCatMoreGameItemOne.x = pWeCatMoreGameItemOne.pivotX + nXAddTemp * nAddX;
                    pWeCatMoreGameItemOne.y = pWeCatMoreGameItemOne.pivotY + nYAddTemp * nYAdd;
                    this.box_wecat.addChild(pWeCatMoreGameItemOne);
                }
                if (nRandomNum == i) {
                    nHandX = pWeCatMoreGameItemOne.x;
                    nHandY = pWeCatMoreGameItemOne.y;
                }
            }
            if (BaseConst.infos.gameInfo.isDY && ConfigMgr.getInstance().isWeCatMiniGame()) {
                PlatformDY.refreshGameList();
            }
            if (!this.image_hand) {
                this.image_hand = new Laya.Image("resource/assets/img/wecat/failed_icon_1.png");
                this.box_wecat.addChild(this.image_hand);
            }
            this.image_hand.visible = true;
            this.image_hand.x = nHandX;
            this.image_hand.y = nHandY;
        };
        ShouMoreGameInView.prototype.getRandomIndex_num = function (nNum) {
            if (GDataMgr.getInstance().weCatMoreInfo.length - 1 < 0) {
                return [];
            }
            var nRandom = Utils.random(0, GDataMgr.getInstance().weCatMoreInfo.length - 1);
            var nCount = nNum;
            var aryInfo = [];
            for (var i = 0; i < nCount; ++i) {
                aryInfo.push(nRandom);
                nRandom += 1;
                if (nRandom >= GDataMgr.getInstance().weCatMoreInfo.length) {
                    nRandom = 0;
                }
            }
            return aryInfo;
        };
        return ShouMoreGameInView;
    }(BaseSceneUISkin));

    var ViewChangeMgr = (function () {
        function ViewChangeMgr() {
            this.image_exit = null;
            EventMgr.getInstance().addEvent(GameEvent.BUFFER_LOAD, this, this.bufferLoading);
        }
        ViewChangeMgr.getInstance = function () {
            if (!ViewChangeMgr.instance) {
                ViewChangeMgr.instance = new ViewChangeMgr();
            }
            return ViewChangeMgr.instance;
        };
        Object.defineProperty(ViewChangeMgr.prototype, "commonView", {
            get: function () {
                if (!this._commonView) {
                    this._commonView = new CommonView();
                    this._commonView.x = 0;
                    this._commonView.y = 0;
                }
                return this._commonView;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ViewChangeMgr.prototype, "CurLevelBasea", {
            get: function () {
                return this.curLevelBase;
            },
            set: function (pCurLevelBase) {
                this.curLevelBase = pCurLevelBase;
            },
            enumerable: true,
            configurable: true
        });
        ViewChangeMgr.prototype.showCommonView = function () {
            Laya.stage.addChild(this.commonView);
        };
        ViewChangeMgr.prototype.gotoLevel = function (nCurLevel) {
            PlayerDataMgr.getInstance().setCurGuanQia(nCurLevel - 1);
            GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_CL;
            LevelMgr.getInstance().createSceneByLevel(nCurLevel);
        };
        ViewChangeMgr.prototype.goToNextLevel = function () {
            console.log("切换到下一关--");
            MiniGameMgr.instance.StopVideoAd();
            this.curLevelBase.closeGameView();
            GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_N;
            PlayerDataMgr.getInstance().addGuanQia();
            LevelMgr.getInstance().createSceneByLevel(PlayerDataMgr.getInstance().getCurGuanQiaToChallenge());
        };
        ViewChangeMgr.prototype.restartGame = function (bAll) {
            if (bAll === void 0) { bAll = true; }
            GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_RS;
            this.curLevelBase.restartGame(bAll);
        };
        ViewChangeMgr.prototype.rigestBufLoadingView = function () {
            BufferLoadingManger.getInstance().registerOneBuffer("gamebuffer", new GameBufferLoad());
        };
        ViewChangeMgr.prototype.showBufLoadingView = function () {
            BufferLoadingManger.getInstance().showBuffer("gamebuffer");
            Laya.timer.clear(this, this.hideBufLoadingView);
            Laya.timer.once(30000, this, this.hideBufLoadingView);
            BufferLoadingManger.getInstance().bufferGroup.mouseThrough = false;
        };
        ViewChangeMgr.prototype.hideBufLoadingView = function () {
            Laya.timer.clear(this, this.hideBufLoadingView);
            BufferLoadingManger.getInstance().hiddBuffer("gamebuffer");
            BufferLoadingManger.getInstance().bufferGroup.mouseEnabled = true;
            BufferLoadingManger.getInstance().bufferGroup.mouseThrough = true;
        };
        ViewChangeMgr.prototype.bufferLoading = function (show) {
            if (show) {
                this.showBufLoadingView();
            }
            else {
                this.hideBufLoadingView();
            }
        };
        ViewChangeMgr.prototype.startGame = function () {
            if (!BaseConst.infos.gameInfo.isDY) {
                return;
            }
            if (!DeviceUtil.isWXMiniGame() && !DeviceUtil.isQQMiniGame() && !DeviceUtil.isTTMiniGame())
                return;
            PlatformDY.startGame();
        };
        ViewChangeMgr.prototype.gameEnd = function () {
            if (!BaseConst.infos.gameInfo.isDY) {
                return;
            }
            if (!DeviceUtil.isWXMiniGame() && !DeviceUtil.isQQMiniGame() && !DeviceUtil.isTTMiniGame())
                return;
            PlatformDY.endGame({ id: PlatformDY.nGameID, level: PlayerDataMgr.getInstance().getCurGuanQiaToChallenge() });
        };
        ViewChangeMgr.prototype.showMoreGameinView = function (bAni) {
            if (bAni === void 0) { bAni = true; }
            if (!this.pShouMoreGameInView) {
                this.pShouMoreGameInView = new ShouMoreGameInView();
            }
            else {
                this.pShouMoreGameInView.refreshWeCatMoreGame();
            }
            this.pShouMoreGameInView.ani = bAni;
            return this.pShouMoreGameInView;
        };
        ViewChangeMgr.prototype.showImageExit = function () {
            if (!DeviceUtil.isWXMiniGame()) {
                return;
            }
            if (PlayerDataMgr.getInstance().stOperData0807.bSpecial == false && BaseConst.infos.gameInfo.bwrite == 1) {
                console.log("GameDataMgr.getInstance().enterGameInfo", GDataMgr.getInstance().eGInfos);
                if (GDataMgr.getInstance().eGInfos.enterGameInfo == {}) {
                    return;
                }
                if (!GDataMgr.getInstance().eGInfos.referrerInfo.appId) {
                    return;
                }
                if ("wxcff7381e631cf54e" == GDataMgr.getInstance().eGInfos.referrerInfo.appId) {
                    return;
                }
            }
            PlayerDataMgr.getInstance().stOperData0807.bSpecial = true;
            if (this.image_exit) {
                return;
            }
            this.image_exit = new Laya.Image();
            this.image_exit.skin = "resource/assets/img/wecat/button.png";
            this.image_exit.right = 23;
            this.image_exit.top = 220;
            Laya.stage.addChild(this.image_exit);
            this.image_exit.on(Laya.Event.CLICK, this, this.onImageExit);
            PlayerDataMgr.getInstance().SaveData();
        };
        ViewChangeMgr.prototype.onImageExit = function () {
            if (PlayerDataMgr.getInstance().checkIsSpecial() && BaseConst.infos.gameInfo.MoreGameView == 1) {
                ViewManager.getInstance().showView(MoreGameViewTemp);
            }
            else {
                MoreGameRandomGameBox713Temp.bSpecial = true;
                ViewManager.getInstance().showView(MoreGameRandomGameBox713Temp);
            }
        };
        ViewChangeMgr.prototype.showImageExitTemp = function () {
            if (this.image_exit) {
                this.image_exit.visible = true;
            }
        };
        ViewChangeMgr.prototype.hideImageExitTemp = function () {
            if (this.image_exit) {
                this.image_exit.visible = false;
            }
        };
        ViewChangeMgr.prototype.restartEnterGameHome = function () {
            if (!DeviceUtil.isWXMiniGame()) {
                return;
            }
            if (PlayerDataMgr.getInstance().bIsNewPlayer) {
                PlayerDataMgr.bGlobEnterGame = false;
                return;
            }
            if (BaseConst.infos.gameInfo.openPsAward == 0) {
                PlayerDataMgr.bGlobEnterGame = false;
                return;
            }
            PlayerDataMgr.bGlobEnterGame = true;
            WeCatMoreGameView.nEnterCount = 0;
            ViewManager.getInstance().showView(MoreGameRandomGameBox713);
            this.commonView.visible = false;
        };
        ViewChangeMgr.gameOpen = false;
        return ViewChangeMgr;
    }());

    var MoreGameRandomGameBox713 = (function (_super) {
        __extends(MoreGameRandomGameBox713, _super);
        function MoreGameRandomGameBox713() {
            var _this = _super.call(this) || this;
            _this.className_key = "MoreGameOperRequest";
            _this.nStartY = 0;
            _this.bContinue = false;
            _this.scrollSizeMax = 50;
            _this.nTimePanel = 5000;
            _this.skin = "game/uiView/wecat/MoreGameRandomGameBox713.json";
            _this.nRandomIndxe = 0;
            _this.bAniOver = false;
            _this.nOpenNum = 0;
            return _this;
        }
        MoreGameRandomGameBox713.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.panel_gamelist.height = Laya.stage.height - (1920 - 1640);
        };
        MoreGameRandomGameBox713.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.bAniOver = true;
        };
        MoreGameRandomGameBox713.prototype.addEvent = function () {
            this.registerEvent(this.imageBtReturn, Laya.Event.CLICK, this.onBackTemp, this);
            this.registerEvent(this.imageBtConGame, Laya.Event.CLICK, this.onSpeical, this);
            this.panel_gamelist.on(Laya.Event.MOUSE_DOWN, this, this.mousedown);
            this.registerEvent(this.imageRandom, Laya.Event.CLICK, this.goToGameRandom, this);
        };
        MoreGameRandomGameBox713.prototype.mousedown = function (evt) {
            this.nStartY = evt.currentTarget.mouseY;
            var self = this;
            function mouseMove(evt1) {
                var nYTemp = self.nStartY - evt1.currentTarget.mouseY;
                self.moreGamePanel.y -= nYTemp;
                self.moreGamePanel2.y -= nYTemp;
                self.nStartY = evt1.currentTarget.mouseY;
                if (self.moreGamePanel.y >= 0 && self.moreGamePanel2.y >= 0) {
                    self.moreGamePanel.y = 0;
                    self.moreGamePanel2.y = self.moreGamePanel.height;
                }
            }
            function mouseUp(evt1) {
                this.panel_gamelist.off(Laya.Event.MOUSE_MOVE, this, mouseMove);
                this.panel_gamelist.off(Laya.Event.MOUSE_UP, this, mouseUp);
            }
            this.panel_gamelist.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_gamelist.on(Laya.Event.MOUSE_UP, this, mouseUp);
        };
        MoreGameRandomGameBox713.prototype.initPanel = function () {
        };
        MoreGameRandomGameBox713.prototype.initView = function () {
            this.nOpenNum += 1;
            MiniGameMgr.instance._bFlagSpecialView = false;
            MiniGameMgr.instance.hideBannerAd();
            Laya.timer.clear(this, this.onMove);
            ViewChangeMgr.getInstance().commonView.visible = false;
            this.initPanel();
            var nXStart = 0;
            var nYStart = 0;
            var nCount = 3;
            var aryInfo = [];
            aryInfo = this.getRandomIndex(18);
            this.moreGamePanel.removeChildren();
            this.moreGamePanel.y = 0;
            for (var i = 0; i < aryInfo.length; ++i) {
                var pWeCatMoreGameItemOne = this.moreGamePanel.getChildAt(i);
                if (pWeCatMoreGameItemOne) {
                    pWeCatMoreGameItemOne.setData(aryInfo[i]);
                }
                else {
                    pWeCatMoreGameItemOne = new MoreGameRandomGameBoxItem713(aryInfo[i]);
                    var nAddX = Math.floor(i % nCount);
                    var nYAdd = Math.floor(i / nCount);
                    pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 30 * nAddX;
                    pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
                    this.moreGamePanel.addChild(pWeCatMoreGameItemOne);
                    this.nTimePanel = (nYAdd + 1) * 1000;
                    this.moreGamePanel.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height;
                }
            }
            this.moreGamePanel2.y = this.moreGamePanel.height;
            this.moreGamePanel2.removeChildren();
            for (var i = 0; i < aryInfo.length; ++i) {
                var pWeCatMoreGameItemOne = this.moreGamePanel2.getChildAt(i);
                if (pWeCatMoreGameItemOne) {
                    pWeCatMoreGameItemOne.setData(aryInfo[i]);
                }
                else {
                    pWeCatMoreGameItemOne = new MoreGameRandomGameBoxItem713(aryInfo[i]);
                    var nAddX = Math.floor(i % nCount);
                    var nYAdd = Math.floor(i / nCount);
                    pWeCatMoreGameItemOne.x = nXStart + pWeCatMoreGameItemOne.width * nAddX + 30 * nAddX;
                    pWeCatMoreGameItemOne.y = nYStart + pWeCatMoreGameItemOne.height * nYAdd + 10 * nYAdd;
                    this.moreGamePanel2.addChild(pWeCatMoreGameItemOne);
                    this.nTimePanel = (nYAdd + 1) * 1000;
                    this.moreGamePanel2.height = pWeCatMoreGameItemOne.y + pWeCatMoreGameItemOne.height;
                }
            }
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.refreshGameList();
            }
            Laya.timer.frameLoop(1, this, this.onMove);
            if ((this.nOpenNum >= 2 || !PlayerDataMgr.getInstance().bIsNewPlayer) && BaseConst.infos.gameInfo.openPsAward == 1) {
                this.timerChangerImage();
            }
            else {
                this.changeImage();
            }
        };
        MoreGameRandomGameBox713.prototype.timerChangerImage = function () {
            this.imageBtConGame.skin = "resource/assets/img/wecat/box_button_2.png";
            this.bContinue = false;
            Laya.timer.clear(this, this.changeImage);
            Laya.timer.once(5000, this, this.changeImage);
        };
        MoreGameRandomGameBox713.prototype.changeImage = function () {
            this.imageBtConGame.skin = "resource/assets/img/wecat/box_button_3.png";
            this.bContinue = true;
        };
        MoreGameRandomGameBox713.prototype.onSpecialGotoGame = function () {
            if (PlayerDataMgr.bGlobEnterGame) {
                ViewManager.getInstance().showView(WeCatMoreGameView);
                this.removeSelf();
                Laya.timer.clearAll(this);
                MoreGameRandomGameBox713.bOperFlag = false;
                MoreGameRandomGameBox713.bSuccess = false;
                MoreGameRandomGameBox713.bGotoNextGame = false;
                MoreGameRandomGameBox713.toHome = false;
                MoreGameRandomGameBox713.bEnterHotBox = false;
                MoreGameRandomGameBox713.bReStartGame = false;
                return;
            }
            this.onClickOper();
        };
        MoreGameRandomGameBox713.prototype.onSpeical = function () {
            if (this.bContinue) {
                this.onSpecialGotoGame();
            }
            else {
                this.goToGameRandom();
            }
        };
        MoreGameRandomGameBox713.prototype.onMove = function () {
            var nHight = this.moreGamePanel.height;
            this.moreGamePanel2.y -= 2;
            this.moreGamePanel.y -= 2;
            if (this.moreGamePanel.y <= -nHight) {
                this.moreGamePanel.y = this.moreGamePanel2.y + nHight;
            }
            if (this.moreGamePanel2.y <= -nHight) {
                this.moreGamePanel2.y = this.moreGamePanel.y + nHight;
            }
        };
        MoreGameRandomGameBox713.prototype.onBackTemp = function () {
            if (PlayerDataMgr.getInstance().checkIsSpecial() && BaseConst.infos.gameInfo.MoreGameView == 1) {
                ViewManager.getInstance().showView(MoreGameViewTemp);
            }
            else {
                MoreGameRandomGameBox713Temp.bSpecial = true;
                ViewManager.getInstance().showView(MoreGameRandomGameBox713Temp);
            }
        };
        MoreGameRandomGameBox713.prototype.onBack = function () {
            MoreGameOperRequestTwo.bOperFlag = MoreGameRandomGameBox713.bOperFlag;
            MoreGameOperRequestTwo.bSuccess = MoreGameRandomGameBox713.bSuccess;
            MoreGameOperRequestTwo.bGotoNextGame = MoreGameRandomGameBox713.bGotoNextGame;
            MoreGameOperRequestTwo.toHome = MoreGameRandomGameBox713.toHome;
            MoreGameOperRequestTwo.bReStartGame = MoreGameRandomGameBox713.bReStartGame;
            MiniGameMgr.instance._bFlagSpecialView = false;
            ViewManager.getInstance().showView(MoreGameOperRequestTwo);
            this.removeSelf();
            Laya.timer.clearAll(this);
            MoreGameRandomGameBox713.bOperFlag = false;
            MoreGameRandomGameBox713.bSuccess = false;
            MoreGameRandomGameBox713.bGotoNextGame = false;
            MoreGameRandomGameBox713.toHome = false;
            MoreGameRandomGameBox713.bEnterHotBox = false;
            MoreGameRandomGameBox713.bReStartGame = false;
        };
        MoreGameRandomGameBox713.prototype.goToGame = function () {
        };
        MoreGameRandomGameBox713.prototype.getRandomIndex = function (nMax) {
            if (GDataMgr.getInstance().weCatMoreInfo.length - 1 < 0) {
                return [];
            }
            var nRandom = Utils.random(0, GDataMgr.getInstance().weCatMoreInfo.length - 1);
            var nCount = GDataMgr.getInstance().weCatMoreInfo.length % 3;
            if (nCount > 0) {
                nCount = 3 - nCount;
            }
            nCount = GDataMgr.getInstance().weCatMoreInfo.length + nCount;
            if (nCount <= nMax) {
                nCount = nMax;
            }
            var aryInfo = [];
            for (var i = 0; i < nCount; ++i) {
                aryInfo.push(nRandom);
                nRandom += 1;
                if (nRandom >= GDataMgr.getInstance().weCatMoreInfo.length) {
                    nRandom = 0;
                }
            }
            return aryInfo;
        };
        MoreGameRandomGameBox713.prototype.panelScrollAni = function () {
        };
        MoreGameRandomGameBox713.prototype.onClickOper = function () {
            var _this = this;
            if (!MoreGameRandomGameBox713.bEnterHotBox) {
                MiniGameMgr.instance._bFlagSpecialView = true;
                if (MoreGameRandomGameBox713.bGotoNextGame) {
                    var nSpCost = 1;
                    var stGameConfig = ConfigMgr.getInstance().getGCDBID(8);
                    if (stGameConfig) {
                        nSpCost = parseInt(stGameConfig.strValue);
                    }
                    var b = PlayerDataMgr.getInstance().CheckProp(PType.e_GType_Sp, nSpCost);
                    if (!b) {
                        TipsManager.getInstance().showDefaultTips("体力不足");
                        ViewChangeMgr.getInstance().showBufLoadingView();
                        ResUtil.getIntance().loadGroups(["adsp"], function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                ViewManager.getInstance().showView(AddPowerView);
                                ViewChangeMgr.getInstance().hideBufLoadingView();
                                return [2];
                            });
                        }); });
                        return;
                    }
                    PlayerDataMgr.getInstance().AddProp(PType.e_GType_Sp, nSpCost);
                    if (PlayerDataMgr.getInstance().getCurGuanQia() < BaseConst.infos.gameInfo.splevel
                        || BaseConst.infos.gameInfo.openPsAward == 0) {
                        ViewChangeMgr.getInstance().goToNextLevel();
                    }
                    else {
                        PlayerDataMgr.getInstance().bEnterGameFromGameHome = false;
                        ViewManager.getInstance().showView(SuccessfulEntryOneView);
                    }
                }
                else {
                    if (MoreGameRandomGameBox713.bOperFlag) {
                        if (MoreGameRandomGameBox713.bSuccess) {
                            if (BaseConst.infos.gameInfo.openPsAward == 1
                                && PlayerDataMgr.getInstance().getCurGuanQia() >= BaseConst.infos.gameInfo.splevel
                                && BaseConst.infos.gameInfo.for_pay == 1) {
                                ViewManager.getInstance().showView(SuccessfulEntryOneView);
                            }
                            else {
                                ViewManager.getInstance().showView(SuccessfulEntryThreeView);
                            }
                        }
                        else {
                            if (DeviceUtil.isVIVOMiniGame()) {
                                ViewManager.getInstance().showView(FailEntryTwoVivoView);
                            }
                            else {
                                ViewManager.getInstance().showView(FailEntryErView);
                            }
                        }
                    }
                }
                if (MoreGameRandomGameBox713.toHome) {
                    ViewChangeMgr.getInstance().CurLevelBasea.closeGameView();
                    PlayerDataMgr.getInstance().setCurGuanQia(PlayerDataMgr.getInstance().getCurGuanQiaMax());
                    GameStatusMgr.getInstance().levelStatus = EGType.e_EGType_GH;
                    LevelMgr.getInstance().createSceneByLevel(PlayerDataMgr.getInstance().getCurGuanQiaToChallenge());
                }
                ViewChangeMgr.getInstance().commonView.visible = true;
            }
            else {
                this.onBack();
            }
            this.removeSelf();
            Laya.timer.clearAll(this);
            MiniGameMgr.instance.showBanner({});
            MoreGameRandomGameBox713.bOperFlag = false;
            MoreGameRandomGameBox713.bSuccess = false;
            MoreGameRandomGameBox713.bGotoNextGame = false;
            MoreGameRandomGameBox713.toHome = false;
            MoreGameRandomGameBox713.bEnterHotBox = false;
            MoreGameRandomGameBox713.bReStartGame = false;
        };
        MoreGameRandomGameBox713.prototype.goToGameRandom = function () {
            this.aryCatMiniIconsInfoTemp = GDataMgr.getInstance().weCatMoreInfo;
            if (this.aryCatMiniIconsInfoTemp.length <= 0) {
                return;
            }
            this.nRandomIndxe = Utils.random(0, this.aryCatMiniIconsInfoTemp.length - 1);
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.clickGame(this.aryCatMiniIconsInfoTemp[this.nRandomIndxe].ad_id);
            }
            var self = this;
            var stData = this.aryCatMiniIconsInfoTemp[this.nRandomIndxe].ad_id;
            var data = {
                appId: this.aryCatMiniIconsInfoTemp[self.nRandomIndxe].ad_appid,
                path: this.aryCatMiniIconsInfoTemp[self.nRandomIndxe].url,
                success: function () {
                    console.log("navigateToMiniProgram success");
                    if (BaseConst.infos.gameInfo.isDY) {
                        console.log("self.nIndex = ", stData);
                        PlatformDY.toGame(stData.ad_id);
                    }
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail e =", e);
                    MoreGameRandomGameBox713Temp.bSpecial = true;
                    ViewManager.getInstance().showView(MoreGameRandomGameBox713Temp);
                }
            };
            platform.navigateToMiniProgram(data);
        };
        MoreGameRandomGameBox713.bOperFlag = false;
        MoreGameRandomGameBox713.bSuccess = false;
        MoreGameRandomGameBox713.toHome = false;
        MoreGameRandomGameBox713.bGotoNextGame = false;
        MoreGameRandomGameBox713.bEnterHotBox = false;
        MoreGameRandomGameBox713.bReStartGame = false;
        MoreGameRandomGameBox713.nEnterCount = 0;
        return MoreGameRandomGameBox713;
    }(PopBaseScene));

    var GuessLikeItem = (function (_super) {
        __extends(GuessLikeItem, _super);
        function GuessLikeItem(skin, itemData) {
            var _this = _super.call(this) || this;
            _this.className_key = "GuessLikeItem";
            _this.itemData_ = itemData;
            _this.skin = skin;
            return _this;
        }
        GuessLikeItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.on(Laya.Event.CLICK, this, this.click);
            this.dataChange(this.itemData_);
        };
        GuessLikeItem.prototype.onEnabled = function () {
        };
        GuessLikeItem.prototype.dataChange = function (data) {
            this.exposure();
            this.itemData_ = data;
            if (data.img)
                this.icon_.skin = data.img;
            else
                this.icon_.skin = data.ad_img;
            if (this.iconMask_) {
                this.icon_.mask = this.iconMask_;
                this.icon_.mask.visible = false;
            }
            if (this.name_txt) {
                if (data.title) {
                    this.name_txt.text = data.title;
                }
                if (data.name) {
                    this.name_txt.text = data.name;
                }
            }
        };
        GuessLikeItem.prototype.exposure = function () {
            if (DeviceUtil.isOPPOMiniGame()) {
                return;
            }
        };
        GuessLikeItem.prototype.click = function () {
            var itemData_ = this.itemData_;
            if (BaseConst.infos.gameInfo.isDY) {
                PlatformDY.clickGame(itemData_.id);
            }
            var data = {
                appId: itemData_.appid,
                path: itemData_.url,
                success: function () {
                    console.log("navigateToMiniProgram success");
                    if (BaseConst.infos.gameInfo.isDY) {
                        PlatformDY.toGame(itemData_.id);
                    }
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail e =", e);
                    if (DeviceUtil.isWXMiniGame()) {
                        ViewManager.getInstance().showView(MoreGameRandomGameBox713);
                    }
                }
            };
            platform.navigateToMiniProgram(data);
        };
        return GuessLikeItem;
    }(BaseSceneUISkin));

    var GuessLike$1 = (function (_super) {
        __extends(GuessLike, _super);
        function GuessLike(skin, subItemSkin, listdata_, itemW) {
            var _this = _super.call(this) || this;
            _this.className_key = "GuessLike";
            _this.listdata = [];
            _this.isTouch = false;
            _this.index = 0;
            _this.len = 0;
            _this.nNum = 0;
            _this.subItemSkin = subItemSkin;
            listdata_ && (_this.listdata = listdata_);
            _this.itemW = itemW;
            _this.skin = skin;
            return _this;
        }
        GuessLike.prototype.childrenCreated = function () {
            this.width = 1026;
            this.height = 330;
            this.panelList.hScrollBarSkin = "";
            this.panelList.hScrollBar.touchScrollEnable = false;
            this.initList();
        };
        GuessLike.prototype.initList = function () {
            for (var i = 0, len = this.listdata.length; i < len; i++) {
                var item = new GuessLikeItem(this.subItemSkin, this.listdata[i]);
                this.boxView.addChild(item);
                item.x = this.itemW * (i - 1);
            }
            this.index = -1;
            this.len = this.listdata.length;
            this.boxView.x = 0;
            this.onEnable();
            this.panelList.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        };
        GuessLike.prototype.onEnable = function () {
            if (this.isCreate) {
                this.aniPerIndex();
            }
        };
        GuessLike.prototype.onEnabled = function () {
            this.btn_moreGame && this.btn_moreGame.on(Laya.Event.CLICK, this, this.onMoreGame);
        };
        GuessLike.prototype.onMoreGame = function () {
            this.onMoreGameCall && this.onMoreGameCall();
        };
        GuessLike.prototype.onDisable = function () {
            if (this.isCreate) {
                this.panelList.clearTimer(this, this.frameChange);
                this.panelList.clearTimer(this, this.aniLoop);
                this.btn_moreGame && this.btn_moreGame.off(Laya.Event.CLICK, this, this.onMoreGame);
            }
        };
        GuessLike.prototype.mouseDown = function (evt) {
            this.isTouch = true;
            this.clickX = evt.stageX;
            this.starX = this.boxView.x;
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseOutUp);
        };
        GuessLike.prototype.frameChange = function () {
            var self = this;
            if (!self.isTouch) {
                self.boxView.x -= 1;
                this.nNum += 1;
                if (this.nNum == self.itemW) {
                    this.panelList.clearTimer(this, this.frameChange);
                    this.nNum = 0;
                }
            }
            var curX = self.boxView.x;
            if (curX > (self.index + 1) * self.itemW) {
                self.index++;
                var last = self.boxView.removeChildAt(self.boxView.numChildren - 1);
                var first = self.boxView.getChildAt(0);
                last.x = first.x - self.itemW;
                self.boxView.addChildAt(last, 0);
                last.exposure();
                return;
            }
            if (curX < (self.index - 1) * self.itemW) {
                self.index--;
                var last = self.boxView.getChildAt(self.boxView.numChildren - 1);
                var first = self.boxView.removeChildAt(0);
                first.x = last.x + self.itemW;
                self.boxView.addChild(first);
                first.exposure();
                return;
            }
        };
        GuessLike.prototype.mouseMove = function (evt) {
            this.boxView.x = this.starX + (evt.stageX - this.clickX);
        };
        GuessLike.prototype.mouseOutUp = function () {
            this.isTouch = false;
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseOutUp);
        };
        GuessLike.prototype.aniPerIndex = function () {
            this.panelList.frameLoop(400, this, this.aniLoop);
        };
        GuessLike.prototype.aniLoop = function () {
            this.panelList.clearTimer(this, this.frameChange);
            this.panelList.frameLoop(1, this, this.frameChange);
        };
        return GuessLike;
    }(BaseSceneUISkin));

    var MiniGameMgr = (function () {
        function MiniGameMgr() {
            this.platformInfos = {};
            this._hideTime = 0;
            this._showTime = 0;
            this.defaultMsg = {
                "title": "一入宫门深似海，小主太难了！！",
                "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-1.jpg?v=" + 1.2,
                "query": ""
            };
            this.shareInfoOfTTOrQQ = [];
            this.shareInfoOfWX = [];
            this.shareInfos = [];
            this.shareInfoOfDouYin = [];
            this.flagDouYin = false;
            this._sucTime = 0;
            this._canShowBanner = true;
            this._bFlagSpecialView = true;
            this._bTimerOpen = false;
            this._nRecordTime = 60;
            this._nRecordTimeReal = 0;
            this._onShareVideoSuccess = false;
            this.initVideoAdInfo();
            if (DeviceUtil.isWXMiniGame()) {
                this.defaultMsg = this.shareInfoOfWX[0];
                this.shareInfos = this.shareInfos.concat(this.shareInfoOfWX);
            }
            else if (DeviceUtil.isTTMiniGame() || DeviceUtil.isQQMiniGame()) {
                this.defaultMsg = this.shareInfoOfTTOrQQ[0];
                this.shareInfos = this.shareInfos.concat(this.shareInfoOfTTOrQQ);
            }
        }
        Object.defineProperty(MiniGameMgr, "instance", {
            get: function () {
                return MiniGameMgr._ins;
            },
            enumerable: true,
            configurable: true
        });
        MiniGameMgr.prototype.initMiniGameAfterLoadres = function () {
            if (this.box_platform == null) {
                this.box_platform = new Laya.Box();
                this.box_platform.size(Laya.stage.width, Laya.stage.height);
                this.box_platform.mouseThrough = true;
            }
            Laya.stage.addChild(this.box_platform);
        };
        MiniGameMgr.prototype.init = function () {
        };
        MiniGameMgr.prototype.initGameReleaseConfig = function () {
        };
        MiniGameMgr.prototype.getUpdateManager = function () {
        };
        MiniGameMgr.prototype.onAudioInterruptionStart = function (call) {
        };
        MiniGameMgr.prototype.onAudioInterruptionOver = function (call) {
        };
        MiniGameMgr.prototype.getUserInfos = function () {
            return new Promise(function (resolve) {
                resolve(null);
            });
        };
        MiniGameMgr.prototype.initTemp = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        MiniGameMgr.prototype.createUserButtonSize = function (percentTop, pectendSize, percentLeft) {
            var resInfo = platform.getSystemInfoSync();
            var left = resInfo['windowWidth'] * percentLeft;
            var top = resInfo['windowHeight'] * percentTop;
            var wid = resInfo['windowWidth'] * pectendSize;
            var height = resInfo['windowHeight'] * pectendSize;
        };
        MiniGameMgr.prototype.onShow = function (callBack) {
        };
        MiniGameMgr.prototype.onHide = function (callBack) {
        };
        MiniGameMgr.prototype.showMoreMiniGame = function (data) {
            return new Promise(function (resolve) {
            });
        };
        MiniGameMgr.prototype.getShareInfos = function (query) {
            return "info";
        };
        MiniGameMgr.prototype.getShareInfoOfDouYin = function (query) {
            var shareInfo = this.shareInfoOfDouYin;
            var info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
            if (query) {
                var openId = GDataMgr.getInstance().uinfo.openId;
                query['openid'] = openId;
            }
            info.query = Utils.querStr(query);
            info.extra.videoPath = this._strVideoPatch;
            return info;
        };
        MiniGameMgr.prototype.shareAppMsg = function (data) {
            TipsManager.getInstance().showDefaultTips('开发中');
        };
        MiniGameMgr.prototype.playVideoAd = function (data) {
            if (data.successFun) {
                data.successFun();
            }
        };
        MiniGameMgr.prototype.showBanner = function (offset) {
        };
        MiniGameMgr.prototype.qqRefreshBannerReadl = function () {
        };
        MiniGameMgr.prototype.qqRefreshBanner = function () {
        };
        MiniGameMgr.prototype.hideBannerAd = function () {
        };
        MiniGameMgr.prototype.adapatImgToClientRect = function (collec_img, stage) {
            if (DeviceUtil.isWXMiniGame()) {
                var systemInfo = platform.getSystemInfoSync();
                var screenHeight = systemInfo['screenHeight'];
                var screenWidth = systemInfo['screenWidth'];
                var rect = platform.getMenuButtonBoundingClientRect();
                collec_img.top = stage.height * (rect['top'] / screenHeight);
                collec_img.right = stage.width * (1 - rect['right'] / screenWidth) + collec_img.width;
            }
        };
        MiniGameMgr.prototype.sendDataToWxOpenContext = function (data) {
            Laya.MiniAdpter.window.wx.postMessage(data);
        };
        MiniGameMgr.prototype.removeOpenContextData = function (data) {
        };
        MiniGameMgr.prototype.addOpenWeChatData = function (data) {
        };
        MiniGameMgr.prototype.initBlockAD = function () {
        };
        MiniGameMgr.prototype.showBlockAD = function () {
        };
        MiniGameMgr.prototype.hideBlockAD = function () {
        };
        MiniGameMgr.prototype.initAdBox = function () {
        };
        MiniGameMgr.prototype.showAdBox = function (onCloseCall) {
        };
        MiniGameMgr.prototype.initVideoAdInfo = function () {
        };
        MiniGameMgr.prototype.StartRecordVideo = function () {
        };
        MiniGameMgr.prototype.timeStopVideoAd = function () {
        };
        MiniGameMgr.prototype.StopVideoAd = function () {
        };
        MiniGameMgr.prototype.shareGameRecordVideo = function (data) {
        };
        MiniGameMgr.prototype.onShareVideoAd = function (data) {
        };
        MiniGameMgr.prototype.showChaPinAd = function () {
        };
        MiniGameMgr.prototype.showMoreGamesModel = function () {
        };
        MiniGameMgr.prototype.createGuessLikeView = function (parent) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var data, guessLike;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = PlatformDY.gameListInfos;
                                        if (!(data == null)) return [3, 2];
                                        return [4, PlatformDY.getGameList()];
                                    case 1:
                                        data = _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        if (data == null) {
                                            resolve(null);
                                            return [2];
                                        }
                                        if (data.length <= 0) {
                                            return [2];
                                        }
                                        console.log("data(GuessLike) ->", data);
                                        guessLike = parent.getChildByName('GuessLike');
                                        if (guessLike == null) {
                                            guessLike = new GuessLike$1("game/uiView/platform/GuessLike.json", "game/uiView/platform/GuessLikeItem.json", data, 220);
                                            parent.addChild(guessLike);
                                        }
                                        guessLike.name = 'GuessLike';
                                        guessLike.mouseThrough = true;
                                        guessLike.x = (Laya.stage.width - guessLike.width) / 2;
                                        guessLike.y = Laya.stage.height - guessLike.height;
                                        resolve(guessLike);
                                        return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        MiniGameMgr.prototype.appName = function () {
            if (!DeviceUtil.isTTMiniGame())
                return "Toutiao";
            var self = this;
            if (!self.systemInfos) {
                self.systemInfos = platform.getSystemInfoSync();
            }
            return self.systemInfos.appName;
        };
        MiniGameMgr.prototype.showAddDesktopBtn = function (data) {
        };
        MiniGameMgr.prototype.tipInstallShortcut = function (data) {
        };
        MiniGameMgr.prototype.loadNativeAd = function (index) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        MiniGameMgr.prototype.showBottomNativeAd = function (box_platform, ys) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        MiniGameMgr.prototype.showInsertAd = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        MiniGameMgr.prototype.createShortCut = function (succCall) {
        };
        MiniGameMgr.prototype.hasShortcutInstalled = function () {
            return;
        };
        MiniGameMgr.prototype.reportMonitor = function (name, value) {
        };
        MiniGameMgr.prototype.oppoNavigateToMiniProgram = function (obj) {
        };
        MiniGameMgr.prototype.createOppoNatvieAd = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            resolve(null);
                        })];
                });
            });
        };
        MiniGameMgr.prototype.setLoadingProgress = function (progress) {
        };
        MiniGameMgr.prototype.loadingComplete = function (object) {
        };
        MiniGameMgr.prototype.jumpLeisureSubject = function () {
        };
        return MiniGameMgr;
    }());

    var GDataMgr = (function () {
        function GDataMgr() {
            this.gid = "1049";
            this.uinfo = new WangLuoData.UserInfo();
            this.isBC = false;
            this.perFixUrl = "";
            this.URL_OF_INVITE = "";
            this.bannerId = new Array();
            this.videoId = Array();
            this.longVideoId = Array();
        }
        GDataMgr.getInstance = function () {
            if (!GDataMgr.instance) {
                GDataMgr.instance = new GDataMgr();
            }
            return GDataMgr.instance;
        };
        GDataMgr.prototype.initConfigs = function (res) {
            if (res) {
                this.bannerId = res.gameInfo.bannerId;
                this.videoId = res.gameInfo.videoId;
                this.longVideoId = res.gameInfo.longVideoId;
                this.boxId = res.gameInfo.boxId;
                MiniGameMgr.instance.platformInfos = res.gameInfo;
            }
            else {
                console.error("GameData.initConfig res error!");
            }
        };
        return GDataMgr;
    }());

    var GamePreLoadView = (function (_super) {
        __extends(GamePreLoadView, _super);
        function GamePreLoadView() {
            var _this = _super.call(this) || this;
            _this.className_key = "GamePreLoadingView";
            _this.nNumTest = 0;
            _this.img_bg = new Laya.Image();
            _this.img_bg.skin = "resource/assets/preloading/loading_bg.jpg";
            _this.img_bg.width = Laya.stage.width;
            _this.img_bg.height = Laya.stage.height;
            _this.img_bg.x = 0;
            _this.img_bg.y = 0;
            _this.addChild(_this.img_bg);
            _this.img_head = new Laya.Image();
            if (DeviceUtil.isWXMiniGame()) {
                _this.img_head.skin = "resource/assets/preloading/maininterface_logo_1.png";
            }
            else if (DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) ;
            _this.img_head.top = 300;
            _this.img_head.centerX = 0;
            _this.addChild(_this.img_head);
            _this.img_jdt_db = new Laya.Image();
            _this.img_jdt_db.skin = "resource/assets/preloading/loading_baseboard_1.png";
            _this.img_jdt_db.sizeGrid = "15,15,15,15";
            _this.img_jdt_db.width = 706;
            _this.img_jdt_db.height = 50;
            _this.img_jdt_db.top = 1097;
            _this.img_jdt_db.centerX = 0;
            _this.addChild(_this.img_jdt_db);
            _this.img_jdt = new Laya.Image();
            _this.img_jdt.skin = "resource/assets/preloading/loading_baseboard_2.png";
            _this.img_jdt.sizeGrid = "15,15,15,15";
            _this.img_jdt.width = 691;
            _this.img_jdt.height = 36;
            _this.img_jdt.x = 8;
            _this.img_jdt.centerY = 0;
            _this.img_jdt_db.addChild(_this.img_jdt);
            _this.img_load = new Laya.Image();
            _this.img_load.skin = "resource/assets/preloading/loading_word.png";
            _this.img_load.top = 1157;
            _this.img_load.centerX = 0;
            _this.addChild(_this.img_load);
            var stWorldBox;
            stWorldBox = new Laya.Box();
            stWorldBox.height = 20;
            stWorldBox.width = 88;
            stWorldBox.centerX = 0;
            stWorldBox.centerY = 0;
            var imageLeft;
            imageLeft = new Laya.Image();
            imageLeft.skin = "resource/assets/preloading/loading_word_2.png";
            imageLeft.x = 66;
            imageLeft.centerY = 0;
            stWorldBox.addChild(imageLeft);
            _this.imageRight1 = new Laya.Image();
            _this.imageRight1.height = 20;
            _this.imageRight1.x = 0;
            stWorldBox.addChild(_this.imageRight1);
            _this.imageRight2 = new Laya.Image();
            _this.imageRight2.height = 20;
            _this.imageRight2.x = 22;
            stWorldBox.addChild(_this.imageRight2);
            _this.imageRight3 = new Laya.Image();
            _this.imageRight3.height = 20;
            _this.imageRight3.x = 44;
            stWorldBox.addChild(_this.imageRight3);
            _this.img_jdt_db.addChild(stWorldBox);
            stWorldBox.visible = false;
            _this.aniBox = new Laya.Box();
            _this.aniBox.width = 300;
            _this.aniBox.height = 300;
            _this.aniBox.bottom = 445;
            _this.aniBox.x = (Laya.stage.width - _this.img_jdt_db.width) / 2;
            _this.aniBoxPosX = _this.aniBox.x;
            _this.addChild(_this.aniBox);
            _this.progress(0, 100);
            return _this;
        }
        GamePreLoadView.prototype.createSke = function (url) {
            return new Promise(function (resolve) {
                AnimationMgr.instance.showSkeAnimation(url, function (skeAni) {
                    resolve(skeAni);
                }, 1);
            });
        };
        GamePreLoadView.prototype.onAwake = function () {
            _super.prototype.onAwake.call(this);
            this.img_bg.scaleX = this.img_bg.scaleY = DeviceUtil.getScalePix();
        };
        GamePreLoadView.prototype.progress = function (index, len) {
            if (this.img_jdt) {
                this.img_jdt.width = 691 * (index / len);
                var nNumTemp = (index / len);
                var strData = nNumTemp.toFixed(2);
                nNumTemp = parseFloat(strData);
                var nNum = Math.floor(nNumTemp * 100);
                var strNum = nNum.toString();
                if (strNum.length == 1) {
                    var cData = strNum.charAt(0);
                    this.imageRight3.skin = "resource/assets/preloading/loading_number/loading_number_" + strNum.charAt(0) + ".png";
                }
                else if (strNum.length == 2) {
                    this.imageRight3.skin = "resource/assets/preloading/loading_number/loading_number_" + strNum.charAt(1) + ".png";
                    this.imageRight2.skin = "resource/assets/preloading/loading_number/loading_number_" + strNum.charAt(0) + ".png";
                }
                else if (strNum.length == 3) {
                    this.imageRight3.skin = "resource/assets/preloading/loading_number/loading_number_" + strNum.charAt(2) + ".png";
                    this.imageRight2.skin = "resource/assets/preloading/loading_number/loading_number_" + strNum.charAt(1) + ".png";
                    this.imageRight1.skin = "resource/assets/preloading/loading_number/loading_number_" + strNum.charAt(0) + ".png";
                }
                var readX = this.aniBoxPosX + this.img_jdt.width;
                readX = readX > (706 - 20) ? (706 - 20) : readX;
                this.aniBox.x = readX;
            }
        };
        GamePreLoadView.prototype.remove = function () {
            Laya.timer.clearAll(this);
        };
        return GamePreLoadView;
    }(BaseSceneUISkin));

    var GlobalManager = (function () {
        function GlobalManager() {
        }
        GlobalManager.init = function () {
            this.initSkeleton();
        };
        GlobalManager.initsetLabel = function () {
            BitmapLabelUtils.setLabel = function (label, text, prefix, gap, suffix, textAlgin) {
                if (suffix == null) {
                    suffix = ".png";
                }
                if (textAlgin == null) {
                    textAlgin = "left";
                }
                label.removeChildren();
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
            };
        };
        GlobalManager.initSkeleton = function () {
            console.log("重写skeleton play()");
            Laya.Skeleton.prototype["newPlay"] = Laya.Skeleton.prototype.play;
            Laya.Skeleton.prototype.play = function () {
                var animName = arguments[0];
                if (typeof animName == "string") {
                    for (var i = 0, n = this._templet._anis.length; i < n; ++i) {
                        if (animName == this._templet._anis[i].name) {
                            this.newPlay.apply(this, arguments);
                            return;
                        }
                    }
                }
                else {
                    this.newPlay.apply(this, arguments);
                    return;
                }
                console.error("not anim name:  ", animName);
            };
        };
        return GlobalManager;
    }());

    var MiniWechatManager = (function (_super) {
        __extends(MiniWechatManager, _super);
        function MiniWechatManager() {
            var _this = _super.call(this) || this;
            _this._hideTime = 0;
            _this._showTime = 0;
            _this.defaultMsg = {
                "title": "一入宫门深似海，小主太难了！！",
                "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-1.jpg?v=" + 1.2,
                "query": ""
            };
            _this.shareInfoOfTTOrQQ = [
                {
                    "title": "一入宫门深似海，小主太难了！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-2.jpg?v=" + 1.2,
                    "query": ""
                },
                {
                    "title": "一入宫门深似海，小主太难了！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-3.jpg?v=" + 1.2,
                    "query": ""
                }
            ];
            _this.shareInfoOfWX = [
                {
                    "title": "一入宫门深似海，小主太难了！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/500x400-6.jpg?v=" + 1.2,
                    "query": ""
                },
                {
                    "title": "一入宫门深似海，小主太难了！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/500x400-7.jpg?v=" + 1.2,
                    "query": ""
                }
            ];
            _this.shareInfos = [
                {
                    "title": "一入宫门深似海，小主太难了！！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-4.jpg?v=" + 1.2,
                    "query": ""
                },
                {
                    "title": "一入宫门深似海，小主太难了！！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-5.jpg?v=" + 1.2,
                    "query": ""
                },
                {
                    "title": "一入宫门深似海，小主太难了！！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-6.jpg?v=" + 1.2,
                    "query": ""
                }
            ];
            _this.shareInfoOfDouYin = [
                {
                    "channel": "video",
                    "title": "烧脑推理，一键过关！",
                    "desc": "烧脑推理，一键过关",
                    "imageUrl": "",
                    "query": "",
                    "extra": {
                        "videoPath": "",
                        "videoTopics": ["小姐姐快跑", "帮助小姐姐逃出生天"]
                    }
                },
                {
                    "channel": "video",
                    "title": "休闲解密游戏，开动你的小脑筋帮助小姐姐逃离魔爪？",
                    "desc": "休闲解密游戏，开动你的小脑筋帮助小姐姐逃离魔爪？",
                    "imageUrl": "",
                    "query": "",
                    "extra": {
                        "videoPath": "",
                        "videoTopics": ["小姐姐快跑", "帮助小姐姐逃出生天"]
                    }
                },
                {
                    "channel": "video",
                    "title": "机会只有一次！救救小姐姐！",
                    "desc": "机会只有一次！救救小姐姐！",
                    "imageUrl": "",
                    "query": "",
                    "extra": {
                        "videoPath": "",
                        "videoTopics": ["小姐姐快跑", "帮助小姐姐逃出生天"]
                    }
                }
            ];
            _this.flagDouYin = false;
            _this._sucTime = 0;
            _this._canShowBanner = true;
            _this._bFlagSpecialView = true;
            _this._bTimerOpen = false;
            return _this;
        }
        MiniWechatManager.prototype.init = function () {
            var _this = this;
            var launchObj = platform.getLaunchOptionsSync();
            if (launchObj) {
                console.log('launchObj>>>>>>>>>>>>>>', launchObj);
            }
            platform.setKeepScreenOn();
            platform.updateShareMenu();
            platform.showShareMenu();
            platform.onShareAppMessage(function () {
                return _this.defaultMsg;
            });
            this.systemInfos = platform.getSystemInfoSync();
            console.log("systemInfo >> ", this.systemInfos);
        };
        MiniWechatManager.prototype.getUpdateManager = function () {
        };
        MiniWechatManager.prototype.onAudioInterruptionStart = function (call) {
            platform.onAudioInterruptionBegin(call);
        };
        MiniWechatManager.prototype.onAudioInterruptionOver = function (call) {
            platform.onAudioInterruptionEnd(call);
        };
        MiniWechatManager.prototype.initGameReleaseConfig = function () {
            if (DeviceUtil.isWXMiniGame() && !BaseConst.infos.gameInfo.isDY) {
                Laya.loader.load("configs/wxmoregame.json?v=" + Math.random(), Laya.Handler.create(this, function (res) {
                    if (typeof (res) == "string") {
                        res = JSON.parse(res);
                    }
                    for (var i = 0, len = res.iconList.length; i < len; i++) {
                        res.iconList[i].ad_img = "https://package.32yx.com/ecy_game_small/laya/girl/wx_res/moregame/" + res.iconList[i].ad_img;
                    }
                    GDataMgr.getInstance().weCatMoreInfo = res.iconList;
                }));
            }
        };
        MiniWechatManager.prototype.getUserInfos = function () {
            return new Promise(function (resolve) {
                resolve(null);
            });
        };
        MiniWechatManager.prototype.initTemp = function () {
            return __awaiter(this, void 0, void 0, function () {
                var info, strOpenIdOther, strOpenIdOther;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getUserInfos()];
                        case 1:
                            info = _a.sent();
                            if (!(info == null)) return [3, 3];
                            return [4, this.createUserButtonSize(0, 1, 0)];
                        case 2:
                            info = _a.sent();
                            strOpenIdOther = GDataMgr.getInstance().eGInfos.query["openid"];
                            console.log("strOpenIdOther = ", strOpenIdOther);
                            if (strOpenIdOther && strOpenIdOther != "") {
                                platform.createUserInfoButton(function (data) {
                                    GDataMgr.getInstance().uinfo.nick = data.userInfo.nickName;
                                    GDataMgr.getInstance().uinfo.avatarUrl = data.userInfo.avatarUrl;
                                    if (!BaseConst.infos.gameInfo.isDY) {
                                        InviteMgr.getInstance().checkInvite();
                                        console.log("createUserInfoButton 用户信息 : ", GDataMgr.getInstance().uinfo);
                                    }
                                    info = data;
                                });
                            }
                            return [3, 4];
                        case 3:
                            GDataMgr.getInstance().uinfo.nick = info.userInfo.nickName;
                            GDataMgr.getInstance().uinfo.avatarUrl = info.userInfo.avatarUrl;
                            strOpenIdOther = GDataMgr.getInstance().eGInfos.query["openid"];
                            console.log("strOpenIdOther = ", strOpenIdOther);
                            if (strOpenIdOther && strOpenIdOther != "") {
                                InviteMgr.getInstance().checkInvite();
                                console.log("createUserInfoButton 用户信息 judgeInvite: ", GDataMgr.getInstance().uinfo);
                            }
                            _a.label = 4;
                        case 4:
                            MiniGameMgr.instance.defaultMsg.query = "openid=" + GDataMgr.getInstance().uinfo.openId;
                            platform.onShareAppMessage(function () {
                                return MiniGameMgr.instance.defaultMsg;
                            });
                            return [2, info];
                    }
                });
            });
        };
        MiniWechatManager.prototype.createUserButtonSize = function (percentTop, pectendSize, percentLeft) {
            var resInfo = platform.getSystemInfoSync();
            var left = resInfo['windowWidth'] * percentLeft;
            var top = resInfo['windowHeight'] * percentTop;
            var wid = resInfo['windowWidth'] * pectendSize;
            var height = resInfo['windowHeight'] * pectendSize;
        };
        MiniWechatManager.prototype.onShow = function (callBack) {
            var _this = this;
            platform.onShow(function () {
                callBack && callBack();
                _this._showTime = new Date().getTime();
                if (!DeviceUtil.isTTMiniGame()) {
                    if (_this._showTime - _this._hideTime >= _this._sucTime) {
                        _this._shareSucful && _this._shareSucful.call(_this._thisObj);
                    }
                    else {
                        _this._shareFailful && _this._shareFailful.call(_this._thisObj);
                    }
                }
                PlayerDataMgr.nTimeHidSec = _this._showTime - _this._hideTime;
                if (PlayerDataMgr.nTimeHidSec == _this._showTime)
                    PlayerDataMgr.nTimeHidSec = 0;
                _this._shareFailful = null;
                _this._shareSucful = null;
                _this._thisObj = null;
            });
        };
        MiniWechatManager.prototype.onHide = function (callBack) {
            var _this = this;
            platform.onHide(function () {
                callBack && callBack();
                _this._hideTime = new Date().getTime();
            });
        };
        MiniWechatManager.prototype.showMoreMiniGame = function (data) {
            return new Promise(function (resolve) {
            });
        };
        MiniWechatManager.prototype.getShareInfos = function (query) {
            var shareInfo = this.shareInfos;
            var info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
            if (query) {
                var openId = GDataMgr.getInstance().uinfo.openId;
                query['openid'] = openId;
            }
            info.query = Utils.querStr(query);
            return info;
        };
        MiniWechatManager.prototype.getShareInfoOfDouYin = function (query) {
            var shareInfo = this.shareInfoOfDouYin;
            var info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
            if (query) {
                var openId = GDataMgr.getInstance().uinfo.openId;
                query['openid'] = openId;
            }
            info.query = Utils.querStr(query);
            info.extra.videoPath = this._strVideoPatch;
            return info;
        };
        MiniWechatManager.prototype.shareAppMsg = function (data) {
            if (data == null) {
                data = {};
            }
            if (!data.message) {
                data.message = this.getShareInfos({});
            }
            this._shareSucful = data.sucFun;
            this._shareFailful = function () {
                data.failFun && data.failFun();
            };
            this._thisObj = data.thisObj;
            this._sucTime = data.time || 3000;
            platform.shareAppMessage(data.message);
        };
        MiniWechatManager.prototype.playVideoAd = function (data) {
            if (!DeviceUtil.isMiniGame()) {
                data.successFun && data.successFun();
                return;
            }
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
            var videoId = GDataMgr.getInstance().videoId;
            if (data.isLongVideo) {
                videoId = GDataMgr.getInstance().longVideoId;
            }
            if (videoId.length <= 0) {
                TipsManager.getInstance().showDefaultTips('开发中');
                data.errorFun && data.errorFun();
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                return;
            }
            ViewChangeMgr.getInstance().showBufLoadingView();
            var adId = videoId[Math.floor(Math.random() * videoId.length)];
            platform.createRewardedVideoAd(adId, function (res) {
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                if (res.isEnded) {
                    data.successFun && data.successFun();
                    if (!DeviceUtil.isTTMiniGame()) {
                        SoundMgr.getInstance().playBgm();
                    }
                    console.log(" video normal！");
                }
                else {
                    data.failFun && data.failFun();
                    if (!DeviceUtil.isTTMiniGame()) {
                        SoundMgr.getInstance().playBgm();
                    }
                    console.log(" video not finish！");
                }
                ViewChangeMgr.getInstance().hideBufLoadingView();
            }, function () {
                ViewChangeMgr.getInstance().hideBufLoadingView();
                TipsManager.getInstance().showDefaultTips('开发中');
                data.errorFun && data.errorFun();
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                if (!DeviceUtil.isTTMiniGame()) {
                    SoundMgr.getInstance().playBgm();
                }
            });
        };
        MiniWechatManager.prototype.showBanner = function (offset) {
            if (!DeviceUtil.isMiniGame()) {
                return;
            }
            if (!this._bFlagSpecialView) {
                return;
            }
            this._canShowBanner = true;
            var bannerId = GDataMgr.getInstance().bannerId;
            if (bannerId.length <= 0) {
                console.log("bannerId.length <= 0");
                return;
            }
            var adId = bannerId[Math.floor(Math.random() * bannerId.length)];
            console.log('广告id', adId);
            if (this._bannerAd == null) {
                var bannerAd = platform.createBannerAd(adId);
                this._bannerAd = bannerAd;
                if (bannerAd == null)
                    return;
                bannerAd.show();
            }
            this._bannerAd.show();
            if (!this._canShowBanner) {
                this._bannerAd.hide();
            }
            if (DeviceUtil.isWXMiniGame()) {
                this.weCatRefreshBanner();
            }
        };
        MiniWechatManager.prototype.weCatRefreshBannerReadl = function () {
            if (!this._bFlagSpecialView) {
                return;
            }
            if (DeviceUtil.isWXMiniGame()) {
                var bannerId = GDataMgr.getInstance().bannerId;
                if (bannerId.length <= 0) {
                    console.log("bannerId.length <= 0");
                    return;
                }
                var adId = bannerId[Math.floor(Math.random() * bannerId.length)];
                platform.binnerDestroy();
                console.log('销毁广告');
                this._bannerAd = null;
                var bannerAd = platform.createBannerAd(adId);
                this._bannerAd = bannerAd;
                Laya.timer.once(300, this, this.showBanner);
            }
        };
        MiniWechatManager.prototype.weCatRefreshBanner = function () {
            if (this._bTimerOpen) {
                return;
            }
            this._bTimerOpen = true;
            Laya.timer.clear(this, this.weCatRefreshBannerReadl);
            Laya.timer.loop(BaseConst.infos.gameInfo.binnertime, this, this.weCatRefreshBannerReadl);
        };
        MiniWechatManager.prototype.hideBannerAd = function () {
            if (this._bannerAd != null) {
                this._bannerAd.hide();
            }
            this._canShowBanner = false;
        };
        MiniWechatManager.prototype.showMoreGamesModel = function () {
            var appLaunchOptions = [];
            for (var i = 0, len = GDataMgr.getInstance().weCatMoreInfo.length; i < len; i++) {
                appLaunchOptions.push({
                    appId: GDataMgr.getInstance().weCatMoreInfo[i].ad_appid,
                    query: "",
                    extraData: {}
                });
            }
            platform.showMoreGamesModal({
                appLaunchOptions: appLaunchOptions,
                success: function (res) {
                    console.log("success", res.errMsg);
                },
                fail: function (res) {
                    console.log("fail", res.errMsg);
                },
                complete: function (res) {
                    console.log("complete", res.errMsg);
                }
            });
        };
        MiniWechatManager.prototype.createGuessLikeView = function (parent) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var data, guessLike;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = PlatformDY.gameListInfos;
                                        if (data == null) {
                                            data = GDataMgr.getInstance().weCatMoreInfo;
                                        }
                                        if (!(data && data.length <= 0)) return [3, 2];
                                        return [4, PlatformDY.getGameList()];
                                    case 1:
                                        data = _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        if (!(data == null)) return [3, 4];
                                        return [4, PlatformDY.getGameList()];
                                    case 3:
                                        data = _a.sent();
                                        _a.label = 4;
                                    case 4:
                                        if (data == null) {
                                            resolve(null);
                                            return [2];
                                        }
                                        if (data.length <= 0) {
                                            return [2];
                                        }
                                        console.log("data(GuessLike) ->", data);
                                        guessLike = parent.getChildByName('GuessLike');
                                        if (guessLike == null) {
                                            guessLike = new GuessLike$1("game/uiView/platform/GuessLike.json", "game/uiView/platform/GuessLikeItem.json", data, 240);
                                            parent.addChild(guessLike);
                                        }
                                        guessLike.name = 'GuessLike';
                                        guessLike.mouseThrough = true;
                                        guessLike.x = (Laya.stage.width - guessLike.width) / 2;
                                        guessLike.y = Laya.stage.height - guessLike.height;
                                        resolve(guessLike);
                                        return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        return MiniWechatManager;
    }(MiniGameMgr));

    var MiniQQManager = (function (_super) {
        __extends(MiniQQManager, _super);
        function MiniQQManager() {
            var _this = _super.call(this) || this;
            _this._hideTime = 0;
            _this._showTime = 0;
            _this.defaultMsg = {
                "title": "一入宫门深似海，小主太难了！！",
                "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-1.jpg?v=" + 1.2,
                "query": ""
            };
            _this.shareInfoOfTTOrQQ = [
                {
                    "title": "一入宫门深似海，小主太难了！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-2.jpg?v=" + 1.2,
                    "query": ""
                },
                {
                    "title": "一入宫门深似海，小主太难了！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-3.jpg?v=" + 1.2,
                    "query": ""
                }
            ];
            _this.shareInfoOfWX = [
                {
                    "title": "一入宫门深似海，小主太难了！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/500x400-6.jpg?v=" + 1.2,
                    "query": ""
                },
                {
                    "title": "一入宫门深似海，小主太难了！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/500x400-7.jpg?v=" + 1.2,
                    "query": ""
                }
            ];
            _this.shareInfos = [
                {
                    "title": "一入宫门深似海，小主太难了！！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-4.jpg?v=" + 1.2,
                    "query": ""
                },
                {
                    "title": "一入宫门深似海，小主太难了！！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-5.jpg?v=" + 1.2,
                    "query": ""
                },
                {
                    "title": "一入宫门深似海，小主太难了！！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-6.jpg?v=" + 1.2,
                    "query": ""
                }
            ];
            _this.shareInfoOfDouYin = [
                {
                    "channel": "video",
                    "title": "烧脑推理，一键过关！",
                    "desc": "烧脑推理，一键过关",
                    "imageUrl": "",
                    "query": "",
                    "extra": {
                        "videoPath": "",
                        "videoTopics": ["小姐姐快跑", "帮助小姐姐逃出生天"]
                    }
                },
                {
                    "channel": "video",
                    "title": "休闲解密游戏，开动你的小脑筋帮助小姐姐逃离魔爪？",
                    "desc": "休闲解密游戏，开动你的小脑筋帮助小姐姐逃离魔爪？",
                    "imageUrl": "",
                    "query": "",
                    "extra": {
                        "videoPath": "",
                        "videoTopics": ["小姐姐快跑", "帮助小姐姐逃出生天"]
                    }
                },
                {
                    "channel": "video",
                    "title": "机会只有一次！救救小姐姐！",
                    "desc": "机会只有一次！救救小姐姐！",
                    "imageUrl": "",
                    "query": "",
                    "extra": {
                        "videoPath": "",
                        "videoTopics": ["小姐姐快跑", "帮助小姐姐逃出生天"]
                    }
                }
            ];
            _this.flagDouYin = false;
            _this._sucTime = 0;
            _this._canShowBanner = true;
            _this._bFlagSpecialView = true;
            _this._bTimerOpen = false;
            _this.canShowBanner = true;
            _this.isShowBanner = false;
            _this.qqBannelCloseFun = null;
            _this.isHideQQBanner = false;
            _this.bannerArr = [];
            return _this;
        }
        MiniQQManager.prototype.init = function () {
            var _this = this;
            var launchObj = platform.getLaunchOptionsSync();
            if (launchObj) {
                console.log('launchObj>>>>>>>>>>>>>>', launchObj);
            }
            platform.setKeepScreenOn();
            platform.updateShareMenu();
            platform.showShareMenu();
            platform.onShareAppMessage(function () {
                return _this.defaultMsg;
            });
            this.systemInfos = platform.getSystemInfoSync();
            console.log("systemInfo >> ", this.systemInfos);
        };
        MiniQQManager.prototype.getUpdateManager = function () {
        };
        MiniQQManager.prototype.onAudioInterruptionStart = function (call) {
            platform.onAudioInterruptionBegin(call);
        };
        MiniQQManager.prototype.onAudioInterruptionOver = function (call) {
            platform.onAudioInterruptionEnd(call);
        };
        MiniQQManager.prototype.getUserInfos = function () {
            return new Promise(function (resolve) {
                resolve(null);
            });
        };
        MiniQQManager.prototype.initTemp = function () {
            return __awaiter(this, void 0, void 0, function () {
                var info, strOpenIdOther, strOpenIdOther;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getUserInfos()];
                        case 1:
                            info = _a.sent();
                            if (!(info == null)) return [3, 3];
                            return [4, this.createUserButtonSize(0, 1, 0)];
                        case 2:
                            info = _a.sent();
                            strOpenIdOther = GDataMgr.getInstance().eGInfos.query["openid"];
                            console.log("strOpenIdOther = ", strOpenIdOther);
                            if (strOpenIdOther && strOpenIdOther != "") {
                                platform.createUserInfoButton(function (data) {
                                    GDataMgr.getInstance().uinfo.nick = data.userInfo.nickName;
                                    GDataMgr.getInstance().uinfo.avatarUrl = data.userInfo.avatarUrl;
                                    if (!BaseConst.infos.gameInfo.isDY) {
                                        InviteMgr.getInstance().checkInvite();
                                        console.log("createUserInfoButton 用户信息 : ", GDataMgr.getInstance().uinfo);
                                    }
                                    info = data;
                                });
                            }
                            return [3, 4];
                        case 3:
                            GDataMgr.getInstance().uinfo.nick = info.userInfo.nickName;
                            GDataMgr.getInstance().uinfo.avatarUrl = info.userInfo.avatarUrl;
                            strOpenIdOther = GDataMgr.getInstance().eGInfos.query["openid"];
                            console.log("strOpenIdOther = ", strOpenIdOther);
                            if (strOpenIdOther && strOpenIdOther != "") {
                                InviteMgr.getInstance().checkInvite();
                                console.log("createUserInfoButton 用户信息 judgeInvite: ", GDataMgr.getInstance().uinfo);
                            }
                            _a.label = 4;
                        case 4:
                            MiniGameMgr.instance.defaultMsg.query = "openid=" + GDataMgr.getInstance().uinfo.openId;
                            platform.onShareAppMessage(function () {
                                return MiniGameMgr.instance.defaultMsg;
                            });
                            return [2, info];
                    }
                });
            });
        };
        MiniQQManager.prototype.createUserButtonSize = function (percentTop, pectendSize, percentLeft) {
            var resInfo = platform.getSystemInfoSync();
            var left = resInfo['windowWidth'] * percentLeft;
            var top = resInfo['windowHeight'] * percentTop;
            var wid = resInfo['windowWidth'] * pectendSize;
            var height = resInfo['windowHeight'] * pectendSize;
        };
        MiniQQManager.prototype.onShow = function (callBack) {
            var _this = this;
            platform.onShow(function () {
                callBack && callBack();
                _this._showTime = new Date().getTime();
                if (!DeviceUtil.isTTMiniGame()) {
                    if (_this._showTime - _this._hideTime >= _this._sucTime) {
                        _this._shareSucful && _this._shareSucful.call(_this._thisObj);
                    }
                    else {
                        _this._shareFailful && _this._shareFailful.call(_this._thisObj);
                    }
                }
                PlayerDataMgr.nTimeHidSec = _this._showTime - _this._hideTime;
                if (PlayerDataMgr.nTimeHidSec == _this._showTime)
                    PlayerDataMgr.nTimeHidSec = 0;
                _this._shareFailful = null;
                _this._shareSucful = null;
                _this._thisObj = null;
            });
        };
        MiniQQManager.prototype.onHide = function (callBack) {
            var _this = this;
            platform.onHide(function () {
                callBack && callBack();
                _this._hideTime = new Date().getTime();
            });
        };
        MiniQQManager.prototype.showMoreMiniGame = function (data) {
            return new Promise(function (resolve) {
            });
        };
        MiniQQManager.prototype.getShareInfos = function (query) {
            var shareInfo = this.shareInfos;
            var info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
            if (query) {
                var openId = GDataMgr.getInstance().uinfo.openId;
                query['openid'] = openId;
            }
            info.query = Utils.querStr(query);
            return info;
        };
        MiniQQManager.prototype.getShareInfoOfDouYin = function (query) {
            var shareInfo = this.shareInfoOfDouYin;
            var info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
            if (query) {
                var openId = GDataMgr.getInstance().uinfo.openId;
                query['openid'] = openId;
            }
            info.query = Utils.querStr(query);
            info.extra.videoPath = this._strVideoPatch;
            return info;
        };
        MiniQQManager.prototype.shareAppMsg = function (data) {
            if (data == null) {
                data = {};
            }
            if (!data.message) {
                data.message = this.getShareInfos({});
            }
            this._shareSucful = data.sucFun;
            this._shareFailful = function () {
                data.failFun && data.failFun();
            };
            this._thisObj = data.thisObj;
            this._sucTime = data.time || 3000;
            platform.shareAppMessage(data.message);
        };
        MiniQQManager.prototype.playVideoAd = function (data) {
            if (!DeviceUtil.isMiniGame()) {
                data.successFun && data.successFun();
                return;
            }
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
            var videoId = GDataMgr.getInstance().videoId;
            if (data.isLongVideo) {
                videoId = GDataMgr.getInstance().longVideoId;
            }
            if (videoId.length <= 0) {
                TipsManager.getInstance().showDefaultTips('开发中');
                data.errorFun && data.errorFun();
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                return;
            }
            ViewChangeMgr.getInstance().showBufLoadingView();
            var adId = videoId[Math.floor(Math.random() * videoId.length)];
            platform.createRewardedVideoAd(adId, function (res) {
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                if (res.isEnded) {
                    data.successFun && data.successFun();
                    if (!DeviceUtil.isTTMiniGame()) {
                        SoundMgr.getInstance().playBgm();
                    }
                    console.log(" video normal！");
                }
                else {
                    data.failFun && data.failFun();
                    if (!DeviceUtil.isTTMiniGame()) {
                        SoundMgr.getInstance().playBgm();
                    }
                    console.log(" video not finish！");
                }
                ViewChangeMgr.getInstance().hideBufLoadingView();
            }, function () {
                ViewChangeMgr.getInstance().hideBufLoadingView();
                TipsManager.getInstance().showDefaultTips('开发中');
                data.errorFun && data.errorFun();
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                if (!DeviceUtil.isTTMiniGame()) {
                    SoundMgr.getInstance().playBgm();
                }
            });
        };
        MiniQQManager.prototype.showBanner = function (offset) {
            if (!DeviceUtil.isQQMiniGame()) {
                return;
            }
            this.canShowBanner = true;
            var bannerId = GDataMgr.getInstance().bannerId;
            if (bannerId.length <= 0) {
                return;
            }
            if (offset && offset.isNeedShowQQbaner) {
                this.showQQBanner();
            }
            this.showBannerOntime();
        };
        MiniQQManager.prototype.showBannerOntime = function () {
            var _this = this;
            if (this.isShowBanner)
                return;
            this.isShowBanner = true;
            this.createBanner();
            Laya.timer.clearAll(this);
            Laya.timer.loop(BaseConst.infos.gameInfo.binnertime, this, function () {
                console.log("定时创建广告");
                if (!_this.isHideQQBanner) ;
                _this.createBanner();
            });
        };
        MiniQQManager.prototype.createBanner = function () {
            var self = this;
            if (this.qqBanner) {
                this.qqBannelCloseFun && this.qqBannelCloseFun();
                this.qqBannelCloseFun = null;
                this.qqBanner.destroy();
            }
            this.qqBanner = null;
            var bannerId = GDataMgr.getInstance().bannerId;
            var adId = bannerId[Math.floor(Math.random() * bannerId.length)];
            var phone = platform.getSystemInfoSync();
            console.log(phone);
            var w = phone.screenWidth / 2;
            var h = phone.screenHeight;
            var left_b;
            var top_b;
            var bw = w * 2;
            var bh = 200;
            if (bw > w * 2) {
                bw = w * 2;
            }
            left_b = w - bw / 2;
            top_b = h - 105;
            var bannerAd = qq.createBannerAd({
                adUnitId: adId,
                style: {
                    top: top_b,
                    left: left_b,
                    width: bw,
                    height: bh
                }
            });
            var onResize = function (res) {
                bannerAd.style.left = w - res.width / 2;
                bannerAd.style.top = h - res.height;
            };
            bannerAd.onResize(onResize);
            var onErrorFun = function (data) {
                console.warn(data.errMsg);
                switch (data.errCode) {
                    case 1000:
                        console.warn("后端接口调用失败");
                        break;
                    case 1001:
                        console.warn("参数错误");
                        break;
                    case 1002:
                        console.warn("广告单元无效");
                        break;
                    case 1003:
                        console.warn("内部错误");
                        break;
                    case 1004:
                        console.warn("无合适的广告");
                        break;
                    case 1005:
                        console.warn("广告组件审核中");
                        break;
                    case 1006:
                        console.warn("广告组件被驳回");
                        break;
                    case 1007:
                        console.warn("广告组件被封禁");
                        break;
                    case 1008:
                        console.warn("广告单元已关闭");
                        break;
                }
            };
            bannerAd.onError(onErrorFun);
            self.qqBannelCloseFun = function () {
                bannerAd.offResize(onResize);
                bannerAd.offError(onErrorFun);
                bannerAd.offLoad(onLoadFun);
            };
            var onLoadFun = function () {
                console.log("createBanner>>>>>>>>>>>>>>>>> ", !self._bFlagSpecialView);
                if (!self._bFlagSpecialView) {
                    bannerAd.hide();
                }
                else {
                    bannerAd.show();
                }
            };
            bannerAd.onLoad(onLoadFun);
            if (!self._bFlagSpecialView) {
                bannerAd.hide();
            }
            else {
                bannerAd.show();
            }
            self.qqBanner = bannerAd;
        };
        MiniQQManager.prototype.hideQQBanner = function () {
            this.isHideQQBanner = true;
            if (this.qqBanner) {
                this.qqBanner.hide();
            }
        };
        MiniQQManager.prototype.showQQBanner = function () {
            this.isHideQQBanner = false;
            if (this.qqBanner) {
                this.qqBanner.show();
            }
        };
        MiniQQManager.prototype.destoryBanner = function () {
            if (this.bannerAd != null && this.bannerAd.destroy) {
                this.bannerAd.destroy();
                this.bannerAd = null;
            }
            this.canShowBanner = false;
        };
        MiniQQManager.prototype.hideBanner = function (isNeedHide) {
            if (isNeedHide === void 0) { isNeedHide = false; }
            if (this.bannerAd != null) {
                this.bannerAd.hide();
            }
            this.canShowBanner = false;
            if (isNeedHide) {
                this.hideQQBanner();
            }
        };
        MiniQQManager.prototype.hideBannerAd = function () {
            var bannerArr = this.bannerArr;
            for (var i = 0, len = bannerArr.length; i < len; i++) {
                var banner = bannerArr[i];
                if (banner) {
                    banner.hide();
                    banner.destroy();
                }
            }
            this.bannerArr.length = 0;
            if (this._bannerAd != null) {
                this._bannerAd.hide();
                this._bannerAd.destroy();
            }
            this._bannerAd = null;
            this._canShowBanner = false;
            this.hideQQBanner();
        };
        MiniQQManager.prototype.initBlockAD = function () {
            if (DeviceUtil.isIOS()) {
                this._blockAd = platform.createBlockAD();
            }
        };
        MiniQQManager.prototype.showBlockAD = function () {
            console.log('---');
            if (!DeviceUtil.isQQMiniGame()) {
                return;
            }
            if (!DeviceUtil.isIOS()) {
                if (!this._blockAd) {
                    this._blockAd = platform.createBlockAD();
                }
            }
            else {
                if (!this._blockAd) {
                    return;
                }
                var blockAdShow = this._blockAd.show();
                if (blockAdShow) {
                    blockAdShow.then(function () {
                        console.log("积木广告显示成功！");
                    }).catch(function (err) {
                        console.log("积木广告显示失败！ ", err);
                    });
                }
            }
        };
        MiniQQManager.prototype.hideBlockAD = function () {
            if (!DeviceUtil.isQQMiniGame()) {
                return;
            }
            if (!this._blockAd) {
                return;
            }
            if (DeviceUtil.isIOS()) {
                this._blockAd.hide();
                return;
            }
            console.log("destroy  --  积木广告");
            this._blockAd.destroy();
            this._blockAd = null;
        };
        MiniQQManager.prototype.initAdBox = function () {
            var self = this;
            if (!self._tempBoxAD) {
                self._tempBoxAD = platform.createAppBox(GDataMgr.getInstance().boxId[0]);
                self._tempBoxAD.load().then(function (res) {
                    console.log("boxAd load");
                    console.log(res);
                }).catch(function (err) {
                    console.log("boxAd load err");
                    console.log(err);
                });
                self._tempBoxAD.onClose(function () {
                    self._imgRect && self._imgRect.removeSelf();
                    self._onCloseBoxAD && self._onCloseBoxAD();
                });
            }
        };
        MiniQQManager.prototype.showAdBox = function (onCloseCall) {
            var self = this;
            self._onCloseBoxAD = onCloseCall;
            if (DeviceUtil.isQQMiniGame()) {
                if (!self._imgRect) {
                    self._imgRect = new Laya.Image(ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName("game_panel_db_png").url));
                    self._imgRect.sizeGrid = "3,3,2,2";
                    self._imgRect.width = Laya.stage.width;
                    self._imgRect.height = Laya.stage.height;
                }
                try {
                    if (self._tempBoxAD) {
                        var bxoAD = self._tempBoxAD.load();
                        if (bxoAD) {
                            bxoAD.then(function () {
                                var boxAdShow = self._tempBoxAD.show();
                                if (boxAdShow) {
                                    boxAdShow.then(function (res) {
                                        console.log("boxAd show");
                                        console.log(res);
                                        Laya.stage.addChild(self._imgRect);
                                    }).catch(function (err) {
                                        console.log("boxAd show err");
                                        console.log(err);
                                        self._onCloseBoxAD && self._onCloseBoxAD();
                                    });
                                }
                                else {
                                    self._onCloseBoxAD && self._onCloseBoxAD();
                                }
                            });
                        }
                        else {
                            self._onCloseBoxAD && self._onCloseBoxAD();
                        }
                    }
                    else {
                        self._onCloseBoxAD && self._onCloseBoxAD();
                    }
                }
                catch (err) {
                    console.log("err<>>>>>", err);
                    self._onCloseBoxAD && self._onCloseBoxAD();
                }
            }
            else {
                self._onCloseBoxAD && self._onCloseBoxAD();
            }
        };
        MiniQQManager.prototype.showChaPinAd = function () {
            if (DeviceUtil.isTTMiniGame()) {
                var info = platform.getSystemInfoSync();
                if (info.appName.toUpperCase() == 'DOUYIN') {
                    return;
                }
                platform.createInterstitialAd({ adUnitId: "h7n4g8mhqfp1h56aim" });
                console.log("to show createInterstitialAd!");
            }
        };
        MiniQQManager.prototype.showMoreGamesModel = function () {
            var appLaunchOptions = [];
            for (var i = 0, len = GDataMgr.getInstance().weCatMoreInfo.length; i < len; i++) {
                appLaunchOptions.push({
                    appId: GDataMgr.getInstance().weCatMoreInfo[i].ad_appid,
                    query: "",
                    extraData: {}
                });
            }
            platform.showMoreGamesModal({
                appLaunchOptions: appLaunchOptions,
                success: function (res) {
                    console.log("success", res.errMsg);
                },
                fail: function (res) {
                    console.log("fail", res.errMsg);
                },
                complete: function (res) {
                    console.log("complete", res.errMsg);
                }
            });
        };
        MiniQQManager.prototype.createGuessLikeView = function (parent) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var data, guessLike;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = PlatformDY.gameListInfos;
                                        if (!(data == null)) return [3, 2];
                                        return [4, PlatformDY.getGameList()];
                                    case 1:
                                        data = _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        if (data == null) {
                                            resolve(null);
                                            return [2];
                                        }
                                        if (data.length <= 0) {
                                            return [2];
                                        }
                                        console.log("data(GuessLike) ->", data);
                                        guessLike = parent.getChildByName('GuessLike');
                                        if (guessLike == null) {
                                            guessLike = new GuessLike$1("game/uiView/platform/GuessLike.json", "game/uiView/platform/GuessLikeItem.json", data, 220);
                                            parent.addChild(guessLike);
                                        }
                                        guessLike.name = 'GuessLike';
                                        guessLike.mouseThrough = true;
                                        guessLike.x = (Laya.stage.width - guessLike.width) / 2;
                                        guessLike.y = Laya.stage.height - guessLike.height;
                                        resolve(guessLike);
                                        return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        return MiniQQManager;
    }(MiniGameMgr));

    var MiniTTManager = (function (_super) {
        __extends(MiniTTManager, _super);
        function MiniTTManager() {
            var _this = _super.call(this) || this;
            _this._hideTime = 0;
            _this._showTime = 0;
            _this.defaultMsg = {
                "title": "一入宫门深似海，小主太难了！！",
                "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-1.jpg?v=" + 1.2,
                "query": ""
            };
            _this.shareInfoOfTTOrQQ = [
                {
                    "title": "一入宫门深似海，小主太难了！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-2.jpg?v=" + 1.2,
                    "query": ""
                },
                {
                    "title": "一入宫门深似海，小主太难了！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-3.jpg?v=" + 1.2,
                    "query": ""
                }
            ];
            _this.shareInfoOfWX = [
                {
                    "title": "一入宫门深似海，小主太难了！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/500x400-6.jpg?v=" + 1.2,
                    "query": ""
                },
                {
                    "title": "一入宫门深似海，小主太难了！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/500x400-7.jpg?v=" + 1.2,
                    "query": ""
                }
            ];
            _this.shareInfos = [
                {
                    "title": "一入宫门深似海，小主太难了！！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-4.jpg?v=" + 1.2,
                    "query": ""
                },
                {
                    "title": "一入宫门深似海，小主太难了！！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-5.jpg?v=" + 1.2,
                    "query": ""
                },
                {
                    "title": "一入宫门深似海，小主太难了！！",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/gongdou/share/qq/icon512-6.jpg?v=" + 1.2,
                    "query": ""
                }
            ];
            _this.shareInfoOfDouYin = [
                {
                    "channel": "video",
                    "title": "烧脑推理，一键过关！",
                    "desc": "烧脑推理，一键过关",
                    "imageUrl": "",
                    "query": "",
                    "extra": {
                        "videoPath": "",
                        "videoTopics": ["小姐姐快跑", "帮助小姐姐逃出生天"]
                    }
                },
                {
                    "channel": "video",
                    "title": "休闲解密游戏，开动你的小脑筋帮助小姐姐逃离魔爪？",
                    "desc": "休闲解密游戏，开动你的小脑筋帮助小姐姐逃离魔爪？",
                    "imageUrl": "",
                    "query": "",
                    "extra": {
                        "videoPath": "",
                        "videoTopics": ["小姐姐快跑", "帮助小姐姐逃出生天"]
                    }
                },
                {
                    "channel": "video",
                    "title": "机会只有一次！救救小姐姐！",
                    "desc": "机会只有一次！救救小姐姐！",
                    "imageUrl": "",
                    "query": "",
                    "extra": {
                        "videoPath": "",
                        "videoTopics": ["小姐姐快跑", "帮助小姐姐逃出生天"]
                    }
                }
            ];
            _this.flagDouYin = false;
            _this._sucTime = 0;
            _this._canShowBanner = true;
            _this._bFlagSpecialView = true;
            _this._bTimerOpen = false;
            _this._nRecordTime = 60;
            _this._nRecordTimeReal = 0;
            _this._onShareVideoSuccess = false;
            return _this;
        }
        MiniTTManager.prototype.init = function () {
            var _this = this;
            var launchObj = platform.getLaunchOptionsSync();
            if (launchObj) {
                console.log('launchObj>>>>>>>>>>>>>>', launchObj);
            }
            platform.setKeepScreenOn();
            platform.updateShareMenu();
            platform.showShareMenu();
            platform.onShareAppMessage(function () {
                return _this.defaultMsg;
            });
            this.systemInfos = platform.getSystemInfoSync();
            console.log("systemInfo >> ", this.systemInfos);
        };
        MiniTTManager.prototype.initGameReleaseConfig = function () {
            if (DeviceUtil.isTTMiniGame()) {
                Laya.loader.load("configs/ttmoregame.json?v=" + Math.random(), Laya.Handler.create(this, function (res) {
                    if (typeof (res) == "string") {
                        res = JSON.parse(res);
                    }
                    for (var i = 0, len = res.iconList.length; i < len; i++) {
                        res.iconList[i].ad_img = "https://package.32yx.com/ecy_game_small/laya/girl/tt/moregame/" + res.iconList[i].ad_img;
                    }
                    GDataMgr.getInstance().weCatMoreInfo = res.iconList;
                }));
            }
        };
        MiniTTManager.prototype.getUpdateManager = function () {
        };
        MiniTTManager.prototype.onAudioInterruptionStart = function (call) {
            platform.onAudioInterruptionBegin(call);
        };
        MiniTTManager.prototype.onAudioInterruptionOver = function (call) {
            platform.onAudioInterruptionEnd(call);
        };
        MiniTTManager.prototype.getUserInfos = function () {
            return new Promise(function (resolve) {
                resolve(null);
            });
        };
        MiniTTManager.prototype.initTemp = function () {
            return __awaiter(this, void 0, void 0, function () {
                var info, strOpenIdOther, strOpenIdOther;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getUserInfos()];
                        case 1:
                            info = _a.sent();
                            if (!(info == null)) return [3, 3];
                            return [4, this.createUserButtonSize(0, 1, 0)];
                        case 2:
                            info = _a.sent();
                            strOpenIdOther = GDataMgr.getInstance().eGInfos.query["openid"];
                            console.log("strOpenIdOther = ", strOpenIdOther);
                            if (strOpenIdOther && strOpenIdOther != "") {
                                platform.createUserInfoButton(function (data) {
                                    GDataMgr.getInstance().uinfo.nick = data.userInfo.nickName;
                                    GDataMgr.getInstance().uinfo.avatarUrl = data.userInfo.avatarUrl;
                                    if (!BaseConst.infos.gameInfo.isDY) {
                                        InviteMgr.getInstance().checkInvite();
                                        console.log("createUserInfoButton 用户信息 : ", GDataMgr.getInstance().uinfo);
                                    }
                                    info = data;
                                });
                            }
                            return [3, 4];
                        case 3:
                            GDataMgr.getInstance().uinfo.nick = info.userInfo.nickName;
                            GDataMgr.getInstance().uinfo.avatarUrl = info.userInfo.avatarUrl;
                            strOpenIdOther = GDataMgr.getInstance().eGInfos.query["openid"];
                            console.log("strOpenIdOther = ", strOpenIdOther);
                            if (strOpenIdOther && strOpenIdOther != "") {
                                InviteMgr.getInstance().checkInvite();
                                console.log("createUserInfoButton 用户信息 judgeInvite: ", GDataMgr.getInstance().uinfo);
                            }
                            _a.label = 4;
                        case 4:
                            MiniGameMgr.instance.defaultMsg.query = "openid=" + GDataMgr.getInstance().uinfo.openId;
                            platform.onShareAppMessage(function () {
                                return MiniGameMgr.instance.defaultMsg;
                            });
                            return [2, info];
                    }
                });
            });
        };
        MiniTTManager.prototype.createUserButtonSize = function (percentTop, pectendSize, percentLeft) {
            var resInfo = platform.getSystemInfoSync();
            var left = resInfo['windowWidth'] * percentLeft;
            var top = resInfo['windowHeight'] * percentTop;
            var wid = resInfo['windowWidth'] * pectendSize;
            var height = resInfo['windowHeight'] * pectendSize;
        };
        MiniTTManager.prototype.onShow = function (callBack) {
            var _this = this;
            platform.onShow(function () {
                callBack && callBack();
                _this._showTime = new Date().getTime();
                if (!DeviceUtil.isTTMiniGame()) {
                    if (_this._showTime - _this._hideTime >= _this._sucTime) {
                        _this._shareSucful && _this._shareSucful.call(_this._thisObj);
                    }
                    else {
                        _this._shareFailful && _this._shareFailful.call(_this._thisObj);
                    }
                }
                PlayerDataMgr.nTimeHidSec = _this._showTime - _this._hideTime;
                if (PlayerDataMgr.nTimeHidSec == _this._showTime)
                    PlayerDataMgr.nTimeHidSec = 0;
                _this._shareFailful = null;
                _this._shareSucful = null;
                _this._thisObj = null;
            });
        };
        MiniTTManager.prototype.onHide = function (callBack) {
            var _this = this;
            platform.onHide(function () {
                callBack && callBack();
                _this._hideTime = new Date().getTime();
            });
        };
        MiniTTManager.prototype.showMoreMiniGame = function (data) {
            return new Promise(function (resolve) {
            });
        };
        MiniTTManager.prototype.getShareInfos = function (query) {
            var shareInfo = this.shareInfos;
            var info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
            if (query) {
                var openId = GDataMgr.getInstance().uinfo.openId;
                query['openid'] = openId;
            }
            info.query = Utils.querStr(query);
            return info;
        };
        MiniTTManager.prototype.getShareInfoOfDouYin = function (query) {
            var shareInfo = this.shareInfoOfDouYin;
            var info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
            if (query) {
                var openId = GDataMgr.getInstance().uinfo.openId;
                query['openid'] = openId;
            }
            info.query = Utils.querStr(query);
            info.extra.videoPath = this._strVideoPatch;
            return info;
        };
        MiniTTManager.prototype.shareAppMsg = function (data) {
            if (data == null) {
                data = {};
            }
            if (!data.message) {
                data.message = this.getShareInfos({});
            }
            if (DeviceUtil.isTTMiniGame()) {
                var info = platform.getSystemInfoSync();
                if (info.appName.toUpperCase() == 'DOUYIN' && this.flagDouYin) {
                    data.message = this.getShareInfoOfDouYin({});
                    console.log("data.message = ", data.message);
                }
                if (data.sucFun) {
                    data.sucFun && (data.message.success = data.sucFun);
                }
                else {
                    data.message.success = function () {
                        TipsManager.getInstance().showDefaultTips('分享成功');
                    };
                }
                if (data.failFun) {
                    data.failFun && (data.message.fail = data.failFun);
                }
                else {
                    data.message.fail = function () {
                        TipsManager.getInstance().showDefaultTips('分享失败');
                    };
                }
                platform.shareAppMessage(data.message);
                return;
            }
        };
        MiniTTManager.prototype.playVideoAd = function (data) {
            if (!DeviceUtil.isMiniGame()) {
                data.successFun && data.successFun();
                return;
            }
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
            var videoId = GDataMgr.getInstance().videoId;
            if (data.isLongVideo) {
                videoId = GDataMgr.getInstance().longVideoId;
            }
            if (videoId.length <= 0) {
                TipsManager.getInstance().showDefaultTips('开发中');
                data.errorFun && data.errorFun();
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                return;
            }
            ViewChangeMgr.getInstance().showBufLoadingView();
            var adId = videoId[Math.floor(Math.random() * videoId.length)];
            platform.createRewardedVideoAd(adId, function (res) {
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                if (res.isEnded) {
                    data.successFun && data.successFun();
                    if (!DeviceUtil.isTTMiniGame()) {
                        SoundMgr.getInstance().playBgm();
                    }
                    console.log(" video normal！");
                }
                else {
                    data.failFun && data.failFun();
                    if (!DeviceUtil.isTTMiniGame()) {
                        SoundMgr.getInstance().playBgm();
                    }
                    console.log(" video not finish！");
                }
                ViewChangeMgr.getInstance().hideBufLoadingView();
            }, function () {
                ViewChangeMgr.getInstance().hideBufLoadingView();
                TipsManager.getInstance().showDefaultTips('开发中');
                data.errorFun && data.errorFun();
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                if (!DeviceUtil.isTTMiniGame()) {
                    SoundMgr.getInstance().playBgm();
                }
            });
        };
        MiniTTManager.prototype.showBanner = function (offset) {
            if (!DeviceUtil.isMiniGame()) {
                return;
            }
            if (DeviceUtil.isQQMiniGame() && !this._bFlagSpecialView) {
                return;
            }
            if (DeviceUtil.isTTMiniGame()) {
                var info = platform.getSystemInfoSync();
                if (info.appName.toUpperCase() == 'DOUYIN') {
                    return;
                }
            }
            this._canShowBanner = true;
            var bannerId = GDataMgr.getInstance().bannerId;
            if (bannerId.length <= 0) {
                console.log("bannerId.length <= 0");
                return;
            }
            var adId = bannerId[Math.floor(Math.random() * bannerId.length)];
            console.log('广告id', adId);
            if (this._bannerAd == null) {
                var bannerAd = platform.createBannerAd(adId);
                this._bannerAd = bannerAd;
                if (bannerAd == null)
                    return;
                bannerAd.show();
            }
            this._bannerAd.show();
            if (!this._canShowBanner) {
                this._bannerAd.hide();
            }
            if (offset) {
                this._bannerAd.style.left = offset.w - this._bannerAd.style.realWidth / 2 + 0.1;
                this._bannerAd.style.top = offset.h - this._bannerAd.style.realHeight + 0.1;
                offset.callback && offset.callback();
            }
        };
        MiniTTManager.prototype.hideBannerAd = function () {
            if (DeviceUtil.isTTMiniGame()) {
                var info = platform.getSystemInfoSync();
                if (info.appName.toUpperCase() == 'DOUYIN') {
                    return;
                }
            }
            if (this._bannerAd != null) {
                this._bannerAd.hide();
            }
            this._canShowBanner = false;
        };
        MiniTTManager.prototype.initVideoAdInfo = function () {
            if (!DeviceUtil.isTTMiniGame()) {
                return;
            }
            var self = this;
            self._recorder = platform.getGameRecorderManager();
            self._recorder.onStart(function (res) {
                console.log("onStart -> ", res);
            });
            self._recorder.onStop(function (res) {
                MiniGameMgr.instance._strVideoPatch = res.videoPath;
                if (MiniGameMgr.instance._nRecordTimeReal < 3000) {
                    MiniGameMgr.instance._strVideoPatch = null;
                }
                console.log("onStop -> ", MiniGameMgr.instance._strVideoPatch);
                MiniGameMgr.instance._saveCallF && MiniGameMgr.instance._saveCallF();
            });
            self._recorder.onError(function (err) {
                console.log("onError -> ", err);
                MiniGameMgr.instance._saveCallF && MiniGameMgr.instance._saveCallF();
            });
        };
        MiniTTManager.prototype.StartRecordVideo = function () {
            var _this = this;
            if (!DeviceUtil.isTTMiniGame()) {
                return;
            }
            this._nRecordTimeReal = 0;
            this._strVideoPatch = "";
            Laya.timer.once(200, this, function () {
                platform.getGameRecorderManager().start({ duration: _this._nRecordTime });
            });
            Laya.timer.loop(1000, this, this.timeStopVideoAd);
            console.log("开始录制视频");
        };
        MiniTTManager.prototype.timeStopVideoAd = function () {
            this._nRecordTimeReal += 1000;
            if (this._nRecordTimeReal >= this._nRecordTime * 1000) {
                this.StopVideoAd();
            }
        };
        MiniTTManager.prototype.StopVideoAd = function () {
            if (!DeviceUtil.isTTMiniGame()) {
                return;
            }
            EventMgr.getInstance().sendEvent(GEvent.C_V_IMG);
            platform.getGameRecorderManager().stop();
            Laya.timer.clear(this, this.timeStopVideoAd);
            console.log("停止录制视频  this.nRecordTimeReal=", this._nRecordTimeReal);
        };
        MiniTTManager.prototype.shareGameRecordVideo = function (data) {
            if (!this._strVideoPatch || this._strVideoPatch.length == 0) {
                TipsManager.getInstance().showDefaultTips("录制视频需要大于3秒哦!");
                data.errorFun && data.errorFun();
                return;
            }
            if (this._nRecordTimeReal <= 3000) {
                TipsManager.getInstance().showDefaultTips("录制视频失败");
                data.failFun && data.failFun();
                return;
            }
            if (!DeviceUtil.isTTMiniGame()) {
                return;
            }
            console.log("分享游戏视频--");
            var obj = {};
            obj.title = "小姐姐快跑";
            obj.query = "openId=" + GDataMgr.getInstance().uinfo.openId + "&nick=" + GDataMgr.getInstance().uinfo.nick;
            obj.videoPath = this._strVideoPatch;
            obj.success = function () {
                console.log("视频分享成功！");
                TipsManager.getInstance().showDefaultTips("发布录制视频成功");
                data.successFun && data.successFun();
            };
            obj.fail = function (res) {
                console.log("视频分享失败！", res);
                data.failFun && data.failFun();
                TipsManager.getInstance().showDefaultTips("发布录制视频失败");
            };
            platform.shareVideo(obj);
        };
        MiniTTManager.prototype.onShareVideoAd = function (data) {
            this.shareGameRecordVideo(data);
        };
        MiniTTManager.prototype.showChaPinAd = function () {
            if (DeviceUtil.isTTMiniGame()) {
                var info = platform.getSystemInfoSync();
                if (info.appName.toUpperCase() == 'DOUYIN') {
                    return;
                }
                platform.createInterstitialAd({ adUnitId: "h7n4g8mhqfp1h56aim" });
                console.log("to show createInterstitialAd!");
            }
        };
        MiniTTManager.prototype.showMoreGamesModel = function () {
            var appLaunchOptions = [];
            for (var i = 0, len = GDataMgr.getInstance().weCatMoreInfo.length; i < len; i++) {
                appLaunchOptions.push({
                    appId: GDataMgr.getInstance().weCatMoreInfo[i].ad_appid,
                    query: "",
                    extraData: {}
                });
            }
            platform.showMoreGamesModal({
                appLaunchOptions: appLaunchOptions,
                success: function (res) {
                    console.log("success", res.errMsg);
                },
                fail: function (res) {
                    console.log("fail", res.errMsg);
                },
                complete: function (res) {
                    console.log("complete", res.errMsg);
                }
            });
        };
        MiniTTManager.prototype.createGuessLikeView = function (parent) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var data, guessLike;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = PlatformDY.gameListInfos;
                                        if (!(data == null)) return [3, 2];
                                        return [4, PlatformDY.getGameList()];
                                    case 1:
                                        data = _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        if (data == null) {
                                            resolve(null);
                                            return [2];
                                        }
                                        if (data.length <= 0) {
                                            return [2];
                                        }
                                        console.log("data(GuessLike) ->", data);
                                        guessLike = parent.getChildByName('GuessLike');
                                        if (guessLike == null) {
                                            guessLike = new GuessLike$1("game/uiView/platform/GuessLike.json", "game/uiView/platform/GuessLikeItem.json", data, 220);
                                            parent.addChild(guessLike);
                                        }
                                        guessLike.name = 'GuessLike';
                                        guessLike.mouseThrough = true;
                                        guessLike.x = (Laya.stage.width - guessLike.width) / 2;
                                        guessLike.y = Laya.stage.height - guessLike.height;
                                        resolve(guessLike);
                                        return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        MiniTTManager.prototype.appName = function () {
            if (!DeviceUtil.isTTMiniGame())
                return "Toutiao";
            var self = this;
            if (!self.systemInfos) {
                self.systemInfos = platform.getSystemInfoSync();
            }
            return self.systemInfos.appName;
        };
        return MiniTTManager;
    }(MiniGameMgr));

    var VivoNativeBanner = (function (_super) {
        __extends(VivoNativeBanner, _super);
        function VivoNativeBanner(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "VivoNativeBanner";
            _this.isReportAdClick = false;
            _this.viewData_ = data;
            _this.visible = false;
            _this.skin = "skins/platform/vivo/VivoNativeBanner.json";
            return _this;
        }
        VivoNativeBanner.prototype.childrenCreated = function () {
            this.y = Laya.stage.height - this.height;
            this.initView();
            this.addEvent();
        };
        VivoNativeBanner.prototype.adaptationStage = function () {
        };
        VivoNativeBanner.prototype.initView = function () {
            var data = this.viewData_.adList[0];
            this.img_icon.skin = data.icon;
            this.img_flag.skin = data.logoUrl;
            this.lab_title.text = data.title;
            this.lab_desc.text = data.desc;
            this.lab_clickBtnTxt.text = data.clickBtnTxt || "点击下载";
            this.viewData_.nativeAd.reportAdShow({ adId: data.adId });
        };
        VivoNativeBanner.prototype.addEvent = function () {
            this.box_ad.on(Laya.Event.CLICK, this, this.onClick);
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
        };
        VivoNativeBanner.prototype.onClick = function () {
            var data = this.viewData_.adList[0];
            this.viewData_.nativeAd.reportAdClick({ adId: data.adId });
            this.isReportAdClick = true;
        };
        VivoNativeBanner.prototype.onClose = function () {
            var num = Utils.getRandom(1, 100);
            if (!this.isReportAdClick && num <= MiniGameMgr.instance.platformInfos.touchByMistake) {
                this.onClick();
            }
            else {
                this.hide();
            }
        };
        VivoNativeBanner.prototype.show = function () {
            this.visible = true;
        };
        VivoNativeBanner.prototype.hide = function () {
            this.visible = false;
            if (this.isReportAdClick)
                this.destroy();
        };
        VivoNativeBanner.prototype.removeEvent = function () {
            this.box_ad.off(Laya.Event.CLICK, this, this.onClick);
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        };
        VivoNativeBanner.prototype.removeSelf = function () {
            this.removeEvent();
            return _super.prototype.removeSelf.call(this);
        };
        VivoNativeBanner.prototype.destroy = function () {
            this.viewData_ = null;
            this.removeSelf();
            _super.prototype.destroy.call(this);
        };
        return VivoNativeBanner;
    }(BaseSceneUISkin));

    var VivoNativeInsert = (function (_super) {
        __extends(VivoNativeInsert, _super);
        function VivoNativeInsert(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "VivoNativeInsert";
            _this.isReportAdClick = false;
            _this.closeFun = null;
            _this.viewData_ = data;
            _this.visible = false;
            _this.skin = "skins/platform/vivo/VivoNativeInsert.json";
            return _this;
        }
        VivoNativeInsert.prototype.childrenCreated = function () {
            this.y = Laya.stage.height - this.height;
            this.initView();
            this.addEvent();
        };
        VivoNativeInsert.prototype.adaptationStage = function () {
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
        };
        VivoNativeInsert.prototype.initView = function () {
            DeviceUtil.adaptationBgImg(this.img_bg);
            var data = this.viewData_.adList[0];
            this.lab_title.text = data.title;
            this.img_icon.skin = data.imgUrlList[0];
            this.img_icon.size(this.box_img.width, this.box_img.height);
            this.lab_desc.text = data.desc;
            this.lab_clickBtnTxt.text = data.clickBtnTxt || "点击查看";
            this.viewData_.nativeAd.reportAdShow({ adId: data.adId });
        };
        VivoNativeInsert.prototype.addEvent = function () {
            this.btn_click.on(Laya.Event.CLICK, this, this.onClick);
            this.img_icon.on(Laya.Event.CLICK, this, this.onClick);
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
        };
        VivoNativeInsert.prototype.onClick = function () {
            var data = this.viewData_.adList[0];
            this.viewData_.nativeAd.reportAdClick({ adId: data.adId });
            this.isReportAdClick = true;
        };
        VivoNativeInsert.prototype.onClose = function () {
            var num = Utils.getRandom(1, 100);
            if (!this.isReportAdClick && num <= MiniGameMgr.instance.platformInfos.touchByMistake) {
                this.onClick();
            }
            else {
                if (this.callData && this.callData.closeFun)
                    this.callData.closeFun();
                this.hide();
                if (this.closeFun)
                    this.closeFun();
            }
        };
        VivoNativeInsert.prototype.show = function (data) {
            var _this = this;
            this.callData = data;
            if (this.callData && this.callData.successFun)
                this.callData.successFun();
            Laya.timer.once(1000, this, function () {
                _this.visible = true;
            });
        };
        VivoNativeInsert.prototype.hide = function () {
            this.visible = false;
            Laya.timer.clearAll(this);
            if (this.isReportAdClick)
                this.destroy();
        };
        VivoNativeInsert.prototype.removeEvent = function () {
            this.btn_click.off(Laya.Event.CLICK, this, this.onClick);
            this.img_icon.off(Laya.Event.CLICK, this, this.onClick);
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        };
        VivoNativeInsert.prototype.removeSelf = function () {
            this.removeEvent();
            return _super.prototype.removeSelf.call(this);
        };
        VivoNativeInsert.prototype.destroy = function () {
            this.viewData_ = null;
            this.callData = null;
            this.removeSelf();
            _super.prototype.destroy.call(this);
        };
        return VivoNativeInsert;
    }(BaseSceneUISkin));

    var VivoNativeBottemAdScene = (function (_super) {
        __extends(VivoNativeBottemAdScene, _super);
        function VivoNativeBottemAdScene(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "VivoNativeBottemAdScene";
            _this.isReportAdClick = false;
            _this.viewData_ = data;
            _this.skin = "skins/platform/vivo/VivoNativeBotterAdScene.json";
            return _this;
        }
        VivoNativeBottemAdScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        VivoNativeBottemAdScene.prototype.adaptationStage = function () {
            this.size(1000, 260);
        };
        VivoNativeBottemAdScene.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        VivoNativeBottemAdScene.prototype.initView = function () {
            var data = this.viewData_.adList[0];
            this.img_icon.skin = data.icon;
            this.img_flag.skin = data.logoUrl;
            this.lab_title.text = data.title;
            this.lab_desc.text = data.desc;
            this.lab_clickBtnTxt.text = data.clickBtnTxt || "点击下载";
            this.viewData_.nativeAd.reportAdShow({ adId: data.adId });
            var text = this.btn_chakan;
            if (MiniGameMgr.instance.platformInfos.touchByMistakeByLook) {
                text.text = '查看';
                var startHour = MiniGameMgr.instance.platformInfos.startHour;
                var endHour = MiniGameMgr.instance.platformInfos.endHour;
                var date = new Date();
                var week = date.getDay();
                if (week == 0 || week == 6) {
                    text.text = '查看';
                }
                else {
                    var hour = date.getHours();
                    if (hour >= startHour && hour <= endHour) {
                        text.text = '查看广告';
                    }
                    else {
                        text.text = '查看';
                    }
                }
            }
            else {
                text.text = "查看广告";
            }
        };
        VivoNativeBottemAdScene.prototype.addEvent = function () {
            this.btn_chakan.on(Laya.Event.CLICK, this, this.onClick);
            this.box_ad.on(Laya.Event.CLICK, this, this.onClick);
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
        };
        VivoNativeBottemAdScene.prototype.onClick = function () {
            var data = this.viewData_.adList[0];
            this.viewData_.nativeAd.reportAdClick({ adId: data.adId });
            this.isReportAdClick = true;
        };
        VivoNativeBottemAdScene.prototype.onClose = function () {
            var num = Utils.getRandom(1, 100);
            if (!this.isReportAdClick && num <= MiniGameMgr.instance.platformInfos.touchByMistake) {
                this.onClick();
            }
            else {
                this.hide();
            }
        };
        VivoNativeBottemAdScene.prototype.show = function () {
            this.visible = true;
        };
        VivoNativeBottemAdScene.prototype.hide = function () {
            this.visible = false;
            if (this.isReportAdClick)
                this.destroy();
        };
        VivoNativeBottemAdScene.prototype.removeEvent = function () {
            this.btn_chakan.off(Laya.Event.CLICK, this, this.onClick);
            this.box_ad.off(Laya.Event.CLICK, this, this.onClick);
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        };
        VivoNativeBottemAdScene.prototype.removeSelf = function () {
            this.removeEvent();
            return _super.prototype.removeSelf.call(this);
        };
        VivoNativeBottemAdScene.prototype.destroy = function () {
            this.viewData_ = null;
            this.removeSelf();
            _super.prototype.destroy.call(this);
        };
        return VivoNativeBottemAdScene;
    }(BaseUIScene));

    var MiniVVManager = (function (_super) {
        __extends(MiniVVManager, _super);
        function MiniVVManager() {
            var _this = _super.call(this) || this;
            _this.pkgName = "com.duole.fkwdxh.vivominigame";
            _this.appid = "100007170";
            _this.cpid = "01d6b7824da87456184a";
            _this.appkey = "90ddd0bd943a0c1b32dd046f1c9f9b62";
            _this.secret = "142743ced36644cc548d46739f751a99";
            _this.url = "https://yxtest.32yx.com/VivoMiniGame.fcgi";
            _this.hideTime = 0;
            _this.showTime = 0;
            _this.sucTime = 3000;
            _this.platformInfos = {
                bannerId: [],
                videoIds: [],
                intersIds: [],
                nativeIds: [],
                videoOpen: true,
                touchByMistake: 100,
                touchByMistakeByLook: true,
                autoTipInstallShortcut: true,
                nativeInsterAdIsFirst: false,
                startHour: 9,
                endHour: 19
            };
            _this.networkType = "wifi";
            _this.videoAdIsShow = false;
            _this.canShowBanner = true;
            _this.bannerAdIndex = 0;
            return _this;
        }
        MiniVVManager.prototype.init = function () {
            this.systemInfo = qg.getSystemInfoSync();
            console.log("systemInfo >> ", this.systemInfo);
            qg.setKeepScreenOn({ keepScreenOn: true });
            this.getUpdateManager();
            Laya.timer.once(10000, this, function () {
                console.log("加速回收---");
                qg.triggerGC();
            });
        };
        MiniVVManager.prototype.checkNetwort = function () {
            var _this = this;
            qg.getNetworkType({
                success: function (data) {
                    if (data.type == 'none') {
                        _this.networkType = "网络错误，请重新加载";
                        TipsManager.getInstance().showDefaultTips("网络错误，请重新加载");
                    }
                }
            });
        };
        MiniVVManager.prototype.onShow = function (callBack) {
            var _this = this;
            this.onShowFun = function (res) {
                console.log("onShowFun", _this.videoAdIsShow, res);
                if (!_this.videoAdIsShow) {
                    callBack && callBack(res);
                    _this.showTime = new Date().getTime();
                    if (_this.showTime - _this.hideTime >= _this.sucTime) {
                        _this.shareSucFun && _this.shareSucFun.call(_this.thisObj);
                    }
                    else {
                        _this.shareFailFun && _this.shareFailFun.call(_this.thisObj);
                    }
                    _this.shareSucFun = null;
                    _this.shareFailFun = null;
                    _this.thisObj = null;
                    EventMgr.getInstance().sendEvent(GameEvent.ONSHOW);
                }
            };
            qg.onShow(function (res) { _this.onShowFun(res); });
        };
        MiniVVManager.prototype.shareAppMsg = function (data) {
            if (this.systemInfo.platformVersionCode < 1056) {
                return;
            }
            var shareData = {};
            if (data) {
                shareData = { success: data.sucFun, fail: data.failFun, cancel: data.failFun };
            }
            qg.share(shareData);
        };
        MiniVVManager.prototype.onHide = function (callBack) {
            var _this = this;
            this.onHideFun = function () {
                callBack && callBack();
                _this.hideTime = new Date().getTime();
                EventMgr.getInstance().sendEvent(GameEvent.ONHIDE);
            };
            qg.onHide(function () { _this.onHideFun(); });
        };
        MiniVVManager.prototype.onAudioInterruptionBegin = function (callBack) {
            qg.onAudioInterruptionBegin(function () {
                callBack && callBack();
            });
        };
        MiniVVManager.prototype.onAudioInterruptionEnd = function (callBack) {
            qg.onAudioInterruptionEnd(function () {
                callBack && callBack();
            });
        };
        MiniVVManager.prototype.loginGame = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve, reject) {
                            _this.login().then(function (res) {
                                resolve();
                            }).catch(function (err) {
                                reject();
                            });
                        })];
                });
            });
        };
        MiniVVManager.prototype.login = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (_this.systemInfo.platformVersionCode >= 1053) {
                    resolve();
                    return;
                }
                else {
                    console.warn("版本过低");
                    resolve();
                }
            });
        };
        MiniVVManager.prototype.initUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        MiniVVManager.prototype.getUpdateManager = function () {
        };
        MiniVVManager.prototype.showAddDesktopBtn = function (data) {
            if (this.systemInfo.platformVersionCode < 1041) {
                console.warn("当前版本过低，无法创建桌面图标，请升级！");
                return;
            }
            qg.hasShortcutInstalled({
                success: function (status) {
                    if (status) {
                        console.log("桌面图标已创建");
                        data.box.visible = false;
                    }
                    else {
                        console.log("桌面图标未创建");
                        data.box.visible = true;
                    }
                }
            });
        };
        MiniVVManager.prototype.tipInstallShortcut = function (data) {
            var _this = this;
            if (this.systemInfo.platformVersionCode < 1041) {
                console.warn("当前版本过低，无法创建桌面图标，请升级！");
                return;
            }
            qg.hasShortcutInstalled({
                success: function (status) {
                    if (status) {
                        console.log("桌面图标已创建");
                        data.success && data.success(false);
                    }
                    else {
                        console.log("桌面图标未创建");
                        _this.installShortcut(data);
                    }
                }
            });
        };
        MiniVVManager.prototype.installShortcut = function (data) {
            if (this.shortcutLastTime) {
                var curTime = (new Date()).getTime();
                if ((curTime - this.shortcutLastTime) <= 120000) {
                    console.warn("创建桌面图标请求间隔不得少于120s");
                    data.fail && data.fail();
                    return;
                }
            }
            this.shortcutLastTime = (new Date()).getTime();
            qg.installShortcut({
                success: function () {
                    console.log("创建桌面图标成功");
                    data.success && data.success(true);
                },
                fail: function () {
                    data.fail && data.fail();
                }
            });
        };
        MiniVVManager.prototype.playVideoAd = function (data) {
            var _this = this;
            var videoId = this.platformInfos.videoIds;
            var len = videoId.length;
            if (len <= 0) {
                TipsManager.getInstance().showDefaultTips("开发中");
                data.errorFun && data.errorFun();
                return;
            }
            if (this.systemInfo.platformVersionCode < 1041) {
                console.warn("当前版本过低，无法创建视频广告，请升级！");
                TipsManager.getInstance().showDefaultTips("当前版本过低，无法创建视频广告，请升级！");
                data.errorFun && data.errorFun();
                return;
            }
            if (this.videoAdLastTime) {
                var curTime = (new Date()).getTime();
                if ((curTime - this.videoAdLastTime) <= 60000) {
                    console.warn("视频广告请求间隔不得少于60s");
                    TipsManager.getInstance().showDefaultTips("视频广告请求间隔不得少于60s");
                    data.errorFun && data.errorFun();
                    return;
                }
            }
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
            qg.showLoading({ message: "广告加载中" });
            var index = 0;
            var createCall = function (adId) {
                index++;
                _this.videoAd = qg.createRewardedVideoAd({ posId: adId });
                _this.videoAd.onError(errorCall);
                _this.videoAd.onLoad(loadCall);
                _this.videoAd.onClose(closeCall);
            };
            var loadCall = function (res) {
                console.log("激励视频广告 加载成功", res);
                _this.videoAdLastTime = (new Date()).getTime();
                _this.videoAd.offError(errorCall);
                _this.videoAd.offLoad(loadCall);
                showCall(false);
            };
            var closeCall = function (res) {
                console.log("激励视频广告 关闭", res);
                if (res && res.isEnded) {
                    data.successFun && data.successFun();
                }
                else {
                    data.failFun && data.failFun();
                }
                _this.videoAdIsShow = false;
                _this.onShowFun && _this.onShowFun();
                SoundMgr.getInstance().bgvolume = 1;
                _this.videoAd.offClose(closeCall);
                _this.videoAd.offError(errorCall);
                _this.videoAd.offLoad(loadCall);
                qg.hideLoading();
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
            };
            var errorCall = function (err) {
                _this.videoAd.offClose(closeCall);
                _this.videoAd.offError(errorCall);
                _this.videoAd.offLoad(loadCall);
                if (index >= len) {
                    console.warn("激励视频广告 onError", err);
                    TipsManager.getInstance().showDefaultTips("视频加载错误,请稍后再试");
                    data.errorFun && data.errorFun(err);
                    qg.hideLoading();
                    EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                }
                else {
                    createCall(videoId[index]);
                }
            };
            var showCall = function (reload) {
                if (reload) {
                    if (_this.videoAd.load) {
                        _this.videoAd.load().then(function (res) {
                            loadCall(res);
                        }).catch(function (err) {
                            errorCall(err);
                        });
                    }
                    else {
                        errorCall(null);
                    }
                }
                else {
                    if (_this.videoAd.show) {
                        _this.videoAd.show().then(function () {
                            console.log("激励视频广告 显示成功");
                            _this.videoAdIsShow = true;
                            _this.onHideFun && _this.onHideFun();
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                            SoundMgr.getInstance().bgvolume = 0;
                            qg.hideLoading();
                        }).catch(function (err) {
                            console.log("激励视频广告 显示失败", err);
                            if (_this.videoAd.load) {
                                _this.videoAd.load().then(function (res) {
                                    loadCall(res);
                                }).catch(function (err) {
                                    errorCall(err);
                                });
                            }
                            else {
                                errorCall(err);
                            }
                        });
                    }
                    else {
                        errorCall(null);
                    }
                }
            };
            if (!this.videoAd) {
                createCall(videoId[index]);
            }
            else {
                this.videoAd.onClose(closeCall);
                showCall(true);
            }
        };
        MiniVVManager.prototype.showBanner = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var nativeAd, vivoNativeBanner, canShowBanner, canShowBanner;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            data.isNative = true;
                            this.canShowBanner = true;
                            if (!(data && data.isNative)) return [3, 7];
                            if (!(!this.vivoBannerAd || this.vivoBannerAd.destroyed)) return [3, 5];
                            return [4, this.loadNativeAd()];
                        case 1:
                            nativeAd = _a.sent();
                            if (!nativeAd) return [3, 2];
                            vivoNativeBanner = new VivoNativeBanner(nativeAd);
                            Laya.stage.addChild(vivoNativeBanner);
                            if (this.canShowBanner)
                                vivoNativeBanner.show();
                            this.vivoBannerAd = vivoNativeBanner;
                            return [3, 4];
                        case 2: return [4, this.showVivoBannerAd()];
                        case 3:
                            canShowBanner = _a.sent();
                            if (canShowBanner) {
                                if (!this.canShowBanner)
                                    this.hideBannerAd();
                            }
                            _a.label = 4;
                        case 4: return [3, 6];
                        case 5:
                            this.vivoBannerAd.show();
                            _a.label = 6;
                        case 6: return [3, 9];
                        case 7: return [4, this.showVivoBannerAd()];
                        case 8:
                            canShowBanner = _a.sent();
                            if (canShowBanner) {
                                if (!this.canShowBanner)
                                    this.hideBannerAd();
                            }
                            _a.label = 9;
                        case 9: return [2];
                    }
                });
            });
        };
        MiniVVManager.prototype.destoryBanner = function () {
            if (this.vivoBannerAd) {
                this.vivoBannerAd.hide();
                this.vivoBannerAd.destroy();
            }
            if (this.vivoNativeBottemAdScene) {
                this.vivoNativeBottemAdScene.hide();
                this.vivoNativeBottemAdScene.destroy();
            }
            this.vivoNativeBottemAdScene == null;
            this.bannerAd && this.bannerAd.destroy();
            this.clearBannerFun && this.clearBannerFun();
            this.clearBannerFun = null;
            this.vivoBannerAd = null;
            this.bannerAd = null;
            this.canShowBanner = false;
        };
        MiniVVManager.prototype.hideBannerAd = function () {
            if (this.vivoBannerAd) {
                this.vivoBannerAd.hide();
                this.vivoBannerAd.destroy();
            }
            if (this.vivoNativeBottemAdScene) {
                this.vivoNativeBottemAdScene.hide();
                this.vivoNativeBottemAdScene.destroy();
            }
            this.vivoNativeBottemAdScene = null;
            this.vivoBannerAd = null;
            this.clearBannerFun && this.clearBannerFun();
            this.clearBannerFun = null;
            this.canShowBanner = false;
        };
        MiniVVManager.prototype.showVivoBannerAd = function () {
            var _this = this;
            return new Promise(function (resolve) {
                var bannerId = _this.platformInfos.bannerId;
                var len = bannerId.length;
                if (len <= 0) {
                    resolve(false);
                    return;
                }
                if (_this.systemInfo.platformVersionCode < 1031) {
                    console.warn("当前版本过低，无法创建Banner广告，请升级！");
                    resolve(false);
                    return;
                }
                if (_this.bannerAdLastTime) {
                    var curTime = (new Date()).getTime();
                    if ((curTime - _this.bannerAdLastTime) <= 10000) {
                        console.warn("Banner广告请求间隔不得少于10s");
                        resolve(false);
                        return;
                    }
                }
                _this.canShowBanner = true;
                var createCall = function (adId) {
                    console.log("banner 广告 创建", adId);
                    _this.clearBannerFun && _this.clearBannerFun();
                    _this.clearBannerFun = null;
                    _this.bannerAdIndex++;
                    _this.bannerAdLastTime = (new Date()).getTime();
                    _this.bannerAd = qg.createBannerAd({
                        posId: adId,
                        style: {}
                    });
                    _this.bannerAd.onError(errorCall);
                    _this.bannerAd.onLoad(loadCall);
                    _this.bannerAd.onSize(sizeCall);
                    _this.clearBannerFun = function () {
                        if (_this.bannerAd) {
                            _this.bannerAd.offLoad(loadCall);
                            _this.bannerAd.offSize(sizeCall);
                            _this.bannerAd.offError(errorCall);
                            _this.bannerAd.destroy();
                            _this.bannerAd = null;
                        }
                    };
                    showCall();
                };
                var loadCall = function (res) {
                    console.log("banner 广告 onLoad 成功", res);
                };
                var errorCall = function (err) {
                    console.warn("banner 广告 onError ", err);
                    if (_this.bannerAdIndex >= len) {
                        _this.bannerAdIndex = 0;
                        resolve(false);
                    }
                    else {
                        resolve(false);
                    }
                };
                var sizeCall = function (res) {
                    console.log("banner 广告 onSize ", res, _this.bannerAd);
                };
                var showCall = function () {
                    if (_this.canShowBanner) {
                        _this.bannerAd.show().then(function () {
                            console.log("banner广告展示完成");
                            resolve(true);
                        }).catch(function (err) {
                            errorCall(err);
                        });
                    }
                    else {
                        _this.bannerAd.hide();
                        resolve(true);
                    }
                };
                createCall(bannerId[_this.bannerAdIndex]);
            });
        };
        MiniVVManager.prototype.showInsertAd = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.platformInfos.nativeInsterAdIsFirst) {
                        this.showGameNativeInsertAdFirst(data);
                    }
                    else {
                        this.showGameInsertAdFirst(data);
                    }
                    return [2];
                });
            });
        };
        MiniVVManager.prototype.showGameNativeInsertAdFirst = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var nativeAd, vivoNativeInsert;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
                            if (!(!this.vivoInsertAd || this.vivoInsertAd.destroyed)) return [3, 2];
                            return [4, this.loadNativeAd()];
                        case 1:
                            nativeAd = _a.sent();
                            if (nativeAd) {
                                vivoNativeInsert = new VivoNativeInsert(nativeAd);
                                Laya.stage.addChild(vivoNativeInsert);
                                vivoNativeInsert.show(data);
                                vivoNativeInsert.closeFun = function () {
                                    _this.vivoInsertAd = null;
                                };
                                this.vivoInsertAd = vivoNativeInsert;
                                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                            }
                            else {
                                this.showVivoInsertAd(data);
                                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                            }
                            return [3, 3];
                        case 2:
                            this.vivoInsertAd.show(data);
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        MiniVVManager.prototype.showGameInsertAdFirst = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var flag, nativeAd, vivoNativeInsert;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
                            if (!(!this.vivoInsertAd || this.vivoInsertAd.destroyed)) return [3, 5];
                            return [4, this.showVivoInsertAdAsync(data)];
                        case 1:
                            flag = _a.sent();
                            if (!flag) return [3, 2];
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                            return [3, 4];
                        case 2:
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
                            return [4, this.loadNativeAd()];
                        case 3:
                            nativeAd = _a.sent();
                            if (nativeAd) {
                                vivoNativeInsert = new VivoNativeInsert(nativeAd);
                                Laya.stage.addChild(vivoNativeInsert);
                                vivoNativeInsert.closeFun = function () {
                                    _this.vivoInsertAd = null;
                                };
                                vivoNativeInsert.show(data);
                                this.vivoInsertAd = vivoNativeInsert;
                            }
                            else {
                                data.errorFun && data.errorFun();
                            }
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                            _a.label = 4;
                        case 4: return [3, 6];
                        case 5:
                            this.vivoInsertAd.show(data);
                            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                            _a.label = 6;
                        case 6: return [2];
                    }
                });
            });
        };
        MiniVVManager.prototype.showVivoInsertAdAsync = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            var intersId = _this.platformInfos.intersIds;
                            var len = intersId.length;
                            if (len <= 0) {
                                resolve(false);
                                return;
                            }
                            if (_this.systemInfo.platformVersionCode < 1031) {
                                console.warn("当前版本过低，无法创建插屏广告，请升级！");
                                resolve(false);
                                return;
                            }
                            if (_this.insertAdLastTime) {
                                var curTime = (new Date()).getTime();
                                if ((curTime - _this.insertAdLastTime) <= 15000) {
                                    console.warn("插屏广告请求间隔不得少于15s");
                                    resolve(false);
                                    return;
                                }
                            }
                            console.log("插屏广告 加载");
                            var interstitialAd = qg.createInterstitialAd({
                                posId: intersId[0]
                            });
                            var onError = function (err) {
                                console.log("插屏广告加载失败", err);
                                interstitialAd.offClose(onCloseFun);
                                interstitialAd.offError(onError);
                                resolve(false);
                            };
                            interstitialAd.onError(onError);
                            var onCloseFun = function () {
                                data.closeFun && data.closeFun();
                                interstitialAd.offClose(onCloseFun);
                                interstitialAd.offError(onError);
                            };
                            interstitialAd.onClose(onCloseFun);
                            interstitialAd.show().then(function () {
                                console.log('插屏广告展示完成');
                                data.successFun && data.successFun();
                                resolve(true);
                            }).catch(function (err) {
                                resolve(false);
                                console.log('插屏广告展示失败', JSON.stringify(err));
                            });
                        })];
                });
            });
        };
        MiniVVManager.prototype.destoryInsert = function () {
            this.vivoInsertAd && this.vivoInsertAd.destroy();
            this.vivoInsertAd = null;
            this.insertAd = null;
        };
        MiniVVManager.prototype.showVivoInsertAd = function (data) {
            var intersId = this.platformInfos.intersIds;
            var len = intersId.length;
            if (len <= 0) {
                data.errorFun && data.errorFun();
                return;
            }
            if (this.systemInfo.platformVersionCode < 1031) {
                console.warn("当前版本过低，无法创建插屏广告，请升级！");
                data.errorFun && data.errorFun();
                return;
            }
            if (this.insertAdLastTime) {
                var curTime = (new Date()).getTime();
                if ((curTime - this.insertAdLastTime) <= 15000) {
                    console.warn("插屏广告请求间隔不得少于15s");
                    data.errorFun && data.errorFun();
                    return;
                }
            }
            console.log("插屏广告 加载");
            var interstitialAd = qg.createInterstitialAd({
                posId: intersId[0]
            });
            var onError = function (err) {
                console.log("插屏广告加载失败", err);
                data.errorFun && data.errorFun();
                interstitialAd.offClose(onCloseFun);
                interstitialAd.offError(onError);
            };
            interstitialAd.onError(onError);
            var onCloseFun = function () {
                data.closeFun && data.closeFun();
                interstitialAd.offClose(onCloseFun);
                interstitialAd.offError(onError);
            };
            interstitialAd.onClose(onCloseFun);
            interstitialAd.show().then(function () {
                console.log('插屏广告展示完成');
                data.successFun && data.successFun();
            }).catch(function (err) {
                data.errorFun && data.errorFun();
                console.log('插屏广告展示失败', JSON.stringify(err));
            });
        };
        MiniVVManager.prototype.loadNativeAd = function (index) {
            if (index === void 0) { index = 0; }
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            console.warn("开始加载广告！");
                            var nativeId = _this.platformInfos.nativeIds;
                            var len = nativeId.length;
                            if (len <= 0 || index >= len) {
                                resolve(null);
                                return;
                            }
                            if (_this.systemInfo.platformVersionCode < 1053) {
                                console.warn("当前版本过低，无法创建原生广告，请升级！");
                                resolve(null);
                                return;
                            }
                            if (_this.nativeAdLastTime) {
                                var curTime = (new Date()).getTime();
                                if ((curTime - _this.nativeAdLastTime) <= 10000) {
                                    console.warn("原生广告请求间隔不得少于10s");
                                    resolve(_this.nativeAdData || null);
                                    return;
                                }
                            }
                            var adId = nativeId[index];
                            var nativeAd = qg.createNativeAd({ posId: adId });
                            var loadCall = function (res) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            console.log("原生广告 加载成功", res);
                                            if (!(res && res.adList)) return [3, 1];
                                            this.nativeAdLastTime = (new Date()).getTime();
                                            nativeAd.offError(errorCall);
                                            nativeAd.offLoad(loadCall);
                                            this.nativeAdData = { nativeAd: nativeAd, adList: res.adList };
                                            resolve({ nativeAd: nativeAd, adList: res.adList });
                                            return [3, 3];
                                        case 1:
                                            _a = resolve;
                                            return [4, this.loadNativeAd(index)];
                                        case 2:
                                            _a.apply(void 0, [_b.sent()]);
                                            _b.label = 3;
                                        case 3: return [2];
                                    }
                                });
                            }); };
                            var errorCall = function (err) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            console.log("原生广告 加载错误", err);
                                            nativeAd.offLoad(loadCall);
                                            nativeAd.offError(errorCall);
                                            index++;
                                            _a = resolve;
                                            return [4, this.loadNativeAd(index)];
                                        case 1:
                                            _a.apply(void 0, [_b.sent()]);
                                            return [2];
                                    }
                                });
                            }); };
                            nativeAd.onLoad(loadCall);
                            nativeAd.onError(errorCall);
                            nativeAd.load();
                        })];
                });
            });
        };
        MiniVVManager.prototype.showBottomNativeAd = function (box_platform, ys) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var nativeAd;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.hideBannerAd();
                                        return [4, this.loadNativeAd()];
                                    case 1:
                                        nativeAd = _a.sent();
                                        if (nativeAd) {
                                            console.log("showBottomNativeAd>>>>>>>>>>>>>>>加载成功");
                                            if (this.vivoNativeBottemAdScene == null) {
                                                this.vivoNativeBottemAdScene = new VivoNativeBottemAdScene(nativeAd);
                                            }
                                            else {
                                                this.vivoNativeBottemAdScene.setData(nativeAd);
                                            }
                                            this.vivoNativeBottemAdScene.x = (Laya.stage.width - this.vivoNativeBottemAdScene.width) / 2;
                                            this.vivoNativeBottemAdScene.y = ys ? ys : Laya.stage.height - this.vivoNativeBottemAdScene.height;
                                            box_platform.addChild(this.vivoNativeBottemAdScene);
                                        }
                                        else {
                                            this.showBanner({});
                                        }
                                        resolve();
                                        return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        return MiniVVManager;
    }(MiniGameMgr));
    window["VVGameManager"] = MiniVVManager;

    var OppoNativeBanner = (function (_super) {
        __extends(OppoNativeBanner, _super);
        function OppoNativeBanner(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "OppoNativeBanner";
            _this.isClick = false;
            _this.viewData_ = data;
            _this.skin = 'skins/platform/oppo/OppoNativeBanner.json';
            return _this;
        }
        OppoNativeBanner.prototype.childrenCreated = function () {
            this.y = Laya.stage.height - this.height;
            this.initView();
            this.addEvent();
        };
        OppoNativeBanner.prototype.adaptationStage = function () {
        };
        OppoNativeBanner.prototype.initView = function () {
            var data = this.viewData_.adList[0];
            this.icon_icon.skin = data.icon;
            this.icon_flag.skin = data.logoUrl;
            this.txt_title.text = data.title;
            this.txt_desc.text = data.desc;
            this.txt_clickBtnTxt.text = data.clickBtnTxt;
            this.viewData_.nativeAd.reportAdShow({ adId: data.adId });
        };
        OppoNativeBanner.prototype.addEvent = function () {
            this.on(Laya.Event.CLICK, this, this.onClick);
            this.btn_close.on(Laya.Event.CLICK, this, this.onClick);
        };
        OppoNativeBanner.prototype.onClick = function (evt) {
            if (evt.currentTarget == this.btn_close) {
                evt.stopPropagation();
                var clickWeght = MiniGameMgr.instance.platformInfos.clickWeght;
                var flag = Math.random() * 100 < clickWeght;
                if (flag && !this.isClick) {
                    this.isClick = true;
                    var data = this.viewData_.adList[0];
                    this.viewData_.nativeAd.reportAdClick({ adId: data.adId });
                }
                else {
                    this.destroy();
                    OppoManager.instance.closeCount++;
                }
            }
            else {
                var data = this.viewData_.adList[0];
                this.viewData_.nativeAd.reportAdClick({ adId: data.adId });
            }
        };
        OppoNativeBanner.prototype.removeSelf = function () {
            this.removeEvent();
            return _super.prototype.removeSelf.call(this);
        };
        OppoNativeBanner.prototype.destroy = function () {
            this.isClick = false;
            if (this.viewData_) {
                this.viewData_.nativeAd.destroy();
                this.viewData_.callBack && this.viewData_.callBack();
                this.viewData_ = null;
            }
            this.removeSelf();
            _super.prototype.destroy.call(this);
        };
        OppoNativeBanner.prototype.removeEvent = function () {
            this.off(Laya.Event.CLICK, this, this.onClick);
        };
        OppoNativeBanner.prototype.show = function () {
            this.visible = true;
        };
        OppoNativeBanner.prototype.hide = function () {
            this.visible = false;
        };
        return OppoNativeBanner;
    }(BaseSceneUISkin));

    var MiniOppoManager = (function (_super) {
        __extends(MiniOppoManager, _super);
        function MiniOppoManager() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.url = "https://yxtest.32yx.com/MZMiniGame.fcgi";
            _this.hideTime = 0;
            _this.showTime = 0;
            _this.platformInfos = {
                "banner": {
                    "GameHomeView": [203979],
                    "SignView": [203980],
                    "GameView": [203981],
                    "SuccessfulEntryOneView": [203986]
                },
                "native": {
                    "SuccessfulEntryThreeView": [203996, 204022],
                    "FailEntryTwoView": [203999, 204022],
                    "FailEntryOneView": [204000, 204022],
                    "LevelView": [204001, 204022],
                    "AddPsView": [204002, 204022]
                },
                "video": {
                    "freeScene": [204009],
                    "freeGold": [204010],
                    "SignView": [204011],
                    "GameTip": [204013],
                    "SuccessfulEntryThreeView": [204014],
                    "FailEntryOneView": [204015],
                    "FailEntryTwoView": [204016]
                },
                "videoId": [204025],
                "nativeId": [204022]
            };
            _this.canShowBanner = true;
            _this.canGetBannerOk = true;
            return _this;
        }
        MiniOppoManager.prototype.initMiniGameAfterLoadres = function () {
            if (this.box_platform == null) {
                this.box_platform = new Laya.Box();
                this.box_platform.size(Laya.stage.width, Laya.stage.height);
                this.box_platform.mouseThrough = true;
            }
            Laya.stage.addChild(this.box_platform);
            OppoManager.instance.initGame();
        };
        MiniOppoManager.prototype.initMiniGame = function () {
            this.systemInfo = platform.getSystemInfoSync();
            console.log("systemInfo >> ", this.systemInfo);
        };
        MiniOppoManager.prototype.setLoadingProgress = function (progress) {
            platform.setLoadingProgress({
                progress: progress
            });
        };
        MiniOppoManager.prototype.loadingComplete = function (object) {
            platform.loadingComplete(object);
        };
        MiniOppoManager.prototype.oppoNavigateToMiniProgram = function (pkname) {
            console.log("oppoNavigateToMiniProgram  ->  ", pkname);
            platform.navigateToMiniProgram(pkname);
        };
        MiniOppoManager.prototype.createShortCut = function (succCall) {
            MiniGameMgr.instance.hasShortcutInstalled().then(function (res) {
                if (res == false) {
                    platform.installShortcut({
                        success: function () {
                            succCall && succCall();
                        },
                        fail: function (err) {
                        },
                        complete: function () {
                        }
                    });
                }
                else {
                    succCall && succCall();
                }
            });
        };
        MiniOppoManager.prototype.hasShortcutInstalled = function () {
            return new Promise(function (resolve) {
                platform.hasShortcutInstalled({
                    success: function (res) {
                        resolve(res);
                    },
                    fail: function () {
                        resolve(false);
                    }
                });
            });
        };
        MiniOppoManager.prototype.reportMonitor = function (name, value) {
            if (DeviceUtil.isOPPOMiniGame()) {
                platform.reportMonitor(name, value);
            }
        };
        MiniOppoManager.prototype.onShow = function (callBack) {
            var _this = this;
            platform.onShow(function (res) {
                callBack && callBack(res);
                _this.showTime = new Date().getTime();
            });
        };
        MiniOppoManager.prototype.onHide = function (callBack) {
            var _this = this;
            platform.onHide(function () {
                callBack && callBack();
                _this.hideTime = new Date().getTime();
            });
        };
        MiniOppoManager.prototype.loginGame = function () {
            return __awaiter(this, void 0, void 0, function () {
                var self;
                var _this = this;
                return __generator(this, function (_a) {
                    self = this;
                    return [2, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var info;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, self.login()];
                                    case 1:
                                        info = _a.sent();
                                        if (info) {
                                            if (typeof info == "string") {
                                                info = JSON.parse(info);
                                            }
                                            console.log("loginGame success ", info);
                                            GDataMgr.getInstance().uinfo.openId = info.clientId;
                                            GDataMgr.getInstance().uinfo.nick = info.nickname;
                                            GDataMgr.getInstance().uinfo.avatarUrl = info.icon;
                                        }
                                        resolve(info);
                                        return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        MiniOppoManager.prototype.login = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var data;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!DeviceUtil.isOPPOMiniGame()) {
                                            reject(null);
                                            return [2];
                                        }
                                        return [4, platform.oppologin('')];
                                    case 1:
                                        data = _a.sent();
                                        console.log("login>>>>>>>>>>", data);
                                        resolve(data);
                                        return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        MiniOppoManager.prototype.initUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        MiniOppoManager.prototype.playVideoAd = function (data) {
            if (!DeviceUtil.isOPPOMiniGame()) {
                data.successFun && data.successFun();
                return;
            }
            if (this.platformInfos == null) {
                data.errorFun && data.errorFun();
                TipsManager.getInstance().showDefaultTips("暂无广告id");
                return;
            }
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
            var videoIdArr = this.platformInfos.video[data.gameConstKey];
            if (videoIdArr == null) {
                videoIdArr = this.platformInfos.videoId;
            }
            if (videoIdArr.length <= 0) {
                TipsManager.getInstance().showDefaultTips("开发中");
                data.errorFun && data.errorFun();
                return;
            }
            EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, true);
            var adId = videoIdArr[Math.floor(Math.random() * videoIdArr.length)];
            var onError = data.errorFun;
            var videoAd;
            var adUnitId = adId;
            var phone = platform.getSystemInfoSync();
            if (phone.platformVersionCode < 1051) {
                console.warn("当前版本过低，不支持创建视频播放");
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                onError();
                return;
            }
            var clearVideoFun = function () {
                if (videoAd) {
                    videoAd.offLoad();
                    videoAd.offClose(onCloseCall);
                    videoAd.offError(onErrorCall);
                }
            };
            var onLoadFun = function (res) {
                console.log('videoAd onLoad', res);
            };
            console.log("创建视频播放  - > " + adUnitId);
            if (!videoAd) {
                videoAd = platform.createOppoRewardedVideoAd(adUnitId);
                videoAd.onLoad(onLoadFun);
            }
            var onCloseCall = function (res) {
                console.log('videoAd onClose', res);
                if (res.isEnded || res.isEnd) {
                    data.successFun && data.successFun();
                    EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                }
                else {
                    EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                    data.failFun && data.failFun();
                }
                clearVideoFun();
            };
            videoAd.onClose(onCloseCall);
            var onErrorCall = function (res) {
                console.log('videoAd onError', res);
                EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                if (onError) {
                    TipsManager.getInstance().showDefaultTips("暂无广告");
                    onError(res);
                }
                clearVideoFun();
            };
            videoAd.onError(onErrorCall);
            videoAd.load().then(function () {
                console.log('激励视频加载成功');
                videoAd.show().then(function () {
                    console.log('激励视频 广告显示成功');
                }).catch(function (err) {
                    console.log('激励视频 广告显示失败');
                    if (onError) {
                        onError(err);
                    }
                    EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                });
            }).catch(function (err) {
                console.log('激励视频加载失败');
                if (onError) {
                    onError(err);
                    clearVideoFun();
                    EventMgr.getInstance().sendEvent(GameEvent.BUFFER_LOAD, false);
                }
            });
        };
        MiniOppoManager.prototype.showBanner = function (offset) {
            return __awaiter(this, void 0, void 0, function () {
                var self;
                var _this = this;
                return __generator(this, function (_a) {
                    self = this;
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var bannerId, bannerIds, banner, stDataNativeBanner, oppoNativeBanner;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!OppoManager.instance.adLimit1Flag) {
                                            resolve(null);
                                            return [2];
                                        }
                                        if (!OppoManager.instance.adLimit2Flag) {
                                            resolve(null);
                                            return [2];
                                        }
                                        bannerId = offset.bannerId;
                                        if (bannerId == null) {
                                            bannerIds = self.platformInfos.banner[offset.className_key];
                                            if (bannerIds) {
                                                bannerId = bannerIds[0];
                                            }
                                        }
                                        self.hideBannerAd();
                                        if (!self.canGetBannerOk)
                                            return [2];
                                        self.canGetBannerOk = false;
                                        return [4, self.showOppoBanner(bannerId)];
                                    case 1:
                                        banner = _a.sent();
                                        if (!banner) return [3, 2];
                                        self.canGetBannerOk = true;
                                        self.oppoBannerAd = banner;
                                        return [3, 4];
                                    case 2: return [4, self.createOppoNatvieBanner({ className_key: offset.className_key })];
                                    case 3:
                                        stDataNativeBanner = _a.sent();
                                        if (stDataNativeBanner) {
                                            console.log("nativeOppoAd>>>>>>>>>>>>>>>", stDataNativeBanner.adList);
                                            self.canGetBannerOk = true;
                                            stDataNativeBanner.callBack = function () {
                                                self.oppoBannerAd = null;
                                            };
                                            oppoNativeBanner = new OppoNativeBanner(stDataNativeBanner);
                                            OppoManager.instance.addSpriteIntoBox(oppoNativeBanner);
                                            self.oppoBannerAd = oppoNativeBanner;
                                            resolve(self.oppoBannerAd);
                                            return [2];
                                        }
                                        else {
                                            self.canGetBannerOk = true;
                                        }
                                        _a.label = 4;
                                    case 4:
                                        self.canGetBannerOk = true;
                                        resolve();
                                        return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        MiniOppoManager.prototype.destoryBanner = function () {
            this.clearBannerFun && this.clearBannerFun();
            if (this.oppoBannerAd) {
                this.oppoBannerAd.hide();
                this.oppoBannerAd.destroy();
            }
            this.clearBannerFun = null;
            this.oppoBannerAd = null;
        };
        MiniOppoManager.prototype.hideBannerAd = function () {
            if (this.canGetBannerOk) {
                console.trace("销毁 banner 广告组件-->");
                this.clearBannerFun && this.clearBannerFun();
                if (this.oppoBannerAd) {
                    this.oppoBannerAd.hide();
                    this.oppoBannerAd.destroy();
                }
                this.clearBannerFun = null;
                this.oppoBannerAd = null;
            }
        };
        MiniOppoManager.prototype.initGameAfterLoadRes = function () {
            MiniGameMgr.instance.reportMonitor("game_scene", 0);
        };
        MiniOppoManager.prototype.createOppoNatvieAd = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var self, index, adidArr, len;
                return __generator(this, function (_a) {
                    self = this;
                    index = data.index;
                    adidArr = self.platformInfos.native[data.className_key];
                    if (adidArr == null) {
                        adidArr = self.platformInfos.nativeId;
                    }
                    len = adidArr.length;
                    return [2, new Promise(function (resolve) {
                            if (!OppoManager.instance.adLimit1Flag) {
                                resolve(null);
                                return;
                            }
                            if (!OppoManager.instance.adLimit2Flag) {
                                resolve(null);
                                return;
                            }
                            if (index >= len) {
                                resolve(null);
                                return;
                            }
                            var adid = adidArr[index];
                            var nativeAd = platform.createNativeAd(adid);
                            var onLoad = function (res) {
                                console.log('原生广告加载', res.adList);
                                nativeAd.offLoad(onLoad);
                                nativeAd.offError(onError);
                                resolve({ nativeAd: nativeAd, adList: res.adList });
                            };
                            var onError = function (res) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log('原生广告加载失败', res);
                                        nativeAd.offLoad(onLoad);
                                        nativeAd.offError(onError);
                                        resolve(null);
                                        return [2];
                                    });
                                });
                            };
                            nativeAd.onLoad(onLoad);
                            nativeAd.onError(onError);
                            nativeAd.load();
                        })];
                });
            });
        };
        MiniOppoManager.prototype.createOppoNatvieBanner = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var self, nativeBinnerID;
                return __generator(this, function (_a) {
                    self = this;
                    nativeBinnerID = self.platformInfos.nativeId[0];
                    console.log('原生banner广告加载', nativeBinnerID);
                    return [2, new Promise(function (resolve) {
                            var adid = nativeBinnerID;
                            var nativeAd = platform.createNativeAd(adid);
                            var onLoad = function (res) {
                                console.log('原生广告加载', res.adList);
                                nativeAd.offLoad(onLoad);
                                nativeAd.offError(onError);
                                resolve({ nativeAd: nativeAd, adList: res.adList });
                            };
                            var onError = function (res) {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.log('原生广告加载失败', res);
                                        nativeAd.offLoad(onLoad);
                                        nativeAd.offError(onError);
                                        resolve(null);
                                        return [2];
                                    });
                                });
                            };
                            nativeAd.onLoad(onLoad);
                            nativeAd.onError(onError);
                            nativeAd.load();
                        })];
                });
            });
        };
        MiniOppoManager.prototype.showOppoBanner = function (bannerId) {
            return __awaiter(this, void 0, void 0, function () {
                var self;
                var _this = this;
                return __generator(this, function (_a) {
                    self = this;
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var showBanner;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (bannerId == null) {
                                            resolve(null);
                                            return [2];
                                        }
                                        return [4, self.createOppoBannerAd(bannerId)];
                                    case 1:
                                        showBanner = _a.sent();
                                        resolve(showBanner);
                                        return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        MiniOppoManager.prototype.createOppoBannerAd = function (bannerId) {
            return __awaiter(this, void 0, void 0, function () {
                var self;
                var _this = this;
                return __generator(this, function (_a) {
                    self = this;
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var adId, bannerAd, onLoadCall, onEorrCall, onShowFun, onHideFun;
                            return __generator(this, function (_a) {
                                adId = bannerId;
                                console.log("创建 banner 广告组件-->", adId);
                                bannerAd = platform.createBannerAd(adId);
                                onLoadCall = function (res) {
                                    bannerAd.offLoad(onLoadCall);
                                    bannerAd.offError(onEorrCall);
                                    bannerAd.offShow(onShowFun);
                                    console.log("创建 banner 成功-->", adId);
                                    resolve(bannerAd);
                                };
                                onEorrCall = function (res) {
                                    return __awaiter(this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            console.log("创建 banner 失败-->", adId);
                                            bannerAd.offError(onEorrCall);
                                            bannerAd.offLoad(onLoadCall);
                                            bannerAd.offShow(onShowFun);
                                            bannerAd.offHide(onShowFun);
                                            self.clearBannerFun && self.clearBannerFun();
                                            resolve(null);
                                            return [2];
                                        });
                                    });
                                };
                                onShowFun = function (res) {
                                    console.log("onshow>>>>>>>>>>>", res);
                                };
                                onHideFun = function (res) {
                                    console.log("onHide>>>>>>>>>>>", res);
                                    OppoManager.instance.closeCount++;
                                    self.destoryBanner();
                                };
                                bannerAd.onHide(onHideFun);
                                bannerAd.onLoad(onLoadCall);
                                bannerAd.onShow(onShowFun);
                                bannerAd.onError(onEorrCall);
                                self.clearBannerFun = function () {
                                    if (bannerAd) {
                                        bannerAd.offError(onEorrCall);
                                        bannerAd.offLoad(onLoadCall);
                                        bannerAd.offShow(onShowFun);
                                        bannerAd.offHide(onShowFun);
                                        bannerAd.destroy();
                                    }
                                    bannerAd = null;
                                };
                                bannerAd.show();
                                return [2];
                            });
                        }); })];
                });
            });
        };
        return MiniOppoManager;
    }(MiniGameMgr));

    var NativeBrige = (function () {
        function NativeBrige() {
        }
        NativeBrige.getInstance = function () {
            if (!NativeBrige.instance) {
                NativeBrige.instance = new NativeBrige();
            }
            return NativeBrige.instance;
        };
        NativeBrige.prototype.callByNative = function (msgJsonObj) {
            console.log("NativeBrige callByNative : " + JSON.stringify(msgJsonObj));
            switch (msgJsonObj.msg) {
                case NativeMsg.toStop:
                    SoundMgr.getInstance().stopBgMusic();
                    break;
                case NativeMsg.toGame:
                    SoundMgr.getInstance().playBgm();
                    break;
                case NativeMsg.getGameToken:
                    GDataMgr.getInstance().uinfo.openId = msgJsonObj.data;
                    break;
                case NativeMsg.getDeviceNo:
                    if (this.getDeviceNoCall) {
                        this.getDeviceNoCall();
                    }
                    break;
                case NativeMsg.copyStr:
                    if (this.copyStrCall) {
                        this.copyStrCall(msgJsonObj);
                    }
                    break;
                case NativeMsg.loginSucc:
                    if (this.loginSucc) {
                        this.loginSucc(msgJsonObj);
                    }
                    break;
                case NativeMsg.outLogin:
                    break;
                case NativeMsg.userInfo:
                    this.rhUserInfo = msgJsonObj.data;
                    break;
                case NativeMsg.showAccountCenter:
                    if (this.showAccountCenterCall) {
                        this.showAccountCenterCall(msgJsonObj);
                    }
                    break;
                case NativeMsg.pay:
                    if (this.payCall) {
                        this.payCall(msgJsonObj);
                    }
                    break;
                case NativeMsg.changeUser:
                    break;
                case NativeMsg.getLanguage:
                    if (this.getLanguageCall) {
                        this.getLanguageCall(msgJsonObj.data);
                    }
                    break;
            }
        };
        NativeBrige.prototype.sendToNative = function (msgJson) {
            window["loadingView"].sendToNative(msgJson);
        };
        return NativeBrige;
    }());
    var NativeMsg = (function () {
        function NativeMsg() {
        }
        NativeMsg.jumpLeisureSubject = "jumpLeisureSubject";
        NativeMsg.getGameToken = "getGameToken";
        NativeMsg.toStop = "toStop";
        NativeMsg.toGame = "toGame";
        NativeMsg.getDeviceNo = "getDeviceNo";
        NativeMsg.copyStr = "copyStr";
        NativeMsg.loginSucc = "loginSucc";
        NativeMsg.goLogin = "goLogin";
        NativeMsg.outLogin = "outLogin";
        NativeMsg.userInfo = "userInfo";
        NativeMsg.showAccountCenter = "showAccountCenter";
        NativeMsg.createUser = "createUser";
        NativeMsg.enterGame = "enterGame";
        NativeMsg.roleUpLevel = "roleUpLevel";
        NativeMsg.pay = "pay";
        NativeMsg.changeUser = "changeUser";
        NativeMsg.getLanguage = "getLanguage";
        return NativeMsg;
    }());

    var NativeMgr = (function (_super) {
        __extends(NativeMgr, _super);
        function NativeMgr() {
            var _this = _super.call(this) || this;
            if (window["conch"]) {
                window["conch"].setOnBackPressedFunction(function () {
                });
            }
            return _this;
        }
        NativeMgr.prototype.jumpLeisureSubject = function () {
            var msgJSon = {
                msg: NativeMsg.jumpLeisureSubject,
                data: "create"
            };
            NativeBrige.getInstance().sendToNative(JSON.stringify(msgJSon));
        };
        NativeMgr.prototype.playVideoAd = function (data) {
            TipsManager.getInstance().showDefaultTips("暂无广告");
        };
        return NativeMgr;
    }(MiniGameMgr));

    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            var _this = _super.call(this, { width: 1080, height: 1920, exportSceneToJson: true }) || this;
            _this.isFlage = false;
            if (MiniGameMgr.instance == null) {
                if (DeviceUtil.isWXMiniGame()) {
                    MiniGameMgr._ins = new MiniWechatManager();
                }
                else if (DeviceUtil.isQQMiniGame()) {
                    MiniGameMgr._ins = new MiniQQManager();
                }
                else if (DeviceUtil.isTTMiniGame()) {
                    MiniGameMgr._ins = new MiniTTManager();
                }
                else if (DeviceUtil.isVIVOMiniGame()) {
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
            var onShow = function (obj) {
                console.log("onShow...", obj);
                SoundMgr.getInstance().playBgm();
                if (ViewChangeMgr.gameOpen) {
                    if (ViewChangeMgr.getInstance().CurLevelBasea) {
                        ViewChangeMgr.getInstance().CurLevelBasea.showLevel();
                    }
                }
            };
            var onHide = function () {
                console.log("onHide...");
                SoundMgr.getInstance().stopBgMusic();
                if (ViewChangeMgr.getInstance().CurLevelBasea) {
                    ViewChangeMgr.getInstance().CurLevelBasea.hideLevel();
                }
            };
            var onAudioInterruptionBegin = function (res) {
                console.log("onAudioInterruptionBegin");
            };
            var onAudioInterruptionEnd = function (res) {
                console.log("onAudioInterruptionEnd");
            };
            (function () {
                if (ViewManager.getInstance().showView) {
                    var old = ViewManager.getInstance().showView;
                    ViewManager.getInstance().showView = function (className, data, only) {
                        var key = ClassUtils.getClassKey(className);
                        EventMgr.getInstance().sendEvent("onAddPop", key);
                        return old.apply(this, arguments);
                    };
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
            }
            else {
                Laya.stage.on(Laya.Event.FOCUS, _this, function () {
                    console.log("获取焦点");
                    onShow(null);
                });
                Laya.stage.on(Laya.Event.BLUR, _this, function () {
                    console.log("失去焦点");
                    onHide();
                });
            }
            return _this;
        }
        Main.prototype.checkPlatform = function () {
            GameManager.instance.loadingView = new GamePreLoadView();
            SceneManager.getInstance().openSceneInstance(GameManager.instance.loadingView);
            console.log("检验平台---");
            var self = this;
            if (window["loadingH5"]) {
                window["loadingH5"](100);
            }
            if (window["loadingView"]) {
                window["NativeBrige"] = NativeBrige.getInstance();
            }
            var resUrl = "./";
            if (DeviceUtil.isQQMiniGame()) {
                PlatformDY.url = PlatformDY.qqUrl;
                GDataMgr.getInstance().gid = "1061";
                resUrl = GDataMgr.getInstance().perFixUrl + "qq_res/qq_res_v_z_2_6/";
                self.loadPreLoadRes(resUrl + "configs/infoQQ.json" + GameManager.instance.randomTime);
            }
            else if (DeviceUtil.isWXMiniGame()) {
                GDataMgr.getInstance().gid = "1062";
                resUrl = GDataMgr.getInstance().perFixUrl + "wx_res/wx_res_v_z_2_9/";
                self.loadPreLoadRes(resUrl + "configs/infoWX.json" + GameManager.instance.randomTime);
            }
            else if (DeviceUtil.isTTMiniGame()) {
                GDataMgr.getInstance().gid = "1049";
                resUrl = GDataMgr.getInstance().perFixUrl + "tt_res/tt_res_v_z_1_0/";
                self.loadPreLoadRes(resUrl + "configs/infoTT.json" + GameManager.instance.randomTime);
            }
            else if (DeviceUtil.isVIVOMiniGame()) {
                GDataMgr.getInstance().gid = "1049";
                resUrl = GDataMgr.getInstance().perFixUrl + "vivo_res/vivo_res_v_z_1_0/";
                self.loadPreLoadRes(resUrl + "configs/infoVV.json" + GameManager.instance.randomTime);
            }
            else if (DeviceUtil.isOPPOMiniGame()) {
                GDataMgr.getInstance().gid = "1049";
                resUrl = GDataMgr.getInstance().perFixUrl + "oppo_res/oppo_res_v_z_1_2/";
                self.loadPreLoadRes(resUrl + "configs/infoOppo.json" + GameManager.instance.randomTime);
            }
            else {
                GDataMgr.getInstance().gid = "1049";
                if (DeviceUtil.isNative()) {
                    GameManager.instance.randomTime = '';
                }
                self.initDebug();
                self.loadPreLoadRes(resUrl + "configs/infos.json" + GameManager.instance.randomTime);
            }
            if (DeviceUtil.isMiniGame()) {
                if (!DeviceUtil.isVIVOMiniGame()) {
                    Laya.timer.loop(10000, window, function () {
                        console.log("tt加速回收---");
                        platform.triggerGC();
                    });
                }
                ResUtil.getIntance().defaultOriginUrl = resUrl;
                ResUtil.getIntance().addVersionPrefix(resUrl);
            }
        };
        Main.prototype.loadPreLoadRes = function (resUrl) {
            console.log('资源路径->', resUrl);
            this.initInfos(resUrl);
            Laya.timer.once(5000, this, this.loadPreLoadRes, [resUrl]);
        };
        Main.prototype.enableFileConfig = function () {
            Laya.timer.clearAll(this);
            this.loadFileConfig("fileconfig.json");
            if (this.isFlage) {
                return;
            }
            this.isFlage = true;
            console.log(BaseConst.infos);
            GDataMgr.getInstance().initConfigs(BaseConst.infos);
            if (DeviceUtil.isWXMiniGame()) {
                PlatformDY.url = BaseConst.infos.gameInfo.url;
            }
            MiniGameMgr.instance.showBanner({});
        };
        Main.prototype.loadRes = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    GameManager.instance.loadRes();
                    return [2];
                });
            });
        };
        return Main;
    }(BaseContent));
    new Main();

}());

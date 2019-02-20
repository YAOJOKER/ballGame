var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "StartSceneSkin";
        _this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onStartClick, _this);
        return _this;
    }
    StartScene.prototype.onStartClick = function () {
        SceneManager.toGame();
    };
    return StartScene;
}(eui.Component));
__reflect(StartScene.prototype, "StartScene");
//# sourceMappingURL=StartScene.js.map
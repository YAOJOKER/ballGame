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
var EndScene = (function (_super) {
    __extends(EndScene, _super);
    function EndScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "EndSceneSkin";
        _this.btn_restart.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onStartClick, _this);
        return _this;
    }
    EndScene.prototype.onStartClick = function () {
        SceneManager.toStart();
    };
    return EndScene;
}(eui.Component));
__reflect(EndScene.prototype, "EndScene");
//# sourceMappingURL=EndScene.js.map
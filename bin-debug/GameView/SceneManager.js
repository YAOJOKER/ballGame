var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 场景管理类
 */
var SceneManager = (function () {
    // 在构造函数中创建好场景，保存到属性
    function SceneManager() {
        this.startScene = new StartScene();
        this.gameScene = new GameScene();
        this.endScene = new EndScene();
    }
    Object.defineProperty(SceneManager, "instance", {
        get: function () {
            if (!this.sceneManager) {
                this.sceneManager = new SceneManager();
            }
            return this.sceneManager;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置根场景
     */
    SceneManager.prototype.setStage = function (s) {
        this._stage = s;
    };
    /**
     * 删除其他场景
     */
    SceneManager.prototype.removeOtherScene = function (scene) {
        var _this = this;
        var arr = [this.startScene, this.gameScene, this.endScene];
        arr.forEach(function (item) {
            if (scene === item) {
                return;
            }
            if (item.parent) {
                _this._stage.removeChild(item);
            }
        });
    };
    /**
      * 开始场景
      */
    SceneManager.toStart = function () {
        this.instance.removeOtherScene(this.instance.startScene);
        this.instance._stage.addChild(this.instance.startScene);
    };
    /**游戏场景 */
    SceneManager.toGame = function () {
        this.instance.removeOtherScene(this.instance.gameScene);
        SceneManager.sceneManager.gameScene = new GameScene();
        this.instance._stage.addChild(SceneManager.sceneManager.gameScene);
    };
    /**结束场景 */
    SceneManager.toEnd = function () {
        var end1 = new EndScene();
        this.instance.removeOtherScene(end1);
        this.instance._stage.addChild(end1);
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map
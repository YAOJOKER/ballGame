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
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super.call(this) || this;
        // 球运动的方向
        _this.directionX = 0;
        _this.directionY = 1;
        _this.init();
        return _this;
    }
    Ball.prototype.init = function () {
        this._ball = GameUtil.createBitmapByName("ball_png");
        this._ball.x = (800 - this._ball.width) / 2;
        this._ball.y = (600 - this._ball.height) / 2;
        this._ball.anchorOffsetX = this._ball.width / 2;
        this._ball.anchorOffsetY = this._ball.height / 2;
        this.addChild(this._ball);
        this.ballstart();
        this._ball.addEventListener(egret.Event.ENTER_FRAME, this.ballMove, this);
    };
    // 设置球运动方向
    Ball.prototype.changeDirectionX = function (directionX) {
        this.directionX = directionX;
    };
    Ball.prototype.changeDirectionY = function (directionY) {
        this.directionY = directionY;
    };
    //开球方法
    Ball.prototype.ballstart = function () {
        GameData.chooseside = Math.random(); //随机开球
        if (GameData.chooseside >= 0.5) {
            this.directionX = -1; //飞向左边
            console.log(GameData.chooseside + "飞向左边");
        }
        else {
            this.directionX = 1; //飞向右边
            console.log(GameData.chooseside + "飞向右边");
        }
    };
    Ball.prototype.ballMove = function (evt) {
        //旋转、转速
        this._ball.rotation += GameData.rotation;
        GameData.rotation = 10;
        //发射角度
        var angleShoot = Math.tan(GameData.angle);
        GameData.angle = 45;
        //球速
        GameData.ballspeed = 5;
        this._ball.x += this.directionX * GameData.ballspeed;
        this._ball.y += this.directionY * GameData.ballspeed * angleShoot;
        // 撞到墙壁改变方向(待划定球场区域，目前为舞台碰撞)
        if (this._ball.x >= 700) {
            GameUtil.playSound("hit_mp3");
            this.directionX = -1;
            console.log("右");
        }
        if (this._ball.x <= 100) {
            GameUtil.playSound("hit_mp3");
            this.directionX = 1;
            console.log("左");
        }
        if (this._ball.y <= 100) {
            GameUtil.playSound("hit_mp3");
            this.directionY = 1;
            console.log("上");
        }
        if (this._ball.y >= 500) {
            GameUtil.playSound("hit_mp3");
            this.directionY = -1;
            console.log("下");
        }
    };
    return Ball;
}(egret.Sprite));
__reflect(Ball.prototype, "Ball");
//# sourceMappingURL=Ball.js.map
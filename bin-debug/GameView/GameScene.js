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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.goalL = 0;
        _this.goalR = 0;
        _this.isgoal = false;
        _this.skinName = "GameSceneSkin";
        _this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onStartClick, _this);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initView, _this);
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.onEnterFrame, _this); // 帧事件
        return _this;
    }
    GameScene.prototype.onStartClick = function () {
        //SceneManager.sceneManager.gameScene.ball.removeEventListener(egret.Event.ENTER_FRAME,SceneManager.sceneManager.gameScene.ball.ballMove,this)
        SceneManager.sceneManager.gameScene.removeChildren();
        SceneManager.toEnd();
    };
    GameScene.prototype.initView = function () {
        this.createBoard();
        //this.createBall();
    };
    //创建球
    GameScene.prototype.createBall = function () {
        this.ball = new Ball();
        this.addChild(this.ball);
        //this.ball.addEventListener(egret.Event.ENTER_FRAME,this.ball.ballMove,this);
        //this.ball.ballMove(gs);
    };
    //创建木板
    GameScene.prototype.createBoard = function () {
        //左边板子
        this.board_left.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onBoardMoveL, this);
        //右边板子
        this.board_right.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onBoardMoveR, this);
    };
    //移动事件左
    GameScene.prototype.onBoardMoveL = function (event) {
        this.board_left.x = event.stageX - this.board_left.width / 2;
        this.board_left.y = event.stageY - this.board_left.height / 2;
    };
    //移动事件右
    GameScene.prototype.onBoardMoveR = function (event) {
        this.board_right.x = event.stageX - this.board_right.width / 2;
        this.board_right.y = event.stageY - this.board_right.height / 2;
    };
    /**帧事件 (?)*/
    GameScene.prototype.onEnterFrame = function () {
        var gs = this;
        if (gs == null) {
            return;
        }
        console.log();
        //小球运动
        gs.ball.ballMove(gs);
        //碰撞检测
        //gs.hitting();
        //进球检测
        //gs.goal();
        //发送坐标
        //gs.sendXY();
        //得到坐标
        //gs.getXY();
    };
    GameScene.prototype.hitting = function () {
        //碰撞木板改变方向
        if (this.board_left.hitTestPoint(this.ball.x, this.ball.y)) {
            this.ball.changeDirectionX(1); //向右反弹
        }
        if (this.board_right.hitTestPoint(this.ball.x, this.ball.y)) {
            this.ball.changeDirectionX(-1); //向左反弹
        }
    };
    GameScene.prototype.goal = function () {
        if (this.ball.x <= this.ball.width / 2) {
            this.isgoal = true;
            console.log("右边进球");
            this.goalR += 1;
            this.score_right.text = this.goalR.toString();
            this.gamewin();
            this.restart();
        }
        if (this.ball.x >= 800 - this.ball.width / 2) {
            this.isgoal = true;
            console.log("左边进球");
            this.goalL += 1;
            this.score_left.text = this.goalL.toString();
            this.gamewin();
            this.restart();
        }
    };
    GameScene.prototype.restart = function () {
        this.removeChild(this.ball);
        this.removeChild(this.board_left);
        this.removeChild(this.board_right);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.initView();
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    GameScene.prototype.gamewin = function () {
        if (this.score_left.text == "9") {
            this.win_left.visible = true;
            SceneManager.toEnd();
        }
        if (this.score_right.text == "9") {
            this.win_right.visible = true;
            SceneManager.toEnd();
        }
    };
    //发送坐标
    GameScene.prototype.sendXY = function () {
        var XYarr = [this.board_left.x, this.board_left.y, this.board_right.x, this.board_right.y];
        this.xyjson = JSON.stringify(XYarr);
        var pushEvent = new egret.Event(this.xyjson);
        this.dispatchEvent(pushEvent);
        //console.log(this.xyjson);
    };
    //从服务端得到坐标
    GameScene.prototype.getXY = function () {
        this.board_left.x = this.zuobiao[0];
        this.board_left.y = this.zuobiao[1];
        this.board_right.x = this.zuobiao[2];
        this.board_right.y = this.zuobiao[3];
    };
    return GameScene;
}(eui.Component));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map
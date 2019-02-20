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
var Board = (function (_super) {
    __extends(Board, _super);
    function Board(side) {
        var _this = _super.call(this) || this;
        _this.init(side);
        return _this;
    }
    Board.prototype.init = function (side) {
        this.board = GameUtil.createBitmapByName("board_" + side + "_png");
        this.board.width = 40;
        this.board.height = 150;
        this.addChild(this.board);
        this.board.touchEnabled = true;
    };
    return Board;
}(egret.DisplayObjectContainer));
__reflect(Board.prototype, "Board");
//# sourceMappingURL=Board.js.map
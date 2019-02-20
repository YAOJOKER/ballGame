class Board extends egret.DisplayObjectContainer{
    public board:egret.Bitmap;
    public constructor(side:string){
        super();
        this.init(side);
    }
    private init(side){
        this.board = GameUtil.createBitmapByName("board_"+side+"_png");
        this.board.width = 40;
        this.board.height = 150;
		this.addChild(this.board);
        this.board.touchEnabled = true;
    }

}
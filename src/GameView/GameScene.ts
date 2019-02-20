class GameScene extends eui.Component{
	public btn_close:eui.Button;
	public score_left:eui.BitmapLabel;
	public score_right:eui.BitmapLabel;
	public board_left:eui.Image;
	public board_right:eui.Image;
	public ball:Ball;
	public goalL:number=0;
	public goalR:number=0;
	public isgoal:Boolean=false;
	public win_left:eui.Image;
	public win_right:eui.Image;
	public xyjson:string;
	public zuobiao:number[];
	
	public constructor() {
		super();
        this.skinName="GameSceneSkin"
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStartClick,this);
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.initView,this);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this); // 帧事件
		
	
	}
    public onStartClick(){
		//SceneManager.sceneManager.gameScene.ball.removeEventListener(egret.Event.ENTER_FRAME,SceneManager.sceneManager.gameScene.ball.ballMove,this)
		SceneManager.sceneManager.gameScene.removeChildren();
		SceneManager.toEnd();
}
    public initView(){
		this.createBoard();
		//this.createBall();
		this.sendXY();
	}
	//创建球
	public createBall(){
		this.ball = new Ball();
		this.addChild( this.ball);
		//this.ball.addEventListener(egret.Event.ENTER_FRAME,this.ball.ballMove,this);
		//this.ball.ballMove(gs);
	}
	//创建木板
	public createBoard(){
		//左边板子
		this.board_left.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onBoardMoveL,this)
		//右边板子
		this.board_right.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onBoardMoveR,this)
    }
	//移动事件左
	    private onBoardMoveL(event: egret.TouchEvent) {
        this.board_left.x = event.stageX - this.board_left.width / 2;
        this.board_left.y = event.stageY - this.board_left.height / 2;
    }
	//移动事件右
        private onBoardMoveR(event: egret.TouchEvent) {
        this.board_right.x = event.stageX - this.board_right.width / 2;
        this.board_right.y = event.stageY - this.board_right.height / 2;
    }
	/**帧事件 (?)*/
	public  onEnterFrame(){
		let gs: GameScene = this;
        if (gs == null) {
            return;
	    }
		console.log()
		//小球运动
		//gs.ball.ballMove();
		//碰撞检测
		//gs.hitting();
		//进球检测
		//gs.goal();
		//发送坐标
		//gs.sendXY();
		//得到坐标
		//gs.getXY();
		
	}
	public hitting():void{
		//碰撞木板改变方向
		if(this.board_left.hitTestPoint(this.ball.x,this.ball.y)){
           this.ball.changeDirectionX(1)//向右反弹
		}
		if(this.board_right.hitTestPoint(this.ball.x,this.ball.y)){
           this.ball.changeDirectionX(-1)//向左反弹
		}

	}
	public goal():void{
		if(this.ball.x <=this.ball.width/2){
			this.isgoal= true;
			console.log("右边进球");
			this.goalR += 1;
			this.score_right.text =this.goalR.toString();
			this.gamewin();
			this.restart();
		}
		if(this.ball.x>=800-this.ball.width/2){
			this.isgoal = true;
			console.log("左边进球");
			this.goalL += 1;
			this.score_left.text =this.goalL.toString();
			this.gamewin();
			this.restart();
		}
	}
	private restart(){
		this.removeChild(this.ball);
		this.removeChild(this.board_left);
		this.removeChild(this.board_right);
		this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
		this.initView();
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);

	}
	//获胜条件
	private gamewin(){
		if(this.score_left.text=="9"){
			this.win_left.visible=true;
			SceneManager.toEnd();
		}
		if(this.score_right.text=="9"){
			this.win_right.visible=true;
			SceneManager.toEnd();
		}
	}
	//发送坐标
	private sendXY(){
		var XYarr =[this.board_left.x,this.board_left.y,this.board_right.x,this.board_right.y];
		this.xyjson = JSON.stringify(XYarr);
		var pushEvent:egret.Event = new egret.Event(this.xyjson)
        this.dispatchEvent(pushEvent);
		//console.log(this.xyjson);
	}
	//从服务端得到坐标
	private getXY(){
		this.board_left.x = this.zuobiao[0];
		this.board_left.y = this.zuobiao[1];
		this.board_right.x = this.zuobiao[2];
		this.board_right.y = this.zuobiao[3];
	}
}
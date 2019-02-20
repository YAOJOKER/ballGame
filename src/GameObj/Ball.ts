class Ball extends egret.Sprite{
    public constructor(){
        super();
        this.init();
    }
    //球
    public _ball:egret.Bitmap
    private init(){
        this._ball = GameUtil.createBitmapByName("ball_png");
        this._ball.x=(800 - this._ball.width)/2;
        this._ball.y=(600 -this._ball.height)/2;
        this._ball.anchorOffsetX=this._ball.width/2;
        this._ball.anchorOffsetY=this._ball.height/2;
		this.addChild(this._ball);
        this.ballstart();
        this._ball.addEventListener(egret.Event.ENTER_FRAME,this.ballMove,this);

    }
    // 球运动的方向
    private directionX: number = 0;
    private directionY: number = 1;
    // 设置球运动方向
    public changeDirectionX(directionX:number) {
        this.directionX = directionX
    }
    public changeDirectionY(directionY:number) {
        this.directionY = directionY
    }
    //开球方法
    public ballstart(){
        GameData.chooseside=Math.random();//随机开球
        if(GameData.chooseside>=0.5){
            this.directionX = -1//飞向左边
            console.log(GameData.chooseside+"飞向左边")
        }
        else{
            this.directionX =1//飞向右边
            console.log(GameData.chooseside+"飞向右边")
        }
    }
    public ballMove(evt:egret.Event){
        //旋转、转速
        this._ball.rotation += GameData.rotation;
        GameData.rotation=10
        //发射角度
        let angleShoot = Math.tan(GameData.angle);
        GameData.angle=45;
        //球速
        GameData.ballspeed=5;
         this._ball.x += this.directionX * GameData.ballspeed;
    
         this._ball.y += this.directionY * GameData.ballspeed*angleShoot;
        // 撞到墙壁改变方向(待划定球场区域，目前为舞台碰撞)
        if (this._ball.x >= 700) {
            GameUtil.playSound("hit_mp3")
            this.directionX = -1;
            console.log("右")
        }
        if (this._ball.x <= 100) {
            GameUtil.playSound("hit_mp3")
            this.directionX = 1;
            console.log("左")
        }
        if (this._ball.y <=100) {
            GameUtil.playSound("hit_mp3")
            this.directionY = 1;
            console.log("上")
        }
        if (this._ball.y >= 500) {
            GameUtil.playSound("hit_mp3")
            this.directionY = -1;
            console.log("下")
        }

    }

}
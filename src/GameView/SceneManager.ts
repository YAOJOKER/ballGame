/**
 * 场景管理类
 */
class SceneManager {

	private _stage:egret.DisplayObjectContainer;// 设置所有场景所在的舞台(根)

	private startScene:StartScene;//开始场景
	public gameScene:GameScene;//游戏场景
	private endScene:EndScene;//结束场景

    // 在构造函数中创建好场景，保存到属性
	public constructor() {
		this.startScene = new StartScene();
		this.gameScene = new GameScene();
		this.endScene = new EndScene();
	}
    /**
     * 获取实例
     */
	static sceneManager:SceneManager;
    static get instance(){
        if(!this.sceneManager) {
            this.sceneManager =  new SceneManager()
        } 
        return this.sceneManager;
	}

    /**
     * 设置根场景
     */
	public setStage(s:egret.DisplayObjectContainer){
		this._stage = s;
	}
    /**
     * 删除其他场景
     */
  private removeOtherScene(scene) {
    let arr = [this.startScene, this.gameScene,this.endScene];
    arr.forEach(item => {
      if (scene === item) {
        return
      }
      if (item.parent) {
        this._stage.removeChild(item)
      }
    })
  }
   /**
     * 开始场景
     */
    static toStart() {
      this.instance.removeOtherScene(this.instance.startScene);
      this.instance._stage.addChild(this.instance.startScene)   
    }
    /**游戏场景 */
    static toGame() {
        this.instance.removeOtherScene(this.instance.gameScene);
        SceneManager.sceneManager.gameScene= new GameScene(); 
        this.instance._stage.addChild(SceneManager.sceneManager.gameScene); 

    }
    /**结束场景 */
    static toEnd() {
         var end1 : EndScene = new EndScene();
         this.instance.removeOtherScene(end1);
         this.instance._stage.addChild(end1);
   }
}
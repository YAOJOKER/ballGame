class StartScene extends eui.Component{
	private btn_start:eui.Button;
	public constructor() {
		super();
        this.skinName="StartSceneSkin"
		this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStartClick,this);
	}
private onStartClick(){
	SceneManager.toGame();
    }
}
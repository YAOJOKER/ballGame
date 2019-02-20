class EndScene extends eui.Component{
	private btn_restart:eui.Button;
	public constructor() {
		super();
        this.skinName="EndSceneSkin"
		this.btn_restart.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStartClick,this);
	}
    private onStartClick(){
		SceneManager.toStart();
}
}
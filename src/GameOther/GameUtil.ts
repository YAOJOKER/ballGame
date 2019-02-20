//工具类
class GameUtil {
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    static createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    // 播放声音
    static playSound(sound: string) {
        let playSound:egret.Sound = RES.getRes( sound ); 
        let channel:egret.SoundChannel = playSound.play(0,1);
    }
}
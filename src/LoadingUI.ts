//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView, this);
        this.progressbar= new eui.ProgressBar();
    }

    private textField: egret.TextField;
    private progressbar:eui.ProgressBar;
    private loadingbg: egret.Bitmap;

    private createView(): void {

        this.loadingbg = new egret.Bitmap();
        this.loadingbg.texture = RES.getRes("field_png")
        this.addChild(this.loadingbg);
        this.loadingbg.x=0;
        this.loadingbg.y=0;

        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.x = 170;
        this.textField.y = 350;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textColor=0x000000;
        this.textField.textAlign = "center";

        this.progressbar.skinName="resource/eui_skins/game_skins/Progressbar.exml";
        this.addChild(this.progressbar);
        this.progressbar.x=200;
        this.progressbar.y=260;
    }

    public onProgress(current: number, total: number): void {
         let per = Math.floor((current / total) * 100)
         this.progressbar.value = per ;
         this.textField.text = `${per}%`;
    }
}

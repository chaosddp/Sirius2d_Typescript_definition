/// <reference path="start.ts" />
module demo {
    export class TestScene02 extends TestScene01 {
        init() {
            var texture = new ss2d.Texture(this._assets.getResult("logo"));

            this.mc = new ss2d.MovieClip(texture);

            this.mc.setCenter(true);
            this.mc.setX(ss2d.Stage2D.stageWidth / 2);
            this.mc.setY(ss2d.Stage2D.stageHeight / 2);
            this.mc.setScaleX(.5);
            this.mc.setScaleY(1.5);
            this.mc.setSkewX(.5);
            this.mc.setRotation(90);
            ss2d.stage.addChild(this.mc);
        }
    }
} 
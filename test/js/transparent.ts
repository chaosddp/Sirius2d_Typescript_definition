/// <reference path="start.ts" />
module demo {
    export class TestScene03 extends TestScene01 {
        init() {
            var texture = new ss2d.Texture(this._assets.getResult("logo"));
            this.mc = new ss2d.MovieClip(texture);

            this.mc.setCenter(true);
            this.mc.setX(ss2d.Stage2D.stageWidth / 2);
            this.mc.setY(ss2d.Stage2D.stageHeight / 2);
            this.mc.setScaleX(.5);
            this.mc.setScaleY(1.5);
            this.mc.setRotation(45);
            this.mc.setAlpha(.5);
            this.mc.setR(2);

            ss2d.stage.addChild(this.mc);

            // test
            var mc = new ss2d.MovieClip(texture);

            mc.setCenter(true);
            mc.setX(ss2d.Stage2D.stageWidth / 2);
            mc.setY(ss2d.Stage2D.stageHeight / 2);
            mc.setScaleX(.5);
            mc.setScaleY(1.5);
            mc.setSkewX(.5);
            mc.setRotation(90);
            ss2d.stage.addChild(mc);
        }
    }
} 
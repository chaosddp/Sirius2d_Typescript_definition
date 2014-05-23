/// <reference path="simplescene.ts" />


module demo {
    export class TestScene01 extends SimpleScene {

        mc: ss2d.MovieClip;

        setAssets() {
            this._manifest.push({
                src: "images/logo.png",
                id: "logo"
            });
        }

        init() {
            var texture = new ss2d.Texture(this._assets.getResult("logo"));

            this.mc = new ss2d.MovieClip(texture);

            this.mc.setCenter(true);

            ss2d.stage.addChild(this.mc);

            this.mc.setX(ss2d.Stage2D.stageWidth / 2);
            this.mc.setY(ss2d.Stage2D.stageHeight / 2);
        }

        remove() {
            ss2d.stage.removeChild(this.mc);
        }
    }
} 
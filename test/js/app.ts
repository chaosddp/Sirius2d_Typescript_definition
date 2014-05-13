/// <reference path="../../sirius2d.d.ts" />

module demo {

    export class SimpleMain {

        private manifest: Array<{ src: string; id: string }>;
        private loaded: number;
        private stage: ss2d.Stage2D;
        private scene: ss2d.Scene;
        private assets: ss2d.LoadQueue;
        private mc: ss2d.MovieClip;


        constructor(canvasId?: string, width?: number, height?: number) {

            // we need this line to make the static property ss2d.stage availble
            this.stage = new ss2d.Stage2D(canvasId, width, height);
            this.assets = new ss2d.LoadQueue(true);
            this.loaded = 0;

            this["handleFile"] = this.handleFileLoad.bind(this);
            this["handleProgress"] = this.handleOverallProgress.bind(this);

            this.manifest = [{
                src: "images/logo.png",
                id: "logo"
            }];

            this.assets.on("fileload", this["handleFile"]);
            this.assets.on("progress", this["handleProgress"]);

            this.assets.loadManifest(this.manifest);
        }

        private handleFileLoad(e) {

            this.loaded++;

            if (this.loaded == this.manifest.length) {

                this.assets.removeEventListener("fileload", this["handleFile"]);
                this.assets.removeEventListener("progress", this["handleProgress"]);

                this["handleFileLoad"] = null;
                this["handleOverallProgress"] = null;

                this.init();
            }
        }

        private handleOverallProgress(e) { }

        private init() {

            var texture = new ss2d.Texture(this.assets.getResult("logo"));

            this.mc = new ss2d.MovieClip(texture);

            this.mc.setCenter(true);

            // this is the same one with we created in constructor
            ss2d.stage.addChild(this.mc);

            this.mc.setX(ss2d.Stage2D.stageWidth / 2);
            this.mc.setY(ss2d.Stage2D.stageHeight / 2);
        }
    }
}

window.onload = () => {

    new demo.SimpleMain("cv", 800, 600);

};
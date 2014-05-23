/// <reference path="../../sirius2d.d.ts" />

module demo {

    export declare class Manifest {
        src: string;
        id: string;
    }

    export class SimpleScene {

        constructor() {
            this._manifest = [];
            this._assets = new ss2d.LoadQueue(true);
            this._loaded = 0;

            this["handleFile"] = this.onFileLoaded.bind(this);
            this["handleProgress"] = this.onFileProgress.bind(this);

            this._assets.on("fileload", this["handleFile"]);
            this._assets.on("progress", this["handleProgress"]);
        }

        _manifest: Array<Manifest>;
        _loaded: number;
        _stage: ss2d.Stage2D;
        _assets: ss2d.LoadQueue;
        _scene: ss2d.Scene;

        setAssets() {}

        loadAssets() {
            this._assets.loadManifest(this._manifest);
        }

        onFileProgress(e) { }

        // this can be override to write own logic
        onFileLoaded(e) {
            this._loaded++;

            if (this._loaded == this._manifest.length) {
                this.init();
            }
        }

        update() { }

        init() { }

        remove() { }

        start() {
            this._loaded = 0;
            this.setAssets();
            this.loadAssets();
        }

        
    }

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

    export class SimpleGame {
        stage: ss2d.Stage2D;
        scenes: Map<string, SimpleScene>;
        currentScene: SimpleScene;

        constructor(canvasId: string, width: number, height: number) {
            this.stage = new ss2d.Stage2D(canvasId, width, height);
            this.scenes = new Map<string, SimpleScene>();
        }

        add(key: string, scene: SimpleScene) {
            this.scenes.set(key, scene);
        }

        start(key: string) {
            if (this.scenes.has(key)) {
                if (this.currentScene != null) {
                    this.currentScene.remove();
                }

                this.currentScene = this.scenes.get(key);
                this.currentScene.start();
            }
        }

    }

}

window.onload = () => {

    //new demo.SimpleMain("cv", 800, 600);

    var game = new demo.SimpleGame("cv", 800, 600);

    var demolist = document.getElementById("demos");

    demolist.appendChild(new Option("start", "start"));
    game.add("start", new demo.TestScene01());

    demolist.appendChild(new Option("skew", "skew"));
    game.add("skew", new demo.TestScene02());

    demolist.appendChild(new Option("transparent", "transparent"));
    game.add("transparent", new demo.TestScene03());

    demolist.onchange = function (e: Event) {
        var target: HTMLSelectElement = this;

       var option:HTMLOptionElement= target.options[target.selectedIndex];

        if (option.value !== "-1") {
            game.start(option.value);
        }
    }
};
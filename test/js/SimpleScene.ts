module demo {
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

        setAssets() { }

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
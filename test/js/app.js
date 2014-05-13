/// <reference path="../../sirius2d.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var demo;
(function (demo) {
    var SimpleScene = (function () {
        function SimpleScene() {
            this._manifest = [];
            this._assets = new ss2d.LoadQueue(true);
            this._loaded = 0;

            this["handleFile"] = this.onFileLoaded.bind(this);
            this["handleProgress"] = this.onFileProgress.bind(this);

            this._assets.on("fileload", this["handleFile"]);
            this._assets.on("progress", this["handleProgress"]);
        }
        SimpleScene.prototype.setAssets = function () {
        };

        SimpleScene.prototype.loadAssets = function () {
            this._assets.loadManifest(this._manifest);
        };

        SimpleScene.prototype.onFileProgress = function (e) {
        };

        // this can be override to write own logic
        SimpleScene.prototype.onFileLoaded = function (e) {
            this._loaded++;

            if (this._loaded == this._manifest.length) {
                this.init();
            }
        };

        SimpleScene.prototype.update = function () {
        };

        SimpleScene.prototype.init = function () {
        };

        SimpleScene.prototype.remove = function () {
        };

        SimpleScene.prototype.start = function () {
            this._loaded = 0;
            this.setAssets();
            this.loadAssets();
        };
        return SimpleScene;
    })();
    demo.SimpleScene = SimpleScene;

    var TestScene01 = (function (_super) {
        __extends(TestScene01, _super);
        function TestScene01() {
            _super.apply(this, arguments);
        }
        TestScene01.prototype.setAssets = function () {
            this._manifest.push({
                src: "images/logo.png",
                id: "logo"
            });
        };

        TestScene01.prototype.init = function () {
            var texture = new ss2d.Texture(this._assets.getResult("logo"));

            this.mc = new ss2d.MovieClip(texture);

            this.mc.setCenter(true);

            ss2d.stage.addChild(this.mc);

            this.mc.setX(ss2d.Stage2D.stageWidth / 2);
            this.mc.setY(ss2d.Stage2D.stageHeight / 2);
        };

        TestScene01.prototype.remove = function () {
            ss2d.stage.removeChild(this.mc);
        };
        return TestScene01;
    })(SimpleScene);
    demo.TestScene01 = TestScene01;

    var TestScene02 = (function (_super) {
        __extends(TestScene02, _super);
        function TestScene02() {
            _super.apply(this, arguments);
        }
        TestScene02.prototype.init = function () {
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
        };
        return TestScene02;
    })(TestScene01);
    demo.TestScene02 = TestScene02;

    var TestScene03 = (function (_super) {
        __extends(TestScene03, _super);
        function TestScene03() {
            _super.apply(this, arguments);
        }
        TestScene03.prototype.init = function () {
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
        };
        return TestScene03;
    })(TestScene01);
    demo.TestScene03 = TestScene03;

    var SimpleGame = (function () {
        function SimpleGame(canvasId, width, height) {
            this.stage = new ss2d.Stage2D(canvasId, width, height);
            this.scenes = new Map();
        }
        SimpleGame.prototype.add = function (key, scene) {
            this.scenes.set(key, scene);
        };

        SimpleGame.prototype.start = function (key) {
            if (this.scenes.has(key)) {
                if (this.currentScene != null) {
                    this.currentScene.remove();
                }

                this.currentScene = this.scenes.get(key);
                this.currentScene.start();
            }
        };
        return SimpleGame;
    })();
    demo.SimpleGame = SimpleGame;
})(demo || (demo = {}));

window.onload = function () {
    //new demo.SimpleMain("cv", 800, 600);
    var game = new demo.SimpleGame("cv", 800, 600);

    game.add("test", new demo.TestScene01());
    game.add("test02", new demo.TestScene02());
    game.add("test03", new demo.TestScene03());

    game.start("test03");
};
//# sourceMappingURL=app.js.map

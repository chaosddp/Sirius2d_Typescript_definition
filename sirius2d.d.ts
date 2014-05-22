
declare function Class(...params);


declare module ss2d {

    /**
     * 是否开启调试信息
     */
    var debug: boolean;

    /**
     * 引擎版本号
     */
    var version: string;

    /**
     * XML默认读取开关,打开以下划线作为分隔符,关闭则忽略
     */
    var xmlUnderline: boolean;

    /**
     *
     * TODO: window? sure?
     */
    var global: Window;

    /**
     * 不缓存数据的参数
     */
    var nocache: string;

    /**
     * 是否开启鼠标移动监测
     */
    var useMouseMove: boolean;

    /**
     * 创建默认画布
     */
    var canvas: HTMLElement;

    /**
     * canvas context
     */
    var context: CanvasRenderingContext2D;

    // TODO: need?
    //static sound

    // this is availble after you new a stage
    var stage: ss2d.Stage2D;

    /**
     * 根据标签id或者名称获取对象
     */
    function $(selector: string): HTMLElement;

    /**
     * 新建对象
     */
    function $new(name: string): HTMLElement;

    function log(obj: any);

    function copy(object: Object);

    function merge(original, extended);

    function getElementOffset(elem: HTMLElement): { left: number; top: number };

    function ksort(obj: Object): Array<Object>;

    function proxy(method: Function, scope: Object): Function;

    /**
     * 弧度转角度
     */
    function radianToDegree(angle: number): number;

    /**
     * 角度转弧度
     */
    function degreeToRadian(angle: number): number;

    /**
     * 面积检测
     * 
     * TODO: point?
     */
    function hitTrianglePoint(p1: Point, p2: Point, p3: Point): number;

    /**
     * 顶点碰撞检测
     */
    function hitPoint(p1: Point, p2: Point, p3: Point, p4: Point): boolean;

    /**
     * 正交视口模型矩阵
     * 
     * TODO: matrix type? number correct?
     */
    function orthographicViewportMatrix(matrix, left: number, right: number, bottom: number, top: number, near: number, far: number);

    /**
     * 计算图片最接近的乘方图片
     */
    function getScope(num: number): number;

    /**
     * 检测图片是否为2的次方
     */
    function isPower_2(num: number): boolean;

    function supportsFullScreen(): boolean;

    function isFullScreen(): boolean;

    function requestFullScreen();

    function cancelFullScreen();

    /**
     * 数据列表类
     * 
     * TODO: List related needed?
     */
    module List { }

    class List { }

    module ListDecoder { }

    class ListDecoder { }

    module ListEncoder { }

    class ListEncoder { }

    class ListItem { }

    /**
     * Blend 实现图像特效，粒子混色的重要手段，通过混色可以实现意想不到的神奇效果。
     * 
     * 演示地址:http://sirius2d.com/demos/d_22
     */
    enum Blend {

        /**
         * 无混色
         */
        BLEND_NONE,

        /**
         * 叠加
         */
        BLEND_ADD,

        /**
         * 普通透明度
         */
        BLEND_NORMAL,

        /**
         * 复合
         */
        BLEND_MULTIPLY,

        /**
         * 遮挡
         */
        BLEND_SCREEN,

        /**
         * 擦除
         */
        BLEND_ERASE,

        /**
         * 排除
         */
        BLEND_EXCLUSION,

        /**
         * 灯光
         */
        BLEND_LIGHT,

        /**
         * 融化
         */
        BLEND_FUSE,

        /**
         * 遮罩
         */
        BLEND_MASK,

        /**
         * 透明度叠加
         */
        BLEND_ADD_ALPHA
    }

    /**
    * DisplayObject 最底层的显示对象基类。
    */
    class DisplayObject extends EventDispatcher {

        x: number;
        y: number;

        /**
         * 使用GPU实现位移功能
         * 
         * TODO: needed?
         */
        //GPUX: number;

        /**
         * 使用GPU实现位移功能
         * 
         * TODO: needed?
         */
        //GPUY: number;

        /**
         * 是否开启GPU加速 true:开启   false:不开启
         */
        GPU: boolean;

        getColor(): { r: number; g: number; b: number };

        setColor(value: any);


        // TODO: so many set/get, can be changed with Object.defineProperty?

        getR(): number;
        setR(value: number);
        getG(): number;
        setG(value: number);
        getB(): number;
        setB(value: number);
        getA(): number;
        setA(value: number);
        getX(): number;
        setX(value: number);
        getY(): number;
        setY(value: number);
        getWidth(): number;
        setWidth(value: number);
        getHeight(): number;
        setHeight(value: number);
        getScaleX(): number;
        setScaleX(value: number);
        getScaleY(): number;
        setScaleY(value: number);

        /**
        * 获取对象的X轴倾斜值
        */
        getSkewX(): number;

        /**
        * 设置对象的X轴倾斜值
        */
        setSkewX(value: number);

        /**
         * 获取对象的Y轴倾斜值
         */
        getSkewY(): number;

        /**
         * 设置对象的Y轴倾斜值
         */
        setSkewY(value: number);

        /**
         * 获取对象的X轴偏移位置
         */
        getPivotX(): number;

        /**
        * 设置对象的X轴偏移位置
        */
        setPivotX(value: number);

        /**
         * 获取对象的Y轴偏移量
         */
        getPivotY(): number;

        /**
         * 设置对象的Y轴偏移量
         */
        setPivotY(value: number);

        getRotation(): number;
        setRotation(value: number);
        getAlpha(): number;
        setAlpha(value: number);
        getVisible(): boolean;
        setVisible(value: boolean);

        /**
        * 获取对象的刷新状态
        */
        getIsRedraw(): boolean;

        /**
         * 设置对象的刷新状态
         */
        setIsRedraw(value: boolean);

        getParent();
        setParent(value);

        getMouseEnabled(): boolean;

        setMouseEnabled(value: boolean);

        getUserData();

        setUserData(value:Object);

        /**
         * 获取对象中心对齐状态
         */
        getCenter(): boolean;

        /**
         * 设置对象中心对齐状态
         */
        setCenter(value: boolean);

        /**
         * 获取对象强制中心对齐状态 (无视动画偏移量的影响)
         */
        getForceCenter(): boolean;

        /**
         * 设置对象强制中心对齐状态 (无视动画偏移量的影响)
         */
        setForceCenter(value: boolean);

        /**
         * 检测对象与坐标点的碰撞
         */
        hitTestPoint(x: number, y: number): boolean;

        /**
         * 检测对象与对象的碰撞
         * 
         * TODO: child is a DisplayObject?
         */
        hitTestObject(child): boolean;

        /**
         * 检测对象与范围的碰撞
         */
        hitTestRoundness(x: number, y: number, radius: number): boolean;
    }

    /**
     * 帧缓存类 用于后处理的必须类，使用它可以把当前屏幕的内容拷贝到一张特定的纹理上，用于做后期的屏幕特效。
     * 
     * 演示地址：http://sirius2d.com/demos/d_37/
     */
    class FrameBuffer {

        // TODO: type
        setDisplay(value:Scene);

        // TODO: type
        getFrameBuff(): Scene;

        isClear(value: boolean);

        addChild(child: Scene);

        removeChild(child: Scene);
    }

    /**
     * MovieClip 影片剪辑类,不建议多用,一般用于显示测试,后处理,单个大背景,如果显示数量很多建议用Scene
     * 
     * 演示地址:http://sirius2d.com/demos/d_10/
     */
    class MovieClip extends Scene {

        constructor(textureData: Texture);

        /**
         * 检测对象与对象的碰撞
         */
        hitTestObject(child): boolean;

        /**
        * 检测对象与范围的碰撞
        */
        hitTestRoundness(x: number, y: number, radius: number): boolean;

        // TODO: make a interface to share same method with Quad?

        setTextureID(value: number);
        getTextureID(): number;
        setTileName(name: string);
        setTileId(id: number);
        getCurrentFrame(): number;
        getTotalFrame(): number;

        /**
         * 设置纹理片段X坐标偏移位置
         */
        setTileXOffset(value: number);

        /**
         * 获取纹理片段X坐标偏移位置
         */
        getTileXOffset(): number;

        /**
         * 设置纹理片段Y坐标偏移位置
         */
        setTileYOffset(value: number);

        /**
         * 获取纹理片段Y坐标偏移位置
         */
        getTileYOffset(): number;

        /**
         * 设置纹理片段宽度偏移位置
         */
        setTileWidthOffset(value: number);

        /**
         * 获取纹理片段宽度偏移位置
         */
        getTileWidthOffset(): number;

        /**
         * 设置纹理片段高度偏移位置
         */
        setTileHeightOffset(value: number);

        /**
         * 获取纹理片段高度偏移位置
         */
        getTileHeightOffset(): number;

        setAnimationSpeed(frame: number);

        /**
         * 设置顶点位置 (index: 0-左上，1-左下，2-右上，3-右下)
         */
        setIndexVertext(index: number, x: number, y: number);

        /**
         * 获取顶点位置 (index: 0-左上，1-左下，2-右上，3-右下)
         */
        getIndexVertext(index): Point;

        /**
         * 获得顶点数据
         */
        getVertex(index: number): Point;

        loop(value: boolean);

        play();

        stop();

        gotoAndPlay(value: number);

        gotoAndStop(value: number);

        /**
         * 添加帧脚本
         * 
         * TODO: type?
         */
        addFrameScript(value);

        /**
         * 删除帧脚本
         */
        removeFrameScript(value);

        /**
         * 删除所有帧函数
         */
        removeAllFrameScript();

        rollbackAnimation(value: boolean);

        getCenter(): boolean;

        setCenter(value: boolean);

        dispose();


        /**
         * 获得绝对中心点
         */
        absCentre(): Point;

        /**
         * 设置融合矩阵
         * 
         * TODO: matrix?
         */
        setTransform(value);

        /**
         * 获取融合矩阵
         * 
         * TODO: type?
         */
        getTransform();

        paint();

        /**
         * 获取对象颜色值
         * 
         * TODO: type?
         */
        getColor();

        /**
         * 设置对象颜色值
         */
        setColor(value);

        //TODO: seems like quad not contains set/setColor function?
        //TODO: make an interface to share method with DisplayObject


        getR(): number;
        setR(value: number);
        getG(): number;
        setG(value: number);
        getB(): number;
        setB(value: number);
        getA(): number;
        setA(value: number);
        getX(): number;
        setX(value: number);
        getY(): number;
        setY(value: number);
        getWidth(): number;
        setWidth(value: number);
        getHeight(): number;
        setHeight(value: number);
        getScaleX(): number;
        setScaleX(value: number);
        getScaleY(): number;
        setScaleY(value: number);

        /**
        * 获取对象的X轴倾斜值
        */
        getSkewX(): number;

        /**
        * 设置对象的X轴倾斜值
        */
        setSkewX(value: number);

        /**
         * 获取对象的Y轴倾斜值
         */
        getSkewY(): number;

        /**
         * 设置对象的Y轴倾斜值
         */
        setSkewY(value: number);

        /**
         * 获取对象的X轴偏移位置
         */
        getPivotX(): number;

        /**
        * 设置对象的X轴偏移位置
        */
        setPivotX(value: number);

        /**
         * 获取对象的Y轴偏移量
         */
        getPivotY(): number;

        /**
         * 设置对象的Y轴偏移量
         */
        setPivotY(value: number);

        getRotation(): number;
        setRotation(value: number);
        getAlpha(): number;
        setAlpha(value: number);
        getVisible(): boolean;
        setVisible(value: boolean);

        /**
        * 获取对象的刷新状态
        */
        getIsRedraw(): boolean;

        /**
         * 设置对象的刷新状态
         */
        setIsRedraw(value: boolean);

        getParent();
        setParent(value);

        getMouseEnabled(): boolean;

        setMouseEnabled(value: boolean);

        getUserData();

        setUserData(value:Object);

        /**
         * 获取对象强制中心对齐状态 (无视动画偏移量的影响)
         */
        getForceCenter(): boolean;

        /**
         * 设置对象强制中心对齐状态 (无视动画偏移量的影响)
         */
        setForceCenter(value: boolean);

    }

    /**
     * Scene 场景管理类，开发高效率游戏的必要类，它不是一个显示对象，而是一个批处理的对象池，使用它你必须事先明确需要多少个Quad，当以后开发时再从Scene里去取,Quad是整个引擎里功能最多的显示对象。
     * 
     * 演示地址:http://sirius2d.com/demos/d_12/
     */
    class Scene extends EventDispatcher {

        constructor(textureData: Texture, quad:number);

        applyQuad(cache: boolean): Quad;

        hideQuad(child: Quad);

        showQuad(child: Quad, parameter);

        setTexture(value: Texture);

        getTexture(): Texture;

        getMouseEnabled(): boolean;

        setMouseEnabled(value: boolean);

        setShader(value: ShaderAbstract);

        getShader(): ShaderAbstract;

        blend(value: Blend);

        hitTestPoint(x: number, y: number): boolean;

        paint();

    }

    /**
     * Texture 纹理贴图类 游戏里显示图像的核心封装类，所有的图像必须转换为纹理才能提交给引擎使用
     * 
     * 演示地址:http://sirius2d.com/demos/d_1/
     */
    class Texture {

        constructor(...paramemters);

        width: number;
        height: number;
        texture;
        quadResource: QuadResource;

        /**
         * 基于canvas创建新的纹理
         */
        newCanvas(canvas: HTMLCanvasElement, xTile: number, yTile: number, xSampling: number, ySampling: number);

        /**
         * 基于图片创建纹理
         */
        newBitmap(image, xTile: number, yTile: number, xSampling: number, ySampling: number);

        /**
         * 基于精灵创建纹理
         */
        newSprite(image, xml, xTile: number, yTile: number, xSampling: number, ySampling: number);

        /**
         * 创建空纹理
         */
        newTexture(width: number, height: number, xTile: number, yTile: number, xSampling: number, ySampling: number);

        /**
         * 转换为帧缓存
         */
        transformTextureBuffer();

        dispose();
        loadXml(xml);
    }

    /**
     * TextureStyle 设置纹理显示采样样式，通常用于设置循环滚动的背景。
     * 
     * 演示地址:http://sirius2d.com/demos/d_28/
     */
    class TextureStyle {

        //TODO:enum?

        static REPEAT: number;
        static MIRRORED_REPEAT: number;
        static CLAMP_TO_EDGE: number;
        static LINEAR: number;
        static NEAREST: number;

        xTile: number;
        yTile: number;
        xSampling: number;
        ySampling: number;
    }

    class QuadFrame {
        name: string;
        x: number;
        y: number;
        width: number;
        height: number;

        /**
        * 帧X偏移坐标
        */
        frameX: number;

        /**
        * 帧Y偏移坐标
        */
        frameY: number;

        /**
        * 帧最大宽度
        */
        frameHeight: number;

        /**
        * 帧最大高度
        */
        frameWidth: number;
    }

    class QuadData {

        name: string;

        //TODO:type?
        quadFrameLst: Array<QuadFrame>;
    }

    class QuadResource {

        //TODO:type?
        quadDataList: Array<QuadData>;
    }

    /**
     * Quad 引擎中最强大的显示对象类，它不能独立存在，只能基于Scene对象池的子对象存在，Scene代表一次渲染，而它可以在一次渲染中完成多次渲染的效果。
     * 
     * 演示地址:http://sirius2d.com/demos/d_12/
     */
    class Quad extends DisplayObject {

        //TODO:type? optional?
        constructor(id: number, texture: Texture, vertices, textureUV, verticesColor, jointList, indexList, verticesGPUList);

        /**
         * 设置启用动画矩阵更新 (当动画宽高一样时，可禁用来提高效率)
         */
        isAnimationMatrix: boolean;

        /**
         * 是否启用顶点着色功能,如果对象没有颜色改变需求关闭此开关可提高性能
         */
        isVertexColour: boolean;

        /**
         * 设置顶点颜色 (0-左上，1-左下，2-右上，3-右下)
         */
        setVertextColour(index: number, r: number, g: number, b: number, a: number);

        setTextureID(value: number);

        getTextureID(): number;

        setTileName(name: string);

        setTileId(id: number);

        getCurrentFrame(): number;

        getTotalFrame(): number;


        /**
         * 设置纹理片段X坐标偏移位置
         */
        setTileXOffset(value: number);

        /**
         * 获取纹理片段X坐标偏移位置
         */
        getTileXOffset(): number;

        /**
         * 设置纹理片段Y坐标偏移位置
         */
        setTileYOffset(value: number);

        /**
         * 获取纹理片段Y坐标偏移位置
         */
        getTileYOffset(): number;

        /**
         * 设置纹理片段宽度偏移位置
         */
        setTileWidthOffset(value: number);

        /**
         * 获取纹理片段宽度偏移位置
         */
        getTileWidthOffset(): number;

        /**
         * 设置纹理片段高度偏移位置
         */
        setTileHeightOffset(value: number);

        /**
         * 获取纹理片段高度偏移位置
         */
        getTileHeightOffset(): number;

        /**
         * 指示动画播放的帧率.
         */
        setAnimationSpeed(frame: number);

        /**
         * 设置顶点位置 (index: 0-左上，1-左下，2-右上，3-右下)
         */
        setIndexVertext(index: number, x: number, y: number);

        /**
         * 获取顶点位置 (index: 0-左上，1-左下，2-右上，3-右下)
         */
        getIndexVertext(index): Point;

        /**
         * 获得顶点数据
         */
        getVertex(index: number): Point;

        loop(value: boolean);

        play();

        stop();

        gotoAndPlay(value: number);

        gotoAndStop(value: number);

        /**
         * 添加帧脚本
         * 
         * TODO: type?
         */
        addFrameScript(value);

        /**
         * 删除帧脚本
         */
        removeFrameScript(value);

        /**
         * 删除所有帧函数
         */
        removeAllFrameScript();

        rollbackAnimation(value: boolean);

        /**
         * 设置帧延迟
         */
        frameDelay(value: number);

        //更新帧信息
        // TODO: boolean?
        updateFrame(flag);

        //刷新绝对中心点
        upAbsPoint();

        /**
         * 获得绝对中心点
         */
        absCentre(): Point;

        /**
         * 设置融合矩阵
         * 
         * TODO: matrix?
         */
        setTransform(value);

        /**
         * 获取融合矩阵
         * 
         * TODO: type?
         */
        getTransform();

        getScene(): Scene;

        setScene(value: Scene);

        setID(value: number);

        queryName(name: string): number;
    }

    /**
     * Sprite  显示容器类，只能用于嵌套MovieClip,Sprite可以互相嵌套。
     * 
     * 演示地址:http://sirius2d.com/demos/d_4/
     */
    class Sprite extends Scene {

        dispose();

        addChild(child);
        removeChild(child);
        paint();

        getY(): number;
        setY(value: number);
        getWidth(): number;
        setWidth(value: number);
        getHeight(): number;
        setHeight(value: number);
        getScaleX(): number;
        setScaleX(value: number);
        getScaleY(): number;
        setScaleY(value: number);

        /**
        * 获取对象的X轴倾斜值
        */
        getSkewX(): number;

        /**
        * 设置对象的X轴倾斜值
        */
        setSkewX(value: number);

        /**
         * 获取对象的Y轴倾斜值
         */
        getSkewY(): number;

        /**
         * 设置对象的Y轴倾斜值
         */
        setSkewY(value: number);

        /**
         * 获取对象的X轴偏移位置
         */
        getPivotX(): number;

        /**
        * 设置对象的X轴偏移位置
        */
        setPivotX(value: number);

        /**
         * 获取对象的Y轴偏移量
         */
        getPivotY(): number;

        /**
         * 设置对象的Y轴偏移量
         */
        setPivotY(value: number);

        getRotation(): number;
        setRotation(value: number);
        getVisible(): boolean;
        setVisible(value: boolean);

        /**
        * 获取对象的刷新状态
        */
        getIsRedraw(): boolean;

        /**
         * 设置对象的刷新状态
         */
        setIsRedraw(value: boolean);

        getParent();
        setParent(value);

        getMouseEnabled(): boolean;

        setMouseEnabled(value: boolean);

        getUserData();

        setUserData(value:Object);
    }

    /**
     * Stage2D 游戏的主场景类，只能存在一个，提供游戏的渲染架构支持。
     * 
     * 演示地址:http://sirius2d.com/demos/d_1/
     */
    class Stage2D extends EventDispatcher {

        static stageWidth: number;
        static stageHeight: number;
        static mouseX: number;
        static mouseY: number;
        static r: number;
        static g: number;
        static b: number;
        static a: number;

        //GL场景正交比例
        //tatic ratio: number;
        static shader: ShaderAbstract;
        //TODO: type?
        static ovMatrix;
        // TODO: type?
        static canvas: HTMLCanvasElement;
        //TODO: type?
        static context: CanvasRenderingContext2D;
        //TODO:type?
        static gl: WebGLObject;
        // TODO:type?
        static rttFrameBuffer: FrameBuffer;
        //TODO:type?
        static rttTexture: Texture;

        constructor(canvasId: string, width: number, height: number);

        fps: number;
        fpsTime: number;

        /**
        * 显示对象列表
        * 
        * TODO: type?
        */
        displayerlist: Array<any>;

        /**
        * 缓存显示列表
        * 
        * TODO: type?
        */
        frameBufferlist: Array<FrameBuffer>;

        addChild(child);

        removeChild(child);

        // TODO: type
        addFrameBuffer(value: FrameBuffer);

        // TODO: new public properties needed?

        /**
         * 读取像素,只有等待回调函数结束时才能获取当前区域正确的像素信息
         */
        readPixels( colorArray:Uint8Array, x: number, y: number, width: number, height: number, readPixelsCallBback:Function);

        zoom(scaleX: number, scaleY: number);

        size(width:number, height:number);

        /**
         * 设置游戏场景自适应
         */
        adjustToBrowser(AdjustType:screenAdjust);

       /**
        * 设置用户自定义适应屏幕方案
        * 
        * TODO: this callback used to custom calculation with event parameter e, it contains some useful properties, add a event type?
        */
        setCustomAdjust(fun: Function);

       /**
        * 跟随窗大小改变口开关
        */
        setAutoAdjustToBrowser(value: boolean);

        /**
         * 获取重绘次数
         */
        drawNumber(): number;

        //TODO:needed?
        //showStats();
    }


    /*
     * 游戏场景自适应类型
     */
    enum screenAdjust {
        Ratio,
        Fill,
        Custom
    }
    

    /**
    * TextField 文字处理类
    * 
    * 演示地址:http://sirius2d.com/demos/d_42/
    */
    class TextField extends MovieClip {

        constructor(w: number, h: number);

        setFontSize(value: number);

        getFontSize(): number;

        setText(text: string, x: number, y: number);

        getText(): string;

        setTypefac(font: string);

        getTypefac(): string;
    }

    // TODO: extend method of Number, function, array needed?

    module Point {

        function distance(pt1: Point, pt2: Point):number;

        /**
         * 确定两个指定点之间的点。参数 f 确定新的内插点相对于参数 pt1 和 pt2 指定的两个端点所处的位置。
         * 参数 f 的值越接近 1.0，则内插点就越接近第一个点（参数 pt1）。
         * 参数 f 的值越接近 0，则内插点就越接近第二个点（参数 pt2）。
         */
        function interpolate(pt1: Point, pt2: Point, f: number): Point;

        /**
        * 将一对极坐标转换为笛卡尔点坐标。
        */
        function polar(len: number, angle: number): Point;
    }

    /**
    * Point 点类
    */
    class Point {

        x: number;
        y: number;

        getLength(): number;

        /**
        * 将另一个点的坐标添加到此点的坐标以创建一个新点。
        */
        add(v: Point): Point;

        /**
        * 创建此 Point 对象的副本。
        */
        clone(): Point;

        /**
        * 确定两个点是否相同。如果两个点具有相同的 x 和 y 值，则它们是相同的点。
        */
        equals(toCompare: Point): boolean;

        /**
         * 将 (0,0) 和当前点之间的线段缩放为设定的长度。
         */
        normalize(thicknedd: number);

        /**
         * 按指定量偏移 Point 对象。
         * dx 的值将添加到 x 的原始值中以创建新的 x 值。
         * dy 的值将添加到 y 的原始值中以创建新的 y 值。
         */
        offset(dx: number, dy: number);

        /**
         * 从此点的坐标中减去另一个点的坐标以创建一个新点。
         */
        subtract(v: Point): Point;
    }

    /**
     * 可使用 ColorTransform 类调整显示对象的颜色值。可以将颜色调整或颜色转换应用于所有四种通道：红色、绿色、蓝色和 Alpha 透明度。
     */
    class ColorTransform {

        /**
         * 与红色通道值相乘的十进制值。
         */
        redMultiplier: number;

        /**
        * 与绿色通道值相乘的十进制值。
        */
        greenMultiplier: number;

        /**
         * 与蓝色通道值相乘的十进制值。
         */
        blueMultiplier: number;

        /**
         * 与 Alpha 透明度通道值相乘的十进制值。
         */
        alphaMultiplier: number;

        /**
         * -255 到 255 之间的数字，加到红色通道值和 redMultiplier 值的乘积上。
         */
        redOffset: number;

        /**
         * -255 到 255 之间的数字，加到绿色通道值和 greenMultiplier 值的乘积上。
         */
        greenOffset: number;

        /**
         * -255 到 255 之间的数字，加到蓝色通道值和 blueMultiplier 值的乘积上。
         */
        blueOffset: number;

        /**
         * -255 到 255 之间的数字，加到 Alpha 透明度通道值和 alphaMultiplier 值的乘积上。
         */
        alphaOffset: number;

        constructor(redMultiplier: number, greenMultiplier: number, blueMultiplier: number, alphaMultiplier: number, redOffset: number, greenOffset: number, blueOffset: number, alphaOffset: number);
    }

    /**
     * FrameFunction 帧函数类
     */
    class FrameFunction {
        frame: number;
        callback: Function;

        constructor(v_frame: number, v_callbackFun: Function);
    }

    /**
     * Group 群组类，用于实现Quad的嵌套操作，批量运动，骨骼运动等等
     * 
     * 演示地址：http://sirius2d.com/demos/d_18/
     */
    class Group extends EventDispatcher {

        clearParentGroup();
        containsGroup(childGroup: Group): boolean;

        addChild(value);

        removeChild(value);

        dispose();

        getX(): number;

        setX(value: number);

        getY(): number;

        setY(value: number);

        getScaleX(): number;

        setScaleX(value: number);

        getScaleY(): number;

        setScaleY(value: number);

        /**
         * 获取组的X轴倾斜值
         */
        getSkewX(): number;

        /**
         * 设置组的X轴倾斜值
         */
        setSkewX(value: number);

        /**
         * 获取组的Y轴倾斜值
         */
        getSkewY(): number;

        /**
         * 设置组的Y轴倾斜值
         */
        setSkewY(value: number);

        getRotation(): number;

        setRotation(value: number);

        setParentGroup(value: Group);
    }

    class Matrix2D {

        //TODO:type?

        /**
         * 矩阵的原始信息
         */
        rawData: Array<any>;

        /**
         * 重置矩阵
         */
        identity();

        /**
         * 3*3优化矩阵融合
         * 
         * TODO: type?
         */
        add3x32(v, v1, v2);

        /**
         * 3*3矩阵融合
         * 
         * TODO: type?
         */
        add3x3(v1, v2);

        /**
         * 1*3优化矩阵融合
         * 
         * TODO: type?
         */
        add1x32(v, v1, v2);

        /**
         * 1*3矩阵融合
         * 
         * TODO: type?
         */
        add1x3(v1, v2);

        /**
         *平移,旋转
         */
        appendRotation(rotation: number, x: number, y: number);

        /**
         * 缩放,倾斜
         */
        appendTranslation(scaleX: number, scaleY: number, skewX: number, skewY: number);

        /**
         * 更新矩阵信息
         */
        upDateMatrix(rotation: number, x: number, y: number, scaleX: number, scaleY: number, skewX: number, skewY: number);
    }

    class Matrix3D {

        //TODO: needed?
        rawData: Array<any>;

        /**
         * 重置矩阵
         */
        identity();

        /**
         * 4*4矩阵融合
         * 
         * TODO: type?
         */
        add4x4(a1, a2);

        /**
         * 1*4矩阵融合
         * 
         * TODO: type?
         */
        add1x4(v1, v2);

        /**
         * 旋转矩阵
         */
        appendRotation(rotation: number, x: number, y: number);

        /**
         * 缩放与倾斜
         */
        appendTranslation(scaleX: number, scaleY: number, skewX: number, skewY: number);

        /**
         * 更新矩阵信息
         */
        upDateMatrix(rotation: number, x: number, y: number, scaleX: number, scaleY: number, skewX: number, skewY: number);
    }

    // TODO: needed?
    class QuadMatrixUtil { }

    /**
     * Rectangle 对象是按其位置（由它左上角的点 (x, y) 确定）以及宽度和高度定义的区域。
     * 创建一个新 Rectangle 对象，其左上角由 x 和 y 参数指定，并具有指定的 width 和 height 参数。
     * 如果调用此函数时不使用任何参数，将创建一个 x、y、width 和 height 属性均设置为 0 的矩形。
     */
    class Rectangle {

        x: number;
        y: number;
        width: number;
        height: number;

        constructor(x, y, width, height);

        clone(): Rectangle;

        /**
         * 确定由此 Rectangle 对象定义的矩形区域内是否包含指定的点。
         */
        contains(x: number, y: number): boolean;

        /**
         * 确定由此 Rectangle 对象定义的矩形区域内是否包含指定的点。
         * 此方法与 Rectangle.contains() 方法类似，只不过它采用 Point 对象作为参数。
         */
        containsPoint(point: Point): boolean;

        /**
         * 确定此 Rectangle 对象内是否包含由 rect 参数指定的 Rectangle 对象。
         * 如果一个 Rectangle 对象完全在另一个 Rectangle 的边界内，我们说第二个 Rectangle 包含第一个 Rectangle。
         */
        containsRect(rect: Rectangle): boolean;

        /**
         * 确定在 toCompare 参数中指定的对象是否等于此 Rectangle 对象。
         * 此方法将某个对象的 x、y、width 和 height 属性与此 Rectangle 对象所对应的相同属性进行比较。
         */
        equals(toCompare: Rectangle): boolean;

        /**
         * 按指定量增加 Rectangle 对象的大小（以像素为单位）。
         * 保持 Rectangle 对象的中心点不变，使用 dx 值横向增加它的大小，使用 dy 值纵向增加它的大小。
         */
        inflate(dx: number, dy: number);

        /**
         * 增加 Rectangle 对象的大小。
         * 此方法与 Rectangle.inflate() 方法类似，只不过它采用 Point 对象作为参数。
         */
        inflatePoint(point: Point);

        /**
         * 如果在 toIntersect 参数中指定的 Rectangle 对象与此 Rectangle 对象相交，
         * 则返回交集区域作为 Rectangle 对象。如果矩形不相交，则此方法返回一个空的 Rectangle 对象，其属性设置为 0。
         */
        intersection(toIntersect: Rectangle): Rectangle;

        /**
         * 确定在 toIntersect 参数中指定的对象是否与此 Rectangle 对象相交。
         * 此方法检查指定的 Rectangle 对象的 x、y、width 和 height 属性，
         * 以查看它是否与此 Rectangle 对象相交。
         */
        intersects(toIntersect: { topLeft: number; topRight: number; bottomLeft: number; bottomRight: number }): boolean;

        /**
         * 确定此 Rectangle 对象是否为空。
         */
        isEmpty(): boolean;

        /**
         * 按指定量调整 Rectangle 对象的位置（由其左上角确定）。
         */
        offset(dx: number, dy: number);

        /**
         * 将 Point 对象用作参数来调整 Rectangle 对象的位置。
         * 此方法与 Rectangle.offset() 方法类似，只不过它采用 Point 对象作为参数。
         */
        offsetPoint(point: Point);

        /**
         * 将 Rectangle 对象的所有属性设置为 0。
         * 如果 Rectangle 对象的宽度或高度小于或等于 0，则该对象为空。
         * 此方法将 x、y、width 和 height 属性设置为 0。
         */
        setEmpty();

        /**
         * 通过填充两个矩形之间的水平和垂直空间，将这两个矩形组合在一起以创建一个新的 Rectangle 对象。
         * 注意：union() 方法忽略高度或宽度值为 0 的矩形，
         * 如：var rect2:Rectangle = new Rectangle(300,300,50,0);
         */
        union(toUnion: Rectangle): Rectangle;
    }

    /**
     * EventDispatcher 事件处理器基类
     */
    class EventDispatcher {

        /**
        * 侦听事件
        */
        addEventListener(type: string, listener: Function, useCapture?: boolean);

        /**
         * 删除事件
         */
        removeEventListener(type: string, listener: Function, useCapture?: boolean);

        /**
         * 清除所有事件
         */
        removeAllEventListeners(type: string);

        /**
         * 设置加载事件
         */
        on(type: string, listener: Function, scope?: Object, once?: boolean, data?: Object, useCapture?: boolean);

        off(type: string, listener: Function, useCapture: boolean);

        /**
         * 发送事件
         * 
         * TODO: needed?
         */
        dispatchEvent(eventObj, target);

        /**
         * 检测是否存在相应的事件
         */
        hasEventListener(type: string): boolean;
    }

    class Event {

        static INITIALIZE: string;
        static ADDED: string;
        static REMOVED: string;
        static ADDED_TO_STAGE: string;
        static REMOVED_FROM_STAGE: string;
        static ENTER_FRAME: string;
        static COMPLETE: string;

        constructor(type, bubbles: boolean, cancelable: boolean);

        type;
        target;
        currentTarget;
        eventPhase: number;
        bubbles: boolean;
        cancelable: boolean;
        timeStamp: number;
        defaultPrevented: boolean;
        propagationStopped: boolean;
        immediatePropagationStopped: boolean;
        removed: boolean;

        preventDefault();
        stopPropagation();
        stopImmediatePropagation();
        remove();
    }

    /**
     * MouseEvent 鼠标事件侦听事件类
     */
    class MouseEvent extends Event {

        static MOUSE_DOWN: string;
        static MOUSE_UP: string;
        static MOUSE_MOVE: string;

        constructor(type, bubbles: boolean, cancelable: boolean, stageX: number, stageY: number);

        stageX: number;
        stageY: number;

    }

    /**
     * 每当 Timer 对象达到由 Timer.delay 属性指定的间隔时，Timer 对象即会调度 TimerEvent 对象。
     */
    class TimerEvent extends Event {
        static TIMER: string;
        static TIMER_COMPLETE: string;

        constructor(type, bubbles: boolean, cancelable: boolean);
    }

    //TODO: needed?

    class AbstractLoader extends EventDispatcher {
        loader: boolean;
        canceled: boolean;
        progress: number;

        getItem();
        load();
        close();
        buildPath(src, data);
    }

    /**
     * 队列加载器 用于加载多个游戏用资源。
     * 
     * 演示地址:http://sirius2d.com/demos/d_1/
     */
    class LoadQueue extends AbstractLoader {

        constructor(useXHR: boolean, basePath?, crossOrigin?);

        removeAll();
        remove(idsOrUrls);
        reset();
        installPlugin(plugin);
        loadFile(file, loadNow: boolean, basePath);

        loadManifest(manifest, loadNow?: boolean, basePath?);

        load();

        getResult(value:string, rawResult?);
        setPaused(value: boolean);
        close();
    }

    class XHRLoader extends AbstractLoader {
        constructor(item, crossOrigin);

        getResult(rawResult: boolean);

        getAllResponseHeaders(): string;

        getResponseHeader(header: string): string;
    }

    // TODO: needed?

    class Message {
        userData;
        type;
    }

    class Broadcast {
        static send(type, message: Message);

    }

    class MessageData {
        execute(type, message: Message);

        /**
         * 检测消息列表是否存在这条消息
         */
        getEvents(type): boolean;

        addEventMessage(type, fun: Function);
        disposeEvent();
        removeEventMessage(type);
    }

    class MessageList {
        static getInstance(): MessageList;

        removeEventObject(e);
        addEventObject(e);
    }

    // TODO: needed?
    class ParticleCPU {

        constructor(v_quad);

        paint();
        show();
        clear();
    }

    /**
     * ParticleEmittersCPU 粒子发射器,可用于发射任何Quad,通常在粒子，幻影，残影时用到。
     * 
     * 演示地址:http://sirius2d.com/demos/d_32/
     */
    class ParticleEmittersCPU {

        run();

        //TODO:type?
        constructor(v_scene: Scene, v_value);

        paint();

        //TODO:type?
        sendParticle(x, y, v_particleStyle: ParticleStyle);
    }

    /**
     * ParticleStyle 粒子样式表，用于处理粒子发射时的各项参数
     * 
     * 演示地址:http://sirius2d.com/demos/d_32/
     */
    class ParticleStyle {
        loop: boolean;

        /**
         * 设置动画片段名称
         */
        tileName: string;

        /**
         * 跳转到第几帧
         */
        gotoFrame: number;

        /*
         *粒子X随机范围
         */
        scopeX: number;

        /**
         * 粒子Y随机范围
         */
        scopeY: number;

        /**
         * 粒子的X轴比例
         */
        scaleX: number;

        /**
         * 粒子的Y轴比例
         */
        scaleY: number;

        /**
         * 粒子X比例缩放值
         */
        scaleXValue: number;

        /**
         * 粒子Y比例缩放值
         */
        scaleYValue: number;

        /**
         * 粒子透明度
         */
        a: number;

        /**
         * 粒子红色通道值
         */
        r: number;

        /**
         * 粒子绿色通道值
         */
        g: number;

        /**
         * 粒子蓝色通道值
         */
        b: number;

        /**
         * 粒子角度递增值
         */
        angleValue: number;

        /**
         * 粒子初始化角度
         */
        rotationValue: number;

        /**
         * 粒子随机角度
         */
        rotationRandom: number;

        /**
         * 粒子运动速度
         */
        speedValue: number;

        /**
         * 粒子初始化透明度
         */
        alphaValue: number;

        /**
         * 粒子递增红色通道值
         */
        addR: number;
        /**
         * 粒子递增绿色通道值
         */
        addG: number;

        /**
         * 粒子递增蓝色通道值
         */
        addB: number;

        /**
         * 粒子递增透明度
         */
        addA: number;
    }

    interface ShaderAbstract { }

    /**
     * ShaderBlur 模糊效果着色器
     */
    class ShaderBlur implements ShaderAbstract {

        /**
         * X轴模糊阈值
         */
        blurX: number;

        /**
         * Y轴模糊阈值
         */
        blurY: number;
    }

    /**
     * ShaderFigure 抽象效果着色器
     */
    class ShaderFigure implements ShaderAbstract {
        time: number;
    }

    /**
     * ShaderFlame 火焰效果着色器
     */
    class ShaderFlame implements ShaderAbstract { }

    /**
     * ShaderFractal 不规则上色效果着色器
     */
    class ShaderFractal implements ShaderAbstract {
        time: number;
    }

    /**
    * ShaderGlass 玻璃效果着色器
    */
    class ShaderGlass implements ShaderAbstract {

        /**
         * 动画时间步长
         */
        timer: number;

        /**
        * 动画运动速度
        */
        speed: number;

        /**
         * 动画运动频率
         */
        frequency: number;

        /**
         *动画运行分辨率
         */
        resolution: number;

        /**
         * 动画噪点阈值
         */
        noisy: number;
    }

    /**
     * ShaderGLSL 默认着色器
     */
    class ShaderGLSL implements ShaderAbstract { }

    /**
     * ShaderGray 灰度效果着色器
     */
    class ShaderGray implements ShaderAbstract { }

    /**
      * ShaderHdr HDR效果着色器
      */
    class ShaderHdr implements ShaderAbstract {

        /**
         * 饱和度阈值
         */
        mLuminance: number;
    }

    /**
     * ShaderHeartbeat 跳动效果着色器
     */
    class ShaderHeartbeat implements ShaderAbstract {
        time: number;
    }

    /**
     * ShaderJoint 纹理拼接着色器
     */
    class ShaderJoint implements ShaderAbstract { }

    /**
     * ShaderLaser 激光效果着色器
     */
    class ShaderLaser implements ShaderAbstract {
        time: number;
    }

    /**
     * ShaderLight 2D灯光效果着色器
     */
    class ShaderLight implements ShaderAbstract {

        lightX: number;
        lightY: number;

        /**
         * 灯光强度
         */
        lightScale: number;
    }

    /**
     * ShaderMosaic 马赛克效果着色器
     */
    class ShaderMosaic implements ShaderAbstract {

        /**
         * 噪点阈值
         */
        noisy: number;
    }

    /**
     * ShaderNet 网状效果着色器
     */
    class ShaderNet implements ShaderAbstract {
        time: number;
    }

    /**
     * ShaderQuick 快速渲染着色器
     */
    class ShaderQuick implements ShaderAbstract { }

    /**
     * ShaderRelief 浮雕效果着色器
     */
    class ShaderRelief implements ShaderAbstract { }

    /**
     * 音效控制器
     */
    class SoundControl {

        originalVolume: number;

        isPlaying: boolean;

        getVolume(): number;

        setVolume(value: number);

        play(loops: number, delay: number);

        pause();

        stop();

        mute();

        unmute();

        toggleMute();

        togglePlay();

        onPlay(callBack: Function);

        onPause(callBack: Function);

        onStop(callBack: Function);

        onCancel(callBack: Function);

        onMute(callBack: Function);

        onUnMute(callBack: Function);

        onComplete(callBack: Function);

        onError(callBack: Function);

        dispose();
    }

    /**
     * 音效元素
     */
    class SoundItem extends SoundControl {

        /**
        * 声音文件
        */
        sound;

        /**
         * 播放声音的循环次数
         */
        loops: number;

        delay: number;

        /**
         * 播放声音的延迟时间的计时器
         */
        //timeout: number;

        lastPosition: number;

        url: string;

        constructor(sound);

        getLength(): number;

        getPosition(): number;

        setPosition(value: number);

        getPositionPercent(): number;

        setPositionPercent(value: number);

        load(path: string): SoundItem;

        clone(): SoundItem;
    }

    /**
     * 音效管理类
     * 
     * //新建一个声音管理器
     * var sm = new ss2d.SoundManager();
     * //在音乐群组中添加一个声音test_sound
     * sm.group("music").add("test_music").load("assets/audio/test_music.mp3");
     * //在音效群组中添加一个声音test_sound
     * sm.group("sound").add("test_sound").load("assets/audio/test_sound.mp3");
     * //播放音乐
     * sm.group("music").item("test_music").play();
     * //播放音效
     * sm.group("sound").item("test_sound").play();
     *
     */
    class SoundManager extends SoundItem {

        constructor(id: string);

        /**
         * 添加一个音效文件
         * 
         * TODO: AudioElement?
         */
        add(id: string, value): SoundItem;

        remove(id: string): SoundManager;

        /**
          * 根据ID获取当前声音管理器中的声音元素
          */
        item(id: string): SoundItem;

        /**
         * 检测声音管理器中是否存在指定ID的声音元素
         */
        match(id: string): boolean;

        /**
         * 当前声音管理器中的声音文件个数
         */
        length(): number;
    }

    class Capabilities {
        static pixelRatio: number;
        static viewport: { width: number; height: number };
        static screen: { width: number; height: number };
        static iPhone: boolean;
        static iPhone4: boolean;
        static iPad: boolean;
        static android: boolean;
        static IOS: boolean;
        static mobile: boolean;
    }

    enum KEY {
        'MOUSE1',
        'MOUSE2',
        'MWHEEL_UP',
        'MWHEEL_DOWN',
        'BACKSPACE',
        'TAB',
        'ENTER',
        'PAUSE',
        'CAPS',
        'ESC',
        'SPACE',
        'PAGE_UP',
        'PAGE_DOWN',
        'END',
        'HOME',
        'LEFT_ARROW',
        'UP_ARROW',
        'RIGHT_ARROW',
        'DOWN_ARROW',
        'INSERT',
        'DELETE',
        '_0',
        '_1',
        '_2',
        '_3',
        '_4',
        '_5',
        '_6',
        '_7',
        '_8',
        '_9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        'NUMPAD_0',
        'NUMPAD_1',
        'NUMPAD_2',
        'NUMPAD_3',
        'NUMPAD_4',
        'NUMPAD_5',
        'NUMPAD_6',
        'NUMPAD_7',
        'NUMPAD_8',
        'NUMPAD_9',
        'MULTIPLY',
        'ADD',
        'SUBSTRACT',
        'DECIMAL',
        'DIVIDE',
        'F1',
        'F2',
        'F3',
        'F4',
        'F5',
        'F6',
        'F7',
        'F8',
        'F9',
        'F10',
        'F11',
        'F12',
        'SHIFT',
        'CTRL',
        'ALT',
        'PLUS',
        'COMMA',
        'MINUS',
        'PERIOD',
    }

    //TODO: needed?
    class Input {

    }

    class ColorUtil {
        static hexToRGB(hex: number): { r: number; g: number; b: number };
        static RGBToHex(rgb: { r: number; g: number; b: number }): number;
    }

    class HitTestUtil {

        /**
         * 点与矩形,矩形的坐标点在图像的中心位置时
         */
        static hitTestPoint(point: Point, rectangle: Rectangle): boolean;

        /**
         * 矩形与矩形的碰撞
         */
        hitTestRectangle(rectA: Rectangle, rectB: Rectangle): boolean;

        /**
         * 矩形与矩形的碰撞
         * 
         * TODO:type?
         */
        hitTestRoundness(point: Point, roundness: { x: number; y: number; radius: number }): boolean;

        /**
         * 面积检测算法
         */
        hitTrianglePoint(p1: Point, p2: Point, p3: Point): boolean;

        /**
         * 顶点碰撞检测
         * p1,p2,p3 为范围点
         * p4是碰撞点。
         */
        hitPoint(p1: Point, p2: Point, p3: Point, p4: Point): boolean;
    }
}

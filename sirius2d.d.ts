
declare function Class(...params)



declare module ss2d {
    /**
     * 根据标签id或者名称获取对象
     * @param selector
     * @returns {HTMLElement}
     */
    function $(selector: string): HTMLElement;

    /**
     * 新建对象
     * @param name
     * @returns {HTMLElement}
     */
    function $new(name: string): HTMLElement;

    /**
     * 输出日志
     */
    function log(obj: any);

    /**
     * 拷贝
     * @param object
     * @returns {*}
     */
    function copy(object: Object);

    /**
     * 合并
     * @param original
     * @param extended
     * @returns {*}
     */
    function merge(original, extended);

    /**
     * 获取对象偏移
     * @param elem
     * @returns {{left: (Number|number), top: (Number|number)}}
     */
    function getElementOffset(elem: HTMLElement): { left: number; top: number };

    /**
     * 排序
     * @param obj 排序集合
     * @returns {Array}
     */
    function ksort(obj: Object): Array<Object>;

    /**
     * 代理
     * @param method
     * @param scope 范围
     * @returns {Function}
     */
    function proxy(method: Function, scope: Object): Function;

    /**
     * 弧度转角度
     * @param angle 弧度
     * @returns {Number}
     */
    function radianToDegree(angle: number): number;

    /**
     * 角度转弧度
     * @param angle 角度
     * @returns {Number}
     */
    function degreeToRadian(angle: number): number;

    /**
     * 面积检测
     * @param	p1 范围点
     * @param	p2 范围点
     * @param	p3 范围点
     * @return
     * 
     * TODO: point?
     */
    function hitTrianglePoint(p1: Point, p2: Point, p3: Point): number;

    /**
     * 顶点碰撞检测
     * @param p1 范围点
     * @param p2 范围点
     * @param p3 范围点
     * @param p4 碰撞点
     * @returns {boolean}
     */
    function hitPoint(p1: Point, p2: Point, p3: Point, p4: Point): boolean;

    /**
     * 正交视口模型矩阵
     * @param matrix  正交的一维数组
     * @param left 左边界
     * @param right 右边界
     * @param bottom 底边界
     * @param top 上边界
     * @param near 近截面
     * @param far 远截面
     * 
     * TODO: matrix type? number correct?
     */
    function orthographicViewportMatrix(matrix, left: number, right: number, bottom: number, top: number, near: number, far: number);

    /**
     * 计算图片最接近的乘方图片
     * @param 需要转换的值
     * @return
     */
    function getScope(num: number): number;

    /**
     * 检测图片是否为2的次方
     * @param num 值
     * @return
     */
    function isPower_2(num: number): boolean;

    /**
     * 检测运行环境是否支持全屏
     */
    function supportsFullScreen(): boolean;

    /**
     * 浏览器是否全屏状态
     * @returns {*}
     */
    function isFullScreen(): boolean;

    /**
     * 设置浏览器全屏
     */
    function requestFullScreen();

    /**
     * 退出全屏
     * @returns {*}
     */
    function cancelFullScreen();



    // data folder

    /**
     * 数据列表类
     * @class
     * @param {String} id 当前数据列表的id
     * @param {Boolean} allowOverride 是否允许覆盖数据
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


    // display folder

    /**
     * Blend 实现图像特效，粒子混色的重要手段，通过混色可以实现意想不到的神器效果。
     * <br /> 演示地址:http://sirius2d.com/demos/d_22
     * @class
     */
    class Blend {
        /** @lends ss2d.Blend */
        /**
         * 无混色
         */
        static BLEND_NONE: Blend;

        /**
         * 叠加
         */
        static BLEND_ADD: Blend;

        /**
         * 普通透明度
         */
        static BLEND_NORMAL: Blend;

        /**
         * 复合
         */
        static BLEND_MULTIPLY: Blend;

        /**
         * 遮挡
         */
        static BLEND_SCREEN: Blend;

        /**
         * 擦除
         */
        static BLEND_ERASE: Blend;

        /**
         * 排除
         */
        static BLEND_EXCLUSION: Blend;

        /**
         * 灯光
         */
        static BLEND_LIGHT: Blend;

        /**
         * 融化
         */
        static BLEND_FUSE: Blend;

        /**
         * 遮罩
         */
        static BLEND_MASK: Blend;

        /**
         * 透明度叠加
         */
        static BLEND_ADD_ALPHA: Blend;
    }


    /**
    * DisplayObject 最底层的显示对象基类。
    * @class
    */
    class DisplayObject extends EventDispatcher {
        x: number;
        y: number;
        /**
         * 使用GPU实现位移功能
         * <br /> implement displacement with GPU
         * TODO: needed?
         */
        //GPUX: number;

        /**
         * 使用GPU实现位移功能
         * <br /> implement displacement with GPU
         * TODO: needed?
         */
        //GPUY: number;

        /**
         * 是否开启GPU加速 true:开启   false:不开启
         * <br />implement displacement with GPU or CPU
         * true: GPU    false:CPU
         */
        GPU: number;

        /**
         * 获取对象的颜色值
         * <br />get RGB of the object
         * @param value
         */
        getColor(): { r: number; g: number; b: number };

        /**
        * 设置对象的颜色值
        * <br /> set RGB of the object
        * @returns {*}
        */
        setColor(value: any);


        // TODO: so many set/get, can be changed with Object.defineProperty?

        /**
         * 获取对象的红色通道值
         * <br />get red channel of the object
         * @returns {number}
         */
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
        * <br />get skew X of the object
        * @returns {number}
        */
        getSkewX(): number;
        /**
        * 设置对象的X轴倾斜值
        * <br />set skew X of the object
        * @param value
        */
        setSkewX(value: number);
        /**
         * 获取对象的Y轴倾斜值
         * <br />get skew Y of the object
         * @returns {number}
         */
        getSkewY(): number;
        /**
         * 设置对象的Y轴倾斜值
         * <br />set skew Y of the object
         * @param value
         */
        setSkewY(value: number);
        /**
         * 获取对象的X轴偏移位置
         * <br />get pivot X of the object
         * @returns {number}
         */
        getPivotX(): number;
        /**
        * 设置对象的X轴偏移位置
        * <br />set pivot X of the object
        * @param value
        */
        setPivotX(value: number);
        /**
         * 获取对象的Y轴偏移量
         * <br />get pivot Y of the object
         * @returns {number}
         */
        getPivotY(): number;
        /**
         * 设置对象的Y轴偏移量
         * <br />set pivot Y of the object
         * @param value
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
        * <br />get a boolean value that indicates whether the object is redrawn
        * @returns {boolean}
        */
        getIsRedraw(): boolean;
        /**
         * 设置对象的刷新状态
         * <br />set a boolean value that indicates whether the object is redrawn
         * @param value
         */
        setIsRedraw(value: boolean);
        getParent();
        setParent(value);
        /**
        * 获取鼠标监测状态
        * <br />get a boolean value that indicates whether the mouse event is listened
        * @returns {boolean}
        */
        getMouseEnabled(): boolean;
        /**
            * 设置鼠标监测状态
            * <br />set a boolean value that indicates whether the mouse event is listened
            * @param value
            */
        setMouseEnabled(value: boolean);
        /**
         * 获取用户数据
         * <br />get the user data
         * @returns {null}
         */
        getUserData();
        /**
         * 设置用户数据
         * <br />set the user data
         * @param value
         */
        setUserData();
        /**
         * 获取对象中心对齐状态
         * <br />get a boolean value that indicates whether the object is aligned center
         * @returns {boolean}
         */
        getCenter(): boolean;
        /**
         * 设置对象中心对齐状态
         * <br />set a boolean value that indicates whether the object is aligned center
         * @param value
         */
        setCenter(value: boolean);
        /**
         * 获取对象强制中心对齐状态 (无视动画偏移量的影响)
         * <br />get a boolean value that indicates whether the object is aligned center (ignore the offsets of animations)
         * @returns {boolean}
         */
        getForceCenter(): boolean;
        /**
         * 设置对象强制中心对齐状态 (无视动画偏移量的影响)
         * <br />set a boolean value that indicates whether the object is aligned center (ignore the offsets of animations)
         * @param value
         */
        setForceCenter(value: boolean);

        /**
         * 检测对象与坐标点的碰撞
         * <br />collision detection between the object and a point
         * @param x
         * @param y
         * @returns {boolean}
         */
        hitTestPoint(x: number, y: number): boolean;

        /**
         * 检测对象与对象的碰撞
         * <br />collision detection between 2 objects
         * @param child
         * @returns {boolean}
         * TODO: child is a DisplayObject?
         */
        hitTestObject(child): boolean;

        /**
         * 检测对象与范围的碰撞
         * <br />collision detection between the object and an area
         * @param x
         * @param y
         * @param radius
         * @returns {boolean}
         */
        hitTestRoundness(x: number, y: number, radius: number): boolean;

    }

    /**
     * 帧缓存类 用于后处理的必须类，使用它可以把当前屏幕的内容拷贝到一张特定的纹理上，用于做后期的屏幕特效。
     * <br />演示地址：http://sirius2d.com/demos/d_37/
     * @class
     */
    class FrameBuffer {
        /**
         * 设置显示缓存
         * <br />display the frame buffer
         * @param {boolean}
         * 
         * TODO: value type?
         */
        setDisplay(value): boolean;

        /**
         * 获取帧缓存
         * <br />get frame buffer
         * @param {boolean}
         */
        getFrameBuff(): boolean;

        /**
         * 是否清理画面
         * <br />set a boolean value that indicates whether the scene is cleaned up
         * @param value
         */
        isClear(value: boolean);

        /**
         * 添加到显示列表
         * <br />add object to the scene list
         * @param {ss2d.Scene} child 显示对象
         */
        addChild(child: Scene);

        /**
         * 从显示列表删除显示对象
         * <br />remove object to the scene list
         * @param {ss2d.Scene} child 显示对象
         */
        removeChild(child: Scene);

    }




    /**
     * MovieClip 影片剪辑类,不建议多用,一般用于显示测试,后处理,单个大背景,如果显示数量很多建议用Scene
     * <br />movie clip class It's used for test or post-processing with a single image  Use scene class for more elements
     * <br /> 演示地址:http://sirius2d.com/demos/d_10/
     * @class
     */
    class MovieClip extends Scene {

        constructor(textureData: Texture);

        /**
         * 检测对象与对象的碰撞
         * <br />collision detection between 2 objects
         * @param child
         * @returns {boolean}
         */
        hitTestObject(child): boolean;

        /**
        * 检测对象与范围的碰撞
        * <br />collision detection between the object and an area
        * @param x
        * @param y
        * @param radius
        * @returns {boolean}
        */
        hitTestRoundness(x: number, y: number, radius: number): boolean;

        // TODO: make a interface to share same method with Quad

        /**
         * 设置纹理ID
         * <br />set texture ID
         * @param value
         */
        setTextureID(value: number);

        /**
         * 获取纹理ID
         * <br />get texture ID
         * @return {Number}
         */
        getTextureID(): number;

        /**
         * 设置纹理片段名称
         * <br />set tile name
         * @param name {String}
         */
        setTileName(name: string);

        /**
         * 设置纹理片段ID
         * <br />set tile ID
         * @param id {number}
         */
        setTileId(id: number);

        /**
         * 获取动画当前播放帧
         * <br />get the current frame of the animation
         * @returns {number}
         */
        getCurrentFrame(): number;

        /**
         * 获取动画片段总长度
         * <br />get the length of the animation
         * @returns {number}
         */
        getTotalFrame(): number;


        /**
         * 设置纹理片段X坐标偏移位置
         * <br />set tile offset X
         * @param value {number}
         */
        setTileXOffset(value: number);

        /**
         * 获取纹理片段X坐标偏移位置
         * <br />get tile offset X
         * @param value {number}
         */
        getTileXOffset(): number;

        /**
         * 设置纹理片段Y坐标偏移位置
         * <br />set tile offset Y
         * @param value {number}
         */
        setTileYOffset(value: number);

        /**
         * 获取纹理片段Y坐标偏移位置
         * <br />get tile offset Y
         * @param value {number}
         */
        getTileYOffset(): number;

        /**
         * 设置纹理片段宽度偏移位置
         * <br />set tile width offset
         * @param value {number}
         */
        setTileWidthOffset(value: number);

        /**
         * 获取纹理片段宽度偏移位置
         * <br />get tile width offset
         * @param value {number}
         */
        getTileWidthOffset(): number;

        /**
         * 设置纹理片段高度偏移位置
         * <br />set tile height offset
         * @param value {number}
         */
        setTileHeightOffset(value: number);

        /**
         * 获取纹理片段高度偏移位置
         * <br />get tile height offset
         * @param value {number}
         */
        getTileHeightOffset(): number;

        /**
         * 指示动画播放的帧率.
         * <br />set FPS of the animation
         * @param	frame 动画播放的帧率.
         */
        setAnimationSpeed(frame: number);

        /**
         * 设置顶点位置 (index: 0-左上，1-左下，2-右上，3-右下)
         * <br />set vertexes pos (index: 0-top left, 1-bottom left, 2-top right, 3-bottom right)
         * @param index
         * @param x
         * @param y
         */
        setIndexVertext(index: number, x: number, y: number);

        /**
         * 获取顶点位置 (index: 0-左上，1-左下，2-右上，3-右下)
         * <br />get vertexes pos (index: 0-top left, 1-bottom left, 2-top right, 3-bottom right)
         * @param index
         */
        getIndexVertext(index): Point;

        /**
         * 获得顶点数据
         * <br />index to the right vertex
         * @param index
         */
        getVertex(index: number): Point;

        /**
         * 设置是否循环播放
         * <br />loop animation or not
         * @param boolean value
         */
        loop(value: boolean);

        /**
         * 播放动画
         * <br />play animation
         */
        play();

        /**
         * 停止播放动画
         * <br />stop animation
         */
        stop();


        /**
         * 跳转到指定的帧并且播放动画
         * <br />skip to a frame and play the animation
         * @param value
         */
        gotoAndPlay();

        /**
         * 跳转到指定的帧并停止动画
         * <br />skip to a frame and stop the animation
         * @param value
         */
        gotoAndStop(value: number);

        /**
         * 添加帧脚本
         * <br />add frame script
         * 
         * TODO: type?
         */
        addFrameScript(value);

        /**
         * 删除帧脚本
         * <br />delete frame script
         */
        removeFrameScript(value);

        /**
         * 删除所有帧函数
         * <br />delete all frame scripts
         */
        removeAllFrameScript();

        /**
         * 设置是否倒播动画
         * <br />set a boolean value that indicates whether the animation is rolled back
         * @param boolean value
         */
        rollbackAnimation(value: boolean);

        /**
         * 获取对象中心对齐状态
         * get a boolean value that indicates whether the object is aligned center
         * @returns {*|boolean}
         */
        getCenter(): boolean;

        /**
         * 设置对象中心对齐状态
         * make the object align center
         * @param value
         */
        setCenter(value: boolean);

        /**
         * 销毁
         * remove the quad
         */
        dispose();


        /**
         * 获得绝对中心点
         * <br />get the absolute center point
         */
        absCentre(): Point;

        /**
         * 设置融合矩阵
         * <br />set transform matrix
         * @param value
         * TODO: matrix?
         */
        setTransform(value);

        /**
         * 获取融合矩阵
         * <br />get transform matrix
         * @returns {*}
         * 
         * TODO: type?
         */
        getTransform();

        /**
         * 重绘
         * paint
         */
        paint();

        /**
         * 获取对象颜色值
         * get the color of the object
         * TODO: type?
         */
        getColor();
        /**
         * 设置对象颜色值
         * set the color of the object
         * @param value
         */
        setColor(value);

        //TODO: seems like quad not contains set/setColor function?


        //TODO: make an interface to share method with DisplayObject
        /**
  * 获取对象的红色通道值
  * <br />get red channel of the object
  * @returns {number}
  */
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
        * <br />get skew X of the object
        * @returns {number}
        */
        getSkewX(): number;
        /**
        * 设置对象的X轴倾斜值
        * <br />set skew X of the object
        * @param value
        */
        setSkewX(value: number);
        /**
         * 获取对象的Y轴倾斜值
         * <br />get skew Y of the object
         * @returns {number}
         */
        getSkewY(): number;
        /**
         * 设置对象的Y轴倾斜值
         * <br />set skew Y of the object
         * @param value
         */
        setSkewY(value: number);
        /**
         * 获取对象的X轴偏移位置
         * <br />get pivot X of the object
         * @returns {number}
         */
        getPivotX(): number;
        /**
        * 设置对象的X轴偏移位置
        * <br />set pivot X of the object
        * @param value
        */
        setPivotX(value: number);
        /**
         * 获取对象的Y轴偏移量
         * <br />get pivot Y of the object
         * @returns {number}
         */
        getPivotY(): number;
        /**
         * 设置对象的Y轴偏移量
         * <br />set pivot Y of the object
         * @param value
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
        * <br />get a boolean value that indicates whether the object is redrawn
        * @returns {boolean}
        */
        getIsRedraw(): boolean;
        /**
         * 设置对象的刷新状态
         * <br />set a boolean value that indicates whether the object is redrawn
         * @param value
         */
        setIsRedraw(value: boolean);
        getParent();
        setParent(value);
        /**
        * 获取鼠标监测状态
        * <br />get a boolean value that indicates whether the mouse event is listened
        * @returns {boolean}
        */
        getMouseEnabled(): boolean;
        /**
            * 设置鼠标监测状态
            * <br />set a boolean value that indicates whether the mouse event is listened
            * @param value
            */
        setMouseEnabled(value: boolean);
        /**
         * 获取用户数据
         * <br />get the user data
         * @returns {null}
         */
        getUserData();
        /**
         * 设置用户数据
         * <br />set the user data
         * @param value
         */
        setUserData();

        /**
         * 获取对象强制中心对齐状态 (无视动画偏移量的影响)
         * <br />get a boolean value that indicates whether the object is aligned center (ignore the offsets of animations)
         * @returns {boolean}
         */
        getForceCenter(): boolean;
        /**
         * 设置对象强制中心对齐状态 (无视动画偏移量的影响)
         * <br />set a boolean value that indicates whether the object is aligned center (ignore the offsets of animations)
         * @param value
         */
        setForceCenter(value: boolean);

    }


    /**
     * Scene 场景管理类，开发高效率游戏的必要类，它不是一个显示对象，而是一个批处理的对象池，使用它你必须事先明确需要多少个Quad，当以后开发时再从Scene里去取,Quad是整个引擎里功能最多的显示对象。
     * <br />演示地址:http://sirius2d.com/demos/d_12/
     * @class
     */
    class Scene extends EventDispatcher {

        constructor(textureData: Texture);

        /**
         * 申请quad
         * <br />register quads from quad list
         * @returns {*}
         */
        applyQuad(cache: boolean): Quad;

        /**
         * 隐藏quad
         * <br />hide quad
         * @param quad
         */
        hideQuad(child: Quad);

        /**
         * 显示quad
         * <br />display quad
         * @param quad
         */
        showQuad(child: Quad, parameter);

        /**
         * 设置纹理对象
         * <br />set texture
         * @param value
         */
        setTexture(value: Texture);

        /**
         * 获取纹理对象
         * <br />get texture
         * @returns {null}
         */
        getTexture(): Texture;

        /**
         * 获取对象鼠标监测状态
         * <br />get a boolean value that indicates whether the mouse event is listened
         * @returns {boolean}
         */
        getMouseEnabled(): boolean;

        /**
         * 设置对象鼠标监测状态
         * <br />get a boolean value that indicates whether the mouse event is listened
         * @param boolean value
         */
        setMouseEnabled(value: boolean);

        /**
         * 设置着色器
         * <br />set shader
         * @param value
         */
        setShader(value: ShaderAbstract);

        /**
         * 获取着色器
         * <br />get shader
         * @returns {null}
         */
        getShader(): ShaderAbstract;

        /**
         * 设置混色参数
         * <br />set blend mode
         * @param src
         * @param dst
         */
        blend(value: Blend);

        /**
         * 检测鼠标碰撞
         * <br />collision detection between mouse and point
         * @param x
         * @param y
         * @returns {boolean}
         */
        hitTestPoint(x: number, y: number): boolean;

        /**
         * 重绘
         * paint
         */
        paint();

    }

    /**
     * Texture 纹理贴图类 游戏里显示图像的核心封装类，所有的图像必须转换为纹理才能提交给引擎使用
     *  <br /> 演示地址:http://sirius2d.com/demos/d_1/
     * @class
     */
    class Texture {

        constructor(...paramemters);

        width: number;
        height: number;
        texture;
        quadResource: QuadResource;

        /**
         * 基于canvas创建新的纹理
         * <br />create new texture based on canvases
         * @param canvas
         * @param xTile
         * @param yTile
         * @param xSampling
         * @param ySampling
         * TODO:type?
         */
        newCanvas(canvas: HTMLCanvasElement, xTile: number, yTile: number, xSampling: number, ySampling: number);

        /**
         * 基于图片创建纹理
         * <br />create texture based on images
         * @param image
         * @param xTile
         * @param yTile
         * @param xSampling
         * @param ySampling
         */
        newBitmap(image, xTile: number, yTile: number, xSampling: number, ySampling: number);

        /**
         * 基于精灵创建纹理
         * <br />create texture based on sprites
         * @param image
         * @param xml
         * @param xTile
         * @param yTile
         * @param xSampling
         * @param ySampling
         */
        newSprite(image, xml, xTile: number, yTile: number, xSampling: number, ySampling: number);

        /**
         * 创建空纹理
         * <br />create a null texture
         * @param width
         * @param height
         * @param xTile
         * @param yTile
         * @param xSampling
         * @param ySampling
         */
        newTexture(width: number, height: number, xTile: number, yTile: number, xSampling: number, ySampling: number);

        /**
         * 转换为帧缓存
         * <br />transform texture into buffer
         */
        transformTextureBuffer();
        dispose();
        loadXml(xml);
    }

    /**
     * TextureStyle 设置纹理显示采样样式，通常用于设置循环滚动的背景。
     * <br /> 演示地址:http://sirius2d.com/demos/d_28/
     * @class
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
        * frame offset X
        */
        frameX: number;
        /**
        * 帧Y偏移坐标
        * frame offset Y
        */
        frameY: number;
        /**
        * 帧最大宽度
        * frame maximum width
        */
        frameHeight: number;
        /**
        * 帧最大高度
        * frame maximum height
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
     * <br /> 演示地址:http://sirius2d.com/demos/d_12/
     * @class
     */
    class Quad extends DisplayObject {

        //TODO:type? optional?
        constructor(id: number, texture: Texture, vertices, textureUV, verticesColor, jointList, indexList, verticesGPUList);

        /**
         * 设置启用动画矩阵更新 (当动画宽高一样时，可禁用来提高效率)
         * <br />set a boolean value that indicates whether the animation matrix updates
         * disable this function when the width and height of a animation are the same to optimize efficiency
         * @param boolean value
         */
        isAnimationMatrix: boolean;

        /**
         * 是否启用顶点着色功能,如果对象没有颜色改变需求关闭此开关可提高性能
         * @param boolean value
         */
        isVertexColour: boolean;

        /**
         * 设置顶点颜色 (0-左上，1-左下，2-右上，3-右下)
         * <br />set RGBA of vertexes (0-top left, 1-bottom left, 2-top right, 3-bottom right)
         * @param index 顶点的索引ID
         * @param r 红色通道
         * @param g 绿色通道
         * @param b 蓝色通道
         * @param a 透明通道
         */
        setVertextColour(index: number, r: number, g: number, b: number, a: number);

        /**
         * 设置纹理ID
         * <br />set texture ID
         * @param value
         */
        setTextureID(value: number);

        /**
         * 获取纹理ID
         * <br />get texture ID
         * @return {Number}
         */
        getTextureID(): number;

        /**
         * 设置纹理片段名称
         * <br />set tile name
         * @param name {String}
         */
        setTileName(name: string);

        /**
         * 设置纹理片段ID
         * <br />set tile ID
         * @param id {number}
         */
        setTileId(id: number);

        /**
         * 获取动画当前播放帧
         * <br />get the current frame of the animation
         * @returns {number}
         */
        getCurrentFrame(): number;

        /**
         * 获取动画片段总长度
         * <br />get the length of the animation
         * @returns {number}
         */
        getTotalFrame(): number;


        /**
         * 设置纹理片段X坐标偏移位置
         * <br />set tile offset X
         * @param value {number}
         */
        setTileXOffset(value: number);

        /**
         * 获取纹理片段X坐标偏移位置
         * <br />get tile offset X
         * @param value {number}
         */
        getTileXOffset(): number;

        /**
         * 设置纹理片段Y坐标偏移位置
         * <br />set tile offset Y
         * @param value {number}
         */
        setTileYOffset(value: number);

        /**
         * 获取纹理片段Y坐标偏移位置
         * <br />get tile offset Y
         * @param value {number}
         */
        getTileYOffset(): number;

        /**
         * 设置纹理片段宽度偏移位置
         * <br />set tile width offset
         * @param value {number}
         */
        setTileWidthOffset(value: number);

        /**
         * 获取纹理片段宽度偏移位置
         * <br />get tile width offset
         * @param value {number}
         */
        getTileWidthOffset(): number;

        /**
         * 设置纹理片段高度偏移位置
         * <br />set tile height offset
         * @param value {number}
         */
        setTileHeightOffset(value: number);

        /**
         * 获取纹理片段高度偏移位置
         * <br />get tile height offset
         * @param value {number}
         */
        getTileHeightOffset(): number;

        /**
         * 指示动画播放的帧率.
         * <br />set FPS of the animation
         * @param	frame 动画播放的帧率.
         */
        setAnimationSpeed(frame: number);

        /**
         * 设置顶点位置 (index: 0-左上，1-左下，2-右上，3-右下)
         * <br />set vertexes pos (index: 0-top left, 1-bottom left, 2-top right, 3-bottom right)
         * @param index
         * @param x
         * @param y
         */
        setIndexVertext(index: number, x: number, y: number);

        /**
         * 获取顶点位置 (index: 0-左上，1-左下，2-右上，3-右下)
         * <br />get vertexes pos (index: 0-top left, 1-bottom left, 2-top right, 3-bottom right)
         * @param index
         */
        getIndexVertext(index): Point;

        /**
         * 获得顶点数据
         * <br />index to the right vertex
         * @param index
         */
        getVertex(index: number): Point;

        /**
         * 设置是否循环播放
         * <br />loop animation or not
         * @param boolean value
         */
        loop(value: boolean);

        /**
         * 播放动画
         * <br />play animation
         */
        play();

        /**
         * 停止播放动画
         * <br />stop animation
         */
        stop();


        /**
         * 跳转到指定的帧并且播放动画
         * <br />skip to a frame and play the animation
         * @param value
         */
        gotoAndPlay();

        /**
         * 跳转到指定的帧并停止动画
         * <br />skip to a frame and stop the animation
         * @param value
         */
        gotoAndStop(value: number);

        /**
         * 添加帧脚本
         * <br />add frame script
         * 
         * TODO: type?
         */
        addFrameScript(value);

        /**
         * 删除帧脚本
         * <br />delete frame script
         */
        removeFrameScript(value);

        /**
         * 删除所有帧函数
         * <br />delete all frame scripts
         */
        removeAllFrameScript();

        /**
         * 设置是否倒播动画
         * <br />set a boolean value that indicates whether the animation is rolled back
         * @param boolean value
         */
        rollbackAnimation(value: boolean);

        /**
         * 设置帧延迟
         * <br />set frame delay
         * @param value
         */
        frameDelay(value: number);

        //更新帧信息
        // TODO: boolean?
        updateFrame(flag);

        //刷新绝对中心点
        upAbsPoint();

        /**
         * 获得绝对中心点
         * <br />get the absolute center point
         */
        absCentre(): Point;

        /**
         * 设置融合矩阵
         * <br />set transform matrix
         * @param value
         * TODO: matrix?
         */
        setTransform(value);

        /**
         * 获取融合矩阵
         * <br />get transform matrix
         * @returns {*}
         * 
         * TODO: type?
         */
        getTransform();

        /**
         * 获得对应的场景
         * <br />get scene
         * @returns {null}
         */
        getScene(): Scene;

        /**
         * 设置对应的场景
         * <br />set scene
         * @param value
         */
        setScene(value: Scene);

        /**
         * 设置网格ID
         * <br />set mesh ID
         * @param value
         */
        setID(value: number);

        /**
         * 设置影片播放的片段
         * play the clip of animation with the right name
         * @param name
         * @returns {number}
         */
        queryName(name: string): number;

    }

    /**
     * Sprite  显示容器类，只能用于嵌套MovieClip,Sprite可以互相嵌套。
     * <br />演示地址:http://sirius2d.com/demos/d_4/
     * @class
     */
    class Sprite extends Scene {
        /**
         * 销毁所有元素
         * dispose
         */
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
        * <br />get skew X of the object
        * @returns {number}
        */
        getSkewX(): number;
        /**
        * 设置对象的X轴倾斜值
        * <br />set skew X of the object
        * @param value
        */
        setSkewX(value: number);
        /**
         * 获取对象的Y轴倾斜值
         * <br />get skew Y of the object
         * @returns {number}
         */
        getSkewY(): number;
        /**
         * 设置对象的Y轴倾斜值
         * <br />set skew Y of the object
         * @param value
         */
        setSkewY(value: number);
        /**
         * 获取对象的X轴偏移位置
         * <br />get pivot X of the object
         * @returns {number}
         */
        getPivotX(): number;
        /**
        * 设置对象的X轴偏移位置
        * <br />set pivot X of the object
        * @param value
        */
        setPivotX(value: number);
        /**
         * 获取对象的Y轴偏移量
         * <br />get pivot Y of the object
         * @returns {number}
         */
        getPivotY(): number;
        /**
         * 设置对象的Y轴偏移量
         * <br />set pivot Y of the object
         * @param value
         */
        setPivotY(value: number);
        getRotation(): number;
        setRotation(value: number);
        getVisible(): boolean;
        setVisible(value: boolean);
        /**
        * 获取对象的刷新状态
        * <br />get a boolean value that indicates whether the object is redrawn
        * @returns {boolean}
        */
        getIsRedraw(): boolean;
        /**
         * 设置对象的刷新状态
         * <br />set a boolean value that indicates whether the object is redrawn
         * @param value
         */
        setIsRedraw(value: boolean);
        getParent();
        setParent(value);
        /**
        * 获取鼠标监测状态
        * <br />get a boolean value that indicates whether the mouse event is listened
        * @returns {boolean}
        */
        getMouseEnabled(): boolean;
        /**
            * 设置鼠标监测状态
            * <br />set a boolean value that indicates whether the mouse event is listened
            * @param value
            */
        setMouseEnabled(value: boolean);
        /**
         * 获取用户数据
         * <br />get the user data
         * @returns {null}
         */
        getUserData();
        /**
         * 设置用户数据
         * <br />set the user data
         * @param value
         */
        setUserData();
    }

    /**
     * Stage2D 游戏的主场景类，只能存在一个，提供游戏的渲染架构支持。
     * <br /> 演示地址:http://sirius2d.com/demos/d_1/
     * @class
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
        * list of display objects
        * @type {Array}
        * TODO: type?
        */
        displayerlist: Array<any>;

        /**
        * 缓存显示列表
        * list of frame buffer
        * TODO: type?
        */
        frameBufferlist: Array<FrameBuffer>;

        /**
         * 添加新的显示对象
         * add display object
         * @param child 子显示对象
         */
        addChild(child);

        /**
         * 移除显示对象
         * remove display object
         * @param child
         */
        removeChild(child);

        //size(width, height);
        /**
         * 添加帧缓存
         * add frame buffer
         * @param value
         * TODO:type?
         */
        addFrameBuffer(value: FrameBuffer);

        /**
         * 重绘画布
         * redraw the canvas
         */
        onDrawFrame();

    }

    /**
    * TextField 文字处理类，目前为测试版本。
    * <br />演示地址:http://sirius2d.com/demos/d_42/
    * @class
    */
    class TextField extends MovieClip {
        constructor(w: number, h: number);

        /**
         * 设置字体大小
         * @param value
         */
        setFontSize(value: number);

        /**
         * 获得字体大小
         * @return {Number}
         */
        getFontSize(): number;
        /**
        *设置文本内容
        *@param text {String}
        *@param x {number}
        *@param y {number}
        */
        setText(text: string, x: number, y: number);

        /**
         * 获得文字内容
         * @return {*}
         */
        getText(): string;

        /**
        *设置文本字体
        *@param font {String}
        */
        setTypefac(font: string);

        /**
         * 获得文本字体
         * @return {String}
         */
        getTypefac(): string;


    }

    // geom folder

    // TODO: extend method of Number, function, array needed?

    module Point {

        /**
        * 返回 pt1 和 pt2 之间的距离。
        * @param pt1 — 第一个点。
        * @param pt2 — 第二个点。
        * @returns — 第一个点和第二个点之间的距离。
        */
        function distance(pt1: Point, pt2: Point);

        /**
         * 确定两个指定点之间的点。参数 f 确定新的内插点相对于参数 pt1 和 pt2 指定的两个端点所处的位置。
         * 参数 f 的值越接近 1.0，则内插点就越接近第一个点（参数 pt1）。
         * 参数 f 的值越接近 0，则内插点就越接近第二个点（参数 pt2）。
         * @param pt1 — 第一个点。
         * @param pt2 — 第二个点。
         * @param f — 两个点之间的内插级别。表示新点将位于 pt1 和 pt2 连成的直线上的什么位置。如果 f=1，则返回 pt1；如果 f=0，则返回 pt2。
         * @returns {ss2d.Point} — 新的内插点。
         */
        function interpolate(pt1: Point, pt2: Point, f: number): Point;

        /**
        * 将一对极坐标转换为笛卡尔点坐标。
        * @param len — 极坐标对的长度。
        * @param angle — 极坐标对的角度（以弧度表示）。
        * @returns {ss2d.Point} — 笛卡尔点。
        */
        function polar(len: number, angle: number): Point;
    }

    /**
    * Point 点类
    * @class
    */
    class Point {
        x: number;
        y: number;

        getLength(): number;

        /**
        * 将另一个点的坐标添加到此点的坐标以创建一个新点。
        * @param v — 要添加的点。
        * @returns {ss2d.Point} — 新点。
        */
        add(v: Point): Point;

        /**
        * 创建此 Point 对象的副本。
        * @returns {ss2d.Point} — 新的 Point 对象。
        */
        clone(): Point;

        /**
        * 确定两个点是否相同。如果两个点具有相同的 x 和 y 值，则它们是相同的点。
        * @param toCompare — 要比较的点。
        * @returns {Boolean} — 如果该对象与此 Point 对象相同，则为 true 值，如果不相同，则为 false。
        */
        equals(toCompare: Point): boolean;

        /**
         * 将 (0,0) 和当前点之间的线段缩放为设定的长度。
         * @param thickness — 缩放值。例如，如果当前点为 (0,5) 并且您将它规范化为 1，则返回的点位于 (0,1) 处。
         */
        normalize(thicknedd: number);

        /**
         * 按指定量偏移 Point 对象。
         * dx 的值将添加到 x 的原始值中以创建新的 x 值。
         * dy 的值将添加到 y 的原始值中以创建新的 y 值。
         * @param dx — 水平坐标 x 的偏移量。
         * @param dy — 垂直坐标 y 的偏移量。
         */
        offset(dx: number, dy: number);

        /**
         * 从此点的坐标中减去另一个点的坐标以创建一个新点。
         * @param v — 要减去的点。
         * @returns {ss2d.Point} — 新点。
         */
        subtract(v: Point): Point;



    }

    /**
     * 可使用 ColorTransform 类调整显示对象的颜色值。可以将颜色调整或颜色转换应用于所有四种通道：红色、绿色、蓝色和 Alpha 透明度。
     * @param redMultiplier 与红色通道值相乘的十进制值。
     * @param greenMultiplier 与绿色通道值相乘的十进制值。
     * @param blueMultiplier 与蓝色通道值相乘的十进制值。
     * @param alphaMultiplier 与 Alpha 透明度通道值相乘的十进制值。
     * @param redOffset -255 到 255 之间的数字，加到红色通道值和 redMultiplier 值的乘积上。
     * @param greenOffset -255 到 255 之间的数字，加到绿色通道值和 greenMultiplier 值的乘积上。
     * @param blueOffset -255 到 255 之间的数字，加到蓝色通道值和 blueMultiplier 值的乘积上。
     * @param alphaOffset -255 到 255 之间的数字，加到 Alpha 透明度通道值和 alphaMultiplier 值的乘积上。
     * @class
     */
    class ColorTransform {
        /**
         * 与红色通道值相乘的十进制值。
         * @type {number}
         */
        redMultiplier: number;
        /**
                     * 与绿色通道值相乘的十进制值。
                     * @type {number}
                     */
        greenMultiplier: number;

        /**
         * 与蓝色通道值相乘的十进制值。
         * @type {number}
         */
        blueMultiplier: number;

        /**
         * 与 Alpha 透明度通道值相乘的十进制值。
         * @type {number}
         */
        alphaMultiplier: number;

        /**
         * -255 到 255 之间的数字，加到红色通道值和 redMultiplier 值的乘积上。
         * @type {number}
         */
        redOffset: number;

        /**
         * -255 到 255 之间的数字，加到绿色通道值和 greenMultiplier 值的乘积上。
         * @type {number}
         */
        greenOffset: number;

        /**
         * -255 到 255 之间的数字，加到蓝色通道值和 blueMultiplier 值的乘积上。
         * @type {number}
         */
        blueOffset: number;

        /**
         * -255 到 255 之间的数字，加到 Alpha 透明度通道值和 alphaMultiplier 值的乘积上。
         * @type {number}
         */
        alphaOffset: number;

        constructor(redMultiplier: number, greenMultiplier: number, blueMultiplier: number, alphaMultiplier: number, redOffset: number, greenOffset: number, blueOffset: number, alphaOffset: number);

    }

    /**
 * FrameFunction 帧函数类
 * @class
 */
    class FrameFunction {
        frame: number;
        callback: Function;

        constructor(v_frame: number, v_callbackFun: Function);
    }

    /**
     * Group 群组类，用于实现Quad的嵌套操作，批量运动，骨骼运动等等
     * <br />演示地址：http://sirius2d.com/demos/d_18/
     * @class
     */
    class Group extends EventDispatcher {
        clearParentGroup();
        containsGroup(childGroup: Group): boolean;
        /**
         * 添加显示对象
         * @param value
         */
        addChild(value);
        /**
         * 删除显示对象
         * @param value
         */
        removeChild(value);
        dispose();

        /**
             * 获取组的X轴位置
             * @returns {number}
             */
        getX(): number;

        /**
         * 设置组的X轴位置
         * @param value
         */
        setX(value: number);

        /**
         * 获取组的Y轴位置
         * @returns {number}
         */
        getY(): number;

        /**
         * 设置组的Y轴位置
         * @param value
         */
        setY(value: number);

        /**
         * 获取组的X轴比例
         * @returns {number}
         */
        getScaleX(): number;

        /**
         * 设置组的X轴比例
         * @param value
         */
        setScaleX(value: number);

        /**
         * 获取组的Y轴比例
         * @returns {number}
         */
        getScaleY(): number;

        /**
         * 设置组的Y轴比例
         * @param value
         */
        setScaleY(value: number);

        /**
         * 获取组的X轴倾斜值
         * @returns {number}
         */
        getSkewX(): number;

        /**
         * 设置组的X轴倾斜值
         * @param value
         */
        setSkewX(value: number);

        /**
         * 获取组的Y轴倾斜值
         * @returns {number}
         */
        getSkewY(): number;

        /**
         * 设置组的Y轴倾斜值
         * @param value
         */
        setSkewY(value: number);

        /**
         * 获取组的角度
         * @returns {number}
         */
        getRotation(): number;

        /**
         * 设置组的角度
         * @param value
         */
        setRotation(value: number);


        /**
         * 添加组
         * @param value
         */
        setParentGroup(value: Group);
    }

    class Matrix2D {

        //TODO:type?
        /**
         * 矩阵的原始信息
         * @type {Array}
         */
        rawData: Array<any>;

        /**
     * 重置矩阵
     */
        identity();

        /**
         * 3*3优化矩阵融合
         * @param v1
         * @param v2
         * @returns {Array}
         * TODO: type?
         */
        add3x32(v, v1, v2);

        /**
 * 3*3矩阵融合
 * @param v1
 * @param v2
 * @returns {Array}
 */
        add3x3(v1, v2);

        /**
 * 1*3优化矩阵融合
 * @param v1
 * @param v2
 * @returns {Array}
 */
        add1x32(v, v1, v2);

        /**
 * 1*3矩阵融合
 * @param v1
 * @param v2
 * @returns {Array}
 */
        add1x3(v1, v2);

        /**
 *平移,旋转
 * @param rotation
 * @param x
 * @param y
 */
        appendRotation(rotation: number, x: number, y: number);

        /**
 * 缩放,倾斜
 * @param scaleX
 * @param scaleY
 * @param biasX
 * @param biasY
 */
        appendTranslation(scaleX: number, scaleY: number, skewX: number, skewY: number);

        /**
         * 更新矩阵信息
         * @param rotation
         * @param x
         * @param y
         * @param scaleX
         * @param scaleY
         * @param biasX
         * @param biasY
         */
        upDateMatrix(rotation: number, x: number, y: number, scaleX: number, scaleY: number, skewX: number, skewY: number);
    }

    class Matrix3D {
        rawData: Array<any>;
        /**
 * 重置矩阵
 */
        identity();


        /**
         * 4*4矩阵融合
         * @param v1
         * @param v2
         * @returns {Array}
         */
        add4x4(a1, a2);

        /**
         * 1*4矩阵融合
         * @param v1
         * @param v2
         * @returns {Array}
         */
        add1x4(v1, v2);

        /**
         * 旋转矩阵
         * @param rotation 旋转角度
         * @param x X轴移动量
         * @param y Y轴移动量
         */
        appendRotation(rotation: number, x: number, y: number);

        /**
         * 缩放与倾斜
         * @param scaleX X轴缩放值
         * @param scaleY Y轴缩放值
         * @param biasX X轴倾斜值
         * @param biasY Y轴倾斜值
         */
        appendTranslation(scaleX: number, scaleY: number, skewX: number, skewY: number);

        /**
         * 更新矩阵信息
         * @param rotation 旋转角度
         * @param x X轴移动值
         * @param y Y轴移动值
         * @param scaleX X轴缩放值
         * @param scaleY Y轴缩放值
         * @param biasX X轴倾斜值
         * @param biasY Y轴倾斜值
         */
        upDateMatrix(rotation: number, x: number, y: number, scaleX: number, scaleY: number, skewX: number, skewY: number);


    }

    // TODO: needed?
    class QuadMatrixUtil { }

    /**
     * Rectangle 对象是按其位置（由它左上角的点 (x, y) 确定）以及宽度和高度定义的区域。
     * 创建一个新 Rectangle 对象，其左上角由 x 和 y 参数指定，并具有指定的 width 和 height 参数。
     * 如果调用此函数时不使用任何参数，将创建一个 x、y、width 和 height 属性均设置为 0 的矩形。
     * @param x — 矩形左上角的 x 坐标。
     * @param y — 矩形左上角的 y 坐标。
     * @param width — 矩形的宽度（以像素为单位）。
     * @param height — 矩形的高度（以像素为单位）。
     * @class
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
         * @param x — 点的 x 坐标（水平位置）。
         * @param y — 点的 y 坐标（垂直位置）。
         * @returns {Boolean} — 如果 Rectangle 对象包含指定的点，则值为 true；否则为 false。
         */
        contains(x: number, y: number): boolean;

        /**
         * 确定由此 Rectangle 对象定义的矩形区域内是否包含指定的点。
         * 此方法与 Rectangle.contains() 方法类似，只不过它采用 Point 对象作为参数。
         * @param point — 用其 x 和 y 坐标表示的点。
         * @returns {Boolean} — 如果 Rectangle 对象包含指定的点，则值为 true；否则为 false。
         */
        containsPoint(point: Point): boolean;

        /**
         * 确定此 Rectangle 对象内是否包含由 rect 参数指定的 Rectangle 对象。
         * 如果一个 Rectangle 对象完全在另一个 Rectangle 的边界内，我们说第二个 Rectangle 包含第一个 Rectangle。
         * @param rect — 所检查的 Rectangle 对象。
         * @returns {Boolean} — 如果此 Rectangle 对象包含您指定的 Rectangle 对象，则返回 true 值，否则返回 false。
         */
        containsRect(rect: Rectangle): boolean;

        /**
         * 确定在 toCompare 参数中指定的对象是否等于此 Rectangle 对象。
         * 此方法将某个对象的 x、y、width 和 height 属性与此 Rectangle 对象所对应的相同属性进行比较。
         * @param toCompare — 要与此 Rectangle 对象进行比较的矩形。
         * @returns {Boolean}
         */
        equals(toCompare: Rectangle): boolean;

        /**
         * 按指定量增加 Rectangle 对象的大小（以像素为单位）。
         * 保持 Rectangle 对象的中心点不变，使用 dx 值横向增加它的大小，使用 dy 值纵向增加它的大小。
         * @param dx — Rectangle 对象横向增加的值。
         * @param dy — Rectangle 纵向增加的值。
         */
        inflate(dx: number, dy: number);

        /**
         * 增加 Rectangle 对象的大小。
         * 此方法与 Rectangle.inflate() 方法类似，只不过它采用 Point 对象作为参数。
         * @param point — 此 Point 对象的 x 属性用于增加 Rectangle 对象的水平尺寸。
         * y 属性用于增加 Rectangle 对象的垂直尺寸。
         */
        inflatePoint(point: Point);

        /**
         * 如果在 toIntersect 参数中指定的 Rectangle 对象与此 Rectangle 对象相交，
         * 则返回交集区域作为 Rectangle 对象。如果矩形不相交，则此方法返回一个空的 Rectangle 对象，其属性设置为 0。
         * @param toIntersect — 要对照比较以查看其是否与此 Rectangle 对象相交的 Rectangle 对象。
         * @returns — 等于交集区域的 Rectangle 对象。如果该矩形不相交，则此方法返回一个空的 Rectangle 对象；
         * 即，其 x、y、width 和 height 属性均设置为 0 的矩形。
         */
        intersection(toIntersect: Rectangle): Rectangle;

        /**
         * 确定在 toIntersect 参数中指定的对象是否与此 Rectangle 对象相交。
         * 此方法检查指定的 Rectangle 对象的 x、y、width 和 height 属性，
         * 以查看它是否与此 Rectangle 对象相交。
         * @param toIntersect — 要与此 Rectangle 对象比较的 Rectangle 对象。
         * @returns {Boolean} — 如果指定的对象与此 Rectangle 对象相交，则返回 true 值，否则返回 false。
         */
        intersects(toIntersect: { topLeft: number; topRight: number; bottomLeft: number; bottomRight: number }): boolean;

        /**
         * 确定此 Rectangle 对象是否为空。
         * @returns {Boolean} — 如果 Rectangle 对象的宽度或高度小于等于 0，则返回 true 值，否则返回 false。
         */
        isEmpty(): boolean;


        /**
         * 按指定量调整 Rectangle 对象的位置（由其左上角确定）。
         * @param dx — 将 Rectangle 对象的 x 值移动此数量。
         * @param dy — 将 Rectangle 对象的 y 值移动此数量。
         */
        offset(dx: number, dy: number);

        /**
         * 将 Point 对象用作参数来调整 Rectangle 对象的位置。
         * 此方法与 Rectangle.offset() 方法类似，只不过它采用 Point 对象作为参数。
         * @param point — 要用于偏移此 Rectangle 对象的 Point 对象。
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
         * @param toUnion — 要添加到此 Rectangle 对象的 Rectangle 对象。
         * @returns {ss2d.Rectangle} — 充当两个矩形的联合的新 Rectangle 对象。
         */
        union(toUnion: Rectangle): Rectangle;
    }


    // event folder

    /**
     * EventDispatcher 事件处理器基类
     * @class
     * @param {String} type
     * @param {Boolean} bubbles
     * @param {Boolean} cancelable
     */
    class EventDispatcher {

        /**
        * 侦听事件
        * @param type 事件类型
        * @param listener 事件执行函数
        * @param useCapture 事件执行循序
        * @return {*}
        */
        addEventListener(type: string, listener: Function, useCapture: boolean);

        /**
         * 删除事件
         * @param type 事件类型
         * @param listener 事件执行函数
         * @param useCapture 事件执行循序
         */
        removeEventListener(type: string, listener: Function, useCapture: boolean);

        /**
         * 清除所有事件
         * @param type 事件类型
         */
        removeAllEventListeners(type: string);

        /**
         * 设置加载事件
         * @param type
         * @param listener
         * @param scope
         * @param once
         * @param data
         * @param useCapture
         * @return {*}
         */
        on(type: string, listener: Function, scope: Object, once: boolean, data: Object, useCapture: boolean);

        off(type: string, listener: Function, useCapture: boolean);

        /**
         * 发送事件
         * @param eventObj 事件消息体
         * @param target 事件目标
         * @return {*}
         * 
         * TODO: needed?
         */
        dispatchEvent(eventObj, target);

        /**
         * 检测是否存在相应的事件
         * @param type 事件类型
         * @return {Boolean}
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
     * @class
     * @param {String} type
     * @param {Boolean} bubbles
     * @param {Boolean} cancelable
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
     * @class
     * @param {String} type
     * @param {Boolean} bubbles
     * @param {Boolean} cancelable
     */
    class TimerEvent extends Event {
        static TIMER: string;
        static TIMER_COMPLETE: string;

        constructor(type, bubbles: boolean, cancelable: boolean);
    }

    //shader folder

    interface ShaderAbstract { }
}

declare class ss2d {

    /**
     * 是否开启调试信息
     */
    static debug: boolean;

    /**
     * 引擎版本号
     */
    static version: string;

    /**
     * XML默认读取开关,打开以下划线作为分隔符,关闭则忽略
     */
    static xmlUnderline: boolean;

    /**
     *
     * TODO: window? sure?
     */
    static global: Window;

    /**
     * 不缓存数据的参数
     */
    static nocache: string;

    /**
     * 是否开启鼠标移动监测
     */
    static useMouseMove: boolean;

    /**
     * 创建默认画布
     */
    static canvas: HTMLElement;


    /**
     * canvas context
     */
    static context: CanvasRenderingContext2D;

    // TODO: need?
    //static sound

}

declare function Class(...params);


declare module ss2d {
    /**
     * 根据标签id或者名称获取对象
     */
    function $(selector: string): HTMLElement;

    /**
     * 新建对象
     */
    function $new(name: string): HTMLElement;

    /**
     * 输出日志
     */
    function log(obj: any);

    /**
     * 拷贝
     */
    function copy(object: Object);

    /**
     * 合并
     */
    function merge(original, extended);

    /**
     * 获取对象偏移
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
     */
    function proxy(method: Function, scope: Object): Function;

    /**
     * 弧度转角度
     * @param angle 弧度
     */
    function radianToDegree(angle: number): number;

    /**
     * 角度转弧度
     * @param angle 角度
     */
    function degreeToRadian(angle: number): number;

    /**
     * 面积检测
     * @param	p1 范围点
     * @param	p2 范围点
     * @param	p3 范围点
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
     */
    function getScope(num: number): number;

    /**
     * 检测图片是否为2的次方
     * @param num 值
     */
    function isPower_2(num: number): boolean;

    /**
     * 检测运行环境是否支持全屏
     */
    function supportsFullScreen(): boolean;

    /**
     * 浏览器是否全屏状态
     */
    function isFullScreen(): boolean;

    /**
     * 设置浏览器全屏
     */
    function requestFullScreen();

    /**
     * 退出全屏
     */
    function cancelFullScreen();



    /*****************  data folder *********************/


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




    /*****************  display folder *********************/




    /**
     * Blend 实现图像特效，粒子混色的重要手段，通过混色可以实现意想不到的神奇效果。
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
         * implement displacement with GPU
         * TODO: needed?
         */
        //GPUX: number;

        /**
         * 使用GPU实现位移功能
         * implement displacement with GPU
         * TODO: needed?
         */
        //GPUY: number;

        /**
         * 是否开启GPU加速 true:开启   false:不开启
         * implement displacement with GPU or CPU
         * true: GPU    false:CPU
         */
        GPU: boolean;

        /**
         * 获取对象的颜色值
         * get RGB of the object
         */
        getColor(): { r: number; g: number; b: number };

        /**
        * 设置对象的颜色值
        * set RGB of the object
        */
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
        * get skew X of the object
        */
        getSkewX(): number;

        /**
        * 设置对象的X轴倾斜值
        * set skew X of the object
        */
        setSkewX(value: number);

        /**
         * 获取对象的Y轴倾斜值
         * get skew Y of the object
         */
        getSkewY(): number;

        /**
         * 设置对象的Y轴倾斜值
         * set skew Y of the object
         */
        setSkewY(value: number);

        /**
         * 获取对象的X轴偏移位置
         * get pivot X of the object
         */
        getPivotX(): number;

        /**
        * 设置对象的X轴偏移位置
        * set pivot X of the object
        */
        setPivotX(value: number);

        /**
         * 获取对象的Y轴偏移量
         * get pivot Y of the object
         */
        getPivotY(): number;

        /**
         * 设置对象的Y轴偏移量
         * set pivot Y of the object
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
        * get a boolean value that indicates whether the object is redrawn
        */
        getIsRedraw(): boolean;

        /**
         * 设置对象的刷新状态
         * set a boolean value that indicates whether the object is redrawn
         */
        setIsRedraw(value: boolean);

        getParent();
        setParent(value);

        /**
        * 获取鼠标监测状态
        * get a boolean value that indicates whether the mouse event is listened
        */
        getMouseEnabled(): boolean;

        /**
        * 设置鼠标监测状态
        * set a boolean value that indicates whether the mouse event is listened
        */
        setMouseEnabled(value: boolean);

        /**
         * 获取用户数据
         * get the user data
         */
        getUserData();

        /**
         * 设置用户数据
         * set the user data
         */
        setUserData();

        /**
         * 获取对象中心对齐状态
         * get a boolean value that indicates whether the object is aligned center
         */
        getCenter(): boolean;

        /**
         * 设置对象中心对齐状态
         * set a boolean value that indicates whether the object is aligned center
         */
        setCenter(value: boolean);

        /**
         * 获取对象强制中心对齐状态 (无视动画偏移量的影响)
         * get a boolean value that indicates whether the object is aligned center (ignore the offsets of animations)
         */
        getForceCenter(): boolean;

        /**
         * 设置对象强制中心对齐状态 (无视动画偏移量的影响)
         * set a boolean value that indicates whether the object is aligned center (ignore the offsets of animations)
         */
        setForceCenter(value: boolean);

        /**
         * 检测对象与坐标点的碰撞
         * collision detection between the object and a point
         */
        hitTestPoint(x: number, y: number): boolean;

        /**
         * 检测对象与对象的碰撞
         * collision detection between 2 objects
         * TODO: child is a DisplayObject?
         */
        hitTestObject(child): boolean;

        /**
         * 检测对象与范围的碰撞
         * collision detection between the object and an area
         */
        hitTestRoundness(x: number, y: number, radius: number): boolean;
    }

    /**
     * 帧缓存类 用于后处理的必须类，使用它可以把当前屏幕的内容拷贝到一张特定的纹理上，用于做后期的屏幕特效。
     * 演示地址：http://sirius2d.com/demos/d_37/
     */
    class FrameBuffer {

        /**
         * 设置显示缓存
         * display the frame buffer
         * 
         * TODO: value type?
         */
        setDisplay(value:Scene);

        /**
         * 获取帧缓存
         * get frame buffer
         * TODO: type?
         */
        getFrameBuff(): Scene;

        /**
         * 是否清理画面
         * set a boolean value that indicates whether the scene is cleaned up
         */
        isClear(value: boolean);

        /**
         * 添加到显示列表
         * add object to the scene list
         */
        addChild(child: Scene);

        /**
         * 从显示列表删除显示对象
         * remove object to the scene list
         */
        removeChild(child: Scene);
    }

    /**
     * MovieClip 影片剪辑类,不建议多用,一般用于显示测试,后处理,单个大背景,如果显示数量很多建议用Scene
     * movie clip class It's used for test or post-processing with a single image  Use scene class for more elements
     * 演示地址:http://sirius2d.com/demos/d_10/
     */
    class MovieClip extends Scene {

        constructor(textureData: Texture);

        /**
         * 检测对象与对象的碰撞
         * collision detection between 2 objects
         */
        hitTestObject(child): boolean;

        /**
        * 检测对象与范围的碰撞
        * collision detection between the object and an area
        */
        hitTestRoundness(x: number, y: number, radius: number): boolean;

        // TODO: make a interface to share same method with Quad?

        /**
         * 设置纹理ID
         * set texture ID
         */
        setTextureID(value: number);

        /**
         * 获取纹理ID
         * get texture ID
         */
        getTextureID(): number;

        /**
         * 设置纹理片段名称
         * set tile name
         */
        setTileName(name: string);

        /**
         * 设置纹理片段ID
         * set tile ID
         */
        setTileId(id: number);

        /**
         * 获取动画当前播放帧
         * get the current frame of the animation
         */
        getCurrentFrame(): number;

        /**
         * 获取动画片段总长度
         * get the length of the animation
         */
        getTotalFrame(): number;

        /**
         * 设置纹理片段X坐标偏移位置
         * set tile offset X
         */
        setTileXOffset(value: number);

        /**
         * 获取纹理片段X坐标偏移位置
         * get tile offset X
         */
        getTileXOffset(): number;

        /**
         * 设置纹理片段Y坐标偏移位置
         * set tile offset Y
         */
        setTileYOffset(value: number);

        /**
         * 获取纹理片段Y坐标偏移位置
         * get tile offset Y
         */
        getTileYOffset(): number;

        /**
         * 设置纹理片段宽度偏移位置
         * set tile width offset
         */
        setTileWidthOffset(value: number);

        /**
         * 获取纹理片段宽度偏移位置
         * get tile width offset
         */
        getTileWidthOffset(): number;

        /**
         * 设置纹理片段高度偏移位置
         * set tile height offset
         */
        setTileHeightOffset(value: number);

        /**
         * 获取纹理片段高度偏移位置
         * get tile height offset
         */
        getTileHeightOffset(): number;

        /**
         * 指示动画播放的帧率.
         * set FPS of the animation
         */
        setAnimationSpeed(frame: number);

        /**
         * 设置顶点位置 (index: 0-左上，1-左下，2-右上，3-右下)
         * set vertexes pos (index: 0-top left, 1-bottom left, 2-top right, 3-bottom right)
         */
        setIndexVertext(index: number, x: number, y: number);

        /**
         * 获取顶点位置 (index: 0-左上，1-左下，2-右上，3-右下)
         * get vertexes pos (index: 0-top left, 1-bottom left, 2-top right, 3-bottom right)
         */
        getIndexVertext(index): Point;

        /**
         * 获得顶点数据
         * index to the right vertex
         */
        getVertex(index: number): Point;

        /**
         * 设置是否循环播放
         *loop animation or not
         */
        loop(value: boolean);

        /**
         * 播放动画
         * play animation
         */
        play();

        /**
         * 停止播放动画
         * stop animation
         */
        stop();

        /**
         * 跳转到指定的帧并且播放动画
         * skip to a frame and play the animation
         */
        gotoAndPlay();

        /**
         * 跳转到指定的帧并停止动画
         * skip to a frame and stop the animation
         */
        gotoAndStop(value: number);

        /**
         * 添加帧脚本
         * add frame script
         * 
         * TODO: type?
         */
        addFrameScript(value);

        /**
         * 删除帧脚本
         * delete frame script
         */
        removeFrameScript(value);

        /**
         * 删除所有帧函数
         * delete all frame scripts
         */
        removeAllFrameScript();

        /**
         * 设置是否倒播动画
         * set a boolean value that indicates whether the animation is rolled back
         */
        rollbackAnimation(value: boolean);

        /**
         * 获取对象中心对齐状态
         * get a boolean value that indicates whether the object is aligned center
         */
        getCenter(): boolean;

        /**
         * 设置对象中心对齐状态
         * make the object align center
         */
        setCenter(value: boolean);

        /**
         * 销毁
         * remove the quad
         */
        dispose();


        /**
         * 获得绝对中心点
         * get the absolute center point
         */
        absCentre(): Point;

        /**
         * 设置融合矩阵
         * set transform matrix
         * TODO: matrix?
         */
        setTransform(value);

        /**
         * 获取融合矩阵
         * get transform matrix
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
        * get skew X of the object
        */
        getSkewX(): number;

        /**
        * 设置对象的X轴倾斜值
        *set skew X of the object
        */
        setSkewX(value: number);

        /**
         * 获取对象的Y轴倾斜值
         * get skew Y of the object
         */
        getSkewY(): number;

        /**
         * 设置对象的Y轴倾斜值
         * set skew Y of the object
         */
        setSkewY(value: number);

        /**
         * 获取对象的X轴偏移位置
         * get pivot X of the object
         */
        getPivotX(): number;

        /**
        * 设置对象的X轴偏移位置
        * set pivot X of the object
        */
        setPivotX(value: number);

        /**
         * 获取对象的Y轴偏移量
         * get pivot Y of the object
         */
        getPivotY(): number;

        /**
         * 设置对象的Y轴偏移量
         * set pivot Y of the object
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
        * get a boolean value that indicates whether the object is redrawn
        */
        getIsRedraw(): boolean;

        /**
         * 设置对象的刷新状态
         * set a boolean value that indicates whether the object is redrawn
         */
        setIsRedraw(value: boolean);

        getParent();
        setParent(value);

        /**
        * 获取鼠标监测状态
        * get a boolean value that indicates whether the mouse event is listened
        */
        getMouseEnabled(): boolean;

        /**
        * 设置鼠标监测状态
        * set a boolean value that indicates whether the mouse event is listened
        */
        setMouseEnabled(value: boolean);

        /**
         * 获取用户数据
         * get the user data
         */
        getUserData();

        /**
         * 设置用户数据
         * set the user data
         */
        setUserData();

        /**
         * 获取对象强制中心对齐状态 (无视动画偏移量的影响)
         * get a boolean value that indicates whether the object is aligned center (ignore the offsets of animations)
         */
        getForceCenter(): boolean;

        /**
         * 设置对象强制中心对齐状态 (无视动画偏移量的影响)
         * set a boolean value that indicates whether the object is aligned center (ignore the offsets of animations)
         */
        setForceCenter(value: boolean);

    }

    /**
     * Scene 场景管理类，开发高效率游戏的必要类，它不是一个显示对象，而是一个批处理的对象池，使用它你必须事先明确需要多少个Quad，当以后开发时再从Scene里去取,Quad是整个引擎里功能最多的显示对象。
     * 演示地址:http://sirius2d.com/demos/d_12/
     * @class
     */
    class Scene extends EventDispatcher {

        constructor(textureData: Texture);

        /**
         * 申请quad
         * register quads from quad list
         */
        applyQuad(cache: boolean): Quad;

        /**
         * 隐藏quad
         * hide quad
         */
        hideQuad(child: Quad);

        /**
         * 显示quad
         * display quad
         */
        showQuad(child: Quad, parameter);

        /**
         * 设置纹理对象
         * set texture
         */
        setTexture(value: Texture);

        /**
         * 获取纹理对象
         * get texture
         */
        getTexture(): Texture;

        /**
         * 获取对象鼠标监测状态
         * get a boolean value that indicates whether the mouse event is listened
         */
        getMouseEnabled(): boolean;

        /**
         * 设置对象鼠标监测状态
         * get a boolean value that indicates whether the mouse event is listened
         */
        setMouseEnabled(value: boolean);

        /**
         * 设置着色器
         * set shader
         */
        setShader(value: ShaderAbstract);

        /**
         * 获取着色器
         * get shader
         */
        getShader(): ShaderAbstract;

        /**
         * 设置混色参数
         * set blend mode
         */
        blend(value: Blend);

        /**
         * 检测鼠标碰撞
         * collision detection between mouse and point
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
         * create new texture based on canvases
         * TODO:type?
         */
        newCanvas(canvas: HTMLCanvasElement, xTile: number, yTile: number, xSampling: number, ySampling: number);

        /**
         * 基于图片创建纹理
         * create texture based on images
         */
        newBitmap(image, xTile: number, yTile: number, xSampling: number, ySampling: number);

        /**
         * 基于精灵创建纹理
         * create texture based on sprites
         */
        newSprite(image, xml, xTile: number, yTile: number, xSampling: number, ySampling: number);

        /**
         * 创建空纹理
         * create a null texture
         */
        newTexture(width: number, height: number, xTile: number, yTile: number, xSampling: number, ySampling: number);

        /**
         * 转换为帧缓存
         * transform texture into buffer
         */
        transformTextureBuffer();

        dispose();
        loadXml(xml);
    }

    /**
     * TextureStyle 设置纹理显示采样样式，通常用于设置循环滚动的背景。
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
     * 演示地址:http://sirius2d.com/demos/d_12/
     * @class
     */
    class Quad extends DisplayObject {

        //TODO:type? optional?
        constructor(id: number, texture: Texture, vertices, textureUV, verticesColor, jointList, indexList, verticesGPUList);

        /**
         * 设置启用动画矩阵更新 (当动画宽高一样时，可禁用来提高效率)
         * set a boolean value that indicates whether the animation matrix updates
         * disable this function when the width and height of a animation are the same to optimize efficiency
         */
        isAnimationMatrix: boolean;

        /**
         * 是否启用顶点着色功能,如果对象没有颜色改变需求关闭此开关可提高性能
         * @param boolean value
         */
        isVertexColour: boolean;

        /**
         * 设置顶点颜色 (0-左上，1-左下，2-右上，3-右下)
         * set RGBA of vertexes (0-top left, 1-bottom left, 2-top right, 3-bottom right)
         */
        setVertextColour(index: number, r: number, g: number, b: number, a: number);

        /**
         * 设置纹理ID
         * set texture ID
         */
        setTextureID(value: number);

        /**
         * 获取纹理ID
         * get texture ID
         */
        getTextureID(): number;

        /**
         * 设置纹理片段名称
         * set tile name
         */
        setTileName(name: string);

        /**
         * 设置纹理片段ID
         * set tile ID
         */
        setTileId(id: number);

        /**
         * 获取动画当前播放帧
         * get the current frame of the animation
         */
        getCurrentFrame(): number;

        /**
         * 获取动画片段总长度
         * get the length of the animation
         */
        getTotalFrame(): number;


        /**
         * 设置纹理片段X坐标偏移位置
         * set tile offset X
         */
        setTileXOffset(value: number);

        /**
         * 获取纹理片段X坐标偏移位置
         * get tile offset X
         */
        getTileXOffset(): number;

        /**
         * 设置纹理片段Y坐标偏移位置
         * set tile offset Y
         */
        setTileYOffset(value: number);

        /**
         * 获取纹理片段Y坐标偏移位置
         * get tile offset Y
         */
        getTileYOffset(): number;

        /**
         * 设置纹理片段宽度偏移位置
         * set tile width offset
         */
        setTileWidthOffset(value: number);

        /**
         * 获取纹理片段宽度偏移位置
         * get tile width offset
         */
        getTileWidthOffset(): number;

        /**
         * 设置纹理片段高度偏移位置
         * set tile height offset}
         */
        setTileHeightOffset(value: number);

        /**
         * 获取纹理片段高度偏移位置
         * get tile height offset
         */
        getTileHeightOffset(): number;

        /**
         * 指示动画播放的帧率.
         * set FPS of the animation
         */
        setAnimationSpeed(frame: number);

        /**
         * 设置顶点位置 (index: 0-左上，1-左下，2-右上，3-右下)
         * set vertexes pos (index: 0-top left, 1-bottom left, 2-top right, 3-bottom right)
         */
        setIndexVertext(index: number, x: number, y: number);

        /**
         * 获取顶点位置 (index: 0-左上，1-左下，2-右上，3-右下)
         * get vertexes pos (index: 0-top left, 1-bottom left, 2-top right, 3-bottom right)
         */
        getIndexVertext(index): Point;

        /**
         * 获得顶点数据
         * index to the right vertex
         */
        getVertex(index: number): Point;

        /**
         * 设置是否循环播放
         * loop animation or not
         */
        loop(value: boolean);

        /**
         * 播放动画
         * play animation
         */
        play();

        /**
         * 停止播放动画
         * stop animation
         */
        stop();

        /**
         * 跳转到指定的帧并且播放动画
         * skip to a frame and play the animation
         */
        gotoAndPlay();

        /**
         * 跳转到指定的帧并停止动画
         * skip to a frame and stop the animation
         */
        gotoAndStop(value: number);

        /**
         * 添加帧脚本
         * add frame script
         * 
         * TODO: type?
         */
        addFrameScript(value);

        /**
         * 删除帧脚本
         * delete frame script
         */
        removeFrameScript(value);

        /**
         * 删除所有帧函数
         * delete all frame scripts
         */
        removeAllFrameScript();

        /**
         * 设置是否倒播动画
         * set a boolean value that indicates whether the animation is rolled back
         */
        rollbackAnimation(value: boolean);

        /**
         * 设置帧延迟
         * set frame delay
         */
        frameDelay(value: number);

        //更新帧信息
        // TODO: boolean?
        updateFrame(flag);

        //刷新绝对中心点
        upAbsPoint();

        /**
         * 获得绝对中心点
         * get the absolute center point
         */
        absCentre(): Point;

        /**
         * 设置融合矩阵
         * set transform matrix
         * TODO: matrix?
         */
        setTransform(value);

        /**
         * 获取融合矩阵
         * get transform matrix
         * 
         * TODO: type?
         */
        getTransform();

        /**
         * 获得对应的场景
         * get scene
         */
        getScene(): Scene;

        /**
         * 设置对应的场景
         * set scene
         */
        setScene(value: Scene);

        /**
         * 设置网格ID
         * set mesh ID
         */
        setID(value: number);

        /**
         * 设置影片播放的片段
         * play the clip of animation with the right name
         */
        queryName(name: string): number;

    }

    /**
     * Sprite  显示容器类，只能用于嵌套MovieClip,Sprite可以互相嵌套。
     * 演示地址:http://sirius2d.com/demos/d_4/
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
        * <get skew X of the object
        */
        getSkewX(): number;

        /**
        * 设置对象的X轴倾斜值
        * set skew X of the object
        */
        setSkewX(value: number);

        /**
         * 获取对象的Y轴倾斜值
         * get skew Y of the object
         */
        getSkewY(): number;

        /**
         * 设置对象的Y轴倾斜值
         * set skew Y of the object
         */
        setSkewY(value: number);

        /**
         * 获取对象的X轴偏移位置
         * get pivot X of the object
         */
        getPivotX(): number;

        /**
        * 设置对象的X轴偏移位置
        * set pivot X of the object
        */
        setPivotX(value: number);

        /**
         * 获取对象的Y轴偏移量
         * get pivot Y of the object
         */
        getPivotY(): number;

        /**
         * 设置对象的Y轴偏移量
         * set pivot Y of the object
         */
        setPivotY(value: number);

        getRotation(): number;
        setRotation(value: number);
        getVisible(): boolean;
        setVisible(value: boolean);

        /**
        * 获取对象的刷新状态
        * get a boolean value that indicates whether the object is redrawn
        */
        getIsRedraw(): boolean;

        /**
         * 设置对象的刷新状态
         * set a boolean value that indicates whether the object is redrawn
         */
        setIsRedraw(value: boolean);

        getParent();
        setParent(value);

        /**
        * 获取鼠标监测状态
        * get a boolean value that indicates whether the mouse event is listened
        */
        getMouseEnabled(): boolean;

        /**
        * 设置鼠标监测状态
        * set a boolean value that indicates whether the mouse event is listened
        */
        setMouseEnabled(value: boolean);

        /**
         * 获取用户数据
         * get the user data
         */
        getUserData();

        /**
         * 设置用户数据
         * set the user data
         */
        setUserData();
    }

    /**
     * Stage2D 游戏的主场景类，只能存在一个，提供游戏的渲染架构支持。
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
        * list of display objects
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
         */
        removeChild(child);

        //size(width, height);


        /**
         * 添加帧缓存
         * add frame buffer
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
    * 演示地址:http://sirius2d.com/demos/d_42/
    */
    class TextField extends MovieClip {
        constructor(w: number, h: number);

        /**
         * 设置字体大小
         */
        setFontSize(value: number);

        /**
         */
        getFontSize(): number;

        /**
        *设置文本内容
        */
        setText(text: string, x: number, y: number);

        /**
         * 获得文字内容
         */
        getText(): string;

        /**
        *设置文本字体
        */
        setTypefac(font: string);

        /**
         * 获得文本字体
         */
        getTypefac(): string;
    }




    /*****************  geom folder *********************/




    // TODO: extend method of Number, function, array needed?

    module Point {

        /**
        * 返回 pt1 和 pt2 之间的距离。
        * @param pt1 — 第一个点。
        * @param pt2 — 第二个点。
        * @returns — 第一个点和第二个点之间的距离。
        */
        function distance(pt1: Point, pt2: Point):number;

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
     * 演示地址：http://sirius2d.com/demos/d_18/
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
        */
        getX(): number;

        /**
         * 设置组的X轴位置
         */
        setX(value: number);

        /**
         * 获取组的Y轴位置
         */
        getY(): number;

        /**
         * 设置组的Y轴位置
         */
        setY(value: number);

        /**
         * 获取组的X轴比例
         */
        getScaleX(): number;

        /**
         * 设置组的X轴比例
         */
        setScaleX(value: number);

        /**
         * 获取组的Y轴比例
         */
        getScaleY(): number;

        /**
         * 设置组的Y轴比例
         */
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

        /**
         * 获取组的角度
         */
        getRotation(): number;

        /**
         * 设置组的角度
         */
        setRotation(value: number);

        /**
         * 添加组
         */
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
         * @returns {Array}
         * TODO: type?
         */
        add3x32(v, v1, v2);

        /**
         * 3*3矩阵融合
         * @returns {Array}
         */
        add3x3(v1, v2);

        /**
         * 1*3优化矩阵融合
         * @returns {Array}
         */
        add1x32(v, v1, v2);

        /**
         * 1*3矩阵融合
         * @returns {Array}
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
         * @returns {Array}
         */
        add4x4(a1, a2);

        /**
         * 1*4矩阵融合
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


   

    /*****************  event folder *********************/




    /**
     * EventDispatcher 事件处理器基类
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
        */
        addEventListener(type: string, listener: Function, useCapture: boolean);

        /**
         * 删除事件
         * @param type 事件类型
         * @param listener 事件执行函数
         * @param useCapture 事件执行循序
         */
        removeEventListener(type: string, listener: Function, useCapture?: boolean);

        /**
         * 清除所有事件
         * @param type 事件类型
         */
        removeAllEventListeners(type: string);

        /**
         * 设置加载事件
         */
        on(type: string, listener: Function, scope?: Object, once?: boolean, data?: Object, useCapture?: boolean);

        off(type: string, listener: Function, useCapture: boolean);

        /**
         * 发送事件
         * @param eventObj 事件消息体
         * @param target 事件目标
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




    /*****************  loader folder *********************/

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
     * 演示地址:http://sirius2d.com/demos/d_1/
     */
    class LoadQueue extends AbstractLoader {
        constructor(useXHR: boolean, basePath?, crossOrigin?);

        removeAll();
        remove(idsOrUrls);
        reset();
        installPlugin(plugin);
        loadFile(file, loadNow: boolean, basePath);

        /**
         * 载入加载队列
         * @param manifest 加载队列
         */
        loadManifest(manifest, loadNow?: boolean, basePath?);

        load();

        getResult(value, rawResult?);
        setPaused(value: boolean);
        close();
    }

    class XHRLoader extends AbstractLoader {
        constructor(item, crossOrigin);

        /**
         * Look up the loaded result.
         * @method getResult
         * @param {Boolean} [rawResult=false] Return a raw result instead of a formatted result. This applies to content
         * loaded via XHR such as scripts, XML, CSS, and Images. If there is no raw result, the formatted result will be
         * returned instead.
         * @return {Object} A result object containing the content that was loaded, such as:
         * 1. An image tag (<image>) for images
         * 2. A script tag for JavaScript (<script>). Note that scripts loaded with tags may be added to the
         *      HTML head.
         * 3. A style tag for CSS (<style>)
         * 4. Raw text for TEXT
         * 5. A formatted JavaScript object defined by JSON
         * 6. An XML document
         * 7. An binary arraybuffer loaded by XHR
         * Note that if a raw result is requested, but not found, the result will be returned instead.
         */
        getResult(rawResult: boolean);

        /**
         * Get all the response headers from the XmlHttpRequest.
         *
         * From the docs:
         * Return all the HTTP headers, excluding headers that are a case-insensitive match
         * for Set-Cookie or Set-Cookie2, as a single string, with each header line separated by a U+000D CR U+000A LF pair,
         * excluding the status line, and with each header name and header value separated by a U+003A COLON U+0020 SPACE
         * pair.
         */
        getAllResponseHeaders(): string;


        /**
         * Get a specific response header from the XmlHttpRequest.
         *
         * From the docs:
         * Returns the header field value from the response of which the field name matches
         * header, unless the field name is Set-Cookie or Set-Cookie2.
         */
        getResponseHeader(header: string): string;
    }



     /*****************  message folder *********************/



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
         * @return
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




    /*****************  particle folder *********************/



    // TODO: needed?
    class ParticleCPU {
        constructor(v_quad);
        paint();
        show();
        clear();
    }

    /**
     * ParticleEmittersCPU 粒子发射器,可用于发射任何Quad,通常在粒子，幻影，残影时用到。
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




    /*****************  shader folder *********************/




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




    /*****************  sound folder *********************/




    /**
     * 音效控制器
     */
    class SoundControl {

        /**
        * 原始音量
        * @default 0
        */
        originalVolume: number;

        /**
         * 音效是否正在播放
         * @default false
         */
        isPlaying: boolean;

        /**
         * 获取音效音量,需要重载
         */
        getVolume(): number;

        /**
         * 设置音效音量,需要重载
         */
        setVolume(value: number);

        /**
         * 播放
         * @param loops 循环次数
         * @param delay 延迟播放时间
         */
        play(loops: number, delay: number);

        /**
         * 暂停
         */
        pause();

        /**
         * 停止
         */
        stop();

        /**
         * 静音
         */
        mute();

        /**
         * 取消静音
         */
        unmute();

        /**
         * 静音开关
         */
        toggleMute();

        /**
         * 播放开关
         */
        togglePlay();

        /**
         * 添加音效播放回调函数
         */
        onPlay(callBack: Function);

        /**
         * 添加音效暂停回调函数
         */
        onPause(callBack: Function);

        /**
         * 添加音效停止回调函数
         */
        onStop(callBack: Function);

        /**
         * 添加取消当前音效回调函数
         */
        onCancel(callBack: Function);

        /**
         * 添加静音回调函数
         */
        onMute(callBack: Function);

        /**
         * 添加取消静音回调函数
         */
        onUnMute(callBack: Function);

        /**
         * 添加音效播放完毕回调函数
         */
        onComplete(callBack: Function);

        /**
         * 添加音效播放出错回调函数
         */
        onError(callBack: Function);
        dispose();
    }

    /**
     * 音效元素
     * @param {Audio} sound 声音文件
     */
    class SoundItem extends SoundControl {

        /**
        * 声音文件
        * @type {Audio}
        * TODO:AudioElement?
        */
        sound;

        /**
         * 播放声音的循环次数
         * @default 0
         */
        loops: number;

        /**
         * 播放声音的延迟时间
         * @default 0
         */
        delay: number;

        /**
         * 播放声音的延迟时间的计时器
         * @private
         */
        //timeout: number;

        /**
         * 声音播放当前位置
         * @default 0
         */
        lastPosition: number;

        /**
         * 声音文件的地址
         * @default null
         */
        url: string;

        constructor(sound);

        /**
         * 获取音频总长度
         */
        getLength(): number;

        /**
         * 获取音频当前播放位置
         */
        getPosition(): number;

        /**
         * 设置音频当前播放位置
         */
        setPosition(value: number);

        /**
         * 获取音频当前播放位置的百分比
         */
        getPositionPercent(): number;

        /**
         * 设置音频当前播放位置的百分比
         */
        setPositionPercent(value: number);

        /**
         * 加载
         * @param {String} path 音效文件路径
         */
        load(path: string): SoundItem;

        clone(): SoundItem;
    }

    /**
     * 音效管理类
     * @class
     * @param {string} id 当前音效管理器的ID
     * @example
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
         * @param {string} id 该声音文件的ID
         * @param {Audio} value 声音文件
         * @returns {ss2d.SoundItem} 返回声音列表内的一个声音元素
         * 
         * TODO: AudioElement?
         */
        add(id: string, value): SoundItem;

        /**
         * 根据ID移除声音管理器中的声音元素
         * @param {string} id 被移除的声音元素ID
         * @returns {ss2d.SoundManager} 返回当前声音管理
         */
        remove(id: string): SoundManager;

        /**
          * 根据ID获取当前声音管理器中的声音元素
          * @param {string} id 需要获取的声音元素ID
          * @returns {ss2d.SoundItem} 返回一个声音元素
          */
        item(id: string): SoundItem;

        /**
         * 检测声音管理器中是否存在指定ID的声音元素
         * @param {string} id 声音元素ID
         * @returns {boolean}
         */
        match(id: string): boolean;

        /**
         * 当前声音管理器中的声音文件个数
         * @returns {number}
         */
        length(): number;
    }




    /*****************  system folder *********************/




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




    /*****************  utils folder *********************/




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
         * @param point
         * @param roundness
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

    // this is availble after you new a stage
    static stage: ss2d.Stage2D;
}
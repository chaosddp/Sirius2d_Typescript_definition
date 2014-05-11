
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
    function getElementOffset(elem: HTMLElement): { left: number, top: number };

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

    // TODO: extend method of Number, function, array needed?

    /**
    * Point 点类
    * @class
    */
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
        setA(value:number);
        getX(): number;
        setX(value: number);
        getY(): number;
        setY(value:number);
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
        hitTestRoundness(x:number, y:number, radius:number): boolean;

    }


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
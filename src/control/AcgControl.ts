import { scene } from '@/control/SceneControl';
import { BaseMv } from '@mvs/BaseMv';
import { mv1 } from '@mvs/mv1/mv1';
import { mv2 } from '@mvs/mv2/mv2';
import * as THREE from 'three';

import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { mvControl } from '@/control/MvControl';
import { Widget } from '@mvs/Widget';

const _window = window

var CLICKOBJS:Widget[]  = [] //可点击数组
// var CLICKOBJS:THREE.Object3D[]  = [] //可点击数组

const AcgControl = class AcgControl {
    private name: string;
    private plays: BaseMv[];
    private scene: Scene;
    private index: number;
    private camera: PerspectiveCamera;
    private renderer: WebGLRenderer;
    constructor() {
        this.camera = new PerspectiveCamera(75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000);
        this.camera.position.z = 5;

        this.renderer = new WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        this.plays = [];
        this.name = 'AcgControl';
        this.index = 0;
        this.scene = scene;
        this.init();
    }

    /**
     * @methods 初始化
     */
    public init(): void {
        this.rendererInit();
        this.setPlays();
        this.initThreeClickEvent()
        this.start();
    }

    /**
     * @methods 点击监测
     */
    private initThreeClickEvent() {
        //点击射线
        let _this = this
        var raycaster = new THREE.Raycaster();
        var mouse = new THREE.Vector2();
        _this.renderer.domElement.addEventListener('mousedown', onDocumentMouseDown, false);

        function onDocumentMouseDown(event:any) {
            event.preventDefault();
            mouse.x = (event.clientX / _this.renderer.domElement.clientWidth) * 2 - 1;
            mouse.y = -(event.clientY / _this.renderer.domElement.clientHeight) * 2 + 1;
    
            raycaster.setFromCamera(mouse, _this.camera);
    
            // 总结一下，这里必须装网格，mesh，装入组是没有效果的
            // 所以我们将所有的盒子的网格放入对象就可以了
            // 需要被监听的对象要存储在clickObjects中。
            let clicks = CLICKOBJS.map(i=>{return i.obj})
            var intersects = raycaster.intersectObjects(clicks);
    
            if(intersects.length > 0) {
                console.log(intersects)
                let uuids = intersects.map(i=>{ // 通过uuid判断获取点击的物体调用点击事件
                    return i.object.uuid
                })

                CLICKOBJS.forEach(i=>{
                    console.log(i)
                    if( uuids.indexOf(i.obj.uuid) > -1 ){
                        i.onClick()
                    }
                })
            }
        }
    }

    /**
     * @method 初始化渲染器
     */
    public rendererInit(): void {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // window.AcgCanvas = this.renderer.domElement;
        document.body.appendChild(this.renderer.domElement);
    }

    /**
     * @description 自启动
     */
    public start(): void {
        // this.plays[this.index].setout();
        this.animate();
    }

    /**
     * @description 渲染帧
     */
    public animate(): void {
        requestAnimationFrame(this.animate.bind(this));
        // this.plays[this.index].animate();
        this.renderer.render(this.scene, this.camera);
    }

    /**
     * @methods 加载场景列表
     */
    public setPlays(): void {
        console.log(mvControl)
        mvControl.addMv(mv1,mv2)
        mvControl.play()
    }
};

export { AcgControl ,CLICKOBJS};
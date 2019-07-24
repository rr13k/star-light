import { scene } from '@/control/SceneControl';
import { BaseMv } from '@mvs/BaseMv';
import { mv1 } from '@mvs/mv1/mv1';
// import * as THREE from 'three';
// tslint:disable-next-line: no-duplicate-imports
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

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
        this.start();
    }

    /**
     * @description 初始化渲染器
     */
    public rendererInit(): void {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

    /**
     * @description 自启动
     */
    public start(): void {
        this.plays[this.index].setout();
        this.animate();
    }

    /**
     * @description 渲染帧
     */
    public animate(): void {
        requestAnimationFrame(this.animate.bind(this));
        this.plays[this.index].animate();
        this.renderer.render(this.scene, this.camera);
    }

    /**
     * @methods 加载播放列表
     */
    public setPlays(): void {
        this.plays.push(mv1);
    }
};

export { AcgControl };

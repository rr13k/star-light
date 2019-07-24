import { mv1 } from '@mvs/mv1/mv1';

// import {mv1} from '../mvs/mv1/mv1';

import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { BaseMv } from '../mvs/BaseMv';
const AcgControl = class AcgControl {
    private name: string;
    private plays: BaseMv[];
    private index: number;
    private Scene: Scene;
    private Camera: PerspectiveCamera;
    private renderer: WebGLRenderer;
    constructor() {
        this.Scene = new Scene();
        this.Camera = new PerspectiveCamera(75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000);
        this.renderer = new WebGLRenderer();
        this.plays = [];
        this.name = 'AcgControl';
        this.index = 0;
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
        this.renderer.render(this.Scene, this.Camera);
    }

    /**
     * @methods 加载播放列表
     */
    public setPlays(): void {
        const mv = new mv1();
        this.plays.push(mv);
    }
};

export { AcgControl };

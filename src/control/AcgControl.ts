
import { mv1 } from '../mvs/mv1/mv1';
import { baseMv } from '../mvs/baseMv'
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';

let AcgControl = class AcgControl {
    name: string
    plays: baseMv[]
    index: number
    Scene: Scene
    Camera: PerspectiveCamera
    renderer: WebGLRenderer
    constructor() {
        this.Scene = new Scene();
        this.Camera = new PerspectiveCamera(75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000);
        this.renderer = new WebGLRenderer();
        this.plays = []
        this.name = "AcgControl"
        this.index = 0
        this.init()
    }

    /**
     * @methods 初始化
     */
    init(): void {
        this.rendererInit()
        this.setPlays()
        this.start()
    }

    rendererInit(){
        this.renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( this.renderer.domElement );
    }

    start(): void {
        this.plays[this.index].setout()
        this.animate()
    }

    /**
     * @description 渲染帧
     */
    animate(): void{
        requestAnimationFrame(this.animate.bind(this))
        this.plays[this.index].animate()
        this.renderer.render( this.Scene, this.Camera );
    }

    /**
     * @methods 加载播放列表
     */
    setPlays(): void {
        let _mv = new mv1()
        this.plays.push(_mv)
    }
}

export { AcgControl }


import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';
import {BaseMv} from '../BaseMv';
class Mv1 extends BaseMv {
    private scene: any;
    private Objs: any[];
    constructor()  {
        super('mv1');
        this.scene = BaseMv.sceneControl;
        this.Objs = [];
    }

    public setout(): void {
        // tslint:disable-next-line: no-console
        console.log('setout 动画开始啦');
        const geometry = new BoxGeometry( 1, 1, 1 );
        const material = new MeshBasicMaterial( { color: 0x22ff00 } );
        const cube = new Mesh( geometry, material );
        this.scene.add(cube);
        this.Objs.push(cube);
        this.loop();
    }

    public loop(): void {
        // tslint:disable-next-line: no-console
        console.log('动画开始循环');
        // this.loop.bind(this)()
    }

    public animate(): void {
        this.Objs[0].rotation.x += 0.01;
        this.Objs[0].rotation.y += 0.01;
        // console.log("------")
    }
}

const mv1 = new Mv1();

export {mv1};

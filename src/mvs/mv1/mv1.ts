
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';
import {BaseMv} from '../BaseMv';
const mv1 = class Mv1 extends BaseMv {
    constructor()  {
        super('mv1');
    }

    public setout() {
        // tslint:disable-next-line: no-console
        console.log('setout 动画开始啦');
        this.loop();
        const geometry = new BoxGeometry( 1, 1, 1 );
        const material = new MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new Mesh( geometry, material );
         // tslint:disable-next-line: no-console
        console.dir(BaseMv);
    }

    public loop() {
        // tslint:disable-next-line: no-console
        console.log('动画开始循环');
        // this.loop.bind(this)()
    }

    public animate() {
        // console.log("------")
    }
};

export {mv1};

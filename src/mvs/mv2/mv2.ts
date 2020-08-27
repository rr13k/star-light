
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';
import {BaseMv} from '../BaseMv';
import {star2} from './toys/ball'

class Mv2 extends BaseMv {
    constructor()  {
        super('mv2');
        this.init();
    }

    public setout(): void {
        // tslint:disable-next-line: no-console
        console.log('setout2 动画开始啦');
        this.bindWidget(star2)
        this.runs()
        console.log("当前场景下物体:",this.widgets)
        this.loop();
    }

    public loop(): void {
        // tslint:disable-next-line: no-console
        console.log('动画开始循环');
    }

    public animate(): void {
        // pass,已废弃,
    }

    private init(): void {
     
    }
}

const mv2 = new Mv2();

export {mv2};

import {Widget} from '@mvs/Widget';
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';
import {BaseMv} from '../BaseMv';
import {star} from './toys/star'

class Mv1 extends BaseMv {
    constructor() {
        super('mv1');
        this.widgets = [];
        this.init();
    }

    public setout(): void {
        // tslint:disable-next-line: no-console
        console.log('setout 动画开始啦',star);
        this.bindWidget(star)
        this.runs()
        this.loop();
    }

    public loop(): void {
        // tslint:disable-next-line: no-console
        console.log('动画开始循环');
    }

    public animate(): void {
        // pass
    }

    private init(): void {
        console.log(this.widgets,"mv1")
    }
}

const mv1 = new Mv1();

export {mv1};

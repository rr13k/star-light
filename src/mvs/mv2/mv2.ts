import {Widget} from '@mvs/Widget';
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';
import {BaseMv} from '../BaseMv';
import {star} from './toys/ball'

class Mv2 extends BaseMv {
    private widgets: Widget[];
    constructor()  {
        super('mv2');
        this.widgets = [];
        this.init();
    }

    private runs(){
        this.widgets.map(i=>{
            i.play()
        })
    }

    public setout(): void {
        // tslint:disable-next-line: no-console
        console.log('setout2 动画开始啦');
        this.widgets.push(star); // 添加物体
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

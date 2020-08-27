import {Scene} from 'three';
import { BaseMv } from '@mvs/BaseMv';

/* 场景控制器，用于控制场景过度，多场景切换 */

class MvControl {
    private name: string;
    private plays: BaseMv[];
    private index: number;

    constructor() {
        this.plays = [];
        this.name = 'MvControl';
        this.index = 0;
    }

    /**
     * @methods 开始播放场景
     */
    public play(): void {
        this.plays[this.index].setout()
    }

    /**
     * @methods 切换下一个场景
     */
    public next(): void {
        console.log("执行切换下一个场景:",this.index,this.plays)
        this.plays[this.index].bearkMv()
        this.index++
        this.plays[this.index].setout()
    }

    /**
     * @methods 添加场景
     */
    public addMv(mv:BaseMv): void {
        if(arguments.length == 1){
            this.plays.push(mv)
        }else{
            for(var i = 0;i < arguments.length; i++) {
                this.plays.push(arguments[i])
            }
        }
    }
};

const mvControl = new MvControl();
export {mvControl};
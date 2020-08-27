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
        console.log(this,this.index)
        try {
            if(++this.index < this.plays.length){
                this.plays[this.index-1].bearkMv()
                this.plays[this.index].setout()
            }else{
                console.log("播放完毕或超出场景范围!")
            }
        } catch (error) {
            console.log("场景切换错误:",error)
        }
    }

    /**
     * @methods 添加场景
     */
    public addMv(...mvs:BaseMv[]): void {
        mvs.map(mv=>{
            this.plays.push(mv)
        })
    }
};

const mvControl = new MvControl();
export {mvControl};
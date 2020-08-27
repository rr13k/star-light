import {scene} from '@/control/SceneControl';
import {mvControl} from '@/control/MvControl';

class BaseMv {
    // tslint:disable-next-line: typedef
    public static sceneControl  = scene;
    private name: string;
    private state: number;

    constructor(name: string) {
        this.name = name;
        this.state = 0;
    }

    public setout(): void {
        // 开始动画过渡
    }

    public loop(): void {
        // 循环动画
    }

    public bearkMv(): void {
        // 跳出动画
        // this.bearked()
    }

    public bearked(): void {
        // 跳出事件,跳出前执行事件
        // mvControl.next() // 通知执行下一个动画
    }

    public animate(): void {
        // 帧动画
    }
}
export { BaseMv };

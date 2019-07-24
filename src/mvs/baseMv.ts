import {scene} from '@/control/SceneControl';

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
    }

    public bearked(): void {
        // 跳出事件
    }

    public animate(): void {
        // 帧动画
    }
}
export { BaseMv };
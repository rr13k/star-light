import {scene} from '@/control/SceneControl';

class BaseMv {
    // tslint:disable-next-line: typedef
    public static sceneControl  = scene;
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    public setout(): void {
        // 开始动画过渡
    }

    public loop(): void {
        // 循环动画
    }

    public bearkLoop(): void {
        // 跳出动画
    }

    public animate(): void {
        // 动画帧
    }
}

export { BaseMv };

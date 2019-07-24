import { Scene } from 'three';
class BaseMv {

    // private scene = new Scene();
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

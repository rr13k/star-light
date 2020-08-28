import {scene} from '@/control/SceneControl';
import {mvControl} from '@/control/MvControl';
import {Widget} from '@mvs/Widget';
import { star } from './mv1/toys/star';
import { CLICKOBJS } from '@/control/AcgControl';

class BaseMv {
    // tslint:disable-next-line: typedef
    public static sceneControl  = scene;
    private name: string;
    private state: number;
    protected widgets: Widget[];

    constructor(name: string) {
        this.name = name;
        this.state = 0;
        this.widgets = [];
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

    /**
    * @description 运行场景下所有的物件
    */
   protected runs(){
    this.widgets.map(widget=>{
        widget.play()
        widget.eventBack()
    })
    }

   /**
   * @description 再场景上新增物件
   */
    public bindWidget(...widgets:Widget[]):void {
        widgets.map(widget=>{
            this.widgets.push(widget); // 添加物体
            if(String(widget.onClick).length != 15){ // 15表示空函数
                CLICKOBJS.push(widget)
            }
            widget.setMv(this)
        })
    }

    /**
    * @description 检查场景下的所有物体，如果
    * 都执行完毕则切换场景
    */
    public checkScene(){
        let status = this.widgets.find(i=>{
            return i.state != 3
        })
        if(!status){ // 切换场景
            mvControl.next()
        }
    }

    public bearked(): void {
        // 跳出事件,跳出前执行事件
    }

    public animate(): void {
        // 帧动画
    }
}
export { BaseMv };

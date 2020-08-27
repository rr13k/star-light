/**
 * @description 单个物件,包含动画
 * @class Widget 小物件
 */
import { scene } from '@/control/SceneControl';
import { BaseMv } from './BaseMv';

const WidgetState = {
  ENTER: 0,
  ACTION: 1,
  LEAVE: 2,
  FILSH: 3,
}

class Widget {
  public obj: any;
  public state: number;
  public mvs: BaseMv[];
  // public loopTime: number;
  private name: string;
  constructor(name: string, obj: any) {
    this.name = name;
    this.obj = obj;
    this.state = -1;
    this.mvs = []
  }

  /**
   * @description 添加到场景中,添加时自动开始动画
   * @param  obj 物体 auto 自动播放
   */
  public add(obj: any, auto: boolean = true): void {
    scene.add(obj);
  }

  /**
   * @description 播放物体动画
   */
  public play() {
    scene.add(this.obj);
  }

  /**
   * @description 设置物体场景绑定关系
   */
  public setMv(mv: any) {
    this.mvs.push(mv)
  }

  //-------  widget 事件 ------

  /**
  * @description 物件进入事件
  */
  public enterEvent() { }

  /**
  * @description 物件活跃事件
  */
  public actionEvent() { }

  /**
  * @description 物件离开事件
  */
  public leaveEvent() { }

  /**
   * @description 离开当前事件,进入下一个事件
   */
  public eventBack(): void {
    let mthis = this
    mthis.state++;
    switch (mthis.state) {
      case WidgetState.ENTER:
        mthis.enterEvent();
        break;
      case WidgetState.ACTION:
        mthis.actionEvent();
        break;
      case WidgetState.LEAVE:
        mthis.leaveEvent();
        // 物件结束时，自身状态已变成完成，并通知包含的场景，
        // 检查其他物件状态，都为完成时自动切换下个场景
        mthis.state++;
        mthis.mvs.map((mv: any) => {
          console.log(mv)
          mv.checkScene()
        })
        return
    }
  }

}

export { Widget };

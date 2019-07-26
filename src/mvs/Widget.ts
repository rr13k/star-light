/**
 * @description 单个物件,包含动画
 * @class Widget 小物件
 */
import {scene} from '@/control/SceneControl';
import {TweenLite, TweenMax} from 'gsap';

class Widget {
  public obj: any;
  public state: number;
  protected tweenMax: any = TweenMax;
  protected tweenLite: any = TweenLite;
  // public loopTime: number;
  private name: string;
  private enterType: number = 0;
  private actionType: number = 1;
  private leaveType: number = 2;
  constructor(name: string, obj: any) {
    this.name = name;
    this.obj = obj;
    this.state = -1;
  }

  /**
   * @description 添加到场景中,添加时自动开始动画
   * @param  obj 物体 auto 自动播放
   */
  public add(obj: any, auto: boolean = true): void {
    scene.add(obj);
  }

  /**
   * @description 离开当前事件
   */
  public eventBark(mthis: any): void {
    mthis.state++;
    switch (mthis.state) {
      case mthis.enterType:
          mthis.enterEvent();
          break;
      case mthis.actionType:
          mthis.actionEvent();
          break;
      case mthis.leaveType:
          mthis.leaveEvent();
          break;
    }
  }

}

export {Widget};

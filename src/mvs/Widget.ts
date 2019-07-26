/**
 * @description 单个物件,包含动画
 * @class Widget 小物件
 */
import {scene} from '@/control/SceneControl';
import {TweenLite, TweenMax} from 'gsap';

class Widget {
  public obj: any;
  protected tweenMax: any = TweenMax;
  protected tweenLite: any = TweenLite;
  // public loopTime: number;
  private name: string;
  private state: number;
  private enterType: number = 0;
  private actionType: number = 1;
  private leaveType: number = 2;
  constructor(name: string, obj: any) {
    this.name = name;
    this.obj = obj;
    this.state = -1;
    // this.loopTime = 1000; // 默认事件时长
  }

  /**
   * @description 添加到场景中,添加时自动开始动画
   * @param  obj 物体 auto 自动播放
   */
  public add(obj: any, auto: boolean = true): void {
    scene.add(obj);
    if ( auto ) this.eventBark();
  }

  /**
   * @description 重写开始事件
   */
  public enterEvent(): void {
    // e
  }

  /**
   * @description 重写活跃事件
   */
  public actionEvent(): void {
    // e
  }

  /**
   * @description 重写离开事件
   */
  public leaveEvent(): void {
    // e
  }

  /**
   * @description 离开当前事件
   */
  public eventBark(): void {
    this.state++;
    switch (this.state) {
      case this.enterType:
        this._enterEvent();
        break;
      case this.actionType:
        break;
      case this.leaveType:
        break;
    }
  }

  private _enterEvent(): void {
    this.enterEvent();
    // e
  }

}

export {Widget};

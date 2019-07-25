/**
 * @description 单个物件,包含动画
 * @class Widget 小物件
 */
import {scene} from '@/control/SceneControl';
// import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

class Widget {
  public obj: any;
  public loopTime: number;
  private name: string;
  private state: number;
  private enterType: number = 0;
  private actionType: number = 1;
  private leaveType: number = 2;
  private off: boolean;
  constructor(name: string, obj: any) {
    this.name = name;
    this.obj = obj;
    this.state = 0;
    this.off = true;
    this.loopTime = 1000; // 默认事件时长
    setTimeout(() => {
      this.eventBark();
    }, this.loopTime);
  }

  /**
   * @description 添加到场景中
   */
  public add(obj: any): void {
    scene.add(obj);
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
   * @description 行为树
   */
  public action(): void {
    switch (this.state) {
      case this.enterType:
        this._enterEvent();
        break;
      case this.actionType:
        this._actionEvent();
        break;
      case this.leaveType:
        this._leaveEvent();
        break;
      default:
        break;
    }
  }

  /**
   * @description 离开当前事件
   */
  public eventBark(): void {
    this.state++;
  }

  /**
   * @description 原开始事件
   */
  private _enterEvent(): void {
    this.enterEvent();
  }

  /**
   * @description 活跃事件
   */
  private _actionEvent(): void {
    this.actionEvent();
  }

  /**
   * @description 离开事件
   */
  private _leaveEvent(): void {
    this.leaveEvent();
    scene.remove(this.obj);
  }

}

export {Widget};

import { Widget } from '@mvs/Widget';
import { Bounce } from 'gsap';
import * as THREE from 'three';
import { mv1 } from '@mvs/mv1/mv1';
import {mvControl} from '@/control/MvControl';

/**
 * @class 开始字体
 * @extends {Widget}
 */
class Star extends Widget {
  constructor() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    super('star', cube);
    this.obj = cube;
    this.add(cube);
    this.eventBack(this);
  }

  private enterEvent(): void {
    this.tweenMax.to([this.obj.position], 3, {
      onComplete: () => {
        this.eventBack(this);
      },
      y: 3,
      yoyo: true,
    });
  }

  private actionEvent(): void {
    this.tweenMax.to([this.obj.rotation], 3, {
      ease: 'Power0.easeNone',
      y: 20,
    });
    setTimeout(() => {
      this.eventBack(this);
    }, 2000);
  }

  private leaveEvent(): void {
    this.tweenMax.to([this.obj.position], 3, {
      y: 0,
      yoyo: true,
    });

    console.log("手工切换下一个场景")
    mvControl.next()
    // mv1.bearkMv() // 跳出场景
  }
}

const star = new Star();
export { star };

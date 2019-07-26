import { Widget } from '@mvs/Widget';
import { Bounce } from 'gsap';
import * as THREE from 'three';

/**
 * @class 开始字体
 * @extends {Widget}
 */
class StartFont extends Widget {
  constructor() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    super('startFont', cube);
    this.obj = cube;
    this.add(cube);
    this.eventBark(this);
  }

  private enterEvent(): void {
    this.tweenMax.to([this.obj.position], 3, {
      onComplete: () => {
        this.eventBark(this);
      },
      x: 3,
      yoyo: true,
    });
  }

  private actionEvent(): void {
    this.tweenMax.to([this.obj.rotation], 3, {
      ease: 'Power0.easeNone',
      repeat: -1,
      y: 20,
    });
    setTimeout(() => {
      this.eventBark(this);
    }, 6000);
  }

  private leaveEvent(): void {
    this.tweenMax.to([this.obj.position], 3, {
      x: 0,
      yoyo: true,
    });
  }
}

const startFont2 = new StartFont();
export { startFont2 };

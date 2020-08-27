import { Widget } from '@mvs/Widget';
import { Bounce } from 'gsap';
import * as THREE from 'three';

/**
 * @class 开始字体
 * @extends {Widget}
 */
class Star extends Widget {
  constructor() {
    // const geometry = new THREE.CylinderBufferGeometry(5,5,20,32)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const cube = new THREE.Mesh(geometry, material);
    super('cylinder', cube);
    this.obj = cube;
    
  }

  public play():void{
    this.add(this.obj);
    console.log(this.obj,"新动画添加")
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
    }, 500);
  }

  private leaveEvent(): void {
    this.tweenMax.to([this.obj.position], 3, {
      y: 0,
      yoyo: true,
    });
  }
}

const star = new Star();
export { star };

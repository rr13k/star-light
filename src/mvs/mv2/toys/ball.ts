import { Widget } from '@mvs/Widget';
import * as THREE from 'three';
import { TweenLite, TweenMax } from 'gsap';

/**
 * @class 开始字体
 * @extends {Widget}
 */
function newStar2() :Widget{
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(0,0,0)
  let star = new Widget("star",cube)

  star.enterEvent = function(){
    console.log("场景2动画")
      TweenMax.to([this.obj.position], 3, {
      onComplete: () => {
        this.eventBack();
      },
      y: 3,
      yoyo: true,
    });
  }

  star.actionEvent = function(){
    TweenMax.to([this.obj.rotation], 3, {
      Ease: 'Power0.easeNone',
      y: 20,
    });
    setTimeout(() => {
      this.eventBack();
    }, 4000);
  }

  star.leaveEvent = function(){
    TweenMax.to([this.obj.position], 3, {
      y: 0,
      yoyo: true,
    });
  }
  
  return star
}

const star2 = newStar2();
export { star2 };

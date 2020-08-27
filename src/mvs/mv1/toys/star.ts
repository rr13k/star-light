import { Widget } from '@mvs/Widget';
import * as THREE from 'three';
import { TweenLite, TweenMax } from 'gsap';

/**
 * @class 开始字体
 * @extends {Widget}
 */
function newStar() :Widget{
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  let star = new Widget("star",cube)

  star.enterEvent = function(){
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
    }, 2000);
  }

  star.leaveEvent = function(){
    TweenMax.to([this.obj.position], 3, {
      y: 0,
      yoyo: true,
    });
  }
 
  return star
}

const star = newStar();
export { star };

import { Widget } from '@mvs/Widget';
import * as THREE from 'three';
import { TweenLite, TweenMax } from 'gsap';

/**
 * @class 开始字体
 * @extends {Widget}
 */
function newStar(): Widget {
  const geometry = new THREE.CylinderGeometry(1, 1, 1, 6);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 0, 0)
  let star = new Widget("star", cube)

  star.enterEvent = function () {
    TweenMax.to([this.obj.position], 3, {
      onComplete: () => {
        this.eventBack();
      },
      x: 3,
      yoyo: true,
    });
  }

  star.onClick = function () {
    var color = [0xff0000, 0xffff33, 0x00dd00,
      0xcc0000, 0x6600ff, 0x00cccc, 0xff00ff,
      0x00ffff,]

    let index = Math.floor(Math.random() * color.length)
    var newMaterial = new THREE.MeshBasicMaterial({ color: color[index] });
    this.obj.material = newMaterial
  }

  star.actionEvent = function () {
    TweenMax.to([this.obj.rotation], 3, {
      Ease: 'Power0.easeNone',
      y: 20,
    });
    setTimeout(() => {
      this.eventBack();
    }, 2000);
  }

  star.leaveEvent = function () {
    TweenMax.to([this.obj.position], 3, {
      y: 0,
      yoyo: true,
    });
  }

  return star
}

const clicker = newStar();
export { clicker };

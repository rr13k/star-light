import {Widget} from '@mvs/Widget';
import { Bounce} from 'gsap';
import * as THREE from 'three';

class StartFont extends Widget {
  constructor() {
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    super('startFont', cube);
    this.obj = cube;
    this.add(cube);
  }

  public enterEvent(): void {
    // this.tweenMax(this.obj, 1.5, {opacity: 0, delay: 0});
    // this.tweenMax.to(this.obj.position, 3, {x: 1, ease: Bounce.easeOut});
    // this.tweenMax.to(this.obj.position, 30, {y: 2});
    this.tweenMax.to([this.obj.rotation] , 3, {y: 20, lazy: true, repeat: -1, yoyo: true});
    // this.tweenLite.to(this.obj.rotation , 3, {y: 20, repeat: -1, yoyo: true});
  }

  public actionEvent(): void {
    // this.obj.rotation.x += 0.01;
    // this.tweenMax.to(this.obj.position, 3, {y: 1});
  }

}

const startFont = new StartFont();
export {startFont};

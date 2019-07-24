import {Widget} from '@mvs/Widget';
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
    this.obj.position.x += 0.02;
    this.loopTime = 2000; // 修改事件持续时间
  }

  public actionEvent(): void {
    this.obj.rotation.x += 0.01;
  }

}

const startFont = new StartFont();
export {startFont};

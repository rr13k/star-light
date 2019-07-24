
import {baseMv} from "../baseMv" 
import { BoxGeometry,MeshBasicMaterial,Mesh } from 'three';
let mv1 = class mv1 extends baseMv{
    constructor()  {
        super("mv1")
    }

    setout(){
        console.log("setout 动画开始啦")
        this.loop()
        var geometry = new BoxGeometry( 1, 1, 1 );
        var material = new MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new Mesh( geometry, material );
        console.dir(baseMv)
    }

    loop(){
        console.log("动画开始循环")
        // this.loop.bind(this)()
    }

    animate(){
        // console.log("------")
    }
}


export{mv1}
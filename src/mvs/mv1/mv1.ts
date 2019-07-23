
import {baseMv} from "../baseMv" 

let mv1 = class mv1 extends baseMv{
    constructor()  {
        super("mv1")
    }

    setout(){
        console.log("setout 动画开始啦")
        this.loop()
    }

    loop(){
        console.log("动画开始循环")
    }

    animate(){
        // console.log("------")
    }
}


export{mv1}
import { Scene } from 'three';
class baseMv{
    name :string
    constructor(name:string){
        this.name = name
    }

    static Scene = new Scene()

    setout():void{}

    loop():void{}

    bearkLoop():void{}

    animate():void{}
}

export{baseMv}
import { Scene } from 'three';
class BaseMv {

    static Scene = new Scene()
    name :string
    constructor(name:string){
        this.name = name
    }

    setout():void{}

    loop():void{}

    bearkLoop():void{}

    animate():void{}
}

export { BaseMv };

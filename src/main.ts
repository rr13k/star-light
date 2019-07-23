import { AcgControl } from './AcgControl';
import '../libs/three.min'

window.onload = function () {
    let myAcgControl = new AcgControl()
    console.log(myAcgControl)

    if (module.hot) {
        module.hot.accept('./AcgControl.ts', function () {
            console.log('Updating ')
        })
    }
}
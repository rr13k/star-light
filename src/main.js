"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AcgControl_1 = require("./AcgControl");
require("../libs/three.min");
window.onload = function () {
    var myAcgControl = new AcgControl_1.AcgControl();
    console.log(myAcgControl);
    var sdsd = "nihao";
    console.log(sdsd);
    if (module.hot) {
        console.log(module);
        module.hot.accept('./AcgControl.ts', function () {
            console.log('Updating ');
        })(module).hot.accept('AcgControl.js', function () {
            console.log('Updating ');
        });
    }
};

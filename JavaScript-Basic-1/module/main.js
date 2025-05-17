// "use strict";

// sayHi.js import file
// import {sayHi} from './sayHi.js'; // use import to access class from another file whom was exported
// console.log(sayHi());
// sayHi('Johan');

// 1.js file import
// import {abc} from './1.js';
// console.log(abc());

// admin.js file import
// import {admin} from "./admin.js";
// console.log("Before change name : ",admin.name);
// admin.name = "pete";
// console.log("After change name : ",admin.name);

// multiple function call
// import {abc,def} from "./multiFunction.js";
// abc();
// def();

// all call import
// import * as a from './allClassExport.js';
// a.abc();
// a.def();
// a.ghi();

// export as
// import * as c from './exportAs.js';
// c.a();
// c.b();

// Re-Export
import {sayHi} from './re-export.js';
sayHi('Max');

// constructor allClassExport.js
// import {Abc} from './allClassExport.js';
// let a = new Abc('Max');
// a.abc('Max',23);
// a.abc('Chuni',23,'iugi');

// dynamic export
// async function load(){
//     let say = await import('./dynamicExport.js');
//     say.hi();
//     say.bye();
// }
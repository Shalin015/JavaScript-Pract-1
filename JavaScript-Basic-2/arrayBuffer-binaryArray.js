"use strict";

// arrayBuffer length
// let buffer = new ArrayBuffer(15);
// console.log("arrayBuffer length : ",buffer.byteLength);

let buffer = new Uint8Array([255,255,255,255]).buffer;
let dataView = new DataView(buffer);
console.log(dataView.getUint8(0)); // 255 it a maximum value of 8bit value
console.log(dataView.getUint16(0)); // it will print maximum value of 16 bit code 
console.log(dataView.getUint32(0)); // it will print maximum value of 32 bit code
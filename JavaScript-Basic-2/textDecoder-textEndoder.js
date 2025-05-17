"use strict";

// encode decode text
let uin8Array = new Uint8Array([72,101,108,108,111,115]);
console.log(new TextDecoder().decode(uin8Array)); // it will convert value into text
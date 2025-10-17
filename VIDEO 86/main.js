/*
import { a, b, d } from "./mymodule.js"
console.log(a, b, d)

//default obj can be imported from any name either obj or Ayush
import Ayush from "./mymodule.js"
console.log(Ayush)
*/


// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here

//   });


const a = require("./mymodule2.js")
console.log(a, __dirname, __filename)
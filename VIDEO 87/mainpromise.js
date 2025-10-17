// To prevent from callback hell fs has introduced a new module that uses the concept of promises

import fs from "fs/promises"
// we can use directly await function because we are present in the module and don't need to present in the async function
let a = await fs.readFile("Ayush.txt")
console.log(a.toString())

let b = await fs.appendFile("Ayush.txt", "\n\n\n\n\ this is amazing Promise")

//let b=await fs.writeFile("Ayush.txt","\n\n\n\n\ this is amazing Promise")
console.log(a.toString(), b)
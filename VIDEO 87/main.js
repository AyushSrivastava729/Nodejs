const fs = require("fs")
// const fs = require("fs/promises") to import promises in CommonJS

console.log(fs)

console.log("Starting")
//fs.writeFileSync("Ayush.txt","Ayush is a good boy")
fs.writeFile("Ayush2.txt", "Ayush 2 is a good boy ", () => {
    console.log("done")
    fs.readFile("Ayush2.txt", (error, data) => {
        console.log(error, data.toString())
    })
})
fs.appendFile("Ayush.txt", " And he is a good friend of Bhupendra", (e, d) => {
    console.log(d)
})
console.log("ending")
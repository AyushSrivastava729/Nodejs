const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs=require("fs")

app.use(express.static("public"))
app.use('/blog', blog)
/*
In Express.js, middleware refers to functions that execute during the request-response cycle. Middleware functions have access to:

req (the request object),

res (the response object),

next (a function to pass control to the next middleware).

In Express.js, middleware functions are used to handle and modify the request (req) and response (res) objects during the lifecycle of an HTTP request. Middleware can:

🔄 What Middleware Can Do
Execute any code

Modify the request and response objects

End the request-response cycle (by sending a response)

Call the next middleware in the stack using next()
*/

// Middleware 1 - logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.Ayush="I am Ayush Bhai" ;
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method }\n`)
    console.log(`${Date.now()} is a ${req.method }`)
   // res.send("Hacked by Middleware 1")
    next()
})

// Middleware m2
app.use((req, res, next) => {
    console.log('m2')
    req.Ayush="I am Bhupendra Bhai" ;
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.Ayush)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
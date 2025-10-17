const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
  console.log("Hey its a get request")
  res.send('Hello World25!')
}).post('/', (req, res) => { // chaining of the request
  console.log("Hey its a post request")
  res.send('Hello World post!')
})

app.put('/', (req, res) => {
  console.log("Hey its a put request")
  res.send('Hello World put!')
})

app.get("/index", (req, res) => {
  console.log("Hey its a index")
  //res.send('Hello World index!')
  // to render proper HTML Page use  the function
  //TypeError: path must be absolute or specify root to res.sendFile
  res.sendFile('templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4, "name": ["Ayush", "Bhupendra"] })
})

app.delete('/', (req, res) => {
  console.log("Hey its a delete request")
  res.send('Hello World delete!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// to test post request we have to make entire HTML page and to prevent from this problem we use postman to simply test the POST request
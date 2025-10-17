const express = require('express')
const app = express()
const port = 3000
// app.use is used to use middleware
// express.static is an builtin middleware that tells convert or make public folder as public
// if we put main.js and package.json file in the public folder then it will also provide access to  its backend code,but why should we provide backend code
app.use(express.static('public'))


// app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
    res.send('Hello World2')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact')
})

app.get('/about', (req, res) => {
    res.send('Hello about')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog')
})
app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // params comes in the url as variable
    // For URL:http://localhost:3000/blog/intro-to-mongoDb?mode=dark&region=in
    console.log(req.params)// will output { slug: 'intro-to-mongoDb' }
    console.log(req.query)// will output  { mode: 'dark', region: 'in' }
    res.send(`hello ${req.params.slug} `)
})

//app.get('/blog/intro-to-js', (req, res) => {
//    // logic to fetch intro to js from the db
//    res.send('Hello intro-to-JavaScript')
//})

//app.get('/blog/intro-to-python', (req, res) => {
//    // logic to fetch intro to js from the db
//    res.send('Hello intro-to-python')
//})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
//http://localhost:3000/
// by default get request is requested in the browser
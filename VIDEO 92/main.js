const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
  // res.send('Hello World!')
  let siteName = "Adidas"
  let searchText = "Search Now"
  let arr = ["Hey", 8, 45]
  //  res.sendFile("templates/index.html", { root: __dirname })
  res.render("index", { siteName: siteName, searchText: searchText, arr })
})

app.get('/blog/:slug', (req, res) => {
  // res.send('Hello World!')
  let blogTitle = "Adidas why and when? "
  let blogContent = "Its a very good Brand"
  res.render("blogpost", { blogTitle: blogTitle, blogContent: blogContent })

  // we want to insert these variables in this templates without creating another index.html,so the solution is template engine
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

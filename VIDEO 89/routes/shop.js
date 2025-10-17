const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('shop home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About shop')
})

// define the about route
router.get('/shoppost/:slug', (req, res) => {
  res.send(`fetch the shoppost for ${req.params.slug}`)
})

module.exports = router
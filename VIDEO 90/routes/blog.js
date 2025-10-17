const express = require('express')
const router = express.Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}
router.use(timeLog)


// define the home page route
router.get('/', (req, res) => {
    res.send('Birds home page')
})

// define the about route
router.get('/about', (req, res) => {
    res.send('About birds')
})

module.exports = router

/*
1- Application-level Middleware
Defined using app.use() or app.METHOD()

Affects the entire app or specific routes

const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Application-level middleware');
  next();
});

2- Router-level Middleware
Works similarly to application-level middleware but is bound to an instance of express.Router()

const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Router-level middleware');
  next();
});

app.use('/api', router); // Applied only to /api routes

3- Built-in Middleware
Middleware functions bundled with Express:

express.json() – parses JSON body

express.urlencoded() – parses URL-encoded body

express.static() – serves static files

app.use(express.json());
app.use(express.static('public'));

4-Third-party Middleware
External npm packages that provide middleware functionality

Examples:

morgan – logging

cors – Cross-Origin Resource Sharing

helmet – security headers

const morgan = require('morgan');
app.use(morgan('tiny'));

5- Error-handling Middleware
Special middleware for catching and handling errors

Defined with four parameters: (err, req, res, next)

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

🧠 Summary Table
Middleware Type	      Use Case
Application-level ->	Applied to entire app or specific routes
Router-level      ->	Scoped to specific routers
Built-in	      ->  Common utilities like body parsing
Third-party       ->	External features (logging, security)
Error-handling	  ->  Catch and process errors


*/

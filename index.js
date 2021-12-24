var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

// var things = require('./things');
// var cookieParser = require('cookie-parser');

// app.get('/hello', function (req, res) {
//   res.send('Hello World!');
// });

// app.post('/hello', function (req, res) {
//   res.send("You just called the post method at '/hello'!\n");
// });

// URl Building - Implement routes with parameters and use them to influence output
// app.get('/:id', function (req, res) {
//     res.send('The id you specified is: ' + req.params.id);
// });

// app.get('/things/:name/:id', function(req, res) {
//     res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
// })

// app.use('/things', things);

// Pattern matched Routes - this will only match requests with a 5-digit long id
// app.get('/things/:id([0-9]{5})', function (req, res) {
//   res.send('id: ' + req.params.id);
// });

// app.get('*', function (req, res) {
//   res.send('Sorry, this is an invalid URL.');
// });

// Middleware functions are functions that have access to the request object (req), the response object (res). These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.

// Middleware function to log request protocol
// app.use('/things', function (req, res, next) {
//   console.log(' A request was received at ' + Date.now());

//   //This function call is very important. It tells that more processing is
//   //required for the current request and is in the next middleware function route handler.
//   next();
// });

// Route handler that sends the response
// app.get('/things', function (req, res) {
//   res.send('Things');
// });

// Order of middleware functions matters
//For example, in the following code snippet, the first function executes first, then the route handler and then the end function. This example summarizes how to use middleware before and after route handler; also how a route handler can be used as a middleware itself.

// First Middleware function before response is sent
// app.use (function(req, res, next) {
//     console.log('Start');
//     next();
// })

// Route Handler
// app.get('/', function (req, res, next) {
//     res.send('Middle');
//     next();
// })

// app.use('/', function(req, res) {
//     console.log('End');
// })

// To parse URL encoded data
// app.use(bodyParser.urlencoded({ extended: false }));

// To pares JSON data
// app.use(bodyParser.json());

// Cookie Parser
// app.use(cookieParser());

// ExpressJS - Templating
// app.set('view engine', 'pug');
// app.set('views', './views');

// app.get('/first_template', function (req, res) {
//   res.render('first_view');
// });

//Pass values to templates
// app.get('/dynamic_view', function (req, res) {
//   res.render('dynamic', {
//     name: 'ESPN',
//     url: 'http://espn.com',
//   });
// });

// Conditionals
// app.get('/conditional_view', function (req, res) {
//   res.render('conditional', {
//     user: { name: 'Steve', age: '25' },
//   });
// });

// app.get('/components', function (req, res) {
//   res.render('content');
// });

// ExpressJS - Static Files
// app.use(express.static('public'));

// app.get('/static_file_test', function (req, res) {
//   res.render('static')
// });

// Form data
app.get('/', function (req, res) {
  res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application
app.use(bodyParser.urlencoded({ extended: true }));
// form url encoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

app.post('/', function (req, res) {
  console.log(req.body);
  res.send('received your request');
});

app.listen(3000);

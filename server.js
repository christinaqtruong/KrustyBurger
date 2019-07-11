//requires express and sets it up
var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//sets up the express app for data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//set handlebars
var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//import routes
var routes = require("./controllers/burgers_controller.js")
app.use(routes);

//set up server to listen at port
app.listen(PORT, function(){
    console.log('Server listening on: http://localhost:' + PORT);
})
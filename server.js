var express = require('express');
var exphbs = require('express-handlebars');

var mysql = require('mysql');
require('dotenv').config();

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.DB_PASS,
  database: "krustyburger_db"
})

connection.connect(function(err){
    if (err){
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

app.get("/", function(req, res){
    connection.query('SELECT FROM menu', function(err, data){
        if(err){
            throw err;
        }

        res.render('index', {menu:data});
    });
});

app.post("/", function(req,res){
    connection.query('INSERT INTO menu (selection) VALUES (?)',
    [req.body.menu], function(err, result){
        if (err){
            throw err;
        }

        res.redirect("/");
    });
});

app.listen(PORT, function(){
    console.log('Server listening on: http://localhost:' + PORT);
})
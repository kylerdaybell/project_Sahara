//required
var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('index');
var morgan = require('morgan');
var path = require('path');
const bodyParser = require('body-parser');
var logincontroller = require('./controllers/LoginController.js');
require('dotenv').config();


const port = process.env.PORT
//instantiation

//setting up app
var app = express();
app.use(bodyParser.urlencoded())
app.use(morgan('tiny'));
//making the app use the public folder as static files
app.use(express.static(path.join(__dirname,'/public/')))
app.set('views','./src/views');
app.set('view engine','ejs');

//root
app.get('/',function(req,res){
  logincontroller.getroot(res,req);
});

app.post('/login',function(req,res){
  logincontroller.postlogin(res,req);
});

//setting up the app to listen on the port deffined in the env file
app.listen(port,function(){
  debug(chalk.green(`listening on ${port}`));
});


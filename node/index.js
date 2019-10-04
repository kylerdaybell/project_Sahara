//required
var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('index');
var morgan = require('morgan');
var path = require('path');
var session = require('express-session');

const bodyParser = require('body-parser');
var logincontroller = require('./controllers/LoginController.js');
var categorycontroller = require('./controllers/CategoryController.js');
require('dotenv').config();
var app = express();
app.use(session({secret: 'ssshhhhh'}));
//const port = process.env.PORT
const port = process.env.PORT || 80;
//instantiation

//setting up app

app.use(bodyParser.urlencoded());
app.use(morgan('tiny'));
//making the app use the public folder as static files
app.use(express.static(path.join(__dirname,'/public/')))
app.set('views','./src/views');
app.set('view engine','ejs');



//root
app.get('/',function(req,res){
  logincontroller.getroot(res,req);
});
//login controller

app.get('/home',function(req,res){
  logincontroller.gethome(res,req);
});

app.post('/login',function(req,res){
  logincontroller.postlogin(res,req);
});
app.get('/register',function(req,res){
  logincontroller.getregister(res,req);
});

app.post('/register',function(req,res){
  logincontroller.postregister(res,req);
});

//category controller
app.get('/categories',function(req,res){
  categorycontroller.getcategory(res,req);
});
app.get('/newcategory',function(req,res){
  categorycontroller.getaddnewcategory(res,req);
});
app.post('/addnewcategory',function(req,res){
  categorycontroller.postaddnewcategory(res,req);
});
app.get('/editcategory/:id',function(req,res){
  categorycontroller.geteditcategory(res,req);
});
app.post('/updatecategory',function(res,req){
  categorycontroller.postupdatecategory(res,req);
})
//setting up the app to listen on the port deffined in the env file
app.listen(port,function(){
  debug(chalk.green(`listening on ${port}`));
});


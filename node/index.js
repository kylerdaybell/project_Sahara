//required
var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('index');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors');
var session = require('express-session');
var whitelist = "http:/144.17.24.16";

var corsOptions={
  origin:function(origin,callback){
    if(whitelist.indexOf(origin)===-1){
      callback(null,true)
    }else{
      callback(new Error('not allowed by cors'))
    }
  }
}



const bodyParser = require('body-parser');
var logincontroller = require('./controllers/LoginController.js');
var categorycontroller = require('./controllers/CategoryController.js');
var eventcontroller = require('./controllers/EventController.js');
require('dotenv').config();


var app = express();
app.use(session({secret: 'ssshhhhh'}));
const port = process.env.PORT || 80;
//instantiation

//setting up app

app.use(bodyParser.urlencoded());
//app.use(morgan('tiny'));
//making the app use the public folder as static files
app.use(express.static(path.join(__dirname,'/public/')))
app.set('views','./src/views');
app.set('view engine','ejs');



//root
app.get('/',cors(corsOptions),function(req,res){
  logincontroller.getroot(req,res);
});
//login controller

//login controller
app.get('/home',function(req,res){
  logincontroller.gethome(req,res);
});

app.post('/login',function(req,res){
  logincontroller.postlogin(req,res);
});

app.get('/logout',function(req,res){
  logincontroller.getlogout(req,res);
});

app.get('/register',function(req,res){
  logincontroller.getregister(req,res);
});

app.post('/register',function(req,res){
  logincontroller.postregister(req,res);
});

//category controller

app.get('/categories',function(req,res){
  categorycontroller.getcategories(req,res);
});
app.get('/newcategory',function(req,res){
  categorycontroller.getaddnewcategory(req,res);
});
app.post('/addnewcategory',function(req,res){
  categorycontroller.postaddnewcategory(req,res);
});
app.get('/editcategory/:id',function(req,res){
  categorycontroller.geteditcategory(req,res);
});
app.post('/updatecategory',function(req,res){
  categorycontroller.postupdatecategory(req,res);
})
app.get('/removecategory/:id',function(req,res){
  categorycontroller.getremovecategory(res,req);
});
app.get("/categorydetails/:id",function(req,res){
  categorycontroller.getcategorydetails(req,res);
});

//event controller
app.get('/events',function(req,res){
  eventcontroller.getevents(req,res);
});

//setting up the app to listen on the port deffined in the env file
app.listen(port,function(){
  debug(chalk.green(`listening on ${port}`));
});


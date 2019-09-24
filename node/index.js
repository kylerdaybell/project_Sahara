//required
var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('index');
var morgan = require('morgan');
var path = require('path');
var logincontroller = require('./controllers/LoginController.js');
require('dotenv').config();


const port = process.env.PORT || 3000;
//instantiation
var app = express();
app.use(morgan('tiny'));

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

app.get('/port',function(req,res){
  res.write(port);
  res.end();
})




app.listen(port,function(){
  debug(chalk.green(`listening on ${port}`));
});

exports.addnametoage = (name, age)=>{
  return `${name} (${age} years old)`;
}
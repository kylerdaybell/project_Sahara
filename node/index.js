//required
var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('index');
var morgan = require('morgan');
var path = require('path');
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
  res.render('index',{title:"my title"});
})

app.get('/port',function(req,res){
  res.write(port);
})

app.listen(port,function(){
  debug(chalk.green(`listening on ${port}`));
});
var UserModel = require('./../models/UserModel');

var LoginController ={
    getroot: function(res,req){
        return res.render('index',{title:"project sahara"});
    },
    postlogin: function(res,req){
        if(UserModel.login(req.body.username,req.body.password)){
            return res.render('home');
        }else{
            return res.render('index',{title:"bad login"});
        }
    },
    postRegister: function(res,req){
        if( "newusercreated"==UserModel.Register(res.body.username,res.body.password,res.body.confirm)){
            return res.render('index',{title:""});
        }else{
            return res.render('register',{title:"failed to create username"});
        }
    }
}

module.exports = LoginController;
var SaharaSQLService = require('./../services/SaharaSQLService');

var LoginController ={
    getroot: function(res,req){
        return res.render('index',{title:"project sahara"});
    },
    postlogin: function(res,req){
        if(SaharaSQLService.attemptlogin(req.body.username,req.body.password)){
            return res.render('home');
        }else{
            return res.render('index',{title:"bad login"});
        }
    },
    postRegister: function(res,req){
        SaharaSQLService.attemptlogin
    }
}

module.exports = LoginController;
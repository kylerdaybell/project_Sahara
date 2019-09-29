var UserModel = require('./../models/UserModel');

UserModel.constructor(require('./../services/SaharaSQLService'));


var LoginController ={
    getroot: function(res,req){
        return res.render('index',{title:"project sahara",display:false});
    },
    getregister: function(res,req){
        return res.render('register',{title:"project sahara",display:false});
    },
    postlogin: async function(res,req){
        if(await UserModel.login(req.body.username,req.body.password)){
            return res.render('home');
        }else{
            return res.render('index',{title:"your username or password is incorrect",display:true});
        }
    },
    postRegister: async function(res,req){
        if("newusercreated"==await UserModel.Register(res.body.username,res.body.password,res.body.confirm)){
            return res.render('index',{title:"",display:false});
        }else{
            return res.render('register',{title:"failed to create username",display:true});
        }
    }
}

module.exports = LoginController;
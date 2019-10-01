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
            req.session.username = req.body.username;
            return res.render('home');
        }else{
            return res.render('index',{title:"your username or password is incorrect",display:true});
        }
    },
    postregister: async function(res,req){
        var usercreationstatus = await UserModel.Register(req.body.username,req.body.password,req.body.confirm)
        if(usercreationstatus = "newusercreated"){
            return res.render('index',{title:"",display:false});
        }else{
            return res.render('register',{title:usercreationstatus,display:true});
        }
    }
}

module.exports = LoginController;
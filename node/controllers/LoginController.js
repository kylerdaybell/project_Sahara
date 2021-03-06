var UserService = require('../services/UserService');
UserService.constructor(require('./../services/SaharaSQLService'));

let myPeople = "go";
var LoginController ={
    getroot: function(req,res){
        return res.render('index',{title:"project sahara",display:false});
    },
    gethome: function(req,res){
        if(req.session.username != null){
            return res.render('home',{title:"project sahara",display:false});
        }else{
            return res.render('index',{title:"please login to see this page",display:true});
        }

    },
    getregister: function(req,res){
        return res.render('register',{title:"project sahara",display:false});
    },
    postlogin: async function(req,res){
        if(await UserService.login(req.body.username,req.body.password)){
            req.session.username = req.body.username;
            return res.render('home',{title:"project sahara",display:true});
        }else{
            return res.render('index',{title:"your username or password is incorrect",display:true});
        }
    },
    postregister: async function(req,res){
        let  usercreationstatus = await UserService.Register(req.body.username,req.body.password,req.body.confirm)
        if(usercreationstatus = "newusercreated"){
            return res.render('index',{title:"",display:false});
        }else{
            return res.render('register',{title:usercreationstatus,display:true});
        }
    },
    getlogout: function(req,res){
        req.session.destroy();
        return res.render('index',{title:"project sahara",display:false});
    }
}

module.exports = LoginController;
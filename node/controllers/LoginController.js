var LoginController ={
    getroot: function(res,req){
        return res.render('index',{title:"my title"});
    },
    postlogin: function(res,req){
        if(req.username == "kyler" && req.password == "kyler"){
            return res.render('home');
        }else{
            return res.render('index',{title:"bad login"});
        }
    }
}

module.exports = LoginController;
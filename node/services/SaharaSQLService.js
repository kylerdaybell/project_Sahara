var SaharaSQLService ={
    login: function(username,password){
        var user = ISaharaService.GetUser(username)
        if(username == "kyler" && password == "kyler"){
            return true;
        }else{
            return false;
        }
    },
    Register: function(username,password,confirm){
        if(password == confirm){
            if(!this.GetUserName(username)){
                return "newusercreated";
            }else{
                return "usernameinuse";
            }
        }else{
            return "passwordsdonotmatch"
        }
    },
    GetUserName: function(username){
        if(username != "kyler"){
            return false;
        }else{
            return true;
        }
        
    }
    
}

module.exports = SaharaSQLService;

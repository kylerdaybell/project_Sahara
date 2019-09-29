var ISaharaService;
const bcrypt = require('bcrypt');

var UserModel ={
    constructor: function(ISaharaServiceInsert){
        ISaharaService = ISaharaServiceInsert
    },
    login: function(username,password){
        var user = ISaharaService.GetUser(username);
        
        if(bcrypt.compareSync(password,user.password)){
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

module.exports = UserModel;
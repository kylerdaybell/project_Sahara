var ISaharaService;
const bcrypt = require('bcrypt');

var UserModel ={
    constructor: function(ISaharaServiceInsert){
        ISaharaService = ISaharaServiceInsert
    },
    login: async function(username,password){
        var user = await ISaharaService.GetUser(username);
        if(password == user.password){
            return true;
        }else{
            return false;
        }
    },
    Register: async function(username,password,confirm){
        if(password == confirm){
            if(!this.GetUserName(username)){
                ISaharaService.CreateNewUser(username,password);
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
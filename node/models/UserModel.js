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
            if(!await ISaharaService.DoseUserExsist(username)){
                ISaharaService.CreateNewUser(username,password);
                return "newusercreated";
            }else{
                return "usernameinuse";
            }
        }else{
            return "passwordsdonotmatch"
        }
    }
    
}

module.exports = UserModel;
var ISaharaService;
const bcrypt = require('bcrypt');

var UserService ={
    constructor: function(ISaharaServiceInsert){
        ISaharaService = ISaharaServiceInsert
    },
    login: async function(username,password){
        var user = await ISaharaService.GetUser(username);
        if(bcrypt.compareSync(password,user.password)){
            return true;
        }else{
            return false;
        }
    },
    Register: async function(username,password,confirm){
        if(password == confirm){
            if(await ISaharaService.DoseUserExsist(username)){
                ISaharaService.CreateNewUser(username,password);
                return "usernameinuse";
            }else{
                return "newusercreated";
            }
        }else{
            return "passwordsdonotmatch";
        }
    },
    getUserId: async function(username){
        userid = ISaharaService.getUserId(user);
        return userid;
    }
    
}

module.exports = UserService;
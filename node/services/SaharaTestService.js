const bcrypt = require('bcrypt');

class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
}

var SaharaTestService ={
    GetUser: function(username){
        if(username = "kyler"){
            var encryptedpassword = bcrypt.hashSync("kyler",10);
            const user = new User("kyler",encryptedpassword);
            
            return user;
        }
    },
    DoseUserExsist: function(username){
        if(username == "kyler"){
            return true;
        }else{
            return false;
        }   
    },
    CreateNewUser: function(username,password){
        return;
    }
}

module.exports = SaharaTestService;

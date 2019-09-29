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
    }
}

module.exports = SaharaTestService;

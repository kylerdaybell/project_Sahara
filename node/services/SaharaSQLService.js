require('dotenv').config();
const DB = process.env.DB;
const bcrypt = require('bcrypt');

class User{
    constructor(username,password){
        this.username =username;
        this.password= password;
    }
}

var SaharaSQLService ={
    GetUser: function(username){
        if(username = "kyler.daybell96@gmail.com"){
            var encryptedpassword = bcrypt.hashSync("9479",10);
            const user = new User("9479",encryptedpassword);
            
            return user;
        }
    }
}
module.exports = SaharaSQLService;

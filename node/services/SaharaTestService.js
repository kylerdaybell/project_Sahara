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
    getUserId: function(username){
        if(username=="kyler"){
            return "1";
        }else{
            return null;
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
    },
    getAllCategories: function(username){
        if(username == 'kyler'){
            return ['home','school'];
        }else if(username == 'bob'){
            return [];
        }
    },
    addNewCategory: async function(username,title,discription,color){
        return true;
    }


}

module.exports = SaharaTestService;

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
    },
    updateCategory:async function(id,title,description,color){
        return true;
    },
    getUserId: async function(username){
        if(username === "kyler"){
            return 1;
        }else{
            return 0;
        }
    },
    getCategory: async function(id){
        if(id == 1){
            var category = [];
            category[0]={'USER_ID':1};
            return category;
        }else{
            var category = [];
            category[0]={'USER_ID':2};
            return category;
        }

        
    }

}

module.exports = SaharaTestService;

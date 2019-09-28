var SaharaSQLService ={
    login: function(username,password){
        //this is where we would contact the database and verify the user
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

//this should be removed as soon as other tests are written
exports.addnametoage = (name, age)=>{
    return `${name} (${age} years old)`;
}

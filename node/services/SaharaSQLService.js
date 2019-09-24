var SaharaSQLService ={
    attemptlogin: function(username,password){
        //this is where we would contact the database and verify the user
        if(username == "kyler" && password == "kyler"){
            return true;
        }else{
            return false;
        }
    },
    postRegister: function(res,req){

    }
}

module.exports = SaharaSQLService;
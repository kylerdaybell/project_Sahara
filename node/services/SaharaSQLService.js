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

//this should be removed as soon as other tests are written
exports.addnametoage = (name, age)=>{
    return `${name} (${age} years old)`;
  }

module.exports = SaharaSQLService;
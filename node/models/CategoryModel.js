var ISaharaService;
const bcrypt = require('bcrypt');

var UserModel ={
    constructor: function(ISaharaServiceInsert){
        ISaharaService = ISaharaServiceInsert
    },
    getAllCategories: async function(username){
        categories = await ISaharaService.getAllCategories(username);
        return categories;
    },
    addNewCategory: async function(username,title,discription,color){
        added = ISaharaService.addNewCategory(username,title,discription,color);
        return added;
    },
    getCategory: async function(username,id){
        category = await ISaharaService.getCategory(id);
        userid = await ISaharaService.getUserId(username);
        //this is a problem because we get kicked out with the == on the line below
        if(userid = category[0]['USER_ID']){
            return category[0];
        }else{
            return null;
        }

    }
    
}

module.exports = UserModel;
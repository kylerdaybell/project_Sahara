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
    }
    
}

module.exports = UserModel;
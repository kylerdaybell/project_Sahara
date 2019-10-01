var ISaharaService;
const bcrypt = require('bcrypt');

var UserModel ={
    constructor: function(ISaharaServiceInsert){
        ISaharaService = ISaharaServiceInsert
    },
    getAllCategories: async function(username){
        categories = await ISaharaService.getAllCategories(username);
        return categories;
    }
    
}

module.exports = UserModel;
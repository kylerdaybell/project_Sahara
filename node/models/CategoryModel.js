var ISaharaService;
const bcrypt = require('bcrypt');

var UserModel ={
    constructor: function(ISaharaServiceInsert){
        ISaharaService = ISaharaServiceInsert
    },
    getAllCategorys: async function(username){
        categorys = await ISaharaService.getAllCategorys(username);
        return categorys;
    }
    
}

module.exports = UserModel;
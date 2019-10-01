var ISaharaService;
const bcrypt = require('bcrypt');

var UserModel ={
    constructor: function(ISaharaServiceInsert){
        ISaharaService = ISaharaServiceInsert
    },
    getAllCategorys: function(username){
        categorys = ISaharaService.getAllCategorys(username);
        return categorys;
    }
    
}

module.exports = UserModel;
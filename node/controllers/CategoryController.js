var CategoryModel = require('../models/UserModel');
var session = require('express-session');
CategoryModel.constructor(require('../services/SaharaSQLService'));


var CategoryController ={
    getcategory: function(res,req){
        return res.render('category',{title:req.session.username,display:true});
    }
}

module.exports = CategoryController;
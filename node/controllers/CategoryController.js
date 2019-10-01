var CategoryModel = require('../models/CategoryModel');
CategoryModel.constructor(require('../services/SaharaSQLService'));


var CategoryController ={
    getcategory: async function(res,req){
        Categorys = await CategoryModel.getAllCategorys(req.session.username);
        return res.render('category',{title:Categorys,display:true});
    }
}

module.exports = CategoryController;
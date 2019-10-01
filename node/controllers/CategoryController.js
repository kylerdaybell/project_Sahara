var CategoryModel = require('../models/CategoryModel');
CategoryModel.constructor(require('../services/SaharaSQLService'));


var CategoryController ={
    getcategory: async function(res,req){
        if(req.session.username != null){
            categories = await CategoryModel.getAllCategories(req.session.username);
            return res.render('category',{title:categories,display:true});
        }
        return res.render('index',{title:"please login to see this page",display:true});
    }
}

module.exports = CategoryController;
var CategoryModel = require('../models/CategoryModel');
CategoryModel.constructor(require('../services/SaharaSQLService'));


var CategoryController ={
    getcategory: async function(res,req){
        if(req.session.username != null){
            categories = await CategoryModel.getAllCategories(req.session.username);
            return res.render('category',{title:categories,display:true});
        }
        return res.render('index',{title:"please login to see this page",display:true});
    },
    getaddnewcategory: function(res,req){
        if(req.session.username != null){
            return res.render('newcategory');
        }
        return res.render('index',{title:"please login to see this page",display:true});
    },
    postaddnewcategory: async function(res,req){
        if(req.session.username != null){
            added = CategoryModel.addNewCategory(req.session.username,req.body.title,req.body.discription,req.body.color);
            if(added){
                this.getcategory(res,req);
                return;
            }
        }
        return res.render('index',{title:"please login to see this page",display:true});
    }
}

module.exports = CategoryController;
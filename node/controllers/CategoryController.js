var CategoryService = require('../services/CategoryService');
var UserModel = require('../services/UserModel');
CategoryService.constructor(require('../services/SaharaSQLService'));
UserModel.constructor(require('./../services/SaharaSQLService'));

var CategoryController ={
    getcategory: async function(res,req){
        if(req.session.username != null){
            categories = await CategoryService.getAllCategories(req.session.username);
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
            added = CategoryService.addNewCategory(req.session.username,req.body.title,req.body.description,req.body.color);
            if(added){
                return res.redirect('/categories');
            }
        }
        return res.render('index',{title:"please login to see this page",display:true});
    },
    geteditcategory: async function(res,req){
        if(req.session.username != null){
            var id = req.params.id;
            category = await CategoryService.getCategory(req.session.username,id);
            if(category!=null){
                return res.render('editcategory',{editcategory:category});
            }
        }
        return res.render('index',{title:"please login to see this page",display:true});
    },    
    postupdatecategory: async function(res,req){
        if(req.session.username != null){
            category = await CategoryService.updateCategory(req.session.username,req.body.id,req.body.title,req.body.description,req.body.color);
            if(category!=null){
                return res.redirect('/categories');
            }
        }else{
            return res.render('index',{title:"please login to see this page",display:true});     
        }

    },
    getremovecategory: async function(res,req){
        if(req.session.username != null){
            category = await CategoryService.removeCategory(req.session.username,req.params.id);
            if(category!=null){
                return res.redirect('/categories');
            }
        }else{
            return res.render('index',{title:"please login to see this page",display:true});     
        }

    }
}

module.exports = CategoryController;
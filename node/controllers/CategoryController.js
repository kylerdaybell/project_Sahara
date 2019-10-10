var CategoryService = require('../services/CategoryService');
var UserService = require('../services/UserService');
CategoryService.constructor(require('../services/SaharaSQLService'));
UserService.constructor(require('./../services/SaharaSQLService'));

var CategoryController ={
    getcategories: async function(req,res){
        if(req.session.username != null){
            categories = await CategoryService.getAllCategories(req.session.username);
            return res.render('categories',{categories:categories});
        }
        return res.render('index',{title:"please login to see this page",display:true});
    },
    getaddnewcategory: function(req,res){
        if(req.session.username != null){
            return res.render('newcategory');
        }
        return res.render('index',{title:"please login to see this page",display:true});
    },
    postaddnewcategory: async function(req,res){
        if(req.session.username != null){
            added = CategoryService.addNewCategory(req.session.username,req.body.title,req.body.description,req.body.color);
            if(added){
                return res.redirect('/categories');
            }
        }
        return res.render('index',{title:"please login to see this page",display:true});
    },
    geteditcategory: async function(req,res){
        if(req.session.username != null){
            var id = req.params.id;
            category = await CategoryService.getCategory(req.session.username,id);
            if(category!=null){
                return res.render('editcategory',{category:category});
            }
        }
        return res.render('index',{title:"please login to see this page",display:true});
    },    
    postupdatecategory: async function(req,res){
        if(req.session.username != null){
            category = await CategoryService.updateCategory(req.session.username,req.body.id,req.body.title,req.body.description,req.body.color);
            if(category!=null){
                return res.redirect('/categories');
            }
        }else{
            return res.render('index',{title:"please login to see this page",display:true});     
        }

    },
    getremovecategory: async function(req,res){
        if(req.session.username != null){
            category = await CategoryService.removeCategory(req.session.username,req.params.id);
            if(category!=null){
                return res.redirect('/categories');
            }
        }else{
            return res.render('index',{title:"please login to see this page",display:true});     
        }

    },
    getcategorydetails: async function(req,res){
        if(req.session.username != null){
            category = await CategoryService.getCategory(req.session.username,req.params.id);
            if(category!=null){
                return res.render('categorydetail',{category:category});
            }
        }else{
            return res.render('index',{title:"please login to see this page",display:true});     
        }

    }
}

module.exports = CategoryController;
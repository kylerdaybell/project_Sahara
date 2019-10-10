var ISaharaService;
const bcrypt = require('bcrypt');
const Category = require('../models/CategoryModel.js');

var CategoryService ={
    constructor: function(ISaharaServiceInsert){
        ISaharaService = ISaharaServiceInsert
    },
    getAllCategories: async function(username){
        categoriesarray = await ISaharaService.getAllCategories(username);
        var categories=[];
        for(var i=0; i < categoriesarray.length; i++){
            var category = new Category(categoriesarray[i]['ID'],categoriesarray[i]['USER_ID'],categoriesarray[i]['TITLE'],categoriesarray[i]['COLOR'],categoriesarray[i]['DISCRIPTION']);
            categories.push(category);
        }
        return categories;
    },
    addNewCategory: async function(username,title,discription,color){
        added = ISaharaService.addNewCategory(username,title,discription,color);
        return added;
    },
    getCategory: async function(username,id){
        categoryarray = await ISaharaService.getCategory(id);
        userid = await ISaharaService.getUserId(username);
        if(userid == categoryarray[0]['USER_ID']){
            var category = new Category(categoryarray[0]['ID'],categoryarray[0]['USER_ID'],categoryarray[0]['TITLE'],categoryarray[0]['COLOR'],categoryarray[0]['DISCRIPTION']);
            return category;
        }else{
            return null;
        }

    },    
    updateCategory: async function(username,id,title,description,color){
        category = await ISaharaService.getCategory(id);
        userid = await ISaharaService.getUserId(username);
        if(userid == category[0]['USER_ID']){
            categorychanged = await ISaharaService.updateCategory(id,title,description,color);
            return categorychanged;
        }else{
            return false;
        }
    },
    removeCategory: async function(username,id){
        category = await ISaharaService.getCategory(id);
        userid = await ISaharaService.getUserId(username);
        if(true){
            categorychanged = await ISaharaService.removeCategory(id);
            return categorychanged;
        }else{
            return false;
        }
    }
    
}

module.exports = CategoryService;
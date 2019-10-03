var SaharaTestService = require('../services/SaharaTestService');
var CategoryModel = require('../models/CategoryModel');
CategoryModel.constructor(SaharaTestService);

test('Given a valid username and the user has created a category before the category model should return at least one category',async ()=>{
    categories = await CategoryModel.getAllCategories('kyler');
    expect(categories.length).toBeGreaterThan(0);
})

test('Given an invalid username the Category Model should return an empty list',async ()=>{
    categories = await CategoryModel.getAllCategories('bob');
    expect(categories.length).toBeLessThanOrEqual(0);
})

test('Given a user is logged in that user can add catagories to the database',async ()=>{
    WasCategoryAdded = await CategoryModel.addNewCategory('username','category name','category description','color');
    expect(WasCategoryAdded).toBe(true);
})

test('givin a valid category id a user who owns that category can edit and update it',async ()=>{
    WasCategoryEdited = await CategoryModel.EditCategory('username','category id','category name','category description','color');
    expect(WasCategoryAdded).toBe(true);
})

test('givin an invalid category id a user who owns that category can not edit and update it',async ()=>{
    WasCategoryEdited = await CategoryModel.EditCategory('username','bad_category id','category name','category description','color');
    expect(WasCategoryAdded).toBe(false);
})
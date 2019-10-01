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
    WasCatagoryAdded = await CategoryModel.addNewCategory('username','catagory name','catagory discription','color');
    expect(WasCatagoryAdded).toBe(true);
})
var SaharaTestService = require('../services/SaharaTestService');
var CategoryModel = require('../models/CategoryModel');
CategoryModel.constructor(SaharaTestService);

test('Given a valid username and the user has created a category before the category model should return at least one category',()=>{
    Categorys = CategoryModel.getAllCategorys('kyler');
    expect(Categorys.length).toBeGreaterThan(0);
})

test('Given an invalid username the Category Model should return an empty list',()=>{
    Categorys = CategoryModel.getAllCategorys('bob');
    expect(Categorys.length).toBeLessThanOrEqual(0);
})
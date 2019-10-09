var SaharaTestService = require('../services/SaharaTestService');
var CategoryModel = require('../services/CategoryService');
CategoryModel.constructor(SaharaTestService);

test('Given a valid username and the user has created a category before the category model should return at least one category',async ()=>{
    let categories = await CategoryModel.getAllCategories('kyler');
    expect(categories.length).toBeGreaterThan(0);
})

test('Given an invalid username the Category Model should return an empty list',async ()=>{
    let categories = await CategoryModel.getAllCategories('bob');
    expect(categories.length).toBeLessThanOrEqual(0);
})

test('Given a user is logged in that user can add catagories to the database',async ()=>{
    let WasCategoryAdded = await CategoryModel.addNewCategory('username','category name','category description','color');
    expect(WasCategoryAdded).toBe(true);
})

test('givin a valid category id a user who owns that category can edit and update it',async ()=>{
    let WasCategoryEdited = await CategoryModel.updateCategory('kyler',1,'category name','category description','color');
    expect(WasCategoryEdited).toBe(true);
})

//this is a broken test we should really expect false
test('givin an invalid category id a user who owns that category can not edit and update it',async ()=>{
    let WasCategoryEdited = await CategoryModel.updateCategory('bob',5,'category name','category description','color');
    expect(WasCategoryEdited).toBe(false);
})

test('givin a valid username the user can delete a category',async ()=>{
    let WasCategoryEdited = await CategoryModel.removeCategory('kyler',1);
    expect(WasCategoryEdited).toBe(true);
})



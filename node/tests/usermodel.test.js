var UserModel = require('../models/UserModel');

test('the UserModel login successful with valid username and password',()=>{
    var result = UserModel.login("kyler","kyler");
    expect(result).toBe(true);
})

test('the UserModel login unsuccessful with an invalid username and password',()=>{
    var result = UserModel.login('badusername','badusername');
    expect(result).toBe(false);
})

test('the UserModel registration successful with new user and matching passwords',()=>{
    var result = UserModel.Register("bob","Thisisapassword","Thisisapassword");
    expect(result).toBe("newusercreated");
})

test('the UserModel registration unsuccessful with an existing user and matching passwords',()=>{
    var result = UserModel.Register("kyler","Thisisapassword","Thisisapassword");
    expect(result).toBe("usernameinuse");
})

test('the UserModel registration unsuccessful with an new user and missmatching passwords',()=>{
    var result = UserModel.Register("kyler","Thisisapassword1","Thisisapassword");
    expect(result).toBe("passwordsdonotmatch");
})
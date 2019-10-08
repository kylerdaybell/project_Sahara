var UserModel = require('../services/UserModel');
UserModel.constructor(require('../services/SaharaTestService'))

test('the UserModel login successful with valid username and password',async()=>{
    var result = await UserModel.login("kyler","kyler");
    expect(result).toBe(true);
})

test('the UserModel login unsuccessful with an invalid username and password',async()=>{
    var result = await UserModel.login('badusername','badusername');
    expect(result).toBe(false);
})

test('the UserModel registration successful with new user and matching passwords',async()=>{
    var result = await UserModel.Register("bob","Thisisapassword","Thisisapassword");
    expect(result).toBe("newusercreated");
})

test('the UserModel registration unsuccessful with an existing user and matching passwords',async()=>{
    var result = await UserModel.Register("kyler","Thisisapassword","Thisisapassword");
    expect(result).toBe("usernameinuse");
})

test('the UserModel registration unsuccessful with an new user and missmatching passwords',async()=>{
    var result = await UserModel.Register("kyler","Thisisapassword1","Thisisapassword");
    expect(result).toBe("passwordsdonotmatch");
})
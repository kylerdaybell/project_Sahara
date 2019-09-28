var SaharaSQLService = require('../services/SaharaSQLService');

test('the SaharaSQLService login successful with valid username and password',()=>{
    var result = SaharaSQLService.login('kyler','kyler');
    expect(result).toBe(true);
})

test('the SaharaSQLService login unsuccessful with an invalid username and password',()=>{
    var result = SaharaSQLService.login('badusername','badusername');
    expect(result).toBe(false);
})

test('the SaharaSQLService registration successful with new user and matching passwords',()=>{
    var result = SaharaSQLService.Register("bob","Thisisapassword","Thisisapassword");
    expect(result).toBe("newusercreated");
})

test('the SaharaSQLService registration successful with an existing user and matching passwords',()=>{
    var result = SaharaSQLService.Register("kyler","Thisisapassword","Thisisapassword");
    expect(result).toBe("usernameinuse");
})
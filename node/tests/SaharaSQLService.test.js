var SaharaSQLService = require('../services/SaharaSQLService');
const bcrypt = require('bcrypt');

test('when the username kyler is input the password returned should be kyler',async ()=>{
    user = await SaharaSQLService.GetUser('kyler');
    passwordsmatch = ("kyler" == user.password);
    expect(passwordsmatch).toBe(true);
})
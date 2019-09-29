var SaharaSQLService = require('../services/SaharaSQLService');
const bcrypt = require('bcrypt');

test('when the username kyler.daybell96@gmail.com is input the password returned should be 9479',async ()=>{
    user = await SaharaSQLService.GetUser('kyler.daybell96@gmail.com');
    passwordsmatch = bcrypt.compareSync("9479",user.password)
    expect(passwordsmatch).toBe(true);
})
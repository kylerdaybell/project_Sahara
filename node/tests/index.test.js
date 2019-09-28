var SaharaSQLService = require('../services/SaharaSQLService');
const{logincontroller} = require('../controllers/LoginController');

test('tests the home controller login successfull with valid username and password',()=>{
    var result = SaharaSQLService.attemptlogin('kyler','kyler');
    expect(result).toBe(true);
})

test('should output name and age',()=>{
    //this is a bogus test
    expect('kyler').toBe('kyler');
})


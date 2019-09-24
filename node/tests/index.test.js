const{addnametoage} = require('../index');

test('should output name and age',()=>{
    const text = addnametoage('kyler',22);
    expect(text).toBe('kyler (22 years old)');
})

test('bad test',()=>{
    const text = addnametoage('kyler',21);
    expect(text).toBe('kyler (21 years old)');
})
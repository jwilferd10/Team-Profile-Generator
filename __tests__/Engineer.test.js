const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

// Test for engineer object 
test('create and test engineer object', () => {
    const engineer = new Engineer('Test', 'Test@example.com', 1, 'Engineer', 'testHub');

    expect(engineer.name).toBe('Test');
    expect(engineer.email).toBe('Test@example.com');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('testHub');
});

// Test for property of github 
test('test getGitHub to see if method works', () => {
    const engineer = new Engineer('Test', 'Test@example.com', 1, 'Engineer', 'testHub');
    expect(engineer.getGitHub()).toEqual('testHub');
});

// run test for getRole() and return engineer
test('test getRole to return engineer title', () => {
    const engineer = new Engineer('Test', 'Test@example.com', 1, 'Engineer', 'testHub');
    expect(engineer.getRole()).toEqual('Engineer');
});
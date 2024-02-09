const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

// Test for engineer object 
test('create and test engineer object', () => {
    const employee = new Employee('Test');
    const engineer = new Engineer();

    expect(employee.name).toEqual('Test');
});

// Test for property of github 
test('test getGitHub to see if method works', () => {
    const engineer = new Engineer();

    const userGitHub =  engineer.getGitHub();
    expect(userGitHub).toEqual('testGitHub');
});

// run test for getRole() and return engineer
test('test getRole to return engineer title', () => {
    const employee = new Employee('', 'Engineer');

    expect(employee.role).toEqual('Engineer');
});
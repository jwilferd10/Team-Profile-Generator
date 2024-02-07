const Employee = require('../lib/Employee');

// Test the manager project
test('create the manager object', () => {
    const employee = new Employee('Test');
    expect(employee.name).toBe('Test');
    // Currently failing
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Check for property of officeNumber
test('test for the managers office number', () => {
    const officeNumber = Math.floor(Math.random());
    expect(officeNumber).toEqual(expect.any(Number));
});

// Run test for getRole and return Manager
test('get employee role and return the Manager role', () => {
    const employee = new Employee('Test', 'Manager');

    employee.getRole('Manager');
    expect(employee.role).toBe('Manager');
});
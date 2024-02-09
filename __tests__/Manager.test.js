const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager')

// Test the manager project
test('create the manager object', () => {
    const employee = new Employee('Test');
    const manager = new Manager();

    expect(employee.name).toBe('Test');
    manager.getOfficeNumber();
});

// Check for property of officeNumber
test('test for the managers office number', () => {
    const manager = new Manager();
    manager.getOfficeNumber();
});

// Run test for getRole and return Manager
test('get employee role and return the Manager role', () => {
    const employee = new Employee('Test', 'Manager');

    employee.getRole('Manager');
    expect(employee.role).toBe('Manager');
});
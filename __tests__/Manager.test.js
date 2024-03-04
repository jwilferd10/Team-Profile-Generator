const Manager = require('../lib/Manager')

// Test the manager project
test('create the manager object', () => {
    const manager = new Manager('Test', 'Test@example.com', 1, 'Manager', '2');

    expect(manager.name).toBe('Test');
    expect(manager.email).toBe('Test@example.com');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toBe('2');
});

// Check for property of officeNumber
test('test for the managers office number', () => {
    const manager = new Manager('Test', 'Test@example.com', 1, 'Manager', '2');
    expect(manager.getOfficeNumber()).toEqual('2');
});

// Run test for getRole and return Manager
test('get employee role and return the Manager role', () => {
    const manager = new Manager('Test', 'Test@example.com', 1, 'Manager', '2');
    expect(manager.getRole()).toEqual('Manager');
});
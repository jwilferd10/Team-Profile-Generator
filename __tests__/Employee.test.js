// Employee is a Parent Class that will contain properties and results from methods
const Employee = require('../lib/Employee');

// Test for employee name, id, and email
test('creates an employee object', () => {
    const employee = new Employee('Test', 'testEmail@test.com', 1, 'Employee');

    expect(employee.name).toBe('Test');
    expect(employee.email).toBe('testEmail@test.com');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.role).toBe('Employee');
});


// Test method for getting employee name. 
test('get employee name using getName method', () => {
    const employee = new Employee('Test');
    expect(employee.name).toBe('Test');
});

// Test method for getting employee id
test('get employee id', () => {
    const testID = 123;
    const employee = new Employee('Test', 'testEmail@test.com', testID);
    expect(employee.id).toEqual(expect.any(Number));
});

// Test method for getting employee email
test('get employee email using getEmail method', () => {
    const testEmail = 'testEmail@test.com'
    const employee = new Employee('Test', testEmail);
    const emailResult = employee.getEmail();
    expect(emailResult).toBe('testEmail@test.com');
});


// Test method for getRole (return Employee)
test('get employee role and return generic Employee role', () => {
    const employee = new Employee('Test');
    const employeeRole = employee.getRole();
    expect(employeeRole).toBe('Employee');
});
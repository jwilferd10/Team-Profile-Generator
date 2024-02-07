// Employee is a Parent Class that will contain properties and results from methods
const Employee = require('../lib/Employee');

// Test for employee name, id, and email
test('creates an employee object', () => {
    const employee = new Employee('Test');

    expect(employee.name).toBe('Test');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('testEmail@test.com');
});


// Test method for getting employee name. 
test('get employee name using getName method', () => {
    const employee = new Employee('Test');
    expect(employee.name).toBe('Test');
});

// Test method for getting employee id
test('get employee id using getID method', () => {
    const employee = new Employee('Test');
    const idResult = employee.getID();
    expect(idResult).toEqual(expect.any(Number));
});

// Test method for getting employee email
test('get employee email using getEmail method', () => {
    const employee = new Employee('Test');
    const emailResult = employee.getEmail();
    expect(emailResult).toBe('testEmail@test.com');
});


// Test method for getRole (return Employee)
test('get employee role and return generic Employee role', () => {
    const employee = new Employee('Test');
    const employeeRole = employee.getRole();
    expect(employeeRole).toBe('Employee');
});
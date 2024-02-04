// Employee is a Parent Class that will contain properties and results from methods

// Test for employee name, id, and email
test('creates an employee object', () => {
    const employee = new Employee('Test');

    expect(employee.name).toBe('Test');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('testEmail@test.com');
});


// Test method for getting employee name. 

// Test method for getting employee id

// Test method for getting employee email

// Test method for getRole (return Employee
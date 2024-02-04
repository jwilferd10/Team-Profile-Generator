// Employee is a Parent Class that will contain properties and results from methods

// Test for employee name, id, and email
test('creates an employee object', () => {
    const employee = new Employee('Test');

    expect(employee.name).toBe('Test');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('testEmail@test.com');
});


// Test method for getting employee name. 
test('get employee name using getName method', () => {
    const employeeName = 'Bobby Testmaster';
    const employee = new Employee(employeeName);

    const result = employee.getName();
    expect(result).toBe(employeeName);
});

// Test method for getting employee id
test('get employee id using getID method', () => {
    const idResult = employee.getID();
    expect(idResult).toEqual(expect.any(Number));
});

// Test method for getting employee email
test('get employee email using getEmail method', () => {
    const employeeEmail = 'testEmail@test.com';

    const emailResult = employee.getEmail();
    expect(emailResult).toBe(employeeEmail);
});


// Test method for getRole (return Employee)
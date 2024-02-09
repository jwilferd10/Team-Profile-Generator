const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

// Test the intern object
test('create the intern object', () => {
    const employee = new Employee('Test', 'Intern');
    const intern = new Intern('UCLA');

    expect(employee.name).toBe('Test');
    expect(employee.role).toBe('Intern');
    expect(intern.school).toBe('UCLA');
});

// Test for getSchool() method
test('Test for the interns school', () => {
    const intern = new Intern();
    intern.getSchool();
});

// Test for getRole and return 'intern'
test('get employee role and return the Intern position', () => {
    const employee = new Employee();
    employee.getRole('Intern');
    expect(employee.role).toBe('Intern');
});
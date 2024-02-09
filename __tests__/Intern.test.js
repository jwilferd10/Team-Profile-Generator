const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

// Test the intern object
test('create the intern object', () => {
    const employee = new Employee('Test', 'Intern');
    const intern = new Intern();

    expect(employee.name).toBe('Test');
    expect(employee.role).toBe('Intern');

    // Check for property of school
})

// Test for getSchool() method
// test('Test for the interns school', () => {

// });

// Test for getRole and return 'intern'
// test('get employee role and return the Intern position', () => {

// });
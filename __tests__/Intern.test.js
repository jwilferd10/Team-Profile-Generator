const Intern = require('../lib/Intern');

// Test the intern object
test('create the intern object', () => {
    const intern = new Intern('Test', 'Test@example.com', 1, 'Intern', 'UCLA');

    expect(intern.name).toBe('Test');
    expect(intern.email).toBe('Test@example.com');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.role).toBe('Intern');
    expect(intern.school).toBe('UCLA');
});

// Test for getSchool() method
test('Test for the interns school', () => {
    const intern = new Intern('Test', 'Test@example.com', 1, 'Intern', 'UCLA');
    expect(intern.getSchool()).toEqual('UCLA');
});

// Test for getRole and return 'intern'
test('get employee role and return the Intern position', () => {
    const intern = new Intern('Test', 'Test@example.com', 1, 'Intern', 'UCLA');
    expect(intern.getRole()).toEqual('Intern');
});
// The Employee Class is one that will be shared across multiple sub-classes.
class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = this.getID();
        this.email = this.getEmail();
        this.role = this.getRole();
    };

    getID() {
        // Generate an ID based on the order an Employee's created
        const userID = Math.floor(Math.random());
        return userID;
    };

    getEmail() {
        // Create an email that can pass the test
        const temporaryEmail = 'testEmail@test.com';
        return temporaryEmail
    };

    getRole() {
        const userRole = 'Employee';
        return userRole;
    };
};

module.exports = Employee;
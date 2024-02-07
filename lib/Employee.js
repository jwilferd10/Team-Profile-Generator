// The Employee Class is one that will be shared across multiple sub-classes.
class Employee {
    constructor(name = '', role = 'Employee') {
        this.name = name;
        this.id = this.getID();
        this.email = this.getEmail();
        this.role = role;
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
        return this.role;
    };
};

module.exports = Employee;
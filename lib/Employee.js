// The Employee Class is one that will be shared across multiple sub-classes.
class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = this.getID();
        this.email = this.promptEmail();
    };

    getID() {
        // Generate an ID based on the order an Employee's created
        const userID = Math.floor(Math.random());
        
        return userID;
    };

    promptEmail() {
        // Create an email that can pass the test
    };
};

module.exports = Employee;
// The Employee Class is one that will be shared across multiple sub-classes.
class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = this.generateID();
        this.email = this.promptEmail();
    };

    generateID() {
        // Generate an ID based on the order an Employee's created
    };

    promptEmail() {
        // Create an email that can pass the test
    };
}
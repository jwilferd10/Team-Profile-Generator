// The Employee Class is one that will be shared across multiple sub-classes.
class Employee {
    constructor(name = '', email = '', role = 'Employee') {
        this.name = name;
        this.email = email;
        this.id = this.getID();
        this.role = role;
    };

    getID() {
        // Generate an ID based on the order an Employee's created
        const userID = 1
        return userID;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Employee;
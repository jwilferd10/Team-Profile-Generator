// The Employee Class is one that will be shared across multiple sub-classes.
class Employee {
    constructor(name = '', email = '', id, role = 'Employee') {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Employee;
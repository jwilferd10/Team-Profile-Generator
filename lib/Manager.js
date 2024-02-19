const Employee = require('./Employee');

// Create manager class and constructor
class Manager extends Employee {
    constructor(name, email, id, role, officeNumber = '') {
        super(name, email, id, role);
        this.officeNumber = officeNumber;
    };

    // Create getOfficeNumber();
    getOfficeNumber() {
        return this.officeNumber;
    };
};

module.exports = Manager;
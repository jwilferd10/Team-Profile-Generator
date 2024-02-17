const Employee = require('./Employee');

// Create manager class and constructor
class Manager extends Employee {
    constructor(name, email, role, officeNumber = '') {
        super(name, email, role);
        this.officeNumber = officeNumber;
    }

    // Create getOfficeNumber();
    getOfficeNumber() {
        return this.officeNumber;
    };
};

module.exports = Manager;
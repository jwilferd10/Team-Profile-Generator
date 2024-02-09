// Create manager class and constructor
class Manager {
    constructor() {
        this.officeNumber = this.getOfficeNumber();
    }

    // Create getOfficeNumber();
    getOfficeNumber() {
        const officeNumber = Math.floor(Math.random());
        return officeNumber;
    };
};

const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class Generator {
    // Contains reference to employee, start of employeeID, and array to store employee objects.
    constructor() {
        this.employee;
        this.employeeID = 1; 
        this.employeeArr = [];
    };

    promptIntro() {
        console.log(
            `
              ======================
              Team Profile Generator
              ======================
            `
        );
    };
};

module.exports = Generator;
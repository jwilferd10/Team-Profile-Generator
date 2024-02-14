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
        const instructionsText = [
            {
                type: 'list',
                name: 'instructionAction',
                message: "Welcome to Team Profile Generator, to learn more just select 'Instructions' for details. Select 'Skip' to start.",
                choices: ['Continue >', 'Skip >>'],
            },
            {
                type: 'list', 
                name: 'instructionAction',
                message: "Each initially created object will start off with the Employee class.",
                choices: ['Continue >', 'Skip >>'],
            },
            {
                type: 'list', 
                name: 'instructionAction',
                message: "As you further customize your Employee, the existing object will inherit new properties from the selected role.",
                choices: ['Continue >', 'Skip >>'],
            },
            {
                type: 'list', 
                name: 'instructionAction',
                message: "Each Employee object will be added onto the employeeArr, storing the data for it to be used later.",
                choices: ['Next >>'],
            },
        ];

        let currentInstructionsIndex = 0;

        const iterateIntroduction = () => {
            const currentInstructions = instructionsText[currentInstructionsIndex]
            
            inquirer.prompt(currentInstructions).then(({ instructionAction }) => {
                if (instructionAction === 'Continue >') {
                    currentInstructionsIndex++;
                    if (currentInstructionsIndex < instructionsText.length) {
                        // Recursion until no longer necessary
                        iterateIntroduction();
                    } else {
                        this.generateEmployee();
                    } 
                } else if (instructionAction === 'Next >>' || instructionAction === 'Skip >>') {
                    this.generateEmployee();
                };
            });
        };

        iterateIntroduction();
    };

    generateEmployee() {
        console.log(
            `
              ======================
              Team Profile Generator
              ======================
            `
        );

        // Create inquirer prompts that guides users through the creation process

        // Each class will have standalone methods for gathering data
    };

    // Generate Engineer

    // Generate Intern
    
    // Generate Manager

    // When completing a new employee, push the object to the employeeArr
        // Showcase the current state of employeeArr

        // Ask users if they would like to continue (this inovkes generateEmployee again)

        // If users select no, run a print command 
};

module.exports = Generator;
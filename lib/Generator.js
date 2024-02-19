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
              =================================
              Welcome To Team Profile Generator
              =================================
            `
        );

        const instructionsText = [
            {
                type: 'list',
                name: 'instructionAction',
                message: "To learn more select 'Continue' for details. Select 'Skip' to start.",
                choices: ['Continue >', 'Skip >>'],
            },
            {
                type: 'list', 
                name: 'instructionAction',
                message: "Each created object will start off with the Employee class.",
                choices: ['Continue >', 'Skip >>'],
            },
            {
                type: 'list', 
                name: 'instructionAction',
                message: "The existing Employee Object will inherit new properties when updating role.",
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
              ===========================
              Create Employee's Profile!
              ===========================
            `
        );

        // Collect employee name
        inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: "Enter Employee's Name:"
            },
            {
                type: 'text', 
                name: 'email',
                message: "Enter Employee's Email:"
            }
        ])
        .then(({ name, email }) => {
            // Check for employee
            if (name === '' || email === '') {
                console.log('Provide a name and email to continue.');
                return this.generateEmployee();
            } else {
                // Create Employee object with provided data
                const employeeID = this.employeeID++
            
                this.employee = new Employee(name, email, employeeID);
                console.log('===========================');
                console.log('CURRENT EMPLOYEE OBJECT');
                console.log(this.employee);
                console.log('===========================');

                inquirer.prompt(
                    {
                        type: 'list',
                        name: 'role',
                        message: `Select ${this.employee.name}'s role.`,
                        choices: ["Manager", "Engineer", "Intern"],
                    }
                )
                .then(({ role }) => {
                    const employeeRole = role;
                    switch (role) {
                        case 'Manager':
                            this.createManager(employeeRole);
                            break;
                        case 'Engineer':
                            this.createEngineer(employeeRole);
                            break;
                        case 'Intern':
                            this.createIntern(employeeRole);
                            break;
                        default:
                            console.log(`Please select a valid role.`)
                    };
                });
            };
        });
    };

    // Generate Manager
    createManager(role){
        // Collect manager's office number
        inquirer.prompt({
            type: "text",
            name: 'officeNumber',
            message: 'Enter Office Number:'
        })
        .then(({ officeNumber }) => {
            // Create new Manager instance
            const manager = new Manager(this.employee.name, this.employee.email, this.employee.id, 'Manager', officeNumber);

            console.log('===========================');
            console.log('UPDATED EMPLOYEE OBJECT');
            console.log(manager);
            console.log('===========================');

            // Push to array
            
            // Inspect Array

            // Ask if user wants to add another Employee Object.
        });
    };

    // Generate Engineer
    createEngineer(role){
        // Collect engineers github link
        inquirer.prompt({
            type: "text",
            name: 'githubUsername',
            message: 'Enter Github Username:'
        })
        .then(({ githubUsername }) => {
            const githubLink = `https://github.com/${githubUsername}`;

            const engineer = new Engineer(this.employee.name, this.employee.email, this.employee.id, 'Engineer', githubLink);

            console.log('===========================');
            console.log('UPDATED EMPLOYEE OBJECT');
            console.log(engineer);
            console.log('===========================');

            // Push to array
            
            // Inspect Array

            // Ask if user wants to add another Employee Object.
        });
    };

    // Generate Intern
    createIntern(role){
        inquirer.prompt({
            type: 'text',
            name: 'internSchool',
            message: "Enter Intern's School:"
        })
        .then(({ internSchool }) => {
            const intern = new Intern(this.employee.name, this.employee.email, this.employee.id, 'Intern', internSchool);

            console.log('===========================');
            console.log('UPDATED EMPLOYEE OBJECT');
            console.log(intern);
            console.log('===========================');
        });
    };
    
    // When completing a new employee, push the object to the employeeArr
        // Showcase the current state of employeeArr

        // Ask users if they would like to continue (this inovkes generateEmployee again)

        // If users select no, run a print command 
};

module.exports = Generator;
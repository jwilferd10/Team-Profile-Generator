const inquirer = require('inquirer');
const generatePage = require('../src/page-template');
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
                        message: `Select ${this.employee.name}'s role:`,
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
            // Create new manager and push into employeeArr
            const manager = new Manager(this.employee.name, this.employee.email, this.employee.id, 'Manager', officeNumber);
            this.employeeArr.push(manager);
            this.checkGeneration();
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
            // Collect githubLink, create new engineer and push into employeeArr
            const githubLink = `https://github.com/${githubUsername}`;
            const engineer = new Engineer(this.employee.name, this.employee.email, this.employee.id, 'Engineer', githubLink);
            this.employeeArr.push(engineer);
            this.checkGeneration();
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
            // Create new intern and push into employeeArr
            const intern = new Intern(this.employee.name, this.employee.email, this.employee.id, 'Intern', internSchool);
            this.employeeArr.push(intern);
            this.checkGeneration();
        });
    };
    
    checkGeneration() {
        console.log('===========================');
        console.log('CURRENT EMPLOYEE ARRAY:');
        console.table(this.employeeArr);
        console.log('===========================');

        inquirer.prompt({
            type: 'list', 
            name: 'addMore',
            message: "Would you like to create another employee?",
            choices: ['Yes >', 'No >>'],
        })
        .then(({ addMore }) => {
            if (addMore === 'Yes >') {
                this.generateEmployee();
            } else if (addMore === 'No >>') {
                // Ask if users want to edit array
                this.editEmployeeArray()
            };
        });
    };

    editEmployeeArray() {
        console.log('===========================');
        console.log('CURRENT EMPLOYEE ARRAY:');
        console.table(this.employeeArr);
        console.log('===========================');

        inquirer.prompt({
            type: 'list',
            name: 'editAction',
            message: 'Last edits - What would you like to do?',
            choices: ['Print Team Profile >>', 'Remove An Employee >'],
        })
        .then(({ editAction }) => {
            if (editAction === 'Remove An Employee >') {
                // invoke the removeEmployee function
                this.removeEmployee();
            } else {
                // Return the populated employeeArr
                generatePage(this);
                console.log('Team profile successfully created, check the /dist directory!')
            }
        });
    };

    removeEmployee() {
        inquirer.prompt({
            type: 'list',
            name: 'employeeName',
            message: 'Which employee would you like to remove?',
            choices: this.employeeArr.map(employee => employee.name),
        })
        .then(({ employeeName }) => {
            // Remove the employee
            this.employeeArr = this.employeeArr.filter(employee => employee.name != employeeName);

            // Recursively call editEmployeArray
            this.editEmployeeArray();
        })
    }
};

module.exports = Generator;
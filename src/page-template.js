const writeFile = require('./generate-html.js');

// Create a function titled printEmployees
const printEmployees = (employeeArr) => {
    // Iterate through each version of employees and print the appropriate html
    const managersArr = employeeArr.filter(employee => employee.role === 'Manager');
    const engineersArr = employeeArr.filter(employee => employee.role === 'Engineer');
    const internsArr = employeeArr.filter(employee => employee.role === 'Intern');

    // Filter employees based on role
    managersArr.forEach(manager => handleManager(manager));
    engineersArr.forEach(engineer => handleEngineer(engineer));
    internsArr.forEach(intern => handleIntern(intern));

    let sectionsHTML = '';
    
    // Map through each array and generate the HTML
    if (managersArr.length > 0) {
        const managersHTML = managersArr.map(manager => handleManager(manager)).join('');
        sectionsHTML += `
            <section>
                <h2>Management Staff</h2>
                <div>
                    ${managersHTML}
                </div>
            </section>
        `;
    }

    if(engineersArr.length > 0) {
        const engineersHTML = engineersArr.map(engineer => handleEngineer(engineer)).join('');
        sectionsHTML += `
            <section>
                <h2>Engineer Staff</h2>
                <div>
                    ${engineersHTML}
                </div>
            </section>
        `;
    }

    if(internsArr.length > 0) {
        const internsHTML = internsArr.map(intern => handleIntern(intern)).join('');
        sectionsHTML += `
            <section>
                <h2>Intern Staff</h2>
                <div>
                    ${internsHTML}
                </div>
            </section>
        `;
    }

    return sectionsHTML;
};

const handleManager = (manager) => {
    const managerHTML =  `
        <div>
            <h3>${manager.name}</h3>
            <h3>${manager.role}</h3>

            <div>
                <p>ID: ${manager.id}</p>
                <p>Email: ${manager.email}</p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    `;

    return managerHTML;
};

const handleEngineer = (engineer) => {
    return `
        <section>
            <div>
                <h3>${engineer.name}</h3>
                <h3>${engineer.role}</h3>

                <div>
                    <p>ID: ${engineer.id}</p>
                    <p>Email: ${engineer.email}</p>
                    <p>GitHub: ${engineer.github}</p>
                </div>
            </div>
        </section>
    `;
};

const handleIntern = (intern) => {
    return `
        <section>
            <div>
                <h3>${intern.name}</h3>
                <h3>${intern.role}</h3>

                <div>
                    <p>ID: ${intern.id}</p>
                    <p>Email: ${intern.email}</p>
                    <p>Office Number: ${intern.school}</p>
                </div> 
            </div>
        </section>
    `;
};


// generatePage will display the html structure
const generatePage = (generatedProfile) => {
    const employeeArr = generatedProfile.employeeArr;

    // console.table(employeeArr);

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Generated Team Profile</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
            <link rel="stylesheet" href="style.css">
        </head>
    
        <body>
            <header>
                <div>
                    <h1>Generated Team Profile</h1>
                </div>
            </header>

            <main>
                ${printEmployees(employeeArr)}
            </main>

            <footer>
                <h3>&copy; ${new Date().getFullYear()} by Jonathan Wilferd</h3>
            </footer>
        </body>
        </html>
    `;

    // Write the HTML content to a file
    writeFile(htmlContent);
};



// Success log

module.exports = generatePage;
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
                <h2 class="text-center pb-4">Management Staff</h2>
                <div class="row justify-content-center">
                    ${managersHTML}
                </div>
            </section>
        `;
    }

    if(engineersArr.length > 0) {
        const engineersHTML = engineersArr.map(engineer => handleEngineer(engineer)).join('');
        sectionsHTML += `
            <section>
                <h2 class="text-center pb-4">Engineer Staff</h2>
                <div class="row justify-content-center">
                    ${engineersHTML}
                </div>
            </section>
        `;
    }

    if(internsArr.length > 0) {
        const internsHTML = internsArr.map(intern => handleIntern(intern)).join('');
        sectionsHTML += `
            <section>
                <h2 class="text-center pb-4">Intern Staff</h2>
                <div class="row justify-content-center">
                    ${internsHTML}
                </div>
            </section>
        `;
    }

    return sectionsHTML;
};

const handleManager = (manager) => {
    const managerHTML =  `
        <div class="card border backgroundColor">
            <div class="card-header bg-primary text-white pb-3">
                <h3>${manager.name}</h3>
                <h4> <i class="fas fa-mug-hot"></i> ${manager.role}</h4>
            </div>

            <ul class="list-group p-2 m-2">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: ${manager.email}</li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    `;

    return managerHTML;
};

const handleEngineer = (engineer) => {
    return `
        <div class="card border backgroundColor">
            <div class="card-header bg-primary text-white pb-3">
                <h3> <i class="fas fa-glasses"></i> ${engineer.name}</h3>
                <h4>${engineer.role}</h4>
            </div>

            <ul class="list-group p-2 m-2">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: ${engineer.email}</li>
                <li class="list-group-item">GitHub: ${engineer.github}</li>
            </ul>
        </div>
    `;
};

const handleIntern = (intern) => {
    return `
        <div class="card border backgroundColor">
            <div class="card-header bg-primary text-white pb-3">
                <h3> <i class="fas fa-user-graduate"></i> ${intern.name}</h3>
                <h4>${intern.role}</h4>
            </div>

            <ul class="list-group p-2 m-2">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: ${intern.email}</li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
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
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        </head>
    
        <body>
            <header>
                <div class="bg-danger text-white mb-5 pb-2">
                    <h1 class="text-center pt-5 pb-5">Generated Team Profile</h1>
                </div>
            </header>

            <main>
                ${printEmployees(employeeArr)}
            </main>

            <footer class="text-center fixed-bottom">
                <h4>&copy; ${new Date().getFullYear()} by Jonathan Wilferd</h4>
            </footer>

            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
        </body>
        </html>
    `;

    // Write the HTML content to a file
    writeFile(htmlContent);
};



// Success log

module.exports = generatePage;
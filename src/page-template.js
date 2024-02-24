// Create a function titled printEmployees
const printEmployees = (employeeArr) => {
    // Iterate through each version of employees and print the appropriate html
    const managersArr = employeeArr.filter(employee => employee.role === 'Manager');
    const engineerArr = employeeArr.filter(employee => employee.role === 'Engineer');
    const internArr = employeeArr.filter(employee => employee.role === 'Intern');

    managersArr.forEach(manager => hanldeManager(manager));
    engineerArr.forEach(engineer => handleEngineer(engineer));
    internArr.forEach(intern => handleIntern(intern));
    
    // Create cards for specific HTML (Ensure code here is DRY)

    // Consolidate all the created sections into the main HTML template
}


// generatePage will display the html structure
const generatePage = (generatedProfile) => {
    const employeeArr = generatedProfile.employeeArr;

    // console.table(employeeArr);

    return `
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
};

// Success log

module.exports = generatePage;
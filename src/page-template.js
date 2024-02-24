// Create a function titled printEmployees
const printEmployees = () => {
    // collect and print managers
    
    // collect and print engineers

    // collect and print Interns
}


// generatePage will display the html structure
const generatePage = (generatedProfile) => {
    const employeeArr = generatedProfile.employeeArr;

    console.table(employeeArr);

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
                ${printEmployees()}
            </main>

            <footer>
                <h3>&copy; ${new Date().getFullYear()} by Jonathan Wilferd</h3>
            </footer>
        </body>
        </html>
    `;
};


    // Iterate through each version of employees and print the appropriate html

    // Separate employee's based on role and present them in different sections on the page

    // Use a switch statement to run sub-methods based on the role of an employee

// Create cards for specific HTML (Ensure code here is DRY)

// Consolidate all the created sections into the main HTML template

// Success log

module.exports = generatePage;
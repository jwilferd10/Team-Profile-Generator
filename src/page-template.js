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
                <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="target1 page-title rounded-edges2 box-shadow2 spacing-five text-secondary bg-dark px-3">${header.name}</h1>
                </div>
                <nav class="container pb-4 flex-row justify-flex-start">
                ${generataSocialMediaLinksHTML(socialMediaLinks)}
                </nav>
            </header>

            <main class="container my-5">
                ${printEmployees()}
            </main>

            <footer class="container text-center py-3">
                <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
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
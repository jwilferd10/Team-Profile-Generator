const generateTeam = require('./lib/Generator');

const startGenerator = async () => {
    try {
        // Invoke the application
        const generator = new generateTeam();
        await generator.promptIntro();

        const profileHTML = generatePage(generatedProfile);

        // Generate the appropriate files
        await writeHTMLFile(profileHTML);

        // TODO: Include code that writes CSS file

        // Success Log
        console.log('Team Profile has been successfully created.');
    } catch (error) {
        console.error(`An error has occurred: ${error.message}`);
    };
};

startGenerator();
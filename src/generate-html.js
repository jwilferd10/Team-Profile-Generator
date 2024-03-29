const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, error => {
            if (error) {
                reject(error);
                return;
            }

            resolve({
                ok: true,
                message: 'HTML file created!'
            });
        });
    });
};

module.exports = writeFile
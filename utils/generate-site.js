const fs = require('fs');

const writeFile = (template) => {
    fs.writeFile('./dist/index.html', template, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("Team Profile Generated! Please check out index.html located in the 'dist' folder to see the output!\n");
        }
    });

    fs.copyFile('./src/style.css', './dist/style.css', (err) => {
        if (err)
            console.log(err);
        else {
            console.log("Style File Copy Successful!\n");
        }
    });
};

module.exports = writeFile;
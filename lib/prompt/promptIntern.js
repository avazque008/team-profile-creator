const inquirer = require('inquirer');

const promptIntern = () => {
    console.log(`
         =================
        Intern's Information
         =================
    `);

    return inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: "Please enter the intern's name:",
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log("Please enter your team intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internID',
            message: "Please enter the intern's employee ID:",
            validate: internID => {
                if (internID) {
                    return true;
                } else {
                    console.log("Please enter your team intern's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Please enter the intern's email address:",
            validate: internEmail => {
                if (internEmail) {
                    return true;
                } else {
                    console.log("Please enter your team intern's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Please enter the intern's school name:",
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    console.log("Please enter your team intern's school name!");
                    return false;
                }
            }
        }
    ]);
};

module.exports = promptIntern;
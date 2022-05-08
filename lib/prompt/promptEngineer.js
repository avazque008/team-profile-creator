const inquirer = require('inquirer');

const promptEngineer = () => {
    console.log(`
          =================
        Engineer's Information
          =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Please enter the engineer's name:",
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log("Please enter your team engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "Please enter the engineer's employee ID:",
            validate: engineerID => {
                if (engineerID) {
                    return true;
                } else {
                    console.log("Please enter your team engineer's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Please enter the engineer's email address:",
            validate: engineerEmail => {
                if (engineerEmail) {
                    return true;
                } else {
                    console.log("Please enter your team engineer's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: "Please enter the engineer's GitHub username:",
            validate: engineerGitHub => {
                if (engineerGitHub) {
                    return true;
                } else {
                    console.log("Please enter your team engineer's GitHub username!");
                    return false;
                }
            }
        }
    ]);
};

module.exports = promptEngineer;
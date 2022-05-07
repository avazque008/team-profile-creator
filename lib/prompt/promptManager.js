const inquirer = require('inquirer');

const promptManager = () => {
    console.log(`
        =================
    Team Manager's Information
        =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Please enter the team manager's name:",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log("Please enter your team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "Please enter the team manager's employee ID:",
            validate: managerID => {
                if (managerID) {
                    return true;
                } else {
                    console.log("Please enter your team manager's employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter the team manager's email address:",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    console.log("Please enter your team manager's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: "Please enter the team manager's office number:",
            validate: managerNumber => {
                if (managerNumber) {
                    return true;
                } else {
                    console.log("Please enter your team manager's office number!");
                    return false;
                }
            }            
        }
    ]);
};

module.exports= promptManager;
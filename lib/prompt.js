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

const promptTeam = (portfolioData) => {
    console.log(`
        =================
        Team's Information
        =================
    `);

    if (!portfolioData.team) {
        portfolioData.team = [];
    }
    
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: "Add a member to the team or finish building the team!",
            choices: ['Add Engineer', 'Add Intern', 'Finish Building Team']
        },
        {
            type: 'input',
            name: 'engineerName',
            message: "Please enter the engineer's name:",
            when: ({ addMember }) => {
                if (addMember === 'Add Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
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
            when: ({ addMember }) => {
                if (addMember === 'Add Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
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
            when: ({ addMember }) => {
                if (addMember === 'Add Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
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
            when: ({ addMember }) => {
                if (addMember === 'Add Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: engineerGitHub => {
                if (engineerGitHub) {
                    return true;
                } else {
                    console.log("Please enter your team engineer's GitHub username!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internName',
            message: "Please enter the intern's name:",
            when: ({ addMember }) => {
                if (addMember === 'Add Intern') {
                    return true;
                } else {
                    return false;
                }
            },
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
            when: ({ addMember }) => {
                if (addMember === 'Add Intern') {
                    return true;
                } else {
                    return false;
                }
            },
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
            when: ({ addMember }) => {
                if (addMember === 'Add Intern') {
                    return true;
                } else {
                    return false;
                }
            },
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
            when: ({ addMember }) => {
                if (addMember === 'Add Intern') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    console.log("Please enter your team intern's school name!");
                    return false;
                }
            }
        }
    ])
    .then(teamData => {
        portfolioData.team.push(teamData);
      
        if (teamData.addMember === 'Finish Building Team') {
            return portfolioData;
        } else {
            return promptTeam(portfolioData);
        }
    });
};

module.exports = { promptManager, promptTeam }
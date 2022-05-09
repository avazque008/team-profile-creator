const promptManager = require('./lib/prompt/promptManager');
const promptEngineer = require('./lib/prompt/promptEngineer');
const promptIntern = require('./lib/prompt/promptIntern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const generateHTML = require('./src/template');

let employeesInfo = [];
let managerInfo = [];

const startApp = () => {

    promptManager()
        .then(info => {
            const manager = new Manager(info.managerName, info.managerID, info.managerEmail, info.managerNumber);
            
            managerInfo.push(manager);
            confirmTeam();
        });
};

const confirmTeam = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: 'Please select one of the choices provided below:',
            choices: ['Add an Engineer', 'Add an Intern', new inquirer.Separator(), 'Exit / Generate Team Profile']        
        }
    ])
    .then(choice => {
        switch (choice.addMember) {
            case 'Add an Engineer':
                promptEngineer()
                    .then(info => {
                        const engineer = new Engineer(info.engineerName, info.engineerID, info.engineerEmail,  info.engineerGitHub);
                        employeesInfo.push(engineer);
                        confirmTeam();
                    });
                break;
            case 'Add an Intern':
                promptIntern()
                    .then(info => {
                        const intern = new Intern(info.internName, info.internID, info.internEmail,  info.internSchool);
                        employeesInfo.push(intern);
                        confirmTeam();
                    });
                break;
            case 'Exit / Generate Team Profile':
                generateHTML(managerInfo, employeesInfo);
                break;           
        }
    });
};

startApp();


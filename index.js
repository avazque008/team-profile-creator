const promptManager = require('./lib/prompt/promptManager');
const promptEngineer = require('./lib/prompt/promptEngineer');
const promptIntern = require('./lib/prompt/promptIntern');
const Manager = require('./lib/Manager');

const startApp = () => {
    const employeeInfo = [];
    const managerInfo = [];

    promptManager()
        .then(info => {
            const manager = new Manager(info.managerName, info.managerID, info.managerEmail, info.managerNumber);
            managerInfo.push(manager);
        });
};

startApp();
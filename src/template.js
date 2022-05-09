const fs = require('fs');

function generateHTML(managerInfo, employeesInfo) {

    let managerData = '';
    let employeesData = '';

    managerData += managerHTML(managerInfo);


    for (let i = 0; i < employeesInfo.length; i++ ) {
        if (employeesInfo[i].getRole() === 'Intern') {
            employeesData += internHTML(employeesInfo[i]);
        } else if ( employeesInfo[i].getRole() === 'Engineer') {
            employeesData += engineerHTML(employeesInfo[i]);
        }
    }

    fs.writeFile('./dist/index.html',  mainHTML(managerData, employeesData), (err) => {
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



function mainHTML (managerData, employeesData) {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://kit.fontawesome.com/8fc933709b.js" crossorigin="anonymous"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css" />
            <title>Team Profile</title>
        </head>
        <body>
            <header class="header">
                <div class="row">
                    <div class="col-12">
                        <h1 class="header-title">
                            My Team
                        </h1>
                    </div>
                </div>
            </header>
            <div class="container">
                <div class="row justify-content-center">
                    ${managerData}
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    ${employeesData}
                </div>
            </div>
        </body>
    </html>`
};

function managerHTML (managerInfo) {

    const [manager] = managerInfo;

    return `
            <div class="col-12 col-md-4">
                <div class="employee">
                    <div class="employee-name">
                        <h2>
                            ${manager.getName()}
                        </h2>
                        <h3>
                            <i class="fa-solid fa-mug-hot"></i>
                            ${manager.getRole()}
                        </h3>                    
                    </div>
                    <div class="employee-info">
                        <p><span>ID: </span>${manager.getId()}</p>
                        <p><span>Email: </span><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                        <p><span>Office Number: </span>${manager.officeNumber}</p>
                    </div>
                </div>
            </div>    
    `
};

function engineerHTML (employee) {

    return `
    <div class="col-12 col-md-4">
        <div class="employee">
            <div class="employee-name">
                <h2>
                    ${employee.getName()}
                </h2>
                <h3>
                    <i class="fa-solid fa-user-graduate"></i>
                    ${employee.getRole()}
                </h3>                    
            </div>
            <div class="employee-info">
                <p><span>ID: </span>${employee.getId()}</p>
                <p><span>Email: </span><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                <p><span>GitHub: </span><a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></p>
            </div>
        </div>
    </div>    
    `
};

function internHTML (employee) {

    return `
    <div class="col-12 col-md-4">
        <div class="employee">
            <div class="employee-name">
                <h2>
                    ${employee.getName()}
                </h2>
                <h3>
                    <i class="fa-solid fa-glasses"></i>
                    ${employee.getRole()}
                </h3>                    
            </div>
            <div class="employee-info">
                <p><span>ID: </span>${employee.getId()}</p>
                <p><span>Email: </span><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                <p><span>School: </span>${employee.getSchool()}</p>
            </div>
        </div>
    </div>    
    `
};


module.exports = generateHTML;
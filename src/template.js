// const employeesHTML = (employeesInfo) => {
    

// };


const generateHTML = (managerInfo) => {

    const [manager] = managerInfo;

    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://kit.fontawesome.com/8fc933709b.js" crossorigin="anonymous"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="../src/style.css" />
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
                                <p><span>Email: </span><a href="mailto:${manager.getEmail()}">alex.vazquez@uasdc.org</a></p>
                                <p class="last-info"><span>Office Number: </span>${manager.officeNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </body>
    </html>    
    `;
};

module.exports = generateHTML;
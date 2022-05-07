const { promptManager, promptTeam } = require('./lib/prompt');

promptManager()
    .then(portfolioData => {
        return promptTeam(portfolioData);  
    })
    .then(teamData => {
        console.log(teamData);
    });

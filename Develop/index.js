const fs = require("fs")
const inquirer = require("inquirer")

const questions = [{
    type: "input",
    name: "gitHubUserName",
    message: "What is your gitHub user name?"
},
{
    type: "input",
    name: "projectTitle",
    message: "What is the title of your Project?"
},
{
    type: "input",
    name: "description",
    message: "A short description of your project",
},
{
    type: "input",
    name: "OsAndLinuxInstallation",
    message: "What command to install on OS X and Linux?",
},
{
    type: "input",
    name: "windowsInstallation",
    message: "What command to install on Windows?",
},
{
    type: "input",
    name: "usageExample",
    message: "What is a good example of using this project?",
}
];
const titles = [{
    gitHubUserName: "GitHub User Name"
}];
inquirer.prompt(questions).then(answers => {
    let justAnswers = Object.values(answers)




    // fs.appendFile("README.md", answers.gitHubUserName + '\n', function (err) {
    //     if (err) throw err;
    //     console.log("saved");
    // });
    // fs.appendFile("README.md", answers.projectTitle + '\n', function (err) {
    //     if (err) throw err;
    //     console.log("saved");
    // });
    // fs.appendFile("README.md", answers.description + '\n', function (err) {
    //     if (err) throw err;
    //     console.log("saved");
    // });
    // fs.appendFile("README.md", answers.OsAndLinuxInstallation + '\n', function (err) {
    //     if (err) throw err;
    //     console.log("saved");
    // });
    // fs.appendFile("README.md", answers.windowsInstallation + '\n', function (err) {
    //     if (err) throw err;
    //     console.log("saved");
    // });
    // fs.appendFile("README.md", answers.usageExample + '\n', function (err) {
    //     if (err) throw err;
    //     console.log("saved");
    // });


})




// function writeToFile(fileName, data) {
// }
// function init() {
// }
// init();

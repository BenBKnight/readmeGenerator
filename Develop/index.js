const fs = require("fs")
const inquirer = require("inquirer")

// Development setup
// development setup instructions
// Meta
// user social media
// Contributing
// contributing instructions

const questions = [
    // Product name
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your Project?"
    },
    // description
    {
        type: "input",
        name: "description",
        message: "A short description of your project",
    },
    // // badges
    // {
    // },

    // screenshot
    {
        type: "input",
        name: "screenshotPath",
        message: "What is the screenshot path? ex: ./assets/screenShot.png"
    },
    // // Installation
    // {
    // },
    // installation os
    {
        type: "input",
        name: "OsAndLinuxInstallation",
        message: "What command to install on OS X and Linux?",
    },
    // installation windows
    {
        type: "input",
        name: "windowsInstallation",
        message: "What command to install on Windows?",
    },


    {
        type: "input",
        name: "gitHubUserName",
        message: "What is your gitHub user name?"
    },

    // Usage Example

    // examples
    {
        type: "input",
        name: "usageExample",
        message: "What is a good example of using this project?",
    }
];
const titles = [
    "# ",
    "## ",
    "### ",
    "#### ",
    "##### ",
    "###### ",


];
inquirer.prompt(questions).then(answers => {
    let justAnswers = Object.values(answers)
    let justTitles = Object.values(titles)
    const installationSetup = titles[1] + "Installation" + "\n" + "OS and Linux install: " + answers.OsAndLinuxInstallation + '\n' + "OS and Linux install: " + answers.windowsInstallation + '\n';

// Project title and description
    fs.appendFile("README.md", titles[0] + answers.projectTitle + '\n' + answers.description + '\n', function (err) {
        if (err) throw err;
    });
    
    fs.appendFile("README.md", titles[1] + answers.gitHubUserName + '\n', function (err) {
        if (err) throw err;
    });
    fs.appendFile("README.md", titles[1] + "Preview" + "\n" + "![Picture of finished project](" + answers.screenshotPath + ")" + '\n', function (err) {
        if (err) throw err;
    });
    fs.appendFile("README.md", installationSetup, function (err) {
        if (err) throw err;
    });

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

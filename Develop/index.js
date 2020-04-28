const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

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
    // User Story
    {
        type: "input",
        name: "userStoryPerson",
        message: "As a ______ ",
    },
    {
        type: "input",
        name: "userStoryProject",
        message: "I want a ______ ",
    },
    {
        type: "input",
        name: "userStoryDescription",
        message: "So that I can _____ ",
    },
    // screenshot
    {
        type: "input",
        name: "screenshotPath",
        message: "What is the screenshot path? ex: ./assets/screenShot.png"
    },
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

    // Github user name
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username"
    },
    {
        input: "input",
        message: "Enter your repository name",
        name: "repoCalled"
    },
    // examples
    {
        type: "input",
        name: "usageExample",
        message: "What is a good example of using this project?",
    },
    // {
    //     type: "input",
    //     name: "contributors",
    //     message: "Who are the contributors to this project?",
    // },
    {
        type: "input",
        name: "licenceName",
        message: "What is the name of the licence you used?",
    },
    {
        type: "input",
        name: "licenceSite",
        message: "What is the https link to the license site?",
    },
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
    // variable for long installation input
    const installationSetup = titles[1] + "Installation" + "\n" + "OS and Linux install:" + '\n' + '   ' + '\n' + "```" + answers.OsAndLinuxInstallation + "```" + '\n' + '   ' + '\n' + "Windows install: " + '\n' + '   ' + '\n' + "```" + answers.windowsInstallation + "```" + '\n';
    const userStorySetup = titles[1] + "User Story" + '\n' + '   ' + '\n' + "```" + "As a " + answers.userStoryPerson+ ", \n" + "I want a " + answers.userStoryProject + ", \n" + "so that I can " + answers.userStoryDescription + '\n' + '   ' + '\n' + "```" + '\n' + '   ' + '\n';
    const queryUrl = `https://api.github.com/repos/` + answers.username + "/" + answers.repoCalled;
    // Project title and description
    fs.appendFileSync("README.md", titles[0] + answers.projectTitle + '\n' + answers.description + '\n', function (err) {
        if (err) throw err;
    });
    fs.appendFileSync("README.md", userStorySetup, function (err) {
        if (err) throw err;
    });
    fs.appendFileSync("README.md", titles[1] + "Preview" + "\n" + "![Picture of finished project](" + answers.screenshotPath + ")" + '\n', function (err) {
        if (err) throw err;
    });
    fs.appendFileSync("README.md", installationSetup, function (err) {
        if (err) throw err;
    });
    axios.get(queryUrl).then(function (res) {
        axios.get(res.data.contributors_url).then(function (res) {
            fs.appendFileSync("README.md", titles[1] + "Contributors:" + '\n', function (err) {
                if (err) throw err;
            });
            for (i = 0; i < res.data.length; i++) {
                fs.appendFileSync("README.md", "[" + res.data[i].login + "]" + " (" + res.data[i].html_url + ") \n", function (err) {
                    if (err) throw err;
                })
            }
        })
    })
    fs.appendFileSync("README.md", titles[1] + "Licenses" + '\n' + "   " + '\n' + "[" + answers.licenceName + "]" + "(" + answers.licenceSite + ")" + `\n`, function (err) {
        if (err) throw err;
    });
})

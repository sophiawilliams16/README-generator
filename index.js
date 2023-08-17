// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { isDataView } = require("util/types");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message:
            "Provide a short description of the what, why, and how of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
    },
    {
        type: "input",
        name: "credits",
        message:
            "List any collaborators, third-party assets, or tutorials and include links.",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license.",
        choices: ["MIT", "ISC", "Apache", "GNU GPLv2", "none"],
    },
    {
        type: "input",
        name: "contributing",
        message: "List contribution guidelines.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide test instructions",
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// Use in inquirer to prompt for user input fields 
function promptUser() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const filename = `myREADME.md`;
            const fileContent = generateMarkdown(data);
            // Create a function to write README file
            fs.writeFile(filename, fileContent, (err) =>
                err ? console.log(err) : console.log("Success!")
            );
        });
}
// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();




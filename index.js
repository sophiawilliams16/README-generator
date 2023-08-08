// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { isDataView } = require("util/types");

// Create an array of questions for user input
const questions = ['What is your project title?',
    'Provide a short description of the what, why, and how of your project.',
    'What are the steps to install your project?',
    'Provide instructions and examples for use',
    'List any collaborators, third-party assets, or tutorials and include links',
    'Choose a license.'];

// Use in inquirer to prompt for user input fields 
inquirer
    .prompt([
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
            type: "input",
            name: "license",
            message: "Choose a license.",
        },
    ])
    .then((data) => {
        const filename = `README.md`;

        // Create a function to write README file
        fs.writeFile(filename, init(data), (err) =>
            err ? console.log(err) : console.log("Success!")
        );
    });

// TODO: Create a function to initialize app
function init(data) {
    return `# ${data.title}

## Description
    ${data.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation 
    ${data.installation}

## Usage 
    ${data.usage}

## Credits 
    ${data.credits}

## License 
    ${data.license}`;
}

// Function call to initialize app
//init();

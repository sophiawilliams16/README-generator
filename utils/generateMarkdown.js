// Returns a license badge based on which license is passed in
// If there is no license, return an empty string 
// try using a switch statement here 
function renderLicenseBadge(license) {
    if (license === "MIT") return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    else if (license === "ISC") return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    else if (license === "Apache") return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    else if (license === "GNU GPLv2") return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    else return "";
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") return "This application is covered under the MIT License: https://opensource.org/licenses/MIT";
     else if (license === "ISC") return "This application is covered under the ISC License: https://opensource.org/licenses/ISC";
     else if (license === "Apache") return "This application is covered under the Apache 2.0 License: https://opensource.org/licenses/Apache-2.0";
     else if (license === "GNU GPLv2") return "This application is covered under the GNU GPLv2 License: https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
     else return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
     if (license !== "none") return "- [License](#license)";
     else return "";
}

function renderLicenseHeader(license) {
    if (license !== "none") return "## License";
    else return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
        
${renderLicenseBadge(data.license)}

## Description
    ${data.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseSection(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation 
    ${data.installation}

## Usage 
    ${data.usage}

## Credits 
    ${data.credits}

${renderLicenseHeader(data.license)} 
    ${renderLicenseLink(data.license)}

## Contributing 
    ${data.contributing}

## Tests 
    ${data.tests}

## Questions 
    Here is a link to my github profile: https://github.com/${data.username}
    If you have any additional questions, feel free to email me at ${data.email}.`;
}

module.exports = generateMarkdown;

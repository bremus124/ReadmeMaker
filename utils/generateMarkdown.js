// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(data) {
  const licenseType = data;
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "Apache License 2.0") {
    licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
   };
  
  if (licenseType === "GNU General Public License 3.0") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
  if (licenseType === "BSD 3-Clause License") {
    licenseString = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  };
  // if ()
  return licenseString
  };

function renderLicenseLink(license) {
  const licenseType = license;
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `(https://opensource.org/licenses/MIT)`
  };
  if (licenseType === "Apache License 2.0") {
    licenseString = `(https://opensource.org/licenses/Apache-2.0)`
   };
  
  if (licenseType === "GNU General Public License 3.0") {
      licenseString = `(https://www.gnu.org/licenses/agpl-3.0)`
    };
  if (licenseType === "BSD 3-Clause License") {
    licenseString = `(https://opensource.org/licenses/BSD-3-Clause)`
  };
  // if ()
  return licenseString
  };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project uses ${renderLicenseBadge(license)},You can find more information here: ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Describe
  ${data.describe}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## License
  ${renderLicenseSection(data.license)}

## Contributing
  ${data.contribute}

## Tests
  ${data.tests}

## Questions
  For any questions please contact me directly at ${data.questions1}. To see more of my work please visit
  [@${data.questions2}](https://www.github.com/${data.questions2}).
`;
}

module.exports = generateMarkdown;

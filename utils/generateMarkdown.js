// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    isc: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
    mit: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    none: ` `
  }
  return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    isc: `[ISC](https://choosealicense.com/licenses/isc/)`,
    mit: `[MIT](https://choosealicense.com/licenses/mit/)`,
    none: null
  }
  return licenseLinks[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(this.renderLicenseLinklicense != null) {
    return `Licensed under the ${this.renderLicenseLink(license)} license.`
  } else {return ` `}
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${this.renderLicenseBadge(data.license)}

## Table of Contents
- [Project description](#Description)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Installation](#Installation)
- [Questions](#Questions)
- [License](#License)

## Description
${data.description}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Installation
${data.installation}

## Questions
If you have questions feel free to reach out\n
Email: [${data.email}](${data.email}) \n
Github: [${data.github}](${data.github})

## License
${this.renderLicenseSection(data.license)}
  `;
}


module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
}
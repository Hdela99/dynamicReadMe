// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return ` `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return ` `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ` `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  - [Project description](#Description)
  -[Usage](#Usage)
  -[Contribution](#Contribution)
  -[Installation](#Installation)
  -[Questions](#Questions)
  -[License](#License)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Installation
  ${data.installation}

  ## Questions
  ${data.email}
  ${data.github}

  ## License
  ${data.license}


  
  `;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
    The application is covered under the following license:
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![GitHub](https://img.shields.io/github/license/${data.githubUsername}/${data.title})
  # ${data.title}
  ## Description
  ${data.about}
  ## Table of Contents
  ${installCheck(data.install)}
  * [Usage](#usage)
  * [License](#license)
  ${contributeCheck(data.contribution)}
  ${testCheck(data.testing)}
  * [Questions](#questions)
  
  ${generateInstall(data.install)}
  ## Usage
  ${data.usage}
  ## License
  * This application is covered under the ${data.license} license
  ${generateContribute(data.contribution)}
  ${generateTesting(data.testing)}
  ## Questions
  Created by: [${data.githubUsername}](${data.gitLink})
  
  If you have any further questions please feel free to contact me at [${data.email}](${data.email})
`;
}
module.exports = generateMarkdown;

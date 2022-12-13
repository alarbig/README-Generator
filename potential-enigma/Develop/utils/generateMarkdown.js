
function renderLicenseBadge(licenses) {

    if (licenses === 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    if (licenses === 'GPL') {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`}

    if (licenses === 'BSD') { 
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    } 
    if (licenses === 'Apache') {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    if (licenses === 'CC0') {
      return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
    } else { 
      return '' 
    } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name} 

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributor)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.licenses)} 

  ## Contributors
  ${data.contributor}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions} `;

}

module.exports = generateMarkdown;


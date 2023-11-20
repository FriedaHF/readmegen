// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe the project. What problem are you trying to solve? What is this project for?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Are there any requirements for installation?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Describe the usage of the application.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Who and what helped you create this?',
      name: 'contributions',
    },
    {
      type: 'checkbox',
      message: 'What type of licensing do you have?',
      name: 'license',
      choices: ['MIT', 'Apache 2.0', 'BSD','Mozilla Public', 'other', 'none' ],
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'GitHub',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
  ])
  .then((response) => {
    
  const {title, description, installation, usage, contributions, license, GitHub, email} = response
  
  fs.writeFile('README.md', `
  # ${title}

## Description

${description}

## Table of Contents

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contribution](#contribution)

## Installation

${installation}

## Usage

${usage}

##  License

${license}

##  Contribution

${contributions}

##  Questions
[For any questions, please go to my GitHub: ${GitHub}](https://github.com/${GitHub})

For more, please contact me here ${email}.
`
, (err) => err ?console.error(err): console.log('That is all.'))});



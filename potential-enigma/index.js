// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input

const questions = () =>{
    return inquirer.prompt(
 [ {
    type: 'input',
    message: 'What is your project title?',
    name: 'name', 
    },

    {
    type: 'input',
    message: 'Description of the project?',
    name: 'description', 

    },

    {
        type: 'input',
        message: 'Installation instructions?',
        name: 'installation'
    },

    {
        type: 'input',
        message: 'Instructions for usage?',
        name: 'usage'
    },

    {
        type: 'input',
        message: 'What license will you use? Please choose between, MIT, GPL, BSD, Apache, or CC0: ',
        name: 'licenses',
    },

    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributor',
    }, 

    {
        type: 'input',
        message: 'Are their any additional tests that need be completed?',
        name: 'tests',
    },

    {
        type: 'input',
        message: 'How can people reach out to if they have questions or comments? Email or Github for example: ',
        name: 'questions',
    },
    
])}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./README.md', data, err => {
        err ? console.error(err) : console.log('Success! Your new README has been created!')
    })
}

// TODO: Create a function to initialize app
function init() {
    questions() 
        .then(input => {
            return generateMarkdown(input);
        })
        .then(markdown => {
            writeToFile('./README.md', markdown);
        })
}

init();

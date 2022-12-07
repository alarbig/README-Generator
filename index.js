// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils');


// TODO: Create an array of questions for user input

const questions = [ {
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
        message: 'What license will you use?',
        name: 'license',
    },

    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributor',
    }, 

    {
        type: 'input',
        message: 'Tests?',
        name: 'tests',
    },

    {
        type: 'input',
        message: 'Questions?',
        name: 'questions',
    },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.appendFile('README.md', (questions[0]), error => {
        !error ? console.log('Success!')
        : console.log('Something went wrong...')})
        }

writeToFile();
// TODO: Create a function to initialize app

function init() {}

// Function call to initialize app




// inquirer
//         .prompt({
//             type: 'input', 
//             message: 'what is your project title?',
//             name: 'projectTitle', 
//         },
//         {
//             type: 'input', 
//             message: 'Description of the project',
//             name: 'projectTitle', 
//         }, 
//         {
//             type: 'input', 
//             message: 'Table of contents: ',
//             name: 'projectTitle',
//         },
//         {
//             type: 'input', 
//             message: 'Table of contents: ',
//             name: 'projectTitle',
// //         }
        
//         )

                    'What is your project title?', 
                    'Description of the project', 
                    'Table of contents: ', 
                    'Installation instructions?', 
                    'Usage?', 
                    'License: ', 
                    'Contributors?', 
                    'Tests?', 
                    'Questions?'
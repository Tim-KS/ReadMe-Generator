// TODO: Include packages needed for this application
const fs = require('fs')
const path = require('path');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a small description of your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', '2', '3', '4'],
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs
    fs.writeFile("README", generateMarkdown, function (err) {
        if (err) throw err;
    })
    // writeFileSync
    // 
    // return
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log('README IN 3, 2, 1.....')
        // call writeToFile 
        writeToFile;
    })
}

// Function call to initialize app
init();

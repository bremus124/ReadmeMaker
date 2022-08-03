const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project'
    },
    {
        type: 'input',
        name: 'describe',
        message: 'Describe your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How will your application be installed'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will your application be used'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Does your project have a license',
        choices: ['MIT', 'Apache License 2.0', 'GNU General Public License 3.0', 'BSD 3-Clause License']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can someone contribute to your project'
    },
    {
        tpye: 'input',
        name: 'tests',
        message: 'Enter your test instructions'
    },
    {
        type: 'input',
        name: 'questions1',
        message: 'What is your email address'
    },
    {
        type: 'input',
        name: 'questions2',
        message: 'What is your github username'
    },
       
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        console.log("generatereadme");
        writeToFile('README.md', generateMarkdown({
            ...responses
        }))
    })
}

// Function call to initialize app
init();

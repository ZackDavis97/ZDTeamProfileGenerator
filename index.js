const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const writeFile = require('./src/generate');
const generatePage = require('./src/template')

let engineer = [];
let intern = [];
let manager = [];
let employeeArray = {engineer, intern, manager};

function Prompt() {
    
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'position',
            message:"What is the employee's position?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type:'text',
            name: 'employee',
            message: "What is the employee's name?"
        },
        {
            type:'text',
            name: 'id',
            message: "What is the employee's ID number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the employee's email?"
        }])
        .then(({employee, id, email, position}) => {
            if (position === "Manager") {
                return inquirer
                    .prompt([{
                        type:'text',
                        name: 'office',
                        message:"What is the office number for the manager?"
                    },
                    {
                        type:'confirm',
                        name:'nextEntry',
                        message: "Do you want to add another employee?",
                        default: false
                    }])
                    .then(({office, nextEntry}) => {
                        manager.push(new Manager(employee, id, email, office))
                        if (nextEntry) {
                            return Prompt();
                        }
                    })
            } else if (position === "Engineer") {
                return inquirer
                    .prompt([{
                        type: 'text',
                        name: 'github',
                        message: "What is the Engineer's Github username?"
                    },
                    {
                        type:'confirm',
                        name:'nextEntry',
                        message: "Do you want to add another employee?",
                        default: false
                    }])
                    .then(({github, nextEntry}) => {
                        engineer.push(new Engineer(employee, id, email, github))
                        if (nextEntry) {
                            return Prompt();
                        }
                    })
            } else if (position === 'Intern') {
                return inquirer
                    .prompt([{
                        type:'text',
                        name:'school',
                        message: "What is the Intern's school?"
                    },
                    {
                        type:'confirm',
                        name:'nextEntry',
                        message: "Do you want to add another employee?",
                        default: false
                    }])
                    .then(({school, nextEntry}) => {
                        intern.push(new Intern(employee, id, email, school))
                        if (nextEntry) {
                            return Prompt();
                        }
                    })
            }
        })
};

Prompt()
    .then(teamData => {
        return generatePage(employeeArray)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
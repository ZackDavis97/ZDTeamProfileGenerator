const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

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
            message: "What is the Employee's name?"
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
        .then
}
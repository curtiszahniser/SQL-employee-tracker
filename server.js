const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const { prompt } = require('inquirer');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Thenumber3!!',
    database: 'empTracker_db'
  },
  console.log(`Connected to the empTracker_db database.`)
);

function init() {
  prompt([
    {
      type: 'list',
      name: 'prompt',
      message: 'What would you like to do?',
      choices: [
        {
          name: "View all departments",
          value: "View department",
        }, 
        {
          name: 'View all roles',
          value: 'View roles'
        },
        {
          name: 'View all employees',
          value: 'View employees',
        },
        {
          name: 'Add a department',
          value: 'Add department',
        },
        {
          name: 'Add a role',
          value: 'Add role',
        },
        {
          name: 'Add an employee',
          value: 'Add employee',
        },
        {
          name: 'Update employee role',
          value: 'Update employee',
        }
      ]
    }
  ]).then(res => {
    let choice = res.prompt;
    switch (choice) {
      case "View department": 
        viewAllDepartments()
        break;
      case 'View roles':
        viewAllRoles()
        break;
      case 'View employees':
        viewAllEmployees()
        break;
      case 'Add department':
        addDepartment()
        break;
      case 'Add role':
        addRole()
        break;
      case 'Add employee':
        addEmployee()
        break;
      case 'Update employee role':
        updateEmployeeRole()
        break;
      default:
        quit()
    }
  })

};

async function viewAllDepartments() {
 const results = await db.promise().query('SELECT * FROM department;')
  console.log(results[0])
  init()
};


function viewAllRoles() {
  db.query('SELECT * FROM role', function (err, results) {
    // return ()
    console.log(results);
  });
};

function viewAllEmployees() {
  db.query('SELECT * FROM employee', function (err, results) {

    console.log(results);
  });
};

function addDepartment() {
  db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  });
};

function addRole() {
  db.query('SELECT * FROM role', function (err, results) {
    console.log(results);
  });
};

function addEmployee() {
  prompt([{
    type: 'input',
    message: 'What is employee first name?',
    name: 'first_name'},
    
    {type: 'input',
    message: 'What is employee last name?',
    name: 'last_name'},
  ]).then(res=>{})
  
  db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });
};

function updateEmployeeRole() {
  db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
  });
};
function quit() {
  process.exit()
};



init();
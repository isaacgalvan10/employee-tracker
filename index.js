const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'list',
    name: 'like_to_do',
    message: 'What would you like to do?',
    choices : ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
  }
])
.then((response) => {
  console.log(response);
})
const pw = require('./password'),
    chalk = require('chalk'),
    clear = require('clear'),
    cli = require('clui'),
    figlet = require('figlet'),
    inquirer = require('inquirer')

// main func
function getPasswordWithAlgorithm(callback) {
  var questions = [
    {
      name: 'password',
      type: 'input',
      message: 'Enter The String to Be Encrypted',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please Enter The String to Be Encrypted.';
        }
      }
    },
    {
        name: 'algorithm',
        type: 'selectLine',
        message: 'Choose The Algorithm to encrypt with.',
        choices: ['bcrypt', 'sha256', 'sha512', 'md5']
    }
  ];

  inquirer.prompt(questions).then(callback);
}

// registering 
inquirer.registerPrompt('selectLine', require('inquirer-select-line'));
// run
clear();
console.log(chalk.green(figlet.textSync('PasswordJS')))

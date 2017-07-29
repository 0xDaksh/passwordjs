const pw = require('./password'),
    chalk = require('chalk'),
    clear = require('clear'),
    cli = require('clui'),
    figlet = require('figlet'),
    inquirer = require('inquirer')

let choices = ['bcrypt', 'sha256', 'sha512', 'md5']
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
        type: 'list',
        message: 'Choose The Algorithm to encrypt with.',
        choices: choices
    }
  ];

  inquirer.prompt(questions).then(callback);
}

// run
clear();
console.log(chalk.green(figlet.textSync('PasswordJS')))
getPasswordWithAlgorithm((arg1) => {
    pw.encrypt(arg1.password, arg1.algorithm).then(e => {
        console.log('\n', e)
    }).catch(e => {
        throw e;
    })
})
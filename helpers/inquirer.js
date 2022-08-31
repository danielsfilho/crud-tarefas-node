const inquirer = require('inquirer');
require('colors');

const perguntas = [
  {
    type: 'list',
    name: 'opcao',
    message: 'Oque você deseja fazer?',
    choices: ['opt1', 'opt2', 'opt3']
  }
];

const inquirerMenu = async() => {

  console.clear();
  console.log("===============================".green);
  console.log("===== Selecione uma opção =====".green);
  console.log("===============================\n".green);

  const opt = await inquirer.prompt(perguntas)

  return opt
}

module.exports = {
  inquirerMenu
}
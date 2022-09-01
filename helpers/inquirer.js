const inquirer = require('inquirer');
require('colors');

const perguntas = [
  {
    type: 'list',
    name: 'opcao',
    message: 'Oque você deseja fazer?',
    choices: [
      {
        value: '1',
        name: '1. Criar tarefa'
      },
      {
        value: '2',
        name: '2. Listar tarefa'
      },
      {
        value: '3',
        name: '3. Listar tarefas completadas'
      },
      {
        value: '4',
        name: '4. Listar tarefas pendentes'
      },
      {
        value: '5',
        name: '5. Completar tarefa(s)'
      },
      {
        value: '6',
        name: '6. Remover tarefa'
      },
      {
        value: '0',
        name: '0. Sair'
      },

    ]
  }
];

const inquirerMenu = async() => {

  console.clear();
  console.log("===============================".green);
  console.log("===== Selecione uma opção =====".green);
  console.log("===============================\n".green);

  const { opcao } = await inquirer.prompt(perguntas)

  return opcao
}

const pauseMenu = async() => {

  const inputPause = [
    {
      type: 'input',
      name: 'questionPause',
      message: `Pressione ${ 'ENTER'.green } para continuar`,
    }
  ];

  console.log('\n');

  await inquirer.prompt( inputPause );
}

const lerInput = async( message ) => {
  
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate( value ) {
        if( value.length === 0 ) {
          return 'Por favor digite um valor';
        }
        return true;
      }
    }
  ];

  const { desc } = await inquirer.prompt( question );
  return desc;
}

module.exports = {
  inquirerMenu,
  pauseMenu,
  lerInput
}
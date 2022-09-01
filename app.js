require('colors');

const { inquirerMenu, pauseMenu } = require('./helpers/inquirer');
const Tarefa = require('./models/tarefa');
const Tarefas = require('./models/tarefas');

console.clear();

const main = async() => {
  
  let opt = '';

  do {
    // opt = await inquirerMenu();
    // console.log({ opt });

    const tarefas = new Tarefas()

    const tarefa = new Tarefa('Comprar bolacha');
    console.log(tarefas)

    opt !== '0' ? await pauseMenu() : null;

  } while ( opt != '0' );

  
}

main();
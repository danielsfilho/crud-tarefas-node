require('colors');

const {
  inquirerMenu,
  pauseMenu,
  lerInput
} = require('./helpers/inquirer');
const Tarefas = require('./models/tarefas');

const main = async() => {
  
  let opt = '';
  const tarefas = new Tarefas();
  

  do {
    opt = await inquirerMenu();
    
    switch (opt) {
      case '1':
        const desc = await lerInput("Digite a descrição da tarefa:");
        tarefas.criarTarefa(desc);
      break;
    
      case '2':
        console.log( tarefas._listado );
      break;
    }


    opt !== '0' ? await pauseMenu() : null;

  } while ( opt != '0' );

  
}

main();
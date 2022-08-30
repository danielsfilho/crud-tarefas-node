require('colors');

const mostrarMenu = (  ) => {
  
  return new Promise( resolve => {
    console.clear();
    console.log("===============================".green);
    console.log("===== Selecione uma opção =====".green);
    console.log("===============================\n".green);

    console.log(`${'1.'.blue} Criar tarefa`);
    console.log(`${'2.'.blue} Listar tarefas`);
    console.log(`${'3.'.blue} Listar tarefas completadas`);
    console.log(`${'4.'.blue} Listar tarefas pendentes`);
    console.log(`${'5.'.blue} Completar tarefa`);
    console.log(`${'6.'.blue} Apagar tarefa`);
    console.log(`${'0.'.blue} Sair\n`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question('Selecione uma opção: ', opt => {
      readline.close()
      resolve(opt)
    });
  } );
  
  
}

const pause = () => {
  
  return new Promise( resolve => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    readline.question(`\nPressione ${'ENTER'.green} para continuar \n`, opt => {
      readline.close()
      resolve(opt)
    });
  })
} 

module.exports = {
  mostrarMenu,
  pause
}
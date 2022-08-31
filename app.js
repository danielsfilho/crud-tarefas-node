require('colors');

const { inquirerMenu, pauseMenu } = require('./helpers/inquirer');

console.clear();

const main = async() => {
  
  let opt = '';

  do {
    opt = await inquirerMenu();
    console.log({ opt });

    opt !== '0' ? await pauseMenu() : null;

  } while ( opt != '0' );

  
}

main();
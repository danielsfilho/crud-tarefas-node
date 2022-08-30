require('colors');

const { mostrarMenu, pause } = require('./helpers/mensagens');

console.clear();

const main = async() => {
  
  let opt = '';

  do {
    opt = await mostrarMenu();

  } while ( opt != '0' );

  pause();
}

main();
require('colors');

const { mostrarMenu, pause } = require('./helpers/mensagens');

console.clear();

const main = async() => {
  mostrarMenu()

  pause()
}

main();
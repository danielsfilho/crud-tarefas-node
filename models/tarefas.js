const Tarefa = require('./tarefa');

class Tarefas {

  _listado = {};

  constructor() {
    this._listado = {};
  }

  criarTarefa( desc = '' ) {

    const tarefa = new Tarefa(desc);
    this._listado[tarefa.id] = tarefa;
  }

}

module.exports = Tarefas;
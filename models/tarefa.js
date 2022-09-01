import { v4 as uuidv4 } from 'uuid';

class Tarefa {
  
  id = '';
  desc = '';
  completadoEm = null;

  constructor( desc ) {

    this.id = uuidv4();
    this.desc = desc;
    this.completadoEm = null;

  }


}

module.exports = Tarefa;  
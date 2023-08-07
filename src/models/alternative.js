import data from '../data/alternatives.js';

class AlternativeModel {

  constructor(){
    this.data = data;
  }

  all(){
    return this.data;
  }

  find(id){
    return this.data.find(node => node.id === id);
  }

}

export { AlternativeModel };
import content from '../data/questions.js';

class QuestionModel {

  constructor(){
    this.data = content;
  }

  all(){
    return this.data;
  }

  find(id){
    return this.data.find(node => node.id === id);
  }

}

export { QuestionModel };
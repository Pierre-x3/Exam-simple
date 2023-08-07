import questionAlter from '../data/question_alternative.js';

class QuestionAlterModel {

  constructor(questionModel, alternativeModel, detailsExamModel){
    this.data = questionAlter;
    this.question = questionModel;
    this.alternative = alternativeModel;
    this.detExam = detailsExamModel;
  }

  all(){
    return this.data;
  }

  find(id){
    return this.data.find(node => node.id === id);
  }

  findByQuestion(question){
    return this.data.filter(node => node.question == question);
  }

}

export { QuestionAlterModel };
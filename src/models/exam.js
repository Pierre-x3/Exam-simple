import exams from '../data/exam.js';

class ExamModel {

  constructor(){
    this.data = exams;
  }

  all(){
    return this.data;
  }

  find(id){
    return this.data.find(exam => exam.id === id);
  }
}

export { ExamModel };
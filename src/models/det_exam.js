import details from '../data/detail_exam.js'

class DetailsExamModel {

  constructor(){
    this.data = details;
  }

  all(){
    return this.data;
  }

  find(id){
    return this.data.find(det => det.id === id);
  }

  findByExam(examId){
    return this.data.filter(node => node.exam === examId);
  }

}

export { DetailsExamModel };
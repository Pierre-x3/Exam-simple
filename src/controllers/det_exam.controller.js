import { DetailsExamModel } from "../models/det_exam.js";
import { ExamModel } from "../models/exam.js";
import { QuestionAlterController } from "./quest_alter.controller.js";

export class DetailsExamController {
  constructor(){
    this.exam = new ExamModel();
    this.examDetails = new DetailsExamModel();
    this.questAlter = new QuestionAlterController();
  }

  getExam(examId){
    let details = this.examDetails.findByExam(examId);
    details = details.map(detail => this.questAlter.getQuestionWithAlternatives(detail.question));
    return {
      exam: this.exam.find(examId),
      questions: details
    }
  }

}


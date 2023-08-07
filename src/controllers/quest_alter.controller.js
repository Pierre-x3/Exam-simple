import { AlternativeModel } from "../models/alternative.js";
import { QuestionModel } from "../models/question.js";
import { QuestionAlterModel } from "../models/question_alter.js";

export class QuestionAlterController {
  constructor(){
    this.questionAlter = new QuestionAlterModel();
    this.question = new QuestionModel();
    this.alternative = new AlternativeModel();
  }

  getQuestionWithAlternatives(question){
    let details = this.questionAlter.findByQuestion(question);
    let alternatives = details.map(detail => this.alternative.find(detail.alternative));
    return {
      question: this.question.find(question),
      alternatives
    }
  }
}
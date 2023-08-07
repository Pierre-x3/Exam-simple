import { DetailsExamController } from "../../src/controllers/det_exam.controller.js";

const formatQuestions = (questions) => {
  const response = {};
  questions.forEach(question => {
    if(question.alternatives <= 0) return;

    let questionId = question.question.id;
    let alternatives = [];

    question.alternatives.forEach(node=> {
      if(node.isCorrect) alternatives.push(node.id)
    });

    response[questionId] = alternatives;
  });
  return response;
}

const getQuestionsFromExam = () => {
  const response = {};

  const exam = document.querySelector('#questions');
  const questions = Array.from(exam.querySelectorAll('.question'));

  questions.forEach(element => {
    let question = element.querySelector('.card-question').getAttribute('question-id');
    let alternative = [];

    let alternativeElements = Array.from(element.querySelectorAll('.card-alternative input'));
    alternativeElements.forEach(elem => {
      if(elem.checked){
        alternative.push(Number(elem.getAttribute('alternative-id')));
      }
    });

    response[question] = alternative;
  }); 

  return response;
}

export const sendButton = () => {
  document.querySelector('#button-send').addEventListener('click', () => {
    let examId = document.querySelector('#examName h1').getAttribute('exam-id');
    let questions = new DetailsExamController().getExam(Number(examId));
    let originAnswers = formatQuestions(questions.questions);
    const answersFromExam = getQuestionsFromExam();
    
    let total = Object.keys(answersFromExam).length;
    let corrects = 0;

    for(let i=0; i<total; i++){
      let answerExam = Object.values(answersFromExam)[i];
      let answerOrigin = Object.values(originAnswers)[i];

      let isCorrect = answerExam.every(res => answerOrigin.includes(res));
      if(isCorrect && answerExam.length > 0) corrects++;
    }

    alert(`Total: ${corrects}/${total}`);
  });
}
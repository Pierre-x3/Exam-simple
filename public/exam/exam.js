import { DetailsExamController } from "../../src/controllers/det_exam.controller.js";
import { sendButton } from "./event.js";
import { printExam, printExamName } from "./print.js";

const getExam = () => {
  const examController = new DetailsExamController();
  let exam = examController.getExam(1);

  printExam(exam.questions, 'questions');
  printExamName(exam.exam, 'examName');
}

//printed
getExam();

//events
sendButton();
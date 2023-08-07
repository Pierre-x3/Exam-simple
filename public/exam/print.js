
function printQuestion(question) {
  return `
    <div class="card-question" question-id="${question.id}">
      ¿${question.name}?
    </div>
  `;
}

function printAlternative(alternatives, isMultiple=false){
  let html = '';
  html += `<div class="grouped fields">`;

  alternatives.forEach(alternative => {
    html += `
      <div class="field card-alternative">
        <div class="ui ${isMultiple ? '': 'radio'} checkbox">
          <input type="${isMultiple ? 'checkbox': 'radio'}" alternative-id="${alternative.id}">
          <label>${alternative.name}</label>
        </div>
      </div>
    `;
  })

  html += `</div>`;
  return html;
}

export const printExam = (questions, element) => {

  let html = '';

  questions.forEach(node => {
    if(node.alternatives.length === 0) return '';
    html += `
      <div class="ui segment">
        <div class="ui form question">
          ${printQuestion(node.question)}
          <hr>
          ${printAlternative(node.alternatives, node.question.isMultiple)}
        </div>
      </div>
    `;
  });

  document.querySelector(`#${element}`).innerHTML = html;
}

export const printExamName = (exam, element) => {
  let html = `<h1 exam-id="${exam.id}">${exam.name}</h1>`;
  document.querySelector(`#${element}`).innerHTML = html;
}

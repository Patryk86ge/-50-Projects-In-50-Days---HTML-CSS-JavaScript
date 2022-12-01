const quizData = [
  {
    question:'With language runs in a web',
    a:'Java',
    b:'C',
    c:'Python',
    d:'JavaScript',
    correct:'d'
  },
  {
    question:'What does Css stand for',
    a:'Central Styling Sheets',
    b:'Cascading Style Sheets',
    c:'Cascading Simple Sheets',
    d:'Cars SUVs Sailboats',
    correct:'b'
  },
  {
    question:'What does HTML stand for',
    a:'Hypertext Markup Language',
    b:'Hypertext Mardown Language',
    c:'Hypertext Machine Language',
    d:'Helicopters terminals Motorboats Lamborginis',
    correct:'a'
  },
  {
    question:'What year was JS launched',
    a:'1996',
    b:'1995',
    c:'1994',
    d:'None of the above',
    correct:'b'
  },
];
const quizContainer = document.querySelector(".quiz__container");
const answerInput = document.querySelectorAll(".answer");
const question = document.querySelector(".question");
const a_answer = document.querySelector(".a_answer");
const b_answer = document.querySelector(".b_answer");
const c_answer = document.querySelector(".c_answer");
const d_answer = document.querySelector(".d_answer");
const quizBtn = document.querySelector(".quiz__btn");
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  question.innerHTML = currentQuizData.question;
  a_answer.innerHTML = currentQuizData.a;
  b_answer.innerHTML = currentQuizData.b;
  c_answer.innerHTML = currentQuizData.c;
  d_answer.innerHTML = currentQuizData.d;
}

function deselectAnswer() {
  answerInput.forEach(answerEl => answerEl.checked = false)
  // console.log(answerInput);
}

function getSelected() {
  let answer;
  answerInput.forEach(answerEl => {
    if (answerEl.checked){
      answer = answerEl.id
    }
  })
  return answer;
}

quizBtn.addEventListener('click',() => {
  const answer  = getSelected();
  if (answer){
    if (answer === quizData[currentQuiz].correct){
      score++
    }
    currentQuiz++;
    if (currentQuiz < quizData.length){
      loadQuiz();
    }else {
      quizContainer.innerHTML = `
       <h1 class="question">You answered ${score}/
       ${quizData.length} queston correctly
       </h1>
       <button class="quiz__btn" onclick="location.reload()">Reload</button>
      `
    }
  }
});
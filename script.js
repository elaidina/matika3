const quizData = [
    {
        question: "50+20+60 =",
        a: "200",
        b: "120",
        c: "130",
        d: "150",
        correct: "c",
    },
    {
        question: "18+9 =",
        a: "27",
        b: "26",
        c: "12",
        d: "29",
        correct: "a",
    },
    {
        question: "12.3 =",
        a: "37",
        b: "26",
        c: "36",
        d: "24",
        correct: "c",
    },
    {
        question: "8.7 =",
        a: "64",
        b: "56",
        c: "12",
        d: "69",
        correct: "b",
    },
    {
      question: "28-2-3 =",
      a: "20",
      b: "23",
      c: "25",
      d: "28",
      correct: "b",
  },{
    question: "15.2 =",
    a: "30",
    b: "40",
    c: "45",
    d: "60",
    correct: "a",
  },{
    question: "10.10.10.10 =",
    a: "10",
    b: "100",
    c: "1000",
    d: "10 000",
    correct: "d",
  },{
    question: "9+8 =",
    a: "18",
    b: "25",
    c: "17",
    d: "20",
    correct: "c",
  },{
    question: "19-2-10 =",
    a: "7",
    b: "8",
    c: "9",
    d: "10",
    correct: "a",
  },{
    question: "31+25 =",
    a: "45",
    b: "50",
    c: "56",
    d: "60",
    correct: "c",
  },{
    question: "0-12 =",
    a: "0",
    b: "-12",
    c: "12",
    d: "-10",
    correct: "b",
  },{
    question: "55+56",
    a: "110",
    b: "105",
    c: "111",
    d: "120",
    correct: "c",
  },{
    question: "60+5-5+5 =",
    a: "50",
    b: "55",
    c: "60",
    d: "65",
    correct: "d",
  },{
    question: "28:2 =",
    a: "12",
    b: "14",
    c: "16",
    d: "18",
    correct: "b",
  },{
    question: "2.22 =",
    a: "44",
    b: "66",
    c: "28",
    d: "10",
    correct: "a",
  },{
    question: "10+10+5 =",
    a: "15",
    b: "20",
    c: "25",
    d: "0",
    correct: "c",
  },{
    question: "0,5+0,5 =",
    a: "-1",
    b: "0",
    c: "1",
    d: "10",
    correct: "c",
  },{
    question: "0,2+0,8 =",
    a: "0",
    b: "10",
    c: "1",
    d: "0,1",
    correct: "c",
  },{
    question: "1+1000 =",
    a: "1001",
    b: "1100",
    c: "1 100",
    d: "10 000",
    correct: "a",
  },{
    question: "(5.2)+20 =",
    a: "30",
    b: "31",
    c: "32",
    d: "33",
    correct: "a",
  },{
    question: "98-5 =",
    a: "90",
    b: "92",
    c: "93",
    d: "102",
    correct: "c",
  },{
    question: "13-8 =",
    a: "5",
    b: "6",
    c: "7",
    d: "8",
    correct: "a",
  },{
    question: "22+33+11 =",
    a: "55",
    b: "66",
    c: "77",
    d: "88",
    correct: "b",
  },{
    question: "20:10 =",
    a: "6",
    b: "8",
    c: "10",
    d: "2",
    correct: "d",
  },{
    question: "12+9 =",
    a: "18",
    b: "21",
    c: "24",
    d: "27",
    correct: "b",
  },{
    question: "200-6 =",
    a: "94",
    b: "194",
    c: "206",
    d: "159",
    correct: "b",
  },{
    question: "200+3 =",
    a: "230",
    b: "23",
    c: "203",
    d: "20",
    correct: "c",
  },{
    question: "38+12 =",
    a: "30",
    b: "40",
    c: "50",
    d: "60",
    correct: "c",
  },{
    question: "9+11-12 =",
    a: "6",
    b: "7",
    c: "8",
    d: "9",
    correct: "c",
  },{
    question: "6+17 =",
    a: "11",
    b: "12",
    c: "23",
    d: "24",
    correct: "c",
  },{
    question: "6.4 =",
    a: "18",
    b: "20",
    c: "22",
    d: "24",
    correct: "d",
  },{
    question: "8+4+8 =",
    a: "20",
    b: "28",
    c: "32",
    d: "16",
    correct: "a",
  },{
    question: "5+6+3 =",
    a: "14",
    b: "15",
    c: "16",
    d: "17",
    correct: "a",
  },{
    question: "7.4 =",
    a: "14",
    b: "21",
    c: "28",
    d: "35",
    correct: "c",
  },{
    question: "(4.3):2 =",
    a: "8",
    b: "12",
    c: "6",
    d: "20",
    correct: "c",
  },{
    question: "15:2 =",
    a: "8",
    b: "2,5",
    c: "7,5",
    d: "4,5",
    correct: "c",
  },{
    question: "80-20-20 =",
    a: "40",
    b: "50",
    c: "60",
    d: "70",
    correct: "a",
  },{
    question: "99-11 =",
    a: "90",
    b: "99",
    c: "88",
    d: "80",
    correct: "c",
  },{
    question: "6.6 =",
    a: "12",
    b: "24",
    c: "36",
    d: "48",
    correct: "c",
  },{
    question: "3+98 =",
    a: "99",
    b: "100",
    c: "101",
    d: "102",
    correct: "c",
  },
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="c" class="answer">
                    <label for="c" id="c_text">${question.c}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="d" class="answer">
                    <label for="d" id="d_text">${question.d}</label>
                  </li>
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })
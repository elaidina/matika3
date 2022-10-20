const quizData = [
    {
        question: "5+2+6 =",
        a: "20",
        b: "12",
        c: "13",
        d: "15",
        correct: "c",
    },
    {
        question: "18-9 =",
        a: "7",
        b: "6",
        c: "12",
        d: "9",
        correct: "d",
    },
    {
        question: "12.2 =",
        a: "7",
        b: "20",
        c: "12",
        d: "24",
        correct: "d",
    },
    {
        question: "8.8 =",
        a: "64",
        b: "24",
        c: "12",
        d: "69",
        correct: "a",
    },
    {
      question: "5+5+5+5 =",
      a: "20",
      b: "24",
      c: "25",
      d: "28",
      correct: "a",
  },{
    question: "15.3 =",
    a: "30",
    b: "40",
    c: "45",
    d: "60",
    correct: "c",
  },{
    question: "10.10 =",
    a: "10",
    b: "100",
    c: "1000",
    d: "10 000",
    correct: "b",
  },{
    question: "8+2+3+7 =",
    a: "30",
    b: "25",
    c: "10",
    d: "20",
    correct: "d",
  },{
    question: "15-2-6 =",
    a: "7",
    b: "8",
    c: "9",
    d: "10",
    correct: "a",
  },{
    question: "30+25 =",
    a: "45",
    b: "50",
    c: "55",
    d: "60",
    correct: "c",
  },{
    question: "80-12 =",
    a: "38",
    b: "78",
    c: "68",
    d: "58",
    correct: "c",
  },{
    question: "55+55",
    a: "100",
    b: "105",
    c: "110",
    d: "120",
    correct: "c",
  },{
    question: "50+50-50 =",
    a: "50",
    b: "100",
    c: "150",
    d: "200",
    correct: "a",
  },{
    question: "8:2 =",
    a: "2",
    b: "4",
    c: "6",
    d: "8",
    correct: "b",
  },{
    question: "2.2.2 =",
    a: "4",
    b: "6",
    c: "8",
    d: "10",
    correct: "c",
  },{
    question: "10+5+5 =",
    a: "15",
    b: "20",
    c: "25",
    d: "0",
    correct: "b",
  },{
    question: "10-11 =",
    a: "-1",
    b: "0",
    c: "1",
    d: "10",
    correct: "a",
  },{
    question: "50+12 =",
    a: "60",
    b: "62",
    c: "64",
    d: "52",
    correct: "b",
  },{
    question: "100+1000 =",
    a: "100",
    b: "110",
    c: "1 100",
    d: "10 000",
    correct: "c",
  },{
    question: "5+6+20 =",
    a: "30",
    b: "31",
    c: "32",
    d: "33",
    correct: "b",
  },{
    question: "2.9 =",
    a: "16",
    b: "17",
    c: "18",
    d: "19",
    correct: "c",
  },{
    question: "23-5 =",
    a: "18",
    b: "19",
    c: "20",
    d: "21",
    correct: "a",
  },{
    question: "66+33 =",
    a: "90",
    b: "93",
    c: "96",
    d: "99",
    correct: "d",
  },{
    question: "16:2 =",
    a: "6",
    b: "8",
    c: "10",
    d: "12",
    correct: "b",
  },{
    question: "13+8 =",
    a: "18",
    b: "21",
    c: "24",
    d: "27",
    correct: "b",
  },{
    question: "20-6 =",
    a: "12",
    b: "14",
    c: "16",
    d: "18",
    correct: "b",
  },{
    question: "5+5+6 =",
    a: "10",
    b: "15",
    c: "16",
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
    question: "19-11 =",
    a: "6",
    b: "7",
    c: "8",
    d: "9",
    correct: "c",
  },{
    question: "6+7 =",
    a: "11",
    b: "12",
    c: "13",
    d: "14",
    correct: "c",
  },{
    question: "6.3 =",
    a: "18",
    b: "20",
    c: "22",
    d: "24",
    correct: "a",
  },{
    question: "8.4 =",
    a: "24",
    b: "28",
    c: "32",
    d: "36",
    correct: "c",
  },{
    question: "1+2+3+4+5 =",
    a: "14",
    b: "15",
    c: "16",
    d: "17",
    correct: "b",
  },{
    question: "7.3 =",
    a: "14",
    b: "21",
    c: "28",
    d: "35",
    correct: "b",
  },{
    question: "4.3 =",
    a: "8",
    b: "12",
    c: "16",
    d: "20",
    correct: "b",
  },{
    question: "5:2 =",
    a: "2",
    b: "2,5",
    c: "3",
    d: "4",
    correct: "b",
  },{
    question: "10+20+30 =",
    a: "40",
    b: "50",
    c: "60",
    d: "70",
    correct: "c",
  },{
    question: "99-10 =",
    a: "90",
    b: "99",
    c: "89",
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
    question: "2+98 =",
    a: "99",
    b: "100",
    c: "101",
    d: "102",
    correct: "b",
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

      const quizdata = [
        // {
        //   question: "How old is Florin?",
        //   a: "10",
        //   b: "20",
        //   c: "101",
        //   d: "60",
        //   correct: "d",
        // },
        // {
        //   question: "which is the most useful language for web development?",
        //   a: "c++",
        //   b: "c",
        //   c: "JavaScript",
        //   d: "python",
        //   correct: "c",
        // },
        // {
        //   question: "What year was javaScript launch?",
        //   a: "1990",
        //   b: "1995",
        //   c: "2000",
        //   d: "2001",
        //   correct: "b",
        // },
        // {
        //   question: "",
        //   a: "",
        //   b: "",
        //   c: "",
        //   d: "",
        //   correct: "d",
        // },
        {
            question: "Q 1 - Which of the following is an advantage of using JavaScript?",
            a: "Less server interaction",
            b: "Immediate feedback to the visitors",
            c: "Increased interactivity",
            d: "All of the above",
            correct: "d",
          },
          {
              question: "Q 2 - Which of the following is the correct syntax to print a page using JavaScript?",
              a: "window.print();",
              b: "browser.print();",
              c: "navigator.print();",
              d: "document.print();",
              correct: "a",
            },
            {
                question: "Q 3 - Which built-in method reverses the order of the elements of an array?",
                a: "changeOrder(order)",
                b: "reverse()",
                c: "sort(order)",
                d: "None of the above",
                correct: "b",
              },
              {
                  question: "Q 4 - Inside which HTML element do we put the JavaScript?",
                  a: "<scripting>",
                  b: "<js>",
                  c: "<javascript>",
                  d: "<script>",
                  correct: "d",
                },
                {
                    question: "Q 5 - How to create an unordered list (a list with the list items in bullets) in HTML?",
                    a: "<ul>",
                    b: "<ol>",
                    c: "<li>",
                    d: "<i>",
                    correct: "a",
                  },
                  {
                      question: "Q 6 - Which of the following element is responsible for making the text bold in HTML?",
                      a: "<pre>",
                      b: "<a>",
                      c: "<b>",
                      d: "<br>",
                      correct: "c",
                    },
                    {
                        question: "Q 7 - Which character is used to represent the closing of a tag in HTML?",
                        a: "*",
                        b: "+",
                        c: "/",
                        d: ".",
                        correct: "c",
                      },
                      {
                          question: "Q 8 -  Which of the following tag is used to make the underlined text?",
                          a: "<i>",
                          b: "<ul>",
                          c: "<u>",
                          d: "<pre>",
                          correct: "c",
                        },
                        {
                             question: "Q 9 -  <input> is ?",
                            a: "a format tag.",
                            b: "an empty tag.",
                            c: "All of the above",
                            d: "None of the above",
                            correct: "b",
                          },
                          {
                            question: "Q 10 - Java is Developed by ?",
                           a: "James Gosling",
                           b: "Denies Ritchie",
                           c: "Bjarne Stroustrup",
                           d: "Brendan Eich",
                           correct: "a",
                         },
      ];
    
      const quiz = document.getElementById('quiz');
      const answerEls = document.querySelectorAll('.answer');
      const questionEl = document.getElementById('question');
      const a_text = document.getElementById('a_text');
      const b_text = document.getElementById('b_text');
      const c_text = document.getElementById('c_text');
      const d_text = document.getElementById('d_text');
      const submitBtn = document.getElementById('submit');

      let currentQuiz = 0;
      let score = 0;
      loadQuiz();
      function loadQuiz() {
        deselectAnswers()

        const currentQuizdata = quizdata[currentQuiz];
        questionEl.innerText = currentQuizdata.question;
        a_text.innerText = currentQuizdata.a;
        b_text.innerText = currentQuizdata.b;
        c_text.innerText = currentQuizdata.c;
        d_text.innerText = currentQuizdata.d;


      }
      function deselectAnswers()
      {
        answerEls.forEach(answerEl => answerEl.checked = false)
      }
      function getSelected()
      {
       let answer;

       answerEls.forEach(answerEl =>{
         if(answerEl.checked){
           answer  = answerEl.id
         }
       })
       return answer
      }
      submitBtn.addEventListener('click',()=>{

        const answer = getSelected()
        if(answer){
        if(answer === quizdata[currentQuiz].correct){
          score++;
        }
        currentQuiz++
        if(currentQuiz < quizdata.length){
          loadQuiz()
        } 
        else {
           quiz.innerHTML = 
           `<h2>you answered ${score}/${quizdata.length} questions correctly</h2>
           <button id="Reload" onclick="location.reload()">Reload</button>
           `
        }
        }
      })
    
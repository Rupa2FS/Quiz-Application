const quizzData = [
    {
        question: "Markup Language?",
        a: "html",
        b: "css",
        c: "js",
        d: "python",
        correct: "a"
    },

    {
        question: "Style Sheet",
        a: "html",
        b: "css",
        c: "js",
        d: "python",
        correct: "b"
    },

    {
        question: "Simple syntax",
        a: "c++",
        b: "java",
        c: "js",
        d: "python",
        correct: "d"
    },

    {
        question: "Backend language",
        a: "html",
        b: "css",
        c: "js",
        d: "python",
        correct: "d"
    },
];

const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const answerEls = document.querySelectorAll('.answer');
const questionEL = document.getElementById('question');
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0
loadQuiz()




function loadQuiz() {
    deselectAnswer()
    const currentQuizData = quizzData[currentQuiz]
    questionEL.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d 

}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id 
        }
    })
    return answer 
    
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()

    if(answer) {
        if( answer === quizzData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizzData.length) {
            loadQuiz()

        } else {
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizzData.length} question correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
            
    }
})
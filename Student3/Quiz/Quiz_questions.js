const questions = [
    {
        question: "What is the largest and the busiest port in Sri Lanka as well as in Indian Ocean ?",
        answers: [
            { text: "Port of Trincomalee", correct: false},
            { text: "Port of Oluvil", correct: false},
            { text: "Port of Colombo", correct: true},
            { text: "Port of Hambanthota ", correct: false},
        ]
    },
    {
        question: "How was Sri Lanka formerly known?",
        answers: [
            { text: "Ceylon", correct: true},
            { text: "Burma", correct: false},
            { text: "Formosa", correct: false},
            { text: "Nyasaland", correct: false},
        ]
    },
    {
        question: "Which is the longest river in Sri Lanka?",
        answers: [
            { text: "Cauvery", correct: false},
            { text: "Mahaweli", correct: true},
            { text: "Padma", correct: false},
            { text: "Amban", correct: false},
        ]
    },
    {
        question: "Which is the currency of Sri Lanka?",
        answers: [
            { text: "Taka", correct: false},
            { text: "Yen", correct: false},
            { text: "Rupee", correct: true},
            { text: "Baht", correct: false},
        ]
    },
    {
        question: "Where does the Sigiriya rock situated ?",
        answers: [
            { text: "Near the town of Badulla", correct: false},
            { text: "Near the town of Jaffna", correct: false},
            { text: "Near the town of Colombo", correct: false},
            { text: "Near the town of Dambulla", correct: true},
        ]
    },
    {
        question: "Where is the best tea grown in Sri Lanka?",
        answers: [
            { text: "Matale", correct: false},
            { text: "Ella", correct: true},
            { text: "Rathnapura", correct: false},
            { text: "Matara", correct: false},
        ]
    },
    {
        question: "Which is the No 1 beach in Sri Lanka?",
        answers: [
            { text: "Mirissa beach", correct: true},
            { text: "Nilaweli beach", correct: false},
            { text: "Marble beach", correct: false},
            { text: "Mannar beach", correct: false},
        ]
    },
    {
        question: "Which is the most cool area in Sri Lanka?",
        answers: [
            { text: "Matale", correct: false},
            { text: "Rathnapura", correct: false},
            { text: "Kandy", correct: false},
            { text: "Nuwaraeliya", correct: true},
        ]
    },
    {
        question: "What is the first multi religious center in Sri Lanka ?",
        answers: [
            { text: "Lowamahapaya", correct: false},
            { text: "Temple of tooth relic", correct: false},
            { text: "Ambuluwawa tower", correct: true},
            { text: "Konedhwaram kovil", correct: false},
        ]
    },
    {
        question: "What are the three main languages do Sri Lankans speak?",
        answers: [
            { text: "Tamil, Japanese , Arabic", correct: false},
            { text: "Sinhalese , Tamil , English", correct: true},
            { text: "English, French, Tamil", correct: false},
            { text: "Malay, Sinhala, Tamil", correct: false},
        ]
    } 
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timeoutButton = document.getElementById("timeout-btn");
const timeCount = document.querySelector(".timer .time_sec");
const timeOff = document.querySelector(".timer .time_text");

let currentQuestionIndex = 0;
let score = 0;
let counter; 
let timeValue = 60;
let timeRemain = 0;
let questionreset = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    timeoutButton.style.display = "none";
    nextButton.innerHTML = "Next";
    showQuestion(questionreset);
    startTimer(timeValue);
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} within ${timeRemain} seconds!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    clearInterval(counter);
}

function timeoutScore(){
    resetState();
    questionElement.innerHTML = `Sorry your time is over, You scored ${score} out of ${questions.length}!`;
    timeoutButton.innerHTML = "Play Again";
    timeoutButton.style.display = "block";
    clearInterval(counter);
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

timeoutButton.addEventListener("click", ()=>{
    startQuiz(); })

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time Off";
            timeoutScore();
        }
        timeRemain = 60 - time;
    } 
     
}

startQuiz();


















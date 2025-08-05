let array = [
    {
        question: "Q1: HTML stands for ?",
        options: [
            "Hyper Text Makes Line",
            "Holistick Technical Method Library",
            "Hyper Text Markup Language",
            "None of the above",
        ],
        answer: "Hyper Text Markup Language",
    },
    {
        question: "Q2: Which is the largest heading in Html ?",
        options: ["Header Heading", "H1", "Large Heading", "H0"],
        answer: "H1",
    },
    {
        question: "Q3: We write all Html content between ______ ?",
        options: [
            "Opening and Closing tags",
            "Paranthesis",
            "Semicolon and Full Stop",
            "None of the above",
        ],
        answer: "Opening and Closing tags",
    },
    {
        question: "Q4: Html is a _______ language ?",
        options: ["Object Oriented", "Procedural", "Oriented", "Markup"],
        answer: "Markup",
    },
    {
        question: "Q5: Which Html element make a bullet list ?",
        options: ["Bullet", "ol", "ul", "None of the above"],
        answer: "ul",
    },
    {
        question: "Q6: Who is making the Web standards ?",
        options: [
            "The World Wide Web Consortium",
            "Consortium",
            "Google",
            "Mozilla",
        ],
        answer: "The World Wide Web Consortium",
    },
    {
        question: "Q7: Choose the correct HTML element to define important text ?",
        options: ["important", "i", "strong", "b"],
        answer: "strong",
    },
    {
        question: "Q8: Which of these elements are all <table> elements ?",
        options: [
            "table tr td",
            "table head tfoot",
            "table tt tr",
            "None of the above",
        ],
        answer: "table tr td",
    },
    {
        question:
            "Q9: Inline elements are normally displayed without starting a new line ?",
        options: ["True", "False", "Both above", "None of the above"],
        answer: "True",
    },
    {
        question: "Q10: How can you make a numbered list?",
        options: ["ul", "dl", "list", "ol"],
        answer: "ol",
    },
];

let questionNumber = document.querySelector(".questionNumber");
let question = document.querySelector(".question");
let option1 = document.querySelector(".option1")
let option2 = document.querySelector(".option2")
let option3 = document.querySelector(".option3")
let option4 = document.querySelector(".option4")
let optionOneText1 = document.querySelector(".optionOneText1")
let optionOneText2 = document.querySelector(".optionOneText2")
let optionOneText3 = document.querySelector(".optionOneText3")
let optionOneText4 = document.querySelector(".optionOneText4")
let timerEl = document.querySelector(".timer");


let index = 0;
let score = 0;



const renderMCQs = () => {
    if (index === array.length) {
        alert(`MCQs is completed and your score is ${score}`)
        index = 0;
        score = 0;
    }
    else {
        const obj = array[index];
        questionNumber.innerHTML = `${index + 1} to ${array.length}`;
        question.innerHTML = `${obj.question}`;
        optionOneText1.innerHTML = `${obj.options[0]}`
        optionOneText2.innerHTML = `${obj.options[1]}`
        optionOneText3.innerHTML = `${obj.options[2]}`
        optionOneText4.innerHTML = `${obj.options[3]}`
    }


    const obj = array[index];
    questionNumber.innerHTML = `${index + 1} to ${array.length}`;
    question.innerHTML = `${obj.question}`;
    optionOneText1.innerHTML = `${obj.options[0]}`
    optionOneText2.innerHTML = `${obj.options[1]}`
    optionOneText3.innerHTML = `${obj.options[2]}`
    optionOneText4.innerHTML = `${obj.options[3]}`
}

renderMCQs()

const resetOption = ()=>{
    option1.checked = false;
    option2.checked = false;
    option3.checked = false;
    option4.checked = false;
}

const nextQuestion = () => {
    const currentobj = array[index];
    if(
        option1.checked === false &&
        option2.checked === false &&
        option3.checked === false &&
        option4.checked === false
    ){
        alert(`Please select an option first`)
        return;
    }
    
    // Answer checking option 1
    if(option1.checked){
        if(optionOneText1.innerHTML === currentobj.answer){
            score++;
        }
    }

    // Answer checking option 2
    if(option2.checked){
        if(optionOneText2.innerHTML === currentobj.answer){
            score++;
        }
    }
    // Answer checking option 3
    if(option3.checked){
        if(optionOneText3.innerHTML === currentobj.answer){
            score++;
        }
    }
    // Answer checking option 4
    if(option4.checked){
        if(optionOneText4.innerHTML === currentobj.answer){
            score++;
        }
    }

    index++;
    renderMCQs()
    resetOption()
}

const quizRestart = ()=>{
    index = 0;
    score = 0;
    renderMCQs()
    resetOption()
    // timer()
}

var minutes = 4;
var seconds = 60;

const stop = setInterval(timer,1000)

function timer(){
    
        seconds--;
        if(seconds < 0){
            seconds= 59;
            minutes--;
        }
        if(minutes == 0 && seconds == 0){
            clearInterval(stop)
            alert(`Time up! your score is ${score}`);
            // alert(`Quiz Restart`);
            quizRestart()
        }
        timerEl.innerHTML = `${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`
        
        console.log(seconds)
        
    }

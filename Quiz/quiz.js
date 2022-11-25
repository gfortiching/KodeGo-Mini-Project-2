const quizData = [
    {
        quesion: "19 + ..... = 42",
        a: '23',
        b: '61',
        c: '0',
        d: '42',
        correct: "a",
    },
    {
        quesion: "What is the symbol of pi?",
        a: '€',
        b: 'π',
        c: 'Ω',
        d: '∞',
        correct: "b",
    },
    {
        quesion: "Arrange the numbers in ascending order: 36, 12, 29, 21, 7",
        a: '36, 29, 21, 12, 7',
        b: '36, 29, 7, 21, 12',
        c: '7, 12, 21, 29, 36',
        d: 'None of these',
        correct: "c",
    },
    {
        quesion: "What is the greatest two digit number?",
        a: '10',
        b: '90',
        c: '11',
        d: '99',
        correct: "d",
    },
    {
        quesion: "How much is 90-19?",
        a: '71',
        b: '109',
        c: '89',
        d: 'None of these',
        correct: "a",
    }
];

const questionElm = document.getElementById('question');
const aElm = document.querySelector('label[for="a"]');
const bElm = document.querySelector('label[for="b"]');
const cElm = document.querySelector('label[for="c"]');
const dElm = document.querySelector('label[for="d"]');

const answers = document.querySelectorAll('input[name="answer"]');

const submitBtn = document.getElementById('submitBtn');
const quizElm = document.getElementById('quiz');

let quizCount = 0;
let score = 0;

const loadQuiz = () => {
    deselectAnswer();
    let currQuiz = quizData[quizCount];
    questionElm.innerHTML = currQuiz.quesion;
    aElm.innerHTML = currQuiz.a;
    bElm.innerHTML = currQuiz.b;
    cElm.innerHTML = currQuiz.c;
    dElm.innerHTML = currQuiz.d;
};

const getSelectedAnswer = () => {
    let selectedAnswer = false;

    answers.forEach(elm => {
        if(elm.checked) {
            selectedAnswer = elm.id;
        }
    });
    return selectedAnswer;
};

const deselectAnswer = () => {
    answers.forEach((elm) => {
        elm.checked = false;
    });
};

submitBtn.addEventListener('click', () => {
    let selectedAnswer = getSelectedAnswer();
    if (quizCount < quizData.length - 1)  {
        if (selectedAnswer) {
            if (selectedAnswer == quizData[quizCount].correct) {
                score++;
            }
            quizCount++;
            loadQuiz();
        }    
    }
    else {
        if (selectedAnswer) {
            if (selectedAnswer == quizData[quizCount].correct) {
                score++;
            }
        }
        quizElm.innerHTML = `<h1>Congratulations! You just scored ${score} out of ${quizData.length}</h1><button onclick="location.reload()">Play Again!</button>`;
    }
});

loadQuiz();
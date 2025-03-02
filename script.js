const questions = [
    {
        question: "Які головні функції товариств?",
        answers: [
            "Просвітництво",
            "Наукова діяльність",
            "Політична діяльність",
            "Усі варіанти вірні"
        ],
        correctAnswer: 3 // Індекс правильної відповіді в масиві answers (починаючи з 0)
    },
    {
        question: "Хто з діячів був учасником Кирило-Мефодіївського братства?",
        answers: [
            "Іван Франко",
            "Тарас Шевченко",
            "Михайло Грушевський",
            "Леся Українка"
        ],
        correctAnswer: 1
    },
    {
        question: 'Хто автор "Книги буття українського народу"?',
        answers: [
            "Тарас Шевченко",
            "Борис Грінченко",
            "Михайло Драгоманов",
            "Микола Костомаров"
        ],
        correctAnswer: 3
    },
    {
        question: "За діаграмою хто з діячів був найвпливовішим?",
        answers: [
            "Маркіян Шашкевич",
            "Борис Грінченко",
            "Іван Франко",
            "Пантелеймон Куліш"
        ],
        correctAnswer: 2
    },
    {
        question: 'Хто упорядкував "Словник української мови"?',
        answers: [
            "Маркіян Шашкевич",
            "Борис Грінченко",
            "Іван Франко",
            "Пантелеймон Куліш"
        ],
        correctAnswer: 1
    },
    {
        question: 'Хто очолював Наукове товариство імені Т.Шевченка у "золоту добу"?',
        answers: [
            "Михайло Грушевський",
            "Борис Грінченко",
            "Іван Франко",
            "Пантелеймон Куліш"
        ],
        correctAnswer: 0
    }
];

let sum = 0;
let currentQuestionIndex = 0;
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', askQuestion);

function showQuestion(question) {
    const questionContainer = document.getElementById('question');
    questionContainer.textContent = question.question;
}

function showAnswers(answers) {
    const answersContainer = document.getElementById('answers');

    answersContainer.innerHTML = '';
    answers.forEach((answer, index) => {
        const element = document.createElement('label');
        element.classList.add("list-group-item");

        const str = `<input class="form-check-input me-1" type="radio" name="answer" value="${index}"> ${answer}`;

        element.innerHTML = str;
        answersContainer.appendChild(element);



    });

}

function showSum(sum) {
    const sumContainer = document.getElementById('sum');
    sumContainer.textContent = `Ви набрали ${sum} балів`;


}

function showCorrectAnswer(correctAnswer) {
    const correctAnswerContainer = document.getElementById('sum');
    correctAnswerContainer.innerHTML = `Правильна відповідь "${correctAnswer}" <br> Ваша сума анульована`;
}

function finishQuiz() {
    const quizContainer = document.getElementById('question-container');
    quizContainer.innerHTML = '';
    const result = document.createElement('p');
    result.textContent = `Ви набрали ${sum} балів з ${questions.length} питань`;
    quizContainer.appendChild(result);

}

function showProgress(progress) {
    const progressContainer = document.getElementById('progress');
    progressContainer.style.width = `${100 / 6 * progress}%`;
    progressContainer.textContent = `${progress}`;

}

async function askQuestion() {
    const answersContainer = document.getElementById('answers');
    let selectedAnswerIndex = null;

    // Перебираємо всі input елементи в answersContainer
    for (let i = 0; i < answersContainer.children.length; i++) {
        const input = answersContainer.children[i].querySelector('input');
        if (input.checked) {
            selectedAnswerIndex = i; // Зберігаємо індекс вибраного варіанта
            break; // Виходимо з циклу, оскільки вибрано тільки один варіант
        }
    }

    console.log(selectedAnswerIndex); // Виведе індекс вибраного варіанта



    let question = questions[currentQuestionIndex];
    showProgress(currentQuestionIndex + 1
    );
    if (question.correctAnswer == selectedAnswerIndex) {
        sum = sum + 1000;
        showSum(sum);
    }
    else {
        sum = 0;
        showCorrectAnswer(question.answers[question.correctAnswer]);
        finishQuiz();

    }

    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        finishQuiz();
    }

    question = questions[currentQuestionIndex];
    showQuestion(question);
    showAnswers(question.answers);

}


let question = questions[currentQuestionIndex];
showQuestion(question);
showAnswers(question.answers);











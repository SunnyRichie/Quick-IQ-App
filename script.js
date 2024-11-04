const questions = [
  {
    question: "What is the capital of France?",
    options: [
      { text: "Berlin", answer: false },
      { text: "Madrid", answer: false },
      { text: "Paris", answer: true },
      { text: "Rome", answer: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: [
      { text: "Earth", answer: false },
      { text: "Mars", answer: true },
      { text: "Jupiter", answer: false },
      { text: "Venus", answer: false }
    ]
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      { text: "Atlantic Ocean", answer: false },
      { text: "Indian Ocean", answer: false },
      { text: "Arctic Ocean", answer: false },
      { text: "Pacific Ocean", answer: true }
    ]
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      { text: "Charles Dickens", answer: false },
      { text: "Jane Austen", answer: false },
      { text: "William Shakespeare", answer: true },
      { text: "Mark Twain", answer: false }
    ]
  },
  {
    question: "What is the chemical symbol for water?",
    options: [
      { text: "O2", answer: false },
      { text: "H2O", answer: true },
      { text: "CO2", answer: false },
      { text: "NaCl", answer: false }
    ]
  },
  {
    question: "In which year did the Titanic sink?",
    options: [
      { text: "1905", answer: false },
      { text: "1912", answer: true },
      { text: "1918", answer: false },
      { text: "1920", answer: false }
    ]
  },
  {
    question: "What is the largest continent by land area?",
    options: [
      { text: "Africa", answer: false },
      { text: "Asia", answer: true },
      { text: "Europe", answer: false },
      { text: "South America", answer: false }
    ]
  },
  {
    question: "Which element has the atomic number 1?",
    options: [
      { text: "Helium", answer: false },
      { text: "Oxygen", answer: false },
      { text: "Hydrogen", answer: true },
      { text: "Nitrogen", answer: false }
    ]
  },
  {
    question: "Who was the first President of the United States?",
    options: [
      { text: "Abraham Lincoln", answer: false },
      { text: "Thomas Jefferson", answer: false },
      { text: "George Washington", answer: true },
      { text: "John Adams", answer: false }
    ]
  },
  {
    question: "Which language is the most widely spoken in the world?",
    options: [
      { text: "Spanish", answer: false },
      { text: "Mandarin Chinese", answer: true },
      { text: "English", answer: false },
      { text: "Hindi", answer: false }
    ]
  },
  {
    question: "What is the smallest planet in our solar system?",
    options: [
      { text: "Mars", answer: false },
      { text: "Mercury", answer: true },
      { text: "Venus", answer: false },
      { text: "Neptune", answer: false }
    ]
  },
  {
    question: "How many continents are there on Earth?",
    options: [
      { text: "5", answer: false },
      { text: "6", answer: false },
      { text: "7", answer: true },
      { text: "8", answer: false }
    ]
  },
  {
    question: "What is the tallest mountain in the world?",
    options: [
      { text: "Mount Kilimanjaro", answer: false },
      { text: "K2", answer: false },
      { text: "Mount Everest", answer: true },
      { text: "Mount Fuji", answer: false }
    ]
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: [
      { text: "China", answer: false },
      { text: "South Korea", answer: false },
      { text: "Japan", answer: true },
      { text: "Thailand", answer: false }
    ]
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: [
      { text: "Gold", answer: false },
      { text: "Iron", answer: false },
      { text: "Diamond", answer: true },
      { text: "Silver", answer: false }
    ]
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: [
      { text: "Oxygen", answer: false },
      { text: "Nitrogen", answer: false },
      { text: "Carbon Dioxide", answer: true },
      { text: "Methane", answer: false }
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      { text: "Vincent van Gogh", answer: false },
      { text: "Pablo Picasso", answer: false },
      { text: "Leonardo da Vinci", answer: true },
      { text: "Claude Monet", answer: false }
    ]
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: [
      { text: "90°C", answer: false },
      { text: "100°C", answer: true },
      { text: "120°C", answer: false },
      { text: "140°C", answer: false }
    ]
  },
  {
    question: "What is the longest river in the world?",
    options: [
      { text: "Amazon River", answer: false },
      { text: "Yangtze River", answer: false },
      { text: "Nile River", answer: true },
      { text: "Mississippi River", answer: false }
    ]
  },
  {
    question: "What currency is used in Japan?",
    options: [
      { text: "Dollar", answer: false },
      { text: "Yen", answer: true },
      { text: "Euro", answer: false },
      { text: "Won", answer: false }
    ]
  }
];


const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const timerElement = document.getElementById('timer');
const progressElement = document.getElementById('progress');
const startButton = document.getElementById('start-btn');
const instructionModal = document.getElementById('instruction-modal');
const appContainer = document.querySelector('.app');

let currentQuestionIndex = 0;
let score = 0;
let questionTimeLeft = 30;
let totalTimeLeft = 600; // 10 minutes total in seconds
let questionTimer;
let totalTimer;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  questionTimeLeft = 30;
  totalTimeLeft = 600;
  nextButton.innerHTML = 'Next';
  appContainer.style.display = 'block';
  startButton.style.display = 'none';
  instructionModal.style.display = 'none';
  questionTimer = setInterval(updateQuestionTimer, 1000);
  totalTimer = setInterval(updateTotalTimer, 1000);
  showQuestion();
  updateProgress();
}

function updateQuestionTimer() {
  questionTimeLeft--;
  if (questionTimeLeft === 0) {
    handleNextButton();
  }
}

function updateTotalTimer() {
  totalTimeLeft--;
  const minutes = Math.floor(totalTimeLeft / 60);
  const seconds = totalTimeLeft % 60;
  timerElement.innerHTML = `Time Left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
  // Change timer color to red in the last 30 seconds
  if (totalTimeLeft <= 30) {
    timerElement.style.color = 'red';
  } else {
    timerElement.style.color = 'black';
  }

  if (totalTimeLeft === 0) {
    clearInterval(totalTimer);
    clearInterval(questionTimer);
    showScore();
  }
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option.text;
    button.classList.add('btn');
    if (option.answer) {
      button.dataset.answer = option.answer;
    }
    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
  questionTimeLeft = 30;
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.answer === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.answer === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'block';
  updateProgress();
}

function showScore() {
  clearInterval(questionTimer);
  clearInterval(totalTimer);
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Play Again';
  nextButton.style.display = 'block';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function updateProgress() {
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressElement.style.width = `${progressPercentage}%`;
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startButton.addEventListener('click', () => {
  instructionModal.style.display = 'flex';
  setTimeout(() => {
    startQuiz();
  }, 15000);
});
const quizData = [
    {
      question: "Was ist die Hauptstadt von Frankreich?",
      options: ["Berlin", "Madrid", "Paris", "Rom"],
      correctAnswer: "Paris"
    },
    {
      question: "Wie viele Planeten hat unser Sonnensystem?",
      options: ["7", "8", "9", "10"],
      correctAnswer: "8"
    },
    // Weitere Fragen hier hinzufügen...
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
  
    questionElement.textContent = quizData[currentQuestion].question;
    optionsElement.innerHTML = '';
  
    quizData[currentQuestion].options.forEach((option, index) => {
      const li = document.createElement('li');
      li.className = 'option';
      li.textContent = option;
      li.onclick = () => checkAnswer(index);
      optionsElement.appendChild(li);
    });
  }
  
  function checkAnswer(optionIndex) {
    if (quizData[currentQuestion].correctAnswer === quizData[currentQuestion].options[optionIndex]) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Quiz beendet. Du hast ${score} von ${quizData.length} Fragen richtig beantwortet.`;
  
    drawChart();
  }
  
  function drawChart() {
    const canvas = document.getElementById('chart');
    const ctx = canvas.getContext('2d');
    const percentage = (score / quizData.length) * 100;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff'; // Unsichtbare Mitte
    ctx.fill();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, (percentage / 100) * Math.PI * 2);
    ctx.strokeStyle = '#3498db';
    ctx.lineWidth = 10; // Breite des Kreisrands
    ctx.stroke();
    ctx.closePath();
  }
  
  loadQuestion();
  
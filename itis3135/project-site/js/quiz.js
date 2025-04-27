// questions array to store quiz data
const questions = [
    {
      question: "What is the safest way to use public Wi-Fi?",
      options: [
        { label: "Connect and browse freely", value: "a" },
        { label: "Use a VPN when connecting", value: "b" },
        { label: "Only use HTTPS websites", value: "c" }
      ],
      correct: "b"
    },
    {
      question: "What is phishing?",
      options: [
        { label: "A type of firewall", value: "a" },
        { label: "Sending fake messages to steal info", value: "b" },
        { label: "Encrypting data to protect it", value: "c" }
      ],
      correct: "b"
    },
    {
      question: "Which password is most secure?",
      options: [
        { label: "Password123", value: "a" },
        { label: "MyDogName", value: "b" },
        { label: "9f$X@1#bR!", value: "c" }
      ],
      correct: "c"
    }
  ];
  
  // Dynamically populate the quiz
  const quizForm = document.getElementById('cyberQuiz');
  questions.forEach( (q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('quiz-question');
    
    const questionTitle = document.createElement('h3');
    questionTitle.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionTitle);
  
    q.options.forEach( (option) => {
      const label = document.createElement('label');
      label.innerHTML = `
        <input type="radio" name="q${index + 1}" value="${option.value}"> ${option.label}
      `;
      questionDiv.appendChild(label);
    });
  
    quizForm.appendChild(questionDiv);
  });
  
  // Check the quiz and display results
  function checkQuiz() {
    let score = 0;
  
    questions.forEach( (q, index) => {
      const selected = document.querySelector(`input[name="q${index + 1}"]:checked`);
      if (selected && selected.value === q.correct) {
        score++;
      }
    });
  
    const resultText = `You scored ${score} out of ${questions.length}.`;
    document.getElementById("quiz-result").textContent = resultText;
  }
  
const questions = [
  {
    snack: "Apple slices with peanut butter",
    answer: "safe",
    fact: "Fruits with healthy fats are great for stable blood sugar!"
  },
  {
    snack: "Sugary soda",
    answer: "not",
    fact: "Too much sugar! Causes big spikes in blood sugar."
  },
  {
    snack: "Carrot sticks",
    answer: "safe",
    fact: "Crunchy, sweet, and full of fiber. Great choice!"
  },
  {
    snack: "Chocolate bar",
    answer: "not",
    fact: "Too sugary and not balanced with protein or fiber."
  },
  {
    snack: "Trail mix with raisins and nuts",
    answer: "maybe",
    fact: "Good mix — but raisins have sugar. Eat with care!"
  },
  {
    snack: "Sugar-free yogurt",
    answer: "safe",
    fact: "Protein-packed and low in sugar. 👍"
  },
  {
    snack: "Cupcakes",
    answer: "not",
    fact: "Lots of sugar and carbs. Not diabetes-friendly!"
  },
  {
    snack: "Cheese cubes",
    answer: "safe",
    fact: "Protein and fat help steady blood sugar."
  },
  {
    snack: "Granola bar",
    answer: "maybe",
    fact: "Some are okay, but many have hidden sugar. Always check labels!"
  },
  {
    snack: "Grapes",
    answer: "maybe",
    fact: "Natural sugar, so eat with protein like cheese or nuts."
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question').textContent = `Is this snack safe for diabetics? 🍽️\n👉 ${q.snack}`;
  document.getElementById('feedback').textContent = '';
  document.getElementById('next').style.display = 'none';
}

function answer(choice) {
  const q = questions[currentQuestion];
  const feedback = document.getElementById('feedback');

  if (choice === q.answer) {
    feedback.textContent = `✅ Correct! ${q.fact}`;
  } else {
    feedback.textContent = `❌ Oops! ${q.fact}`;
  }

  document.getElementById('next').style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    currentQuestion = 0;
    shuffleArray(questions); // Optional: reshuffle questions on restart
  }
  loadQuestion();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Initialize
shuffleArray(questions);
loadQuestion();
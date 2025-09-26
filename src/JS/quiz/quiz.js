import fetchData from "../data/fetchData.js";
import { Question } from "./quizClass.js";

export default async function quiz(category) {
  const data = await fetchData();
  const quizzes = data.quizzes;

  let score = 0;
  let currentIndex = 0;

  const root = document.querySelector("#root");
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Nästa fråga";
  nextBtn.disabled = true;
  nextBtn.classList.add("nextBtn");
  root.appendChild(nextBtn);

  // hitta rätt quiz
  const selectedQuiz = quizzes.find(q => q.category === category);
  if (!selectedQuiz) {
    root.innerHTML = "<p>Ingen matchande kategori hittades.</p>";
    return;
  }

  // funktion för att visa en fråga
  function showQuestion(index) {
    root.innerHTML = ""; // töm innan vi renderar nästa
    const q = selectedQuiz.questions[index];

    const question = new Question(q, index, (isCorrect) => {
      if (isCorrect) score++;
      nextBtn.disabled = false;
    });

    root.appendChild(question.render());
    root.appendChild(nextBtn);
  }

  // klick på nästa
  nextBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex < selectedQuiz.questions.length) {
            showQuestion(currentIndex);
            nextBtn.disabled = true;
        } else {
            // Hämta alla highscores
            let highscores = localStorage.getItem("highscores");
            highscores = highscores ? JSON.parse(highscores) : {};

            // Spara bara om ny score är högre
            if (!highscores[category] || score > highscores[category]) {
                highscores[category] = score;
                localStorage.setItem("highscores", JSON.stringify(highscores));
            }

            // Visa resultat
            root.innerHTML = `<h2>Quiz klart!</h2><p>Din poäng: ${score}</p>
                            <p>Highscore (${category}): ${highscores[category]}</p>`;
        }
    });

  // starta quiz
  showQuestion(currentIndex);
}

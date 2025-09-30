import fetchData from "../data/fetchData.js";
import { Question } from "./quizClass.js";

function numQuestions(num, length){
  let progress = document.querySelector(".progress");
  if (progress){
    progress.textContent = num + " / " + length;
  } else{
    progress = document.createElement("p");
    progress.classList.add("progress")
    progress.textContent = num + " / " + length;
    root.appendChild(progress);
  }
}

export default async function quiz(category) {
  const data = await fetchData();
  const quizzes = data.quizzes;

  document.getElementById("root").innerHTML = "";

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
    numQuestions(1,selectedQuiz.questions.length)
  }

  // klick på nästa
  nextBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex < selectedQuiz.questions.length) {
            showQuestion(currentIndex);
            numQuestions(currentIndex + 1,selectedQuiz.questions.length)
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

            root.innerHTML = `
                <h2>Quiz slutfört!</h2>
                <p>Ditt resultat: ${score} av ${selectedQuiz.questions.length}</p>
                <p>Din högsta poäng i kategorin "${category}": ${highscores[category]}</p>
                <button id="restart-btn">Starta om</button>
            `;
            // Gömmer emoji-knappen på resultatsidan.
             const emojiBtn = document.getElementById("restart-btn");
             const floatingBtn = document.querySelector("body > #restart-btn"); // den som skapas i main.js
        if (floatingBtn) {
           floatingBtn.classList.add("hidden");
 }

// Restart för textknappen i resultatet
emojiBtn.addEventListener("click", () => {
    location.reload();
});
            document.getElementById("restart-btn").addEventListener("click", () => {
                location.reload();
            });
        }
    });

  // starta quiz
  showQuestion(currentIndex);
}
export class Question {
  constructor(questionObj, index, onAnswer) {
    this.question = questionObj;
    this.index = index;
    this.onAnswer = onAnswer;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("question");

    wrapper.innerHTML = `
      <h4 class="question-text">${this.index + 1}. ${this.question.question}</h4>
      <ul class="answers">
        ${this.question.options
          .map(
            option => `<li><button class="answer-btn">${option}</button></li>`
          )
          .join("")}
      </ul>
    `;

    // Lägg till klick-event för alla knappar
    wrapper.querySelectorAll(".answer-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const isCorrect = btn.textContent === this.question.answer;

        // färglägg knappen
        btn.style.background = isCorrect ? "var(--color-success)" : "var(--color-danger)";

        // disable alla knappar efter val
        wrapper.querySelectorAll(".answer-btn").forEach(b => (b.disabled = true));

        // skicka tillbaka resultatet till quiz-logiken
        if (this.onAnswer) {
          this.onAnswer(isCorrect);
        }
      });
    });

    return wrapper;
  }
}

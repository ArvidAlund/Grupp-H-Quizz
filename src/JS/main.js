import quiz from "./quiz/quiz.js";
import start from "./start/start.js";

start();

document.querySelector("#start-btn").addEventListener("click", ()=>{
    const selected = document.querySelector('[data-selected="true"]');
    const category = selected ? selected.textContent : null;

    if (category == null){
        alert("Välj en kategori")
        return
    }
    
 quiz(category);

    // 🔄 Lägg till restart-knapp när quiz startar
    if (!document.getElementById("restart-btn")) {
        const restartBtn = document.createElement("button");
        restartBtn.id = "restart-btn";
        restartBtn.textContent = "🔄";
        document.body.appendChild(restartBtn);

        restartBtn.addEventListener("click", () => {
            location.reload();
        });
    }
});

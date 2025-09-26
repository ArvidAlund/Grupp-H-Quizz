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
    
    quiz(category)
})
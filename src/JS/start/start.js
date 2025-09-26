export default function start(){
    const Categorybuttons = document.querySelectorAll(".category-btn");
    Categorybuttons.forEach((button) =>{
        button.addEventListener("click", ()=>{
            button.style.background = "rgb(118, 176, 226)";
            button.dataset.selected = "true";
            Categorybuttons.forEach((Button) =>{
                if (button != Button){
                    Button.style.background = "";
                    Button.dataset.selected = "false";
                }
            })
        })
    })
}
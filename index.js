const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questioEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");


let score = JSON.parse(localStorage.getItem("score"));

questioEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value; /*+ converting from string to int*/
    if(userAns == correctAns){
        score++;
    }else{
        score--;
        updateLocalStorage();
    }

});

/*Memorizse the score*/
function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}
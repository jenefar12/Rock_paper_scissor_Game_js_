const computerChoice=document.getElementById("c_choice");
const userchoice=document.getElementById("u_choice");
const result=document.getElementById("result");
const c_choice=document.querySelectorAll("button");
const c_score=document.getElementById("c_score")
const u_score=document.getElementById("u_score")
let score1=0,score2=0;

c_choice.forEach(btn=>{
    btn.addEventListener("click",()=>{
        const random=Math.floor(Math.random()*c_choice.length);
        computerChoice.innerHTML=c_choice[random].id;
        userchoice.innerHTML=btn.id;

        if(computerChoice.textContent === userchoice.textContent){
            result.innerHTML="match drawn"
        }else if(computerChoice.textContent === "rock" && userchoice.textContent === "scissor"){
            result.innerHTML="you lose";
            score1++;
            c_score.innerHTML=score1;
        }else if(computerChoice.textContent === "paper" && userchoice.textContent === "rock"){
            result.innerHTML="you lose"
            score1++;
            c_score.innerHTML=score1;
        }else if(computerChoice.textContent === "scissor" && userchoice.textContent === "paper"){
            result.innerHTML="you lose"
            score1++;
            c_score.innerHTML=score1;
        }else if(userchoice.textContent === "rock" && computerChoice.textContent === "scissor"){
            result.innerHTML="you win"
            score2++;
            u_score.innerHTML=score2;
        }else if(userchoice.textContent === "paper" && computerChoice.textContent === "rock"){
            result.innerHTML="you win"
            score2++;
            u_score.innerHTML=score2;
        }else if(userchoice.textContent === "scissor" && computerChoice.textContent === "paper"){
            result.innerHTML="you win"
            score2++;
            u_score.innerHTML=score2;
        }

        if(score1 === 10){
           window.location.href="fail.html"
        }

        if(score2 === 10){
            window.location.href="won.html"
        }
    })
})





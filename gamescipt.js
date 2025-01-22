let usercount=document.body.querySelector("#user-score-count");
let compcount=document.body.querySelector("#comp-score-count");

let userscore=0;
let compscore=0;

let userchoices=document.body.querySelectorAll(".choice");
let userchoice;
let display=document.body.querySelector("#msg");
let compchoices=["rock","paper","scissors"];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function choiceGenerator(){
    let randomchoice=getRandomInt(3);
    return compchoices[randomchoice];
}
let userwin=false;

function showwinner(){
    
    if(userwin){
        display.innerText="You Won ! play again or not your wish 😄 👍";
        usercount.innerText=++userscore;
        display.style.backgroundColor="Green";
        display.classList.add("animation");

    }
    else{
        display.classList.remove("animation");
        display.innerText="You lost ! play again or not your wish 😔";
        compcount.innerText=++compscore;    
        display.style.backgroundColor="Red";
    }
    
}
function game(userchoice,compchoice){
    
    if(userchoice===compchoice){
        display.style.backgroundColor="white";
        display.innerText="The game was draw! pick again or not your wish";
        display.classList.remove("animation");
    }
    else if(userchoice==="rock"&& compchoice==="paper"){
        userwin=false;
        showwinner();
    }
    else if(userchoice==="rock"&& compchoice==="scissors"){
        userwin=true;
        showwinner();
    }
    else if(userchoice==="paper"&& compchoice==="rock"){
        userwin=true;
        showwinner();
    }
    else if(userchoice==="paper"&& compchoice==="scissors"){
        userwin=false;
        showwinner();
    }
    
        
    
    else if(userchoice==="scissors"&& compchoice==="paper"){
        userwin=true;
        showwinner();
    
    }
    else if(userchoice==="scissors"&& compchoice==="rock"){
        userwin=false;
        showwinner();
       
    }
    
}



userchoices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        userchoice=choice.getAttribute("id");

        let compchoice=choiceGenerator();

        game(userchoice,compchoice);
    })

})







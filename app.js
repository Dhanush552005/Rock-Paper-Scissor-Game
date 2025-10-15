let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");

const compgennumber=()=>{
    let options=['rock','paper','scissor'];
     let rand=Math.floor(Math.random()*3);
     return options[rand];
}
let draw=()=>{
    console.log("round is tied");
    message.innerText="round is draw";
}
const winner=(userwin)=>{
    if(userwin){
        console.log("you win");
    message.innerText="user win";
}
        else{
            console.log("computer win");
            message.innerText="computer win";
        }
    
}
let playgame=(choiceid)=>{
    console.log("userchoice =",choiceid);
    const compchoice=compgennumber();
    console.log("computerchoice=",compchoice);
if(choiceid==compchoice){
    draw();
}
else{
    let userwin=true;
    if(choiceid=="rock"){
        userwin=compchoice==="paper"?false:true;
    }
    else if(choiceid=="paper"){
        userwin=compchoice==="rock"?true:false;
    }
    else{
        userwin=compchoice==="rock"?false:true;
    }
winner(userwin);
scoreupdate(userwin);}}
let message=document.querySelector("#abc");


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceid=choice.getAttribute("id");
          playgame(choiceid);
    });
});
function scoreupdate(userwin){
    if(userwin){
        userscore++;
        userupdate.innerText=userscore;
    }
    else{
        compscore++;
        compupdate.innerText=compscore;
    }
}
let userupdate=document.querySelector("#user");
let compupdate=document.querySelector("#comp");

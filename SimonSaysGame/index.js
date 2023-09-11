let userseq=[];
let gameseq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false)
    {
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";  
        },150);
        started=true;
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function usrFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    // choosing random button
    let rndidx=Math.floor(Math.random()*4);
    let rndColor=btns[rndidx];
    let rndbtn=document.querySelector(`.${rndColor}`);
    gameseq.push(rndColor);
    console.log(gameseq);
    for(let gameseqidx=0;gameseqidx<gameseq.length;gameseqidx++)
    {
        setTimeout(
            function(){
                btnFlash(document.querySelector(`.${gameseq[gameseqidx]}`))
            },700*(gameseqidx+1));
    }
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length== gameseq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML =`Game Over ! Your Score was <b> ${level}</b> <br> Press any key to start `;
        document.querySelector("body").style.backgroundColor="red";
        reset();
    }
}

function reset()
{
        started=false;
        userseq=[];
        gameseq=[];
        level=0;
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPressed);
}

function btnPressed(){
    let btn=this;
    usrFlash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);
    console.log(userseq.length);
    checkAns(userseq.length-1);
}
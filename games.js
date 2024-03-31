let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");




const gencomchoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];

};



const drawgames=()=>{
    
    msg.innerText="Game was draw.Play again";
    msg.style.backgroundColor="black";
    //msg.target.style.color="pink";
};



const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You win! your ${userchoice} beat ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
       compscore++;
       compscorepara.innerText=compscore;
        msg.innerText=`You lost! ${compchoice} beat your ${userchoice}`;
        msg.style.backgroundColor="Red";
    }
};



const playgame=(userchoice)=>{
    //generate computer choice
    const compchoice=gencomchoice();
    console.log("computer choice = ",compchoice);

    if(userchoice===compchoice)
    {
        //draw games
        drawgames();
    }
    else
    {
        let userwin=true;
        if(userchoice  ===  "rock")
        { 
            //scissors,paper =>computer
            userwin=compchoice  ===  "paper"?false:true;
        }
        else if(userchoice  ===  "paper")
        {
            //scissors,rock =>computer
            userwin=compchoice  ===  "scissor"?false:true;
        }
        else
        {
            //rock,paper =>computer
            userwin=compchoice  ===  "rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
        }
    };





choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("Id");
       // console.log("choice was clicked",userchoice);
        playgame(userchoice);

    });
});
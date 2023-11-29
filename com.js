    //game sequenece taken in a array
    let gameSeq=[];

    //user sequenece taken in a array                                     
let userSeq=[];                                    

    //  taking btn color into array to click
let btns= ["red", "yellow", "green", "purple"];          
    //game is not started ,so its in false state
let started=false;      
    //at before starting, game is at level 0;
let level=0;                                      

let h2=document.querySelector("h2");

    //taking a eventlistener to document. using keypress event to start the game by pressing any key;
document.addEventListener("keypress", function(){  
    //at starting a game alays in flase start means didnt begin the game yet;
    if(started==false){                            
        console.log("game started");    
    //ture because game start at only one time after it will level up r game over;
        started=true;                              
    // calling the levelup function inside;
        levelUp();                                 
    }
});
    //button has to flash when started and also when user clicked on it;
function gameFlash(btn){        
    //so took a function to call, whenever we want;
    btn.classList.add("flash");  
    //only the button has to flash in whote in 1sec ,so we use set timeout method;
    setTimeout(function() {        
    // after we remove it, get back to original color;
        btn.classList.remove("flash");            
    },250);
}
    //button has to flash when started and also when user clicked on it;
function userFlash(btn){     
    //so took a function to call, whenever we want;
    btn.classList.add("userflash");  
    //only the button has to flash in whote in 1sec ,so we use set timeout method;
    setTimeout(function() {    
    // after we remove it, get back to original color;
        btn.classList.remove("userflash");             
    },250);
}
    //taking function to levelup the game;
function levelUp(){ 
    //as the user goes to next level we have to empty 
    //the userseq because user has to again click the seq from starting btn color;
    userSeq=[];               
    //level will be updating and show replace it in h2 heading;                     
    level++;                                    
    //h2 will update its level;
    h2.innerText=`Level ${level}`;                
    //getting a random number btwn 0-3;
    let randIdx=Math.floor(Math.random() *4);   
     //that random number is taken into btns colors;            
    let randColor=btns[randIdx];                   
    //that btns colors with its random index num will be into randBtn;
    let randBtn=document.querySelector(`.${randColor}`);      
    // the randcolor pushed in gameseq
    gameSeq.push(randColor);                               
    console.log(gameSeq);
    // it will select any random button and assigned its callback to btnflash;
    gameFlash(randBtn);                                   
}
    //function to check ans same are not;  
function checkAns(idx){                                                                     
     // checking indx of color same r not;
   if(userSeq[idx] === gameSeq[idx]){        
    // if the length of both game and user are same then it will level up
    if(userSeq.length == gameSeq.length){ 
    //level up the game and setting time interval 1sec btw the flash to know the next flash btn;             
        setTimeout(levelUp, 1000);                          
    }
   }
   // if the checkAns is worng, also the final score will br shown & then it will print;
   else{
    h2.innerHTML=`Game over! Your score was <b>${level}</b> 
    <br> Press any key to start.
    <br> `;                       
    //setting a bgcolor as red for a blink as gave was over
    document.querySelector("body").style.backgroundColor="red";       
    // again it will be back to white color;            
    setTimeout(function(){
    // game over all the functions will be reset 
        document.querySelector("body").style.backgroundColor="white";              
    }, 250);
    reset();                                                                      

}
}
    // function woth btnPress that excute button pressed;
function btnPress(){
    let btn=this;  
    // bt click the btn we r calling the btnFlash function to falsh the button;                                       
    userFlash(btn);                                         
    //getting id of the btncolor, which user was clicked
    userColor=btn.getAttribute("id");    
    //pushing the clicked btn color by user into userseq                   
    userSeq.push(userColor);                                 
    //checking the userSeq idx color legnth;
    checkAns(userSeq.length-1);                           
}
    // accesed all buttons in page;
let allBtns=document.querySelectorAll(".btn");   
    // loops for all buttons;           
for(btn of allBtns){   
    // eventlistener that, if we click btnPress,it will give output;                                    
    btn.addEventListener("click", btnPress);              
}

    //game over,then all the fuction will be rest to starting level;
function reset(){ 
    //again all will start as new game;                                        
    started=false;                                        
    gameSeq=[];
    userSeq=[];
    level =0;
}



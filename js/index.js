// create dictionary
const handOptions = {
    "rock": "/assets/Rock.png",
    "paper": "/assets/Paper.png",
    "scissors": "/assets/Scissors.png"
}
let SCORE = 0;

const pickUserHand = (hand) => {
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    document.getElementById("userPickImage").src = handOptions[hand];
    pickComputerHand(hand);
}
const pickComputerHand = (hand)=>{
    let hands = ["rock", "paper", "scissors"]
    let cpHand = hands[Math.floor(Math.random()*hands.length)];
    document.getElementById("computerPickImage").src=handOptions[cpHand];
    referee(hand,cpHand);
};

const referee = (userHand,computerHand)=>{
   if(userHand =="paper" && computerHand =="scissors"){
       setDecision("YOU LOSE!");
   }
   if(userHand =="paper" && computerHand =="rock"){
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
}
if(userHand =="paper" && computerHand =="paper"){
    setDecision("TIE!");
}
if (userHand == "rock" && computerHand  == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && computerHand  == "paper") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "rock" && computerHand  == "rock") {
    setDecision("TIE!");
  }
  if (userHand == "scissors" && computerHand  == "scissors") {
    setDecision("TIE!");
  }
  if (userHand == "scissors" && computerHand  == "rock") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "scissors" && computerHand  == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
};

const setDecision = (decision)=>{
    document.querySelector(".decision h1").innerText =decision;
}
const setScore = (newScore)=>{
    SCORE = newScore;
    document.querySelector(".score h1").innerText =newScore;
};

const restartGame=()=>{
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
}
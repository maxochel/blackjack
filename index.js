
let BotCards = [];
let PlayerCards = [];

BotCards[0] = Math.floor(Math.random() * 10 + 1);
PlayerCards[0] = Math.floor(Math.random() * 10 + 1);
BotCards[1] = Math.floor(Math.random() * 10 + 1);
PlayerCards[1] = Math.floor(Math.random() * 10 + 1);

let PlayerCardsSum = PlayerCards[0] + PlayerCards[1];
let BotCardsSum = BotCards[0] + BotCards[1];

document.getElementById('BotCards').innerHTML += "<div class=\"visible\">" + BotCards[1] + "</div>";
document.getElementById('BotCards').innerHTML += "<div>" + BotCards[0] + "</div>";
document.getElementById('PlayerCards').innerHTML += "<div>" + PlayerCards[1] + "</div>";
document.getElementById('PlayerCards').innerHTML += "<div>" + PlayerCards[0] + "</div>";

document.getElementById("YourSum").innerText = PlayerCardsSum;

document.getElementById("BotSum").innerText = BotCards[1];

function Take() {
  PlayerCards[PlayerCards.length] = Math.floor(Math.random() * 10 + 1);
  document.getElementById('PlayerCards').innerHTML += "<div>" + PlayerCards[PlayerCards.length - 1] + "</div>";
  PlayerCardsSum += PlayerCards[PlayerCards.length - 1];
  document.getElementById("YourSum").innerText = PlayerCardsSum;

  if (PlayerCardsSum > 21) {
    document.querySelector(".buttons").classList.add("inactive-buttons");
    document.querySelector(".battle-ground").innerText = "You Lose!";
  }
}

function Stand() {
  while(BotCardsSum < PlayerCardsSum && BotCardsSum != 21 && PlayerCardsSum <= 21 || BotCardsSum < 16  && BotCardsSum <= PlayerCardsSum) {
    TakeBot();
  }

  document.querySelector("#BotCards").classList.remove("hidden-cards");
  document.querySelector(".buttons").classList.add("inactive-buttons");
  document.getElementById("BotSum").innerText = BotCardsSum;

  if (BotCardsSum == PlayerCardsSum) {
      document.querySelector(".battle-ground").innerText = "Draw!";
  } else if (BotCardsSum == 21 || PlayerCardsSum < 21) {
    document.querySelector(".battle-ground").innerText = "You Lose!"; }
  else { document.querySelector(".battle-ground").innerText = "You Win!!!"; }
}

function TakeBot() {
  BotCards[BotCards.length] = Math.floor(Math.random() * 10 + 1);
  BotCardsSum += BotCards[BotCards.length - 1];
  document.getElementById('BotCards').innerHTML += "<div>" + BotCards[BotCards.length - 1] + "</div>";
  document.getElementById("BotSum").innerText = BotCardsSum;
}

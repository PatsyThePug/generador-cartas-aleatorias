window.onload = function () {
    const suits = ["♠", "♥", "♣", "♦"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
  
    const card = document.getElementById("card");
  
    card.querySelector(".top-suit").textContent = randomSuit;
    card.querySelector(".number").textContent = randomValue;
    card.querySelector(".bottom-suit").textContent = randomSuit;
  
    const isRed = randomSuit === "♥" || randomSuit === "♦";
    card.style.color = isRed ? "red" : "black";
  };
  
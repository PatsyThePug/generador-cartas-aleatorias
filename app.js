window.onload = function () {
    const suits = ["♠", "♥", "♣", "♦"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const isRed = randomSuit === "♥" || randomSuit === "♦";
  
    document.querySelector(".top-suit").textContent = randomSuit;
    document.querySelector(".number").textContent = randomValue;
    document.querySelector(".bottom-suit").textContent = randomSuit;
  
    document.getElementById("card").style.color = isRed ? "red" : "black";
  };
  
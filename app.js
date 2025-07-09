window.onload = function () {
  const suits = ["♦", "♥", "♠", "♣"];
  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  const isRed = randomSuit === "♦" || randomSuit === "♥";

  document.querySelector(".top-suit").innerHTML = randomSuit;
  document.querySelector(".number").innerHTML = randomNumber;
  document.querySelector(".bottom-suit").innerHTML = randomSuit;

  document.querySelector(".card").style.color = isRed ? "red" : "black";
};

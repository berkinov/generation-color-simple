const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "blue",
  "#fff000",
  "#000fff",
  "#000",
  "#ccc",
  "#1c1c1c",
  "tomato",
  "#19f",
  "#413c3c",
  "#1c70df",
  "#e71348"
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

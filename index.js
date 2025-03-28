const tombola = document.getElementById("tombola");
const button = document.getElementById("bottone");

for (let i = 0; i <= 89; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("caselle");

  newDiv.innerText = i + 1;

  tombola.appendChild(newDiv);
}

const getRandomNum = function (range) {
  const randIndex = Math.floor(Math.random() * range.length);
  const random = range.splice(randIndex, 1)[0];
  return random;
};
const generateRandNumber = function (range) {
  const random = getRandomNum(range);
  const randNumDiv = document.getElementById("randNum");
  randNumDiv.innerText = "Numero: " + random;
  const cells = document.querySelectorAll(".tombola");
  cells[random - 1].classList.add("highlight");
};

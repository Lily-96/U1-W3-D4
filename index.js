const tombola = document.getElementById("tombola");
const button = document.getElementById("bottone");

for (let i = 0; i <= 89; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("caselle");

  newDiv.innerText = i + 1;

  tombola.appendChild(newDiv);
}

const box = document.createElement("h3");

const tombola = document.getElementById("tombola");
const button = document.getElementById("bottone");
const tabella = [];

const newDiv = document.createElement("div");
for (let i = 0; i <= 99; i++) {
  newDiv.classList.add("caselle");

  const box = document.createElement("h3");
  box.innerText = i + 1;
  newDiv.appendChild(box);
  tombola.appendChild(newDiv);
}

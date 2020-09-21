let binaryTable = [128, 64, 32, 16, 8, 4, 2, 1];

// Set the array of random binary numbers onload
let binaryNumbers = Array(8).fill(undefined);
binaryNumbers = binaryNumbers.map(() => Math.round(Math.random()));

// Load page according to the array
setIconAndNumbers();
setDecimal();

function setIconAndNumbers() {
  let index = 0;
  binaryNumbers.forEach((number) => {
    // Set icon
    let idImg = `light-bulb${index}`;
    let elImg = document.getElementById(idImg);
    if (number) {
      elImg.src = "./assets/light-bulb-on.svg";
    } else {
      elImg.src = "./assets/light-bulb-off.svg";
    }

    // Set number
    let idP = `binary-digit${index}`;
    let elP = document.getElementById(idP);
    elP.textContent = number;

    // Update index to continue looping
    index++;
  });
}

function setDecimal() {
  let sum = 0;

  for (let i = 0; i < binaryTable.length; i++) {
    sum += binaryNumbers[i] * binaryTable[i];
  }
  document.getElementById("decimal").innerHTML = sum;
}

// Set a loop listening to all light-bulbs so that it updates onclick
let elements = document.getElementsByClassName("binary__item__light-bulb");
for (let i = 0; i < elements.length; i++) {
  console.log(i);
  elements[i].addEventListener("click", update);
}

// Function that updates the array of ninary numbers then reruns the load
function update() {
  // Extract from the object id the corresponding index of the array
  let index = checkIndex(this.id)[0];

  // Update the array based on the existing value of the array
  if (binaryNumbers[index]) {
    binaryNumbers[index] = 0;
  } else {
    binaryNumbers[index] = 1;
  }

  setIconAndNumbers();
  setDecimal();
}

function checkIndex(id) {
  return id.match(/.$/);
}

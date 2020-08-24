// Set global array with the initial binary number
let binaryNumbers = [0, 1, 0, 1, 0, 1, 0, 1];
let binaryTable = [128, 64, 32, 16, 8, 4, 2, 1];

// Set a loop listening to all light-bulbs
let elements = document.getElementsByClassName("binary__item__light-bulb");
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", update);
}

function update() {
  let index = checkIndex(this.id)[0];
  changeIcon(this);
  updateDigit(index);
  updateDecimal();
}

function changeIcon(obj) {
  let regex = /on/;
  let imageSource = obj.src;

  if (regex.test(imageSource)) {
    obj.src = imageSource.replace("on", "off");
  } else {
    obj.src = imageSource.replace("off", "on");
  }
}

function checkIndex(id) {
  return id.match(/.$/);
}

function updateDigit(index) {
  let str = "binary-digit";

  // Get proper id string
  str = str.split("");
  str.push(index);
  str = str.join("");

  // Change number displayed
  let el = document.getElementById(str);
  if (el.innerHTML == 1) {
    el.innerHTML = 0;
  } else {
    el.innerHTML = 1;
  }

  // Update array with binary number
  binaryNumbers[index] = parseInt(el.innerHTML, 2);
}

function updateDecimal() {
  let sum = 0;

  for (let i = 0; i < binaryTable.length; i++) {
    sum += binaryNumbers[i] * binaryTable[i];
  }
  document.getElementById("decimal").innerHTML = sum;
}

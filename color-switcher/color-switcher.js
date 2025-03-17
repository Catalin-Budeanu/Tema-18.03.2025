// 3.5 JS in Browser

// DOM - Document Object Model
// il accesam cu document

// document.querySelector('.color-switcher-container button');

// fiecare element selectat il bagam intr-o constanta
// Cand selectorul nu este bun => constanta o sa ne dea null

const sectionContainer = document.querySelector('.color-switcher-container');
const switchColorButton = document.querySelector(
  '.color-switcher-container button'
);

const clickCounter = document.querySelector('.click-count');

let clickCount = 0;

// 1) #AD636C
// 2) #009B72
// 3) #6761AB
// 4) #347E8D
// 5) #798186

const colors = ['#AD636C', '#009B72', '#6761AB', '#347E8D', '#798186'];

let index = 1;

const switchColor = () => {
  sectionContainer.style.backgroundColor = colors[index];

  index++;

  if (index === colors.length) {
    index = 0;
  }

  clickCount++;
  clickCounter.textContent = clickCount;
};

// let counter = 0;

// const switchColor = () => {
//   counter++;

//   if (counter === 1) {
//     sectionContainer.style.backgroundColor = '#009B72';
//   } else if (counter === 2) {
//     sectionContainer.style.backgroundColor = '#6761AB';
//   } else if (counter === 3) {
//     sectionContainer.style.backgroundColor = '#347E8D';
//   } else if (counter === 4) {
//     sectionContainer.style.backgroundColor = '#798186';
//   } else {
//     counter = 0;
//     sectionContainer.style.backgroundColor = '#AD636C';
//   }
// };

switchColorButton.addEventListener('click', switchColor);

// Tema 18.03.2025

// 1. pe click sa se schimbe hex-ul din h2
// 2. pe click sa se schimbe culoarea hex-ului din h2

const changeHex = document.querySelector('.color-span-text');
const changeHexCard = document.querySelector('.color-switcher-container h2');

const textHex = ['#AD636C', '#009B72', '#6761AB', '#347E8D', '#798186'];
let indexHex = 0;

const switchHex = () => {
  changeHex.textContent = textHex[indexHex];
  changeHexCard.style.backgroundColor = textHex[indexHex];

  indexHex++;

  if (indexHex === textHex.length) {
    indexHex = 0;
  }
};

changeHexCard.addEventListener('click', switchHex);

// 3. in pagina in dreapta sus sa apara un mesaj "Clicked: X times" care se creste la fiecare click.
// Initial o sa fie 0

// Exercitiul se afla integrat in exercitiul facut la clasa

// const sectionContainer = document.querySelector('.color-switcher-container');
// const switchColorButton = document.querySelector(
//   '.color-switcher-container button'
// );

// const clickCounter = document.querySelector('.click-count');

// let clickCount = 0;

// // 1) #AD636C
// // 2) #009B72
// // 3) #6761AB
// // 4) #347E8D
// // 5) #798186

// const colors = ['#AD636C', '#009B72', '#6761AB', '#347E8D', '#798186'];

// let index = 1;

// const switchColor = () => {
//   sectionContainer.style.backgroundColor = colors[index];

//   index++;

//   if (index === colors.length) {
//     index = 0;
//   }

//   clickCount++;
//   clickCounter.textContent = clickCount;
// };

// 4. langa butonul "Click me" sa se adauge
//  un buton "Reset" care sa te duca inapoi la prima culoare

const resetButton = document.querySelector('.reset-color-button');
const container = document.querySelector('.color-switcher-container');

// const colors = ['#AD636C', '#009B72', '#6761AB', '#347E8D', '#798186'];
const resetColorButton = () => {
  container.style.backgroundColor = colors[0];
};

resetButton.addEventListener('click', resetColorButton);

// 5. tranzitie pe culoarea de background ( asta pe partea de CSS)
// .color-switcher-container {
// transition-delay: 1s;
// }

// 6. in pagina in stanga sus sa apara un buton "See all colors",
//  iar pe click sa afiseze un alert cu toate culorile folosite

const buttonAllColors = document.querySelector('.colors-button-alert');
// const colors = ['#AD636C', '#009B72', '#6761AB', '#347E8D', '#798186'];

const alertAllColors = () => {
  alert(colors.join(', '));
};

buttonAllColors.addEventListener('click', alertAllColors);

// Extra: butonul "Click me" sa devina "Next", iar in stanga sa se adauge un buton "Previous", iar navigarea prin culori sa se faca cu astea 2 butoane.

// const colors = ['#AD636C', '#009B72', '#6761AB', '#347E8D', '#798186'];

const previousColorButton = document.querySelector('.previous-color-button');

let indexPreviousColors = 1;
const previousColor = () => {
  sectionContainer.style.backgroundColor = colors[indexPreviousColors - 1];

  indexPreviousColors++;

  if (indexPreviousColors === colors.length) {
    indexPreviousColors = 0;
  }
};

previousColorButton.addEventListener('click', previousColor);

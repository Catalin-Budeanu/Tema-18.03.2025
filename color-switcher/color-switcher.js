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
const switchTexthex = document.querySelector('.color-span-text');
const clickCounter = document.querySelector('.click-count');
const switchColorHex = document.querySelector('.color-switcher-container h2');
const resetColorButton = document.querySelector('.reset-color-button');
const colorsButtonAlert = document.querySelector('.colors-button-alert');

// 1) #AD636C
// 2) #009B72
// 3) #6761AB
// 4) #347E8D
// 5) #798186

const colors = ['#AD636C', '#009B72', '#6761AB', '#347E8D', '#798186'];

let index = 0;
let clickCount = 0;

// ---Button NEXT----
const switchColor = () => {
  index++;
  sectionContainer.style.backgroundColor = colors[index];
  switchTexthex.textContent = colors[index];
  switchColorHex.style.backgroundColor = colors[index]; //am facut asa pentru a se deosebii backgroundul din h2 de backgroundul de pe body

  if (index === colors.length) {
    index = 0;
  }

  clickCount++;
  clickCounter.textContent = clickCount;
};

switchColorButton.addEventListener('click', switchColor);

// ----Button PREVIOUS----
const previousButtonColor = document.querySelector('.previous-color-button');

const previousColor = () => {
  index--;

  if (index === -1) {
    index = colors.length - 1;
  }
  sectionContainer.style.backgroundColor = colors[index];
  switchTexthex.textContent = colors[index];
  switchColorHex.style.backgroundColor = colors[index];
};
previousButtonColor.addEventListener('click', previousColor);

// ----Button RESET -----
const resetColorBackground = () => {
  index = 0;
  sectionContainer.style.backgroundColor = colors[0];
  switchTexthex.textContent = colors[0];
  switchColorHex.style.backgroundColor = colors[0];
};
resetColorButton.addEventListener('click', resetColorBackground);

const alertColors = () => {
  alert(colors.join(', '));
};
colorsButtonAlert.addEventListener('click', alertColors);

// 1. pe click sa se schimbe hex-ul din h2
// 2. pe click sa se schimbe culoarea hex-ului din h2
// 3. in pagina in dreapta sus sa apara un mesaj "Clicked: X times" care se creste la fiecare click. Initial o sa fie 0
// 4. langa butonul "Click me" sa se adauge un buton "Reset" care sa te duca inapoi la prima culoare
// 5. tranzitie pe culoarea de background
// 6. in pagina in stanga sus sa apara un buton "See all colors", iar pe click sa afiseze un alert cu toate culorile folosite
// Extra: butonul "Click me" sa devina "Next", iar in stanga sa se adauge un buton "Previous",
// iar navigarea prin culori sa se faca cu astea 2 butoane.

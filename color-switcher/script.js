// good', 'bad', 'bad', 'bad', 'bad'
const well = (x) => {
  let counter = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good') {
      counter++;
    }
  }
  if (counter === 1 || counter === 2) {
    return 'Publish!';
  }
  if (counter > 2) {
    return 'I smell a series';
  }
  if (counter === 0) {
    return 'Fail';
  }
};
console.log(well("'good', 'bad', 'bad', 'bad', 'bad'"));

// Metoda 2

const well2 = (x) => {
  // filter-ul pastreaza in array toate elementele care indeplinesc conditia
  const filteredArray = x.filter((element) => element === 'good');
  const counter = filteredArray.length;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good') {
      counter++;
    }
  }
  if (counter === 1 || counter === 2) {
    return 'Publish!';
  }
  if (counter > 2) {
    return 'I smell a series';
  }
  if (counter === 0) {
    return 'Fail';
  }
};

const getNameInitials = (fullName) => {
  const firstNameInitials = fullName[0];

  for (let i = 0; i < fullName.length; i++) {
    if (fullName[i] === ' ') {
      return firstNameInitials + fullName(i + 1);
    }
  }
};

const getNameInitials2 = (fullName) => {
  const splittedName = fullName.split(' '); // Ex; Cristian Predusca
  return splittedName[0][0] + splittedName[1][0];

  // Primul 0 este da la stringul "cristiam" iar al doilea de 0 e de la prima litera din cuvant
  // Al doilea splittedName[1][0] primul 1 vine de la string-ul "Predusca" iar 0 vine de la prima litera din stringul "Predusca"
};

// cristian Predusca
const getNameInitials3 = (fullName) => {
  let result = '';

  for (let i = 0; i < fullName.length; i++) {
    // "C" = "C".upperCase / true
    // "r" = "r".upperCase / false
    if (fullName !== ' ' && fullName[i] === fullName[0].toUpperCase()) {
      result += fullName[1]; // "" + "C" = "C" / "C" + "P" = "CP"
    }
  }
  return result;
};

console.log(getNameInitials3('Cristian Predusca'));

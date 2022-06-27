// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  let resultado;
  if (valor1 === true && valor2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let areaTriangulo;
  areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins = wins * 3;
  let totalPontos = wins + ties;
  return totalPontos;  
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let count = 0;
  let highest = numeros[0];
  for (let index = 0; index < numeros.length; index+=1) {
    if (highest === numeros[index]){
      count+=1;
    } else if (highest < numeros[index]) {
      highest = numeros[index];
      count = 1;
    }
  }
  return count; 
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

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
  let vitorias = wins * 3;
  let totalPontos = vitorias + ties;
  return totalPontos;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let count = 0;
  let highest = numeros[0];
  for (let index = 0; index < numeros.length; index += 1) {
    if (highest === numeros[index]) {
      count += 1;
    } else if (highest < numeros[index]) {
      highest = numeros[index];
      count = 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (cat2 - mouse < cat1 - mouse) {
    return 'cat2';
  }

  if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  }
  if (cat1 == cat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let array = [];
  for (let index in numeros) {
    if (numeros[index] % 3 === 0 && numeros [index] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (numeros[index] % 5 === 0) {
      array.push('buzz');
    } else if (numeros[index] % 3 === 0) {
      array.push('fizz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(frase) {
  // seu código aqui
  let codigo = frase
  codigo = codigo.replace(/a/g, '1');
  codigo = codigo.replace(/e/g, '2');
  codigo = codigo.replace(/i/g, '3');
  codigo = codigo.replace(/o/g, '4');
  codigo = codigo.replace(/u/g, '5');
  return codigo;
}

function decode(codigo) {
  // seu código aqui
  let frase = codigo
  frase = frase.replace(/1/g, 'a');
  frase = frase.replace(/2/g, 'e');
  frase = frase.replace(/3/g, 'i');
  frase = frase.replace(/4/g, 'o');
  frase = frase.replace(/5/g, 'u');
  return frase;
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

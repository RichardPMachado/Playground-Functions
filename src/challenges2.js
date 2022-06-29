// Desafio 11
function confirmaNumero1(numeroTelefone) {
  let numeroValidado = true;
  for (let index in numeroTelefone) {
    if (numeroTelefone[index] < 0 || numeroTelefone[index] > 9) {
      numeroValidado = false;
    }
  }
  return numeroValidado;
}
function confirmaNumero2(numeroTelefone) {
  for (let numero of numeroTelefone) {
    // sobre o método FILTER() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // sobre ARROW FUNCTION () => {} https://hcode.com.br/blog/entendendo-arrow-functions-de-uma-vez-por-todas
    if (numeroTelefone.filter((numeros) => numeros === numero).length >= 3) {
      return false;
    }
  }
}

function generatePhoneNumber(numeroTelefone) {
  // seu código aqui
  if (numeroTelefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (confirmaNumero1(numeroTelefone) === false || confirmaNumero2(numeroTelefone) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let telefone = numeroTelefone.join('');
  let resultado = telefone.replace(/(\d{0})(\d{2})(\d{0})(\d{5})/, '$1($2)$3 $4-');
  return resultado;
}

// Desafio 12
// seu código aqui
function triangleCheck(lineA, lineB, lineC) {
  let listaLine = [lineA, lineB, lineC];
  let condicaoTotal = true;
  for (let index = 1; index <= 3; index += 1) {
    if (listaLine[0] > listaLine[1] + listaLine[2]
      || listaLine[0] < Math.abs(listaLine[1] - listaLine[2])) {
      condicaoTotal = false;
    }
    let apoio = listaLine[0];
    let apoio2 = listaLine[1];
    let apoio3 = listaLine[2];
    listaLine[0] = apoio2;
    listaLine[1] = apoio3;
    listaLine[2] = apoio;
  }
  return condicaoTotal;
}

//   if (
//     lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) && lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) && lineC < lineA + lineB && lineB > Math.abs(lineA - lineC)) {
//     return true;
//   }
//   return false;
// }

// Desafio 13
function hydrate(frase) {
  // seu código aqui
  let quantidade = 0;
  for (const valor of frase) {
    if (valor >= 1) {
      let valorNum = parseInt(valor);
      quantidade += valorNum;
    }
  }
  if (quantidade === 1) {
    return `${quantidade} copo de água`;
  } else {
    return `${quantidade} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

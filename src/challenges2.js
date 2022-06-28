// Desafio 11
function generatePhoneNumber(numeroTelefone) {
  // seu código aqui
  if (numeroTelefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  } for (let index in numeroTelefone) {
    if (numeroTelefone[index] < 0 || numeroTelefone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let telefone = numeroTelefone.join('');
  let resultado = telefone.replace(/(\d{0})(\d{2})(\d{0})(\d{5})/, '$1($2)$3 $4-');
  return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (
    lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) && lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) && lineC < lineA + lineB && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  return false;
}

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

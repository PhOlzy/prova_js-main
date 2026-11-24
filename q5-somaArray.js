// Questão 5: somaArray(arr)
// Receba um array de números e retorne a soma de todos os elementos.
// Um array vazio deve resultar em 0.

function somaArray(arr) {
  // escreva sua solução aqui
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}

// Testes (não altere esta parte)
console.log(somaArray([1, 2, 3, 4]) === 10 ? "OK" : "ERRO");
console.log(somaArray([]) === 0 ? "OK" : "ERRO");

/* E1
  Crie uma função que recebe duas strings
  e retorna a de maior comprimento.
*/

window.exercise01 = function() {
  console.log("resultado ex1: ");
  maiorStrig("Teste de estagio", "Eu passei no Teste");
};

function maiorStrig(str1, str2) {
  const arrStr = [str1, str2];
  const resultados = arrStr.reduce(function (atual, proximo) {
    return atual.length > proximo.length ? atual : proximo;
  });
  return console.log(resultados);
}
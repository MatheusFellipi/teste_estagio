/* E2
  Dado a seguinte string `‘teste 1 de 2 string 3’`,
  substitua todas as ocorrências de números por `$`.
*/

window.exercise02 = function () {
  console.log("resultado ex2: ");
  const resultado = substituir("teste 1 de 2 string 3");
  console.log(resultado);
};

function substituir(str) {
  return str.replace(/\d+/g, "$");
}

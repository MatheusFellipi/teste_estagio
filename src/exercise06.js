/* E6
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Imprima a soma das idades (sugestão: utilizar o método reduce (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce))

 */

window.exercise06 = function () {
  console.log("resultado ex6: ");
  let result = soma();
  console.log(`a soma das idade sao: ${result}`);
};

function soma() {
  let total = usuario.reduce(getTotal, 0);
  return total;
}

function getTotal(total, item) {
  return total + item.age;
}

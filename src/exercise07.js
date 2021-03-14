/* E7
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Encontre o primeiro objeto que possui uma pessoa com a idade menor que 25
e imprima seu nome. Caso não encontre, imprima que nenhum resultado foi encontrado.

 */

window.exercise07 = function () {
  console.log("resultado ex7: ");
  buscarIdade(25);
};

function buscarIdade(ageFind) {
  let result = [];
  for (let i = 0; i < usuario.length; i++) {
    const element = usuario[i];
    if (element.age < ageFind && ageFind === 25) {
      result.push(element);
      imprimir(result);
      return;
    }
    if (element.age < ageFind && ageFind === 30) {
      result.push(element);
    }
  }
  imprimir(result);
}

function imprimir(result) {
  if (result.length === 0) {
    return console.log("nenhum resultado foi encontrado");
  } else {
    result.map((item) => {
      console.log(
        `Olá!! eu sou ${item.first_name} ${item.last_name} e tenho ${item.age}`
      );
    });
  }
}

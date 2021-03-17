const url = `https://viacep.com.br/ws/75705070/json/`;

const consuta = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(atribuirCampos(data));
    });
};

function atribuirCampos(data) {
  let localidade = data.localidade;
  let uf = data.uf;
  let logradouro = data.logradouro;
  let numero = 2055;

  let results = `ENDERECO: ${logradouro}, NUMERO: ${numero}, ${localidade}/${uf} `;
  
  return results;
}

window.exercise04 = function () {
  console.log("resultado ex4: ");
  consuta();
};

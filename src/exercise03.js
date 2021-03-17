/* E3
  Dado o objeto `{4: ‘a’, 3: ‘e’, 1: ‘i’, 5: ‘s’}`,
  substitua os números na frase `‘T35t3 d3 35t4g1o’` conforme a sua respectiva letra
*/

const data = {
  4: "a",
  3: "e",
  1: "i",
  5: "s",
};

window.exercise03 = function () {
  console.log("resultado ex3: ");
  console.log(replace("T35t3 d3 35t4g1o"));
};

function replace(str) {
  return str
    .split("")
    .map((char) => data[char] || char)
    .join("");
}

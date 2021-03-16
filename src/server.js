const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status == 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

app.listen(3333, () => console.log("server is runing"));



// Exemplo de resposta do MYSQL
const resultados = [
  {
      coluna1: 'AAAAA',
      coluna2: 'XXXXX'
  },{
      coluna1: 'AAAAA',
      coluna2: 'YYYYY'
  },{
      coluna1: 'BBBBB',
      coluna2: 'ZZZZZ'
  },
]
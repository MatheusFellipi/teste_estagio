
## necessesario
 - [postman](https://www.postman.com/) ou [insomnia](https://insomnia.rest/download/)

- [node.js](https://nodejs.org)
## Iniciar o projeto

```
yarn ou npm
```

## dependência utilizada

* express
* knex 
* pg
* nodemon (devDependencies)

## documentação

- Navers

  - index Rota para listagem dos Navers, usa `get` `navers`

- (Show) Rota para detalhar informações de um único naver através de seu identificador usa `get` `navers/:id`

- (Store) Rota de Criação de Naver `post` `navers`
            ```
                {
                   "name": "matheus fellipi",
                   "job_role": "Front end",
                   "birthdate": "1998-12-03",
                   "admission_date": "2021-03-14"
                }
            ```

 - Projetos
    - (Index) Rota para listagem dos Projetos, `get` `project`


    - (Show) Rota para detalhar um projeto `get` `project`


    - (Store) Rota de Criação de Projeto
              ```
                {
                    name: Projeto Bom,
                    navers: [1]
                }
              ```

 ## sobre o banco (knex)

  eu utilizei o postegres, voce poder mudar as configuracao no `knexfile`

  ```
    development: {
    client: "pg",
    connection: {
      database: "navers",
      user: "postgres",
      password: "password",
    },
  ```             

  - ultilize `npx knex migrate:latest ` para criar as tabelas
  - pode ultilizar os `post` para add informacao



## Dificuldades
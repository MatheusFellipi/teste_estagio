### Teste pratico
  
## necessesario

* [postman](https://www.postman.com/) ou [insomnia](https://insomnia.rest/download/)

* [node.js](https://nodejs.org) 
* [yarn](https://yarnpkg.com) ou [npm](https://nodejs.org) 

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

  - (index) Rota para listagem dos Navers, usa `get` `navers`


                  http://localhost:3333/navers
               


- (Show) Rota para detalhar informações de um único naver através de seu identificador usa `get` `navers/:id`


              
                http://localhost:3333/navers?id=14

              


- (Store) Rota de Criação de Naver `post` `navers`

           
           
                {
                   "name": "matheus fellipi",
                   "job_role": "Front end",
                   "birthdate": "1998-12-03",
                   "admission_date": "2021-03-14"
                }
           
           


 - Projetos
    - (Index) Rota para listagem dos Projetos, `get` `project`

         
         
            http://localhost:3333/navers?id=14
          
          

    - (Show) Rota para detalhar um projeto `get` `project/:id`

       
       
          http://localhost:3333/navers?id=14
        
        

    - (Store) Rota de Criação de Projeto
    
              
                {
                    name: Projeto Bom,
                    navers_id: 14,
                }
              
              

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
* nao consequi export o banco de dados nao sei o motivo mais no pgAdmin a opcao export para min esta desabilitada.

* outro coisa que eu nao consequi fazer o returno do banco assim tentei ate fazer um tradamento
colocando um array mais nao ficou legal.
    ```
      {
          id: 1, 
          name: Fulano, 
          birthdate: 1998-06-12, 
          admission_date: 2020-06-12,, 
               job_role: Desenvolvedor
          projects: [
              { 
                  id: 3, 
                  name: Projeto muito Bom
              }
          ] 
      }
    ```
    a resposda do show ficou assim:
    ```
      [
        {
          "id": 14,
          "name": "matheus fellipi",
          "job_role": "Front end",
          "birthdate": "1998-12-03T03:00:00.000Z",
          "admission_date": "2021-03-14T03:00:00.000Z",
          "created_at": "2021-03-15T22:46:10.412Z",
          "updated_at": "2021-03-15T22:46:10.412Z",
          "project": "Meu projeto"
        }
      ]
    ``` 

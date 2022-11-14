
# BookList  

## Sobre

O Book-List é um código back-end feito para testar uma nova tecnologia que estou estudando, como por exemplo o typescript.
 Esse código ainda está em desenvolvimento, mas já é possível cadastrar usuário, cadastrar livros, apagar da listar algum livro, atualizar o status se você 
pretende ler, se achou o livro ruim ou bom.



## Passo a passo para o desenvolvimento

1. Clonar este repositório;
2. Instale todas as dependências;
```
npm i
```
3. Crie um banco de dados PostgresSQL com o nome que você quiser:
```
sudo -i -u postgres

psql

CREATE DATABASE nome_do_banco;
```

4. Copie e cole no terminal as tabelas prontas que estão no arquivo:
 ```
 dump.sql
 ```
5. Em outro terminal, execute a aplicação:

```
npx nodemon src/server.ts
```

## Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:

[![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

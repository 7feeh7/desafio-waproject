# studio-ghibli-backend

Api desenvolvida para ser um catálogo de filmes com informações básicas de título, descrição, diretor e produtor.
Para acessar o link da API publicada no HEROKU, [clique aqui](https://studio-ghibli-backend.herokuapp.com/films).

## Features
- [x] Consultar API externa de filmes e extrair informações de título, banner, descrição, diretor e produtor.
- [x] Salvar informações em um banco de dados
- [x] Consulta de filmes com paginação
- [x] Atualizar base

## Tecnologias 
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Axios](https://github.com/axios/axios)
- [MongoDb](https://www.mongodb.com/)
- [Jest](https://jestjs.io/pt-BR/)

## Começando
> OBS: E NECESSARIO ESTÁ COM UM GERENCIADOR DE PACOTES SENDO O YARN OU NPM INSTALADO NA MÁQUINA

#### Instalando dependências
```
$ yarn
```
or
```
$ npm install
```

## Executando

### Projeto
> OBS: E NECESSARIO CONFIGURAR UM ARQUIVO .ENV COM A STRING DE CONEXAO COM O MONGODB, CONFORME O ENV.EXAMPLE
```
$ yarn dev
```
or
```
$ npm run dev
```

### Testes
> OBS: E NECESSARIO CONFIGURAR UM ARQUIVO .ENV.TEST COM A STRING DE CONEXAO LOCAL, COM O MONGODB, CONFORME O ENV.EXAMPLE
```
$ yarn test
```
or
```
$ npm run test
```

## Documentação
Para mais detalhes sobre as rotas do projeto, [clique aqui.](https://documenter.getpostman.com/view/15611768/2s8YmUKeMx)
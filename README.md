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

### Rodando
> OBS: E NECESSARIO CONFIGURAR UM ARQUIVO .ENV COM A STRING DE CONEXAO COM O MONGODB, CONFORME O ENV.EXAMPLE
```
$ yarn dev
```
or
```
$ npm run dev
```

## Documentação
Para mais detalhes sobre as rotas do projeto, [clique aqui.](https://documenter.postman.com/preview/15611768-1ffba950-fd5c-4860-bd80-3b2b6309d5e0?versionTag=latest&apiName=CURRENT&version=latest&top-bar=FFFFFF&right-sidebar=303030&highlight=EF5B25&environment=15611768-a7a7efb0-c877-4c6e-9a6c-4c6d03825a90&documentationLayout=classic-double-column)
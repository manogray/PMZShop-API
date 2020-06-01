# PMZShop (API)

## 👨🏼‍💻 Programador

- [Luis Mota](https://github.com/manogray)

## 🚀 Tecnologias

- Express — Framework web para Node.js
- Sequelize — ORM SQL para Node.js
- Jest — Framework de teste para Node.js

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/) (v12.16.2)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install) (v1.22.4)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta:
```
cd PMZShop-API
```
3. Instale as dependências:
```
yarn
```
4. Configure o banco de dados:
```
docker-compose up -d postgres
```
5. Execute as migrations:
```
yarn sequelize db:migrate
```
6. Execute as seeds:
```
yarn sequelize db:seed:all
```
7. Inicie o servidor:
```
yarn start
```

A configuração do front-end pode ser encontrada [aqui](https://github.com/manogray/pmzshop-web)
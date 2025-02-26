# API Games

API RESTful básica para gerenciamento de games, desenvolvida com **Node.js**, **Express**, **Sequelize** e **MySQL**.

## Tecnologias Utilizadas

- **Node.js**
- **Express** (Framework para APIs)
- **Sequelize** (ORM para MySQL)
- **MySQL** (Banco de dados relacional)
- **Body-Parser** (Middleware para parsing de requisições JSON)

## Estrutura do Projeto

O projeto segue uma estrutura organizada em pastas:

```
api_games/
├── data/         # Configuração do banco de dados
├── controllers/  # Controladores das rotas
├── models/       # Modelos Sequelize
├── routers/      # Definição das rotas
├── index.js      # Arquivo principal
└── package.json  # Dependências do projeto
```

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/api_games.git
   cd api_games
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure o banco de dados MySQL no arquivo `data/database.js`.
4. Execute as migrações do Sequelize:
   ```sh
   npx sequelize db:migrate
   ```
5. Inicie a API:
   ```sh
   npm start
   ```

## Rotas Disponíveis

A API possui um CRUD básico para games:

| Método | Rota          | Descrição                      |
|---------|--------------|--------------------------------|
| GET     | /games       | Lista todos os games          |
| GET     | /game/:id   | Retorna um game por ID        |
| POST    | /games       | Cria um novo game             |
| PUT     | /games/:id   | Edita um game existente       |
| DELETE  | /games/:id   | Remove um game do banco      |


## Contribuição

Sinta-se à vontade para contribuir com melhorias! Basta fazer um fork, criar uma branch e abrir um pull request.

## Licença

Este projeto está sob a licença MIT.


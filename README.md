# Autenticação de Usuários Simples

Esse projeto trata de uma api de criação e autenticação de usuários.

## Tecnologias utilizadas

Para o desenvolvimento do projeto as seguintes tecnologias foram utilizadas:

- Node JS
- Express
- Sequelize ORM

## Funções

- [x] Criar um usuário passando o nome, e-mail e senha.
- [x] Autenticar o usuário passando as credenciais (e-mail e senha).

## Como utilizar

- Depois de realizar o clone do projeto, instale as dependências com o comando `yarn`.
- Execute as migrations com o comando `npx sequelize-cli db:migrate`.
- Após isso, execute o servidor da aplicação usando o comando `yarn dev:server`.

## Rotas

- `POST /users/` - Realiza a criação de um usuário - Deve-se passar
um JSON com os campos: name, email e password.

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "123456"
}
```

- `POST /sessions/` - Realiza a autenticação de um usuário criado - Deve-se passar
um JSON com os campos: email e password.

```json
{
  "email": "johndoe@example.com",
  "password": "123456"
}
```

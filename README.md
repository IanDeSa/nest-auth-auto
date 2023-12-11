## Instalação

```bash
$ npm install
```

## Variáveis de ambiente

```
# prisma
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"

# docker
DB_PASSWORD=senha_do_banco
DB_NAME=nome_do_banco

# nest
PORT=3000
JWT_SECRET="digite aqui o seu texto secreto"
```

## Docker

### Para subir o container com o banco de dados
```bash
$ docker-compose up -d
```

### Para descer o container
```bash
$ docker-compose down
```

## Migrar o banco de dados
```bash
$ npx prisma migrate dev --name init
```

## Rodando o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Teste

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Swagger e documentação
```url
$ http://localhost:3000/api
```

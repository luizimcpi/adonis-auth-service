# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup (How this project has been generated)

Use the adonis command to install the blueprint

```bash
adonis new adonis-auth-service --api-only --yarn
```

or manually clone the repo and then run `npm install`.


### Migrations
First run

```
yarn add pg
```

Add Following content to the .env file (Change your db credentials)
```
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=GmpGT99dooIJGBgknf30uhYLxveSBCFA
DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_DATABASE=adonis
HASH_DRIVER=bcrypt
```

Run the following command to run startup migrations.

```js
adonis migration:run
```
### Create auth controller
adonis make:controller Auth

Choose For Http... Option

## Docker postgres with PGADMIN
```
1-docker pull postgres

2-docker pull dpage/pgadmin4

3-docker network create --driver bridge postgres-network

Windows
4-docker run --name teste-postgres --network=postgres-network -e "POSTGRES_PASSWORD=postgres" -p 5432:5432 -v E:\Desenvolvimento\PostgreSQL:/var/lib/postgresql/data -d postgres

Linux
4-docker run --name teste-postgres --network=postgres-network -e "POSTGRES_PASSWORD=postgres" -p 5432:5432 -v /home/usuario/Desenvolvimento/PostgreSQL:/var/lib/postgresql/data -d postgres

5-PgAdmin - 
docker run --name teste-pgadmin --network=postgres-network -p 15432:80 -e "PGADMIN_DEFAULT_EMAIL=user@rmail.com" -e "PGADMIN_DEFAULT_PASSWORD=postgres" -d dpage/pgadmin4

Acessar 
 http://localhost:15432

 email: user@rmail.com
 password: postgres

 Servers -> new server -> 
 Host: teste-postgres
 port: 5432
 maintenanceDatabase: postgres
 username: postgres
 password: postgres
 ```
## ENV

DB_HOST='127.0.0.1' <br />
DB_PORT=5433 <br />
DB_USERNAME='postgres' <br />
DB_PASSWORD='postgres' <br />
DB_NAME='postgres' <br />

## Installation

```bash
$ npm install
```

## Running the docker

```bash
$ docker compose up
```

## Running the app

```bash
# start docker
$ docker compose up

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
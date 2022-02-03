# Interviews are

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# watch mode
$ npm run start:dev
```

Example command to run:
```sh
curl -X POST 127.0.0.1:3000/onboarding -H 'Content-Type: application/json' -d '{"name":"A","key": "pubA"}'
curl -X POST 127.0.0.1:3000/onboarding -H 'Content-Type: application/json' -d '{"name":"B","key": "pubB"}'
curl -X POST 127.0.0.1:3000/onboarding -H 'Content-Type: application/json' -d '{"name":"C","key": "pubC"}'

curl -X POST 127.0.0.1:3000/onboarding -H 'Content-Type: application/json' -d '{"name":"D","key": "pubD"}'
curl -X POST 127.0.0.1:3000/onboarding -H 'Content-Type: application/json' -d '{"name":"E","key": "pubE"}'

curl -X POST 127.0.0.1:3000/offboarding -H 'Content-Type: application/json' -d '{"key": "pubA"}'
curl -X POST 127.0.0.1:3000/offboarding -H 'Content-Type: application/json' -d '{"key": "pubB"}'
curl -X POST 127.0.0.1:3000/offboarding -H 'Content-Type: application/json' -d '{"key": "BLABLA"}'
```

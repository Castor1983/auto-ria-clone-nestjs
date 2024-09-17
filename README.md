<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Опис

# Проєкт на NestJS з підключенням до Postgres, Redis та AWS. Являє собою серверну частину платформи розміщення оголошень з продажу авто в Україні

## Вимоги
Перед початком переконайтеся, що у вас встановлені наступні інструменти:
```bash
- [Node.js](https://nodejs.org/) (версія 16 або новіша)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [Docker](https://www.docker.com/)
- [AWS CLI](https://aws.amazon.com/cli/)
```

## Налаштування баз даних
```bash
### PostgreSQL

1. Встановіть PostgreSQL на вашій машині або скористайтеся хмарним сервісом, наприклад, [Heroku Postgres](https://www.heroku.com/postgres).
2. Створіть базу даних для проєкту.
3. Налаштуйте доступ до бази даних, створивши користувача і пароль.

### Redis

1. Встановіть Redis на вашій локальній машині або скористайтеся хмарним сервісом, наприклад, [RedisLabs](https://redislabs.com/).
2. Запустіть сервер Redis.

### AWS (S3)

Для інтеграції з AWS S3 вам потрібно створити новий бакет S3:

1. Перейдіть в [AWS S3 Console](https://s3.console.aws.amazon.com/s3/home).
2. Створіть новий бакет для збереження файлів.
3. Налаштуйте облікові дані AWS (ключ доступу та секретний ключ) для доступу до S3.
```

## Інсталяція

1. Клонуйте репозиторій:

```bash
git clone https://github.com/Castor1983/auto-ria-clone-nestjs


2. Встановіть залежності
$ npm install
```
## Налаштування оточення

```bash
файл Local.env у папці environments проєкту 
 заповніть його необхідними змінними оточення або налаштуйте 
 підключення баз данних дефолтними значеннями, які зазначені в ньому

```
## Компіляція та старт проєкту

```bash
## Запустіть скрипт у файлі package.json
 "start:docker:db": "docker compose --env-file ./environments/local.env -f docker-compose.db.yaml up --build",
## або виконайте команду в терміналі 
 npm run start:docker:db
 ##переконайтеся, що контейнери створені, виконавши команду
 docker ps
 ## створіть актуальну міграцію баз даних, запустивши скрипти по черзі у файлі package.json
 "migration:generate": "cross-var npm run typeorm -- migration:generate ./src/database/migrations/$npm_config_name",
 "migration:run": "npm run typeorm -- migration:run"
 ## або виконайте команди по черзі в терміналі 
npm run migration: generate
npm run migration: run
## скомпілюйте проєкт та запустіть сервер  запустивши скрипт у файлі package.json
"start:local": "nest start --watch -e \"node --env-file ./environments/local.env\"",
## або виконайте команду в терміналі 
 npm run start:local
 ## Сервер запуститься на  http://localhost:3001,
 ## Swagger запуститься на  http://localhost:3001/docs,
 
```






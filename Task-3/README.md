# Мережа з кількох контейнерів

Система складається із трьох взаємопов'язаних контейнерів:

* **Frontend** - Nginx, відображає список користувачів.
* **Backend** - Node.js + Express, надає REST API.
* **Database** - PostgreSQL, зберігає дані користувачів.

## Структура проєкту

```bash
Task-3/
├── docker-compose.yml
├── .env
├── init.sql
├── README.md
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
└── frontend/
    ├── Dockerfile
    ├── index.html
    └── nginx.conf
```

## Запуск

Для запуску всіх контейнерів:

```bash
podman-compose up --build
```

Після запуску Frontend доступний за адресою:

```text
http://localhost:8080
```

## REST API

Backend має endpoint:

```text
GET /api/users
```

Через Frontend запит проходить через Nginx:

```text
/api/users -> backend:3000/api/users
```

Також Backend можна перевірити напряму:

```bash
curl http://localhost:3000/api/users
```

## База даних

Використовується PostgreSQL.

Параметри підключення задаються у `.env`.

Backend підключається до PostgreSQL через ім'я контейнера:

```text
db:5432
```

Початкова структура бази та тестові записи створюються за допомогою:

```text
init.sql
```

Дані PostgreSQL зберігаються у volume:

```text
postgres_data
```

## Зупинка

Щоб зупинити контейнери:

```bash
podman-compose down
```

Щоб також видалити volume з даними PostgreSQL:

```bash
podman-compose down -v
```

Після видалення volume при наступному запуску `init.sql` буде виконано повторно.

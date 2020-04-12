'use strict';

const express = require(`express`);

// маршруты приложения
const articlesRoutes = require(`./routes/articles-routes`);
const myRoutes = require(`./routes/my-routes`);
const mainRoutes = require(`./routes/main-routes`);
// упрощает получение путей к файлам
const path = require(`path`);

// порт для сервера
const DEFAULT_PORT = 8080;
// директория для статики
const PUBLIC_DIR = `public`;

const app = express();

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

// Подключение маршрутов
app.use(`/articles`, articlesRoutes);
app.use(`/my`, myRoutes);
app.use(`/`, mainRoutes);

// Запуск сервера
app.listen(DEFAULT_PORT);
